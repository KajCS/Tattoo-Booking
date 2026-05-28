import { ChevronRight, MoreHorizontal } from "lucide-react";
import { Link } from "react-router";

const statusStyles = {
  confirmed: "bg-emerald-500/15 text-emerald-400 border border-emerald-500/20",
  pending: "bg-amber-500/15 text-amber-400 border border-amber-500/20",
  cancelled: "bg-red-500/15 text-red-400 border border-red-500/20",
};

export default function TodayAppointmentsList({
  appointments,
  estimatedRevenue,
}) {
  const playfair = { fontFamily: "'Playfair Display', serif" };

  return (
    <div className="bg-[#1e0d35] border border-violet-900/40 rounded-2xl p-5">
      <div className="flex items-center justify-between mb-5">
        <div>
          <h3 style={playfair} className="text-white">
            Today's Schedule
          </h3>
          <p className="text-violet-200/40 text-xs mt-0.5">
            {appointments.length} sessions · Est. ${estimatedRevenue}
          </p>
        </div>
        <Link
          to="/dashboard/appointments"
          className="text-violet-400 text-xs flex items-center gap-1 hover:text-violet-300 transition-colors"
        >
          View all <ChevronRight size={13} />
        </Link>
      </div>

      <div className="space-y-3">
        {appointments.map((appt, i) => (
          <div
            key={i}
            className="flex items-center gap-4 p-3 rounded-xl bg-violet-950/30 border border-violet-900/20 hover:border-violet-700/30 transition-all group cursor-pointer"
          >
            <div className="text-center w-16 shrink-0">
              <p className="text-violet-300 text-xs font-medium">{appt.time}</p>
              <p className="text-violet-400/40 text-xs">{appt.duration}</p>
            </div>
            <div className="w-px h-8 bg-violet-900/40" />
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-violet-500 to-indigo-600 flex items-center justify-center text-white text-xs font-semibold shrink-0">
              {appt.avatar}
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-white text-sm font-medium truncate">
                {appt.client}
              </p>
              <p className="text-violet-200/50 text-xs truncate">
                {appt.style}
              </p>
            </div>
            <span
              className={`px-2.5 py-1 rounded-full text-xs ${statusStyles[appt.status]}`}
            >
              {appt.status}
            </span>
            <button className="opacity-0 group-hover:opacity-100 transition-opacity text-violet-400/50 hover:text-violet-300">
              <MoreHorizontal size={15} />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
