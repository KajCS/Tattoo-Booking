import { useState } from "react";
import {
  DollarSign,
  TrendingUp,
  TrendingDown,
  ArrowUpRight,
  ArrowDownRight,
  Download,
  Calendar,
  Filter,
} from "lucide-react";
import {
  AreaChart,
  Area,
  BarChart,
  Bar,
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

const monthlyRevenue = [
  { month: "Nov", revenue: 3200, sessions: 14 },
  { month: "Dec", revenue: 4100, sessions: 18 },
  { month: "Jan", revenue: 3800, sessions: 16 },
  { month: "Feb", revenue: 4600, sessions: 20 },
  { month: "Mar", revenue: 5200, sessions: 22 },
  { month: "Apr", revenue: 5800, sessions: 24 },
  { month: "May", revenue: 6840, sessions: 28 },
];

const weeklyRevenue = [
  { day: "Mon", revenue: 960 },
  { day: "Tue", revenue: 840 },
  { day: "Wed", revenue: 1280 },
  { day: "Thu", revenue: 0 },
  { day: "Fri", revenue: 1100 },
  { day: "Sat", revenue: 660 },
  { day: "Sun", revenue: 0 },
];

const styleBreakdown = [
  { name: "Japanese", value: 32, color: "#8b5cf6" },
  { name: "Fine Line", value: 24, color: "#6d28d9" },
  { name: "Blackwork", value: 18, color: "#4c1d95" },
  { name: "Geometric", value: 14, color: "#a78bfa" },
  { name: "Other", value: 12, color: "#2e1065" },
];

const transactions = [
  {
    client: "Jamie Torres",
    style: "Japanese Sleeve",
    amount: "$480",
    deposit: "$120",
    date: "May 19",
    status: "paid",
  },
  {
    client: "Sam Rivera",
    style: "Fine Line Floral",
    amount: "$280",
    deposit: "$80",
    date: "May 19",
    status: "paid",
  },
  {
    client: "Priya Sharma",
    style: "Blackwork Lotus",
    amount: "$320",
    deposit: "$80",
    date: "May 14",
    status: "paid",
  },
  {
    client: "Casey Brooks",
    style: "Mandala (deposit)",
    amount: "$150",
    deposit: "$150",
    date: "May 13",
    status: "deposit",
  },
  {
    client: "Devon Walsh",
    style: "Traditional Anchor",
    amount: "$40",
    deposit: "$40",
    date: "May 12",
    status: "forfeited",
  },
  {
    client: "Jordan Marsh",
    style: "Fine Line Bee",
    amount: "$180",
    deposit: "$60",
    date: "May 10",
    status: "paid",
  },
];

const statusColors = {
  paid: "text-emerald-400 bg-emerald-500/10 border-emerald-500/20",
  deposit: "text-amber-400 bg-amber-500/10 border-amber-500/20",
  forfeited: "text-red-400 bg-red-500/10 border-red-500/20",
};

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

export default function ArtistEarnings() {
  const [period, setPeriod] = useState("month");

  const chartData = period === "week" ? weeklyRevenue : monthlyRevenue;
  const xKey = period === "week" ? "day" : "month";

  const currentRevenue = 6840;
  const prevRevenue = 5800;
  const change = Math.round(
    ((currentRevenue - prevRevenue) / prevRevenue) * 100,
  );

  return (
    <div className="p-6 max-w-[1400px] mx-auto space-y-6 text-violet-100 selection:bg-violet-500/30">
      {/* Header */}
      <div className="flex items-center justify-between flex-wrap gap-4">
        <div>
          <h1 style={playfair} className="text-3xl text-white mb-1">
            Earnings
          </h1>
          <p className="text-violet-200/40 text-sm">
            Revenue analytics and payment tracking
          </p>
        </div>
        <div className="flex items-center gap-2">
          <div className="flex items-center bg-violet-950/50 border border-violet-900/30 rounded-xl p-1">
            {["week", "month", "year"].map((p) => (
              <button
                key={p}
                onClick={() => setPeriod(p)}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium capitalize transition-all ${
                  period === p
                    ? "bg-violet-600/30 text-violet-200 border border-violet-500/30 shadow-sm"
                    : "text-violet-400/50 hover:text-violet-200"
                }`}
              >
                {p}
              </button>
            ))}
          </div>
          <button className="flex items-center gap-1.5 px-3.5 py-2 bg-violet-900/30 border border-violet-700/30 text-violet-300 text-sm font-medium rounded-xl hover:bg-violet-800/40 transition-all shadow-sm">
            <Download size={13} /> Export
          </button>
        </div>
      </div>

      {/* KPI Performance Matrix */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {[
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
        ].map((kpi) => (
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
              <p className="text-violet-400/40 text-xs font-medium">
                {kpi.sub}
              </p>
              <p className="text-violet-400/30 text-xs font-medium border-t border-violet-900/20 pt-2 mt-2 uppercase tracking-wider">
                {kpi.label}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Analytics Visualization Section */}
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
            <h3
              style={playfair}
              className="text-white text-lg font-medium mb-1"
            >
              Style Breakdown
            </h3>
            <p className="text-violet-200/40 text-xs">
              Revenue by tattoo style
            </p>
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

      {/* Workflow Peak Histograms */}
      <div className="bg-[#1e0d35]/60 backdrop-blur-md border border-violet-900/40 rounded-2xl p-5 shadow-xl">
        <h3 style={playfair} className="text-white text-lg font-medium mb-1">
          Sessions per Day
        </h3>
        <p className="text-violet-200/40 text-xs mb-4">
          Peak booking patterns this week
        </p>
        <div className="w-full h-[140px]">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={weeklyRevenue}
              margin={{ top: 0, right: 0, left: -30, bottom: 0 }}
            >
              <CartesianGrid
                strokeDasharray="3 3"
                stroke="#2d1060"
                vertical={false}
              />
              <XAxis
                dataKey="day"
                tick={{ fill: "#6b21a8", fontSize: 11, fontWeight: 500 }}
                axisLine={false}
                tickLine={false}
              />
              <YAxis
                tick={{ fill: "#6b21a8", fontSize: 11, fontWeight: 500 }}
                axisLine={false}
                tickLine={false}
              />
              <Tooltip content={<CustomTooltip />} />
              <Bar
                dataKey="revenue"
                fill="#7c3aed"
                radius={[5, 5, 0, 0]}
                maxBarSize={45}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Transaction Ledger Table */}
      <div className="bg-[#1e0d35]/60 backdrop-blur-md border border-violet-900/40 rounded-2xl overflow-hidden shadow-xl">
        <div className="flex items-center justify-between px-5 py-4 border-b border-violet-900/30 bg-violet-950/20">
          <h3 style={playfair} className="text-white text-lg font-medium">
            Recent Transactions
          </h3>
          <button className="text-violet-400/50 hover:text-violet-200 text-xs font-semibold transition-colors">
            View all ledger
          </button>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full min-w-[600px]">
            <thead>
              <tr className="border-b border-violet-900/20 bg-violet-950/10">
                {[
                  "Client",
                  "Service / Flash",
                  "Amount",
                  "Deposit",
                  "Date",
                  "Status",
                ].map((h) => (
                  <th
                    key={h}
                    className="text-left text-violet-400/50 text-xs uppercase tracking-wider px-5 py-3 font-bold"
                  >
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-violet-900/15">
              {transactions.map((t, i) => (
                <tr
                  key={i}
                  className="hover:bg-violet-900/10 transition-colors group"
                >
                  <td className="px-5 py-3.5">
                    <div className="flex items-center gap-3">
                      <div className="w-7 h-7 rounded-full bg-gradient-to-br from-violet-600 to-indigo-700 flex items-center justify-center text-white text-[10px] font-bold shadow-md">
                        {t.client
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </div>
                      <span className="text-white text-sm font-medium group-hover:text-violet-200 transition-colors">
                        {t.client}
                      </span>
                    </div>
                  </td>
                  <td className="px-5 py-3.5 text-violet-300/70 text-sm font-medium">
                    {t.style}
                  </td>
                  <td className="px-5 py-3.5 text-white text-sm font-semibold">
                    {t.amount}
                  </td>
                  <td className="px-5 py-3.5 text-violet-400/60 text-sm font-medium">
                    {t.deposit}
                  </td>
                  <td className="px-5 py-3.5 text-violet-400/60 text-sm font-medium">
                    {t.date}
                  </td>
                  <td className="px-5 py-3.5">
                    <span
                      className={`px-2.5 py-1 rounded-full text-[11px] uppercase font-bold border tracking-wider shadow-sm inline-block ${statusColors[t.status]}`}
                    >
                      {t.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
