import { Search } from "lucide-react";

const tabs = [
  { key: "all", label: "All" },
  { key: "pending", label: "Pending" },
  { key: "confirmed", label: "Confirmed" },
  { key: "reschedule", label: "Reschedule" },
  { key: "completed", label: "Completed" },
  { key: "cancelled", label: "Cancelled" },
  { key: "no-show", label: "No-Show" },
];

const AppointmentFiltersSection = ({
  appointments,
  activeTab,
  setActiveTab,
  search,
  setSearch,
}) => {
  return (
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
      </div>
    </div>
  );
};

export default AppointmentFiltersSection;
