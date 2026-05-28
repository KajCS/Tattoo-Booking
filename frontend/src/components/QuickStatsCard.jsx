import { ArrowUpRight } from "lucide-react";

export default function QuickStatsCard({ stat }) {
  return (
    <div className="bg-[#1e0d35] border border-violet-900/40 rounded-2xl p-4">
      <div>
        <div className="flex items-start justify-between mb-3">
          <div className="bg-violet-600/15 rounded-xl p-2">
            <stat.icon size={16} className="text-violet-400" />
          </div>
          <span className="text-emerald-400/80 text-xs flex items-center gap-0.5">
            <ArrowUpRight size={11} />
            {stat.trend.split(" ")[0]}
          </span>
        </div>
        <p className="text-white text-xl font-semibold">{stat.value}</p>
        <p className="text-violet-200/50 text-xs mt-0.5">{stat.sub}</p>
        <p className="text-violet-400/40 text-xs mt-2">{stat.label}</p>
      </div>
    </div>
  );
}
