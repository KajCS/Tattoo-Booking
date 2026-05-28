import { createBrowserRouter } from "react-router";

import Login from "./pages/Login";
import Signup from "./pages/Signup";
import AuthCallback from "./pages/AuthCallback";
import DashboardDispatcher from "./pages/DashboardDispatcher";
import CustomerDashboard from "./pages/CustomerDashboard";
import AdminDashboard from "./pages/AdminDashboard";

import ProtectedRoute from "./components/ProtectedRoute";
import ArtistSidebar from "./components/ArtistSidebar";

import { artistRoutes } from "./config/artistRoutes";
import { customerRoutes } from "./config/customerRoutes";
import CustomerBooking from "./pages/CustomerBooking";

const protectedRoute = (role, element) => (
  <ProtectedRoute allowedRole={role}>{element}</ProtectedRoute>
);

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Login,
  },

  { path: "/signup", Component: Signup },

  {
    path: "/auth/callback",
    Component: AuthCallback,
  },
  {
    path: "/dashboard",
    Component: DashboardDispatcher,
  },

  {
    path: "/customer",
    children: [
      {
        index: true,
        element: protectedRoute("customer", <CustomerDashboard />),
      },
      {
        path: "booking",
        element: protectedRoute("customer", <CustomerBooking />),
      },
      {
        path: "booking/:artistId",
        element: protectedRoute("customer", <CustomerBooking />),
      },
    ],
  },

  {
    path: "/artist",
    element: protectedRoute("artist", <ArtistSidebar />),
    children: artistRoutes,
  },

  {
    path: "/admin",
    element: protectedRoute("admin", <AdminDashboard />),
  },
]);
