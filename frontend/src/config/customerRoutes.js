import CustomerBooking from "../pages/CustomerBooking";
import CustomerDashboard from "../pages/CustomerDashboard";

export const customerRoutes = [
  {
    index: true,
    Component: CustomerDashboard,
  },

  {
    path: "booking",
    Component: CustomerBooking,
  },

  {
    path: "booking/:artistId",
    Component: CustomerBooking,
  },
];
