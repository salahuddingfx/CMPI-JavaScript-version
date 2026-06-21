import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, Calendar, Clock, ArrowRight, Tag } from 'lucide-react';
import PageTransition from '@/components/PageTransition';
import SEO from '@/components/SEO';
import { LoadingSkeleton } from '@/components/LoadingSkeleton';
import { useInstituteContext } from '@/contexts/InstituteDataContext';
import { Link } from 'react-router-dom';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, delay },
});

const Events = () => {
  const [filter, setFilter] = useState('all');
  const { data, loading, error } = useInstituteContext();

  const tabs = [
    { key: 'all', label: 'All Events' },
    { key: 'upcoming', label: 'Upcoming' },
    { key: 'past', label: 'Past' },
  ];

  if (loading) return <LoadingSkeleton />;
  if (error || !data) {
    return (
      <PageTransition>
        <div className="container mx-auto px-4 py-20">
          <div className="rounded-2xl border border-red-200 bg-red-50 p-6 text-center text-red-700">
            Unable to load events listing. Please try again later.
          </div>
        </div>
      </PageTransition>
    );
  }

  const events = data.events || [];

  const filtered = events.filter((e) => {
    if (filter === 'upcoming') return e.status === 'Upcoming';
    if (filter === 'past') return e.status === 'Past';
    return true;
  });


  return (
    <PageTransition>
      <SEO
        title="Events"
        description="Stay updated with upcoming and past events at CMPI — sports, tech fests, cultural nights and more."
      />

      {/* Hero */}
      <section className="bg-primary py-24 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&q=80&w=1800')] bg-cover bg-center" />
        <div className="absolute inset-0 bg-gradient-to-br from-primary to-primary/80" />
        <div className="container mx-auto px-4 relative z-10 text-center">
          <motion.div {...fadeUp()}>
            <span className="inline-block px-4 py-1.5 bg-white/10 border border-white/20 rounded-full text-sm font-bold mb-6 backdrop-blur">
              Campus Life
            </span>
            <h1 className="text-5xl md:text-6xl font-black mb-4">Events at CMPI</h1>
            <p className="text-xl text-white/80 max-w-2xl mx-auto">
              From tech fests to cultural nights — be part of the vibrant campus life.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="sticky top-16 z-30 bg-white border-b py-4">
        <div className="container mx-auto px-4 flex justify-center">
          <div className="flex bg-slate-100 rounded-2xl p-1 gap-1">
            {tabs.map((t) => (
              <button
                key={t.key}
                onClick={() => setFilter(t.key)}
                className={`px-6 py-2.5 rounded-xl text-sm font-bold transition-all ${
                  filter === t.key
                    ? 'bg-primary text-white shadow-md shadow-primary/20'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                {t.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Events Grid */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <AnimatePresence mode="wait">
            {filtered.length > 0 ? (
              <motion.div
                key={filter}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
              >
                {filtered.map((event, i) => {
                  const upcoming = event.status === 'Upcoming';
                  return (
                    <motion.div
                      key={event.id}
                      {...fadeUp(i * 0.1)}
                      className="bg-white rounded-3xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-xl transition-all group"
                    >
                      <div className="relative h-52 overflow-hidden">
                        <img
                          src={event.image || 'https://images.unsplash.com/photo-1540575861501-7cf05a4b125a?auto=format&fit=crop&q=80&w=800'}
                          alt={event.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <span
                          className={`absolute top-4 left-4 text-[10px] font-black uppercase tracking-widest px-3 py-1.5 rounded-full ${
                            upcoming
                              ? 'bg-green-500 text-white'
                              : 'bg-slate-700 text-white'
                          }`}
                        >
                          {event.status}
                        </span>
                      </div>
                      <div className="p-6">
                        <h3 className="text-xl font-black text-slate-900 mb-3 group-hover:text-primary transition-colors">
                          {event.title}
                        </h3>
                        <div className="space-y-2 text-sm text-slate-500 mb-5">
                          <div className="flex items-center gap-2">
                            <Calendar className="w-4 h-4 text-primary shrink-0" />
                            <span className="font-semibold">
                              {new Date(event.date).toLocaleDateString("en-GB", {
                                day: "2-digit",
                                month: "long",
                                year: "numeric",
                              })}
                            </span>
                          </div>
                          <div className="flex items-center gap-2">
                            <MapPin className="w-4 h-4 text-primary shrink-0" />
                            <span>{event.venue}</span>
                          </div>
                        </div>
                        <Link to={`/events/${event.id}`} className="inline-flex items-center gap-2 text-primary font-bold text-sm hover:gap-3 transition-all">
                          View Details <ArrowRight className="w-4 h-4" />
                        </Link>
                      </div>
                    </motion.div>
                  );
                })}
              </motion.div>
            ) : (
              <motion.div
                key="empty"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-24 bg-white rounded-3xl border border-dashed border-slate-300 max-w-md mx-auto"
              >
                <Calendar className="w-16 h-16 text-slate-200 mx-auto mb-4" />
                <h3 className="text-xl font-black text-slate-900">No events found</h3>
                <p className="text-slate-500 mt-2">Check back soon for updates!</p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            {...fadeUp()}
            className="bg-slate-900 rounded-3xl p-12 text-center text-white max-w-3xl mx-auto"
          >
            <h2 className="text-3xl font-black mb-4">Want to Organize an Event?</h2>
            <p className="text-slate-400 mb-8">
              Student clubs and departments can submit event proposals to the administration.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-secondary text-primary rounded-2xl font-black hover:bg-white transition-all"
            >
              Contact Administration <ArrowRight className="w-5 h-5" />
            </a>
          </motion.div>
        </div>
      </section>
    </PageTransition>
  );
};

export default Events;
