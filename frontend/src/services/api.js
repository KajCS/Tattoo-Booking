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
