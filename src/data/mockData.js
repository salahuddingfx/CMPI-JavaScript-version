export const notices = [
  { id: 1, title: "Admission Open for Session 2026-27", date: "2026-06-15", category: "Admission" },
  { id: 2, title: "Upcoming Semester Final Examination Routine", date: "2026-06-10", category: "Exam" },
  { id: 3, title: "Summer Vacation Holidays Notice", date: "2026-06-05", category: "General" },
  { id: 4, title: "New Lab Equipment Arrival for CSE Dept", date: "2026-06-01", category: "Academic" },
  { id: 5, title: "National Science Olympiad Participation", date: "2026-05-28", category: "Academic" },
  { id: 6, title: "Scholarship Application Deadline", date: "2026-05-20", category: "Admission" },
  { id: 7, title: "Annual Sports Competition Schedule Released", date: "2026-05-15", category: "General" },
  { id: 8, title: "Semester Registration for Batch 2025-26", date: "2026-05-10", category: "Academic" },
];

export const events = [
  {
    id: 1,
    title: "Annual Sports Competition 2026",
    date: "2026-07-10",
    location: "Main Campus Ground",
    image: "https://images.unsplash.com/photo-1526676037777-05a232554f77?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: 2,
    title: "Tech Fest & Project Showcasing",
    date: "2026-08-15",
    location: "Auditorium",
    image: "https://images.unsplash.com/photo-1540575861501-7cf05a4b125a?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: 3,
    title: "Cultural Night 2026",
    date: "2026-09-05",
    location: "Campus Plaza",
    image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: 4,
    title: "Inter-Polytechnic Debate Competition",
    date: "2025-12-10",
    location: "Seminar Hall",
    image: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: 5,
    title: "Graduation Ceremony 2025",
    date: "2025-11-20",
    location: "Main Auditorium",
    image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: 6,
    title: "Blood Donation Camp",
    date: "2025-10-05",
    location: "Campus Courtyard",
    image: "https://images.unsplash.com/photo-1615461066841-6116e61059a6?auto=format&fit=crop&q=80&w=800",
  },
];

export const statistics = [
  { label: "Students", value: "2500+", icon: "Users" },
  { label: "Faculty Members", value: "120+", icon: "GraduationCap" },
  { label: "Departments", value: "3", icon: "BookOpen" },
  { label: "Labs", value: "25+", icon: "FlaskConical" },
];

export const departments = [
  {
    id: "computer-science",
    name: "Computer Science & Technology",
    description: "Empowering students with cutting-edge computing skills and software development expertise.",
    longDescription: "The Computer Science & Technology department at CMPI is dedicated to producing skilled IT professionals. Our curriculum covers software development, networking, database management, and artificial intelligence, ensuring students are ready for the modern digital economy.",
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=1200",
    icon: "Monitor",
    headOfDept: "Engr. Kamal Uddin",
    duration: "4 Years (8 Semesters)",
    seats: "100",
    labs: ["Advanced Programming Lab", "Network Administration Lab", "Database & Software Engineering Lab", "Hardware & Troubleshooting Lab"],
    opportunities: ["Software Engineer", "Web Developer", "System Administrator", "Database Administrator", "IT Consultant"],
  },
  {
    id: "civil",
    name: "Civil Technology",
    description: "Building the future infrastructure with precision engineering and sustainable design.",
    longDescription: "The Civil Technology department focuses on the design, construction, and maintenance of the physical and naturally built environment. Students gain expertise in structural engineering, transportation, and environmental management.",
    image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&q=80&w=1200",
    icon: "Building2",
    headOfDept: "Engr. Shafiqur Rahman",
    duration: "4 Years (8 Semesters)",
    seats: "100",
    labs: ["Surveying Lab", "Construction Materials Lab", "Hydraulics Lab", "Soil Mechanics Lab"],
    opportunities: ["Site Engineer", "Structural Designer", "Surveyor", "Estimator", "Project Manager"],
  },
  {
    id: "electrical",
    name: "Electrical Technology",
    description: "Powering the world through electrical systems, renewable energy, and automation.",
    longDescription: "Our Electrical Technology program prepares students to work with power systems, electronics, and control systems. We emphasize practical training in electrical installations, machine maintenance, and power generation.",
    image: "https://images.unsplash.com/photo-1581092334651-ddf26d9a1930?auto=format&fit=crop&q=80&w=1200",
    icon: "Zap",
    headOfDept: "Engr. Mostafa Ahmed",
    duration: "4 Years (8 Semesters)",
    seats: "100",
    labs: ["Electrical Machines Lab", "Power Electronics Lab", "Circuit Analysis Lab", "Industrial Automation Lab"],
    opportunities: ["Electrical Engineer", "Maintenance Engineer", "Power Plant Operator", "Control System Technician"],
  },
];

