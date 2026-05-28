import {
  CheckCircle2,
  AlertCircle,
  MessageSquare,
  MoreHorizontal,
  XCircle,
  Calendar,
} from "lucide-react";

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

const AppointmentTable = ({ filtered, setSelected }) => {
  return (
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
                      <span className="text-white text-sm">{appt.deposit}</span>
                      {appt.depositPaid ? (
                        <CheckCircle2 size={13} className="text-emerald-400" />
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
  );
};

export default AppointmentTable;
