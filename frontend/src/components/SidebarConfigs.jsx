import React from "react";
import { Plus, Plane, AlertTriangle, Coffee, X } from "lucide-react";
import { playfair } from "../utils/constants";

export function RecurringHoursCard({ recurringDays, setRecurringDays }) {
  return (
    <div className="bg-[#1e0d35] border border-violet-900/40 rounded-2xl p-5">
      <h3 style={playfair} className="text-white text-base mb-4">
        Recurring Hours
      </h3>
      <div className="space-y-2.5">
        {recurringDays.map((d, i) => (
          <div key={d.day} className="flex items-center gap-3">
            <button
              onClick={() => {
                const next = [...recurringDays];
                next[i] = { ...next[i], active: !next[i].active };
                setRecurringDays(next);
              }}
              className={`w-8 h-4 rounded-full transition-all relative ${d.active ? "bg-violet-600" : "bg-violet-950"}`}
            >
              <span
                className={`absolute top-0.5 w-3 h-3 rounded-full bg-white transition-all ${d.active ? "left-4" : "left-0.5"}`}
              />
            </button>
            <span className="text-violet-200/70 text-xs w-20">
              {d.day.slice(0, 3)}
            </span>
            {d.active ? (
              <span className="text-violet-400/60 text-xs">
                10am – {d.day === "Friday" ? "8pm" : "7pm"}
              </span>
            ) : (
              <span className="text-violet-900/60 text-xs">Off</span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export function SessionConfigCard({
  bufferTime,
  setBufferTime,
  sessionDurations,
  selectedDurations,
  setSelectedDurations,
}) {
  return (
    <div className="bg-[#1e0d35] border border-violet-900/40 rounded-2xl p-5">
      <h3 style={playfair} className="text-white text-base mb-4">
        Session Config
      </h3>
      <div className="space-y-4">
        <div>
          <p className="text-violet-400/60 text-xs mb-2">
            Buffer between sessions
          </p>
          <div className="flex items-center gap-2">
            {[0, 15, 30, 45, 60].map((b) => (
              <button
                key={b}
                onClick={() => setBufferTime(b)}
                className={`px-2.5 py-1 rounded-lg text-xs transition-all ${
                  bufferTime === b
                    ? "bg-violet-600/30 border border-violet-500/40 text-violet-200"
                    : "bg-violet-950/40 border border-violet-900/20 text-violet-400/50 hover:text-violet-300"
                }`}
              >
                {b === 0 ? "None" : `${b}m`}
              </button>
            ))}
          </div>
        </div>
        <div>
          <p className="text-violet-400/60 text-xs mb-2">
            Session durations offered
          </p>
          <div className="flex flex-wrap gap-2">
            {sessionDurations.map((d) => (
              <button
                key={d}
                onClick={() =>
                  setSelectedDurations((prev) =>
                    prev.includes(d)
                      ? prev.filter((x) => x !== d)
                      : [...prev, d],
                  )
                }
                className={`px-2.5 py-1 rounded-lg text-xs transition-all ${
                  selectedDurations.includes(d)
                    ? "bg-violet-600/30 border border-violet-500/40 text-violet-200"
                    : "bg-violet-950/40 border border-violet-900/20 text-violet-400/50 hover:text-violet-300"
                }`}
              >
                {d}h
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export function BlockedDatesCard({ blockedDates, setShowBlockModal }) {
  return (
    <div className="bg-[#1e0d35] border border-violet-900/40 rounded-2xl p-5">
      <div className="flex items-center justify-between mb-4">
        <h3 style={playfair} className="text-white text-base">
          Blocked Dates
        </h3>
        <button
          onClick={() => setShowBlockModal(true)}
          className="text-violet-400 hover:text-violet-300 transition-colors"
        >
          <Plus size={16} />
        </button>
      </div>
      <div className="space-y-2.5">
        {blockedDates.map((b, i) => (
          <div
            key={i}
            className="flex items-start gap-3 p-3 bg-violet-950/30 border border-violet-900/20 rounded-xl group"
          >
            <div className="shrink-0 mt-0.5">
              {b.type === "convention" && (
                <Plane size={13} className="text-blue-400" />
              )}
              {b.type === "leave" && (
                <AlertTriangle size={13} className="text-amber-400" />
              )}
              {b.type === "guest" && (
                <Coffee size={13} className="text-violet-400" />
              )}
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-white text-xs font-medium">{b.date}</p>
              <p className="text-violet-200/40 text-xs">{b.reason}</p>
            </div>
            <button className="opacity-0 group-hover:opacity-100 transition-opacity text-red-400/50 hover:text-red-400">
              <X size={13} />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
