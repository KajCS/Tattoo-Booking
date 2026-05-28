import React from "react";
import { X, Check } from "lucide-react";
import { playfair } from "../utils/constants";

export function BlockModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />
      <div
        className="relative bg-[#1a0b2e] border border-violet-900/50 rounded-2xl w-full max-w-md p-6 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between mb-5">
          <h3 style={playfair} className="text-white">
            Block Dates
          </h3>
          <button
            onClick={onClose}
            className="text-violet-400/50 hover:text-violet-300 transition-colors"
          >
            <X size={18} />
          </button>
        </div>
        <div className="space-y-4">
          <div>
            <label className="text-violet-400/60 text-xs mb-1.5 block">
              Date range
            </label>
            <div className="flex items-center gap-2">
              <input
                type="date"
                className="flex-1 bg-violet-950/40 border border-violet-900/30 text-violet-200 text-sm rounded-xl px-3 py-2 outline-none focus:border-violet-500/50"
              />
              <span className="text-violet-400/40 text-sm">→</span>
              <input
                type="date"
                className="flex-1 bg-violet-950/40 border border-violet-900/30 text-violet-200 text-sm rounded-xl px-3 py-2 outline-none focus:border-violet-500/50"
              />
            </div>
          </div>
          <div>
            <label className="text-violet-400/60 text-xs mb-1.5 block">
              Reason
            </label>
            <select className="w-full bg-violet-950/40 border border-violet-900/30 text-violet-200 text-sm rounded-xl px-3 py-2 outline-none focus:border-violet-500/50">
              <option>Personal leave</option>
              <option>Convention / Travel</option>
              <option>Guest work</option>
              <option>Emergency</option>
              <option>Holiday</option>
            </select>
          </div>
          <div>
            <label className="text-violet-400/60 text-xs mb-1.5 block">
              Note (optional)
            </label>
            <input
              type="text"
              placeholder="e.g. NYC Tattoo Convention"
              className="w-full bg-violet-950/40 border border-violet-900/30 text-violet-200 text-sm rounded-xl px-3 py-2 outline-none focus:border-violet-500/50 placeholder:text-violet-400/30"
            />
          </div>
        </div>
        <div className="flex gap-2 mt-6">
          <button
            onClick={onClose}
            className="flex-1 py-2.5 bg-gradient-to-r from-violet-600 to-indigo-600 text-white text-sm rounded-xl hover:from-violet-700 hover:to-indigo-700 transition-all flex items-center justify-center gap-1.5"
          >
            <Check size={14} /> Confirm Block
          </button>
          <button
            onClick={onClose}
            className="py-2.5 px-4 bg-violet-900/30 border border-violet-700/30 text-violet-300 text-sm rounded-xl hover:bg-violet-800/40 transition-all"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}
