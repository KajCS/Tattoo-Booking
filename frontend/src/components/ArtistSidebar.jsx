import { useState } from "react";
import {
  LayoutDashboard,
  CalendarDays,
  Clock,
  Users,
  ImageIcon,
  Zap,
  MessageSquare,
  TrendingUp,
  Settings,
  ChevronLeft,
  Bell,
  Search,
  LogOut,
  Cat,
} from "lucide-react";
import { Outlet, NavLink, useNavigate } from "react-router";

export default function ArtistSidebar() {
  const [collapsed, setCollapsed] = useState(false);
  const navigate = useNavigate();

  const navItems = [
    { to: "/artist", icon: LayoutDashboard, label: "Overview", end: true },
    { to: "/artist/appointments", icon: CalendarDays, label: "Appointments" },
    { to: "/artist/availability", icon: Clock, label: "Availability" },
    { to: "/artist/clients", icon: Users, label: "Clients" },
    { to: "/artist/portfolio", icon: ImageIcon, label: "Portfolio" },
    { to: "/artist/messages", icon: MessageSquare, label: "Messages" },
    { to: "/artist/earnings", icon: TrendingUp, label: "Earnings" },
    { to: "/artist/settings", icon: Settings, label: "Settings" },
  ];

  return (
    <div className="min-h-screen flex bg-[#120820] font-sans">
      <aside
        className={`${collapsed ? "w-16" : "w-56"} shrink-0 flex flex-col bg-[#0d0618]/90 backdrop-blur-xl border-r border-violet-900/30 transition-all duration-300 z-30 sticky top-0 h-screen`}
      >
        <div className="flex items-center gap-3 px-4 py-5  border-b border-violet-900/20">
          <div className="w-8 h-8 rounded-lg bg-linear-to-br from-violet-500 to-indigo-600 flex items-center justify-center shrink-0">
            <Cat className="text-white" size={16} />
          </div>
          {!collapsed && (
            <span className="text-white text-lg font-semibold tracking-wide">
              Yoshi<span className="text-violet-400">Cat</span>
            </span>
          )}

          <button
            onClick={() => setCollapsed(!collapsed)}
            className="ml-auto text-violet-400/60 hover:text-violet-300 transition-colors"
          >
            <ChevronLeft
              className={`transition-transform ${collapsed ? "rotate-180" : ""}`}
              size={16}
            />
          </button>
        </div>

        {!collapsed && (
          <div className="px-4 py-4 border-b border-violet-900/20">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-linear-to-br from-violet-500 to-indigo-600 flex items-center justify-center text-white text-sm font-semibold shrink-0">
                KC
              </div>
              <div className="min-w-0">
                <p className="text-white text-xs font-medium truncate">
                  Ken Cudal
                </p>
                <p className="text-violet-400/60 text-xs truncate">
                  kajcudal@addu.edu.ph
                </p>
              </div>
            </div>
          </div>
        )}

        <nav className="flex-1 px-2 py-4 space-y-0.5 overflow-y-auto">
          {navItems.map(({ to, icon: Icon, label, end }) => (
            <NavLink
              key={to}
              to={to}
              end={end}
              className={({ isActive }) =>
                `flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm transition-all group ${
                  isActive
                    ? "bg-violet-600/20 text-violet-300 border border-violet-500/30"
                    : "text-violet-200/50 hover:bg-violet-900/20 hover:text-violet-200"
                }`
              }
            >
              {({ isActive }) => (
                <>
                  <Icon
                    size={16}
                    className={` shrink-0 ${isActive ? "text-violet-400" : " group-hover:text-violet-300"}`}
                  />
                  {!collapsed && <span className="truncate">{label}</span>}
                  {!collapsed && label === "Messages" && (
                    <span className="ml-auto bg-violet-500 text-white text-xs px-1.5 py-0.5 rounded-full">
                      3
                    </span>
                  )}
                </>
              )}
            </NavLink>
          ))}
        </nav>

        <div className="px-2 py-4 border-t border-violet-900/20 space-y-0.5">
          <button
            onClick={() => navigate("/")}
            className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm text-violet-200/40 hover:text-violet-200 hover:bg-violet-900/20 transition-all w-full"
          >
            <LogOut size={16} className="shrink-0" />
            {!collapsed && <span>Exit Dashboard</span>}
          </button>
        </div>
      </aside>

      <div className="flex-1 flex flex-col min-w-0">
        <main className="flex-1 overflow-auto">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
