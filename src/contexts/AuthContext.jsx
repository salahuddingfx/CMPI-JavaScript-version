import { createContext, useContext, useState, useEffect, useCallback } from 'react';
import api from '@/services/api';
import toast from 'react-hot-toast';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(() => !localStorage.getItem('token'));

  // ── Restore session from stored token ────────────────────────────────────────
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      return;
    }
    // Verify token by fetching current user (Laravel Sanctum: GET /api/user)
    api
      .get('/user')
      .then((res) => {
        setUser(res.data);
      })
      .catch(() => {
        // Invalid or expired token — clear storage silently
        localStorage.removeItem('token');
        localStorage.removeItem('cmpi_user');
        setUser(null);
      })
      .finally(() => setLoading(false));
  }, []);

  // ── Login ────────────────────────────────────────────────────────────────────
  const login = useCallback(async (credentials) => {
    // credentials = { email, password }
    try {
      const res = await api.post('/login', credentials);
      const { token, user: userData } = res.data;

      localStorage.setItem('token', token);
      localStorage.setItem('cmpi_user', JSON.stringify(userData));
      setUser(userData);
      toast.success(`Welcome back, ${userData.name}!`);
      return { success: true };
    } catch (error) {
      const message =
        error.response?.data?.message || 'Invalid email or password.';
      toast.error(message);
      return { success: false, message };
    }
  }, []);

  // ── Logout ───────────────────────────────────────────────────────────────────
  const logout = useCallback(async () => {
    try {
      await api.post('/logout');
    } catch {
      // Fail silently — still clear local state
    } finally {
      localStorage.removeItem('token');
      localStorage.removeItem('cmpi_user');
      setUser(null);
      toast.success('Logged out successfully.');
    }
  }, []);

  return (
    <AuthContext.Provider value={{ user, login, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
