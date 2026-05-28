import {
  X,
  Calendar,
  Clock,
  DollarSign,
  CheckCircle2,
  AlertCircle,
  FileText,
  ImageIcon,
  MessageSquare,
  User,
  RefreshCw,
  XCircle,
} from "lucide-react";

const playfair = { fontFamily: "'Playfair Display', serif" };

const AppointmentDetailModal = ({ selected, setSelected }) => {
  if (!selected) return null;

  return (
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
  );
};

export default AppointmentDetailModal;
