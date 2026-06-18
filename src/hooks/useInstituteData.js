import { useQuery } from '@tanstack/react-query';
import { notices, events, faculty, departments, blogPosts } from '@/data/mockData';

// Simulated API calls for CMS integration readiness
const fetchNotices = async () => {
  return new Promise((resolve) => setTimeout(() => resolve(notices), 500));
};

const fetchEvents = async () => {
  return new Promise((resolve) => setTimeout(() => resolve(events), 500));
};

const fetchFaculty = async () => {
  return new Promise((resolve) => setTimeout(() => resolve(faculty), 500));
};

const fetchDepartments = async () => {
  return new Promise((resolve) => setTimeout(() => resolve(departments), 500));
};

const fetchBlogs = async () => {
  return new Promise((resolve) => setTimeout(() => resolve(blogPosts), 500));
};

export const useNotices = () => useQuery({ queryKey: ['notices'], queryFn: fetchNotices });
export const useEvents = () => useQuery({ queryKey: ['events'], queryFn: fetchEvents });
export const useFaculty = () => useQuery({ queryKey: ['faculty'], queryFn: fetchFaculty });
export const useDepartments = () => useQuery({ queryKey: ['departments'], queryFn: fetchDepartments });
export const useBlogs = () => useQuery({ queryKey: ['blogs'], queryFn: fetchBlogs });
