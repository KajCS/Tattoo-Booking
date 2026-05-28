import ArtistOverview from "../pages/artist/ArtistOverview";
import ArtistAppointments from "../pages/artist/ArtistAppointments";
import ArtistAvailability from "../pages/artist/ArtistAvailability";
import ArtistClients from "../pages/artist/ArtistClients";
import ArtistPortfolio from "../pages/artist/ArtistPortfolio";
import ArtistMessages from "../pages/artist/ArtistMessages";
import ArtistEarnings from "../pages/artist/ArtistEarnings";
import ArtistSettings from "../pages/artist/ArtistSettings";

export const artistRoutes = [
  {
    index: true,
    Component: ArtistOverview,
  },
  {
    path: "appointments",
    Component: ArtistAppointments,
  },
  {
    path: "availability",
    Component: ArtistAvailability,
  },
  {
    path: "clients",
    Component: ArtistClients,
  },
  {
    path: "portfolio",
    Component: ArtistPortfolio,
  },
  {
    path: "messages",
    Component: ArtistMessages,
  },
  {
    path: "earnings",
    Component: ArtistEarnings,
  },
  {
    path: "settings",
    Component: ArtistSettings,
  },
];
