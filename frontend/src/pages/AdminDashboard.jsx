import React, { useState } from "react";

export default function AdminDashboard() {
  const [formData, setFormData] = useState({
    name: "",
    username: "",
    email: "",
    password: "",
    specialties: "",
    role: "artist",
  });
  const [status, setStatus] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("processing");

    const specsArray = formData.specialties.split(",").map((s) => s.trim());
    const token = localStorage.getItem("auth_token");

    try {
      const response = await fetch("http://localhost:8000/api/admin/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          ...formData,
          specialties: JSON.stringify(specsArray),
        }),
      });

      if (response.ok) {
        setStatus("success");
        setFormData({
          name: "",
          username: "",
          email: "",
          password: "",
          specialties: "",
          role: "artist",
        });
      } else {
        setStatus("error");
      }
    } catch (err) {
      setStatus("error");
    }
  };

  return (
    <div className="min-h-screen bg-[#0d081b] text-slate-100 p-8">
      <div className="max-w-4xl mx-auto space-y-8">
        <div className="flex justify-between items-center border-b border-purple-950/40 pb-6">
          <div>
            <h1 className="text-3xl font-bold tracking-tight text-white">
              YoshiCat HQ
            </h1>
            <p className="text-sm text-slate-400">Studio Management Portal</p>
          </div>
          <span className="px-3 py-1 bg-purple-950/60 border border-purple-500/30 text-purple-300 text-xs font-semibold rounded-full uppercase tracking-wider">
            System Admin
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-1 space-y-3">
            <h2 className="text-lg font-semibold text-white">
              Onboard New Artist
            </h2>
            <p className="text-xs text-slate-400 leading-relaxed">
              Registering an artist creates their official studio profile. They
              will immediately appear on the client-facing exploration
              dashboard.
            </p>
          </div>

          <div className="md:col-span-2 bg-[#140e24] border border-purple-950/40 rounded-2xl p-6 shadow-xl">
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-xs font-medium text-slate-300 uppercase tracking-wider mb-2">
                  Artist Professional Name
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  placeholder="e.g., Jane Doe"
                  className="w-full bg-[#0d081b] border border-purple-900/30 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-600 focus:outline-none focus:ring-2 focus:ring-violet-500"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-300 uppercase tracking-wider mb-2">
                  Login Username
                </label>
                <input
                  type="text"
                  required
                  value={formData.username}
                  onChange={(e) =>
                    setFormData({ ...formData, username: e.target.value })
                  }
                  placeholder="janedoe_art"
                  className="w-full bg-[#0d081b] border border-purple-900/30 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-600 focus:outline-none focus:ring-2 focus:ring-violet-500"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-300 uppercase tracking-wider mb-2">
                  Contact Email
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  placeholder="artist@yoshicat.com"
                  className="w-full bg-[#0d081b] border border-purple-900/30 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-600 focus:outline-none focus:ring-2 focus:ring-violet-500"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-300 uppercase tracking-wider mb-2">
                  Temporary Password
                </label>
                <input
                  type="text"
                  required
                  value={formData.password}
                  onChange={(e) =>
                    setFormData({ ...formData, password: e.target.value })
                  }
                  placeholder="TempPass123!"
                  className="w-full bg-[#0d081b] border border-purple-900/30 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-600 focus:outline-none focus:ring-2 focus:ring-violet-500"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-300 uppercase tracking-wider mb-2">
                  Specialties
                </label>
                <input
                  type="text"
                  required
                  value={formData.specialties}
                  onChange={(e) =>
                    setFormData({ ...formData, specialties: e.target.value })
                  }
                  placeholder="Traditional, Fine Line, Neo-Japanese"
                  className="w-full bg-[#0d081b] border border-purple-900/30 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-600 focus:outline-none focus:ring-2 focus:ring-violet-500"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full bg-violet-600 hover:bg-violet-500 text-white font-medium text-sm py-3 px-4 rounded-xl transition-all duration-200 shadow-lg shadow-violet-950/30"
                >
                  {status === "processing"
                    ? "Adding Artist..."
                    : "Create Artist Profile"}
                </button>
              </div>

              {status === "success" && (
                <p className="text-xs text-emerald-400 font-medium text-center">
                  Artist successfully onboarded to YoshiCat!
                </p>
              )}
              {status === "error" && (
                <p className="text-xs text-red-400 font-medium text-center">
                  Failed to create artist. Check details.
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
