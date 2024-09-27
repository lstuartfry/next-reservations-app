"use client";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useState } from "react";
import { subDays, format } from "date-fns";
import SubHeader from "../ui/headers/subheader";
import createAvailability from "@/actions/provider/create-availability";

export default function Availability() {
  const [startTime, setStartTime] = useState<Date | undefined>();
  const [endTime, setEndTime] = useState<Date | undefined>();

  const dateFormat = "MMMM d, yyyy h:mm aa";

  const onStartTimeChange = (date: Date) => {
    setStartTime(date);
  };

  const onEndTimeChange = (date: Date) => {
    setEndTime(date);
  };

  const onSubmit = async () => {
    if (!startTime || !endTime) return;
    const start = format(startTime, dateFormat);
    const end = format(endTime, dateFormat);
    await createAvailability({ startTime: start, endTime: end });
  };

  /*
    filter out time options before 8am and after 5pm.
    NOTE - this would ideally be configurable by the provider directly.
  */
  const filterTimes = (time: Date) => {
    const isWithinBusinessHours = time.getHours() >= 8 && time.getHours() <= 16;
    if (!isWithinBusinessHours) return false;
    return true;
  };

  return (
    <div className="flex flex-col justify-center mt-12">
      <SubHeader>Enter a new start & end time span</SubHeader>
      <div className="flex flex-col mt-8 gap-4">
        <DatePicker
          className="border-4 px-4 py-2"
          dateFormat={dateFormat}
          onChange={(date) => onStartTimeChange(date as Date)}
          placeholderText="Select a start time"
          selected={startTime}
          showTimeSelect
          timeFormat="p"
          timeIntervals={15}
          filterTime={filterTimes}
          excludeDateIntervals={[
            // exclude dates starting from tomorrow, and ending 1 year from today ('end' is required)
            { start: subDays(new Date(), 365), end: subDays(new Date(), 0) },
          ]}
        />
        {startTime && (
          <DatePicker
            className="border-4 px-4 py-2"
            dateFormat={dateFormat}
            onChange={(date) => onEndTimeChange(date as Date)}
            placeholderText="Select an end time"
            selected={endTime}
            showTimeSelect
            timeFormat="p"
            timeIntervals={15}
            filterTime={filterTimes}
            // NOTE - I ran out of time, but this date picker SHOULD adjust so any date or time prior to the selected start time is not availabile
            excludeDateIntervals={[
              // exclude dates starting from tomorrow, and ending 1 year from today ('end' is required)
              { start: subDays(new Date(), 365), end: subDays(new Date(), 0) },
            ]}
          />
        )}
      </div>
      <div className="mt-12 flex justify-center">
        {startTime && endTime && (
          <button
            className="bg-emerald-600 text-white px-4 py-2 w-fit"
            onClick={onSubmit}
          >
            Confirm
          </button>
        )}
      </div>
    </div>
  );
}
