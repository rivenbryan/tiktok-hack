"use client";
import { Calendar } from "@/components/ui/calendar";
import { useState } from "react";
const HOURS = Array.from(Array(24).keys());

export default function Schedule() {
  const [startTime, setStartTime] = useState<number | undefined>();
  const [endTime, setEndTime] = useState<number | undefined>();
  const [date, setDate] = useState<Date | undefined>(new Date());
  return (
    <div className="w-screen px-4">
      <Calendar
        mode="single"
        selected={date}
        onSelect={setDate}
        className="rounded-md border font-bold"
      />
      <div>
        <h1 className="font-bold text-2xl mt-4">Choosen Timeslot</h1>
        <div className="flex flex-row">
          <div>
            {date?.toLocaleDateString("en-us", {
              weekday: "long",
              year: "numeric",
              month: "short",
              day: "numeric",
            })}
          </div>
          <div className="mt-4">
            <label htmlFor="start-time" className="mr-2">
              Start Time:
            </label>
            <select
              id="start-time"
              value={startTime}
              onChange={(e) => setStartTime(Number(e.target.value))}
              className="border rounded-md p-1"
            >
              {HOURS.map((hour) => (
                <option key={hour} value={hour}>
                  {hour}:00
                </option>
              ))}
            </select>

            <label htmlFor="end-time" className="ml-4 mr-2">
              End Time:
            </label>
            <select
              id="end-time"
              value={endTime}
              onChange={(e) => setEndTime(Number(e.target.value))}
              className="border rounded-md p-1"
            >
              {HOURS.map((hour) => (
                <option key={hour} value={hour}>
                  {hour}:00
                </option>
              ))}
            </select>
          </div>
        </div>
        <p>
          If you cannot find any schedule, chat with the leader to request for
          more timing
        </p>
      </div>
    </div>
  );
}
