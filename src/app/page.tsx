import Link from 'next/link';
import Image from 'next/image';
import {
  ArrowRight,
  CheckCircle2,
  ChevronRight,
  Clock3,
  Globe2,
  MapPinned,
  MessageCircle,
  ShieldCheck,
  Sparkles,
  Users,
} from 'lucide-react';
import { Navbar } from '@/components/navbar';
import { BlackCrabVideo } from '@/components/blackcrab-video';
import { ServiceExplorer } from '@/components/service-explorer';
import { StatsStrip } from '@/components/stats-strip';
import { WhatsAppButton } from '@/components/whatsapp-button';
import {
  SITE,
  broadServiceGroups,
  createWhatsAppMessage,
  deliveryInformation,
  educationLevels,
  engineeringBranches,
  serviceCoverage,
  streams,
  trustIndicators,
  whatsappLink,
  whatsappMessages,
  services,
} from '@/lib/site';

const marqueeItems = [...serviceCoverage, ...streams, 'Assignments', 'Projects', 'Reports', 'Drawings', 'Printing', 'Research'];
const featuredServices = services;

function SectionTitle({
  eyebrow,
  title,
  description,
  tone = 'light',
}: {
  eyebrow: string;
  title: string;
  description: string;
  tone?: 'light' | 'dark';
}) {
  const eyebrowClass = tone === 'dark' ? 'text-brand-200' : 'text-brand-700';
  const titleClass = tone === 'dark' ? 'text-white' : 'text-slate-950';
  const descriptionClass = tone === 'dark' ? 'text-slate-300' : 'text-slate-600';

  return (
    <div className="mx-auto max-w-3xl text-center">
      <p className={`text-sm font-semibold uppercase tracking-[0.25em] ${eyebrowClass}`}>{eyebrow}</p>
      <h2 className={`mt-3 text-3xl font-black tracking-tight md:text-5xl ${titleClass}`}>{title}</h2>
      <p className={`mt-4 text-base leading-7 md:text-lg ${descriptionClass}`}>{description}</p>
    </div>
  );
}

