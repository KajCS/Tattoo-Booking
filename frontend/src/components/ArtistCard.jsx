import React from 'react';

export default function ArtistCard({ artist }) {
  return (
    <div className="bg-[#140e24] border border-purple-950/40 rounded-2xl overflow-hidden shadow-xl hover:border-purple-800/40 transition-all duration-300 flex flex-col group">
      {/* Image Wrapper */}
      <div className="aspect-[4/3] w-full overflow-hidden bg-purple-950/20 relative">
        <img 
          src={artist.image} 
          alt={artist.name}
          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 brightness-90 contrast-105"
        />
      </div>

      {/* Content Group */}
      <div className="p-5 flex flex-col flex-grow justify-between space-y-4">
        <div className="space-y-2">
          <h3 className="text-xl font-semibold text-white tracking-wide">{artist.name}</h3>
          
          {/* Dynamic Badges Group */}
          <div className="flex flex-wrap gap-1.5">
            {artist.specialties.map((spec, i) => (
              <span 
                key={i} 
                className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-purple-950/60 text-purple-300 border border-purple-900/30"
              >
                {spec}
              </span>
            ))}
          </div>
        </div>

        {/* Action Trigger Button */}
        <button className="w-full bg-violet-600 hover:bg-violet-500 text-white font-medium text-sm py-2.5 px-4 rounded-xl shadow-lg shadow-violet-950/20 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-violet-500 focus:ring-offset-2 focus:ring-offset-[#0d081b]">
          Select Artist
        </button>
      </div>
    </div>
  );
}