export const faculty = [
  {
    id: 1,
    name: "Engr. Kamal Uddin",
    designation: "Head of Department",
    department: "Computer Science & Technology",
    email: "kamal@cmpi.edu.bd",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=400",
    education: "B.Sc in CSE, M.Sc in IT",
  },
  {
    id: 2,
    name: "Engr. Shafiqur Rahman",
    designation: "Head of Department",
    department: "Civil Technology",
    email: "shafiq@cmpi.edu.bd",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=400",
    education: "B.Sc in Civil Engineering",
  },
  {
    id: 3,
    name: "Engr. Mostafa Ahmed",
    designation: "Head of Department",
    department: "Electrical Technology",
    email: "mostafa@cmpi.edu.bd",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400",
    education: "B.Sc in EEE",
  },
  {
    id: 4,
    name: "Ms. Rumana Akter",
    designation: "Lecturer",
    department: "Computer Science & Technology",
    email: "rumana@cmpi.edu.bd",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=400",
    education: "B.Sc in CSE",
  },
  {
    id: 5,
    name: "Engr. Sazzad Hossain",
    designation: "Senior Lecturer",
    department: "Computer Science & Technology",
    email: "sazzad@cmpi.edu.bd",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=400",
    education: "B.Sc in CSE, M.Sc in SE",
  },
  {
    id: 6,
    name: "Engr. Nasrin Sultana",
    designation: "Senior Lecturer",
    department: "Civil Technology",
    email: "nasrin@cmpi.edu.bd",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400",
    education: "B.Sc in Civil Engineering",
  },
  {
    id: 7,
    name: "Mr. Rahim Mia",
    designation: "Lecturer (Mathematics)",
    department: "General",
    email: "rahim@cmpi.edu.bd",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=400",
    education: "M.Sc in Mathematics",
  },
  {
    id: 8,
    name: "Ms. Farida Begum",
    designation: "Lecturer (English)",
    department: "General",
    email: "farida@cmpi.edu.bd",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=400",
    education: "M.A in English Literature",
  },
];

export const blogPosts = [
  {
    id: 1,
    title: "The Future of AI in Polytechnic Education",
    excerpt: "Exploring how artificial intelligence is reshaping technical training and what CMPI students can do to stay ahead.",
    author: "Dr. Ahmed Ullah",
    date: "June 12, 2026",
    category: "Technology",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: 2,
    title: "Preparing for Your First Engineering Internship",
    excerpt: "Key tips and tricks to land and excel in your first industry placement as a polytechnic student.",
    author: "Sarah Jasin",
    date: "June 08, 2026",
    category: "Career",
    image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: 3,
    title: "Top 10 Programming Languages for CST Students in 2026",
    excerpt: "A curated guide for Computer Science students on which languages to prioritize for the best career outcomes.",
    author: "Engr. Kamal Uddin",
    date: "May 30, 2026",
    category: "Technology",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: 4,
    title: "How CMPI's Industry Partnerships Benefit Students",
    excerpt: "An inside look at how our corporate partnerships translate to real job opportunities and practical training.",
    author: "Admin",
    date: "May 20, 2026",
    category: "Campus",
    image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80&w=800",
  },
];

