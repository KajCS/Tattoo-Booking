import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
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

const WeeklyChart = ({ weeklyRevenue }) => {
  return (
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
  );
};

export default WeeklyChart;
