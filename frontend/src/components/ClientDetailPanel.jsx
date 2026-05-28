import {
  X,
  Calendar,
  DollarSign,
  Image as ImageIcon,
  Tag,
  Clock,
  AlertTriangle,
  FileText,
  Heart,
  Flag,
  MessageSquare,
} from "lucide-react";

const playfair = { fontFamily: "'Playfair Display', serif" };

const tagColors = {
  repeat: "bg-violet-500/15 text-violet-300 border-violet-500/20",
  new: "bg-blue-500/15 text-blue-400 border-blue-500/20",
  "no-show": "bg-red-500/15 text-red-400 border-red-500/20",
};

const ClientDetailPanel = ({ selected, setSelected, clients }) => {
  if (!selected) {
    return (
      <div className="bg-[#1e0d35]/30 border border-violet-900/30 rounded-2xl p-10 flex flex-col items-center justify-center text-center sticky top-6">
        <div className="w-12 h-12 rounded-full bg-violet-950/50 border border-violet-900/40 flex items-center justify-center mb-3">
          <Tag size={18} className="text-violet-500/50" />
        </div>
        <p className="text-violet-400/40 text-xs max-w-[180px]">
          Select a profile to review historical sheets and logs
        </p>
      </div>
    );
  }

  return (
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
              <Icon size={14} className="text-violet-400 mx-auto mb-1" />
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
            <span className="text-violet-200 select-all">{selected.email}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-violet-400/40">Phone:</span>{" "}
            <span className="text-violet-200 select-all">{selected.phone}</span>
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
  );
};

export default ClientDetailPanel;
