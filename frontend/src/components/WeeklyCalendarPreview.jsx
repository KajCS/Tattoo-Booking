import { Link } from "react-router";
import { ChevronRight } from "lucide-react";

export default function WeeklyCalendarPreview({ weekData }) {
  const playfair = { fontFamily: "'Playfair Display', serif" };

  return (
    <div className="bg-[#1e0d35] border border-violet-900/40 rounded-2xl p-5">
      <div className="flex items-center justify-between mb-5">
        <div>
          <h3 style={playfair} className="text-white">
            This Week
          </h3>
          <p className="text-violet-200/40 text-xs mt-0.5">
            May 19 – May 25, 2026
          </p>
        </div>
        <Link
          to="/artist/availability"
          className="text-violet-400 text-xs flex items-center gap-1 hover:text-violet-300"
        >
          Full calendar <ChevronRight size={13} />
        </Link>
      </div>
      <div className="grid grid-cols-7 gap-2">
        {weekData.map((d) => (
          <div key={d.day} className="text-center">
            <p className="text-violet-400/50 text-xs mb-2">{d.day}</p>
            <div
              className={`rounded-xl py-3 px-1 ${d.day === "Wed" ? "bg-violet-600/30 border border-violet-500/40" : "bg-violet-950/30 border border-violet-900/20"}`}
            >
              {d.slots === 0 ? (
                <p className="text-sm font-semibold text-white">
                  0/{d.slots}
                  <p className="text-violet-400/40 text-xs">slots</p>
                </p>
              ) : (
                <>
                  <p
                    className={`text-sm font-semibold ${d.booked === d.slots ? "text-emerald-400" : "text-white"}`}
                  >
                    {d.booked}/{d.slots}
                  </p>
                  <p className="text-violet-400/40 text-xs">slots</p>
                </>
              )}
            </div>
            {d.day === "Wed" && (
              <span className="inline-block mt-1.5 w-1.5 h-1.5 bg-violet-400 rounded-full" />
            )}
          </div>
        ))}
      </div>
      <div className="mt-4 flex items-center gap-4 text-xs text-violet-200/40">
        <span className="flex items-center gap-1.5">
          <span className="w-2.5 h-2.5 rounded bg-emerald-500/30 border border-emerald-500/30" />
          Fully booked
        </span>
        <span className="flex items-center gap-1.5">
          <span className="w-2.5 h-2.5 rounded bg-violet-950/30 border border-violet-900/20" />
          Available
        </span>
        <span className="flex items-center gap-1.5">
          <span className="w-2.5 h-2.5 rounded bg-violet-900/20" />
          Day off
        </span>
      </div>
    </div>
  );
}
