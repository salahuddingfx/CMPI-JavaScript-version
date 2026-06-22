import { useState, useMemo } from 'react';
import PageTransition from '@/components/PageTransition';
import SEO from '@/components/SEO';
import { Calendar, User, ArrowRight, Tag, Search } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useInstituteContext } from '@/contexts/InstituteDataContext';
import { LoadingSkeleton } from '@/components/LoadingSkeleton';

const Blog = () => {
  const { data, loading, error } = useInstituteContext();
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');

  const blogs = useMemo(() => data?.blogs || [], [data?.blogs]);

  const categories = useMemo(() => {
    const cats = new Set(blogs.map((b) => b.category).filter(Boolean));
    return ['All', ...Array.from(cats)];
  }, [blogs]);

  const filteredPosts = useMemo(() => {
    const query = searchTerm.toLowerCase().trim();
    return blogs.filter((post) => {
      const matchesCategory = activeCategory === 'All' || post.category === activeCategory;
      const matchesSearch =
        post.title?.toLowerCase().includes(query) ||
        post.excerpt?.toLowerCase().includes(query) ||
        post.content?.toLowerCase().includes(query);
      return matchesCategory && matchesSearch;
    });
  }, [blogs, activeCategory, searchTerm]);

  const popularPosts = useMemo(() => blogs.slice(0, 3), [blogs]);

  if (loading) return <LoadingSkeleton />;
  if (error || !data) {
    return (
      <PageTransition>
        <div className="container mx-auto px-4 py-20">
          <div className="rounded-2xl border border-red-200 bg-red-50 dark:bg-red-500/10 dark:border-red-800 p-6 text-center text-red-700 dark:text-red-400">
            Unable to load blog articles. Please try again later.
          </div>
        </div>
      </PageTransition>
    );
  }

  const categoryCounts = { All: blogs.length };
  blogs.forEach((b) => {
    if (b.category) {
      categoryCounts[b.category] = (categoryCounts[b.category] || 0) + 1;
    }
  });

  return (
    <PageTransition>
      <SEO title="Blog & News" description="Read the latest news, articles, and updates from CMPI." />
      
      <section className="bg-primary py-20 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Institute Blog</h1>
          <p className="text-xl opacity-90 max-w-2xl mx-auto">
            Insights, academic articles, and campus life stories from our faculty and students.
          </p>
        </div>
      </section>

      <section className="py-20 bg-slate-50 dark:bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              {filteredPosts.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {filteredPosts.map((post) => (
                    <article key={post.id} className="bg-white dark:bg-slate-950 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group border border-slate-100 dark:border-slate-800 flex flex-col h-full">
                      <div className="h-56 overflow-hidden relative">
                        <img 
                          src={post.image || 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&q=80&w=800'} 
                          alt={post.title} 
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" 
                        />
                      </div>
                      <div className="p-8 flex flex-col flex-grow">
                        <div className="flex items-center gap-4 text-xs text-gray-400 dark:text-slate-500 mb-4">
                          <span className="flex items-center gap-1">
                            <Calendar className="w-3.5 h-3.5" /> {new Date(post.date).toLocaleDateString("en-GB", {
                              day: "2-digit",
                              month: "short",
                              year: "numeric",
                            })}
                          </span>
                          <span className="flex items-center gap-1">
                            <User className="w-3.5 h-3.5" /> {post.author}
                          </span>
                        </div>
                        <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4 group-hover:text-primary transition-colors line-clamp-2">
                          {post.title}
                        </h3>
                        <p className="text-gray-600 dark:text-slate-400 text-sm leading-relaxed mb-6 line-clamp-3">
                          {post.excerpt}
                        </p>
                        <div className="mt-auto">
                          <Link 
                            to={`/blog/${post.slug}`} 
                            className="text-primary font-bold text-sm flex items-center gap-2 hover:gap-3 transition-all"
                          >
                            Read More <ArrowRight className="w-4 h-4" />
                          </Link>
                        </div>
                      </div>
                    </article>
                  ))}
                </div>
              ) : (
                <div className="text-center py-20 bg-white dark:bg-slate-950 rounded-2xl border border-dashed border-slate-300 dark:border-slate-700">
                  <Search className="w-12 h-12 text-slate-300 dark:text-slate-600 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white">No articles found</h3>
                  <p className="text-gray-500 dark:text-slate-400 mt-2">Try adjusting your search query or filter tags.</p>
                </div>
              )}
            </div>

            <div className="space-y-10">
              <div className="bg-white dark:bg-slate-950 p-8 rounded-2xl border border-slate-100 dark:border-slate-800 shadow-sm">
                <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-4">Search Articles</h4>
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 dark:text-slate-500 w-5 h-5" />
                  <input 
                    type="text" 
                    placeholder="Keywords..." 
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 outline-none focus:ring-2 focus:ring-primary transition-all font-semibold text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500"
                  />
                </div>
              </div>

              <div className="bg-white dark:bg-slate-950 p-8 rounded-2xl border border-slate-100 dark:border-slate-800 shadow-sm">
                <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-4">Categories</h4>
                <div className="space-y-2">
                  {categories.map((cat) => (
                    <button 
                      key={cat} 
                      onClick={() => setActiveCategory(cat)}
                      className={`w-full flex justify-between items-center py-2.5 px-3.5 rounded-xl transition-colors text-left ${
                        activeCategory === cat ? 'bg-primary/5 text-primary font-bold' : 'text-gray-600 dark:text-slate-400 hover:text-primary hover:bg-slate-50 dark:hover:bg-slate-800'
                      }`}
                    >
                      <span className="flex items-center gap-2">
                        <Tag className={`w-4 h-4 ${activeCategory === cat ? 'text-primary' : 'text-gray-400 dark:text-slate-500'}`} /> {cat}
                      </span>
                      <span className={`px-2 py-0.5 rounded text-[10px] font-bold ${
                        activeCategory === cat ? 'bg-primary text-white' : 'bg-slate-100 dark:bg-slate-800 text-slate-500'
                      }`}>
                        {categoryCounts[cat] || 0}
                      </span>
                    </button>
                  ))}
                </div>
              </div>

              {popularPosts.length > 0 && (
                <div className="bg-white dark:bg-slate-950 p-8 rounded-2xl border border-slate-100 dark:border-slate-800 shadow-sm">
                  <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-6">Popular Articles</h4>
                  <div className="space-y-6">
                    {popularPosts.map((post) => (
                      <Link key={post.id} to={`/blog/${post.slug}`} className="flex gap-4 group">
                        <div className="w-20 h-20 rounded-lg overflow-hidden shrink-0">
                          <img src={post.image || 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&q=80&w=800'} className="w-full h-full object-cover group-hover:scale-110 transition-all" />
                        </div>
                        <div>
                          <h5 className="font-bold text-slate-900 dark:text-white text-sm line-clamp-2 group-hover:text-primary transition-colors">{post.title}</h5>
                          <p className="text-[10px] text-gray-400 dark:text-slate-500 mt-1">
                            {new Date(post.date).toLocaleDateString("en-GB", {
                              day: "2-digit",
                              month: "short",
                              year: "numeric",
                            })}
                          </p>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </PageTransition>
  );
};

export default Blog;
