import { createBrowserRouter } from "react-router";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import AuthCallback from "./pages/AuthCallback";
import DashboardDispatcher from "./pages/DashboardDispatcher";
import ProtectedRoute from "./components/ProtectedRoute";

// Customer
import CustomerDashboard from "./pages/CustomerDashboard";

// Artist
import ArtistSidebar from "./components/ArtistSidebar";
import ArtistOverview from "./pages/ArtistOverview";
import ArtistAppointments from "./pages/ArtistAppointments";

// Admin
import AdminDashboard from "./pages/AdminDashboard";

export const router = createBrowserRouter([
  { path: "/", Component: Login },
  { path: "/signup", Component: Signup },
  { path: "/auth/callback", Component: AuthCallback },

  { path: "/dashboard", Component: DashboardDispatcher },

  {
    path: "/customer",
    element: (
      <ProtectedRoute allowedRole="customer">
        <CustomerDashboard />
        
      </ProtectedRoute>
    ),
  },

  {
    path: "/artist",
    element: (
      <ProtectedRoute allowedRole="artist">
        <ArtistSidebar />
      </ProtectedRoute>
    ),
    children: [
      { index: true, Component: ArtistOverview },
      { path: "appointments", Component: ArtistAppointments },
    ],
  },

  {
    path: "/admin",
    element: (
      <ProtectedRoute allowedRole="admin">
        <AdminDashboard />
      </ProtectedRoute>
    ),
  },
]);
