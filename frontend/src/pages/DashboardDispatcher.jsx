import React, { useEffect } from "react";
import { useNavigate } from "react-router";

export default function DashboardDispatcher() {
  const navigate = useNavigate();

  useEffect(() => {
    const determineRoute = async () => {
      const token = localStorage.getItem("auth_token");

      if (!token) {
        navigate("/");
        return;
      }

      try {
        const response = await fetch("http://localhost:8000/api/user", {
          headers: { Authorization: `Bearer ${token}` },
        });

        if (response.ok) {
          const user = await response.json();

          // Redirect to the correct role path instantly
          if (user.role === "admin") navigate("/admin");
          else if (user.role === "artist") navigate("/artist");
          else navigate("/customer");
        } else {
          localStorage.removeItem("auth_token");
          navigate("/");
        }
      } catch (error) {
        navigate("/");
      }
    };

    determineRoute();
  }, [navigate]);

  return (
    <div className="min-h-screen bg-[#0d081b] flex items-center justify-center">
      <div className="w-8 h-8 border-4 border-violet-500 border-t-transparent rounded-full animate-spin"></div>
    </div>
  );
}
