import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";

export default function ProtectedRoute({ children, allowedRole }) {
  const [isAuthorized, setIsAuthorized] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const verifyAccess = async () => {
      const token = localStorage.getItem("auth_token");

      if (!token) {
        setIsAuthorized(false);
        navigate("/");
        return;
      }

      try {
        const response = await fetch("http://localhost:8000/api/user", {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
            Accept: "application/json",
          },
        });

        if (response.ok) {
          const user = await response.json();

          if (user.role === allowedRole) {
            setIsAuthorized(true);
          } else {
            setIsAuthorized(false);
            navigate("/dashboard");
          }
        } else {
          localStorage.removeItem("auth_token");
          setIsAuthorized(false);
          navigate("/");
        }
      } catch (error) {
        console.error("Security check failed:", error);
        setIsAuthorized(false);
        navigate("/");
      }
    };

    verifyAccess();
  }, [navigate, allowedRole]);

  if (isAuthorized === null) {
    return (
      <div className="min-h-screen bg-[#0d081b] flex items-center justify-center">
        <div className="w-8 h-8 border-4 border-violet-500 border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  return isAuthorized ? children : null;
}