export default function HomePage() {
  return (
    <main id="home" className="overflow-x-hidden pb-28 md:pb-0">
      <Navbar />

      <section className="bg-hero">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 py-12 lg:grid-cols-[1.05fr_0.95fr] lg:px-8 lg:py-20">
          <div className="max-w-3xl">
            <p className="inline-flex rounded-full border border-brand-200 bg-white/95 px-4 py-2 text-sm font-semibold text-brand-700 shadow-sm">
              Academic Support • Project Development • Digital & Doorstep Services
            </p>
            <h1 className="mt-6 max-w-2xl text-4xl font-black tracking-tight text-slate-950 sm:text-5xl md:text-6xl">
              Your Academic Work. Simplified.
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-600 md:text-xl">
              From assignments and handwritten work to software projects, reports, presentations and final-year projects — get the academic support you need, all in one place.
            </p>
            <p className="mt-4 text-sm font-semibold text-slate-700">Trusted student support • 100K+ orders delivered</p>
            <div className="mt-7 flex flex-wrap gap-4">
              <WhatsAppButton
                label="Get Help on WhatsApp"
                message={createWhatsAppMessage(
                  'a general academic requirement',
                  'I found your website and would like to know about your academic services. I have a requirement and would like to discuss it.',
                )}
              />
              <Link
                href="#services"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-900 transition hover:border-slate-300 hover:bg-slate-50"
              >
                Explore Services <ChevronRight className="h-4 w-4" />
              </Link>
            </div>
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {['School to Master\'s Level', 'Manual & Digital Work', 'Selected-Location Doorstep Service', 'WhatsApp-First Support'].map((item) => (
                <div key={item} className="flex items-center gap-3 rounded-2xl border border-white/70 bg-white/90 p-4 shadow-sm">
                  <CheckCircle2 className="h-5 w-5 text-brand-600" />
                  <span className="text-sm font-semibold text-slate-800">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 -z-10 rounded-[2rem] bg-brand-100/60 blur-3xl" />
            <BlackCrabVideo />
          </div>
        </div>

        <div className="mx-auto mt-6 grid max-w-7xl gap-4 px-4 lg:hidden lg:px-8">
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-3xl border border-brand-100 bg-brand-50 p-5 shadow-sm">
              <Globe2 className="h-7 w-7 text-brand-700" />
              <p className="mt-4 text-lg font-bold">Global Digital Support</p>
              <p className="mt-2 text-sm text-slate-600">{deliveryInformation.global}</p>
            </div>
            <div className="rounded-3xl border border-orange-100 bg-orange-50 p-5 shadow-sm">
              <MapPinned className="h-7 w-7 text-orange-600" />
              <p className="mt-4 text-lg font-bold">Doorstep Pickup & Delivery</p>
              <p className="mt-2 text-sm text-slate-600">{deliveryInformation.local}</p>
            </div>
          </div>
        </div>
      </section>

      <StatsStrip />

      <section className="mx-auto max-w-7xl px-4 py-8 lg:px-8">
        <div className="overflow-hidden rounded-[2rem] border border-[var(--border)] bg-white py-4 shadow-sm">
          <div className="marquee-track whitespace-nowrap text-sm font-semibold text-slate-700">
            {marqueeItems.map((item, index) => (
              <span key={`${item}-${index}`} className="mx-5 inline-flex items-center gap-5">
                {item}
                <span className="text-brand-300">|</span>
              </span>
            ))}
          </div>
        </div>
      </section>

      <section id="services" className="mx-auto max-w-7xl px-4 py-10 lg:px-8 scroll-mt-24">
        <SectionTitle
          eyebrow="Services"
          title="Academic support across the work you do most"
          description="Assignments, handwritten work, engineering drawings, projects and documentation — all supported in one streamlined process."
        />

        <div className="mt-10 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {featuredServices.map((service) => {
            const Icon = service.icon;
            return (
              <article
                key={service.title}
                className="group flex h-full flex-col rounded-[2rem] border border-[var(--border)] bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-brand-200 hover:shadow-lg"
              >
                <div className="flex items-center justify-between gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-50 text-brand-700">
                    <Icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <span className="rounded-full bg-slate-100 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-600">
                    {service.category}
                  </span>
                </div>
                <h3 className="mt-5 text-xl font-bold text-slate-950">{service.title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">{service.description}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {service.items.slice(0, 3).map((item) => (
                    <span key={item} className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-700">
                      {item}
                    </span>
                  ))}
                </div>
                <Link
                  href={whatsappLink(service.message || createWhatsAppMessage(service.title, whatsappMessages.custom))}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-auto inline-flex items-center gap-2 pt-6 text-sm font-semibold text-brand-700 transition group-hover:text-brand-800"
                >
                  {service.ctaLabel || 'Get Help'} <ArrowRight className="h-4 w-4" />
                </Link>
              </article>
            );
          })}
        </div>
      </section>

      <section id="courses" className="mx-auto max-w-7xl px-4 py-10 lg:px-8 scroll-mt-24">
        <SectionTitle
          eyebrow="Courses & Streams"
          title="From school to postgraduate support"
          description="Browse broad course levels, branches and academic tracks. If your program is not listed, we can still discuss it on WhatsApp."
        />
        <div className="mt-8 grid gap-5 md:grid-cols-2">
          {educationLevels.map((group) => (
            <div key={group.title} className="rounded-[2rem] border border-[var(--border)] bg-white p-8 shadow-sm">
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-brand-700">{group.title}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span key={item} className="rounded-full bg-slate-100 px-3 py-1 text-sm font-medium text-slate-700">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="projects" className="mx-auto max-w-7xl px-4 py-10 lg:px-8 scroll-mt-24">
        <SectionTitle
          eyebrow="Projects"
          title="Project support across major academic streams"
          description="Academic projects, software projects, mini projects and final-year work are all covered with a professional, student-friendly approach."
        />
        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {broadServiceGroups.map((group) => (
            <article key={group.title} className="rounded-[2rem] border border-[var(--border)] bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-50 text-brand-700">
                <group.icon className="h-6 w-6" aria-hidden="true" />
              </div>
              <h3 className="mt-4 text-xl font-bold">{group.title}</h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">{group.copy}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span key={item} className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-700">
                    {item}
                  </span>
                ))}
              </div>
              <Link
                href={whatsappLink(createWhatsAppMessage('a project discussion', whatsappMessages.custom))}
                target="_blank"
                rel="noreferrer"
                className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-brand-700"
              >
                Discuss Your Project <ArrowRight className="h-4 w-4" />
              </Link>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-10 lg:px-8">
        <SectionTitle
          eyebrow="Trusted Reach"
          title="1 Lakh+ Orders Delivered"
          description="Students come to us for assignments, projects, reports, drawings, software work and academic documentation across different courses and education levels."
        />
        <div className="mt-8 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="relative overflow-hidden rounded-[2rem] bg-[radial-gradient(circle_at_top_left,rgba(45,212,191,0.18),transparent_30%),radial-gradient(circle_at_85%_15%,rgba(59,130,246,0.18),transparent_26%),linear-gradient(180deg,#020617_0%,#040a18_100%)] p-8 text-white shadow-glow">
            <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-brand-400/20 blur-3xl" />
            <div className="absolute -bottom-12 left-16 h-32 w-32 rounded-full bg-orange-400/10 blur-3xl" />
            <div className="relative flex h-full flex-col justify-between gap-8">
              <div className="flex flex-wrap items-center gap-3">
                <span className="rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.22em] text-brand-100">
                  Trusted Reach
                </span>
                <span className="rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs font-semibold text-slate-200">
                  1 Lakh+ academic orders completed
                </span>
              </div>
              <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr] lg:items-end">
                <div>
                  <p className="text-6xl font-black leading-none md:text-8xl">100K+</p>
                  <p className="mt-4 text-2xl font-semibold tracking-tight">Orders Delivered</p>
                  <p className="mt-3 max-w-md text-sm leading-6 text-slate-300">
                    A live snapshot of the scale behind our manual and digital academic support.
                  </p>
                </div>
                <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
                  {['Assignments', 'Projects', 'Reports', 'Drawings', 'PPTs', 'Research'].map((item, index) => (
                    <div
                      key={item}
                      className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/10 px-4 py-3 backdrop-blur"
                    >
                      <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10 text-sm font-black text-brand-100">
                        0{index + 1}
                      </span>
                      <span className="text-sm font-semibold text-slate-100">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="grid gap-3 sm:grid-cols-3">
                {['Manual & Digital Work', 'Doorstep Pickup & Delivery', 'Global Reach'].map((item) => (
                  <div key={item} className="rounded-2xl border border-white/10 bg-white/10 px-4 py-3 text-sm font-semibold text-slate-100 backdrop-blur">
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="rounded-[2rem] border border-[var(--border)] bg-white p-8 shadow-sm">
            <div className="grid gap-3 sm:grid-cols-2">
              {trustIndicators.map((item) => (
                <div key={item} className="flex items-center gap-3 rounded-2xl bg-slate-50 p-4">
                  <CheckCircle2 className="h-4 w-4 text-brand-600" />
                  <span className="text-sm font-medium text-slate-700">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-10 lg:px-8">
        <SectionTitle
          eyebrow="Why Black Crab"
          title="A smart academic support partner for modern students"
          description="From the first message to the final submission, we focus on clarity, quality and student-friendly support."
        />
        <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {[
            { title: 'Experienced Academic Support', desc: 'Support across assignments, projects, reports and technical work with a student-first process.', icon: ShieldCheck },
            { title: 'Customized Solutions', desc: 'Requirements are discussed individually, tailored to your course, topic and deadline.', icon: Sparkles },
            { title: 'On-Time Delivery', desc: 'Clear communication and turnaround planning help students stay on schedule.', icon: Clock3 },
            { title: 'Multiple Academic Disciplines', desc: 'Support spans school, college, university and postgraduate academic requirements.', icon: Users },
            { title: 'Digital Support', desc: 'Remote support for software, project files, documentation and presentation content.', icon: Globe2 },
            { title: 'Doorstep Service', desc: 'Selected local pickup and delivery support makes physical work easier to manage.', icon: MapPinned },
          ].map(({ title, desc, icon: Icon }) => (
            <div key={title} className="rounded-[2rem] border border-[var(--border)] bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-50 text-brand-700">
                <Icon className="h-6 w-6" aria-hidden="true" />
              </div>
              <h3 className="mt-4 text-xl font-bold text-slate-950">{title}</h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-10 lg:px-8">
        <SectionTitle
          eyebrow="Engineering Streams"
          title="Engineering projects & academic work across the major branches"
          description="Assignments, projects, reports, drawings, documentation and academic materials can be discussed for the major engineering branches."
        />
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          {engineeringBranches.map((branch) => (
            <span key={branch} className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow-sm">
              {branch}
            </span>
          ))}
        </div>
      </section>

      <section id="doorstep" className="mx-auto max-w-7xl px-4 py-10 lg:px-8 scroll-mt-24">
        <div className="rounded-[2rem] bg-slate-950 p-8 text-white shadow-glow md:p-12">
          <SectionTitle
            eyebrow="Doorstep Service"
            title="Don't want to travel? We'll come to you."
            description="Doorstep pickup & delivery is available in selected locations. Digital support can also be handled entirely on WhatsApp for quick communication and faster turnaround."
            tone="dark"
          />
          <div className="mt-8 grid gap-4 lg:grid-cols-[1fr_auto_1fr]">
            <div className="rounded-[1.5rem] border border-white/10 bg-white/10 p-6">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-200">Digital Services</p>
              <p className="mt-3 text-lg font-bold">Available for students globally</p>
              <div className="mt-4 flex flex-wrap gap-2 text-sm text-slate-200">
                {['Projects', 'Reports', 'PPTs', 'Software', 'Documentation', 'Research'].map((item) => (
                  <span key={item} className="rounded-full bg-white/10 px-3 py-1">
                    {item}
                  </span>
                ))}
              </div>
            </div>
            <div className="flex items-center justify-center">
              <div className="h-16 w-px bg-white/20 lg:h-px lg:w-16" />
            </div>
            <div className="rounded-[1.5rem] border border-white/10 bg-white/10 p-6">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-200">Physical Services</p>
              <p className="mt-3 text-lg font-bold">Doorstep pickup & delivery in selected locations</p>
              <div className="mt-4 flex flex-wrap gap-2 text-sm text-slate-200">
                {['Handwritten assignments', 'Records', 'Drawings', 'Printed reports', 'Binding', 'Physical materials'].map((item) => (
                  <span key={item} className="rounded-full bg-white/10 px-3 py-1">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
          <div className="mt-8 flex flex-wrap gap-4">
            <WhatsAppButton
              label="Check Doorstep Availability"
              message={createWhatsAppMessage('doorstep pickup/delivery availability', whatsappMessages.doorstep)}
            />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-10 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div>
            <SectionTitle
              eyebrow="Video Showcase"
              title="A quick look at the Black Crab experience"
              description="Use the website video to quickly communicate the brand and the support process in a professional, modern format."
            />
          </div>
          <div className="rounded-[2rem] border border-[var(--border)] bg-white p-2 shadow-sm">
            <BlackCrabVideo />
          </div>
        </div>
      </section>

      <section id="how-it-works" className="mx-auto max-w-7xl px-4 py-10 lg:px-8 scroll-mt-24">
        <SectionTitle
          eyebrow="How It Works"
          title="Simple, fast and transparent"
          description="The process stays straightforward so students can move from request to quote without friction."
        />
        <div className="mt-8 grid gap-4 md:grid-cols-4">
          {[
            { step: '01', title: 'Choose a Service', text: 'Pick the work type you need help with.' },
            { step: '02', title: 'Send Your Requirements', text: 'Share the subject, deadline, format and files on WhatsApp.' },
            { step: '03', title: 'Get Quote & Confirm', text: 'Receive pricing and next steps before work begins.' },
            { step: '04', title: 'Receive Your Work', text: 'Get your final academic support delivered on time.' },
          ].map((item) => (
            <div key={item.step} className="rounded-[2rem] border border-[var(--border)] bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg">
              <p className="text-sm font-semibold text-brand-700">{item.step} — {item.title}</p>
              <p className="mt-4 text-sm leading-6 text-slate-600">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="faqs" className="mx-auto max-w-7xl px-4 py-10 lg:px-8 scroll-mt-24">
        <SectionTitle
          eyebrow="FAQ"
          title="Common questions before you get started"
          description="Quick answers to the questions students ask most often before sending their requirements on WhatsApp."
        />
        <div className="mx-auto mt-8 grid max-w-4xl gap-4">
          {[
            ['Do you provide handwritten assignments?', "Yes, we provide manual and handwritten academic work based on the student's requirements."],
            ['Do you provide software projects?', 'Yes, software-based academic projects can be discussed based on requirements, technology and scope.'],
            ['Do you provide engineering drawings?', 'Yes, we handle different types of technical and engineering drawings, sketches and diagrams.'],
            ['Do you provide doorstep pickup?', 'Doorstep pickup is available in selected locations. Contact us on WhatsApp to check availability.'],
            ['Can I send my requirements on WhatsApp?', 'Yes. WhatsApp is the primary way to discuss requirements, pricing and delivery details.'],
            ['Do you provide project reports?', 'Yes, project reports and documentation can be prepared based on the project requirements.'],
            ['Can you handle the complete project?', 'Yes, students can discuss complete project requirements including development, documentation, PPT and related materials.'],
            ['How do I get a quote?', 'Send your requirements, pages or quantity, deadline and any reference material on WhatsApp.'],
          ].map(([question, answer]) => (
            <details key={question} className="group rounded-[1.6rem] border border-[var(--border)] bg-white p-6 shadow-sm transition hover:shadow-md">
              <summary className="cursor-pointer list-none text-left text-base font-semibold text-slate-950">{question}</summary>
              <p className="mt-3 text-sm leading-7 text-slate-600">{answer}</p>
            </details>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-10 lg:px-8">
        <div className="rounded-[2rem] bg-slate-950 bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.18),transparent_36%),linear-gradient(180deg,#020617_0%,#060b1e_100%)] p-8 text-center text-white md:p-12">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-brand-200">Final CTA</p>
          <h2 className="mt-4 text-3xl font-black text-white md:text-5xl">Have an Assignment or Project?</h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-slate-300 md:text-lg">
            Tell us what you need and get the right academic support from Black Crab.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <WhatsAppButton
              label="Chat on WhatsApp"
              message={createWhatsAppMessage(
                'a final academic requirement',
                'I found your website and would like to know about your academic services. I have a requirement and would like to discuss it.',
              )}
            />
            <Link
              href="#services"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              View All Services <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/70 bg-white/90">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 md:grid-cols-4 lg:px-8">
          <div>
            <Image
              src="/images/logo.png"
              alt={`${SITE.brandName} logo`}
              width={156}
              height={45}
              className="h-9 w-auto"
            />
            <p className="mt-3 text-sm leading-6 text-slate-600">
              Academic support, project development and digital or doorstep assistance for students from school to postgraduate levels.
            </p>
          </div>
          <div>
            <p className="font-semibold text-slate-950">For Students</p>
            <ul className="mt-3 grid gap-2 text-sm text-slate-600">
              {['10th & 12th', 'Diploma', 'UG', 'PG', 'Engineering', 'BCA / MCA', 'B.Com / M.Com', 'BBA / MBA', 'LLB / LLM'].map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <div>
            <p className="font-semibold text-slate-950">Services</p>
            <ul className="mt-3 grid gap-2 text-sm text-slate-600">
              {['Assignments', 'Projects', 'Reports', 'Drawings', 'Handwritten Work', 'Software Projects', 'PPTs', 'Research', 'Printing', 'Binding'].map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <div>
            <p className="font-semibold text-slate-950">Contact</p>
            <ul className="mt-3 grid gap-2 text-sm text-slate-600">
              <li>WhatsApp Support</li>
              <li>Doorstep Pickup</li>
              <li>Global Digital Support</li>
              <li>{SITE.whatsappDisplay}</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-slate-200 px-4 py-6 text-center text-sm text-slate-500 lg:px-8">
          © 2026 {SITE.brandName}. All rights reserved.
        </div>
      </footer>

      <div className="fixed inset-x-0 bottom-0 z-50 border-t border-slate-200 bg-white/95 p-3 pb-[calc(env(safe-area-inset-bottom)+0.75rem)] backdrop-blur md:hidden">
        <Link
          href={whatsappLink(
            createWhatsAppMessage(
              'mobile WhatsApp enquiry',
              'I found your website and would like to know about your academic services. I have a requirement and would like to discuss it.',
            ),
          )}
          target="_blank"
          rel="noreferrer"
          className="flex items-center justify-center gap-2 rounded-2xl bg-brand-600 px-4 py-3 text-sm font-semibold text-white shadow-lg shadow-brand-600/20"
        >
          <MessageCircle className="h-4 w-4" />
          Chat on WhatsApp
        </Link>
      </div>

      <div className="fixed bottom-4 right-4 z-[55] hidden md:block">
        <WhatsAppButton
          size="lg"
          label="WhatsApp Us"
          className="rounded-full border border-brand-500/20 px-5 shadow-2xl shadow-brand-600/30"
          message={createWhatsAppMessage(
            'floating WhatsApp enquiry',
            'I found your website and would like to know about your academic services. I have a requirement and would like to discuss it.',
          )}
          icon={<MessageCircle className="h-5 w-5" aria-hidden="true" />}
        />
      </div>
    </main>
  );
}
