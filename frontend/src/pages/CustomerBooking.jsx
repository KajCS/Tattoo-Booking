import React, { useMemo, useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router";
import CalendarWidget from "../components/CalendarWidget";
import { fetchArtistSlots } from "../services/api";

// Artist data - can be moved to a shared config or fetched from API
const artistsData = [
  {
    id: 1,
    name: "Benz Pilapil",
    specialties: ["Traditional", "Japanese", "Black & Grey"],
    image: "../../public/artists/benz.webp",
    about:
      "Benz is a master of traditional Japanese tattoos with over 12 years of experience. Known for bold lines and vibrant colors.",
    hours: {
      "Mon - Fri": "10 AM - 7 PM",
      Saturday: "11 AM - 5 PM",
      Sunday: "Closed",
    },
    socials: {
      instagram: "@benzpilapil.ink",
      handle: "BenzPilapilTattoo",
      email: "benz@yoshicat.com",
      phone: "(555) 201-1234",
    },
    portfolio: [
      "https://via.placeholder.com/300x300?text=Portfolio+1",
      "https://via.placeholder.com/300x300?text=Portfolio+2",
      "https://via.placeholder.com/300x300?text=Portfolio+3",
      "https://via.placeholder.com/300x300?text=Portfolio+4",
      "https://via.placeholder.com/300x300?text=Portfolio+5",
      "https://via.placeholder.com/300x300?text=Portfolio+6",
      "https://via.placeholder.com/300x300?text=Portfolio+7",
      "https://via.placeholder.com/300x300?text=Portfolio+8",
    ],
  },
  {
    id: 2,
    name: "Aryll Pilapil",
    specialties: ["Watercolor", "Fine Line", "Botanical"],
    image: "../../public/artists/aryll.jpg",
    about:
      "Aryll specializes in watercolor and fine line work. Her delicate botanical designs are highly sought after.",
    hours: {
      "Mon - Thu": "12 PM - 8 PM",
      "Fri - Sat": "11 AM - 6 PM",
      Sunday: "Closed",
    },
    socials: {
      instagram: "@aryllpilapil.ink",
      handle: "AryllPilapilTattoo",
      email: "aryll@yoshicat.com",
      phone: "(555) 201-5678",
    },
    portfolio: [
      "https://via.placeholder.com/300x300?text=Portfolio+1",
      "https://via.placeholder.com/300x300?text=Portfolio+2",
      "https://via.placeholder.com/300x300?text=Portfolio+3",
      "https://via.placeholder.com/300x300?text=Portfolio+4",
      "https://via.placeholder.com/300x300?text=Portfolio+5",
      "https://via.placeholder.com/300x300?text=Portfolio+6",
      "https://via.placeholder.com/300x300?text=Portfolio+7",
      "https://via.placeholder.com/300x300?text=Portfolio+8",
    ],
  },
  {
    id: 3,
    name: "Nestor Tanudtanud",
    specialties: ["Geometric", "Neo-Traditional", "Realism"],
    image: "../../public/artists/hwizi-1.webp",
    about:
      "Nestor is known for his intricate geometric designs and hyperrealistic portraits. A true artist with 10+ years of experience.",
    hours: {
      "Tue - Fri": "1 PM - 9 PM",
      Saturday: "10 AM - 6 PM",
      "Sun - Mon": "Closed",
    },
    socials: {
      instagram: "@nestor.tattoos",
      handle: "NestorTattooArt",
      email: "nestor@yoshicat.com",
      phone: "(555) 201-9012",
    },
    portfolio: [
      "https://via.placeholder.com/300x300?text=Portfolio+1",
      "https://via.placeholder.com/300x300?text=Portfolio+2",
      "https://via.placeholder.com/300x300?text=Portfolio+3",
      "https://via.placeholder.com/300x300?text=Portfolio+4",
      "https://via.placeholder.com/300x300?text=Portfolio+5",
      "https://via.placeholder.com/300x300?text=Portfolio+6",
      "https://via.placeholder.com/300x300?text=Portfolio+7",
      "https://via.placeholder.com/300x300?text=Portfolio+8",
    ],
  },
];

export default function CustomerBooking() {
  const { artistId } = useParams();
  const navigate = useNavigate();
  const [slots, setSlots] = useState({});
  const [isLoadingSlots, setIsLoadingSlots] = useState(true);

  const artist = useMemo(() => {
    return artistsData.find((a) => a.id === parseInt(artistId));
  }, [artistId]);

  // Fetch artist's availability slots
  useEffect(() => {
    const loadSlots = async () => {
      try {
        setIsLoadingSlots(true);
        const fetchedSlots = await fetchArtistSlots(artistId);
        setSlots(fetchedSlots);
      } catch (error) {
        console.error("Error fetching artist slots:", error);
      } finally {
        setIsLoadingSlots(false);
      }
    };

    if (artistId) {
      loadSlots();
    }
  }, [artistId]);

  // Reusable inline navbar that aligns perfectly with the content below
  const CustomHeader = () => (
    <nav className="w-full bg-[#160b26] border-b border-purple-900/30">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <div className="text-white font-bold text-xl tracking-wide cursor-pointer" onClick={() => navigate("/")}>
          Yoshi<span className="text-violet-400">Cat</span>
        </div>

        {/* Center Links */}
        <div className="hidden md:flex items-center gap-8 text-sm text-slate-300">
          <a href="#" className="hover:text-white transition-colors">Artists</a>
          <a href="#" className="hover:text-white transition-colors">Gallery</a>
          <a href="#" className="hover:text-white transition-colors">About</a>
          <a href="#" className="hover:text-white transition-colors">Contact</a>
        </div>

        {/* Profile Icon */}
        <button className="text-slate-300 hover:text-white transition-colors">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
          </svg>
        </button>
      </div>
    </nav>
  );

  if (!artist) {
    return (
      <div className="min-h-screen bg-slate-900 text-slate-100 font-sans antialiased">
        <CustomHeader />
        <div className="flex flex-col items-center justify-center min-h-[70vh]">
          <p className="text-lg text-slate-400 mb-4">Artist not found</p>
          <button
            onClick={() => navigate("/customer")}
            className="bg-violet-600 hover:bg-violet-500 text-white px-6 py-2 rounded-lg"
          >
            Back to Artists
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 font-sans antialiased selection:bg-violet-500 selection:text-white">
      <CustomHeader />

      <div className="flex flex-col lg:flex-row gap-8 p-6 max-w-7xl mx-auto">
        {/* Left Sidebar */}
        <div className="w-full lg:w-1/3 space-y-6">
          {/* Artist Card */}
          <div className="bg-slate-800 rounded-lg overflow-hidden border border-slate-700">
            {/* Artist Image */}
            <div className="w-full h-64 bg-gradient-to-br from-slate-700 to-slate-900 flex items-center justify-center">
              <img
                src={artist.image}
                alt={artist.name}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Artist Info */}
            <div className="p-6">
              <h2 className="text-2xl font-bold text-white mb-1">
                {artist.name}
              </h2>
              <p className="text-violet-400 text-sm mb-4">
                {artist.specialties.join(" • ")}
              </p>

              {/* About Section */}
              <div className="mb-6">
                <h3 className="text-violet-400 font-semibold text-sm mb-2 uppercase tracking-wider">
                  About
                </h3>
                <p className="text-slate-300 text-sm leading-relaxed">
                  {artist.about}
                </p>
              </div>

              {/* Operating Hours */}
              <div className="mb-6">
                <h3 className="text-violet-400 font-semibold text-sm mb-2 uppercase tracking-wider">
                  Operating Hours
                </h3>
                <div className="text-slate-300 text-sm space-y-1">
                  {Object.entries(artist.hours).map(([day, time]) => (
                    <div key={day} className="flex justify-between">
                      <span>{day}</span>
                      <span
                        className={
                          time === "Closed" ? "text-red-400" : "text-white"
                        }
                      >
                        {time}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Contacts & Socials */}
              <div>
                <h3 className="text-violet-400 font-semibold text-sm mb-3 uppercase tracking-wider">
                  Contacts & Socials
                </h3>
                <div className="space-y-2">
                  <a
                    href="#"
                    className="flex items-center gap-2 text-slate-300 hover:text-violet-400 text-sm transition"
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z" />
                    </svg>
                    {artist.socials.instagram}
                  </a>
                  <a
                    href="#"
                    className="flex items-center gap-2 text-slate-300 hover:text-violet-400 text-sm transition"
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14zm-5.04-6.71l-2.75 3.54h2.88l4.12-5.65h-2.88l-1.37 2.11z" />
                    </svg>
                    {artist.socials.handle}
                  </a>
                  <a
                    href="#"
                    className="flex items-center gap-2 text-slate-300 hover:text-violet-400 text-sm transition"
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                    </svg>
                    {artist.socials.email}
                  </a>
                  <a
                    href="#"
                    className="flex items-center gap-2 text-slate-300 hover:text-violet-400 text-sm transition"
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                    </svg>
                    {artist.socials.phone}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side - Schedule */}
        <div className="w-full lg:w-2/3">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-bold text-white">Schedule</h2>
            <button className="flex items-center gap-2 border border-slate-600 hover:bg-slate-800 text-sm px-4 py-2 rounded-lg transition-colors">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
              Message me!
            </button>
          </div>
          
          {isLoadingSlots ? (
            <div className="bg-slate-800 rounded-lg border border-slate-700 h-[600px] flex items-center justify-center">
              <div className="flex flex-col items-center gap-3">
                <div className="w-8 h-8 border-4 border-violet-500 border-t-transparent rounded-full animate-spin" />
                <p className="text-violet-400 font-medium animate-pulse">
                  Loading schedule...
                </p>
              </div>
            </div>
          ) : (
            <CalendarWidget
              slots={slots}
              onSlotClick={() => {}}
              readOnly={true}
            />
          )}
        </div>
      </div>

      {/* ── Portfolio ── */}
      <div className="max-w-7xl mx-auto px-6 mt-8 mb-12">
        <h2 className="text-white text-xl font-bold mb-6 text-center">Portfolio</h2>
        <div className="bg-slate-800 border border-slate-700 rounded-2xl p-4 sm:p-6">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {artist.portfolio && artist.portfolio.map((url, i) => (
              <div
                key={i}
                className="aspect-square rounded-2xl overflow-hidden bg-slate-700 border border-transparent hover:border-violet-500 transition-colors"
              >
                {url ? (
                  <img
                    src={url}
                    alt={`Portfolio ${i + 1}`}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center">
                    <span className="text-slate-500 text-xs font-medium">Photo {i + 1}</span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      <footer className="w-full border-t border-purple-900/30 bg-slate-950 mt-12">
        <div className="text-center text-slate-600 text-xs py-6">
          © 2026 YoshiCat. All rights reserved.
        </div>
      </footer>
    </div>
  );
}