import PageTransition from '@/components/PageTransition';
import SEO from '@/components/SEO';
import { blogPosts } from '@/data/mockData';
import { Calendar, User, ArrowRight, Tag, Search } from 'lucide-react';
import { Link } from 'react-router-dom';

const Blog = () => {
  return (
    <PageTransition>
      <SEO title="Blog & News" description="Read the latest news, articles, and updates from CMPI." />
      
      {/* Page Header */}
      <section className="bg-primary py-20 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Institute Blog</h1>
          <p className="text-xl opacity-90 max-w-2xl mx-auto">
            Insights, academic articles, and campus life stories from our faculty and students.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Blog Grid */}
            <div className="lg:col-span-2">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {blogPosts.map((post) => (
                  <article key={post.id} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group border">
                    <div className="h-56 overflow-hidden relative">
                      <img 
                        src={post.image} 
                        alt={post.title} 
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" 
                      />
                    </div>
                    <div className="p-8">
                      <div className="flex items-center gap-4 text-xs text-gray-400 mb-4">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-3.5 h-3.5" /> {post.date}
                        </span>
                        <span className="flex items-center gap-1">
                          <User className="w-3.5 h-3.5" /> {post.author}
                        </span>
                      </div>
                      <h3 className="text-xl font-bold text-slate-900 mb-4 group-hover:text-primary transition-colors">
                        {post.title}
                      </h3>
                      <p className="text-gray-600 text-sm leading-relaxed mb-6">
                        {post.excerpt}
                      </p>
                      <button className="text-primary font-bold text-sm flex items-center gap-2 hover:gap-3 transition-all">
                        Read More <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  </article>
                ))}
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-10">
              {/* Search */}
              <div className="bg-white p-8 rounded-2xl border shadow-sm">
                <h4 className="text-lg font-bold text-slate-900 mb-4">Search Articles</h4>
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input 
                    type="text" 
                    placeholder="Keywords..." 
                    className="w-full pl-10 pr-4 py-3 rounded-xl border bg-slate-50 outline-none focus:ring-2 focus:ring-primary transition-all"
                  />
                </div>
              </div>

              {/* Categories */}
              <div className="bg-white p-8 rounded-2xl border shadow-sm">
                <h4 className="text-lg font-bold text-slate-900 mb-4">Categories</h4>
                <div className="space-y-2">
                  {['Technology', 'Education', 'Campus Life', 'Engineering', 'Career'].map((cat) => (
                    <a key={cat} href="#" className="flex justify-between items-center py-2 px-3 rounded-lg hover:bg-slate-50 text-gray-600 hover:text-primary transition-colors">
                      <span className="flex items-center gap-2"><Tag className="w-4 h-4" /> {cat}</span>
                      <span className="bg-slate-100 px-2 py-0.5 rounded text-[10px] font-bold">12</span>
                    </a>
                  ))}
                </div>
              </div>

              {/* Recent Posts */}
              <div className="bg-white p-8 rounded-2xl border shadow-sm">
                <h4 className="text-lg font-bold text-slate-900 mb-6">Popular Articles</h4>
                <div className="space-y-6">
                  {blogPosts.slice(0, 3).map((post) => (
                    <div key={post.id} className="flex gap-4 group">
                      <div className="w-20 h-20 rounded-lg overflow-hidden shrink-0">
                        <img src={post.image} className="w-full h-full object-cover group-hover:scale-110 transition-all" />
                      </div>
                      <div>
                        <h5 className="font-bold text-slate-900 text-sm line-clamp-2 group-hover:text-primary transition-colors">{post.title}</h5>
                        <p className="text-[10px] text-gray-400 mt-1">{post.date}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageTransition>
  );
};

export default Blog;
