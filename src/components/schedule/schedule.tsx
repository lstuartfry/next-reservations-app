"use client";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useEffect, useState } from "react";
import { subDays, startOfDay } from "date-fns";
import { Provider } from "@/types";

export default function Schedule({
  availabilities,
}: {
  availabilities: Provider["availabilities"];
}) {
  const [startDate, setStartDate] = useState<Date | undefined>();
  const [availableDates, setAvailableDates] = useState<string[]>([]);

  useEffect(() => {
    if (availabilities) {
      let dates = [];
      for (const availability of availabilities) {
        const date = startOfDay(availability.start).toISOString();
        dates.push(date);
        setAvailableDates(dates);
      }
    }
  }, [availabilities]);

  const dateFormat = "MMMM d, yyyy h:mm aa";

  const onChange = (date: Date) => {
    setStartDate(date);
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
    return time.getHours() >= 8 && time.getHours() <= 16;
  };

  return (
    <div className="flex justify-center mt-4">
      <DatePicker
        className="border-4 px-4 py-2"
        dateFormat={dateFormat}
        onChange={(date) => onChange(date as Date)}
        placeholderText="Select a date"
        selected={startDate}
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
    </div>
  );
}
