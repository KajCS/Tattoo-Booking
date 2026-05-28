import {
  DollarSign,
  Calendar,
  TrendingUp,
  TrendingDown,
  ArrowUpRight,
  ArrowDownRight,
} from "lucide-react";

const EarningsStatsCards = ({ currentRevenue, prevRevenue, change }) => {
  const kpis = [
    {
      label: "Monthly Revenue",
      value: "$6,840",
      change: `+${change}%`,
      up: true,
      icon: DollarSign,
      sub: "vs. last month",
    },
    {
      label: "Sessions This Month",
      value: "28",
      change: "+4",
      up: true,
      icon: Calendar,
      sub: "vs. last month",
    },
    {
      label: "Avg. Session Value",
      value: "$244",
      change: "+$18",
      up: true,
      icon: TrendingUp,
      sub: "vs. last month",
    },
    {
      label: "Cancellation Rate",
      value: "8%",
      change: "-2%",
      up: false,
      icon: TrendingDown,
      sub: "vs. last month",
    },
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {kpis.map((kpi) => (
        <div
          key={kpi.label}
          className="bg-[#1e0d35]/60 backdrop-blur-md border border-violet-900/40 rounded-2xl p-5 shadow-xl flex flex-col justify-between"
        >
          <div className="flex items-start justify-between mb-3">
            <div className="bg-violet-600/15 rounded-xl p-2.5">
              <kpi.icon size={16} className="text-violet-400" />
            </div>
            <span
              className={`flex items-center gap-0.5 text-xs font-semibold px-2 py-0.5 rounded-md ${kpi.up ? "text-emerald-400 bg-emerald-500/5" : "text-red-400 bg-red-500/5"}`}
            >
              {kpi.up ? (
                <ArrowUpRight size={12} />
              ) : (
                <ArrowDownRight size={12} />
              )}
              {kpi.change}
            </span>
          </div>
          <div>
            <p className="text-white text-2xl font-bold tracking-tight mb-0.5">
              {kpi.value}
            </p>
            <p className="text-violet-400/40 text-xs font-medium">{kpi.sub}</p>
            <p className="text-violet-400/30 text-xs font-medium border-t border-violet-900/20 pt-2 mt-2 uppercase tracking-wider">
              {kpi.label}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default EarningsStatsCards;
