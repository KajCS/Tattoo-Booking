import { useState } from "react";
import AppointmentFiltersSection from "../../components/AppointmentFiltersSection";
import AppointmentTable from "../../components/AppointmentTable";
import AppointmentDetailModal from "../../components/AppointmentDetailModal";

const playfair = { fontFamily: "'Playfair Display', serif" };

const appointments = [
  {
    id: 1,
    client: "Jamie Torres",
    avatar: "JT",
    style: "Japanese Sleeve",
    date: "May 19, 2026",
    time: "10:00 AM",
    duration: "3h",
    deposit: "$120",
    depositPaid: true,
    total: "$480",
    status: "confirmed",
    notes:
      "Full color, koi fish + cherry blossoms. Client has reference images. Sensitive skin – test patch done.",
    references: 3,
  },
  {
    id: 2,
    client: "Sam Rivera",
    avatar: "SR",
    style: "Fine Line Floral",
    date: "May 19, 2026",
    time: "1:30 PM",
    duration: "2h",
    deposit: "$80",
    depositPaid: true,
    total: "$280",
    status: "confirmed",
    notes: "Minimal fine line roses on forearm. Very specific about spacing.",
    references: 2,
  },
  {
    id: 3,
    client: "Alex Kim",
    avatar: "AK",
    style: "Neo-Traditional Wolf",
    date: "May 19, 2026",
    time: "4:00 PM",
    duration: "1.5h",
    deposit: "$60",
    depositPaid: false,
    total: "$200",
    status: "pending",
    notes: "First tattoo. Needs consultation call before session.",
    references: 1,
  },
  {
    id: 4,
    client: "Casey Brooks",
    avatar: "CB",
    style: "Geometric Mandala",
    date: "May 22, 2026",
    time: "11:00 AM",
    duration: "4h",
    deposit: "$150",
    depositPaid: false,
    total: "$600",
    status: "pending",
    notes: "Large back piece. Needs stencil approval before session.",
    references: 4,
  },
  {
    id: 5,
    client: "Riley Dane",
    avatar: "RD",
    style: "Watercolor Koi",
    date: "May 24, 2026",
    time: "2:00 PM",
    duration: "3h",
    deposit: "$120",
    depositPaid: true,
    total: "$450",
    status: "reschedule",
    notes: "Client requested to move from May 18 due to travel.",
    references: 2,
  },
  {
    id: 6,
    client: "Priya Sharma",
    avatar: "PS",
    style: "Blackwork Lotus",
    date: "May 14, 2026",
    time: "3:00 PM",
    duration: "2h",
    deposit: "$80",
    depositPaid: true,
    total: "$320",
    status: "completed",
    notes: "Turned out beautiful. Left a 5-star review!",
    references: 0,
  },
  {
    id: 7,
    client: "Devon Walsh",
    avatar: "DW",
    style: "Traditional Anchor",
    date: "May 12, 2026",
    time: "12:00 PM",
    duration: "1h",
    deposit: "$40",
    depositPaid: true,
    total: "$160",
    status: "cancelled",
    notes: "Cancelled 48h before. Deposit forfeited per policy.",
    references: 1,
  },
  {
    id: 8,
    client: "Taylor Vega",
    avatar: "TV",
    style: "Realism Portrait",
    date: "May 10, 2026",
    time: "10:00 AM",
    duration: "5h",
    deposit: "$200",
    depositPaid: true,
    total: "$900",
    status: "no-show",
    notes: "Client did not show. Phone unreachable. Follow-up sent.",
    references: 2,
  },
];

export default function ArtistAppointments() {
  const [activeTab, setActiveTab] = useState("all");
  const [search, setSearch] = useState("");
  const [selected, setSelected] = useState(null);

  const filtered = appointments.filter((a) => {
    const matchTab = activeTab === "all" || a.status === activeTab;
    const matchSearch =
      a.client.toLowerCase().includes(search.toLowerCase()) ||
      a.style.toLowerCase().includes(search.toLowerCase());
    return matchTab && matchSearch;
  });

  return (
    <div className="p-6 max-w-[1400px] mx-auto">
      {/* Header */}
      <div className="mb-6">
        <h1 style={playfair} className="text-white mb-1 text-3xl">
          Appointments
        </h1>
        <p className="text-violet-200/40 text-sm">
          Manage all bookings, requests, and session history
        </p>
      </div>

      {/* Filters */}
      <AppointmentFiltersSection
        appointments={appointments}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        search={search}
        setSearch={setSearch}
      />

      {/* Table */}
      <AppointmentTable filtered={filtered} setSelected={setSelected} />

      {/* Detail Modal */}
      <AppointmentDetailModal selected={selected} setSelected={setSelected} />
    </div>
  );
}
