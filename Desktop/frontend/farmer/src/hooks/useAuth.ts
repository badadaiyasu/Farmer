// hooks/useAuth.ts
import { create } from "zustand"; // ← This line was missing the import!

export type User = {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  role: "buyer" | "farmer";
  phone?: string;
  preferred_language?: "en" | "am" | "om";
};

type RegisterPayload = {
  email: string;
  phone: string;
  password: string;
  confirm_password?: string;
  preferred_language: "en" | "am" | "om";
  role: "buyer" | "farmer";
  firstName: string;
  lastName: string;
};

type AuthApiResponse = {
  user: User;
  token: string;
  message?: string;
};

type AuthState = {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;

  login: (email: string, password: string) => Promise<void>;
  registerUser: (data: RegisterPayload) => Promise<void>;
  logout: () => void;
};

// Properly typed Zustand store — no more 'any' on set!
export const useAuth = create<AuthState>()((set) => ({
  user: null,
  isAuthenticated: false,
  isLoading: false,

  login: async (email: string, password: string) => {
    set({ isLoading: true });
    try {
      const res = await fetch("/api/auth/signin", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data: AuthApiResponse = await res.json();

      if (!res.ok) {
        throw new Error(data.message || "Login failed");
      }

      localStorage.setItem("token", data.token);
      localStorage.setItem("user", JSON.stringify(data.user));

      set({ user: data.user, isAuthenticated: true });
    } catch (error) {
      throw error instanceof Error ? error : new Error("An error occurred during login");
    } finally {
      set({ isLoading: false });
    }
  },

  registerUser: async (data: RegisterPayload) => {
    set({ isLoading: true });
    try {
      const res = await fetch("/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result: AuthApiResponse = await res.json();

      if (!res.ok) {
        throw new Error(result.message || "Registration failed");
      }

      localStorage.setItem("token", result.token);
      localStorage.setItem("user", JSON.stringify(result.user));

      set({ user: result.user, isAuthenticated: true });
    } catch (error) {
      throw error instanceof Error ? error : new Error("Registration failed");
    } finally {
      set({ isLoading: false });
    }
  },

  logout: () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    set({ user: null, isAuthenticated: false });
  },
}));

// Restore session on page reload (run once)
const storedUser = localStorage.getItem("user");
const storedToken = localStorage.getItem("token");

if (storedUser && storedToken) {
  try {
    const user = JSON.parse(storedUser) as User;
    useAuth.setState({ user, isAuthenticated: true });
  } catch {
    // Invalid JSON → clear storage
    localStorage.removeItem("user");
    localStorage.removeItem("token");
  }
}