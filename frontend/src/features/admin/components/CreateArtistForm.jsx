import { useState } from "react";
import InputField from "../../../components/ui/InputField";
import SectionCard from "../../../components/ui/SectionCard";
import { apiRequest } from "../../../services/api";

const INITIAL_FORM = {
  name: "",
  username: "",
  email: "",
  password: "",
  specialties: "",
  role: "artist",
};

export default function CreateArtistForm() {
  const [formData, setFormData] = useState(INITIAL_FORM);
  const [status, setStatus] = useState(null);

  const updateField = (field, value) => {
    setFormData((previous) => ({
      ...previous,
      [field]: value,
    }));
  };

  const resetForm = () => {
    setFormData(INITIAL_FORM);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    setStatus("processing");

    try {
      const specialties = formData.specialties
        .split(",")
        .map((item) => item.trim())
        .filter(Boolean);

      const response = await apiRequest("/admin/users", {
        method: "POST",
        body: JSON.stringify({
          ...formData,
          specialties: JSON.stringify(specialties),
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to create artist");
      }

      setStatus("success");
      resetForm();
    } catch (error) {
      setStatus("error");
    }
  };

  return (
    <SectionCard>
      <form onSubmit={handleSubmit} className="space-y-5">
        <InputField
          label="Artist Professional Name"
          value={formData.name}
          required
          onChange={(value) => updateField("name", value)}
        />

        <InputField
          label="Username"
          value={formData.username}
          required
          onChange={(value) => updateField("username", value)}
        />

        <InputField
          label="Email Address"
          type="email"
          value={formData.email}
          required
          onChange={(value) => updateField("email", value)}
        />

        <InputField
          label="Password"
          type="password"
          value={formData.password}
          required
          onChange={(value) => updateField("password", value)}
        />

        <InputField
          label="Specialties"
          placeholder="Blackwork, Anime, Realism"
          value={formData.specialties}
          onChange={(value) => updateField("specialties", value)}
        />

        <button
          type="submit"
          className="w-full rounded-xl bg-violet-600 px-4 py-3 text-sm font-semibold transition hover:bg-violet-500"
        >
          {status === "processing" ? "Creating Artist..." : "Create Artist"}
        </button>

        {status === "success" && (
          <p className="text-sm text-emerald-400">
            Artist created successfully.
          </p>
        )}

        {status === "error" && (
          <p className="text-sm text-rose-400">
            Something went wrong. Check the API connection.
          </p>
        )}
      </form>
    </SectionCard>
  );
}
