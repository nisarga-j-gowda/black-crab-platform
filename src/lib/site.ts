import {
  BookText,
  ClipboardList,
  DraftingCompass,
  GraduationCap,
  MonitorSmartphone,
  NotebookPen,
  Presentation,
  Printer,
  Sparkles,
  FileText,
  Boxes,
  Truck,
  Building2,
  BriefcaseBusiness,
  School2,
  Scale,
  Cpu,
  Landmark,
  Calculator,
  MicVocal,
  FlaskConical,
  Palette,
  MapPinned,
  Globe2,
} from 'lucide-react';

export const SITE = {
  brandName: 'Black Crab',
  whatsappNumber: '91XXXXXXXXXX',
  whatsappDisplay: '+91 XXXXXXXXXX',
  siteUrl: 'https://blackcrab.tech',
};

export const businessStats = [
  { value: '100K+', label: 'Orders Delivered', description: '1 Lakh+ academic orders completed' },
  { value: 'Global', label: 'Student Reach', description: 'Students can reach us from anywhere' },
  { value: 'Manual + Digital', label: 'Academic Work', description: 'Mixed-format support for modern student needs' },
  { value: 'Doorstep', label: 'Pickup & Delivery', description: 'Selected locations for physical work' },
  { value: "School to Master's", label: 'Education Coverage', description: 'Academic support across levels' },
] as const;

export const serviceCoverage = [
  '10th',
  '12th',
  'Diploma',
  'BCA',
  'B.Com',
  'BBA',
  'B.Tech',
  'B.E',
  'MCA',
  'MBA',
  'M.Tech',
  'M.E',
  'LLB',
  'LLM',
  'Civil',
  'Mechanical',
  'ECE',
  'EEE',
  'CSE',
  'AI/ML',
  'Data Science',
  'Architecture',
  'Science',
  'Commerce',
  'Management',
] as const;

export const educationLevels = [
  { title: 'School', items: ['10th Standard', '12th Standard'] },
  { title: 'College', items: ['Diploma', 'PUC', 'BCA', 'B.Com', 'BBA', 'BA', 'B.Sc', 'B.E', 'B.Tech', 'B.Arch', 'B.Pharm', 'BDS', 'Nursing'] },
  { title: 'Postgraduate', items: ['MCA', 'M.Com', 'MBA', 'M.Tech', 'M.E', 'M.Sc', 'MA', 'LLM'] },
  { title: 'Law', items: ['LLB', 'LLM', 'Law Assignments', 'Law Projects', 'Case Study Documentation', 'Legal Research Projects'] },
] as const;

export const engineeringBranches = [
  'Computer Science Engineering',
  'Information Science',
  'Electronics & Communication Engineering',
  'Electrical & Electronics Engineering',
  'Mechanical Engineering',
  'Civil Engineering',
  'Chemical Engineering',
  'Aerospace Engineering',
  'Automobile Engineering',
  'Biomedical Engineering',
  'Biotechnology',
  'Industrial Engineering',
  'Mechatronics',
  'Robotics',
  'Artificial Intelligence & Machine Learning',
  'Data Science',
  'Information Technology',
  'Architecture',
] as const;

export const streams = [
  'Engineering',
  'Computer Science',
  'Commerce',
  'Management',
  'Law',
  'Science',
  'Arts',
  'Architecture',
  'Other',
] as const;

export const serviceCategories = [
  'Assignments',
  'Projects',
  'Reports',
  'Drawings',
  'Handwritten',
  'Software',
  'PPT',
  'Research',
  'Printing',
  'Lab',
] as const;

export const deliveryInformation = {
  global: 'Global digital support for projects, reports, PPTs, software projects and documentation.',
  local: 'Doorstep pickup and delivery is available in selected locations for physical academic work.',
} as const;

