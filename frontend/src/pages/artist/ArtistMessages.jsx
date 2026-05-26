import { useState, useRef, useEffect } from "react";
import {
  Search,
  Send,
  Image as ImageIcon,
  Paperclip,
  MoreHorizontal,
  Phone,
  Video,
  Pin,
  CheckCheck,
  Check,
  Circle,
} from "lucide-react";

const playfair = { fontFamily: "'Playfair Display', serif" };

const conversations = [
  {
    id: 1,
    name: "Luis Palparan",
    avatar: "JT",
    lastMessage: "Can we start a bit earlier? Like 9:30?",
    time: "2m",
    unread: 2,
    online: true,
    pinned: true,
    linkedAppt: "May 19 – Japanese Sleeve",
  },
  {
    id: 2,
    name: "Sam Tesoro",
    avatar: "SR",
    lastMessage: "Sent you the reference images 🌿",
    time: "18m",
    unread: 0,
    online: true,
    pinned: false,
    linkedAppt: "May 19 – Fine Line Floral",
  },
  {
    id: 3,
    name: "Brandon Santos",
    avatar: "CB",
    lastMessage: "Perfect, see you the 22nd!",
    time: "1h",
    unread: 0,
    online: false,
    pinned: false,
    linkedAppt: "May 22 – Mandala",
  },
  {
    id: 4,
    name: "Ej Liu",
    avatar: "RD",
    lastMessage: "Is there any way to push to June?",
    time: "3h",
    unread: 1,
    online: false,
    pinned: false,
    linkedAppt: "May 24 – Watercolor Koi",
  },
  {
    id: 5,
    name: "Benz Gwapo",
    avatar: "PS",
    lastMessage: "It turned out absolutely perfect 😍",
    time: "Yesterday",
    unread: 0,
    online: false,
    pinned: false,
    linkedAppt: null,
  },
];

const messagesByConv = {
  1: [
    {
      id: 1,
      from: "them",
      text: "Hi Yoshi! So excited for tomorrow's session.",
      time: "10:12 AM",
      read: true,
    },
    {
      id: 2,
      from: "me",
      text: "Hey Jamie! Can't wait — the stencil is looking incredible.",
      time: "10:15 AM",
      read: true,
    },
    {
      id: 3,
      from: "them",
      text: "Quick question — should I shave my arm beforehand?",
      time: "10:20 AM",
      read: true,
    },
    {
      id: 4,
      from: "me",
      text: "Yes, please! Makes the stencil placement cleaner. Also eat a good meal before you come in 🙏",
      time: "10:22 AM",
      read: true,
    },
    {
      id: 5,
      from: "them",
      text: "Got it. Also — can we start a bit earlier? Like 9:30?",
      time: "10:45 AM",
      read: true,
    },
  ],
  2: [
    {
      id: 1,
      from: "them",
      text: "Hey! Here are the floral references I mentioned",
      time: "9:00 AM",
      read: true,
    },
    {
      id: 2,
      from: "them",
      text: "Sent you the reference images 🌿",
      time: "9:01 AM",
      read: true,
      image:
        "https://images.unsplash.com/photo-1598618556077-ff2c7d11d6a3?w=200",
    },
    {
      id: 3,
      from: "me",
      text: "These are beautiful! I love the spacing on the second one.",
      time: "9:15 AM",
      read: true,
    },
  ],
  3: [
    {
      id: 1,
      from: "me",
      text: "Deposit confirmed — we're all set for May 22!",
      time: "Yesterday",
      read: true,
    },
    {
      id: 2,
      from: "them",
      text: "Perfect, see you the 22nd!",
      time: "Yesterday",
      read: true,
    },
  ],
  4: [
    {
      id: 1,
      from: "them",
      text: "Hey, something came up with my schedule...",
      time: "8:30 AM",
      read: true,
    },
    {
      id: 2,
      from: "them",
      text: "Is there any way to push to June?",
      time: "8:31 AM",
      read: false,
    },
  ],
  5: [
    {
      id: 1,
      from: "them",
      text: "Just wanted to say thank you SO much for yesterday's session",
      time: "Yesterday",
      read: true,
    },
    {
      id: 2,
      from: "them",
      text: "It turned out absolutely perfect 😍",
      time: "Yesterday",
      read: true,
    },
    {
      id: 3,
      from: "me",
      text: "That means everything, Priya! You were such a great client. Can't wait to see the healed result 🖤",
      time: "Yesterday",
      read: true,
    },
  ],
};

const quickReplies = [
  "Deposit confirmed ✓",
  "See you soon!",
  "Please eat before your session",
  "Could you send more references?",
  "All set for your appointment!",
];

export default function ArtistMessages() {
  const [activeConv, setActiveConv] = useState(conversations[0]);
  const [messages, setMessages] = useState(messagesByConv[1]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [search, setSearch] = useState("");
  const endRef = useRef(null);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const selectConv = (conv) => {
    setActiveConv(conv);
    setMessages(messagesByConv[conv.id] || []);
  };

  const sendMessage = () => {
    if (!input.trim()) return;

    const newMsg = {
      id: messages.length + 1,
      from: "me",
      text: input,
      time: "Just now",
      read: false,
    };

    setMessages((prev) => [...prev, newMsg]);
    setInput("");

    setTimeout(() => {
      setIsTyping(true);
      setTimeout(() => {
        setIsTyping(false);
        setMessages((prev) => [
          ...prev,
          {
            id: prev.length + 1,
            from: "them",
            text: "Thanks for the quick reply!",
            time: "Just now",
            read: true,
          },
        ]);
      }, 2000);
    }, 1000);
  };

  const filteredConvs = conversations.filter((c) =>
    c.name.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <div className="flex h-[calc(100vh-57px)] w-full overflow-hidden text-violet-100 selection:bg-violet-500/30">
      {/* Inbox Sidebar */}
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

      {/* Main Focus Chat Area */}
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
              onKeyDown={(e) => e.key === "Enter" && sendMessage()}
              placeholder="Type your reply..."
              className="flex-1 bg-transparent text-violet-100 text-sm placeholder:text-violet-400/40 outline-none"
            />

            <button
              onClick={sendMessage}
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
      </div>
    </div>
  );
}
