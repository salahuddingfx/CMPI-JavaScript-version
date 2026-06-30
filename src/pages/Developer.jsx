import { SEO } from "@/components/SEO";
import { PageTransition } from "@/components/PageTransition";
import { 
  Github, Globe, Linkedin, Facebook, Instagram, 
  ArrowUpRight, Sparkles, Terminal, Layers, Briefcase, Award 
} from 'lucide-react';

const techStack = [
  "React",
  "TypeScript",
  "Node.js",
  "Next.js",
  "Tailwind CSS",
  "Framer Motion",
  "Laravel",
  "PHP",
  "MySQL",
  "PostgreSQL",
  "Docker",
  "Git",
  "Figma",
  "Adobe XD",
];

const projects = [
  {
    title: "CMPI Website",
    description:
      "Full-stack institutional website with admin panel, student dashboard, admission system, and real-time content management.",
    tech: ["React", "TypeScript", "Laravel", "MySQL", "Tailwind CSS"],
    link: "https://www.cmpi.edu.bd",
    status: "Live",
  },
  {
    title: "Nextora Studio",
    description:
      "Digital agency website showcasing services, portfolio, and team. Built with modern web technologies.",
    tech: ["React", "Next.js", "Tailwind CSS"],
    link: "https://nextorastudio.tech",
    status: "Live",
  },
  {
    title: "BTEB Results Board",
    description:
      "Board of Technical Education Bangladesh results management system with PDF import and Google Drive integration.",
    tech: ["Laravel", "PHP", "MySQL"],
    link: "#",
    status: "Internal",
  },
];

const timeline = [
  {
    year: "2024",
    title: "Started Development",
    description:
      "Began building the CMPI website from scratch with a vision for modern technical education.",
  },
  {
    year: "2025",
    title: "Admin Panel Launch",
    description:
      "Deployed the admin dashboard with full CRUD operations for notices, events, blogs, and faculty.",
  },
  {
    year: "2025",
    title: "Student Portal",
    description:
      "Built the student dashboard with course management, results, bills, and webmail integration.",
  },
  {
    year: "2026",
    title: "Admission System",
    description:
      "Launched online admission with automated account creation and email notifications.",
  },
];

const socialLinks = [
  {
    label: "GitHub",
    href: "https://github.com/salahuddingfx",
    icon: <Github className="w-4 h-4" />
  },
  {
    label: "Portfolio",
    href: "https://salahuddin.codes",
    icon: <Globe className="w-4 h-4" />
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/salahuddingfx",
    icon: <Linkedin className="w-4 h-4" />
  },
  {
    label: "Facebook",
    href: "https://facebook.com/salahuddingfx",
    icon: <Facebook className="w-4 h-4" />
  },
  {
    label: "Instagram",
    href: "https://instagram.com/salahuddingfx",
    icon: <Instagram className="w-4 h-4" />
  },
];

