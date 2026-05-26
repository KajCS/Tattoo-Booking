import { useState } from "react";
import {
  Search,
  Star,
  Flag,
  MessageSquare,
  ChevronRight,
  X,
  Calendar,
  DollarSign,
  Heart,
  AlertTriangle,
  FileText,
  Tag,
  Clock,
  Image as ImageIcon,
  Plus,
} from "lucide-react";

const playfair = { fontFamily: "'Playfair Display', serif" };

const clients = [
  {
    id: 1,
    name: "Jamie Torres",
    avatar: "JT",
    email: "jamie@mail.com",
    phone: "(555) 100-2020",
    since: "Jan 2024",
    sessions: 6,
    spent: "$2,480",
    styles: ["Japanese", "Traditional"],
    tags: ["repeat", "VIP"],
    lastSession: "May 19, 2026",
    nextSession: "Aug 12, 2026",
    allergyNotes: "Mild latex sensitivity — use nitrile gloves",
    consentSigned: true,
    favorite: true,
    blacklisted: false,
    notes:
      "Extremely loyal client. Always tips well. Interested in completing sleeve.",
    inspirations: 8,
  },
  {
    id: 2,
    name: "Sam Rivera",
    avatar: "SR",
    email: "sam@mail.com",
    phone: "(555) 203-4040",
    since: "Mar 2024",
    sessions: 3,
    spent: "$860",
    styles: ["Fine Line", "Botanical"],
    tags: ["repeat"],
    lastSession: "May 19, 2026",
    nextSession: "Jul 8, 2026",
    allergyNotes: "",
    consentSigned: true,
    favorite: false,
    blacklisted: false,
    notes:
      "Very detail-oriented. Sends lots of references. Prefers morning slots.",
    inspirations: 12,
  },
  {
    id: 3,
    name: "Alex Kim",
    avatar: "AK",
    email: "alex@mail.com",
    phone: "(555) 304-5050",
    since: "May 2026",
    sessions: 0,
    spent: "$0",
    styles: ["Neo-Traditional"],
    tags: ["new"],
    lastSession: "—",
    nextSession: "May 19, 2026",
    allergyNotes: "No known allergies",
    consentSigned: false,
    favorite: false,
    blacklisted: false,
    notes: "First-time client. Needs consent form before session.",
    inspirations: 3,
  },
  {
    id: 4,
    name: "Casey Brooks",
    avatar: "CB",
    email: "casey@mail.com",
    phone: "(555) 405-6060",
    since: "Nov 2023",
    sessions: 4,
    spent: "$1,620",
    styles: ["Geometric", "Blackwork"],
    tags: ["repeat"],
    lastSession: "Feb 2026",
    nextSession: "May 22, 2026",
    allergyNotes: "Sensitive to certain inks — patch test required",
    consentSigned: true,
    favorite: false,
    blacklisted: false,
    notes: "Working on a large back piece. Very patient, easy to work with.",
    inspirations: 6,
  },
  {
    id: 5,
    name: "Priya Sharma",
    avatar: "PS",
    email: "priya@mail.com",
    phone: "(555) 506-7070",
    since: "Jul 2023",
    sessions: 8,
    spent: "$3,200",
    styles: ["Blackwork", "Fine Line", "Minimalist"],
    tags: ["VIP", "repeat"],
    lastSession: "May 14, 2026",
    nextSession: "Sep 2026",
    allergyNotes: "",
    consentSigned: true,
    favorite: true,
    blacklisted: false,
    notes: "Top client. Has referred 3 friends. Left multiple 5-star reviews.",
    inspirations: 15,
  },
  {
    id: 6,
    name: "Taylor Vega",
    avatar: "TV",
    email: "taylor@mail.com",
    phone: "(555) 607-8080",
    since: "Apr 2025",
    sessions: 1,
    spent: "$0",
    styles: ["Realism"],
    tags: ["no-show"],
    lastSession: "May 10, 2026",
    nextSession: "—",
    allergyNotes: "",
    consentSigned: true,
    favorite: false,
    blacklisted: false,
    notes:
      "No-showed last appointment. Deposit collected. Consider requiring full payment upfront.",
    inspirations: 2,
  },
];

const tagColors = {
  VIP: "bg-yellow-500/15 text-yellow-400 border-yellow-500/20",
  repeat: "bg-violet-500/15 text-violet-300 border-violet-500/20",
  new: "bg-blue-500/15 text-blue-400 border-blue-500/20",
  "no-show": "bg-red-500/15 text-red-400 border-red-500/20",
};

