import { useState } from "react";
import {
  User,
  MapPin,
  Link as LinkIcon,
  DollarSign,
  Clock,
  Shield,
  Bell,
  Palette,
  CheckCircle2,
  Camera,
  Globe,
  ChevronRight,
  Eye,
  EyeOff,
} from "lucide-react";

const playfair = { fontFamily: "'Playfair Display', serif" };

const sections = [
  { id: "profile", icon: User, label: "Profile" },
  { id: "booking", icon: Clock, label: "Booking Rules" },
  { id: "pricing", icon: DollarSign, label: "Pricing & Deposits" },
  { id: "notifications", icon: Bell, label: "Notifications" },
  { id: "privacy", icon: Shield, label: "Privacy & Visibility" },
  { id: "appearance", icon: Palette, label: "Appearance" },
];

const specialties = [
  "Traditional",
  "Japanese",
  "Blackwork",
  "Fine Line",
  "Realism",
  "Neo-Traditional",
  "Geometric",
  "Watercolor",
  "Minimalist",
  "Tribal",
];

export default function ArtistSettings() {
  const [activeSection, setActiveSection] = useState("profile");
  const [selectedStyles, setSelectedStyles] = useState([
    "Japanese",
    "Fine Line",
    "Blackwork",
  ]);
  const [showPassword, setShowPassword] = useState(false);
  const [portfolioPublic, setPortfolioPublic] = useState(true);
  const [acceptingBookings, setAcceptingBookings] = useState(true);
  const [autoConfirm, setAutoConfirm] = useState(false);
  const [notifSettings, setNotifSettings] = useState({
    newBooking: true,
    reminder: true,
    message: true,
    payment: true,
    review: false,
    marketing: false,
  });

  const Toggle = ({ on, onToggle }) => (
    <button
      onClick={onToggle}
      className={`w-10 h-5 rounded-full transition-all relative shrink-0 ${on ? "bg-violet-600" : "bg-violet-950 border border-violet-800"}`}
    >
      <span
        className={`absolute top-0.5 w-4 h-4 rounded-full bg-white transition-all ${on ? "left-5" : "left-0.5"}`}
      />
    </button>
  );

  return (
    <div className="p-6 max-w-[1400px] mx-auto space-y-6 text-violet-100 selection:bg-violet-500/30">
      <div className="mb-6">
        <h1 style={playfair} className="text-3xl text-white mb-1">
          Settings
        </h1>
        <p className="text-violet-200/40 text-sm">
          Manage your profile, booking rules, and preferences
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-5">
        {/* Sidebar Nav */}
        <div className="bg-[#1e0d35]/60 backdrop-blur-md border border-violet-900/40 rounded-2xl p-3 h-fit shadow-xl">
          {sections.map(({ id, icon: Icon, label }) => (
            <button
              key={id}
              onClick={() => setActiveSection(id)}
              className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all text-left ${
                activeSection === id
                  ? "bg-violet-600/20 text-violet-200 border border-violet-500/30 shadow-sm"
                  : "text-violet-200/50 hover:text-violet-200 hover:bg-violet-900/20"
              }`}
            >
              <Icon
                size={15}
                className={activeSection === id ? "text-violet-400" : ""}
              />
              {label}
              <ChevronRight size={13} className="ml-auto opacity-40" />
            </button>
          ))}
        </div>

        {/* Content Area */}
        <div className="lg:col-span-3 space-y-5">
          {/* Profile Section */}
          {activeSection === "profile" && (
            <>
              <div className="bg-[#1e0d35]/60 backdrop-blur-md border border-violet-900/40 rounded-2xl p-6 shadow-xl">
                <h3
                  style={playfair}
                  className="text-white text-xl font-medium mb-5"
                >
                  Artist Profile
                </h3>

                {/* Avatar Display */}
                <div className="flex items-center gap-5 mb-6">
                  <div className="relative">
                    <div className="w-20 h-20 rounded-full bg-gradient-to-br from-violet-500 to-indigo-600 flex items-center justify-center text-white text-2xl font-semibold shadow-md">
                      YM
                    </div>
                    <button className="absolute bottom-0 right-0 w-7 h-7 bg-violet-600 rounded-full flex items-center justify-center border-2 border-[#1e0d35] hover:bg-violet-500 transition-colors shadow-sm">
                      <Camera size={12} className="text-white" />
                    </button>
                  </div>
                  <div>
                    <p className="text-white font-semibold">Yoshi Mori</p>
                    <p className="text-violet-200/50 text-sm">
                      @yoshiink · Studio City, CA
                    </p>
                    <div className="flex items-center gap-1.5 mt-1">
                      <CheckCircle2 size={13} className="text-violet-400" />
                      <span className="text-violet-400 text-xs font-medium">
                        Verified Artist
                      </span>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    { label: "Full Name", value: "Yoshi Mori", icon: User },
                    { label: "Username", value: "@yoshiink", icon: User },
                    {
                      label: "Studio Name",
                      value: "YoshiCat Ink",
                      icon: MapPin,
                    },
                    {
                      label: "Location",
                      value: "Studio City, CA 90210",
                      icon: MapPin,
                    },
                  ].map((f) => (
                    <div key={f.label}>
                      <label className="text-violet-400/60 text-xs mb-1.5 block font-medium">
                        {f.label}
                      </label>
                      <div className="flex items-center gap-2 bg-violet-950/40 border border-violet-900/30 rounded-xl px-3 py-2.5 focus-within:border-violet-500/50 transition-colors">
                        <f.icon
                          size={13}
                          className="text-violet-400/60 shrink-0"
                        />
                        <input
                          defaultValue={f.value}
                          className="bg-transparent text-violet-100 text-sm flex-1 outline-none placeholder:text-violet-400/30"
                        />
                      </div>
                    </div>
                  ))}

                  <div className="md:col-span-2">
                    <label className="text-violet-400/60 text-xs mb-1.5 block font-medium">
                      Bio
                    </label>
                    <textarea
                      defaultValue="Tattoo artist based in Studio City, CA. Specializing in Japanese, Fine Line, and Blackwork. 8 years of experience. Every piece tells a story — let's tell yours."
                      rows={3}
                      className="w-full bg-violet-950/40 border border-violet-900/30 rounded-xl px-3 py-2.5 text-violet-100 text-sm outline-none focus:border-violet-500/50 resize-none transition-colors"
                    />
                  </div>
                </div>
              </div>

              {/* Specialties Selection */}
              <div className="bg-[#1e0d35]/60 backdrop-blur-md border border-violet-900/40 rounded-2xl p-6 shadow-xl">
                <h3
                  style={playfair}
                  className="text-white text-xl font-medium mb-1"
                >
                  Tattoo Specialties
                </h3>
                <p className="text-violet-200/40 text-xs mb-4">
                  Select up to 5 styles you specialize in
                </p>
                <div className="flex flex-wrap gap-2">
                  {specialties.map((s) => {
                    const isSelected = selectedStyles.includes(s);
                    return (
                      <button
                        key={s}
                        type="button"
                        onClick={() =>
                          setSelectedStyles((prev) =>
                            prev.includes(s)
                              ? prev.filter((x) => x !== s)
                              : prev.length < 5
                                ? [...prev, s]
                                : prev,
                          )
                        }
                        className={`px-3 py-1.5 rounded-full text-sm font-medium border transition-all ${
                          isSelected
                            ? "bg-violet-600/30 border-violet-500/40 text-violet-200 shadow-sm"
                            : "bg-violet-950/30 border-violet-900/20 text-violet-400/50 hover:text-violet-300 hover:border-violet-700/30"
                        }`}
                      >
                        {s}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Social Links Form */}
              <div className="bg-[#1e0d35]/60 backdrop-blur-md border border-violet-900/40 rounded-2xl p-6 shadow-xl">
                <h3
                  style={playfair}
                  className="text-white text-xl font-medium mb-4"
                >
                  Social & Links
                </h3>
                <div className="space-y-3">
                  {[
                    {
                      icon: Camera,
                      label: "Instagram",
                      placeholder: "@yoshiink",
                    },
                    {
                      icon: Camera,
                      label: "Twitter / X",
                      placeholder: "@yoshiink",
                    },
                    {
                      icon: Globe,
                      label: "Website",
                      placeholder: "https://yoshicat.ink",
                    },
                    {
                      icon: LinkIcon,
                      label: "Booking Link",
                      placeholder: "https://yoshicat.ink/book",
                    },
                  ].map((l) => (
                    <div
                      key={l.label}
                      className="flex items-center gap-3 bg-violet-950/40 border border-violet-900/30 rounded-xl px-3 py-2.5 focus-within:border-violet-500/50 transition-colors"
                    >
                      <l.icon
                        size={15}
                        className="text-violet-400/60 shrink-0"
                      />
                      <span className="text-violet-400/50 text-xs w-24 shrink-0 font-medium">
                        {l.label}
                      </span>
                      <input
                        placeholder={l.placeholder}
                        className="bg-transparent text-violet-100 text-sm flex-1 outline-none placeholder:text-violet-400/30"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </>
          )}

          {/* Booking Rules Section */}
          {activeSection === "booking" && (
            <>
              <div className="bg-[#1e0d35]/60 backdrop-blur-md border border-violet-900/40 rounded-2xl p-6 shadow-xl">
                <h3
                  style={playfair}
                  className="text-white text-xl font-medium mb-5"
                >
                  Booking Rules
                </h3>
                <div className="space-y-4">
                  {[
                    {
                      label: "Accepting bookings",
                      desc: "Toggle new booking requests on/off",
                      on: acceptingBookings,
                      toggle: () => setAcceptingBookings(!acceptingBookings),
                    },
                    {
                      label: "Auto-confirm bookings",
                      desc: "Automatically confirm without manual review",
                      on: autoConfirm,
                      toggle: () => setAutoConfirm(!autoConfirm),
                    },
                  ].map((r) => (
                    <div
                      key={r.label}
                      className="flex items-center justify-between py-3 border-b border-violet-900/20 last:border-0"
                    >
                      <div>
                        <p className="text-white text-sm font-medium">
                          {r.label}
                        </p>
                        <p className="text-violet-200/40 text-xs mt-0.5">
                          {r.desc}
                        </p>
                      </div>
                      <Toggle on={r.on} onToggle={r.toggle} />
                    </div>
                  ))}

                  {[
                    {
                      label: "Advance notice required",
                      options: ["24 hours", "48 hours", "72 hours", "1 week"],
                      default: "48 hours",
                    },
                    {
                      label: "Max future booking window",
                      options: ["1 month", "2 months", "3 months", "6 months"],
                      default: "3 months",
                    },
                    {
                      label: "Cancellation policy window",
                      options: [
                        "24h notice",
                        "48h notice",
                        "72h notice",
                        "1 week notice",
                      ],
                      default: "48h notice",
                    },
                  ].map((s) => (
                    <div
                      key={s.label}
                      className="flex items-center justify-between py-3 border-b border-violet-900/20 last:border-0"
                    >
                      <p className="text-white text-sm font-medium">
                        {s.label}
                      </p>
                      <select
                        defaultValue={s.default}
                        className="bg-violet-950/50 border border-violet-900/40 text-violet-200 text-xs font-medium rounded-xl px-3 py-2 outline-none cursor-pointer focus:border-violet-500/50 transition-colors"
                      >
                        {s.options.map((o) => (
                          <option
                            key={o}
                            value={o}
                            className="bg-[#1e0d35] text-white"
                          >
                            {o}
                          </option>
                        ))}
                      </select>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-[#1e0d35]/60 backdrop-blur-md border border-violet-900/40 rounded-2xl p-6 shadow-xl">
                <h3
                  style={playfair}
                  className="text-white text-xl font-medium mb-2"
                >
                  Cancellation Policy Manifesto
                </h3>
                <textarea
                  defaultValue="Deposits are non-refundable. Cancellations made with less than 48 hours notice will forfeit the deposit. Rescheduling is allowed up to 24 hours before the session and the deposit will transfer to the new date. No-shows will be charged the full session fee."
                  rows={4}
                  className="w-full bg-violet-950/40 border border-violet-900/30 rounded-xl px-3 py-2.5 text-violet-100 text-sm outline-none focus:border-violet-500/50 resize-none transition-colors"
                />
              </div>
            </>
          )}

          {/* Pricing & Deposits Section */}
          {activeSection === "pricing" && (
            <div className="bg-[#1e0d35]/60 backdrop-blur-md border border-violet-900/40 rounded-2xl p-6 shadow-xl">
              <h3
                style={playfair}
                className="text-white text-xl font-medium mb-5"
              >
                Pricing & Deposits
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  { label: "Hourly Rate", value: "$160", icon: Clock },
                  { label: "Minimum Session", value: "$120", icon: DollarSign },
                  {
                    label: "Deposit Percentage",
                    value: "25%",
                    icon: DollarSign,
                  },
                  {
                    label: "Large Piece Minimum",
                    value: "$400",
                    icon: DollarSign,
                  },
                ].map((f) => (
                  <div key={f.label}>
                    <label className="text-violet-400/60 text-xs mb-1.5 block font-medium">
                      {f.label}
                    </label>
                    <div className="flex items-center gap-2 bg-violet-950/40 border border-violet-900/30 rounded-xl px-3 py-2.5 focus-within:border-violet-500/50 transition-colors">
                      <f.icon
                        size={13}
                        className="text-violet-400/60 shrink-0"
                      />
                      <input
                        defaultValue={f.value}
                        className="bg-transparent text-violet-100 text-sm flex-1 outline-none"
                      />
                    </div>
                  </div>
                ))}
                <div className="md:col-span-2">
                  <label className="text-violet-400/60 text-xs mb-1.5 block font-medium">
                    Pricing FAQ / Notes
                  </label>
                  <textarea
                    defaultValue="Pricing is based on complexity, size, and placement. Custom pieces may require a design consultation fee. Touch-ups within 3 months of original session are complimentary."
                    rows={3}
                    className="w-full bg-violet-950/40 border border-violet-900/30 rounded-xl px-3 py-2.5 text-violet-100 text-sm outline-none focus:border-violet-500/50 resize-none transition-colors"
                  />
                </div>
              </div>
            </div>
          )}

          {/* Notifications Preferences */}
          {activeSection === "notifications" && (
            <div className="bg-[#1e0d35]/60 backdrop-blur-md border border-violet-900/40 rounded-2xl p-6 shadow-xl">
              <h3
                style={playfair}
                className="text-white text-xl font-medium mb-5"
              >
                Notification Preferences
              </h3>
              <div className="space-y-4">
                {Object.keys(notifSettings).map((key) => {
                  const labels = {
                    newBooking: {
                      title: "New booking requests",
                      desc: "When a client requests an appointment",
                    },
                    reminder: {
                      title: "Session reminders",
                      desc: "24h before each booked session",
                    },
                    message: {
                      title: "New messages",
                      desc: "When a client sends you a message",
                    },
                    payment: {
                      title: "Payment received",
                      desc: "When a deposit or payment is confirmed",
                    },
                    review: {
                      title: "New reviews",
                      desc: "When a client leaves a review",
                    },
                    marketing: {
                      title: "Platform updates",
                      desc: "New features, tips, and announcements",
                    },
                  };
                  return (
                    <div
                      key={key}
                      className="flex items-center justify-between py-3 border-b border-violet-900/20 last:border-0"
                    >
                      <div>
                        <p className="text-white text-sm font-medium">
                          {labels[key]?.title}
                        </p>
                        <p className="text-violet-200/40 text-xs mt-0.5">
                          {labels[key]?.desc}
                        </p>
                      </div>
                      <Toggle
                        on={notifSettings[key]}
                        onToggle={() =>
                          setNotifSettings((prev) => ({
                            ...prev,
                            [key]: !prev[key],
                          }))
                        }
                      />
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* Privacy & Directory Options */}
          {activeSection === "privacy" && (
            <div className="bg-[#1e0d35]/60 backdrop-blur-md border border-violet-900/40 rounded-2xl p-6 shadow-xl">
              <h3
                style={playfair}
                className="text-white text-xl font-medium mb-5"
              >
                Privacy & Visibility
              </h3>
              <div className="space-y-4">
                {[
                  {
                    label: "Public portfolio",
                    desc: "Anyone can view your portfolio layout",
                    on: portfolioPublic,
                    toggle: () => setPortfolioPublic(!portfolioPublic),
                  },
                  {
                    label: "Show earnings on profile",
                    desc: "Display monthly booking count publicly",
                    on: false,
                    toggle: () => {},
                  },
                  {
                    label: "Searchable profile",
                    desc: "Appear in YoshiCat artist directory lookup",
                    on: true,
                    toggle: () => {},
                  },
                  {
                    label: "Show online status",
                    desc: "Let clients see when you're actively monitoring",
                    on: true,
                    toggle: () => {},
                  },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="flex items-center justify-between py-3 border-b border-violet-900/20 last:border-0"
                  >
                    <div className="flex items-center gap-3">
                      {item.on ? (
                        <Eye size={14} className="text-violet-400" />
                      ) : (
                        <EyeOff size={14} className="text-violet-400/40" />
                      )}
                      <div>
                        <p className="text-white text-sm font-medium">
                          {item.label}
                        </p>
                        <p className="text-violet-200/40 text-xs mt-0.5">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                    <Toggle on={item.on} onToggle={item.toggle} />
                  </div>
                ))}

                {/* Password Update Segment */}
                <div className="pt-4 border-t border-violet-900/20">
                  <p className="text-violet-400/60 text-xs font-bold mb-3 uppercase tracking-wider">
                    Change Credentials
                  </p>
                  <div className="space-y-3">
                    {[
                      "Current Password",
                      "New Password",
                      "Confirm Password",
                    ].map((p) => (
                      <div
                        key={p}
                        className="flex items-center gap-2 bg-violet-950/40 border border-violet-900/30 rounded-xl px-3 py-2.5 focus-within:border-violet-500/50 transition-colors"
                      >
                        <input
                          type={showPassword ? "text" : "password"}
                          placeholder={p}
                          className="bg-transparent text-violet-100 text-sm flex-1 outline-none placeholder:text-violet-400/30"
                        />
                        <button
                          type="button"
                          onClick={() => setShowPassword(!showPassword)}
                          className="text-violet-400/40 hover:text-violet-200 transition-colors"
                        >
                          {showPassword ? (
                            <EyeOff size={14} />
                          ) : (
                            <Eye size={14} />
                          )}
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Appearance Section */}
          {activeSection === "appearance" && (
            <div className="bg-[#1e0d35]/60 backdrop-blur-md border border-violet-900/40 rounded-2xl p-6 shadow-xl">
              <h3
                style={playfair}
                className="text-white text-xl font-medium mb-5"
              >
                Appearance
              </h3>
              <div className="space-y-5">
                <div>
                  <p className="text-violet-400/60 text-xs mb-3 font-medium">
                    Accent Signature Color
                  </p>
                  <div className="flex items-center gap-3">
                    {[
                      { color: "#7c3aed", name: "Violet" },
                      { color: "#2563eb", name: "Blue" },
                      { color: "#059669", name: "Emerald" },
                      { color: "#dc2626", name: "Red" },
                      { color: "#d97706", name: "Amber" },
                      { color: "#db2777", name: "Pink" },
                    ].map((c) => (
                      <button
                        key={c.name}
                        type="button"
                        title={c.name}
                        className={`w-8 h-8 rounded-full border-2 transition-all ${c.color === "#7c3aed" ? "border-white scale-110 shadow-md" : "border-transparent hover:scale-105"}`}
                        style={{ background: c.color }}
                      />
                    ))}
                  </div>
                </div>

                <div>
                  <p className="text-violet-400/60 text-xs mb-3 font-medium">
                    Sidebar Layout Style
                  </p>
                  <div className="grid grid-cols-3 gap-3">
                    {["Compact", "Default", "Wide"].map((s) => (
                      <button
                        key={s}
                        type="button"
                        className={`py-2.5 text-sm font-medium rounded-xl border transition-all ${
                          s === "Default"
                            ? "bg-violet-600/20 border-violet-500/30 text-violet-200 shadow-sm"
                            : "bg-violet-950/30 border-violet-900/20 text-violet-400/50 hover:text-violet-300"
                        }`}
                      >
                        {s}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Footer Save Row */}
          <div className="flex items-center justify-between pt-2 flex-wrap gap-3">
            <p className="text-violet-400/40 text-xs font-medium">
              Changes are recorded automatically to temporary memory
            </p>
            <button className="flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-violet-600 to-indigo-600 text-white text-sm font-medium rounded-xl hover:from-violet-700 hover:to-indigo-700 transition-all shadow-md">
              <CheckCircle2 size={14} /> Save Changes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
