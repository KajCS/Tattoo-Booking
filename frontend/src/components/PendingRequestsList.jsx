import { CheckCircle2, XCircle } from "lucide-react";
import { Link } from "react-router";
import { ChevronRight } from "lucide-react";

export default function PendingRequestsList({ requests }) {
  const playfair = { fontFamily: "'Playfair Display', serif" };

  return (
    <div className="bg-[#1e0d35] border border-violet-900/40 rounded-2xl p-5 flex-1">
      <div className="flex items-center justify-between mb-4">
        <h3 style={playfair} className="text-white text-base">
          Pending
        </h3>
        <span className="bg-amber-500/20 text-amber-400 text-xs px-2 py-0.5 rounded-full border border-amber-500/20">
          {requests.length} new
        </span>
      </div>
      <div className="space-y-3">
        {requests.map((req, i) => (
          <div key={i} className="flex items-center gap-3 group">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-violet-700 to-indigo-800 flex items-center justify-center text-white text-xs font-semibold shrink-0">
              {req.avatar}
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-white text-xs font-medium truncate">
                {req.client}
              </p>
              <p className="text-violet-200/40 text-xs truncate">
                {req.style} · {req.date}
              </p>
            </div>
            <div className="flex gap-1.5 opacity-0 group-hover:opacity-100 transition-opacity">
              <button className="w-6 h-6 rounded-lg bg-emerald-500/20 text-emerald-400 hover:bg-emerald-500/30 transition-colors flex items-center justify-center">
                <CheckCircle2 size={12} />
              </button>
              <button className="w-6 h-6 rounded-lg bg-red-500/20 text-red-400 hover:bg-red-500/30 transition-colors flex items-center justify-center">
                <XCircle size={12} />
              </button>
            </div>
          </div>
        ))}
      </div>
      <Link
        to="/dashboard/appointments"
        className="mt-4 w-full flex items-center justify-center gap-1.5 py-2 bg-violet-900/30 border border-violet-800/30 rounded-xl text-violet-300 text-xs hover:bg-violet-800/40 transition-all"
      >
        Manage all <ChevronRight size={12} />
      </Link>
    </div>
  );
}
