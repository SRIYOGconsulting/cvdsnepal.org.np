import React, { useState } from "react";
import {
  ChevronLeft,
  ChevronRight,
 
  List,
  Menu,
} from "lucide-react";

const Calendar = () => {
  const monthNames = [
    "January", "February", "March", "April",
    "May", "June", "July", "August",
    "September", "October", "November", "December"
  ];

  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedMonth, setSelectedMonth] = useState(currentDate.getMonth());
  const [selectedYear, setSelectedYear] = useState(currentDate.getFullYear());

  const events = [
    { date: new Date(2025, 3, 2), time: "15:43", title: "904 · Ajay Kumar" },
    { date: new Date(2025, 3, 7), time: "14:27", title: "905 · Saugat · Kathmandu" },
    { date: new Date(2025, 3, 16), time: "17:05", title: "906 · Manoj · Kathmandu" },
    { date: new Date(2025, 3, 18), time: "15:26", title: "907 · Baidhanath" },
    { date: new Date(2025, 3, 19), time: "16:23", title: "908 · Atish Kumar" },
    { date: new Date(2025, 3, 23), time: "15:11", title: "909 · Pankaj · Kathmandu" },
  ];

  const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  const getDaysInMonth = (month, year) => new Date(year, month + 1, 0).getDate();
  const getFirstDayOfMonth = (month, year) => new Date(year, month, 1).getDay();

  const daysInMonth = getDaysInMonth(selectedMonth, selectedYear);
  const firstDay = getFirstDayOfMonth(selectedMonth, selectedYear);

  const days = [];
  for (let i = 0; i < firstDay; i++) days.push(null);
  for (let i = 1; i <= daysInMonth; i++) days.push(i);

  const handlePrevMonth = () => {
    if (selectedMonth === 0) {
      setSelectedMonth(11);
      setSelectedYear(selectedYear - 1);
    } else {
      setSelectedMonth(selectedMonth - 1);
    }
  };

  const handleNextMonth = () => {
    if (selectedMonth === 11) {
      setSelectedMonth(0);
      setSelectedYear(selectedYear + 1);
    } else {
      setSelectedMonth(selectedMonth + 1);
    }
  };

  const handleToday = () => {
    const today = new Date();
    setSelectedMonth(today.getMonth());
    setSelectedYear(today.getFullYear());
  };

  return (
    // fixed Page Background Wrapper
    <div className="min-h-screen bg-gray-50 py-10">
       {/* ===== Page Container (centers content) ===== */}
       <div className="max-w-6xl mx-auto px-4">
      {/* ===== Header Toolbar ===== */}
      <div className="flex flex-col md:flex-row justify-between items-center mb-6 gap-4">
        <h2 className="text-2xl font-semibold text-gray-800">
          {monthNames[selectedMonth]} <span className="text-gray-500">{selectedYear}</span>
        </h2>

        <div className="flex flex-wrap items-center gap-2">
          <button
            onClick={handlePrevMonth}
            className="p-2 rounded-md border border-gray-300 hover:bg-gray-100 transition"
          >
            <ChevronLeft className="w-4 h-4 text-gray-700" />
          </button>

          <button
            onClick={handleNextMonth}
            className="p-2 rounded-md border border-gray-300 hover:bg-gray-100 transition"
          >
            <ChevronRight className="w-4 h-4 text-gray-700" />
          </button>

          <button
            onClick={handleToday}
            className="px-4 py-2 bg-white border border-gray-300 rounded-md hover:bg-gray-100 text-sm font-medium transition"
          >
            Today
          </button>

          <div className="relative">
            <select
              value={selectedMonth}
              onChange={(e) => setSelectedMonth(parseInt(e.target.value))}
              className="appearance-none px-4 py-2 pr-8 bg-white border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-100 transition"
            >
              {monthNames.map((month, index) => (
                <option key={index} value={index}>{month}</option>
              ))}
            </select>
          </div>

          <button className="p-2 border border-gray-300 bg-white rounded-md hover:bg-gray-100 transition">
            <List className="w-4 h-4 text-gray-700" />
          </button>

          <button className="flex items-center px-4 py-2 border border-gray-300 bg-white rounded-md hover:bg-gray-100 text-sm font-medium transition">
            See records <Menu className="w-4 h-4 ml-2 text-gray-600" />
          </button>
        </div>
      </div>

      {/* ===== Days of Week Header ===== */}
      <div className="grid grid-cols-7 text-sm font-medium text-gray-600 border-b border-gray-200 mb-1">
        {daysOfWeek.map((day) => (
          <div key={day} className="text-center py-2">
            {day}
          </div>
        ))}
      </div>

      {/* ===== Calendar Grid ===== */}
      <div className="grid grid-cols-7 gap-px bg-gray-200 border border-gray-200">
        {days.map((day, index) => {
          const event = events.find(
            (e) =>
              e.date.getDate() === day &&
              e.date.getMonth() === selectedMonth &&
              e.date.getFullYear() === selectedYear
          );

          return (
            <div
              key={index}
              className={`min-h-[100px] bg-white p-2 flex flex-col border border-gray-100 relative ${
                day === null ? "bg-gray-50" : ""
              }`}
            >
              {day && (
                <>
                  <span className="text-xs text-gray-500 mb-1">{day}</span>
                  {event && (
                    <div className="bg-gray-100 border border-gray-200 rounded-md p-1 mt-1">
                      <p className="text-[11px] font-medium text-gray-800 leading-snug">
                        {event.time} · {event.title}
                      </p>
                    </div>
                  )}
                </>
              )}
            </div>
          );
        })}
        </div>
      </div>
    </div>
  );
};

export default Calendar;
