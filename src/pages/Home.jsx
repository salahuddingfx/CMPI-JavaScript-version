import { Link } from 'react-router-dom';
import PageTransition from '@/components/PageTransition';
import SEO from '@/components/SEO';
import Hero from '@/components/home/Hero';
import Introduction from '@/components/home/Introduction';
import PrincipalMessage from '@/components/home/PrincipalMessage';
import DepartmentsPreview from '@/components/home/DepartmentsPreview';
import NoticesAndEvents from '@/components/home/NoticesAndEvents';
import VideoIntro from '@/components/home/VideoIntro';

const Home = () => {
  return (
    <PageTransition>
      <SEO title="Home" />
      <div className="flex flex-col">
        <Hero />
        <Introduction />
        <PrincipalMessage />
        <VideoIntro />
        <DepartmentsPreview />
        <NoticesAndEvents />
        
        {/* Simple CTA Section */}
        <section className="py-20 bg-primary text-white text-center">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Start Your Engineering Journey?</h2>
            <p className="text-xl opacity-90 mb-10 max-w-2xl mx-auto">
              Join CMPI today and get the skills you need for a successful career in technology.
            </p>
            <div className="flex justify-center gap-4">
              <Link to="/admission" className="px-8 py-3 bg-secondary text-primary font-bold rounded-md hover:bg-white transition-all">
                Admission Info
              </Link>
              <Link to="/contact" className="px-8 py-3 bg-white/10 border border-white/20 text-white font-bold rounded-md hover:bg-white/20 transition-all">
                Contact Us
              </Link>
            </div>
          </div>
        </section>
      </div>
    </PageTransition>
  );
};

export default Home;
