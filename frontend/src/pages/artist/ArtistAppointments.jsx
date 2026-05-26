import { useState } from "react";
import {
  Search,
  Filter,
  ChevronDown,
  CheckCircle2,
  XCircle,
  Clock,
  MessageSquare,
  MoreHorizontal,
  X,
  Calendar,
  DollarSign,
  AlertCircle,
  RefreshCw,
  User,
  FileText,
  Image as ImageIcon,
} from "lucide-react";

const playfair = { fontFamily: "'Playfair Display', serif" };

const statusConfig = {
  pending: {
    label: "Pending",
    color: "text-amber-400",
    bg: "bg-amber-500/10",
    border: "border-amber-500/20",
  },
  confirmed: {
    label: "Confirmed",
    color: "text-emerald-400",
    bg: "bg-emerald-500/10",
    border: "border-emerald-500/20",
  },
  completed: {
    label: "Completed",
    color: "text-blue-400",
    bg: "bg-blue-500/10",
    border: "border-blue-500/20",
  },
  cancelled: {
    label: "Cancelled",
    color: "text-red-400",
    bg: "bg-red-500/10",
    border: "border-red-500/20",
  },
  reschedule: {
    label: "Reschedule Req.",
    color: "text-orange-400",
    bg: "bg-orange-500/10",
    border: "border-orange-500/20",
  },
  "no-show": {
    label: "No Show",
    color: "text-rose-400",
    bg: "bg-rose-500/10",
    border: "border-rose-500/20",
  },
};

const appointments = [
  {
    id: 1,
    client: "Jamie Torres",
    avatar: "JT",
    style: "Japanese Sleeve",
    date: "May 19, 2026",
    time: "10:00 AM",
    duration: "3h",
    deposit: "$120",
    depositPaid: true,
    total: "$480",
    status: "confirmed",
    notes:
      "Full color, koi fish + cherry blossoms. Client has reference images. Sensitive skin – test patch done.",
    references: 3,
  },
  {
    id: 2,
    client: "Sam Rivera",
    avatar: "SR",
    style: "Fine Line Floral",
    date: "May 19, 2026",
    time: "1:30 PM",
    duration: "2h",
    deposit: "$80",
    depositPaid: true,
    total: "$280",
    status: "confirmed",
    notes: "Minimal fine line roses on forearm. Very specific about spacing.",
    references: 2,
  },
  {
    id: 3,
    client: "Alex Kim",
    avatar: "AK",
    style: "Neo-Traditional Wolf",
    date: "May 19, 2026",
    time: "4:00 PM",
    duration: "1.5h",
    deposit: "$60",
    depositPaid: false,
    total: "$200",
    status: "pending",
    notes: "First tattoo. Needs consultation call before session.",
    references: 1,
  },
  {
    id: 4,
    client: "Casey Brooks",
    avatar: "CB",
    style: "Geometric Mandala",
    date: "May 22, 2026",
    time: "11:00 AM",
    duration: "4h",
    deposit: "$150",
    depositPaid: false,
    total: "$600",
    status: "pending",
    notes: "Large back piece. Needs stencil approval before session.",
    references: 4,
  },
  {
    id: 5,
    client: "Riley Dane",
    avatar: "RD",
    style: "Watercolor Koi",
    date: "May 24, 2026",
    time: "2:00 PM",
    duration: "3h",
    deposit: "$120",
    depositPaid: true,
    total: "$450",
    status: "reschedule",
    notes: "Client requested to move from May 18 due to travel.",
    references: 2,
  },
  {
    id: 6,
    client: "Priya Sharma",
    avatar: "PS",
    style: "Blackwork Lotus",
    date: "May 14, 2026",
    time: "3:00 PM",
    duration: "2h",
    deposit: "$80",
    depositPaid: true,
    total: "$320",
    status: "completed",
    notes: "Turned out beautiful. Left a 5-star review!",
    references: 0,
  },
  {
    id: 7,
    client: "Devon Walsh",
    avatar: "DW",
    style: "Traditional Anchor",
    date: "May 12, 2026",
    time: "12:00 PM",
    duration: "1h",
    deposit: "$40",
    depositPaid: true,
    total: "$160",
    status: "cancelled",
    notes: "Cancelled 48h before. Deposit forfeited per policy.",
    references: 1,
  },
  {
    id: 8,
    client: "Taylor Vega",
    avatar: "TV",
    style: "Realism Portrait",
    date: "May 10, 2026",
    time: "10:00 AM",
    duration: "5h",
    deposit: "$200",
    depositPaid: true,
    total: "$900",
    status: "no-show",
    notes: "Client did not show. Phone unreachable. Follow-up sent.",
    references: 2,
  },
];

