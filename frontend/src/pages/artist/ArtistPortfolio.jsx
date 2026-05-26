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
    likes: 284,
    views: 1420,
    featured: true,
    image: "../../../public/sam.jpg",
  },
  {
    id: 2,
    title: "Sacred Geometry",
    style: "Geometric",
    likes: 197,
    views: 890,
    featured: false,
    image: "../../../public/sam.jpg",
  },
  {
    id: 3,
    title: "Fine Line Botanicals",
    style: "Fine Line",
    likes: 312,
    views: 1780,
    featured: true,
    image: "../../../public/sam.jpg",
  },
  {
    id: 4,
    title: "Blackwork Wolf",
    style: "Blackwork",
    likes: 156,
    views: 720,
    featured: false,
    image: "../../../public/sam.jpg",
  },
  {
    id: 5,
    title: "Watercolor Butterfly",
    style: "Watercolor",
    likes: 445,
    views: 2100,
    featured: true,
    image: "../../../public/sam.jpg",
  },
  {
    id: 6,
    title: "Traditional Rose",
    style: "Traditional",
    likes: 231,
    views: 980,
    featured: false,
    image: "../../../public/sam.jpg",
  },
  {
    id: 7,
    title: "Minimalist Moon",
    style: "Minimalist",
    likes: 188,
    views: 850,
    featured: false,
    image: "../../../public/sam.jpg",
  },
  {
    id: 8,
    title: "Neo-Trad Panther",
    style: "Neo-Traditional",
    likes: 267,
    views: 1200,
    featured: false,
    image: "../../../public/sam.jpg",
  },
  {
    id: 9,
    title: "Realism Portrait",
    style: "Realism",
    likes: 523,
    views: 3400,
    featured: true,
    image: "../../../public/sam.jpg",
  },
];

export default function ArtistPortfolio() {
  const [activeStyle, setActiveStyle] = useState("All");
  const [gridSize, setGridSize] = useState("sm"); // "sm" represents compact view, "lg" wide view
  const [hovered, setHovered] = useState(null);

  const filtered =
    activeStyle === "All"
      ? portfolioItems
      : portfolioItems.filter((p) => p.style === activeStyle);

  const totalLikes = portfolioItems.reduce((s, p) => s + p.likes, 0);
  const totalViews = portfolioItems.reduce((s, p) => s + p.views, 0);

  return (
    <div className="p-6 max-w-[1400px] mx-auto text-violet-100 selection:bg-violet-500/30">
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
        <div className="flex items-center gap-2">
          <button className="flex items-center gap-1.5 px-3 py-2 bg-violet-900/30 border border-violet-700/30 text-violet-300 text-sm rounded-xl hover:bg-violet-800/40 transition-all">
            <Filter size={13} /> Sort
          </button>
          <label className="flex items-center gap-1.5 px-4 py-2 bg-gradient-to-r from-violet-600 to-indigo-600 text-white text-sm font-medium rounded-xl hover:from-violet-700 hover:to-indigo-700 transition-all cursor-pointer shadow-lg shadow-indigo-950/40">
            <Upload size={13} /> Upload
            <input type="file" className="hidden" accept="image/*" multiple />
          </label>
        </div>
      </div>

      {/* Stats Board */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
        {[
          {
            icon: ImageIcon,
            label: "Total Pieces",
            value: portfolioItems.length,
          },
          {
            icon: Heart,
            label: "Total Likes",
            value: totalLikes.toLocaleString(),
          },
          {
            icon: Eye,
            label: "Total Views",
            value: totalViews.toLocaleString(),
          },
          {
            icon: Star,
            label: "Featured Works",
            value: portfolioItems.filter((p) => p.featured).length,
          },
        ].map(({ icon: Icon, label, value }) => (
          <div
            key={label}
            className="bg-[#1e0d35]/60 backdrop-blur-md border border-violet-900/40 rounded-2xl p-4 flex items-center gap-3 shadow-xl"
          >
            <div className="bg-violet-600/15 rounded-xl p-2.5">
              <Icon size={16} className="text-violet-400" />
            </div>
            <div>
              <p className="text-white font-semibold text-lg tracking-tight">
                {value}
              </p>
              <p className="text-violet-400/40 text-xs mt-0.5">{label}</p>
            </div>
          </div>
        ))}
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

            {/* Featured Sticker */}
            {item.featured && (
              <div className="absolute top-2.5 left-2.5 bg-yellow-500/80 backdrop-blur-md text-yellow-950 text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-md flex items-center gap-1 shadow-sm border border-yellow-400/20">
                <Star size={9} fill="currentColor" /> Featured
              </div>
            )}

            {/* Interactive Details Overlay */}
            <div
              className={`absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent transition-opacity duration-300 flex flex-col justify-end p-3.5 ${hovered === item.id ? "opacity-100" : "opacity-0"}`}
            >
              <div>
                <p className="text-white text-sm font-semibold tracking-wide truncate mb-0.5">
                  {item.title}
                </p>
                <p className="text-violet-300/60 text-xs font-medium mb-2">
                  {item.style}
                </p>
                <div className="flex items-center gap-3">
                  <span className="flex items-center gap-1 text-pink-400/90 text-xs font-medium">
                    <Heart
                      size={11}
                      fill="currentColor"
                      className="opacity-80"
                    />{" "}
                    {item.likes}
                  </span>
                  <span className="flex items-center gap-1 text-violet-300/70 text-xs font-medium">
                    <Eye size={11} /> {item.views}
                  </span>
                </div>
              </div>
              <button className="absolute top-2.5 right-2.5 w-7 h-7 bg-black/40 backdrop-blur-sm border border-white/10 rounded-lg flex items-center justify-center text-white/70 hover:text-white hover:bg-black/60 transition-all">
                <MoreHorizontal size={14} />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Analytics Rank Deck */}
      <div className="mt-6 bg-[#1e0d35]/60 backdrop-blur-md border border-violet-900/40 rounded-2xl p-5 shadow-xl">
        <div className="flex items-center gap-2 mb-4">
          <TrendingUp size={16} className="text-violet-400" />
          <h3
            style={playfair}
            className="text-white text-lg font-medium tracking-wide"
          >
            Performance Ranking
          </h3>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
          {[...portfolioItems]
            .sort((a, b) => b.views - a.views)
            .slice(0, 5)
            .map((item, i) => (
              <div
                key={item.id}
                className="bg-violet-950/40 border border-violet-900/30 rounded-xl p-3 flex flex-col justify-between shadow-inner"
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-violet-400/40 text-xs font-bold">
                    #0{i + 1}
                  </span>
                  <span className="text-violet-400/60 text-[10px] uppercase font-bold tracking-wider border border-violet-900/50 bg-violet-950/60 px-1.5 py-0.5 rounded-md">
                    {item.style}
                  </span>
                </div>
                <p className="text-white text-xs font-semibold truncate mb-2">
                  {item.title}
                </p>
                <div className="flex items-center gap-2.5 pt-1.5 border-t border-violet-900/20">
                  <span className="flex items-center gap-1 text-pink-400/70 text-[11px] font-medium">
                    <Heart size={10} /> {item.likes}
                  </span>
                  <span className="flex items-center gap-1 text-violet-400/50 text-[11px] font-medium">
                    <Eye size={10} /> {item.views}
                  </span>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}
