import axiosClient from "../axiosClient";
import { AUTH_ENDPOINTS } from "../endpoints";

/**
 * Authentication Service
 * Handles login, registration, logout, and OAuth
 */

class AuthService {
  /**
   * Register a new user
   */
  async register(data) {
    const response = await axiosClient.post(AUTH_ENDPOINTS.REGISTER, {
      name: data.name,
      email: data.email,
      password: data.password,
      password_confirmation: data.passwordConfirmation,
      role: data.role || "customer", // customer, artist, admin
    });

    if (response.success && response.data?.token) {
      localStorage.setItem("auth_token", response.data.token);
      localStorage.setItem("user", JSON.stringify(response.data.user));
    }

    return response;
  }

  /**
   * Login user with email and password
   */
  async login(email, password) {
    const response = await axiosClient.post(AUTH_ENDPOINTS.LOGIN, {
      email,
      password,
    });

    if (response.success && response.data?.token) {
      localStorage.setItem("auth_token", response.data.token);
      localStorage.setItem("user", JSON.stringify(response.data.user));
    }

    return response;
  }

  /**
   * Handle Google OAuth callback
   */
  async handleGoogleOAuth(googleToken) {
    const response = await axiosClient.post(AUTH_ENDPOINTS.GOOGLE_OAUTH, {
      id_token: googleToken,
    });

    if (response.success && response.data?.token) {
      localStorage.setItem("auth_token", response.data.token);
      localStorage.setItem("user", JSON.stringify(response.data.user));
    }

    return response;
  }

  /**
   * Get current authenticated user
   */
  async getCurrentUser() {
    const response = await axiosClient.get(AUTH_ENDPOINTS.ME);
    return response;
  }

  /**
   * Logout current user
   */
  async logout() {
    try {
      await axiosClient.post(AUTH_ENDPOINTS.LOGOUT);
    } finally {
      localStorage.removeItem("auth_token");
      localStorage.removeItem("user");
    }
  }

  /**
   * Refresh authentication token
   */
  async refreshToken() {
    const response = await axiosClient.post(AUTH_ENDPOINTS.REFRESH);

    if (response.success && response.data?.token) {
      localStorage.setItem("auth_token", response.data.token);
    }

    return response;
  }

  /**
   * Get stored user from localStorage
   */
  getStoredUser() {
    const userStr = localStorage.getItem("user");
    return userStr ? JSON.parse(userStr) : null;
  }

  /**
   * Check if user is authenticated
   */
  isAuthenticated() {
    return !!localStorage.getItem("auth_token");
  }

  /**
   * Check if user has specific role
   */
  hasRole(role) {
    const user = this.getStoredUser();
    return user?.role === role;
  }

  /**
   * Check if user is artist
   */
  isArtist() {
    return this.hasRole("artist");
  }

  /**
   * Check if user is customer
   */
  isCustomer() {
    return this.hasRole("customer");
  }

  /**
   * Check if user is admin
   */
  isAdmin() {
    return this.hasRole("admin");
  }
}

export default new AuthService();
