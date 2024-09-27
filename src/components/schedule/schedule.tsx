"use client";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useEffect, useState } from "react";
import {
  subDays,
  startOfDay,
  getMinutes,
  getDate,
  getHours,
  format,
} from "date-fns";
import { Provider } from "@/types";
import createReservation from "@/actions/client/create-reservation";

type Props = {
  clientId: number;
  providerId: number;
  availabilities: Provider["availabilities"];
  reservations: Provider["reservations"];
};

export default function Schedule({
  clientId,
  providerId,
  availabilities,
  reservations,
}: Props) {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>();
  const [availableDates, setAvailableDates] = useState<string[]>([]);

  useEffect(() => {
    if (availabilities) {
      const dates = [];
      for (const availability of availabilities) {
        const date = startOfDay(availability.startTime).toISOString();
        dates.push(date);
        setAvailableDates(dates);
      }
    }
  }, [availabilities]);

  const dateFormat = "MMMM d, yyyy h:mm aa";

  const onChange = (date: Date) => {
    setSelectedDate(date);
  };

  const filterDates = (date: Date) => {
    const day = startOfDay(date).toISOString();
    if (availableDates.includes(day)) return true;
    return false;
  };

  /*
    filter out time options:
    1. before 8am and after 5pm.
    2/ times already reserved 
  */
  const filterTimes = (time: Date) => {
    const date = startOfDay(time).toISOString();
    if (!availableDates.includes(date)) return false;

    const isWithinBusinessHours = time.getHours() >= 8 && time.getHours() <= 16;
    if (!isWithinBusinessHours) return false;

    let isAvailable = true;

    // filter out existing reservations
    if (reservations) {
      for (const reservation of reservations) {
        const { date } = reservation;
        const timeIsUnavailable =
          getDate(time) === getDate(date) &&
          getHours(time) === getHours(date) &&
          getMinutes(time) === getMinutes(date);
        if (timeIsUnavailable) {
          isAvailable = false;
        }
      }
    }
    return isAvailable;
  };

  const onClick = async () => {
    if (!selectedDate) return;

    await createReservation({
      clientId,
      providerId,
      date: format(selectedDate, dateFormat),
    });
  };

  return (
    <div className="flex flex-col justify-center mt-12">
      <DatePicker
        className="border-4 px-4 py-2"
        dateFormat={dateFormat}
        onChange={(date) => onChange(date as Date)}
        placeholderText="Select a date"
        selected={selectedDate}
        showTimeSelect
        timeFormat="p"
        timeIntervals={15}
        filterDate={filterDates}
        filterTime={filterTimes}
        excludeDateIntervals={[
          // exclude dates starting from tomorrow, and ending 1 year from today ('end' is required)
          { start: subDays(new Date(), 365), end: subDays(new Date(), 0) },
        ]}
      />
      <div className="mt-12 flex justify-center">
        <button
          className="bg-emerald-600 text-white px-4 py-2 disabled:bg-gray-200 rounded-lg disabled:text-gray-400"
          type="button"
          disabled={!selectedDate}
          onClick={onClick}
        >
          Confirm
        </button>
      </div>
    </div>
  );
}