export function whatsappLink(message: string) {
  return `https://wa.me/${SITE.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

export function createWhatsAppMessage(serviceName: string, body: string) {
  return `Hi, I need help with ${serviceName}.\n\n${body}`;
}

export const whatsappMessages = {
  assignment:
    'Course:\nUniversity/College:\nSubject:\nNumber of pages:\nHandwritten/Printed:\nDeadline:\nRequirements:\n\nPlease share the price and details.',
  software:
    'Course:\nProject type:\nTechnology:\nProject topic:\nDeadline:\nRequirements:\n\nPlease share the details and pricing.',
  drawing:
    'Course:\nDrawing type:\nNumber of sheets:\nManual/AutoCAD:\nDeadline:\nRequirements:\n\nI can send the reference/material on WhatsApp.',
  doorstep:
    'Location:\nService required:\nPickup requirement:\nDeadline:\n\nPlease let me know availability and charges.',
  custom:
    'Please help me with my college requirement.\n\nCourse:\nService needed:\nDeadline:\nRequirements:\n\nPlease share the best option and pricing.',
};

export const services = [
  {
    title: 'Assignments',
    category: 'Assignments',
    stream: 'Other',
    level: 'College',
    icon: ClipboardList,
    ctaLabel: 'Get Assignment Help',
    description: 'College, university, handwritten and printed assignment help with formatting, diagrams and cover pages.',
    message: createWhatsAppMessage('an assignment', whatsappMessages.assignment),
    items: ['College Assignments', 'Semester Assignments', 'Handwritten Assignments', 'Assignment Formatting', 'Assignment Cover Pages', 'Q&A Writing'],
  },
  {
    title: 'Handwritten Work',
    category: 'Handwritten',
    stream: 'Other',
    level: 'School',
    icon: NotebookPen,
    ctaLabel: 'Discuss Handwritten Work',
    description: 'Neatly written records, notes, lab books, project reports and classwork with doorstep pickup where needed.',
    message: createWhatsAppMessage('handwritten work', whatsappMessages.custom),
    items: ['Handwritten Records', 'Lab Records', 'Notes Writing', 'Project Documentation', 'Seminar Notes', 'Handwritten Lab Manuals'],
  },
  {
    title: 'Engineering Drawings',
    category: 'Drawings',
    stream: 'Engineering',
    level: 'College',
    icon: DraftingCompass,
    ctaLabel: 'Send Drawing Requirement',
    description: 'Technical drawings, sketches, engineering graphics, CAD sheets, diagrams and visual presentation work.',
    message: createWhatsAppMessage('an engineering drawing', whatsappMessages.drawing),
    items: ['Machine Drawing', 'AutoCAD Drawings', 'Orthographic Views', 'Sectional Views', 'Circuit Diagrams', 'Technical Sketches'],
  },
  {
    title: 'Projects',
    category: 'Projects',
    stream: 'Other',
    level: 'UG',
    icon: Boxes,
    ctaLabel: 'Discuss Project',
    description: 'Mini, major and final-year projects across engineering, science, commerce, management and computer streams.',
    message: createWhatsAppMessage('a project', whatsappMessages.custom),
    items: ['Project Development', 'Project Documentation', 'Final Year Projects', 'BCA Projects', 'AI Projects', 'Web Development Projects'],
  },
  {
    title: 'Software Projects',
    category: 'Software',
    stream: 'Computer Science',
    level: 'UG',
    icon: MonitorSmartphone,
    ctaLabel: 'Discuss Software Project',
    description: 'Source code, setup, database, documentation, PPT and viva prep for modern academic software projects.',
    message: createWhatsAppMessage('a software project', whatsappMessages.software),
    items: ['React Projects', 'Next.js Projects', 'Python Projects', 'MERN Stack Projects', 'Mobile Applications', 'AI/ML Projects'],
  },
  {
    title: 'Reports & Documentation',
    category: 'Reports',
    stream: 'Other',
    level: 'PG',
    icon: FileText,
    ctaLabel: 'Get Report Help',
    description: 'Reports, SRS, abstracts, synopses, research documentation, formatting, printing and binding support.',
    message: createWhatsAppMessage('project report help', whatsappMessages.custom),
    items: ['Project Reports', 'SRS Documents', 'Literature Review', 'IEEE Formatting', 'Abstract Writing', 'Report Binding'],
  },
  {
    title: 'PPT & Presentations',
    category: 'PPT',
    stream: 'Other',
    level: 'UG',
    icon: Presentation,
    ctaLabel: 'Get PPT Help',
    description: 'Clean academic and project presentation decks for seminars, demos, viva, internships and research.',
    message: createWhatsAppMessage('a PPT or presentation', whatsappMessages.custom),
    items: ['College PPT', 'Seminar PPT', 'Final Year PPT', 'Viva PPT', 'Research Presentation', 'Project Demo Presentation'],
  },
  {
    title: 'Lab Records',
    category: 'Lab',
    stream: 'Science',
    level: 'College',
    icon: BookText,
    ctaLabel: 'Get Lab Record Help',
    description: 'Practical records, observation books, experiment writeups, diagrams and viva support.',
    message: createWhatsAppMessage('lab record help', whatsappMessages.custom),
    items: ['Practical Records', 'Observation Books', 'Lab Manuals', 'Experiment Writing', 'Programming Lab Records', 'Science Lab Records'],
  },
  {
    title: 'Research & Thesis',
    category: 'Research',
    stream: 'Other',
    level: 'PG',
    icon: GraduationCap,
    ctaLabel: 'Discuss Research Work',
    description: 'Academic documentation support for research papers, thesis formatting, citations, references and structure.',
    message: createWhatsAppMessage('research or thesis formatting', whatsappMessages.custom),
    items: ['Research Papers', 'Thesis Formatting', 'Dissertation Formatting', 'APA Formatting', 'IEEE Formatting', 'Plagiarism Check Assistance'],
  },
  {
    title: 'Design & Diagrams',
    category: 'Drawings',
    stream: 'Other',
    level: 'UG',
    icon: Sparkles,
    ctaLabel: 'Explore Design Help',
    description: 'Charts, graphs, posters, infographics, flowcharts, concept maps, cover pages and academic visuals.',
    message: createWhatsAppMessage('design or diagram work', whatsappMessages.custom),
    items: ['Posters', 'Infographics', 'Flowcharts', 'Mind Maps', 'Cover Pages', 'Certificate Pages'],
  },
  {
    title: 'Printing & Binding',
    category: 'Printing',
    stream: 'Other',
    level: 'College',
    icon: Printer,
    ctaLabel: 'Get Printing Help',
    description: 'Printing, binding, lamination and support for physical academic submissions and project sets.',
    message: createWhatsAppMessage('printing or binding', whatsappMessages.custom),
    items: ['Color Printing', 'Spiral Binding', 'Project Binding', 'Report Printing', 'Lamination', 'Document Printing'],
  },
  {
    title: 'Doorstep Pickup & Delivery',
    category: 'Printing',
    stream: 'Other',
    level: 'Other',
    icon: Truck,
    ctaLabel: 'Arrange Pickup',
    description: 'Selected locations only. Ask on WhatsApp for pickup and delivery availability for physical work.',
    message: createWhatsAppMessage('doorstep pickup and delivery', whatsappMessages.doorstep),
    items: ['Pickup', 'Delivery', 'Handwritten Work', 'Physical Documents', 'Records', 'Reports'],
  },
] as const;

export const trustIndicators = [
  'Manual & Digital Work',
  'Doorstep Pickup & Delivery',
  'Global Reach',
  'Multiple Academic Streams',
  'WhatsApp-Based Support',
  'Custom Requirements',
] as const;

export const broadServiceGroups = [
  {
    title: 'School & Pre-University Students',
    icon: School2,
    copy: 'Academic support for 10th, 12th and PUC students with assignments, projects, charts, models, presentations and handwritten work.',
    items: ['10th', '12th', 'PUC', 'School Assignments', 'Projects', 'Charts', 'Diagrams', 'Handwritten Work', 'Record Work'],
  },
  {
    title: 'Engineering Projects & Academic Work',
    icon: Building2,
    copy: 'Assignments, projects, reports, drawings and documentation for engineering branches and technical courses.',
    items: [...engineeringBranches.slice(0, 10)],
  },
  {
    title: 'Commerce & Management',
    icon: BriefcaseBusiness,
    copy: 'Assignments, case studies, projects, reports and presentations for commerce and management courses.',
    items: ['B.Com', 'M.Com', 'BBA', 'MBA', 'Finance', 'Marketing', 'Business Analytics', 'Accounting', 'Economics'],
  },
  {
    title: 'Computer Science & IT Projects',
    icon: Cpu,
    copy: 'Coding projects, websites, apps, software projects, databases and documentation for CS and IT students.',
    items: ['BCA', 'MCA', 'B.Tech CSE', 'B.Tech IT', 'AI & ML', 'Data Science', 'Cybersecurity', 'Web Development', 'Mobile Development'],
  },
  {
    title: 'Civil Engineering',
    icon: Landmark,
    copy: 'Civil projects, building plans, structural drawings, estimation, reports and technical documentation.',
    items: ['Building Plans', 'Structural Drawings', 'AutoCAD', 'Surveying', 'Estimation', 'Site Plans', 'Floor Plans', 'Lab Records'],
  },
  {
    title: 'Mechanical Engineering',
    icon: DraftingCompass,
    copy: 'Mechanical projects, machine drawing, CAD drawings, 3D models, records and technical reports.',
    items: ['Machine Drawing', 'Engineering Graphics', 'CAD Drawings', 'SolidWorks', '3D Models', 'Workshop Records', 'Project Documentation'],
  },
  {
    title: 'Electronics / EEE / ECE',
    icon: Calculator,
    copy: 'Circuit diagrams, embedded systems, IoT, microcontrollers and academic projects across electronics streams.',
    items: ['Circuit Diagrams', 'Embedded Systems', 'Arduino', 'Raspberry Pi', 'IoT', 'Digital Electronics', 'Power Electronics'],
  },
  {
    title: 'Law Student Academic Assistance',
    icon: Scale,
    copy: 'Academic assistance for law students only, with research documentation, case analysis and presentations.',
    items: ['LLB', 'LLM', 'Law Assignments', 'Case Studies', 'Research Documentation', 'Seminar Reports'],
  },
  {
    title: 'Master\'s & Postgraduate Academic Work',
    icon: GraduationCap,
    copy: 'Dissertations, thesis formatting, research papers, presentations and viva material for postgraduate programs.',
    items: ['MCA', 'MBA', 'M.Tech', 'M.E', 'M.Com', 'M.Sc', 'MA', 'LLM'],
  },
  {
    title: 'Global Digital Support',
    icon: Globe2,
    copy: 'Digital academic support available from anywhere for reports, software projects, PPTs and documentation.',
    items: ['Reports', 'Software Projects', 'PPTs', 'Documentation', 'Research', 'Project Files'],
  },
  {
    title: 'Doorstep Pickup & Delivery',
    icon: MapPinned,
    copy: 'Selected locations only for pickup and delivery of handwritten and physical academic work.',
    items: ['Pickup', 'Delivery', 'Assignments', 'Records', 'Reports', 'Printed Material'],
  },
] as const;
