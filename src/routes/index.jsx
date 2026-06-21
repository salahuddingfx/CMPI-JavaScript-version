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

// ── Newly Synced Pages ────────────────────────────────────────────────────────
const Results       = lazy(() => import('@/pages/Results').then(m => ({ default: m.Results })));
const ClassRoutine  = lazy(() => import('@/pages/ClassRoutine').then(m => ({ default: m.ClassRoutine })));
const ExamRoutine   = lazy(() => import('@/pages/ExamRoutine').then(m => ({ default: m.ExamRoutine })));
const Syllabus      = lazy(() => import('@/pages/Syllabus').then(m => ({ default: m.Syllabus })));
const Feedback      = lazy(() => import('@/pages/Feedback').then(m => ({ default: m.Feedback })));
const Tender        = lazy(() => import('@/pages/Tender').then(m => ({ default: m.Tender })));
const Placement     = lazy(() => import('@/pages/Placement').then(m => ({ default: m.Placement })));
const Scholarship   = lazy(() => import('@/pages/Scholarship').then(m => ({ default: m.Scholarship })));
const Library       = lazy(() => import('@/pages/Library').then(m => ({ default: m.Library })));
const Alumni        = lazy(() => import('@/pages/Alumni').then(m => ({ default: m.Alumni })));
const Clubs         = lazy(() => import('@/pages/Clubs').then(m => ({ default: m.Clubs })));
const ClubDetails   = lazy(() => import('@/pages/ClubDetails').then(m => ({ default: m.ClubDetails })));
const Developer     = lazy(() => import('@/pages/Developer').then(m => ({ default: m.Developer })));
const Principal     = lazy(() => import('@/pages/Principal').then(m => ({ default: m.Principal })));
const ForgotPassword = lazy(() => import('@/pages/ForgotPassword').then(m => ({ default: m.ForgotPassword })));
const NoticeDetails = lazy(() => import('@/pages/NoticeDetails').then(m => ({ default: m.NoticeDetails })));
const EventDetails  = lazy(() => import('@/pages/EventDetails').then(m => ({ default: m.EventDetails })));
const BlogDetails   = lazy(() => import('@/pages/BlogDetails').then(m => ({ default: m.BlogDetails })));
const Sitemap       = lazy(() => import('@/pages/Sitemap').then(m => ({ default: m.Sitemap })));
const Disclaimer    = lazy(() => import('@/pages/Disclaimer').then(m => ({ default: m.Disclaimer })));
const Accessibility = lazy(() => import('@/pages/Accessibility').then(m => ({ default: m.Accessibility })));
const PrivacyPolicy = lazy(() => import('@/pages/PrivacyPolicy').then(m => ({ default: m.PrivacyPolicy })));
const TermsAndConditions = lazy(() => import('@/pages/TermsAndConditions').then(m => ({ default: m.TermsAndConditions })));
const CookiePolicy  = lazy(() => import('@/pages/CookiePolicy').then(m => ({ default: m.CookiePolicy })));
const RefundPolicy  = lazy(() => import('@/pages/RefundPolicy').then(m => ({ default: m.RefundPolicy })));

// ── Auth Guard ────────────────────────────────────────────────────────────────
const ProtectedRoute = lazy(() => import('@/components/ProtectedRoute'));

// ── Dashboard Sub-pages ───────────────────────────────────────────────────────
const Dashboard     = lazy(() => import('@/pages/Dashboard'));
const Courses       = lazy(() => import('@/pages/dashboard/Courses'));
const ResultsPage   = lazy(() => import('@/pages/dashboard/Results')); // renamed import to avoid conflict with public Results
const Profile       = lazy(() => import('@/pages/dashboard/Profile'));
const Settings      = lazy(() => import('@/pages/dashboard/Settings'));
const Bills         = lazy(() => import('@/pages/dashboard/Bills'));
const StudentWebmail = lazy(() => import('@/pages/dashboard/StudentWebmail').then(m => ({ default: m.StudentWebmail })));

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
      { path: 'notice-board/:id',   element: withSuspense(NoticeDetails) },
      { path: 'notices/:id',        element: withSuspense(NoticeDetails) },
      { path: 'events',             element: withSuspense(Events) },
      { path: 'events/:id',         element: withSuspense(EventDetails) },
      { path: 'gallery',            element: withSuspense(Gallery) },
      { path: 'blog',               element: withSuspense(Blog) },
      { path: 'blog/:slug',         element: withSuspense(BlogDetails) },
      { path: 'admission',          element: withSuspense(Admission) },
      { path: 'student-corner',     element: withSuspense(StudentCorner) },
      { path: 'contact',            element: withSuspense(Contact) },
      { path: 'virtual-tour',       element: withSuspense(VirtualTour) },
      { path: 'login',              element: withSuspense(Login) },
      { path: 'register',           element: withSuspense(Register) },
      { path: 'results',            element: withSuspense(Results) },
      { path: 'exam-routine',       element: withSuspense(ExamRoutine) },
      { path: 'class-routine',      element: withSuspense(ClassRoutine) },
      { path: 'library',            element: withSuspense(Library) },
      { path: 'syllabus',           element: withSuspense(Syllabus) },
      { path: 'principal',          element: withSuspense(Principal) },
      { path: 'scholarship',        element: withSuspense(Scholarship) },
      { path: 'tender',             element: withSuspense(Tender) },
      { path: 'feedback',           element: withSuspense(Feedback) },
      { path: 'clubs',              element: withSuspense(Clubs) },
      { path: 'clubs/:id',          element: withSuspense(ClubDetails) },
      { path: 'alumni',             element: withSuspense(Alumni) },
      { path: 'placement',          element: withSuspense(Placement) },
      { path: 'privacy-policy',     element: withSuspense(PrivacyPolicy) },
      { path: 'terms-and-conditions', element: withSuspense(TermsAndConditions) },
      { path: 'cookie-policy',      element: withSuspense(CookiePolicy) },
      { path: 'refund-policy',      element: withSuspense(RefundPolicy) },
      { path: 'disclaimer',         element: withSuspense(Disclaimer) },
      { path: 'accessibility',      element: withSuspense(Accessibility) },
      { path: 'sitemap',            element: withSuspense(Sitemap) },
      { path: 'developer',          element: withSuspense(Developer) },
      { path: 'forgot-password',    element: withSuspense(ForgotPassword) },
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
          { path: 'results',        element: withSuspense(ResultsPage) },
          { path: 'profile',        element: withSuspense(Profile) },
          { path: 'settings',       element: withSuspense(Settings) },
          { path: 'bills',          element: withSuspense(Bills) },
          { path: 'webmail',        element: withSuspense(StudentWebmail) },
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
