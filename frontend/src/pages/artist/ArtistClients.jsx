import { useState } from "react";
import { Plus } from "lucide-react";
import ClientStatsCards from "../../components/ClientStatsCards";
import ClientListSection from "../../components/ClientListSection";
import ClientDetailPanel from "../../components/ClientDetailPanel";

const playfair = { fontFamily: "'Playfair Display', serif" };

const clients = [
  {
    id: 1,
    name: "Jamie Torres",
    avatar: "JT",
    email: "jamie@mail.com",
    phone: "(555) 100-2020",
    since: "Jan 2024",
    sessions: 6,
    spent: "$2,480",
    styles: ["Japanese", "Traditional"],
    tags: ["repeat"],
    lastSession: "May 19, 2026",
    nextSession: "Aug 12, 2026",
    allergyNotes: "Mild latex sensitivity — use nitrile gloves",
    consentSigned: true,
    favorite: true,
    blacklisted: false,
    notes:
      "Extremely loyal client. Always tips well. Interested in completing sleeve.",
    inspirations: 8,
  },
  {
    id: 2,
    name: "Sam Rivera",
    avatar: "SR",
    email: "sam@mail.com",
    phone: "(555) 203-4040",
    since: "Mar 2024",
    sessions: 3,
    spent: "$860",
    styles: ["Fine Line", "Botanical"],
    tags: ["repeat"],
    lastSession: "May 19, 2026",
    nextSession: "Jul 8, 2026",
    allergyNotes: "",
    consentSigned: true,
    favorite: false,
    blacklisted: false,
    notes:
      "Very detail-oriented. Sends lots of references. Prefers morning slots.",
    inspirations: 12,
  },
  {
    id: 3,
    name: "Alex Kim",
    avatar: "AK",
    email: "alex@mail.com",
    phone: "(555) 304-5050",
    since: "May 2026",
    sessions: 0,
    spent: "$0",
    styles: ["Neo-Traditional"],
    tags: ["new"],
    lastSession: "—",
    nextSession: "May 19, 2026",
    allergyNotes: "No known allergies",
    consentSigned: false,
    favorite: false,
    blacklisted: false,
    notes: "First-time client. Needs consent form before session.",
    inspirations: 3,
  },
  {
    id: 4,
    name: "Casey Brooks",
    avatar: "CB",
    email: "casey@mail.com",
    phone: "(555) 405-6060",
    since: "Nov 2023",
    sessions: 4,
    spent: "$1,620",
    styles: ["Geometric", "Blackwork"],
    tags: ["repeat"],
    lastSession: "Feb 2026",
    nextSession: "May 22, 2026",
    allergyNotes: "Sensitive to certain inks — patch test required",
    consentSigned: true,
    favorite: false,
    blacklisted: false,
    notes: "Working on a large back piece. Very patient, easy to work with.",
    inspirations: 6,
  },
  {
    id: 5,
    name: "Priya Sharma",
    avatar: "PS",
    email: "priya@mail.com",
    phone: "(555) 506-7070",
    since: "Jul 2023",
    sessions: 8,
    spent: "$3,200",
    styles: ["Blackwork", "Fine Line", "Minimalist"],
    tags: ["repeat"],
    lastSession: "May 14, 2026",
    nextSession: "Sep 2026",
    allergyNotes: "",
    consentSigned: true,
    favorite: true,
    blacklisted: false,
    notes: "Top client. Has referred 3 friends. Left multiple 5-star reviews.",
    inspirations: 15,
  },
  {
    id: 6,
    name: "Taylor Vega",
    avatar: "TV",
    email: "taylor@mail.com",
    phone: "(555) 607-8080",
    since: "Apr 2025",
    sessions: 1,
    spent: "$0",
    styles: ["Realism"],
    tags: ["no-show"],
    lastSession: "May 10, 2026",
    nextSession: "—",
    allergyNotes: "",
    consentSigned: true,
    favorite: false,
    blacklisted: false,
    notes:
      "No-showed last appointment. Deposit collected. Consider requiring full payment upfront.",
    inspirations: 2,
  },
];

export default function ArtistClients() {
  const [search, setSearch] = useState("");
  const [selected, setSelected] = useState(clients[0]);
  const [filter, setFilter] = useState("all");

  const filtered = clients.filter((c) => {
    const matchSearch =
      c.name.toLowerCase().includes(search.toLowerCase()) ||
      c.styles.some((s) => s.toLowerCase().includes(search.toLowerCase()));
    const matchFilter =
      filter === "all" ||
      (filter === "new" && c.tags.includes("new")) ||
      (filter === "repeat" && c.tags.includes("repeat")) ||
      (filter === "favorites" && c.favorite);
    return matchSearch && matchFilter;
  });

  return (
    <div className="p-6 max-w-[1400px] mx-auto text-violet-100 selection:bg-violet-500/30">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 style={playfair} className="text-3xl text-white mb-1">
            Clients
          </h1>
          <p className="text-violet-200/40 text-sm">
            {clients.length} total ·{" "}
            {clients.filter((c) => c.sessions > 1).length} repeat clients
          </p>
        </div>
        <button className="flex items-center gap-1.5 px-4 py-2 bg-gradient-to-r from-violet-600 to-indigo-600 text-white text-sm font-medium rounded-xl hover:from-violet-700 hover:to-indigo-700 transition-all shadow-lg shadow-indigo-950/40">
          <Plus size={15} /> Add Client
        </button>
      </div>

      {/* Main Layout */}
      <div className="flex flex-col lg:flex-row gap-6">
        <div className="flex flex-col grow min-w-0">
          {/* Stats Cards */}
          <div className="mb-6">
            <ClientStatsCards clients={clients} />
          </div>

          {/* Client List Section */}
          <ClientListSection
            clients={clients}
            search={search}
            setSearch={setSearch}
            filter={filter}
            setFilter={setFilter}
            selected={selected}
            setSelected={setSelected}
            filtered={filtered}
          />
        </div>

        {/* Detail Panel */}
        <div className="shrink-0 w-full lg:w-[320px] xl:w-[360px]">
          <ClientDetailPanel selected={selected} setSelected={setSelected} clients={clients} />
        </div>
      </div>
    </div>
  );
}
