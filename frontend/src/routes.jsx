import { createBrowserRouter } from "react-router";
import CustomerDashboard from "./pages/CustomerDashboard";
import ArtistSidebar from "./components/ArtistSidebar";
import ArtistOverview from "./pages/ArtistOverview";

export const router = createBrowserRouter([
  { path: "/", Component: CustomerDashboard },
  {
    path: "/pages",
    Component: ArtistSidebar,
    children: [{ index: true, Component: ArtistOverview }],
  },
]);
