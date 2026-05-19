import React from 'react';
import ArtistCard from './ArtistCard';

// This data can eventually be replaced by an API call to your Laravel backend
const artists = [
  {
    id: 1,
    name: 'Benz Pilapil',
    specialties: ['Traditional', 'Japanese', 'Black & Grey'],
    image: 'https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?auto=format&fit=crop&q=80&w=600',
  },
  {
    id: 2,
    name: 'Aryll Pilapil',
    specialties: ['Watercolor', 'Fine Line', 'Botanical'],
    image: 'https://images.unsplash.com/photo-1562157873-818bc0726f68?auto=format&fit=crop&q=80&w=600',
  },
  {
    id: 3,
    name: 'Ken Cudal',
    specialties: ['Geometric', 'Neo-Traditional', 'Realism'],
    image: 'https://images.unsplash.com/photo-1590246814883-57f511e76523?auto=format&fit=crop&q=80&w=600',
  },
];

export default function ArtistSection() {
  return (
    <section id="artists" className="space-y-8">
      {/* Header text group */}
      <div className="text-center space-y-2">
        <h2 className="text-3xl font-normal font-serif tracking-tight text-white sm:text-4xl">Choose Your <span className="text-violet-400">Artist</span></h2>
        <p className="text-slate-400 max-w-2xl mx-auto text-sm sm:text-base">
          Browse our talented artists and find the perfect match for your next tattoo.
        </p>
      </div>

      {/* Responsive Cards Layout Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
        {artists.map((artist) => (
          <ArtistCard key={artist.id} artist={artist} />
        ))}
      </div>
    </section>
  );
}