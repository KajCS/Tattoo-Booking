import { useState, useMemo } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { WeekView, MonthView, AgendaView, DayView } from "./CalendarViews";
import { playfair, HOURS, slotColors } from "..//utils/constants";

export default function CalendarWidget({
  slots,
  onSlotClick,
  readOnly = false,
}) {
  const [view, setView] = useState("week");
  const [currentDate, setCurrentDate] = useState(new Date(2026, 4, 19));

  // --- Date Navigation Logic ---
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

  // --- Memoized Helpers ---
  const weekDays = useMemo(() => {
    const d = new Date(currentDate);
    const dayIndex = d.getDay();
    const distanceToMonday = dayIndex === 0 ? -6 : 1 - dayIndex;
    const monday = new Date(d.setDate(d.getDate() + distanceToMonday));

    return Array.from({ length: 7 }, (_, i) => {
      const targetDay = new Date(monday);
      targetDay.setDate(monday.getDate() + i);
      return targetDay;
    });
  }, [currentDate]);

  const formattedDate = useMemo(() => {
    const options =
      view === "week" || view === "day"
        ? { month: "long", day: "numeric", year: "numeric" }
        : { month: "long", year: "numeric" };
    return currentDate.toLocaleString("default", options);
  }, [currentDate, view]);

  return (
    <div className="bg-[#1e0d35] border border-violet-900/40 rounded-2xl overflow-hidden h-full flex flex-col">
      {/* Navigation & Controls Header */}
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
          {formattedDate}
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

      {/* Render Active View */}
      <div className="flex-1 overflow-auto">
        {view === "week" && (
          <WeekView
            weekDays={weekDays}
            hours={HOURS}
            slots={slots}
            toggleSlot={readOnly ? null : onSlotClick}
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
            toggleSlot={readOnly ? null : onSlotClick}
            slotColors={slotColors}
          />
        )}
      </div>
    </div>
  );
}
