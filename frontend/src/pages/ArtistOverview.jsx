import { useState } from "react";
import {
  CalendarDays,
  Clock,
  DollarSign,
  Users,
  TrendingUp,
  Star,
  ChevronRight,
  Plus,
  MessageSquare,
  Zap,
  Lock,
  CheckCircle2,
  AlertCircle,
  XCircle,
  MoreHorizontal,
  ArrowUpRight,
  Flame,
} from "lucide-react";
import { Link } from "react-router";

const playfair = { fontFamily: "'Playfair Display', serif" };

const todayAppointments = [
  {
    time: "10:00 AM",
    client: "Jamie Torres",
    style: "Japanese Sleeve",
    duration: "3h",
    status: "confirmed",
    avatar: "JT",
  },
  {
    time: "1:30 PM",
    client: "Sam Rivera",
    style: "Fine Line Floral",
    duration: "2h",
    status: "confirmed",
    avatar: "SR",
  },
  {
    time: "4:00 PM",
    client: "Alex Kim",
    style: "Neo-Traditional",
    duration: "1.5h",
    status: "pending",
    avatar: "AK",
  },
  {
    time: "6:00 PM",
    client: "Morgan Lee",
    style: "Blackwork Mandala",
    duration: "2h",
    status: "confirmed",
    avatar: "ML",
  },
];

const pendingRequests = [
  {
    client: "Casey Brooks",
    style: "Geometric Wolf",
    size: "A4",
    deposit: "$80",
    avatar: "CB",
    date: "May 22",
  },
  {
    client: "Riley Dane",
    style: "Watercolor Koi",
    size: "Half sleeve",
    deposit: "$150",
    avatar: "RD",
    date: "May 24",
  },
  {
    client: "Jordan Marsh",
    style: "Traditional Rose",
    size: "Small",
    deposit: "$50",
    avatar: "JM",
    date: "May 26",
  },
];

const recentActivity = [
  {
    icon: CheckCircle2,
    color: "text-emerald-400",
    text: "Jamie Torres confirmed deposit",
    time: "2m ago",
  },
  {
    icon: MessageSquare,
    color: "text-violet-400",
    text: "New message from Sam Rivera",
    time: "18m ago",
  },
  {
    icon: AlertCircle,
    color: "text-amber-400",
    text: "Alex Kim requested reschedule",
    time: "1h ago",
  },
  {
    icon: Star,
    color: "text-yellow-400",
    text: "New 5★ review from Priya Sharma",
    time: "3h ago",
  },
  {
    icon: XCircle,
    color: "text-red-400",
    text: "Morgan Lee cancelled – slot freed",
    time: "5h ago",
  },
  {
    icon: DollarSign,
    color: "text-emerald-400",
    text: "Payment received · $320 · Full session",
    time: "Yesterday",
  },
];

const quickStats = [
  {
    label: "Today's Sessions",
    value: "4",
    sub: "2 confirmed · 1 pending",
    icon: CalendarDays,
    trend: "+1 vs yesterday",
  },
  {
    label: "Monthly Revenue",
    value: "$6,840",
    sub: "72% of monthly goal",
    icon: DollarSign,
    trend: "+18% vs last month",
  },
  {
    label: "Pending Requests",
    value: "3",
    sub: "Respond within 24h",
    icon: Clock,
    trend: "2 new today",
  },
  {
    label: "Repeat Clients",
    value: "68%",
    sub: "12 loyal clients",
    icon: Users,
    trend: "+5% vs last month",
  },
];

const weekDays = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
const weekData = [
  { day: "Mon", slots: 4, booked: 4 },
  { day: "Tue", slots: 5, booked: 3 },
  { day: "Wed", slots: 4, booked: 4 },
  { day: "Thu", slots: 0, booked: 0 }, // day off
  { day: "Fri", slots: 5, booked: 2 },
  { day: "Sat", slots: 3, booked: 3 },
  { day: "Sun", slots: 0, booked: 0 }, // closed
];

const statusStyles = {
  confirmed: "bg-emerald-500/15 text-emerald-400 border border-emerald-500/20",
  pending: "bg-amber-500/15 text-amber-400 border border-amber-500/20",
  cancelled: "bg-red-500/15 text-red-400 border border-red-500/20",
};

