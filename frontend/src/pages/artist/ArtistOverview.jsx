import { useState } from "react";
import {
  CalendarDays,
  CheckCircle2,
  MessageSquare,
  AlertCircle,
  Star,
  XCircle,
  DollarSign,
  ArrowUpRight,
} from "lucide-react";
import TodayAppointmentsList from "../../components/TodayAppointmentsList";
import PendingRequestsList from "../../components/PendingRequestsList";
import QuickStatsCard from "../../components/QuickStatsCard";
import WeeklyCalendarPreview from "../../components/WeeklyCalendarPreview";
import ActivityFeed from "../../components/ActivityFeed";

export default function DashboardHome() {
  const [currentTime] = useState(new Date());

  const todayAppointments = [
    {
      time: "10:00 AM",
      client: "Sam Tesoro",
      style: "Japanese Sleeve",
      duration: "3h",
      status: "confirmed",
      avatar: "ST",
    },
    {
      time: "1:30 PM",
      client: "Ej Liu",
      style: "Fine Line Floral",
      duration: "2h",
      status: "confirmed",
      avatar: "EL",
    },
    {
      time: "4:00 PM",
      client: "Brandon Santos",
      style: "Neo-Traditional",
      duration: "1.5h",
      status: "pending",
      avatar: "BS",
    },
    {
      time: "6:00 PM",
      client: "Luis Palparan",
      style: "Blackwork Mandala",
      duration: "2h",
      status: "confirmed",
      avatar: "LP",
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

  const quickStats = [
    {
      label: "Today's Sessions",
      value: "4",
      sub: "2 confirmed · 1 pending",
      icon: CalendarDays,
      trend: "+1 vs yesterday",
    },
  ];

  const weekData = [
    { day: "Mon", slots: 4, booked: 4 },
    { day: "Tue", slots: 5, booked: 3 },
    { day: "Wed", slots: 4, booked: 4 },
    { day: "Thu", slots: 0, booked: 0 },
    { day: "Fri", slots: 5, booked: 2 },
    { day: "Sat", slots: 3, booked: 3 },
    { day: "Sun", slots: 0, booked: 0 },
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

  return (
    <div className="p-6 space-y-6 w-full">
      {/* Header */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
        {/* Today's Schedule */}
        <div className="lg:col-span-2">
          <TodayAppointmentsList
            appointments={todayAppointments}
            estimatedRevenue="1,240"
          />
        </div>

        {/* Sidebar: Pending + Quick Actions */}
        <div className="flex flex-col gap-4">
          <PendingRequestsList requests={pendingRequests} />
          {quickStats.map((stat) => (
            <QuickStatsCard key={stat.label} stat={stat} />
          ))}
        </div>
      </div>

      {/* Bottom Grid: Weekly Calendar Preview + Activity Feed */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
        <div className="lg:col-span-2">
          <WeeklyCalendarPreview weekData={weekData} />
        </div>
        <ActivityFeed activities={recentActivity} />
      </div>
    </div>
  );
}
