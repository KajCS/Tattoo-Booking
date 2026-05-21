import { createBrowserRouter } from "react-router";
import CustomerDashboard from "./pages/CustomerDashboard";
import ArtistSidebar from "./components/ArtistSidebar";
import ArtistOverview from "./pages/ArtistOverview";
import Login from "./pages/Login";

export const router = createBrowserRouter([
  { path: "/", Component: Login },
  {
    path: "/pages",
    Component: ArtistSidebar,
    children: [{ index: true, Component: ArtistOverview }],
  },
]);
