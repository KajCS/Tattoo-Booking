export const playfair = { fontFamily: "'Playfair Display', serif" };
export const HOURS = Array.from({ length: 11 }, (_, i) => i + 9); // 9am–7pm

export const initialSlots = {
  "2026-05-19-10": "booked",
  "2026-05-19-13": "booked",
  "2026-05-19-16": "booked",
  "2026-05-20-10": "booked",
  "2026-05-20-12": "available",
  "2026-05-20-14": "available",
  "2026-05-20-16": "booked",
  "2026-05-21-10": "booked",
  "2026-05-21-12": "break",
  "2026-05-21-13": "booked",
  "2026-05-21-15": "booked",
  "2026-05-22-10": "off",
  "2026-05-22-12": "off",
  "2026-05-22-14": "off",
  "2026-05-23-10": "booked",
  "2026-05-23-13": "available",
  "2026-05-23-16": "available",
  "2026-05-24-11": "booked",
  "2026-05-24-13": "booked",
  "2026-05-24-15": "available",
  "2026-05-25-10": "off",
  "2026-05-25-12": "off",
};

export const slotColors = {
  available:
    "bg-violet-600/25 border border-violet-500/40 text-violet-300 hover:bg-violet-600/40",
  booked: "bg-emerald-600/20 border border-emerald-500/30 text-emerald-300",
  blocked: "bg-red-500/15 border border-red-500/25 text-red-400",
  break: "bg-amber-500/15 border border-amber-500/25 text-amber-400",
  off: "bg-violet-950/30 border border-violet-900/10 text-violet-900/40",
};

export const recurringDefaults = [
  { day: "Sunday", active: false, start: "", end: "" },
  { day: "Monday", active: true, start: "10:00", end: "19:00" },
  { day: "Tuesday", active: true, start: "10:00", end: "19:00" },
  { day: "Wednesday", active: true, start: "10:00", end: "19:00" },
  { day: "Thursday", active: false, start: "", end: "" },
  { day: "Friday", active: true, start: "10:00", end: "20:00" },
  { day: "Saturday", active: true, start: "11:00", end: "17:00" },
];

export const blockedDates = [
  { date: "May 28–30", reason: "Tattoo Convention – NYC", type: "convention" },
  { date: "June 10", reason: "Personal leave", type: "leave" },
  { date: "June 20–25", reason: "Guest work – LA Ink Studio", type: "guest" },
];

export const formatDateString = (dateObj) => {
  const yyyy = dateObj.getFullYear();
  const mm = String(dateObj.getMonth() + 1).padStart(2, "0");
  const dd = String(dateObj.getDate()).padStart(2, "0");
  return `${yyyy}-${mm}-${dd}`;
};
