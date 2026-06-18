import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '@/layouts/MainLayout';
import Home from '@/pages/Home';
import About from '@/pages/About';
import Academics from '@/pages/Academics';
import DepartmentDetail from '@/pages/DepartmentDetail';
import Faculty from '@/pages/Faculty';
import NoticeBoard from '@/pages/NoticeBoard';
import Events from '@/pages/Events';
import Gallery from '@/pages/Gallery';
import Blog from '@/pages/Blog';
import Admission from '@/pages/Admission';
import StudentCorner from '@/pages/StudentCorner';
import Contact from '@/pages/Contact';
import NotFound from '@/pages/NotFound';
import Login from '@/pages/Login';
import Register from '@/pages/Register';
import VirtualTour from '@/pages/VirtualTour';
import DashboardLayout from '@/layouts/DashboardLayout';
import Dashboard from '@/pages/Dashboard';
import ProtectedRoute from '@/components/ProtectedRoute';

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: 'about', element: <About /> },
      { path: 'academics', element: <Academics /> },
      { path: 'academics/:id', element: <DepartmentDetail /> },
      { path: 'faculty', element: <Faculty /> },
      { path: 'notice-board', element: <NoticeBoard /> },
      { path: 'events', element: <Events /> },
      { path: 'gallery', element: <Gallery /> },
      { path: 'blog', element: <Blog /> },
      { path: 'admission', element: <Admission /> },
      { path: 'student-corner', element: <StudentCorner /> },
      { path: 'contact', element: <Contact /> },
      { path: 'virtual-tour', element: <VirtualTour /> },
      { path: 'login', element: <Login /> },
      { path: 'register', element: <Register /> },
    ],
  },
  {
    path: '/dashboard',
    element: <ProtectedRoute />,
    children: [
      {
        path: '',
        element: <DashboardLayout />,
        children: [
          { index: true, element: <Dashboard /> },
          // Placeholders for other dashboard routes
          { path: 'courses', element: <div className="p-8 text-2xl font-bold">My Courses Content</div> },
          { path: 'results', element: <div className="p-8 text-2xl font-bold">Results Content</div> },
          { path: 'profile', element: <div className="p-8 text-2xl font-bold">Profile Content</div> },
          { path: 'settings', element: <div className="p-8 text-2xl font-bold">Settings Content</div> },
        ]
      }
    ]
  },
  {
    path: '*',
    element: <NotFound />,
  },
]);

export default router;
