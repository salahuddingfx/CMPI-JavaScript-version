import { useState } from 'react';
import { Link } from 'react-router-dom';
import PageTransition from '@/components/PageTransition';
import SEO from '@/components/SEO';
import { useInstituteContext } from '@/contexts/InstituteDataContext';
import Loader from '@/components/Loader';
import { Search, Calendar, Bell, FileText, Filter, ArrowRight } from 'lucide-react';

const NoticeBoard = () => {
  const { data, loading } = useInstituteContext();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const notices = data?.notices || [];
  const categories = ['All', ...new Set(notices.map(n => n.category))];

  const filteredNotices = notices.filter(notice => {
    const matchesSearch = notice.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          (notice.details || '').toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || notice.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  if (loading) {
    return (
      <div className="flex min-h-[400px] items-center justify-center">
        <Loader />
      </div>
    );
  }

  return (
    <PageTransition>
      <SEO title="Notice Board" description="Latest announcements and official notices from CMPI." />
      
      <section className="bg-primary py-20 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Notice Board</h1>
          <p className="text-xl opacity-90 max-w-2xl mx-auto">
            Stay updated with the latest academic announcements, examination routines, and official institute news.
          </p>
        </div>
      </section>

      <section className="py-8 bg-white dark:bg-slate-950 border-b dark:border-slate-800 sticky top-16 z-30">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-4 justify-between items-center">
            <div className="relative w-full md:w-96">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 dark:text-slate-500 w-5 h-5" />
              <input 
                type="text" 
                placeholder="Search notices..." 
                className="w-full pl-10 pr-4 py-2 rounded-lg border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 focus:ring-2 focus:ring-primary outline-none text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            
            <div className="flex items-center gap-2 w-full md:w-auto overflow-x-auto pb-2 md:pb-0">
              <Filter className="w-5 h-5 text-gray-400 dark:text-slate-500 shrink-0" />
              {categories.map((cat) => (
                <button 
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2 rounded-full text-sm font-semibold whitespace-nowrap transition-colors ${selectedCategory === cat ? 'bg-primary text-white' : 'bg-gray-100 dark:bg-slate-800 text-gray-600 dark:text-slate-400 hover:bg-gray-200 dark:hover:bg-slate-700'}`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-50 dark:bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-4">
            {filteredNotices.length > 0 ? (
              filteredNotices.map((notice) => (
                <div key={notice.id} className="bg-white dark:bg-slate-950 p-6 rounded-2xl shadow-sm hover:shadow-md transition-all border border-slate-100 dark:border-slate-800 group flex flex-col md:flex-row gap-6 items-start md:items-center">
                  <div className="bg-slate-100 dark:bg-slate-800 p-4 rounded-xl text-primary group-hover:bg-primary group-hover:text-white transition-colors shrink-0">
                    <Bell className="w-6 h-6" />
                  </div>
                  <div className="flex-grow">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-[10px] font-bold uppercase tracking-widest px-2 py-1 bg-slate-100 dark:bg-slate-800 rounded text-gray-600 dark:text-slate-400">
                        {notice.category}
                      </span>
                      <span className="text-xs text-gray-400 dark:text-slate-500 flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5" /> {notice.date}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-primary transition-colors">
                      {notice.title}
                    </h3>
                  </div>
                  <Link to={`/notices/${notice.id}`} className="flex items-center gap-2 text-primary font-bold text-sm whitespace-nowrap hover:gap-3 transition-all">
                    View Details <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              ))
            ) : (
              <div className="text-center py-20 bg-white dark:bg-slate-950 rounded-3xl border border-dashed border-gray-300 dark:border-slate-700">
                <FileText className="w-16 h-16 text-gray-200 dark:text-slate-600 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">No notices found</h3>
                <p className="text-gray-500 dark:text-slate-400">Try adjusting your search filters.</p>
              </div>
            )}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white dark:bg-slate-950">
        <div className="container mx-auto px-4">
          <div className="bg-slate-900 dark:bg-slate-800 rounded-3xl p-12 text-center text-white">
            <h2 className="text-3xl font-bold mb-4">Never Miss an Update</h2>
            <p className="text-slate-400 mb-8 max-w-xl mx-auto">
              Subscribe to our notification list to receive important notices directly in your inbox.
            </p>
            <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto" onSubmit={(e) => e.preventDefault()}>
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="flex-grow px-6 py-4 rounded-xl bg-white/5 border border-white/10 text-white outline-none focus:border-secondary transition-all placeholder-slate-400"
              />
              <button className="px-8 py-4 bg-secondary text-primary font-bold rounded-xl hover:bg-white transition-all">
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </section>
    </PageTransition>
  );
};

export default NoticeBoard;
