import React, { useMemo } from "react";
import { useParams, useNavigate } from "react-router";
import Navbar from "../components/Navbar";

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
  },
];

export default function CustomerBooking() {
  const { artistId } = useParams();
  const navigate = useNavigate();

  const artist = useMemo(() => {
    return artistsData.find((a) => a.id === parseInt(artistId));
  }, [artistId]);

  if (!artist) {
    return (
      <div className="min-h-screen bg-slate-900 text-slate-100 font-sans antialiased">
        <Navbar />
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
      <Navbar />

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
                    <svg
                      className="w-4 h-4"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z" />
                    </svg>
                    {artist.socials.instagram}
                  </a>
                  <a
                    href="#"
                    className="flex items-center gap-2 text-slate-300 hover:text-violet-400 text-sm transition"
                  >
                    <svg
                      className="w-4 h-4"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14zm-5.04-6.71l-2.75 3.54h2.88l4.12-5.65h-2.88l-1.37 2.11z" />
                    </svg>
                    {artist.socials.handle}
                  </a>
                  <a
                    href="#"
                    className="flex items-center gap-2 text-slate-300 hover:text-violet-400 text-sm transition"
                  >
                    <svg
                      className="w-4 h-4"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                    </svg>
                    {artist.socials.email}
                  </a>
                  <a
                    href="#"
                    className="flex items-center gap-2 text-slate-300 hover:text-violet-400 text-sm transition"
                  >
                    <svg
                      className="w-4 h-4"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
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
          {/* Schedule Component Placeholder */}
          <div className="bg-slate-800 rounded-lg border border-slate-700 p-8 flex flex-col items-center justify-center min-h-96">
            <div className="text-center">
              <p className="text-slate-400 text-lg mb-4">
                Schedule Component Placeholder
              </p>
              <p className="text-slate-500 text-sm mb-6">
                Book your appointment with {artist.name}
              </p>
              <button
                onClick={() => navigate("/customer")}
                className="bg-slate-700 hover:bg-slate-600 text-white px-6 py-2 rounded-lg transition-colors"
              >
                ← Back to Artists
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
