import { lazy, Suspense } from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Loader from '@/components/Loader';

// ── Layouts ───────────────────────────────────────────────────────────────────
const MainLayout    = lazy(() => import('@/layouts/MainLayout'));
const DashboardLayout = lazy(() => import('@/layouts/DashboardLayout'));

// ── Public Pages ──────────────────────────────────────────────────────────────
const Home          = lazy(() => import('@/pages/Home'));
const About         = lazy(() => import('@/pages/About'));
const Academics     = lazy(() => import('@/pages/Academics'));
const DepartmentDetail = lazy(() => import('@/pages/DepartmentDetail'));
const Faculty       = lazy(() => import('@/pages/Faculty'));
const NoticeBoard   = lazy(() => import('@/pages/NoticeBoard'));
const Events        = lazy(() => import('@/pages/Events'));
const Gallery       = lazy(() => import('@/pages/Gallery'));
const Blog          = lazy(() => import('@/pages/Blog'));
const Admission     = lazy(() => import('@/pages/Admission'));
const StudentCorner = lazy(() => import('@/pages/StudentCorner'));
const Contact       = lazy(() => import('@/pages/Contact'));
const VirtualTour   = lazy(() => import('@/pages/VirtualTour'));
const Login         = lazy(() => import('@/pages/Login'));
const Register      = lazy(() => import('@/pages/Register'));
const NotFound      = lazy(() => import('@/pages/NotFound'));

// ── Auth Guard ────────────────────────────────────────────────────────────────
const ProtectedRoute = lazy(() => import('@/components/ProtectedRoute'));

// ── Dashboard Sub-pages ───────────────────────────────────────────────────────
const Dashboard     = lazy(() => import('@/pages/Dashboard'));
const Courses       = lazy(() => import('@/pages/dashboard/Courses'));
const Results       = lazy(() => import('@/pages/dashboard/Results'));
const Profile       = lazy(() => import('@/pages/dashboard/Profile'));
const Settings      = lazy(() => import('@/pages/dashboard/Settings'));

// ── Suspense wrapper ──────────────────────────────────────────────────────────
const withSuspense = (Component) => (
  <Suspense fallback={<Loader />}>
    <Component />
  </Suspense>
);

const router = createBrowserRouter([
  {
    path: '/',
    element: <Suspense fallback={<Loader />}><MainLayout /></Suspense>,
    children: [
      { index: true,                element: withSuspense(Home) },
      { path: 'about',              element: withSuspense(About) },
      { path: 'academics',          element: withSuspense(Academics) },
      { path: 'academics/:id',      element: withSuspense(DepartmentDetail) },
      { path: 'faculty',            element: withSuspense(Faculty) },
      { path: 'notice-board',       element: withSuspense(NoticeBoard) },
      { path: 'events',             element: withSuspense(Events) },
      { path: 'gallery',            element: withSuspense(Gallery) },
      { path: 'blog',               element: withSuspense(Blog) },
      { path: 'admission',          element: withSuspense(Admission) },
      { path: 'student-corner',     element: withSuspense(StudentCorner) },
      { path: 'contact',            element: withSuspense(Contact) },
      { path: 'virtual-tour',       element: withSuspense(VirtualTour) },
      { path: 'login',              element: withSuspense(Login) },
      { path: 'register',           element: withSuspense(Register) },
    ],
  },
  {
    path: '/dashboard',
    element: <Suspense fallback={<Loader />}><ProtectedRoute /></Suspense>,
    children: [
      {
        path: '',
        element: <Suspense fallback={<Loader />}><DashboardLayout /></Suspense>,
        children: [
          { index: true,            element: withSuspense(Dashboard) },
          { path: 'courses',        element: withSuspense(Courses) },
          { path: 'results',        element: withSuspense(Results) },
          { path: 'profile',        element: withSuspense(Profile) },
          { path: 'settings',       element: withSuspense(Settings) },
        ],
      },
    ],
  },
  {
    path: '*',
    element: withSuspense(NotFound),
  },
]);

export default router;
