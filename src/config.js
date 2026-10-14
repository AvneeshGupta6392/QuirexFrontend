// Base URL of the backend API. Set VITE_API_URL in your hosting dashboard (no trailing slash).
export const API = (import.meta.env.VITE_API_URL || 'http://localhost:9000').replace(/\/$/, '');
