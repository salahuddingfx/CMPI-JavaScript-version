import { useParams, Link } from 'react-router-dom';
import PageTransition from '@/components/PageTransition';
import SEO from '@/components/SEO';
import { departments, faculty } from '@/data/mockData';
import { Monitor, Building2, Zap, Users, FlaskConical, Briefcase, GraduationCap, ArrowLeft } from 'lucide-react';
import NotFound from '@/pages/NotFound';

const iconMap = {
  Monitor: Monitor,
  Building2: Building2,
  Zap: Zap,
};

const DepartmentDetail = () => {
  const { id } = useParams();
  const department = departments.find(d => d.id === id);

  if (!department) return <NotFound />;

  const Icon = iconMap[department.icon];
  const deptFaculty = faculty.filter(f => f.department === department.name);

  return (
    <PageTransition>
      <SEO title={department.name} description={department.description} />
      
      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center bg-slate-900">
        <div className="absolute inset-0 z-0">
          <img src={department.image} alt={department.name} className="w-full h-full object-cover opacity-30" />
          <div className="absolute inset-0 bg-slate-900/70" />
        </div>
        <div className="container mx-auto px-4 z-10">
          <Link to="/academics" className="text-white/60 hover:text-secondary mb-6 inline-flex items-center gap-2 transition-colors">
            <ArrowLeft className="w-4 h-4" /> Back to Academics
          </Link>
          <div className="flex items-center gap-4 mb-4">
            <div className="bg-secondary p-3 rounded-lg text-primary">
              <Icon className="w-8 h-8" />
            </div>
            <h1 className="text-3xl md:text-5xl font-bold text-white">{department.name}</h1>
          </div>
          <p className="text-xl text-slate-300 max-w-2xl">{department.description}</p>
        </div>
      </section>

      {/* Overview & Quick Info */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-bold mb-6 text-slate-900">Department Overview</h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                {department.longDescription}
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
                <div className="bg-slate-50 p-8 rounded-xl border border-slate-100">
                  <div className="flex items-center gap-3 mb-4 text-primary font-bold">
                    <FlaskConical className="w-6 h-6" />
                    <h3>Labs & Facilities</h3>
                  </div>
                  <ul className="space-y-3">
                    {department.labs.map((lab, i) => (
                      <li key={i} className="text-gray-600 flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full" /> {lab}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="bg-slate-50 p-8 rounded-xl border border-slate-100">
                  <div className="flex items-center gap-3 mb-4 text-primary font-bold">
                    <Briefcase className="w-6 h-6" />
                    <h3>Career Opportunities</h3>
                  </div>
                  <ul className="space-y-3">
                    {department.opportunities.map((opp, i) => (
                      <li key={i} className="text-gray-600 flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-secondary rounded-full" /> {opp}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            <div className="space-y-8">
              <div className="bg-primary text-white p-8 rounded-xl shadow-lg">
                <h3 className="text-xl font-bold mb-6 border-b border-white/20 pb-4">Course Details</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="opacity-80">Duration</span>
                    <span className="font-bold">{department.duration}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="opacity-80">Total Seats</span>
                    <span className="font-bold">{department.seats}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="opacity-80">Head of Dept.</span>
                    <span className="font-bold">{department.headOfDept}</span>
                  </div>
                </div>
                <Link to="/admission" className="mt-8 block w-full bg-secondary text-primary text-center py-3 rounded-lg font-bold hover:bg-white transition-colors">
                  Apply for Admission
                </Link>
              </div>

              <div className="bg-white border p-8 rounded-xl shadow-sm">
                <h3 className="text-xl font-bold mb-6 text-slate-900 border-b pb-4">Downloads</h3>
                <ul className="space-y-4">
                  <li><a href="#" className="text-primary hover:underline flex items-center gap-2">Syllabus (PDF)</a></li>
                  <li><a href="#" className="text-primary hover:underline flex items-center gap-2">Course Flowchart</a></li>
                  <li><a href="#" className="text-primary hover:underline flex items-center gap-2">Lab Manuals</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Faculty Section */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900">Department Faculty</h2>
            <p className="text-gray-500 mt-2">Meet the experts leading the {department.name} department.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {deptFaculty.map((member) => (
              <div key={member.id} className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all group border">
                <div className="h-64 overflow-hidden">
                  <img src={member.image} alt={member.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-6">
                  <h4 className="font-bold text-slate-900">{member.name}</h4>
                  <p className="text-primary text-sm font-semibold mb-2">{member.designation}</p>
                  <p className="text-xs text-gray-500">{member.education}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </PageTransition>
  );
};

export default DepartmentDetail;
