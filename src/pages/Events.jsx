import PageTransition from '@/components/PageTransition';
import SEO from '@/components/SEO';

const Events = () => (
  <PageTransition>
    <SEO title="Events" />
    <div className="container mx-auto px-4 py-20">
      <h1 className="text-3xl font-bold">Events</h1>
      <p className="mt-4">Upcoming and past events at CMPI.</p>
    </div>
  </PageTransition>
);

export default Events;
