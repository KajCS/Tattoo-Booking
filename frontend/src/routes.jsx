import { createBrowserRouter } from "react-router";

import Login from "./pages/Login";
import AuthCallback from "./pages/AuthCallback";
import DashboardDispatcher from "./pages/DashboardDispatcher";
import CustomerDashboard from "./pages/CustomerDashboard";
import AdminDashboard from "./pages/AdminDashboard";

import ProtectedRoute from "./components/ProtectedRoute";
import ArtistSidebar from "./components/ArtistSidebar";

import { artistRoutes } from "./config/artistRoutes";

const protectedRoute = (role, element) => (
  <ProtectedRoute allowedRole={role}>{element}</ProtectedRoute>
);

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Login,
  },
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
    element: protectedRoute("customer", <CustomerDashboard />),
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
