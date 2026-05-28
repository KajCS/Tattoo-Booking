import { Grid3X3, LayoutGrid } from "lucide-react";

export default function PortfolioControls({
  styles,
  activeStyle,
  onStyleChange,
  gridSize,
  onGridSizeChange,
}) {
  return (
    <div className="flex items-center gap-3 mb-5 flex-wrap">
      <div className="flex items-center gap-1 bg-violet-950/50 border border-violet-900/30 rounded-xl p-1 overflow-x-auto scrollbar-none flex-nowrap max-w-full">
        {styles.map((s) => (
          <button
            key={s}
            onClick={() => onStyleChange(s)}
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
          onClick={() => onGridSizeChange("sm")}
          className={`p-1.5 rounded-lg transition-all ${gridSize === "sm" ? "bg-violet-600/30 text-violet-300 border border-violet-500/20" : "text-violet-400/40 hover:text-violet-200"}`}
        >
          <Grid3X3 size={14} />
        </button>
        <button
          onClick={() => onGridSizeChange("lg")}
          className={`p-1.5 rounded-lg transition-all ${gridSize === "lg" ? "bg-violet-600/30 text-violet-300 border border-violet-500/20" : "text-violet-400/40 hover:text-violet-200"}`}
        >
          <LayoutGrid size={14} />
        </button>
      </div>
    </div>
  );
}
