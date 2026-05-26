import { useState } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Lock,
  Plane,
  ToggleLeft,
  ToggleRight,
} from "lucide-react";
import {
  WeekView,
  MonthView,
  AgendaView,
  DayView,
} from "../../components/CalendarViews";
import {
  RecurringHoursCard,
  SessionConfigCard,
  BlockedDatesCard,
} from "../../components/SidebarConfigs";
import { BlockModal } from "../../components/BlockModal";
import {
  playfair,
  HOURS,
  initialSlots,
  slotColors,
  recurringDefaults,
  blockedDates,
} from "../../utils/constants";

export default function ArtistAvailability() {
  const [view, setView] = useState("week");
  const [slots, setSlots] = useState(initialSlots);
  const [vacationMode, setVacationMode] = useState(false);
  const [showBlockModal, setShowBlockModal] = useState(false);
  const [recurringDays, setRecurringDays] = useState(recurringDefaults);
  const [bufferTime, setBufferTime] = useState(15);
  const [sessionDurations] = useState([1, 1.5, 2, 3, 4, 5]);
  const [selectedDurations, setSelectedDurations] = useState([1, 2, 3]);
  const [currentDate, setCurrentDate] = useState(new Date(2026, 4, 19));

  const handlePrev = () => {
    setCurrentDate((prev) => {
      if (view === "month")
        return new Date(prev.getFullYear(), prev.getMonth() - 1, 1);
      if (view === "week")
        return new Date(
          prev.getFullYear(),
          prev.getMonth(),
          prev.getDate() - 7,
        );
      return new Date(prev.getFullYear(), prev.getMonth(), prev.getDate() - 1);
    });
  };

  const handleNext = () => {
    setCurrentDate((prev) => {
      if (view === "month")
        return new Date(prev.getFullYear(), prev.getMonth() + 1, 1);
      if (view === "week")
        return new Date(
          prev.getFullYear(),
          prev.getMonth(),
          prev.getDate() + 7,
        );
      return new Date(prev.getFullYear(), prev.getMonth(), prev.getDate() + 1);
    });
  };

  const getWeekDays = (focusDate) => {
    const d = new Date(focusDate);
    const dayIndex = d.getDay();
    const distanceToMonday = dayIndex === 0 ? -6 : 1 - dayIndex;
    const monday = new Date(d.setDate(d.getDate() + distanceToMonday));
    return Array.from({ length: 7 }, (_, i) => {
      const targetDay = new Date(monday);
      targetDay.setDate(monday.getDate() + i);
      return targetDay;
    });
  };
  const weekDays = getWeekDays(currentDate);

  const toggleSlot = (key) => {
    setSlots((prev) => {
      const cur = prev[key] || "off";
      if (cur !== "off" && cur !== "available" && cur !== "blocked")
        return prev;
      const next = { ...prev };
      if (cur === "off") next[key] = "available";
      else if (cur === "available") next[key] = "blocked";
      else if (cur === "blocked") next[key] = "off";
      return next;
    });
  };

  return (
    <div className="p-6 max-w-[1400px] space-y-5">
      {/* Top Main Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 style={playfair} className="text-white mb-1">
            Availability
          </h1>
          <p className="text-violet-200/40 text-sm">
            Manage your schedule, blocks, and booking windows
          </p>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={() => setVacationMode(!vacationMode)}
            className={`flex items-center gap-2 px-3 py-2 rounded-xl border text-sm transition-all ${
              vacationMode
                ? "bg-amber-500/15 border-amber-500/30 text-amber-400"
                : "bg-violet-900/20 border-violet-900/30 text-violet-300"
            }`}
          >
            {vacationMode ? (
              <ToggleRight size={16} />
            ) : (
              <ToggleLeft size={16} />
            )}
            Vacation Mode
          </button>
          <button
            onClick={() => setShowBlockModal(true)}
            className="flex items-center gap-1.5 px-3 py-2 bg-gradient-to-r from-violet-600 to-indigo-600 text-white text-sm rounded-xl hover:from-violet-700 hover:to-indigo-700 transition-all"
          >
            <Lock size={13} /> Block Dates
          </button>
        </div>
      </div>

      {/* Vacation State Warning */}
      {vacationMode && (
        <div className="bg-amber-500/10 border border-amber-500/20 rounded-2xl p-4 flex items-center gap-3">
          <Plane size={16} className="text-amber-400 shrink-0" />
          <p className="text-amber-300 text-sm">
            Vacation mode is ON — no new bookings will be accepted until you
            turn this off.
          </p>
        </div>
      )}

      {/* Primary Context Dashboard Content */}
      <div className="grid grid-cols-1 xl:grid-cols-4 gap-5">
        {/* Left Side: Dynamic Calendar Template Wrapper */}
        <div className="xl:col-span-3 bg-[#1e0d35] border border-violet-900/40 rounded-2xl overflow-hidden">
          {/* Calendar Internal Navigation Row */}
          <div className="flex items-center gap-3 px-5 py-4 border-b border-violet-900/30">
            <button
              onClick={handlePrev}
              className="text-violet-400/60 hover:text-violet-300 transition-colors p-1"
            >
              <ChevronLeft size={18} />
            </button>
            <h3
              style={playfair}
              className="text-white min-w-[160px] text-center text-sm md:text-base"
            >
              {view === "week" || view === "day"
                ? currentDate.toLocaleString("default", {
                    month: "long",
                    day: "numeric",
                    year: "numeric",
                  })
                : currentDate.toLocaleString("default", {
                    month: "long",
                    year: "numeric",
                  })}
            </h3>
            <button
              onClick={handleNext}
              className="text-violet-400/60 hover:text-violet-300 transition-colors p-1"
            >
              <ChevronRight size={18} />
            </button>
            <div className="ml-auto flex items-center bg-violet-950/50 border border-violet-900/30 rounded-xl p-1 gap-0.5">
              {["day", "week", "month", "agenda"].map((v) => (
                <button
                  key={v}
                  onClick={() => setView(v)}
                  className={`px-3 py-1.5 rounded-lg text-xs capitalize transition-all ${
                    view === v
                      ? "bg-violet-600/30 text-violet-200 border border-violet-500/30"
                      : "text-violet-400/50 hover:text-violet-300"
                  }`}
                >
                  {v}
                </button>
              ))}
            </div>
          </div>

          {/* Render Active Layout Templates */}
          {view === "week" && (
            <WeekView
              weekDays={weekDays}
              hours={HOURS}
              slots={slots}
              toggleSlot={toggleSlot}
              slotColors={slotColors}
            />
          )}
          {view === "month" && (
            <MonthView
              currentDate={currentDate}
              slots={slots}
              setCurrentDate={setCurrentDate}
              setView={setView}
            />
          )}
          {view === "agenda" && <AgendaView slotColors={slotColors} />}
          {view === "day" && (
            <DayView
              currentDate={currentDate}
              hours={HOURS}
              slots={slots}
              toggleSlot={toggleSlot}
              slotColors={slotColors}
            />
          )}
        </div>

        {/* Right Side: Configuration Sidebar Layout Panels */}
        <div className="flex flex-col gap-4">
          <RecurringHoursCard
            recurringDays={recurringDays}
            setRecurringDays={setRecurringDays}
          />
          <SessionConfigCard
            bufferTime={bufferTime}
            setBufferTime={setBufferTime}
            sessionDurations={sessionDurations}
            selectedDurations={selectedDurations}
            setSelectedDurations={setSelectedDurations}
          />
          <BlockedDatesCard
            blockedDates={blockedDates}
            setShowBlockModal={setShowBlockModal}
          />
        </div>
      </div>

      {/* Global State Modals */}
      <BlockModal
        isOpen={showBlockModal}
        onClose={() => setShowBlockModal(false)}
      />
    </div>
  );
}
