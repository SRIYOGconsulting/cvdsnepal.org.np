
import React, { useState } from "react";
import { ChevronLeft, ChevronRight, List, Menu, X } from "lucide-react";

const Calendar = () => {
  const monthNames = [
    "January","February","March","April","May","June","July","August","September","October","November","December"
  ];

  const today = new Date(); // x added  today's date
  const [selectedDate, setSelectedDate] = useState(today);
  const [selectedMonth, setSelectedMonth] = useState(today.getMonth());
  const [selectedYear, setSelectedYear] = useState(today.getFullYear());
  const [bannerEvents, setBannerEvents] = useState(null);

  const events = [
  
      { date: new Date(2025, 0, 5), title: "Volunteer Orientation", time: "10:00", description: "Orientation for new volunteers." },
    { date: new Date(2025, 0, 15), title: "Donation Drive", time: "14:00", description: "Collecting essentials for conflict victims." },
    { date: new Date(2025, 0, 25), title: "Awareness Workshop", time: "11:00", description: "Workshop on community support and awareness." },
    { date: new Date(2025, 1, 7), title: "Medical Camp", time: "09:00", description: "Free medical consultation for disabled individuals." },
    { date: new Date(2025, 1, 21), title: "Volunteer Training", time: "13:00", description: "Training session for new volunteers." },
    { date: new Date(2025, 2, 3), title: "Fundraising Event", time: "12:00", description: "Raising funds for rehabilitation programs." },
    { date: new Date(2025, 2, 10), title: "Community Awareness", time: "10:00", description: "Local community awareness program." },
    { date: new Date(2025, 2, 18), title: "Donation Drive", time: "14:00", description: "Collecting essentials for families." },
    { date: new Date(2025, 2, 28), title: "Volunteer Workshop", time: "15:00", description: "Workshop for volunteers on support techniques." },
    { date: new Date(2025, 3, 2), title: "Volunteer Awareness Program", time: "10:00", description: "Awareness session for volunteers." },
    { date: new Date(2025, 3, 7), title: "Donation Drive", time: "14:00", description: "Donation drive for essentials." },
    { date: new Date(2025, 3, 16), title: "Rehabilitation Workshop", time: "16:00", description: "Workshop for skill development." },
    { date: new Date(2025, 3, 18), title: "Medical Camp", time: "09:00", description: "Medical consultation for disabled individuals." },
    { date: new Date(2025, 3, 23), title: "Community Awareness", time: "15:00", description: "Raising awareness in communities." },
    { date: new Date(2025, 4, 8), title: "Fundraising Event", time: "12:00", description: "Raising funds for medical support programs." },
    { date: new Date(2025, 4, 18), title: "Volunteer Meet-Up", time: "14:30", description: "Volunteer meetup and training." },
    { date: new Date(2025, 4, 27), title: "Community Workshop", time: "10:00", description: "Skill development workshop for locals." },
    { date: new Date(2025, 5, 3), title: "Summer Awareness Campaign", time: "09:00", description: "Campaign to raise awareness in local schools." },
    { date: new Date(2025, 5, 18), title: "Donation Drive", time: "15:00", description: "Collecting essentials for families affected by conflicts." },
    { date: new Date(2025, 6, 10), title: "Medical Checkup Camp", time: "10:00", description: "Free medical checkups for the disabled." },
    { date: new Date(2025, 6, 20), title: "Volunteer Workshop", time: "13:00", description: "Training volunteers on rehabilitation support." },
    { date: new Date(2025, 6, 28), title: "Community Awareness Program", time: "11:00", description: "Educating local communities." },
    { date: new Date(2025, 7, 5), title: "Fundraising Event", time: "14:00", description: "Raising funds for workshops and medical camps." },
    { date: new Date(2025, 7, 20), title: "Volunteer Training", time: "10:00", description: "Training session for new volunteers." },
    { date: new Date(2025, 8, 2), title: "Community Awareness Program", time: "11:00", description: "Raising awareness about conflict victims." },
    { date: new Date(2025, 8, 12), title: "Medical Camp", time: "09:00", description: "Medical assistance for disabled individuals." },
    { date: new Date(2025, 8, 18), title: "Donation Drive", time: "13:00", description: "Collecting essentials for local families." },
    { date: new Date(2025, 8, 28), title: "Volunteer Orientation", time: "10:00", description: "Orientation for new volunteers." },
    { date: new Date(2025, 9, 8), title: "Fundraising Event", time: "12:00", description: "Raising funds for local projects." },
    { date: new Date(2025, 9, 22), title: "Community Workshop", time: "15:00", description: "Skill development workshop for locals." },
    { date: new Date(2025, 10, 3), title: "Volunteer Training", time: "14:00", description: "Training session for volunteers on community support." },
    { date: new Date(2025, 10, 15), title: "Medical Camp", time: "09:00", description: "Medical consultation for disabled individuals." },
    { date: new Date(2025, 10, 28), title: "Fundraising Event", time: "11:00", description: "Raising funds for workshops and programs." },
    { date: new Date(2025, 11, 5), title: "End of Year Volunteer Meet", time: "10:00", description: "Annual meet-up for all volunteers." },
    { date: new Date(2025, 11, 20), title: "Donation Drive", time: "13:00", description: "Collecting essentials before the year ends." },
  
  ];

  const daysOfWeek = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];
  const getDaysInMonth = (month, year) => new Date(year, month + 1, 0).getDate();
  const getFirstDayOfMonth = (month, year) => new Date(year, month, 1).getDay();

  const daysInMonth = getDaysInMonth(selectedMonth, selectedYear);
  const firstDay = getFirstDayOfMonth(selectedMonth, selectedYear);

  const days = [];
  for(let i=0; i<firstDay; i++) days.push(null);
  for(let i=1; i<=daysInMonth; i++) days.push(i);

  const handlePrevMonth = () => {
    if(selectedMonth===0) { setSelectedMonth(11); setSelectedYear(selectedYear-1); }
    else setSelectedMonth(selectedMonth-1);
    setBannerEvents(null);
  };

  const handleNextMonth = () => {
    if(selectedMonth===11) { setSelectedMonth(0); setSelectedYear(selectedYear+1); }
    else setSelectedMonth(selectedMonth+1);
    setBannerEvents(null);
  };

  const handleToday = () => {
    setSelectedMonth(today.getMonth());
    setSelectedYear(today.getFullYear());
    setSelectedDate(today); // x ensure today is set
    setBannerEvents(null);
  };

  const isToday = (day) => {
    return (
      day === today.getDate() &&
      selectedMonth === today.getMonth() &&
      selectedYear === today.getFullYear()
    );
  };

  const handleDayClick = (day) => {
    if(!day) return;
    const dayEvents = events.filter(
      e => e.date.getDate()===day && e.date.getMonth()===selectedMonth && e.date.getFullYear()===selectedYear
    );
    setBannerEvents(dayEvents.length>0 ? dayEvents : null);
  };

  return (
<div className="h-full bg-gray-50 py-12 px-2 md:px-10 relative"> {/* Changed min-h-[90vh] to h-full for full height section */}
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-6 gap-3 md:gap-4 text-center md:text-left">
          <h2 className="text-xl md:text-2xl font-semibold text-gray-800">
            {monthNames[selectedMonth]} <span className="text-gray-500">{selectedYear}</span>
          </h2>
          <div className="flex flex-wrap justify-center md:justify-end items-center gap-2">
            <button onClick={handlePrevMonth} className="p-2 rounded-md border border-gray-300 hover:bg-gray-100 transition"><ChevronLeft className="w-4 h-4 text-gray-700"/></button>
            <button onClick={handleNextMonth} className="p-2 rounded-md border border-gray-300 hover:bg-gray-100 transition"><ChevronRight className="w-4 h-4 text-gray-700"/></button>
            <button onClick={handleToday} className="px-3 py-2 bg-white border border-gray-300 rounded-md hover:bg-gray-100 text-sm font-medium transition">Today</button>
            <select value={selectedMonth} onChange={(e)=>setSelectedMonth(parseInt(e.target.value))} className="appearance-none px-3 py-2 pr-6 bg-white border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-100 transition">
              {monthNames.map((month,index)=>(<option key={index} value={index}>{month}</option>))}
            </select>
          </div>
        </div>

        {/* Days of Week */}
        <div className="grid grid-cols-7 text-xs md:text-sm font-medium text-gray-600 border-b border-gray-200 mb-1">
          {daysOfWeek.map(day => <div key={day} className="text-center py-2">{day}</div>)}
        </div>

        {/* Calendar Grid */}
        <div className="grid grid-cols-7 gap-px bg-gray-200 border border-gray-200 text-xs sm:text-sm">
          {days.map((day,index)=>{
            const dayHasEvents = events.some(
              e => e.date.getDate()===day && e.date.getMonth()===selectedMonth && e.date.getFullYear()===selectedYear
            );
            return (
    <div
  key={index}
  onClick={() => handleDayClick(day)}
  className={`min-h-[70px] sm:min-h-[100px] p-1 sm:p-2 flex flex-col border border-gray-100 relative 
    ${day === null ? "bg-gray-50" : "bg-white cursor-pointer"} 
    ${day === today.getDate() && selectedMonth === today.getMonth() && selectedYear === today.getFullYear()
      ? "bg-blue-300 font-bold border-blue-500 border-2" 
      : ""}`} // fixed: today always highlighted
>
  {day && (
    <>
      <span className="text-[10px] sm:text-xs text-gray-500 mb-1">{day}</span>
      {events.some(
        (e) => e.date.getDate() === day && e.date.getMonth() === selectedMonth && e.date.getFullYear() === selectedYear
      ) && <div className="absolute top-1 right-1 w-2 h-2 bg-blue-500 rounded-full"></div>}
    </>
  )}
</div>


            )
          })}
        </div>
      </div>

      {/* Responsive Overlay Banner */}
      {bannerEvents && (
        <div className="fixed md:absolute bottom-0 md:top-10 left-0 md:left-0 z-50 w-full md:w-80 max-h-[60vh] md:max-h-none overflow-y-auto p-4 bg-white border border-gray-200 rounded-t-lg md:rounded-md shadow-lg transition-all duration-300 ease-in-out">
          <div className="flex justify-between items-center mb-3">
            <h3 className="text-base md:text-lg font-semibold">Event Details</h3>
            <button onClick={()=>setBannerEvents(null)}><X className="w-4 h-4 text-gray-600"/></button>
          </div>
          {bannerEvents.map((event,index)=>(
            <div key={index} className="mb-3 p-2 border-b border-gray-100">
              <p className="font-medium text-sm md:text-base">{event.time} · {event.title}</p>
              <p className="text-[12px] md:text-sm text-gray-600">{event.description}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Calendar;





