"use client";

import Calendar from "@/components/student/calender";
import { useState } from "react";
interface Event {
  event_date: Date;
  event_title: string;
  event_theme: string;
}
export default function () {
  // in Date function below month start from 0 ,So decreased month by 1
  const [events, setEvents] = useState<Event[]>([
    {
      event_date: new Date(2023, 3, 1),
      event_title: "April Fool's Day",
      event_theme: "blue",
    },

    {
      event_date: new Date(2023, 5, 10),
      event_title: "Birthday",
      event_theme: "red",
    },

    {
      event_date: new Date(2023, 5, 16),
      event_title: "Upcoming Event",
      event_theme: "green",
    },
  ]);

  return (
    <>
      <Calendar events={events}></Calendar>
    </>
  );
}
