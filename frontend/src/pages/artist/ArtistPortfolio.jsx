import { useState } from "react";
import {
  Upload,
  Eye,
  Heart,
  MoreHorizontal,
  Plus,
  Filter,
  Grid3X3,
  LayoutGrid,
  TrendingUp,
  Star,
  Image as ImageIcon,
} from "lucide-react";

const playfair = { fontFamily: "'Playfair Display', serif" };

const styles = [
  "All",
  "Traditional",
  "Japanese",
  "Fine Line",
  "Blackwork",
  "Realism",
  "Neo-Traditional",
  "Geometric",
  "Watercolor",
  "Minimalist",
];

const portfolioItems = [
  {
    id: 1,
    title: "Koi Dragon Sleeve",
    style: "Japanese",
    image: "../../../public/sam.jpg",
  },
  {
    id: 2,
    title: "Sacred Geometry",
    style: "Geometric",
    image: "../../../public/sam.jpg",
  },
  {
    id: 3,
    title: "Fine Line Botanicals",
    style: "Fine Line",
    image: "../../../public/sam.jpg",
  },
  {
    id: 4,
    title: "Blackwork Wolf",
    style: "Blackwork",
    image: "../../../public/sam.jpg",
  },
  {
    id: 5,
    title: "Watercolor Butterfly",
    style: "Watercolor",
    image: "../../../public/sam.jpg",
  },
  {
    id: 6,
    title: "Traditional Rose",
    style: "Traditional",
    image: "../../../public/sam.jpg",
  },
  {
    id: 7,
    title: "Minimalist Moon",
    style: "Minimalist",
    image: "../../../public/sam.jpg",
  },
  {
    id: 8,
    title: "Neo-Trad Panther",
    style: "Neo-Traditional",
    image: "../../../public/sam.jpg",
  },
  {
    id: 9,
    title: "Realism Portrait",
    style: "Realism",
    image: "../../../public/sam.jpg",
  },
];

export default function ArtistPortfolio() {
  const [activeStyle, setActiveStyle] = useState("All");
  const [gridSize, setGridSize] = useState("sm");
  const [hovered, setHovered] = useState(null);

  const filtered =
    activeStyle === "All"
      ? portfolioItems
      : portfolioItems.filter((p) => p.style === activeStyle);

  const totalLikes = portfolioItems.reduce((s, p) => s + p.likes, 0);
  const totalViews = portfolioItems.reduce((s, p) => s + p.views, 0);

  return (
    <div className="p-6 max-w-350 mx-auto text-violet-100 selection:bg-violet-500/30">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 style={playfair} className="text-3xl text-white mb-1">
            Portfolio
          </h1>
          <p className="text-violet-200/40 text-sm">
            {portfolioItems.length} pieces · Manage your gallery
          </p>
        </div>
      </div>

      {/* Style Filters + Grid Density Controls */}
      <div className="flex items-center gap-3 mb-5 flex-wrap">
        <div className="flex items-center gap-1 bg-violet-950/50 border border-violet-900/30 rounded-xl p-1 overflow-x-auto scrollbar-none flex-nowrap max-w-full">
          {styles.map((s) => (
            <button
              key={s}
              onClick={() => setActiveStyle(s)}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap transition-all ${
                activeStyle === s
                  ? "bg-violet-600/30 text-violet-200 border border-violet-500/30 shadow-sm"
                  : "text-violet-400/50 hover:text-violet-200"
              }`}
            >
              {s}
            </button>
          ))}
        </div>

        <div className="ml-auto flex items-center gap-1 bg-violet-950/50 border border-violet-900/30 rounded-xl p-1 shrink-0">
          <button
            onClick={() => setGridSize("sm")}
            className={`p-1.5 rounded-lg transition-all ${gridSize === "sm" ? "bg-violet-600/30 text-violet-300 border border-violet-500/20" : "text-violet-400/40 hover:text-violet-200"}`}
          >
            <Grid3X3 size={14} />
          </button>
          <button
            onClick={() => setGridSize("lg")}
            className={`p-1.5 rounded-lg transition-all ${gridSize === "lg" ? "bg-violet-600/30 text-violet-300 border border-violet-500/20" : "text-violet-400/40 hover:text-violet-200"}`}
          >
            <LayoutGrid size={14} />
          </button>
        </div>
      </div>

      {/* Main Flash Portfolio Grid */}
      <div
        className={`grid gap-3 ${gridSize === "sm" ? "grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5" : "grid-cols-1 sm:grid-cols-2 md:grid-cols-3"}`}
      >
        {/* Quick Upload Action Slot */}
        <label className="aspect-square rounded-2xl border-2 border-dashed border-violet-800/40 hover:border-violet-600/60 bg-violet-950/20 hover:bg-violet-900/20 transition-all flex flex-col items-center justify-center gap-2 cursor-pointer group shadow-inner">
          <Plus
            size={24}
            className="text-violet-700 group-hover:text-violet-400 transition-colors"
          />
          <span className="text-violet-700/60 group-hover:text-violet-400/70 text-xs font-medium tracking-wide transition-colors">
            Upload Artwork
          </span>
          <input type="file" className="hidden" accept="image/*" multiple />
        </label>

        {/* Dynamic Portfolio Items */}
        {filtered.map((item) => (
          <div
            key={item.id}
            className="aspect-square rounded-2xl overflow-hidden relative border border-violet-900/40 cursor-pointer group shadow-md"
            onMouseEnter={() => setHovered(item.id)}
            onMouseLeave={() => setHovered(null)}
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            />

            {/* Interactive Details Overlay */}
            <div
              className={`absolute inset-0 bg-linear-to-t from-black/90 via-black/30 to-transparent transition-opacity duration-300 flex flex-col justify-end p-3.5 ${hovered === item.id ? "opacity-100" : "opacity-0"}`}
            >
              <div>
                <p className="text-white text-sm font-semibold tracking-wide truncate mb-0.5">
                  {item.title}
                </p>
                <p className="text-violet-300/60 text-xs font-medium mb-2">
                  {item.style}
                </p>
              </div>
              <button className="absolute top-2.5 right-2.5 w-7 h-7 bg-black/40 backdrop-blur-sm border border-white/10 rounded-lg flex items-center justify-center text-white/70 hover:text-white hover:bg-black/60 transition-all">
                <MoreHorizontal size={14} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
