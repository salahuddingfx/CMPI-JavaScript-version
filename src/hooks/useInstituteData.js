import { useQuery } from '@tanstack/react-query';
import api from '@/services/api';
import { notices, events, faculty, departments, blogPosts } from '@/data/mockData';

// ── Helpers ───────────────────────────────────────────────────────────────────
// When the real API isn't available yet (backend not running / dev mode),
// fall back gracefully to local mock data instead of throwing.
const withMockFallback = (mockData) => async (apiFn) => {
  try {
    return await apiFn();
  } catch {
    // If API is unavailable (network error / 404), return mock data silently
    return mockData;
  }
};

// ── Fetch functions ───────────────────────────────────────────────────────────
const fetchNotices = () =>
  withMockFallback(notices)(async () => {
    const res = await api.get('/notices');
    return res.data?.data ?? res.data;
  });

const fetchEvents = () =>
  withMockFallback(events)(async () => {
    const res = await api.get('/events');
    return res.data?.data ?? res.data;
  });

const fetchFaculty = () =>
  withMockFallback(faculty)(async () => {
    const res = await api.get('/faculty');
    return res.data?.data ?? res.data;
  });

const fetchDepartments = () =>
  withMockFallback(departments)(async () => {
    const res = await api.get('/departments');
    return res.data?.data ?? res.data;
  });

const fetchBlogs = () =>
  withMockFallback(blogPosts)(async () => {
    const res = await api.get('/blog-posts');
    return res.data?.data ?? res.data;
  });

// ── Hooks ─────────────────────────────────────────────────────────────────────
export const useNotices     = () => useQuery({ queryKey: ['notices'],     queryFn: fetchNotices });
export const useEvents      = () => useQuery({ queryKey: ['events'],      queryFn: fetchEvents });
export const useFaculty     = () => useQuery({ queryKey: ['faculty'],     queryFn: fetchFaculty });
export const useDepartments = () => useQuery({ queryKey: ['departments'], queryFn: fetchDepartments });
export const useBlogs       = () => useQuery({ queryKey: ['blogs'],       queryFn: fetchBlogs });
