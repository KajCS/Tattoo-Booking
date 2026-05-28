import { Search, Star, ChevronRight } from "lucide-react";

const tagColors = {
  repeat: "bg-violet-500/15 text-violet-300 border-violet-500/20",
  new: "bg-blue-500/15 text-blue-400 border-blue-500/20",
  "no-show": "bg-red-500/15 text-red-400 border-red-500/20",
};

const ClientListSection = ({
  clients,
  search,
  setSearch,
  filter,
  setFilter,
  selected,
  setSelected,
  filtered,
}) => {
  return (
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
  );
};

export default ClientListSection;
