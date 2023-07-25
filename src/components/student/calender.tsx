"use client";

import React, { useEffect, useState } from "react";

const MONTH_NAMES: string[] = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

interface Event {
  event_date: Date;
  event_title: string;
  event_theme: string;
}

interface CalendarProps {
  events: Event[];
}

const Calendar: React.FC<CalendarProps> = ({ events: initialEvents }) => {
  const [events, setEvents] = useState<Event[]>(initialEvents);
  const [month, setMonth] = useState<number>(new Date().getMonth());
  const [year, setYear] = useState<number>(new Date().getFullYear());
  const [noOfDays, setNoOfDays] = useState<number[]>([]);
  const [blankDays, setBlankDays] = useState<number[]>([]);
  const [eventTitle, setEventTitle] = useState<string>("");
  const [eventDate, setEventDate] = useState<string>(new Date().toDateString());
  const [eventTheme, setEventTheme] = useState<string>("blue");
  const [openEventModal, setOpenEventModal] = useState<boolean>(false);

  const DAYS: string[] = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  const themes = [
    { value: "blue", label: "Blue Theme" },
    { value: "red", label: "Red Theme" },
    { value: "yellow", label: "Yellow Theme" },
    { value: "green", label: "Green Theme" },
    { value: "purple", label: "Purple Theme" },
  ];

  const initDate = () => {
    let today = new Date();
    setMonth(today.getMonth());
    setYear(today.getFullYear());
  };

  const isToday = (date: number) => {
    const today = new Date();
    const d = new Date(year, month, date);
    return today.toDateString() === d.toDateString();
  };

  const showEventModal = (date: number) => {
    setOpenEventModal(true);
    setEventDate(new Date(year, month, date).toDateString());
  };
  for (let i = 0; i < events.length; i++) {
    const element = events[i];
    events[i].event_date.setMonth(element.event_date.getMonth() + 0);
  }

  const addEvent = () => {
    if (!eventTitle) {
      return;
    }

    // Get the current year and month
    const currentYear = new Date().getFullYear();
    const currentMonth = new Date().getMonth();

    // Get the selected day from the event date
    const selectedDay = new Date(eventDate).getDate();

    const selectedDate = new Date(eventDate);
    selectedDate.setDate(selectedDate.getDate() + 1); // Adjust for the timezone

    // Create a new Date object with the selected year, month, and day
    const newEventDate = new Date(year, month, selectedDay);

    // Adjust the month if the selected month is the current month and the year is the current year
    if (year === currentYear && month === currentMonth) {
      newEventDate.setMonth(month);
    }

    const newEvent: Event = {
      event_date: selectedDate,
      event_title: eventTitle,
      event_theme: eventTheme,
    };

    setEvents([...events, newEvent]);
    setEventTitle("");
    setEventDate(new Date().toDateString());
    setEventTheme("blue");
    setOpenEventModal(false);
  };

  const getNoOfDays = (year: number, month: number) => {
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const dayOfWeek = new Date(year, month, 1).getDay();
    const blankDaysArray: number[] = Array.from(
      { length: dayOfWeek },
      (_, i) => i
    );
    const daysArray: number[] = Array.from(
      { length: daysInMonth },
      (_, i) => i + 1
    );

    setBlankDays(blankDaysArray);
    setNoOfDays(daysArray);
  };

  useEffect(() => {
    getNoOfDays(year, month);
  }, [year, month]);

  return (
    <div className="antialiased sans-serif bg-gray-100 h-screen">
      <div x-data="app()" x-init="[initDate(), getNoOfDays()]" x-cloak>
        <div className="container mx-auto px-4 py-2 md:py-24">
          <div className="bg-white rounded-lg shadow overflow-hidden">
            <div className="flex items-center justify-between py-2 px-6">
              <div>
                <span
                  x-text={MONTH_NAMES[month]}
                  className="text-lg font-bold text-gray-800"
                >
                  {MONTH_NAMES[month]}
                </span>
                <span
                  x-text={year.toString()}
                  className="ml-1 text-lg text-gray-600 font-normal"
                >
                  {year.toString()}
                </span>
              </div>
              <div
                className="border rounded-lg px-1"
                style={{ paddingTop: "2px" }}
              >
                <button
                  type="button"
                  className={`leading-none rounded-lg transition ease-in-out duration-100 inline-flex cursor-pointer hover:bg-gray-200 p-1 items-center ${
                    month === 0 ? "cursor-not-allowed opacity-25" : ""
                  }`}
                  onClick={() => {
                    if (month === 0) {
                      setYear(year - 1);
                      setMonth(11);
                    } else {
                      setMonth(month - 1);
                    }
                  }}
                >
                  <svg
                    className="h-6 w-6 text-gray-500 inline-flex leading-none"
                    fill="none"
                    viewBox="0"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M15 19l-7-7 7-7"
                    />
                  </svg>
                </button>
                <div className="border-r inline-flex h-6"></div>
                <button
                  type="button"
                  className={`leading-none rounded-lg transition ease-in-out duration-100 inline-flex items-center cursor-pointer hover:bg-gray-200 p-1 ${
                    month === 11 ? "cursor-not-allowed opacity-25" : ""
                  }`}
                  onClick={() => {
                    if (month === 11) {
                      setYear(year + 1);
                      setMonth(0);
                    } else {
                      setMonth(month + 1);
                    }
                  }}
                >
                  <svg
                    className="h-6 w-6 text-gray-500 inline-flex leading-none"
                    fill="none"
                    viewBox="0"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </button>
              </div>
            </div>

            <div className="-mx-1 -mb-1">
              <div className="flex flex-wrap" style={{ marginBottom: "-40px" }}>
                {DAYS.map((day, index) => (
                  <div
                    key={index}
                    style={{ width: "14.26%" }}
                    className="px-2 py-2"
                  >
                    <div className="text-gray-600 text-sm uppercase tracking-wide font-bold text-center">
                      {day}
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap border-t border-l">
                {blankDays.map((blankday, index) => (
                  <div
                    key={index}
                    style={{ width: "14.28%", height: "120px" }}
                    className="text-center border-r border-b px-4 pt-2"
                  ></div>
                ))}
                {noOfDays.map((date, dateIndex) => (
                  <div
                    key={dateIndex}
                    style={{ width: "14.28%", height: "120px" }}
                    className="px-4 pt-2 border-r border-b relative"
                  >
                    <div
                      onClick={() => showEventModal(date)}
                      className={`inline-flex w-6 h-6 items-center justify-center cursor-pointer text-center leading-none rounded-full transition ease-in-out duration-100 ${
                        isToday(date)
                          ? "bg-blue-500 text-white"
                          : "text-gray-700 hover:bg-blue-200"
                      }`}
                    >
                      {date}
                    </div>
                    <div
                      style={{ height: "80px" }}
                      className="overflow-y-auto mt-1"
                    >
                      {events
                        .filter(
                          (event) =>
                            new Date(event.event_date).toDateString() ===
                            new Date(year, month, date).toDateString()
                        )
                        .map((event, index) => (
                          <div
                            key={index}
                            className={`px-2 py-1 rounded-lg mt-1 overflow-hidden border ${
                              event.event_theme === "blue"
                                ? "border-blue-200 text-blue-800 bg-blue-100"
                                : ""
                            } ${
                              event.event_theme === "red"
                                ? "border-red-200 text-red-800 bg-red-100"
                                : ""
                            } ${
                              event.event_theme === "yellow"
                                ? "border-yellow-200 text-yellow-800 bg-yellow-100"
                                : ""
                            } ${
                              event.event_theme === "green"
                                ? "border-green-200 text-green-800 bg-green-100"
                                : ""
                            } ${
                              event.event_theme === "purple"
                                ? "border-purple-200 text-purple-800 bg-purple-100"
                                : ""
                            }`}
                          >
                            <p className="text-sm truncate leading-tight">
                              {event.event_title}
                            </p>
                          </div>
                        ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Rest of the JSX elements for the modal */}
      {/* ... */}
    </div>
  );

  // ... (Next code)
};

export default Calendar;
