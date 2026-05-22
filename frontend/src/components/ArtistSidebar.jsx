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
    { to: "/customer", icon: Settings, label: "Customer" },
    { to: "/artist", icon: LayoutDashboard, label: "Overview", end: true },
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
        <header className="sticky top-0 z-20 bg-[#120820]/80 backdrop-blur-xl border-b border-violet-900/20 px-6 py-3 flex items-center gap-4">
          <div className="flex-1 max-w-sm">
            <div className="flex items-center gap-2 bg-violet-900/20 border border-violet-900/30 rounded-xl px-3 py-2">
              <Search size={14} className="text-violet-400/60" />
              <input
                type="text"
                placeholder="Search anything..."
                className="bg-transparent text-sm text-violet-200/70 placeholder:text-violet-400/40 outline-none flex-1"
              />
            </div>
          </div>
          <div className="ml-auto flex items-center gap-3">
            <button className="relative text-violet-200/50 hover:text-violet-300 transition-colors p-2 rounded-xl hover:bg-violet-900/20">
              <Bell size={18} />
              <span className="absolute top-1.5 right-1.5 w-1.5 h-1.5 bg-violet-400 rounded-full" />
            </button>
            <div className="w-8 h-8 rounded-full bg-linear-to-br from-violet-500 to-indigo-600 flex items-center justify-center text-white text-xs font-semibold cursor-pointer">
              YM
            </div>
          </div>
        </header>

        <main className="flex-1 overflow-auto">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