export default function ArtistClients() {
  const [search, setSearch] = useState("");
  const [selected, setSelected] = useState(clients[0]); // Defaults to first client
  const [filter, setFilter] = useState("all");

  const filtered = clients.filter((c) => {
    const matchSearch =
      c.name.toLowerCase().includes(search.toLowerCase()) ||
      c.styles.some((s) => s.toLowerCase().includes(search.toLowerCase()));
    const matchFilter =
      filter === "all" ||
      (filter === "VIP" && c.tags.includes("VIP")) ||
      (filter === "new" && c.tags.includes("new")) ||
      (filter === "repeat" && c.tags.includes("repeat")) ||
      (filter === "favorites" && c.favorite);
    return matchSearch && matchFilter;
  });

  return (
    <div className="p-6 max-w-[1400px] mx-auto text-violet-100 selection:bg-violet-500/30">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 style={playfair} className="text-3xl text-white mb-1">
            Clients
          </h1>
          <p className="text-violet-200/40 text-sm">
            {clients.length} total ·{" "}
            {clients.filter((c) => c.sessions > 1).length} repeat clients
          </p>
        </div>
        <button className="flex items-center gap-1.5 px-4 py-2 bg-gradient-to-r from-violet-600 to-indigo-600 text-white text-sm font-medium rounded-xl hover:from-violet-700 hover:to-indigo-700 transition-all shadow-lg shadow-indigo-950/40">
          <Plus size={15} /> Add Client
        </button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
        {[
          { label: "Total Clients", value: clients.length, sub: "All time" },
          {
            label: "Repeat Clients",
            value: `${Math.round((clients.filter((c) => c.sessions > 1).length / clients.length) * 100)}%`,
            sub: "Loyalty rate",
          },
          {
            label: "VIP Clients",
            value: clients.filter((c) => c.tags.includes("VIP")).length,
            sub: "Top spenders",
          },
          { label: "Avg. Spend", value: "$1,360", sub: "Per client" },
        ].map((s) => (
          <div
            key={s.label}
            className="bg-[#1e0d35]/60 backdrop-blur-md border border-violet-900/40 rounded-2xl p-4 shadow-xl"
          >
            <p className="text-white text-2xl font-semibold tracking-tight">
              {s.value}
            </p>
            <p className="text-violet-400/50 text-xs mt-0.5">{s.sub}</p>
            <p className="text-violet-300/70 text-xs font-medium mt-2 uppercase tracking-wider">
              {s.label}
            </p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-5">
        {/* Client List Workspace */}
        <div className="xl:col-span-2">
          {/* Controls Bar */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-3 mb-4">
            <div className="flex items-center gap-2 bg-violet-950/50 border border-violet-900/40 rounded-xl px-3 py-2 flex-1 max-w-md shadow-inner">
              <Search size={15} className="text-violet-400/60" />
              <input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search by name or tattoo style..."
                className="bg-transparent text-sm text-violet-100 placeholder:text-violet-400/40 outline-none flex-1"
              />
            </div>
            <div className="flex items-center gap-1 bg-violet-950/40 border border-violet-900/30 rounded-xl p-1 overflow-x-auto scrollbar-none">
              {["all", "favorites", "VIP", "new", "repeat"].map((f) => (
                <button
                  key={f}
                  onClick={() => setFilter(f)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-medium capitalize transition-all whitespace-nowrap ${
                    filter === f
                      ? "bg-violet-600/30 text-violet-200 border border-violet-500/30 shadow-sm"
                      : "text-violet-400/60 hover:text-violet-200"
                  }`}
                >
                  {f}
                </button>
              ))}
            </div>
          </div>

          {/* Cards Stack */}
          <div className="space-y-2.5">
            {filtered.length > 0 ? (
              filtered.map((client) => (
                <div
                  key={client.id}
                  onClick={() => setSelected(client)}
                  className={`bg-[#1e0d35]/40 backdrop-blur-sm border rounded-2xl p-4 flex items-center gap-4 cursor-pointer transition-all hover:border-violet-500/40 group ${
                    selected?.id === client.id
                      ? "border-violet-500/60 bg-violet-900/20 shadow-md"
                      : "border-violet-900/40"
                  }`}
                >
                  <div className="relative shrink-0">
                    <div className="w-11 h-11 rounded-full bg-gradient-to-br from-violet-500 to-indigo-600 flex items-center justify-center text-white font-semibold shadow">
                      {client.avatar}
                    </div>
                    {client.favorite && (
                      <span className="absolute -top-1 -right-1 w-4 h-4 bg-yellow-500 rounded-full flex items-center justify-center border border-[#1e0d35]">
                        <Star
                          size={8}
                          className="text-yellow-950"
                          fill="currentColor"
                        />
                      </span>
                    )}
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 flex-wrap">
                      <p className="text-white text-sm font-semibold tracking-wide">
                        {client.name}
                      </p>
                      {client.tags.map((tag) => (
                        <span
                          key={tag}
                          className={`px-2 py-0.5 rounded-full text-[10px] uppercase font-bold tracking-wider border ${tagColors[tag] || "bg-violet-900/30 text-violet-400 border-violet-900/20"}`}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <p className="text-violet-300/50 text-xs mt-1 truncate">
                      <span className="text-violet-300/80 font-medium">
                        {client.styles.join(", ")}
                      </span>
                      <span className="mx-2">·</span>
                      {client.sessions} sessions
                      <span className="mx-2">·</span>
                      {client.spent} spent
                    </p>
                  </div>

                  <div className="text-right shrink-0 hidden sm:block">
                    <p className="text-violet-400/40 text-[10px] uppercase tracking-wider font-semibold">
                      Last seen
                    </p>
                    <p className="text-violet-200/80 text-xs font-medium mt-0.5">
                      {client.lastSession}
                    </p>
                  </div>

                  <ChevronRight
                    size={16}
                    className="text-violet-900 group-hover:text-violet-400 transition-colors shrink-0 ml-1"
                  />
                </div>
              ))
            ) : (
              <div className="p-12 text-center bg-[#1e0d35]/20 rounded-2xl border border-violet-900/20">
                <p className="text-violet-400/40 text-sm">
                  No clients match your search criteria
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Dynamic Context Detail Panel */}
        <div>
          {selected ? (
            <div className="bg-[#1e0d35]/70 backdrop-blur-md border border-violet-500/20 rounded-2xl overflow-hidden sticky top-6 shadow-2xl">
              {/* Card Header */}
              <div className="p-5 border-b border-violet-900/40 bg-gradient-to-b from-violet-950/20 to-transparent">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-violet-500 to-indigo-600 flex items-center justify-center text-white text-lg font-semibold shadow-md">
                      {selected.avatar}
                    </div>
                    <div>
                      <h3
                        style={playfair}
                        className="text-xl text-white font-medium tracking-wide"
                      >
                        {selected.name}
                      </h3>
                      <p className="text-violet-400/50 text-xs mt-0.5">
                        Member since {selected.since}
                      </p>
                    </div>
                  </div>
                  <button
                    onClick={() => setSelected(null)}
                    className="p-1 rounded-lg text-violet-400/40 hover:text-violet-200 hover:bg-violet-900/30 transition-all"
                  >
                    <X size={16} />
                  </button>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {selected.tags.map((tag) => (
                    <span
                      key={tag}
                      className={`px-2 py-0.5 rounded-full text-[10px] uppercase font-bold tracking-wider border ${tagColors[tag] || ""}`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Card Body */}
              <div className="p-5 space-y-5">
                {/* Micro Stats Grid */}
                <div className="grid grid-cols-3 gap-2">
                  {[
                    {
                      icon: Calendar,
                      label: "Sessions",
                      value: selected.sessions,
                    },
                    { icon: DollarSign, label: "Spent", value: selected.spent },
                    {
                      icon: ImageIcon,
                      label: "Refs",
                      value: selected.inspirations,
                    },
                  ].map(({ icon: Icon, label, value }) => (
                    <div
                      key={label}
                      className="bg-violet-950/40 border border-violet-900/30 rounded-xl p-2.5 text-center shadow-inner"
                    >
                      <Icon
                        size={14}
                        className="text-violet-400 mx-auto mb-1"
                      />
                      <p className="text-white text-sm font-semibold tracking-tight">
                        {value}
                      </p>
                      <p className="text-violet-400/40 text-[10px] uppercase font-medium tracking-wider mt-0.5">
                        {label}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Preferred Styles */}
                <div>
                  <p className="text-violet-400/50 text-[11px] font-semibold uppercase tracking-wider mb-2 flex items-center gap-1.5">
                    <Tag size={12} className="text-violet-400" /> Style Profiles
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {selected.styles.map((s) => (
                      <span
                        key={s}
                        className="px-2.5 py-0.5 bg-violet-900/40 border border-violet-800/40 text-violet-300 text-xs rounded-lg font-medium shadow-sm"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Contact Context */}
                <div className="space-y-1.5 text-xs text-violet-300/70 bg-violet-950/20 border border-violet-900/30 rounded-xl p-3">
                  <div className="flex justify-between">
                    <span className="text-violet-400/40">Email:</span>{" "}
                    <span className="text-violet-200 select-all">
                      {selected.email}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-violet-400/40">Phone:</span>{" "}
                    <span className="text-violet-200 select-all">
                      {selected.phone}
                    </span>
                  </div>
                </div>

                {/* Timeline Alert Indicators */}
                <div className="flex items-center gap-3 bg-violet-950/30 border border-violet-900/30 rounded-xl p-3 shadow-inner">
                  <Clock size={15} className="text-violet-400" />
                  <div>
                    <p className="text-violet-400/40 text-[10px] uppercase font-semibold tracking-wider">
                      Upcoming Session
                    </p>
                    <p className="text-white text-xs font-semibold mt-0.5">
                      {selected.nextSession}
                    </p>
                  </div>
                </div>

                {/* Allergy warning block */}
                {selected.allergyNotes && (
                  <div className="flex items-start gap-2.5 bg-amber-500/10 border border-amber-500/20 rounded-xl p-3 shadow-sm">
                    <AlertTriangle
                      size={15}
                      className="text-amber-400 shrink-0 mt-0.5"
                    />
                    <p className="text-amber-300/90 text-xs leading-relaxed font-medium">
                      {selected.allergyNotes}
                    </p>
                  </div>
                )}

                {/* Consent Signed Status */}
                <div
                  className={`flex items-center gap-2 px-3 py-2.5 rounded-xl border text-xs font-medium shadow-inner ${
                    selected.consentSigned
                      ? "bg-emerald-500/10 border-emerald-500/20 text-emerald-400"
                      : "bg-red-500/10 border-red-500/20 text-red-400 animate-pulse"
                  }`}
                >
                  <FileText size={14} />
                  {selected.consentSigned
                    ? "Liability Waiver & Consent Active"
                    : "Waiver Outstanding — Signature Required"}
                </div>

                {/* Private Session Notes */}
                {selected.notes && (
                  <div>
                    <p className="text-violet-400/50 text-[11px] font-semibold uppercase tracking-wider mb-2 flex items-center gap-1.5">
                      <FileText size={12} /> Artist Intake Notes
                    </p>
                    <p className="text-violet-200/70 text-xs bg-violet-950/40 border border-violet-900/40 rounded-xl p-3 leading-relaxed shadow-inner italic">
                      "{selected.notes}"
                    </p>
                  </div>
                )}

                {/* Quick Interactive Actions */}
                <div className="flex gap-2 pt-2 border-t border-violet-900/40">
                  <button className="flex-1 py-2.5 bg-gradient-to-r from-violet-600 to-indigo-600 text-white font-medium text-xs rounded-xl hover:from-violet-700 hover:to-indigo-700 transition-all flex items-center justify-center gap-1.5 shadow-md">
                    <MessageSquare size={13} /> Message Client
                  </button>
                  <button
                    className={`py-2.5 px-3 rounded-xl border transition-all ${
                      selected.favorite
                        ? "bg-yellow-500/10 border-yellow-500/30 text-yellow-400 hover:bg-yellow-500/20"
                        : "bg-violet-900/20 border-violet-800/40 text-violet-400 hover:bg-violet-900/40"
                    }`}
                  >
                    <Heart
                      size={13}
                      fill={selected.favorite ? "currentColor" : "none"}
                    />
                  </button>
                  <button className="py-2.5 px-3 bg-violet-900/20 border border-violet-800/40 text-violet-400 rounded-xl hover:bg-red-500/10 hover:border-red-500/20 hover:text-red-400 transition-all">
                    <Flag size={13} />
                  </button>
                </div>
              </div>
            </div>
          ) : (
            <div className="bg-[#1e0d35]/30 border border-violet-900/30 rounded-2xl p-10 flex flex-col items-center justify-center text-center sticky top-6">
              <div className="w-12 h-12 rounded-full bg-violet-950/50 border border-violet-900/40 flex items-center justify-center mb-3">
                <Search size={18} className="text-violet-500/50" />
              </div>
              <p className="text-violet-400/40 text-xs max-w-[180px]">
                Select a profile to review historical sheets and logs
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
