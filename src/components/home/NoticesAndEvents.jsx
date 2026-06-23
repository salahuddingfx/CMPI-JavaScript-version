import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Calendar, Bell, ArrowRight, MapPin } from 'lucide-react';
import { notices, events } from '@/data/mockData';

const NoticesAndEvents = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Latest Notices */}
          <div>
            <div className="flex justify-between items-end mb-8">
              <div>
                <h2 className="text-sm uppercase tracking-widest text-primary font-bold mb-2">Updates</h2>
                <h3 className="text-3xl font-bold text-slate-900">Latest Notices</h3>
              </div>
              <Link to="/notice-board" className="text-primary font-semibold text-sm hover:underline flex items-center gap-1">
                View All <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="space-y-4">
              {notices.map((notice, index) => (
                <motion.div
                  key={notice.id}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="p-4 rounded-lg border border-slate-100 bg-slate-50 hover:bg-white hover:border-primary transition-all group flex gap-4 items-start"
                >
                  <div className="bg-white p-3 rounded shadow-sm text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                    <Bell className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-bold uppercase text-primary mb-1 block">{notice.category}</span>
                    <h4 className="font-bold text-slate-900 group-hover:text-primary transition-colors">{notice.title}</h4>
                    <p className="text-xs text-gray-500 mt-1 flex items-center gap-1">
                      <Calendar className="w-3 h-3" /> {notice.date}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Upcoming Events */}
          <div>
            <div className="flex justify-between items-end mb-8">
              <div>
                <h2 className="text-sm uppercase tracking-widest text-primary font-bold mb-2">Happening</h2>
                <h3 className="text-3xl font-bold text-slate-900">Upcoming Events</h3>
              </div>
              <Link to="/events" className="text-primary font-semibold text-sm hover:underline flex items-center gap-1">
                All Events <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="space-y-6">
              {events.slice(0, 2).map((event, index) => (
                <motion.div
                  key={event.id}
                  initial={{ opacity: 0, scale: 0.98 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex flex-col md:flex-row gap-6 group"
                >
                  <div className="w-full md:w-40 h-32 rounded-lg overflow-hidden shrink-0">
                    <img src={event.image} alt={event.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-primary transition-colors">{event.title}</h4>
                    <div className="space-y-1">
                      <p className="text-sm text-gray-600 flex items-center gap-2">
                        <Calendar className="w-4 h-4 text-primary" /> {event.date}
                      </p>
                      <p className="text-sm text-gray-600 flex items-center gap-2">
                        <MapPin className="w-4 h-4 text-primary" /> {event.location}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NoticesAndEvents;
