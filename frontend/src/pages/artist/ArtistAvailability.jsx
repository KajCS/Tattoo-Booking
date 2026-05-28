import { useState } from "react";
import { Lock, Plane, ToggleLeft, ToggleRight } from "lucide-react";

import CalendarWidget from "../../components/CalendarWidget";
import {
  RecurringHoursCard,
  SessionConfigCard,
  BlockedDatesCard,
} from "../../components/SidebarConfigs";
import { BlockModal } from "../../components/BlockModal";

import {
  playfair,
  initialSlots,
  recurringDefaults,
  blockedDates,
} from "../../utils/constants";

export default function ArtistAvailability() {
  const [slots, setSlots] = useState(initialSlots);
  const [vacationMode, setVacationMode] = useState(false);
  const [showBlockModal, setShowBlockModal] = useState(false);

  const [recurringDays, setRecurringDays] = useState(recurringDefaults);
  const [bufferTime, setBufferTime] = useState(15);
  const [sessionDurations] = useState([1, 1.5, 2, 3, 4, 5]);
  const [selectedDurations, setSelectedDurations] = useState([1, 2, 3]);

  const handleSlotToggle = (key) => {
    setSlots((prev) => {
      const cur = prev[key] || "off";
      if (!["off", "available", "blocked"].includes(cur)) return prev;

      const next = { ...prev };
      if (cur === "off") next[key] = "available";
      else if (cur === "available") next[key] = "blocked";
      else if (cur === "blocked") next[key] = "off";
      return next;
    });
  };

  return (
    <div className="p-6 max-w-[1400px] mx-auto space-y-5">
      {/* Header Section */}
      <div className="flex items-center justify-between">
        <div>
          <h1 style={playfair} className="text-white mb-1 text-3xl">
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

      {/* Primary Dashboard Content */}
      <div className="grid grid-cols-1 xl:grid-cols-4 gap-5">
        {/* Left Side: The Extracted Calendar Widget */}
        <div className="xl:col-span-3">
          <CalendarWidget
            slots={slots}
            onSlotClick={handleSlotToggle}
            readOnly={vacationMode}
          />
        </div>

        {/* Right Side: Configuration Sidebar */}
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
