import { useState, useRef, useEffect } from "react";
import ConversationList from "../../components/ConversationList";
import ChatWindow from "../../components/ChatWindow";
import MessageInputSection from "../../components/MessageInputSection";

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

export default function ArtistMessages() {
  const [activeConv, setActiveConv] = useState(conversations[0]);
  const [messages, setMessages] = useState(messagesByConv[1]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [search, setSearch] = useState("");

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

  return (
    <div className="flex h-[calc(100vh-57px)] w-full overflow-hidden text-violet-100 selection:bg-violet-500/30">
      {/* Sidebar */}
      <ConversationList
        conversations={conversations}
        activeConv={activeConv}
        setActiveConv={setActiveConv}
        search={search}
        setSearch={setSearch}
        selectConv={selectConv}
      />

      {/* Chat Area */}
      <div className="flex-1 flex flex-col">
        <ChatWindow
          activeConv={activeConv}
          messages={messages}
          isTyping={isTyping}
        />

        {/* Input Section */}
        <MessageInputSection
          input={input}
          setInput={setInput}
          onSend={sendMessage}
        />
      </div>
    </div>
  );
}
