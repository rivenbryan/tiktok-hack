"use client";
import { Calendar } from "@/components/ui/calendar";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useState } from "react";
const HOURS = Array.from(Array(24).keys());
const intervals: string[] = [];

for (let hour = 0; hour < 24; hour++) {
  for (let minute = 0; minute < 60; minute += 30) {
    const start = formatTime(hour, minute);
    const end = formatTime(hour, minute + 30);
    intervals.push(`${start} - ${end}`);
  }
}

export default function Schedule() {
  const [date, setDate] = useState<Date | undefined>(undefined);
  const [interval, setIntervak] = useState<string>("");
  return (
    <div className="w-screen px-4">
      <Calendar
        mode="single"
        selected={date}
        onSelect={setDate}
        className="mt-4 font-bold"
      />
      <div className="mb-8">
        <h1 className="font-bold text-2xl mt-4 mb-4">Choosen Timeslot</h1>
        <div className="flex flex-row gap-4">
          <div className="text-sm w-[70%]">
            {date
              ? date.toLocaleDateString("en-us", {
                  weekday: "long",
                  year: "numeric",
                  month: "short",
                  day: "numeric",
                })
              : "No date selected..."}
          </div>
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Select your timeslot" />
            </SelectTrigger>
            <SelectContent>
              {intervals.map((interval) => (
                <SelectItem
                  key={interval}
                  value={interval}
                  className="bg-white"
                >
                  {interval}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>
      <p>
        If you cannot find any schedule,{" "}
        <span className="text-red-500 font-bold">
          chat with the leader to request for more timing
        </span>
      </p>
    </div>
  );
}

function formatTime(hour: number, minute: number) {
  const period = hour >= 12 ? "pm" : "am";
  const formattedHour = hour % 12 === 0 ? 12 : hour % 12;
  const hourString =
    formattedHour < 10 ? `0${formattedHour}` : `${formattedHour}`;
  const minuteString = minute < 10 ? `0${minute}` : `${minute}`;
  return `${hourString}:${minuteString}${period}`;
}
