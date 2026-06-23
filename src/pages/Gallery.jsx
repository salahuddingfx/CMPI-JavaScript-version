import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, Loader2, Image as ImageIcon } from 'lucide-react';
import PageTransition from '@/components/PageTransition';
import SEO from '@/components/SEO';
import { getGalleryAlbums } from '@/services/api';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, delay },
});

const Gallery = () => {
  const [albums, setAlbums] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedAlbum, setSelectedAlbum] = useState(null);
  const [lightbox, setLightbox] = useState(null);

  useEffect(() => {
    getGalleryAlbums()
      .then(setAlbums)
      .catch(console.error)
      .finally(() => setLoading(false));
  }, []);

  function handleBack() {
    setSelectedAlbum(null);
    setLightbox(null);
  }

  if (loading) {
    return (
      <PageTransition>
        <SEO title="Gallery" />
        <div className="min-h-screen flex items-center justify-center bg-slate-50 dark:bg-slate-900">
          <Loader2 className="w-8 h-8 animate-spin text-primary" />
        </div>
      </PageTransition>
    );
  }

  if (selectedAlbum) {
    return (
      <PageTransition>
        <SEO title={selectedAlbum.title} />
        <section className="bg-primary py-24 text-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-10 bg-[url('https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&q=80&w=1800')] bg-cover bg-center" />
          <div className="absolute inset-0 bg-gradient-to-br from-primary to-primary/80" />
          <div className="container mx-auto px-4 relative z-10">
            <motion.div {...fadeUp()}>
              <button onClick={handleBack} className="flex items-center gap-2 text-white/70 hover:text-white transition mb-6 text-sm font-bold">
                <ChevronLeft className="w-4 h-4" /> Back to Albums
              </button>
              <h1 className="text-5xl md:text-6xl font-black mb-4">{selectedAlbum.title}</h1>
              {selectedAlbum.description && (
                <p className="text-xl text-white/80 max-w-2xl">{selectedAlbum.description}</p>
              )}
            </motion.div>
          </div>
        </section>

        <section className="py-12 bg-slate-50 dark:bg-slate-900">
          <div className="container mx-auto px-4">
            {selectedAlbum.images?.length === 0 ? (
              <div className="text-center py-24">
                <ImageIcon className="w-12 h-12 text-slate-300 dark:text-slate-600 mx-auto mb-3" />
                <p className="text-slate-400 dark:text-slate-500 font-semibold">No images in this album yet.</p>
              </div>
            ) : (
              <div className="columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
                {selectedAlbum.images.map((img, i) => (
                  <motion.div
                    key={img.id}
                    {...fadeUp(i * 0.05)}
                    className="break-inside-avoid relative group cursor-pointer rounded-2xl overflow-hidden shadow-sm"
                    onClick={() => setLightbox(img)}
                  >
                    <img
                      src={img.url}
                      alt={img.caption || ''}
                      className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                  </motion.div>
                ))}
              </div>
            )}
          </div>
        </section>

        <AnimatePresence>
          {lightbox && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
              onClick={() => setLightbox(null)}
            >
              <button className="absolute top-4 right-4 w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-colors" onClick={() => setLightbox(null)}>
                <X className="w-5 h-5" />
              </button>
              <motion.img
                key={lightbox.id}
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                src={lightbox.url}
                alt={lightbox.caption || ''}
                className="max-h-[85vh] max-w-5xl w-full object-contain rounded-2xl"
                onClick={(e) => e.stopPropagation()}
              />
              {lightbox.caption && (
                <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/70 text-sm font-semibold">
                  {lightbox.caption}
                </div>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </PageTransition>
    );
  }

  return (
    <PageTransition>
      <SEO title="Gallery" description="Explore photos of CMPI campus life — labs, sports events, cultural activities and graduation ceremonies." />

      <section className="bg-primary py-24 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&q=80&w=1800')] bg-cover bg-center" />
        <div className="absolute inset-0 bg-gradient-to-br from-primary to-primary/80" />
        <div className="container mx-auto px-4 relative z-10 text-center">
          <motion.div {...fadeUp()}>
            <h1 className="text-5xl md:text-6xl font-black mb-4">Gallery</h1>
            <p className="text-xl text-white/80 max-w-2xl mx-auto">
              A visual journey through campus life, achievements, and unforgettable moments.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-12 bg-slate-50 dark:bg-slate-900">
        <div className="container mx-auto px-4">
          {albums.length === 0 ? (
            <div className="text-center py-24">
              <ImageIcon className="w-12 h-12 text-slate-300 dark:text-slate-600 mx-auto mb-3" />
              <p className="text-slate-400 dark:text-slate-500 font-semibold">No albums yet</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {albums.map((album, i) => (
                <motion.div
                  key={album.id}
                  {...fadeUp(i * 0.1)}
                  className="group cursor-pointer rounded-2xl overflow-hidden bg-white dark:bg-slate-800 shadow-sm hover:shadow-xl transition-all"
                  onClick={() => setSelectedAlbum(album)}
                >
                  <div className="aspect-video overflow-hidden" style={{ backgroundColor: album.accent + '20' }}>
                    {album.cover ? (
                      <img src={album.cover} alt={album.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
                    ) : (
                      <div className="flex h-full items-center justify-center">
                        <ImageIcon className="w-12 h-12 text-slate-300 dark:text-slate-600" />
                      </div>
                    )}
                  </div>
                  <div className="p-5">
                    <div className="flex items-center gap-2 mb-1">
                      <div className="w-2 h-2 rounded-full" style={{ backgroundColor: album.accent }} />
                      <h3 className="font-black text-slate-900 dark:text-white truncate">{album.title}</h3>
                    </div>
                    {album.description && <p className="text-sm text-slate-500 dark:text-slate-400 line-clamp-2 mb-2">{album.description}</p>}
                    <p className="text-xs font-semibold text-slate-400">{album.count} image{album.count !== 1 ? 's' : ''}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>
    </PageTransition>
  );
};

export default Gallery;
