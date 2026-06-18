import PageTransition from '@/components/PageTransition';
import SEO from '@/components/SEO';

const StudentCorner = () => (
  <PageTransition>
    <SEO title="Student Corner" />
    <div className="container mx-auto px-4 py-20">
      <h1 className="text-3xl font-bold">Student Corner</h1>
      <p className="mt-4">Academic Calendar, Downloads, Routine, and Forms.</p>
    </div>
  </PageTransition>
);

export default StudentCorner;
