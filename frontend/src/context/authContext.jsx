import { createContext, useState, useEffect } from "react";
import { BASE_URL } from "../utils/config";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  // Load user from localStorage on app start
  useEffect(() => {
    try {
      const savedUser = localStorage.getItem("user");
      if (savedUser && savedUser !== "undefined") {
        setUser(JSON.parse(savedUser));
      }
    } catch (err) {
      console.error("Error parsing saved user:", err);
      localStorage.removeItem("user");
    }
  }, []);

  //  Register
  const registerUser = async (credentials) => {
    try {
      const res = await fetch(`${BASE_URL}/auth/register`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify(credentials),
      });

      if (!res.ok) {
        const err = await res.json();
        throw new Error(err.message || "Registration failed");
      }

      const data = await res.json();
      setUser(data.user);
      console.log("Login/Register Response:", data);

      localStorage.setItem("user", JSON.stringify(data.user));
      return { success: true };
    } catch (err) {
      console.error(err);
      return { success: false, message: err.message };
    }
  };

  //  Login
  const loginUser = async (credentials) => {
    try {
      const res = await fetch(`${BASE_URL}/auth/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify(credentials),
      });

      // Check if response is okay
      if (!res.ok) {
        const text = await res.text();
        console.error("Login failed. Raw response:", text);
        throw new Error("Invalid login credentials or bad response");
      }

      // Try parsing JSON safely
      const data = await res.json().catch(() => {
        throw new Error("Response is not valid JSON");
      });

      console.log(" Login Response Data:", data);

      // Flexible assignment depending on backend format
      const loggedUser = data.user || data.data || null;

      if (!loggedUser) {
        throw new Error("User info missing in response");
      }

      setUser(loggedUser);
      localStorage.setItem("user", JSON.stringify(loggedUser));

      return { success: true };
    } catch (err) {
      console.error("Login error:", err.message);
      return { success: false, message: err.message };
    }
  };

  //  Logout
  const logoutUser = () => {
    setUser(null);
    localStorage.removeItem("user");
  };

  return (
    <AuthContext.Provider value={{ user, registerUser, loginUser, logoutUser }}>
      {children}
    </AuthContext.Provider>
  );
};
