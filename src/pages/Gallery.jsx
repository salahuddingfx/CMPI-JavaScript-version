import PageTransition from '@/components/PageTransition';
import SEO from '@/components/SEO';

const Gallery = () => (
  <PageTransition>
    <SEO title="Gallery" />
    <div className="container mx-auto px-4 py-20">
      <h1 className="text-3xl font-bold">Gallery</h1>
      <p className="mt-4">Photos and videos of campus life.</p>
    </div>
  </PageTransition>
);

export default Gallery;
