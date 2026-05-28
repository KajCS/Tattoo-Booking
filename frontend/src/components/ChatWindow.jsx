import {
  Phone,
  Video,
  MoreHorizontal,
  Circle,
  CheckCheck,
  Check,
} from "lucide-react";
import { useEffect, useRef } from "react";

const ChatWindow = ({ activeConv, messages, isTyping }) => {
  const endRef = useRef(null);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping]);

  return (
    <div className="flex-1 flex flex-col min-w-0 bg-[#0a0416]">
      {/* Active Chat Desk Header */}
      <div className="flex items-center gap-4 px-6 py-4 border-b border-violet-900/20 bg-[#120820]/80 backdrop-blur-md z-10">
        <div className="relative">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-violet-600 to-indigo-700 flex items-center justify-center text-white font-semibold text-sm shadow-md">
            {activeConv.avatar}
          </div>
          {activeConv.online && (
            <span className="absolute bottom-0 right-0 w-3 h-3 bg-emerald-500 rounded-full border-2 border-[#120820]" />
          )}
        </div>
        <div>
          <p className="text-white font-medium text-sm leading-tight">
            {activeConv.name}
          </p>
          <p className="text-violet-400/50 text-xs mt-0.5">
            {activeConv.online ? "Online now" : "Offline"}
          </p>
        </div>

        {activeConv.linkedAppt && (
          <div className="ml-auto mr-2 hidden lg:flex items-center gap-1.5 px-3 py-1.5 bg-violet-950/50 border border-violet-800/40 rounded-xl text-violet-300 text-xs font-medium shadow-inner">
            <Circle size={6} className="text-indigo-400 fill-indigo-400" />
            <span className="text-violet-400/60 mr-0.5">Booking:</span>{" "}
            {activeConv.linkedAppt}
          </div>
        )}

        <div
          className={`flex items-center gap-1 ${activeConv.linkedAppt ? "ml-0" : "ml-auto"}`}
        >
          <button className="p-2 rounded-xl text-violet-400/50 hover:text-violet-200 hover:bg-violet-900/20 transition-all">
            <Phone size={15} />
          </button>
          <button className="p-2 rounded-xl text-violet-400/50 hover:text-violet-200 hover:bg-violet-900/20 transition-all">
            <Video size={15} />
          </button>
          <button className="p-2 rounded-xl text-violet-400/50 hover:text-violet-200 hover:bg-violet-900/20 transition-all">
            <MoreHorizontal size={15} />
          </button>
        </div>
      </div>

      {/* Live Scroll Feed */}
      <div className="flex-1 overflow-y-auto p-6 space-y-4">
        {messages.map((msg) => (
          <div
            key={msg.id}
            className={`flex items-end gap-2.5 ${msg.from === "me" ? "flex-row-reverse" : ""}`}
          >
            {msg.from === "them" && (
              <div className="w-7 h-7 rounded-full bg-gradient-to-br from-violet-600 to-indigo-700 flex items-center justify-center text-white text-[10px] font-bold shrink-0 mb-1 shadow-sm">
                {activeConv.avatar}
              </div>
            )}
            <div
              className={`max-w-md ${msg.from === "me" ? "items-end" : "items-start"} flex flex-col gap-1.5`}
            >
              {msg.image && (
                <div className="rounded-2xl p-1 bg-[#2a1245] border border-violet-900/40 shadow-md">
                  <img
                    src={msg.image}
                    alt="shared snippet reference"
                    className="rounded-xl max-w-[240px] max-h-[240px] object-cover border border-violet-950/40"
                  />
                </div>
              )}
              {msg.text && (
                <div
                  className={`px-4 py-2.5 rounded-2xl text-sm leading-relaxed shadow-sm ${
                    msg.from === "me"
                      ? "bg-gradient-to-br from-violet-600 to-indigo-600 text-white rounded-br-sm"
                      : "bg-[#1e0d35]/90 border border-violet-900/40 text-violet-100 rounded-bl-sm"
                  }`}
                >
                  {msg.text}
                </div>
              )}
              <div
                className={`flex items-center gap-1.5 px-1 ${msg.from === "me" ? "flex-row-reverse" : ""}`}
              >
                <span className="text-violet-400/30 text-[10px] font-medium tracking-tight">
                  {msg.time}
                </span>
                {msg.from === "me" &&
                  (msg.read ? (
                    <CheckCheck size={12} className="text-indigo-400" />
                  ) : (
                    <Check size={12} className="text-violet-400/30" />
                  ))}
              </div>
            </div>
          </div>
        ))}

        {/* Typing Active Hook State */}
        {isTyping && (
          <div className="flex items-end gap-2.5">
            <div className="w-7 h-7 rounded-full bg-gradient-to-br from-violet-600 to-indigo-700 flex items-center justify-center text-white text-[10px] font-bold shrink-0">
              {activeConv.avatar}
            </div>
            <div className="bg-[#1e0d35]/90 border border-violet-900/40 px-4 py-3 rounded-2xl rounded-bl-sm shadow-sm">
              <div className="flex items-center gap-1">
                <span
                  className="w-1.5 h-1.5 bg-violet-400 rounded-full animate-bounce"
                  style={{ animationDelay: "0ms" }}
                />
                <span
                  className="w-1.5 h-1.5 bg-violet-400 rounded-full animate-bounce"
                  style={{ animationDelay: "150ms" }}
                />
                <span
                  className="w-1.5 h-1.5 bg-violet-400 rounded-full animate-bounce"
                  style={{ animationDelay: "300ms" }}
                />
              </div>
            </div>
          </div>
        )}
        <div ref={endRef} />
      </div>
    </div>
  );
};

export default ChatWindow;
