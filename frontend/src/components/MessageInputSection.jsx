import { Send, ImageIcon, Paperclip } from "lucide-react";

const quickReplies = [
  "Deposit confirmed ✓",
  "See you soon!",
  "Please eat before your session",
  "Could you send more references?",
  "All set for your appointment!",
];

const MessageInputSection = ({ input, setInput, onSend }) => {
  return (
    <>
      {/* Quick Replacements / Action Macros */}
      <div className="px-6 pb-2.5 flex items-center gap-1.5 overflow-x-auto scrollbar-none shrink-0">
        {quickReplies.map((reply) => (
          <button
            key={reply}
            onClick={() => setInput(reply)}
            className="px-3 py-1.5 bg-violet-950/40 border border-violet-900/40 text-violet-300/60 text-xs font-medium rounded-full whitespace-nowrap hover:bg-violet-900/30 hover:text-violet-200 hover:border-violet-700/40 transition-all shadow-sm"
          >
            {reply}
          </button>
        ))}
      </div>

      {/* Console Box Deck Input */}
      <div className="px-6 py-4 border-t border-violet-900/20 bg-[#0f0720]/40 shrink-0">
        <div className="flex items-center gap-3 bg-[#1e0d35] border border-violet-900/40 rounded-2xl px-4 py-3 focus-within:border-violet-700/60 transition-all">
          <button className="text-violet-400/40 hover:text-violet-200 transition-colors">
            <Paperclip size={16} />
          </button>
          <button className="text-violet-400/40 hover:text-violet-200 transition-colors">
            <ImageIcon size={16} />
          </button>

          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && onSend()}
            placeholder="Type your reply..."
            className="flex-1 bg-transparent text-violet-100 text-sm placeholder:text-violet-400/40 outline-none"
          />

          <button
            onClick={onSend}
            disabled={!input.trim()}
            className={`w-8 h-8 rounded-xl flex items-center justify-center transition-all shadow-md ${
              input.trim()
                ? "bg-gradient-to-br from-violet-600 to-indigo-600 text-white hover:from-violet-700 hover:to-indigo-700 active:scale-95"
                : "bg-violet-950/60 text-violet-800 cursor-not-allowed border border-violet-900/20"
            }`}
          >
            <Send size={13} />
          </button>
        </div>
      </div>
    </>
  );
};

export default MessageInputSection;
