import { Search, Pin } from "lucide-react";

const playfair = { fontFamily: "'Playfair Display', serif" };

const ConversationList = ({
  conversations,
  activeConv,
  setActiveConv,
  search,
  setSearch,
  selectConv,
}) => {
  const filteredConvs = conversations.filter((c) =>
    c.name.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <div className="w-80 border-r border-violet-900/30 flex flex-col bg-[#0f0720] shrink-0">
      <div className="p-4 border-b border-violet-900/20">
        <h2 style={playfair} className="text-2xl text-white font-medium mb-3">
          Messages
        </h2>
        <div className="flex items-center gap-2 bg-violet-950/40 border border-violet-900/40 rounded-xl px-3 py-2 focus-within:border-violet-600/50 transition-all">
          <Search size={14} className="text-violet-400/40" />
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search conversations..."
            className="bg-transparent text-sm text-violet-200 placeholder:text-violet-400/40 outline-none flex-1"
          />
        </div>
      </div>

      {/* Conversation Streams */}
      <div className="flex-1 overflow-y-auto space-y-0.5 py-2">
        <div className="px-4 py-1">
          <p className="text-violet-400/40 text-[10px] uppercase font-bold tracking-widest flex items-center gap-1.5 mb-2">
            <Pin size={10} className="rotate-45 text-violet-500" /> Direct
            Threads
          </p>
        </div>

        {filteredConvs.map((conv) => (
          <button
            key={conv.id}
            onClick={() => selectConv(conv)}
            className={`w-full flex items-center gap-3.5 px-4 py-3 hover:bg-violet-950/30 transition-all text-left relative group ${
              activeConv.id === conv.id
                ? "bg-violet-900/20 border-r-2 border-violet-500"
                : ""
            }`}
          >
            <div className="relative shrink-0">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-violet-600 to-indigo-700 flex items-center justify-center text-white text-xs font-semibold shadow-md">
                {conv.avatar}
              </div>
              {conv.online && (
                <span className="absolute bottom-0 right-0 w-3 h-3 bg-emerald-500 rounded-full border-2 border-[#0f0720] shadow-sm animate-pulse" />
              )}
            </div>

            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between mb-0.5">
                <p className="text-white text-sm font-medium truncate group-hover:text-violet-200 transition-colors">
                  {conv.name}
                </p>
                <span className="text-violet-400/40 text-[11px] shrink-0 ml-2 font-medium">
                  {conv.time}
                </span>
              </div>
              <p
                className={`text-xs truncate ${conv.unread > 0 ? "text-violet-200 font-medium" : "text-violet-400/50"}`}
              >
                {conv.lastMessage}
              </p>
            </div>

            {conv.unread > 0 && (
              <span className="bg-gradient-to-r from-violet-500 to-indigo-500 text-white text-[11px] font-bold w-5 h-5 rounded-full flex items-center justify-center shrink-0 shadow-sm shadow-indigo-950">
                {conv.unread}
              </span>
            )}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ConversationList;
