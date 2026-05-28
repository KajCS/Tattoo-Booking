import { Filter } from "lucide-react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts";

const playfair = { fontFamily: "'Playfair Display', serif" };

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-[#1e0d35] border border-violet-900/50 rounded-xl px-3 py-2 text-xs shadow-xl backdrop-blur-md">
        <p className="text-violet-400/60 mb-0.5">{label}</p>
        <p className="text-white font-semibold">
          ${payload[0].value.toLocaleString()}
        </p>
      </div>
    );
  }
  return null;
};

const RevenueCharts = ({ chartData, xKey, period, styleBreakdown }) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
      {/* Revenue Area Curve */}
      <div className="lg:col-span-2 bg-[#1e0d35]/60 backdrop-blur-md border border-violet-900/40 rounded-2xl p-5 shadow-xl">
        <div className="flex items-center justify-between mb-5">
          <div>
            <h3 style={playfair} className="text-white text-lg font-medium">
              Revenue Trend
            </h3>
            <p className="text-violet-200/40 text-xs mt-0.5">
              {period === "week"
                ? "This week"
                : period === "month"
                  ? "Last 7 months"
                  : "This year"}
            </p>
          </div>
          <button className="flex items-center gap-1.5 text-violet-400/50 hover:text-violet-200 text-xs font-medium transition-colors">
            <Filter size={12} /> Filters
          </button>
        </div>
        <div className="w-full h-[220px]">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart
              data={chartData}
              margin={{ top: 5, right: 5, left: -20, bottom: 0 }}
            >
              <defs>
                <linearGradient id="revenueGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#7c3aed" stopOpacity={0.4} />
                  <stop offset="95%" stopColor="#7c3aed" stopOpacity={0.01} />
                </linearGradient>
              </defs>
              <CartesianGrid
                strokeDasharray="3 3"
                stroke="#2d1060"
                vertical={false}
              />
              <XAxis
                dataKey={xKey}
                tick={{ fill: "#6b21a8", fontSize: 11, fontWeight: 500 }}
                axisLine={false}
                tickLine={false}
              />
              <YAxis
                tick={{ fill: "#6b21a8", fontSize: 11, fontWeight: 500 }}
                axisLine={false}
                tickLine={false}
                tickFormatter={(v) => `$${v / 1000}k`}
              />
              <Tooltip content={<CustomTooltip />} />
              <Area
                type="monotone"
                dataKey="revenue"
                stroke="#8b5cf6"
                strokeWidth={2.5}
                fill="url(#revenueGrad)"
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Ink Style Share Pie */}
      <div className="bg-[#1e0d35]/60 backdrop-blur-md border border-violet-900/40 rounded-2xl p-5 shadow-xl flex flex-col justify-between">
        <div>
          <h3 style={playfair} className="text-white text-lg font-medium mb-1">
            Style Breakdown
          </h3>
          <p className="text-violet-200/40 text-xs">Revenue by tattoo style</p>
        </div>
        <div className="flex justify-center my-2 shrink-0">
          <ResponsiveContainer width={150} height={150}>
            <PieChart>
              <Pie
                data={styleBreakdown}
                cx="50%"
                cy="50%"
                innerRadius={42}
                outerRadius={68}
                dataKey="value"
                stroke="none"
              >
                {styleBreakdown.map((entry, i) => (
                  <Cell key={i} fill={entry.color} />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
        </div>
        <div className="space-y-2 border-t border-violet-900/20 pt-3">
          {styleBreakdown.map((s) => (
            <div key={s.name} className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span
                  className="w-2.5 h-2.5 rounded-full shrink-0"
                  style={{ background: s.color }}
                />
                <span className="text-violet-300/60 text-xs font-medium">
                  {s.name}
                </span>
              </div>
              <span className="text-white text-xs font-bold">{s.value}%</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RevenueCharts;
