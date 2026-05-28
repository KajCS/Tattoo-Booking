import { Plus, MoreHorizontal } from "lucide-react";

export default function PortfolioGrid({ items, gridSize, hovered, onHover }) {
  return (
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
      {items.map((item) => (
        <div
          key={item.id}
          className="aspect-square rounded-2xl overflow-hidden relative border border-violet-900/40 cursor-pointer group shadow-md"
          onMouseEnter={() => onHover(item.id)}
          onMouseLeave={() => onHover(null)}
        >
          <img
            src={item.image}
            alt={item.title}
            className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          />

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
              {item.likes !== undefined && item.views !== undefined && (
                <div className="flex gap-3 text-xs text-violet-300/60">
                  <span>♥ {item.likes}</span>
                  <span>👁 {item.views}</span>
                </div>
              )}
            </div>
            <button className="absolute top-2.5 right-2.5 w-7 h-7 bg-black/40 backdrop-blur-sm border border-white/10 rounded-lg flex items-center justify-center text-white/70 hover:text-white hover:bg-black/60 transition-all">
              <MoreHorizontal size={14} />
            </button>
          </div>

          {/* Featured Badge */}
          {item.featured && (
            <div className="absolute top-2.5 left-2.5 bg-amber-500/20 text-amber-300 text-xs px-2 py-1 rounded-lg border border-amber-500/30 font-medium">
              Featured
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
