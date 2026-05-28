import { useState } from "react";
import PortfolioStatsCards from "../../components/PortfolioStatsCards";
import PortfolioControls from "../../components/PortfolioControls";
import PortfolioGrid from "../../components/PortfolioGrid";

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
    likes: 198,
    views: 950,
    featured: false,
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

      {/* Stats Cards */}
      <PortfolioStatsCards items={portfolioItems} />

      {/* Style Filters + Grid Density Controls */}
      <PortfolioControls
        styles={styles}
        activeStyle={activeStyle}
        onStyleChange={setActiveStyle}
        gridSize={gridSize}
        onGridSizeChange={setGridSize}
      />

      {/* Portfolio Grid */}
      <PortfolioGrid
        items={filtered}
        gridSize={gridSize}
        hovered={hovered}
        onHover={setHovered}
      />
    </div>
  );
}
