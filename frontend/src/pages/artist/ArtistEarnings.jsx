import { useState } from "react";
import { Download } from "lucide-react";
import EarningsStatsCards from "../../components/EarningsStatsCards";
import RevenueCharts from "../../components/RevenueCharts";
import WeeklyChart from "../../components/WeeklyChart";
import TransactionTable from "../../components/TransactionTable";

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

      {/* Stats Cards */}
      <EarningsStatsCards
        currentRevenue={currentRevenue}
        prevRevenue={prevRevenue}
        change={change}
      />

      {/* Revenue Charts */}
      <RevenueCharts
        chartData={chartData}
        xKey={xKey}
        period={period}
        styleBreakdown={styleBreakdown}
      />

      {/* Weekly Chart */}
      <WeeklyChart weeklyRevenue={weeklyRevenue} />

      {/* Transaction Table */}
      <TransactionTable transactions={transactions} />
    </div>
  );
}
