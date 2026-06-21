import toast from 'react-hot-toast';
import axios from 'axios';

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL || 'http://localhost:8000/api/v1',
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
  withCredentials: true,
});

// ── Request interceptor ────────────────────────────────────────────────────────
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// ── Response interceptor ───────────────────────────────────────────────────────
api.interceptors.response.use(
  (response) => response,
  (error) => {
    const status = error.response?.status;
    const message = error.response?.data?.message;

    if (status === 401) {
      // Clear local auth state and redirect to login
      localStorage.removeItem('token');
      localStorage.removeItem('cmpi_user');
      // Avoid redirect loop if already on login page
      if (!window.location.pathname.includes('/login')) {
        toast.error('Session expired. Please log in again.');
        window.location.href = '/login';
      }
    } else if (status === 403) {
      toast.error('You do not have permission to perform this action.');
    } else if (status === 422) {
      // Validation errors — let the caller handle field-level display
    } else if (status >= 500) {
      toast.error(message || 'A server error occurred. Please try again later.');
    }

    return Promise.reject(error);
  }
);

export { api };
export default api;

export async function fetchInstituteData() {
  const response = await api.get("/institute");
  return response.data;
}

export async function login(email, password) {
  const response = await api.post("/login", { email, password });
  return response.data;
}

export async function register(data) {
  const response = await api.post("/register", data);
  return response.data;
}

export async function logout() {
  await api.post("/logout");
  localStorage.removeItem("token");
  localStorage.removeItem("cmpi_user");
}

export async function getDashboard() {
  const response = await api.get("/dashboard");
  return response.data;
}

export async function getStudentCourses() {
  const response = await api.get("/dashboard/courses");
  return response.data;
}

export async function getStudentResults() {
  const response = await api.get("/dashboard/results");
  return response.data;
}

export async function getStudentBills() {
  const response = await api.get("/dashboard/bills");
  return response.data;
}

export async function getStudentEmails() {
  const response = await api.get("/dashboard/emails");
  return response.data;
}

export async function getEmailBody(id) {
  const response = await api.get(`/dashboard/emails/${id}/body`);
  return response.data;
}

export async function getNotices() {
  const response = await api.get("/notices");
  return response.data;
}

export async function getNotice(id) {
  const response = await api.get(`/notices/${id}`);
  return response.data;
}

export async function getEvents() {
  const response = await api.get("/events");
  return response.data;
}

export async function getEvent(id) {
  const response = await api.get(`/events/${id}`);
  return response.data;
}

export async function getBlogs() {
  const response = await api.get("/blogs");
  return response.data;
}

export async function getBlogBySlug(slug) {
  const response = await api.get(`/blogs/${slug}`);
  return response.data;
}

export async function getDepartments() {
  const response = await api.get("/departments");
  return response.data;
}

export async function getDepartmentBySlug(slug) {
  const response = await api.get(`/departments/${slug}`);
  return response.data;
}

export async function getFaculty() {
  const response = await api.get("/faculty");
  return response.data;
}

export async function searchAll(query) {
  const response = await api.get("/search", { params: { q: query } });
  return response.data;
}

export async function submitAdmission(formData) {
  const response = await api.post("/admissions", formData, {
    headers: { "Content-Type": "multipart/form-data" },
    timeout: 30000,
  });
  return response.data;
}

export async function trackAdmission(applicationId) {
  const response = await api.post("/admissions/track", { application_id: applicationId });
  return response.data;
}

export async function getFeedbacks() {
  const response = await api.get("/feedbacks");
  return response.data;
}

export async function submitFeedback(data) {
  const response = await api.post("/feedbacks", data);
  return response.data;
}

export async function upvoteFeedback(id) {
  const response = await api.post(`/feedbacks/${id}/upvote`);
  return response.data;
}

export async function fetchSocialLinks() {
  const response = await api.get("/social-links");
  return response.data;
}

export async function getStudentProfile() {
  const response = await api.get("/dashboard/profile");
  return response.data;
}

export async function updateStudentProfile(data) {
  const response = await api.put("/dashboard/profile", data);
  return response.data;
}

export async function getSubjects(params) {
  const response = await api.get("/subjects", { params });
  return response.data;
}

export async function uploadFile(file, folder = "others") {
  const formData = new FormData();
  formData.append("file", file);
  formData.append("folder", folder);
  const response = await api.post("/upload", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
  return response.data;
}

