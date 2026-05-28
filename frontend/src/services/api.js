import { initialSlots } from "../utils/constants"; 

const API_URL = "http://localhost:8000/api";

export async function apiRequest(endpoint, options = {}) {
  const token = localStorage.getItem("auth_token");

  const response = await fetch(`${API_URL}${endpoint}`, {
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: token ? `Bearer ${token}` : "",
      ...(options.headers || {}),
    },
    ...options,
  });

  return response;
}

export async function fetchArtistSlots(artistId = "123") {
  // 🚀 STEP 1: THE MOCK VERSION (Use this right now)
  // Simulates a 1-second network delay, then returns your constants data
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return initialSlots;
}