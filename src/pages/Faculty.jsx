import { useState } from 'react';
import PageTransition from '@/components/PageTransition';
import SEO from '@/components/SEO';
import { faculty, departments } from '@/data/mockData';
import { Search, Mail, Book, GraduationCap, Filter } from 'lucide-react';

const Faculty = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedDept, setSelectedDept] = useState('All');

  const filteredFaculty = faculty.filter((member) => {
    const matchesSearch = member.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         member.designation.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesDept = selectedDept === 'All' || member.department === selectedDept;
    return matchesSearch && matchesDept;
  });

  return (
    <PageTransition>
      <SEO title="Faculty Members" description="Meet the experienced educators at CMPI." />
      
      {/* Page Header */}
      <section className="bg-slate-900 py-20 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Faculty</h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Experienced engineers and academics committed to providing top-tier technical education.
          </p>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="py-8 bg-white border-b sticky top-16 z-30">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-4 justify-between items-center">
            <div className="relative w-full md:w-96">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input 
                type="text" 
                placeholder="Search by name or title..." 
                className="w-full pl-10 pr-4 py-2 rounded-lg border focus:ring-2 focus:ring-primary focus:border-transparent outline-none"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            
            <div className="flex items-center gap-2 w-full md:w-auto overflow-x-auto pb-2 md:pb-0">
              <Filter className="w-5 h-5 text-gray-400 shrink-0" />
              <button 
                onClick={() => setSelectedDept('All')}
                className={`px-4 py-2 rounded-full text-sm font-semibold whitespace-nowrap transition-colors ${selectedDept === 'All' ? 'bg-primary text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}
              >
                All Departments
              </button>
              {departments.map((dept) => (
                <button 
                  key={dept.id}
                  onClick={() => setSelectedDept(dept.name)}
                  className={`px-4 py-2 rounded-full text-sm font-semibold whitespace-nowrap transition-colors ${selectedDept === dept.name ? 'bg-primary text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}
                >
                  {dept.name}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Faculty Grid */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          {filteredFaculty.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {filteredFaculty.map((member) => (
                <div key={member.id} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group border">
                  <div className="h-72 overflow-hidden relative">
                    <img 
                      src={member.image} 
                      alt={member.name} 
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" 
                    />
                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                      <a href={`mailto:${member.email}`} className="text-white flex items-center gap-2 hover:text-secondary">
                        <Mail className="w-5 h-5" /> Send Email
                      </a>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-slate-900 mb-1">{member.name}</h3>
                    <p className="text-primary font-bold text-sm mb-4 uppercase tracking-wide">{member.designation}</p>
                    
                    <div className="space-y-3 pt-4 border-t">
                      <div className="flex items-start gap-3 text-sm text-gray-600">
                        <Book className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                        <span>{member.department}</span>
                      </div>
                      <div className="flex items-start gap-3 text-sm text-gray-600">
                        <GraduationCap className="w-4 h-4 text-secondary shrink-0 mt-0.5" />
                        <span>{member.education}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <div className="bg-gray-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Search className="w-10 h-10 text-gray-300" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900">No faculty members found</h3>
              <p className="text-gray-500 mt-2">Try adjusting your search or filter settings.</p>
            </div>
          )}
        </div>
      </section>

      {/* Join the Team CTA */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="bg-primary rounded-3xl p-12 text-center text-white relative overflow-hidden">
            <h2 className="text-3xl font-bold mb-6">Want to Join Our Teaching Team?</h2>
            <p className="text-xl opacity-90 max-w-2xl mx-auto mb-10">
              We are always looking for passionate engineers and educators to join our growing institute.
            </p>
            <a href="/contact" className="inline-block px-10 py-4 bg-secondary text-primary font-bold rounded-xl hover:bg-white transition-all">
              Check Career Opportunities
            </a>
            
            {/* Background elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-20 -mt-20 blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary/10 rounded-full -ml-20 -mb-20 blur-3xl"></div>
          </div>
        </div>
      </section>
    </PageTransition>
  );
};

export default Faculty;