export default function DashboardHome() {
  const [currentTime] = useState(new Date());

  const greeting =
    currentTime.getHours() < 12
      ? "Good morning"
      : currentTime.getHours() < 17
        ? "Good afternoon"
        : "Good evening";

  return (
    <div className="p-6 space-y-6 w-full">
      {/* Header */}
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-violet-400/70 text-sm mb-1">{greeting}, Yoshi ✦</p>
          <h1 style={playfair} className="text-white">
            Your Studio, Today
          </h1>
          <p className="text-violet-200/40 text-sm mt-1">
            Tuesday, May 19, 2026 · Studio City, CA
          </p>
        </div>
        <div className="flex items-center gap-2 shrink-0">
          <Link
            to="/dashboard/availability"
            className="flex items-center gap-1.5 px-3 py-2 bg-violet-900/30 border border-violet-700/30 text-violet-300 text-sm rounded-xl hover:bg-violet-800/40 transition-all"
          >
            <Lock size={13} />
            Block Date
          </Link>
          <Link
            to="/dashboard/appointments"
            className="flex items-center gap-1.5 px-3 py-2 bg-gradient-to-r from-violet-600 to-indigo-600 text-white text-sm rounded-xl hover:from-violet-700 hover:to-indigo-700 transition-all"
          >
            <Plus size={13} />
            New Slot
          </Link>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {quickStats.map((stat) => (
          <div
            key={stat.label}
            className="bg-[#1e0d35] border border-violet-900/40 rounded-2xl p-4 hover:border-violet-500/40 transition-all group"
          >
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
        ))}
      </div>

      {/* Main Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
        {/* Today's Schedule */}
        <div className="lg:col-span-2 bg-[#1e0d35] border border-violet-900/40 rounded-2xl p-5">
          <div className="flex items-center justify-between mb-5">
            <div>
              <h3 style={playfair} className="text-white">
                Today's Schedule
              </h3>
              <p className="text-violet-200/40 text-xs mt-0.5">
                4 sessions · Est. $1,240
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
            {todayAppointments.map((appt, i) => (
              <div
                key={i}
                className="flex items-center gap-4 p-3 rounded-xl bg-violet-950/30 border border-violet-900/20 hover:border-violet-700/30 transition-all group cursor-pointer"
              >
                <div className="text-center w-16 shrink-0">
                  <p className="text-violet-300 text-xs font-medium">
                    {appt.time}
                  </p>
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

        {/* Sidebar: Pending + Quick Actions */}
        <div className="flex flex-col gap-4">
          {/* Pending Requests */}
          <div className="bg-[#1e0d35] border border-violet-900/40 rounded-2xl p-5 flex-1">
            <div className="flex items-center justify-between mb-4">
              <h3 style={playfair} className="text-white text-base">
                Pending
              </h3>
              <span className="bg-amber-500/20 text-amber-400 text-xs px-2 py-0.5 rounded-full border border-amber-500/20">
                {pendingRequests.length} new
              </span>
            </div>
            <div className="space-y-3">
              {pendingRequests.map((req, i) => (
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

          {/* Quick Actions */}
          <div className="bg-[#1e0d35] border border-violet-900/40 rounded-2xl p-4">
            <p className="text-violet-200/50 text-xs mb-3 uppercase tracking-widest">
              Quick Actions
            </p>
            <div className="grid grid-cols-2 gap-2">
              {[
                { icon: Zap, label: "Upload Flash", to: "/dashboard/flash" },
                {
                  icon: MessageSquare,
                  label: "Messages",
                  to: "/dashboard/messages",
                },
                {
                  icon: Lock,
                  label: "Block Dates",
                  to: "/dashboard/availability",
                },
                {
                  icon: TrendingUp,
                  label: "Earnings",
                  to: "/dashboard/earnings",
                },
              ].map(({ icon: Icon, label, to }) => (
                <Link
                  key={label}
                  to={to}
                  className="flex flex-col items-center gap-2 p-3 rounded-xl bg-violet-950/40 border border-violet-900/20 hover:border-violet-700/30 hover:bg-violet-900/20 transition-all text-center"
                >
                  <Icon size={16} className="text-violet-400" />
                  <span className="text-violet-200/60 text-xs leading-tight">
                    {label}
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Grid: Weekly Calendar Preview + Activity Feed */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
        {/* Weekly View */}
        <div className="lg:col-span-2 bg-[#1e0d35] border border-violet-900/40 rounded-2xl p-5">
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
              to="/dashboard/availability"
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
                    <p className="text-violet-900/60 text-xs">—</p>
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

        {/* Activity Feed */}
        <div className="bg-[#1e0d35] border border-violet-900/40 rounded-2xl p-5">
          <div className="flex items-center gap-2 mb-5">
            <Flame size={15} className="text-violet-400" />
            <h3 style={playfair} className="text-white text-base">
              Activity
            </h3>
          </div>
          <div className="space-y-4">
            {recentActivity.map((item, i) => (
              <div key={i} className="flex items-start gap-3">
                <div className="mt-0.5 shrink-0">
                  <item.icon size={14} className={item.color} />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-violet-100/80 text-xs leading-relaxed">
                    {item.text}
                  </p>
                  <p className="text-violet-400/40 text-xs mt-0.5">
                    {item.time}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
