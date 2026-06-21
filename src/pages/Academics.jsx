import { Link } from 'react-router-dom';
import PageTransition from '@/components/PageTransition';
import SEO from '@/components/SEO';
import { Monitor, Building2, Zap, ArrowRight, BookOpen } from 'lucide-react';
import { useInstituteContext } from '@/contexts/InstituteDataContext';
import { LoadingSkeleton } from '@/components/LoadingSkeleton';

const iconMap = {
  Monitor: Monitor,
  Building2: Building2,
  Zap: Zap,
};

const Academics = () => {
  const { data, loading, error } = useInstituteContext();

  if (loading) return <LoadingSkeleton />;
  if (error || !data) {
    return (
      <PageTransition>
        <div className="container mx-auto px-4 py-20">
          <div className="rounded-2xl border border-red-200 bg-red-50 p-6 text-center text-red-700">
            Unable to load academics programs. Please try again later.
          </div>
        </div>
      </PageTransition>
    );
  }

  const departments = data.departments || [];

  return (
    <PageTransition>
      <SEO title="Academics" description="Explore the diverse technology programs offered at CMPI." />
      
      {/* Page Header */}
      <section className="bg-primary py-20 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Academics</h1>
          <p className="text-xl opacity-90 max-w-2xl mx-auto">
            Providing industry-standard technical education through our specialized departments and modern laboratory facilities.
          </p>
        </div>
      </section>

      {/* Departments Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {departments.map((dept) => {
              const Icon = iconMap[dept.icon] || BookOpen;
              return (
                <div key={dept.id} className="group border rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-300 flex flex-col h-full">
                  <div className="h-56 overflow-hidden relative bg-slate-100">
                    <img src={dept.image || 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=1200'} alt={dept.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                    <div className="absolute top-4 left-4 bg-white p-3 rounded-lg shadow-md text-primary">
                      <Icon className="w-6 h-6" />
                    </div>
                  </div>
                  <div className="p-8 flex flex-col flex-grow">
                    <h2 className="text-2xl font-bold mb-4 text-slate-900 group-hover:text-primary transition-colors">{dept.name}</h2>
                    <p className="text-gray-600 mb-6 line-clamp-3 leading-relaxed">
                      {dept.description}
                    </p>
                    <div className="flex flex-wrap gap-4 mb-8 mt-auto">
                      <div className="flex items-center gap-2 text-xs font-semibold text-gray-500 bg-gray-50 px-3 py-1 rounded-full border">
                        <BookOpen className="w-4 h-4 text-primary" /> {dept.duration || '4 Years (8 Semesters)'}
                      </div>
                      <div className="flex items-center gap-2 text-xs font-semibold text-gray-500 bg-gray-50 px-3 py-1 rounded-full border">
                        <Monitor className="w-4 h-4 text-secondary" /> {dept.seats || '100'} Seats
                      </div>
                    </div>
                    <Link 
                      to={`/academics/${dept.id}`}
                      className="inline-flex items-center gap-2 font-bold text-primary hover:gap-3 transition-all mt-2"
                    >
                      View Curriculum <ArrowRight className="w-5 h-5" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Academic Features */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Why Choose Technical Education at CMPI?</h2>
            <p className="text-gray-600">We don't just teach theory; we prepare you for the real world.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: "Practical Focus", desc: "70% of our curriculum is based on hands-on laboratory work." },
              { title: "Industry Linked", desc: "We collaborate with local industries for internship placements." },
              { title: "Expert Faculty", desc: "Learn from engineers with years of practical experience." },
              { title: "Career Support", desc: "Dedicated cell to help you land your first engineering job." },
            ].map((feature, i) => (
              <div key={i} className="bg-white p-8 rounded-xl shadow-sm border border-slate-100">
                <h4 className="font-bold text-slate-900 mb-2">{feature.title}</h4>
                <p className="text-sm text-gray-600">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </PageTransition>
  );
};

export default Academics;