const tabs = [
  { key: "all", label: "All" },
  { key: "pending", label: "Pending" },
  { key: "confirmed", label: "Confirmed" },
  { key: "reschedule", label: "Reschedule" },
  { key: "completed", label: "Completed" },
  { key: "cancelled", label: "Cancelled" },
  { key: "no-show", label: "No-Show" },
];

export default function ArtistAppointments() {
  const [activeTab, setActiveTab] = useState("all");
  const [search, setSearch] = useState("");
  const [selected, setSelected] = useState(null);

  const filtered = appointments.filter((a) => {
    const matchTab = activeTab === "all" || a.status === activeTab;
    const matchSearch =
      a.client.toLowerCase().includes(search.toLowerCase()) ||
      a.style.toLowerCase().includes(search.toLowerCase());
    return matchTab && matchSearch;
  });

  return (
    <div className="p-6 max-w-[1400px]">
      {/* Header */}
      <div className="mb-6">
        <h1 style={playfair} className="text-white mb-1">
          Appointments
        </h1>
        <p className="text-violet-200/40 text-sm">
          Manage all bookings, requests, and session history
        </p>
      </div>

      {/* Tabs + Search */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-5">
        <div className="flex items-center gap-1 bg-violet-950/50 border border-violet-900/30 rounded-xl p-1 flex-wrap">
          {tabs.map((tab) => {
            const count =
              tab.key === "all"
                ? appointments.length
                : appointments.filter((a) => a.status === tab.key).length;
            return (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key)}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all flex items-center gap-1.5 ${
                  activeTab === tab.key
                    ? "bg-violet-600/30 text-violet-200 border border-violet-500/30"
                    : "text-violet-200/40 hover:text-violet-200"
                }`}
              >
                {tab.label}
                {count > 0 && (
                  <span
                    className={`text-xs px-1.5 rounded-full ${activeTab === tab.key ? "bg-violet-500/30 text-violet-300" : "bg-violet-900/40 text-violet-400/50"}`}
                  >
                    {count}
                  </span>
                )}
              </button>
            );
          })}
        </div>
        <div className="flex items-center gap-2 ml-auto">
          <div className="flex items-center gap-2 bg-violet-900/20 border border-violet-900/30 rounded-xl px-3 py-2">
            <Search size={13} className="text-violet-400/60" />
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search client or style..."
              className="bg-transparent text-sm text-violet-200/70 placeholder:text-violet-400/40 outline-none w-44"
            />
          </div>
          <button className="flex items-center gap-1.5 px-3 py-2 bg-violet-900/20 border border-violet-900/30 text-violet-300 text-sm rounded-xl hover:bg-violet-800/30 transition-all">
            <Filter size={13} />
            <span>Filter</span>
            <ChevronDown size={13} />
          </button>
        </div>
      </div>

      {/* Table */}
      <div className="bg-[#1e0d35] border border-violet-900/40 rounded-2xl overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-violet-900/30">
                {[
                  "Client",
                  "Style",
                  "Date & Time",
                  "Duration",
                  "Deposit",
                  "Status",
                  "Actions",
                ].map((h) => (
                  <th
                    key={h}
                    className="text-left text-violet-400/50 text-xs px-5 py-3.5 font-medium"
                  >
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-violet-900/20">
              {filtered.map((appt) => {
                const st = statusConfig[appt.status];
                return (
                  <tr
                    key={appt.id}
                    className="hover:bg-violet-900/10 transition-colors cursor-pointer group"
                    onClick={() => setSelected(appt)}
                  >
                    <td className="px-5 py-4">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-violet-500 to-indigo-600 flex items-center justify-center text-white text-xs font-semibold shrink-0">
                          {appt.avatar}
                        </div>
                        <span className="text-white text-sm font-medium">
                          {appt.client}
                        </span>
                      </div>
                    </td>
                    <td className="px-5 py-4 text-violet-200/70 text-sm">
                      {appt.style}
                    </td>
                    <td className="px-5 py-4">
                      <p className="text-white text-sm">{appt.date}</p>
                      <p className="text-violet-400/50 text-xs">{appt.time}</p>
                    </td>
                    <td className="px-5 py-4 text-violet-200/70 text-sm">
                      {appt.duration}
                    </td>
                    <td className="px-5 py-4">
                      <div className="flex items-center gap-1.5">
                        <span className="text-white text-sm">
                          {appt.deposit}
                        </span>
                        {appt.depositPaid ? (
                          <CheckCircle2
                            size={13}
                            className="text-emerald-400"
                          />
                        ) : (
                          <AlertCircle size={13} className="text-amber-400" />
                        )}
                      </div>
                    </td>
                    <td className="px-5 py-4">
                      <span
                        className={`px-2.5 py-1 rounded-full text-xs border ${st.color} ${st.bg} ${st.border}`}
                      >
                        {st.label}
                      </span>
                    </td>
                    <td className="px-5 py-4">
                      <div className="flex items-center gap-1.5 opacity-0 group-hover:opacity-100 transition-opacity">
                        {appt.status === "pending" && (
                          <>
                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                              }}
                              className="w-7 h-7 rounded-lg bg-emerald-500/15 text-emerald-400 hover:bg-emerald-500/25 flex items-center justify-center transition-colors"
                            >
                              <CheckCircle2 size={13} />
                            </button>
                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                              }}
                              className="w-7 h-7 rounded-lg bg-red-500/15 text-red-400 hover:bg-red-500/25 flex items-center justify-center transition-colors"
                            >
                              <XCircle size={13} />
                            </button>
                          </>
                        )}
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                          }}
                          className="w-7 h-7 rounded-lg bg-violet-900/40 text-violet-300 hover:bg-violet-800/40 flex items-center justify-center transition-colors"
                        >
                          <MessageSquare size={13} />
                        </button>
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                          }}
                          className="w-7 h-7 rounded-lg bg-violet-900/40 text-violet-300 hover:bg-violet-800/40 flex items-center justify-center transition-colors"
                        >
                          <MoreHorizontal size={13} />
                        </button>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
          {filtered.length === 0 && (
            <div className="text-center py-16 text-violet-400/40">
              <Calendar size={32} className="mx-auto mb-3 opacity-40" />
              <p>No appointments found</p>
            </div>
          )}
        </div>
      </div>

      {/* Detail Modal */}
      {selected && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          onClick={() => setSelected(null)}
        >
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />
          <div
            className="relative bg-[#1a0b2e] border border-violet-900/50 rounded-2xl w-full max-w-lg shadow-2xl shadow-violet-900/40"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between p-6 border-b border-violet-900/30">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-violet-500 to-indigo-600 flex items-center justify-center text-white font-semibold">
                  {selected.avatar}
                </div>
                <div>
                  <h3 style={playfair} className="text-white">
                    {selected.client}
                  </h3>
                  <p className="text-violet-200/50 text-xs">{selected.style}</p>
                </div>
              </div>
              <button
                onClick={() => setSelected(null)}
                className="text-violet-400/50 hover:text-violet-300 transition-colors"
              >
                <X size={18} />
              </button>
            </div>

            <div className="p-6 space-y-5">
              <div className="grid grid-cols-2 gap-3">
                {[
                  {
                    icon: Calendar,
                    label: "Date",
                    value: selected.date,
                  },
                  {
                    icon: Clock,
                    label: "Time",
                    value: selected.time,
                  },
                  {
                    icon: Clock,
                    label: "Duration",
                    value: selected.duration,
                  },
                  {
                    icon: DollarSign,
                    label: "Total",
                    value: selected.total,
                  },
                ].map(({ icon: Icon, label, value }) => (
                  <div
                    key={label}
                    className="bg-violet-950/40 border border-violet-900/20 rounded-xl p-3 flex items-center gap-3"
                  >
                    <Icon size={14} className="text-violet-400 shrink-0" />
                    <div>
                      <p className="text-violet-400/50 text-xs">{label}</p>
                      <p className="text-white text-sm">{value}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex items-center justify-between py-2 px-3 bg-violet-950/30 rounded-xl border border-violet-900/20">
                <div className="flex items-center gap-2">
                  <DollarSign size={13} className="text-violet-400" />
                  <span className="text-violet-200/70 text-sm">
                    Deposit {selected.deposit}
                  </span>
                </div>
                {selected.depositPaid ? (
                  <span className="flex items-center gap-1 text-emerald-400 text-xs">
                    <CheckCircle2 size={12} /> Paid
                  </span>
                ) : (
                  <span className="flex items-center gap-1 text-amber-400 text-xs">
                    <AlertCircle size={12} /> Unpaid
                  </span>
                )}
              </div>

              {selected.notes && (
                <div>
                  <div className="flex items-center gap-1.5 mb-2">
                    <FileText size={13} className="text-violet-400" />
                    <p className="text-violet-400/60 text-xs uppercase tracking-widest">
                      Session Notes
                    </p>
                  </div>
                  <p className="text-violet-200/70 text-sm bg-violet-950/30 border border-violet-900/20 rounded-xl p-3 leading-relaxed">
                    {selected.notes}
                  </p>
                </div>
              )}

              {selected.references > 0 && (
                <div className="flex items-center gap-2 text-violet-300/60 text-sm">
                  <ImageIcon size={13} className="text-violet-400" />
                  <span>
                    {selected.references} reference image
                    {selected.references > 1 ? "s" : ""} uploaded by client
                  </span>
                </div>
              )}
            </div>

            <div className="flex items-center gap-2 p-6 pt-0">
              {selected.status === "pending" && (
                <>
                  <button className="flex-1 py-2.5 bg-gradient-to-r from-emerald-600 to-emerald-700 text-white text-sm rounded-xl hover:from-emerald-700 hover:to-emerald-800 transition-all flex items-center justify-center gap-1.5">
                    <CheckCircle2 size={14} /> Accept
                  </button>
                  <button className="flex-1 py-2.5 bg-red-500/20 border border-red-500/30 text-red-400 text-sm rounded-xl hover:bg-red-500/30 transition-all flex items-center justify-center gap-1.5">
                    <XCircle size={14} /> Decline
                  </button>
                </>
              )}
              {selected.status === "reschedule" && (
                <button className="flex-1 py-2.5 bg-gradient-to-r from-violet-600 to-indigo-600 text-white text-sm rounded-xl hover:from-violet-700 hover:to-indigo-700 transition-all flex items-center justify-center gap-1.5">
                  <RefreshCw size={14} /> Propose New Time
                </button>
              )}
              <button className="flex-1 py-2.5 bg-violet-900/30 border border-violet-700/30 text-violet-300 text-sm rounded-xl hover:bg-violet-800/40 transition-all flex items-center justify-center gap-1.5">
                <MessageSquare size={14} /> Message
              </button>
              <button className="py-2.5 px-3 bg-violet-900/30 border border-violet-700/30 text-violet-300 text-sm rounded-xl hover:bg-violet-800/40 transition-all">
                <User size={14} />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
