import React from "react";
import { Lock, Coffee, Plus } from "lucide-react";
import { playfair, formatDateString } from "../utils/constants";

export function WeekView({ weekDays, hours, slots, toggleSlot, slotColors }) {
  return (
    <div className="overflow-x-auto">
      <div className="min-w-[640px]">
        <div className="grid grid-cols-8 border-b border-violet-900/20">
          <div className="py-3 px-3 text-violet-400/30 text-xs text-right" />
          {weekDays.map((dayObj, i) => {
            const weekdayLabel = dayObj.toLocaleString("default", {
              weekday: "short",
            });
            const dateNum = dayObj.getDate();
            const isToday =
              dayObj.toDateString() === new Date(2026, 4, 19).toDateString();
            return (
              <div
                key={i}
                className={`py-3 text-center border-l border-violet-900/20 ${isToday ? "bg-violet-600/10" : ""}`}
              >
                <p className="text-violet-400/50 text-xs">{weekdayLabel}</p>
                <p
                  className={`text-sm font-medium mt-0.5 ${isToday ? "text-violet-300 font-bold" : "text-white"}`}
                >
                  {dateNum}
                </p>
              </div>
            );
          })}
        </div>

        {hours.map((hour) => (
          <div
            key={hour}
            className="grid grid-cols-8 border-b border-violet-900/10"
          >
            <div className="py-3 px-3 text-violet-400/30 text-xs text-right shrink-0">
              {hour > 12
                ? `${hour - 12}pm`
                : hour === 12
                  ? "12pm"
                  : `${hour}am`}
            </div>
            {weekDays.map((dayObj, di) => {
              const dateKeyStr = formatDateString(dayObj);
              const key = `${dateKeyStr}-${hour}`;
              const status = slots[key] || "off";
              const isToday =
                dayObj.toDateString() === new Date(2026, 4, 19).toDateString();
              return (
                <div
                  key={di}
                  onClick={() => toggleSlot(key)}
                  className={`border-l border-violet-900/10 p-1 cursor-pointer transition-all min-h-[48px] ${isToday ? "bg-violet-600/5" : ""}`}
                >
                  {status !== "off" && (
                    <div
                      className={`h-full min-h-[38px] rounded-lg px-2 py-1.5 text-xs ${slotColors[status]} flex items-center gap-1`}
                    >
                      {status === "booked" && (
                        <span className="truncate">Booked</span>
                      )}
                      {status === "available" && (
                        <span className="truncate">Open</span>
                      )}
                      {status === "blocked" && (
                        <>
                          <Lock size={10} />
                          <span>Blocked</span>
                        </>
                      )}
                      {status === "break" && (
                        <>
                          <Coffee size={10} />
                          <span>Break</span>
                        </>
                      )}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        ))}
      </div>
    </div>
  );
}

export function MonthView({ currentDate, slots, setCurrentDate, setView }) {
  const currentYear = currentDate.getFullYear();
  const currentMonth = currentDate.getMonth();
  const firstDayIndex = new Date(currentYear, currentMonth, 1).getDay();
  const startOffset = firstDayIndex === 0 ? 6 : firstDayIndex - 1;
  const totalDaysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();

  return (
    <div className="p-4">
      <div className="grid grid-cols-7 gap-px">
        {["M", "T", "W", "T", "F", "S", "S"].map((d, i) => (
          <div
            key={i}
            className="text-center text-violet-400/40 text-xs py-2 font-medium"
          >
            {d}
          </div>
        ))}
        {Array.from({ length: 42 }, (_, i) => {
          const dayNum = i + 1 - startOffset;
          const isCurrentMonth = dayNum >= 1 && dayNum <= totalDaysInMonth;

          let calculatedDayStr = "";
          let hasBookingsOnThisDay = false;
          if (isCurrentMonth) {
            const lookaheadDate = new Date(currentYear, currentMonth, dayNum);
            calculatedDayStr = formatDateString(lookaheadDate);
            hasBookingsOnThisDay = Object.keys(slots).some(
              (k) => k.startsWith(calculatedDayStr) && slots[k] === "booked",
            );
          }

          const isToday =
            dayNum === 19 && currentMonth === 4 && currentYear === 2026;

          return (
            <div
              key={i}
              onClick={() => {
                if (isCurrentMonth) {
                  setCurrentDate(new Date(currentYear, currentMonth, dayNum));
                  setView("day");
                }
              }}
              className={`aspect-square rounded-xl p-1 text-center cursor-pointer transition-all ${
                !isCurrentMonth
                  ? "opacity-10 pointer-events-none"
                  : isToday
                    ? "bg-violet-600/30 border border-violet-500/40"
                    : "bg-violet-950/30 hover:bg-violet-900/30 border border-violet-900/20"
              }`}
            >
              <p
                className={`text-xs mt-1 ${isToday ? "text-violet-300 font-bold" : isCurrentMonth ? "text-white" : "text-violet-900"}`}
              >
                {isCurrentMonth ? dayNum : ""}
              </p>
              {hasBookingsOnThisDay && isCurrentMonth && (
                <span className="inline-block w-1 h-1 rounded-full bg-emerald-400 mt-1" />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export function AgendaView({ slotColors }) {
  // Static timeline data from your code context
  const agendaData = [
    {
      date: "Today, May 19",
      items: [
        {
          time: "10:00–13:00",
          client: "Jamie Torres",
          style: "Japanese Sleeve",
          status: "booked",
        },
        {
          time: "13:30–15:30",
          client: "Sam Rivera",
          style: "Fine Line Floral",
          status: "booked",
        },
        {
          time: "16:00–17:30",
          client: "Alex Kim",
          style: "Neo-Traditional Wolf",
          status: "booked",
        },
      ],
    },
    {
      date: "Tue, May 20",
      items: [
        {
          time: "10:00–12:00",
          client: "Casey Brooks",
          style: "Mandala",
          status: "booked",
        },
        {
          time: "14:00–16:00",
          client: "Open slot",
          style: "",
          status: "available",
        },
      ],
    },
  ];

  return (
    <div className="p-5 space-y-3">
      {agendaData.map((day) => (
        <div key={day.date}>
          <p className="text-violet-400/60 text-xs uppercase tracking-widest mb-2">
            {day.date}
          </p>
          <div className="space-y-2">
            {day.items.map((item, i) => (
              <div
                key={i}
                className={`flex items-center gap-4 p-3 rounded-xl border ${slotColors[item.status]}`}
              >
                <span className="text-xs w-28 shrink-0">{item.time}</span>
                <span className="text-sm font-medium flex-1">
                  {item.client}
                </span>
                <span className="text-xs opacity-60">{item.style}</span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export function DayView({ currentDate, hours, slots, toggleSlot, slotColors }) {
  return (
    <div className="p-5 space-y-2">
      <p style={playfair} className="text-white mb-4 text-base">
        {currentDate.toLocaleString("default", {
          weekday: "long",
          month: "long",
          day: "numeric",
        })}
      </p>
      {hours.map((h) => {
        const targetDayStr = formatDateString(currentDate);
        const key = `${targetDayStr}-${h}`;
        const status = slots[key] || "off";

        return (
          <div key={h} className="flex items-start gap-4">
            <span className="text-violet-400/40 text-xs w-14 text-right pt-2 shrink-0">
              {h > 12 ? `${h - 12}:00 PM` : `${h}:00 AM`}
            </span>
            <div className="flex-1">
              {status !== "off" ? (
                <div
                  onClick={() => toggleSlot(key)}
                  className={`rounded-xl px-4 py-2.5 text-sm cursor-pointer ${slotColors[status]} flex items-center gap-2`}
                >
                  {status === "break" && <Coffee size={13} />}
                  {status === "booked" && "Scheduled Booking Window"}
                  {status === "available" && "Open Slot Available"}
                  {status === "blocked" && "Blocked Off Time Frame"}
                </div>
              ) : (
                <div
                  onClick={() => toggleSlot(key)}
                  className="h-9 rounded-xl border border-dashed border-violet-900/20 hover:border-violet-700/30 hover:bg-violet-900/10 transition-all cursor-pointer flex items-center justify-center opacity-40 hover:opacity-100"
                >
                  <Plus size={12} className="text-violet-400" />
                </div>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
}
