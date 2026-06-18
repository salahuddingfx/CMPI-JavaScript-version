import PageTransition from '@/components/PageTransition';
import SEO from '@/components/SEO';

const About = () => (
  <PageTransition>
    <SEO title="About Us" />
    <div className="container mx-auto px-4 py-20">
      <h1 className="text-3xl font-bold">About Us</h1>
      <p className="mt-4">Institute Overview, Mission, Vision, and History.</p>
    </div>
  </PageTransition>
);

export default About;
