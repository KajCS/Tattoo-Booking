import React from 'react';
import ArtistCard from './ArtistCard';

// This data can eventually be replaced by an API call to your Laravel backend
const artists = [
  {
    id: 1,
    name: 'Benz Pilapil',
    specialties: ['Traditional', 'Japanese', 'Black & Grey'],
    image: '../../public/artists/benz.webp',
  },
  {
    id: 2,
    name: 'Aryll Pilapil',
    specialties: ['Watercolor', 'Fine Line', 'Botanical'],
    image: '../../public/artists/aryll.jpg',
  },
  {
    id: 3,
    name: 'Nestor Tanudtanud',
    specialties: ['Geometric', 'Neo-Traditional', 'Realism'],
    image: '../../public/artists/hwizi-1.webp',
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