// ── Gallery ───────────────────────────────────────────────────────────────────
export const galleryImages = [
  { id: 1, url: "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&q=80&w=800", caption: "Main Campus Building", category: "Campus" },
  { id: 2, url: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?auto=format&fit=crop&q=80&w=800", caption: "Institute Library", category: "Campus" },
  { id: 3, url: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=800", caption: "Computer Lab", category: "Labs" },
  { id: 4, url: "https://images.unsplash.com/photo-1581092334651-ddf26d9a1930?auto=format&fit=crop&q=80&w=800", caption: "Electrical Lab", category: "Labs" },
  { id: 5, url: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&q=80&w=800", caption: "Civil Engineering Lab", category: "Labs" },
  { id: 6, url: "https://images.unsplash.com/photo-1526676037777-05a232554f77?auto=format&fit=crop&q=80&w=800", caption: "Annual Sports Day", category: "Sports" },
  { id: 7, url: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&q=80&w=800", caption: "Inter-class Cricket", category: "Sports" },
  { id: 8, url: "https://images.unsplash.com/photo-1540575861501-7cf05a4b125a?auto=format&fit=crop&q=80&w=800", caption: "Tech Fest 2025", category: "Events" },
  { id: 9, url: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&q=80&w=800", caption: "Cultural Night", category: "Events" },
  { id: 10, url: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&q=80&w=800", caption: "Debate Competition", category: "Events" },
  { id: 11, url: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&q=80&w=800", caption: "Graduation Ceremony 2025", category: "Graduation" },
  { id: 12, url: "https://images.unsplash.com/photo-1627556704290-2b1f5853ff78?auto=format&fit=crop&q=80&w=800", caption: "Convocation Day", category: "Graduation" },
  { id: 13, url: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&q=80&w=800", caption: "Campus Entrance", category: "Campus" },
  { id: 14, url: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&q=80&w=800", caption: "Classroom Session", category: "Campus" },
];

// ── Academic Calendar ─────────────────────────────────────────────────────────
export const academicCalendar = [
  {
    month: "January 2026",
    events: [
      { title: "New Year Holiday", date: "January 1, 2026" },
      { title: "Semester 3 Classes Resume", date: "January 5, 2026" },
      { title: "Mid-term Exam (Semester 3)", date: "January 20-25, 2026" },
    ],
  },
  {
    month: "February 2026",
    events: [
      { title: "International Mother Language Day", date: "February 21, 2026" },
      { title: "Mid-term Result Publication", date: "February 28, 2026" },
    ],
  },
  {
    month: "March 2026",
    events: [
      { title: "Independence Day", date: "March 26, 2026" },
      { title: "Semester 3 Final Exam Starts", date: "March 15, 2026" },
    ],
  },
  {
    month: "April 2026",
    events: [
      { title: "Semester 4 Registration Deadline", date: "April 10, 2026" },
      { title: "Eid-ul-Fitr Vacation", date: "April 1-7, 2026" },
      { title: "Semester 4 Classes Begin", date: "April 20, 2026" },
    ],
  },
  {
    month: "June 2026",
    events: [
      { title: "Admission Open for Session 2026-27", date: "June 15, 2026" },
      { title: "Mid-term Exam (Semester 4)", date: "June 22-27, 2026" },
    ],
  },
  {
    month: "July–August 2026",
    events: [
      { title: "Annual Sports Competition", date: "July 10, 2026" },
      { title: "Tech Fest & Project Showcasing", date: "August 15, 2026" },
      { title: "Mid-term Result Publication", date: "August 25, 2026" },
    ],
  },
  {
    month: "November–December 2026",
    events: [
      { title: "Semester 4 Final Exam", date: "November 15, 2026" },
      { title: "Graduation Ceremony 2026", date: "December 5, 2026" },
      { title: "Winter Vacation", date: "December 25 – January 2, 2027" },
    ],
  },
];

// ── Downloads ─────────────────────────────────────────────────────────────────
export const downloads = [
  { name: "CST Semester 4 Syllabus", type: "PDF", size: "1.2 MB", filename: "cst-s4-syllabus.pdf", url: "#" },
  { name: "Civil Technology Syllabus", type: "PDF", size: "980 KB", filename: "civil-syllabus.pdf", url: "#" },
  { name: "Electrical Technology Syllabus", type: "PDF", size: "1.1 MB", filename: "et-syllabus.pdf", url: "#" },
  { name: "Admission Form 2026-27", type: "PDF", size: "450 KB", filename: "admission-form-2026.pdf", url: "#" },
  { name: "Class Routine (Semester 4)", type: "PDF", size: "320 KB", filename: "routine-s4-2026.pdf", url: "#" },
  { name: "Scholarship Application Form", type: "DOCX", size: "210 KB", filename: "scholarship-form.docx", url: "#" },
  { name: "Leave Application Form", type: "PDF", size: "150 KB", filename: "leave-form.pdf", url: "#" },
  { name: "Lab Manual — CST", type: "PDF", size: "3.4 MB", filename: "lab-manual-cst.pdf", url: "#" },
  { name: "Fee Structure 2026-27", type: "PDF", size: "280 KB", filename: "fee-structure-2026.pdf", url: "#" },
];

// ── Important Links ───────────────────────────────────────────────────────────
export const importantLinks = [
  { name: "BTEB Official Website", description: "Bangladesh Technical Education Board", url: "https://www.bteb.gov.bd" },
  { name: "BTEB Result Portal", description: "Check semester & annual examination results", url: "https://www.bteb.gov.bd" },
  { name: "Ministry of Education", description: "Official education ministry portal", url: "https://www.moedu.gov.bd" },
  { name: "Bangladesh National University", description: "BNU official portal", url: "https://www.nu.ac.bd" },
  { name: "Online Admission System", description: "Apply for admission online", url: "#" },
  { name: "Student Scholarship Portal", description: "Apply for government scholarships", url: "#" },
];

// ── Class Routine ─────────────────────────────────────────────────────────────
export const classRoutine = {
  CST: [
    { time: "08:00 – 09:00", Sun: "Mathematics", Mon: "Data Structures", Tue: "Networking", Wed: "Web Engineering", Thu: "DBMS" },
    { time: "09:00 – 10:00", Sun: "Data Structures", Mon: "Mathematics", Tue: "Web Engineering", Wed: "DBMS", Thu: "Networking" },
    { time: "10:15 – 11:15", Sun: "DBMS", Mon: "Networking", Tue: "Mathematics", Wed: "Data Structures", Thu: "Web Engineering" },
    { time: "11:15 – 12:15", Sun: "Web Eng. Lab", Mon: "Prog. Lab", Tue: "DBMS Lab", Wed: "—", Thu: "Prog. Lab" },
    { time: "13:00 – 14:00", Sun: "Prog. Lab", Mon: "Web Eng. Lab", Tue: "—", Wed: "Prog. Lab", Thu: "DBMS Lab" },
  ],
  Civil: [
    { time: "08:00 – 09:00", Sun: "Structural", Mon: "Surveying", Tue: "Hydraulics", Wed: "Soil Mechanics", Thu: "Drawing" },
    { time: "09:00 – 10:00", Sun: "Hydraulics", Mon: "Structural", Tue: "Surveying", Wed: "Drawing", Thu: "Soil Mechanics" },
    { time: "10:15 – 11:15", Sun: "Drawing", Mon: "Hydraulics", Tue: "Soil Mechanics", Wed: "Structural", Thu: "Surveying" },
    { time: "11:15 – 12:15", Sun: "Surveying Lab", Mon: "Mat. Lab", Tue: "—", Wed: "Hydraulics Lab", Thu: "—" },
    { time: "13:00 – 14:00", Sun: "—", Mon: "Surveying Lab", Tue: "Hydraulics Lab", Wed: "—", Thu: "Mat. Lab" },
  ],
  Electrical: [
    { time: "08:00 – 09:00", Sun: "Circuit Theory", Mon: "Power Systems", Tue: "Electronics", Wed: "Machines", Thu: "Mathematics" },
    { time: "09:00 – 10:00", Sun: "Machines", Mon: "Circuit Theory", Tue: "Power Systems", Wed: "Mathematics", Thu: "Electronics" },
    { time: "10:15 – 11:15", Sun: "Electronics", Mon: "Mathematics", Tue: "Machines", Wed: "Circuit Theory", Thu: "Power Systems" },
    { time: "11:15 – 12:15", Sun: "Elec. Lab", Mon: "Machines Lab", Tue: "—", Wed: "Elec. Lab", Thu: "—" },
    { time: "13:00 – 14:00", Sun: "—", Mon: "Elec. Lab", Tue: "Machines Lab", Wed: "—", Thu: "Elec. Lab" },
  ],
};
