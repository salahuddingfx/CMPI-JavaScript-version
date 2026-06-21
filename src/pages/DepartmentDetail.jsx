import { useState, useEffect, useMemo } from 'react';
import { useParams, Link } from 'react-router-dom';
import PageTransition from '@/components/PageTransition';
import SEO from '@/components/SEO';
import { Monitor, Building2, Zap, Users, FlaskConical, Briefcase, GraduationCap, ArrowLeft, BookOpen } from 'lucide-react';
import NotFound from '@/pages/NotFound';
import { useInstituteContext } from '@/contexts/InstituteDataContext';
import { LoadingSkeleton } from '@/components/LoadingSkeleton';
import api from '@/services/api';

const iconMap = {
  Monitor: Monitor,
  Building2: Building2,
  Zap: Zap,
};

const SEM_ORDER = ["1st", "2nd", "3rd", "4th", "5th", "6th", "7th", "8th"];

const DepartmentDetail = () => {
  const { id } = useParams();
  const { data, loading, error } = useInstituteContext();
  const [openSem, setOpenSem] = useState("1st");
  const [subjects, setSubjects] = useState([]);
  const [subjectsLoading, setSubjectsLoading] = useState(true);

  const departments = data?.departments || [];
  const faculty = data?.faculty || [];

  // Find department by slug or ID
  const department = useMemo(() => {
    return departments.find((d) => d.slug === id || String(d.id) === id);
  }, [departments, id]);

  useEffect(() => {
    if (!department) return;
    setSubjectsLoading(true);
    api.get(`/departments/${department.slug}`)
      .then((res) => {
        setSubjects(res.data?.subjects ?? []);
      })
      .catch(() => {
        setSubjects([]);
      })
      .finally(() => {
        setSubjectsLoading(false);
      });
  }, [department]);

  if (loading) return <LoadingSkeleton />;
  if (error || !data) {
    return (
      <PageTransition>
        <div className="container mx-auto px-4 py-20">
          <div className="rounded-2xl border border-red-200 bg-red-50 p-6 text-center text-red-700">
            Unable to load department details. Please try again later.
          </div>
        </div>
      </PageTransition>
    );
  }

  if (!department) return <NotFound />;

  const Icon = iconMap[department.icon] || BookOpen;
  
  // Filter faculty members who belong to this department
  const deptFaculty = faculty.filter(f => f.department === department.title || f.department === department.name);

  // Group subjects by semester
  const groupedSubjects = {};
  SEM_ORDER.forEach((sem) => {
    groupedSubjects[sem] = subjects.filter((s) => s.semester === sem);
  });
  const availableSemesters = SEM_ORDER.filter((s) => (groupedSubjects[s]?.length ?? 0) > 0);

  // Parse arrays safely
  const objectives = Array.isArray(department.objectives) ? department.objectives : JSON.parse(department.objectives || '[]');
  const labs = Array.isArray(department.labs) ? department.labs : JSON.parse(department.labs || '[]');
  const achievements = Array.isArray(department.achievements) ? department.achievements : JSON.parse(department.achievements || '[]');
  const careerOpportunities = Array.isArray(department.career_opportunities) ? department.career_opportunities : JSON.parse(department.career_opportunities || '[]');

  return (
    <PageTransition>
      <SEO title={department.name || department.title} description={department.description} />
      
      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center bg-slate-900">
        <div className="absolute inset-0 z-0">
          <img src={department.image || 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&q=80&w=1200'} alt={department.name || department.title} className="w-full h-full object-cover opacity-30" />
          <div className="absolute inset-0 bg-slate-900/70" />
        </div>
        <div className="container mx-auto px-4 z-10">
          <Link to="/academics" className="text-white/60 hover:text-secondary mb-6 inline-flex items-center gap-2 transition-colors font-bold text-sm">
            <ArrowLeft className="w-4 h-4" /> Back to Academics
          </Link>
          <div className="flex items-center gap-4 mb-4">
            <div className="bg-secondary p-3 rounded-xl text-primary">
              <Icon className="w-8 h-8" />
            </div>
            <h1 className="text-3xl md:text-5xl font-black text-white">{department.name || department.title}</h1>
          </div>
          <p className="text-xl text-slate-300 max-w-2xl font-medium">{department.description}</p>
        </div>
      </section>

      {/* Overview & Quick Info */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-black mb-6 text-slate-900">Department Overview</h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                {department.overview}
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
                {labs.length > 0 && (
                  <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100">
                    <div className="flex items-center gap-3 mb-4 text-primary font-bold">
                      <FlaskConical className="w-6 h-6" />
                      <h3>Labs & Facilities</h3>
                    </div>
                    <ul className="space-y-3 font-semibold text-sm">
                      {labs.map((lab, i) => (
                        <li key={i} className="text-gray-600 flex items-center gap-2">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full" /> {lab}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                
                {careerOpportunities.length > 0 && (
                  <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100">
                    <div className="flex items-center gap-3 mb-4 text-primary font-bold">
                      <Briefcase className="w-6 h-6" />
                      <h3>Career Opportunities</h3>
                    </div>
                    <ul className="space-y-3 font-semibold text-sm">
                      {careerOpportunities.map((opp, i) => (
                        <li key={i} className="text-gray-600 flex items-center gap-2">
                          <div className="w-1.5 h-1.5 bg-secondary rounded-full" /> {opp}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>

            <div className="space-y-8">
              <div className="bg-primary text-white p-8 rounded-2xl shadow-lg">
                <h3 className="text-xl font-bold mb-6 border-b border-white/20 pb-4">Course Details</h3>
                <div className="space-y-4 font-semibold text-sm">
                  <div className="flex justify-between items-center">
                    <span className="opacity-80">Duration</span>
                    <span className="font-bold">{department.duration || '4 Years (8 Semesters)'}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="opacity-80">Total Seats</span>
                    <span className="font-bold">{department.seats || '100'}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="opacity-80">Head of Dept.</span>
                    <span className="font-bold">{department.headOfDept || department.head_of_dept || 'TBA'}</span>
                  </div>
                </div>
                <Link to="/admission" className="mt-8 block w-full bg-secondary text-primary text-center py-3.5 rounded-xl font-black hover:bg-white transition-colors">
                  Apply for Admission
                </Link>
              </div>

              <div className="bg-white border p-8 rounded-2xl shadow-sm">
                <h3 className="text-xl font-bold mb-6 text-slate-900 border-b pb-4">Downloads</h3>
                <ul className="space-y-4 font-semibold text-sm">
                  <li><Link to="/syllabus" className="text-primary hover:underline flex items-center gap-2">Syllabus Explorer</Link></li>
                  <li><Link to="/class-routine" className="text-primary hover:underline flex items-center gap-2">Class Routine</Link></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Syllabus Subjects Section */}
      {subjectsLoading ? (
        <section className="container mx-auto px-4 py-12">
          <div className="rounded-2xl border bg-card p-8 text-center text-muted-foreground">Loading curriculum...</div>
        </section>
      ) : availableSemesters.length > 0 ? (
        <section className="container mx-auto px-4 py-12 border-t">
          <h2 className="text-3xl font-black text-slate-900 mb-2">Subjects by Semester</h2>
          <p className="text-slate-500 mb-6">Select a semester tab below to view course codes and credit metrics.</p>
          <div className="flex flex-wrap gap-2 mb-6">
            {availableSemesters.map((sem) => (
              <button
                key={sem}
                type="button"
                onClick={() => setOpenSem(sem)}
                className={`px-4 py-2 rounded-xl text-sm font-bold transition-all border ${
                  openSem === sem
                    ? "bg-primary text-white border-primary shadow-sm shadow-primary/20"
                    : "bg-white text-muted-foreground border-slate-200 hover:bg-slate-50"
                }`}
              >
                {sem} Semester ({groupedSubjects[sem]?.length ?? 0})
              </button>
            ))}
          </div>

          {groupedSubjects[openSem] && (
            <div className="rounded-2xl border bg-white shadow-sm overflow-hidden">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-slate-50 border-b text-slate-500">
                    <th className="px-5 py-3.5 text-left text-xs font-bold uppercase tracking-wider">#</th>
                    <th className="px-5 py-3.5 text-left text-xs font-bold uppercase tracking-wider">Code</th>
                    <th className="px-5 py-3.5 text-left text-xs font-bold uppercase tracking-wider">Subject Name</th>
                    <th className="px-5 py-3.5 text-center text-xs font-bold uppercase tracking-wider">Credit</th>
                    <th className="px-5 py-3.5 text-center text-xs font-bold uppercase tracking-wider hidden sm:table-cell">Theory</th>
                    <th className="px-5 py-3.5 text-center text-xs font-bold uppercase tracking-wider hidden sm:table-cell">Practical</th>
                    <th className="px-5 py-3.5 text-center text-xs font-bold uppercase tracking-wider">Total</th>
                  </tr>
                </thead>
                <tbody className="divide-y font-semibold">
                  {groupedSubjects[openSem].map((sub, i) => (
                    <tr key={sub.id} className="hover:bg-slate-50/50">
                      <td className="px-5 py-3.5 text-slate-400">{i + 1}</td>
                      <td className="px-5 py-3.5 font-mono text-primary font-bold">{sub.subject_code}</td>
                      <td className="px-5 py-3.5 text-slate-800">{sub.subject_name}</td>
                      <td className="px-5 py-3.5 text-center">{sub.credit ?? "—"}</td>
                      <td className="px-5 py-3.5 text-center hidden sm:table-cell text-slate-500">{sub.theory_marks || 0}</td>
                      <td className="px-5 py-3.5 text-center hidden sm:table-cell text-slate-500">{sub.practical_marks || 0}</td>
                      <td className="px-5 py-3.5 text-center text-primary">{sub.total_marks || (sub.credit * 50) || "—"}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </section>
      ) : null}

      {/* Faculty Section */}
      {deptFaculty.length > 0 && (
        <section className="py-20 bg-slate-50 border-t">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-black text-slate-900">Department Faculty</h2>
              <p className="text-gray-500 mt-2">Meet the experts leading the {department.name || department.title} department.</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {deptFaculty.map((member) => (
                <div key={member.id} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all group border flex flex-col h-full">
                  <div className="h-64 overflow-hidden bg-slate-100">
                    <img src={member.photo || member.image || 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400'} alt={member.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  </div>
                  <div className="p-6 flex flex-col flex-grow">
                    <h4 className="font-bold text-slate-900">{member.name}</h4>
                    <p className="text-primary text-sm font-bold mb-2">{member.designation}</p>
                    <p className="text-xs text-gray-500 mt-auto pt-2 border-t font-semibold">{member.qualification}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Achievements CTA */}
      {achievements.length > 0 && (
        <section className="bg-white py-16 sm:py-20 lg:py-24 border-t">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="bg-slate-50 border p-8 sm:p-12 rounded-3xl">
              <h2 className="text-2xl font-black mb-6 text-slate-900 text-center">Department Achievements</h2>
              <ul className="space-y-4 font-semibold text-sm">
                {achievements.map((item, i) => (
                  <li key={i} className="flex gap-3 items-start">
                    <Users className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                    <p className="text-gray-700 leading-relaxed">{item}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      )}
    </PageTransition>
  );
};

export default DepartmentDetail;