export function Developer() {
  return (
    <PageTransition className="container py-24 select-none">
      <SEO
        title="Developer Info"
        description="Meet the developer behind the CMPI website — Salah Uddin Kader, creative full-stack engineer and founder of Nextora Studio."
      />

      <div className="mx-auto max-w-5xl space-y-16">
        
        {/* Main Hero Header - Stark Brutalist Title */}
        <div className="border-[3px] border-slate-900 dark:border-white bg-[#facc15] text-slate-900 p-6 md:p-10 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] dark:shadow-[6px_6px_0px_0px_rgba(255,255,255,1)]">
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-slate-900 animate-ping" />
            <span className="text-[10px] font-black uppercase tracking-widest font-mono">system developer node</span>
          </div>
          <h1 className="text-4xl md:text-7xl font-black uppercase tracking-tighter mt-4 leading-none select-none">
            Salah Uddin Kader
          </h1>
          <p className="text-sm md:text-lg font-bold tracking-tight mt-2 flex items-center gap-1.5 uppercase">
            Creative Full-Stack Developer &amp; UI/UX Designer <Sparkles className="w-4 h-4 shrink-0" />
          </p>
        </div>

        {/* Profile Card Section */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          
          {/* Avatar Area */}
          <div className="md:col-span-4 border-[3px] border-slate-900 dark:border-white bg-white dark:bg-slate-950 p-4 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] dark:shadow-[6px_6px_0px_0px_rgba(255,255,255,1)]">
            <div className="relative aspect-square border-2 border-slate-900 dark:border-white overflow-hidden bg-slate-100 dark:bg-slate-900 group">
              <img
                src="https://salahuddin.codes/CV-Images.png"
                alt="Salah Uddin Kader"
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-300"
              />
              <div className="absolute top-2 left-2 bg-[#22c55e] text-black text-[9px] font-black uppercase px-2 py-0.5 border border-black shadow-[2px_2px_0px_#000]">
                Live Portfolio
              </div>
            </div>
            <a 
              href="https://salahuddin.codes" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="mt-4 w-full flex items-center justify-center gap-2 bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-black py-2.5 text-xs uppercase tracking-wider border-2 border-black hover:bg-[#facc15] hover:text-black dark:hover:bg-[#facc15] dark:hover:text-black hover:translate-x-[-1px] hover:translate-y-[-1px] hover:shadow-[3px_3px_0px_#000] transition-all"
            >
              salahuddin.codes <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>

          {/* About / Credentials */}
          <div className="md:col-span-8 border-[3px] border-slate-900 dark:border-white bg-white dark:bg-slate-950 p-6 md:p-8 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] dark:shadow-[6px_6px_0px_0px_rgba(255,255,255,1)] space-y-6">
            <div>
              <div className="inline-flex items-center gap-1.5 bg-[#22c55e] text-black text-[10px] font-black uppercase px-2.5 py-1 border-2 border-black shadow-[2px_2px_0px_rgba(0,0,0,1)]">
                <Terminal className="w-3.5 h-3.5" /> open to work
              </div>
              <h2 className="text-xl md:text-2xl font-black uppercase tracking-tight mt-4">About SAKA CHOWDHURY</h2>
              <p className="mt-3 text-xs md:text-sm font-medium text-slate-500 dark:text-slate-400 leading-relaxed">
                I am a Full Stack AI Engineer and Creative Developer based in Cox's Bazar, Bangladesh, specializing in secure full-stack architecture, relational database design (with protection against SQL Injection and other exploits), and custom LLM model integrations.
              </p>
              <p className="mt-2 text-xs md:text-sm font-medium text-slate-500 dark:text-slate-400 leading-relaxed">
                Currently running <span className="font-extrabold text-slate-900 dark:text-white">Nextora Studio</span>, a creative agency focused on building innovative products and empowering businesses through technology.
              </p>
            </div>

            <div className="border-t-[3px] border-slate-900 dark:border-slate-800 pt-6">
              <h3 className="text-xs font-black uppercase tracking-wider text-slate-400 mb-3">Connect Nodes</h3>
              <div className="flex flex-wrap gap-2.5">
                {socialLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 border-2 border-slate-900 dark:border-slate-800 bg-slate-50 dark:bg-slate-900 px-3.5 py-2 text-xs font-black text-slate-700 dark:text-slate-300 hover:bg-[#facc15] hover:text-black dark:hover:bg-[#facc15] dark:hover:text-black hover:translate-x-[-1.5px] hover:translate-y-[-1.5px] hover:shadow-[3px_3px_0px_#000] dark:hover:shadow-[3px_3px_0px_#fff] transition-all"
                  >
                    {link.icon}
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
          </div>

        </div>

        {/* Tech Stack Grid */}
        <div className="border-[3px] border-slate-900 dark:border-white bg-white dark:bg-slate-950 p-6 md:p-8 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] dark:shadow-[6px_6px_0px_0px_rgba(255,255,255,1)]">
          <h3 className="text-lg font-black uppercase tracking-tight flex items-center gap-2">
            <Layers className="w-5 h-5 text-primary" /> Tech Stack Stack
          </h3>
          <div className="mt-6 flex flex-wrap gap-2.5">
            {techStack.map((tech) => (
              <span
                key={tech}
                className="bg-slate-50 dark:bg-slate-900 text-slate-700 dark:text-slate-350 px-3.5 py-1.5 text-xs font-bold border-2 border-slate-900 dark:border-slate-800 shadow-[2.5px_2.5px_0px_rgba(0,0,0,1)] dark:shadow-[2.5px_2.5px_0px_rgba(255,255,255,1)] hover:bg-[#facc15] hover:text-black dark:hover:bg-[#facc15] dark:hover:text-black transition-colors"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Featured Projects Grid */}
        <div className="border-[3px] border-slate-900 dark:border-white bg-white dark:bg-slate-950 p-6 md:p-8 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] dark:shadow-[6px_6px_0px_0px_rgba(255,255,255,1)]">
          <h3 className="text-lg font-black uppercase tracking-tight flex items-center gap-2 mb-6">
            <Briefcase className="w-5 h-5 text-primary" /> Featured Works
          </h3>
          
          <div className="grid gap-6 md:grid-cols-3">
            {projects.map((project) => (
              <div
                key={project.title}
                className="border-2 border-slate-900 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/50 p-5 flex flex-col justify-between hover:translate-y-[-2px] hover:shadow-[4px_4px_0px_#000] dark:hover:shadow-[4px_4px_0px_#fff] transition-all"
              >
                <div>
                  <div className="flex items-center justify-between border-b-2 border-slate-900 dark:border-slate-850 pb-2.5 mb-3.5">
                    <h4 className="font-black text-xs md:text-sm uppercase tracking-tight text-slate-900 dark:text-white">{project.title}</h4>
                    <span
                      className={`text-[9px] font-black uppercase px-2 py-0.5 border border-black shadow-[1.5px_1.5px_0px_#000] ${
                        project.status === "Live" ? "bg-[#22c55e] text-black" : "bg-[#facc15] text-black"
                      }`}
                    >
                      {project.status}
                    </span>
                  </div>
                  <p className="text-xs font-bold text-slate-500 dark:text-slate-400 leading-relaxed line-clamp-4">
                    {project.description}
                  </p>
                </div>
                
                <div className="mt-5 pt-3.5 border-t border-slate-200 dark:border-slate-800">
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="bg-slate-200/50 dark:bg-slate-800 text-slate-600 dark:text-slate-350 px-2 py-0.5 text-[9px] font-black uppercase border border-slate-900/10 dark:border-white/5"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  {project.link !== "#" && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-[11px] font-black text-slate-900 dark:text-white hover:text-primary dark:hover:text-primary transition-colors uppercase tracking-wider"
                    >
                      Inspect Source <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Development Timeline */}
        <div className="border-[3px] border-slate-900 dark:border-white bg-white dark:bg-slate-950 p-6 md:p-8 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] dark:shadow-[6px_6px_0px_0px_rgba(255,255,255,1)]">
          <h3 className="text-lg font-black uppercase tracking-tight flex items-center gap-2 mb-8">
            <Award className="w-5 h-5 text-primary" /> Project Milestones
          </h3>
          
          <div className="relative border-l-[3px] border-slate-900 dark:border-white ml-3 md:ml-6 space-y-8">
            {timeline.map((item, i) => (
              <div key={i} className="relative pl-6 md:pl-10 group">
                <div className="absolute -left-[9.5px] top-1.5 h-4 w-4 rounded-full border-[3px] border-slate-900 dark:border-white bg-[#facc15] shadow-[2.5px_2.5px_0px_rgba(0,0,0,1)]" />
                <span className="bg-slate-900 text-[#facc15] text-[10px] font-mono font-black uppercase px-2.5 py-0.5 border border-slate-900">
                  {item.year}
                </span>
                <h4 className="mt-2 text-sm font-black uppercase tracking-tight text-slate-900 dark:text-white">
                  {item.title}
                </h4>
                <p className="mt-1 text-xs font-bold text-slate-500 dark:text-slate-400 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </PageTransition>
  );
}
