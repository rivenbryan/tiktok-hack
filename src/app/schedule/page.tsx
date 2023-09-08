"use client";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useRouter } from "next/navigation";
import { useState } from "react";
const intervals: string[] = [
  "00:00am-00:30am",
  "00:30am-01:00am",
  "01:00am-01:30am",
  "01:30am-02:00am",
  "02:00am-02:30am",
  "02:30am-03:00am",
  "03:00am-03:30am",
  "03:30am-04:00am",
  "04:00am-04:30am",
  "04:30am-05:00am",
  "05:00am-05:30am",
  "05:30am-06:00am",
  "06:00am-06:30am",
  "06:30am-07:00am",
  "07:00am-07:30am",
  "07:30am-08:00am",
  "08:00am-08:30am",
  "08:30am-09:00am",
  "09:00am-09:30am",
  "09:30am-10:00am",
  "10:00am-10:30am",
  "10:30am-11:00am",
  "11:00am-11:30am",
  "11:30am-12:00pm",
  "12:00pm-12:30pm",
  "12:30pm-01:00pm",
  "01:00pm-01:30pm",
  "01:30pm-02:00pm",
  "02:00pm-02:30pm",
  "02:30pm-03:00pm",
  "03:00pm-03:30pm",
  "03:30pm-04:00pm",
  "04:00pm-04:30pm",
  "04:30pm-05:00pm",
  "05:00pm-05:30pm",
  "05:30pm-06:00pm",
  "06:00pm-06:30pm",
  "06:30pm-07:00pm",
  "07:00pm-07:30pm",
  "07:30pm-08:00pm",
  "08:00pm-08:30pm",
  "08:30pm-09:00pm",
  "09:00pm-09:30pm",
  "09:30pm-10:00pm",
  "10:00pm-10:30pm",
  "10:30pm-11:00pm",
  "11:00pm-11:30pm",
  "11:30pm-00:00am",
];

export default function Schedule() {
  const [date, setDate] = useState<Date | undefined>(undefined);
  const [interval, setInterval] = useState<string>("");
  const router = useRouter();

  const handleSubmit = () => {
    router.push("/chat");
  };
  return (
    <div className="w-screen min-h-[90vh] relative px-4">
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
            <SelectTrigger className="border-gray-100 rounded-lg">
              <SelectValue placeholder="Select your timeslot" />
            </SelectTrigger>
            <SelectContent>
              {intervals.map((interval) => (
                <SelectItem
                  key={interval}
                  value={interval}
                  className="bg-white"
                >
                  <div onClick={() => setInterval(interval)}>{interval}</div>
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
      <Button
        className="bg-red-500 absolute mb-4 bottom-0 text-white w-[90%] rounded-xl"
        onClick={handleSubmit}
      >
        Confirm Schedule
      </Button>
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
