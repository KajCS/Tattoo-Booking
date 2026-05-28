/**
 * API Endpoint Constants
 * Centralized endpoint definitions for consistency
 */

export const AUTH_ENDPOINTS = {
  REGISTER: "/auth/register",
  LOGIN: "/auth/login",
  LOGOUT: "/auth/logout",
  ME: "/auth/me",
  REFRESH: "/auth/refresh",
  GOOGLE_OAUTH: "/auth/oauth/google",
};

export const ARTISTS_ENDPOINTS = {
  LIST: "/artists",
  SHOW: (id) => `/artists/${id}`,
  CREATE: "/artists",
  UPDATE: (id) => `/artists/${id}`,
  AVAILABILITY: (id) => `/artists/${id}/availability`,
  APPOINTMENTS: (id) => `/artists/${id}/appointments`,
  EARNINGS: (id) => `/artists/${id}/earnings`,
  REVIEWS: (id) => `/artists/${id}/reviews`,
};

export const APPOINTMENTS_ENDPOINTS = {
  LIST: "/appointments",
  SHOW: (id) => `/appointments/${id}`,
  CREATE: "/appointments",
  UPDATE_STATUS: (id) => `/appointments/${id}/status`,
  CANCEL: (id) => `/appointments/${id}/cancel`,
  AVAILABLE_SLOTS: (id) => `/appointments/${id}/available-slots`,
};

export const AVAILABILITY_ENDPOINTS = {
  SHOW: (artistId) => `/availability/${artistId}`,
  CREATE: "/availability",
  UPDATE: (id) => `/availability/${id}`,
  DELETE: (id) => `/availability/${id}`,
  BLOCK: "/availability/block",
  UNBLOCK: (id) => `/availability/block/${id}`,
};

export const MESSAGING_ENDPOINTS = {
  CONVERSATIONS: "/messaging/conversations",
  MESSAGES: (conversationId) =>
    `/messaging/conversations/${conversationId}/messages`,
  SEND_MESSAGE: "/messaging/messages",
  GET_MESSAGE: (id) => `/messaging/messages/${id}`,
};

export const PORTFOLIO_ENDPOINTS = {
  LIST: "/portfolio",
  CREATE: "/portfolio",
  UPDATE: (id) => `/portfolio/${id}`,
  DELETE: (id) => `/portfolio/${id}`,
  TOGGLE_FEATURE: (id) => `/portfolio/${id}/feature`,
};

export const EARNINGS_ENDPOINTS = {
  SUMMARY: "/earnings/summary",
  TRANSACTIONS: "/earnings/transactions",
  ANALYTICS: "/earnings/analytics",
  PAYOUTS: "/earnings/payouts",
  REQUEST_PAYOUT: "/earnings/payout-request",
};

export const REVIEWS_ENDPOINTS = {
  LIST: "/reviews",
  CREATE: "/reviews",
  UPDATE: (id) => `/reviews/${id}`,
  DELETE: (id) => `/reviews/${id}`,
};

export const USERS_ENDPOINTS = {
  PROFILE: "/users/profile",
  UPDATE_PROFILE: "/users/profile",
};
