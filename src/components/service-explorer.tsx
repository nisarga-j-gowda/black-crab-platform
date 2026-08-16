'use client';

import { useMemo, useState } from 'react';
import Link from 'next/link';
import { ChevronDown, Filter } from 'lucide-react';
import {
  createWhatsAppMessage,
  services,
  whatsappLink,
  whatsappMessages,
} from '@/lib/site';

const categoryFilters = ['All', 'Assignments', 'Projects', 'Reports', 'Drawings', 'Handwritten', 'Software', 'PPT', 'Research', 'Printing'] as const;
const educationFilters = ['All', 'School', 'Diploma', 'UG', 'PG'] as const;
const streamFilters = ['All', 'Engineering', 'Computer Science', 'Commerce', 'Management', 'Law', 'Science', 'Arts', 'Architecture'] as const;

function FilterRow({
  label,
  options,
  value,
  onChange,
}: {
  label: string;
  options: readonly string[];
  value: string;
  onChange: (value: any) => void;
}) {
  return (
    <div className="space-y-3">
      <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.25em] text-slate-500">
        <Filter className="h-3.5 w-3.5" aria-hidden="true" />
        {label}
      </p>
      <div className="no-scrollbar -mx-4 flex gap-2 overflow-x-auto px-4 pb-1 sm:mx-0 sm:flex-wrap sm:px-0">
        {options.map((option) => {
          const selected = option === value;
          return (
            <button
              key={option}
              type="button"
              onClick={() => onChange(option)}
              className={`whitespace-nowrap rounded-full border px-4 py-2 text-sm font-semibold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2 ${
                selected
                  ? 'border-brand-600 bg-brand-600 text-white shadow-sm'
                  : 'border-slate-200 bg-white text-slate-700 hover:border-slate-300 hover:bg-slate-50'
              }`}
              aria-pressed={selected}
            >
              {option}
            </button>
          );
        })}
      </div>
    </div>
  );
}

export function ServiceExplorer() {
  const [category, setCategory] = useState<(typeof categoryFilters)[number]>('All');
  const [education, setEducation] = useState<(typeof educationFilters)[number]>('All');
  const [stream, setStream] = useState<(typeof streamFilters)[number]>('All');

  const filtered = useMemo(
    () =>
      services.filter((service) => {
        const categoryMatch = category === 'All' || service.category === category;
        const educationMatch =
          education === 'All' ||
          (education === 'School' && service.level === 'School') ||
          (education === 'Diploma' && service.title.includes('Diploma')) ||
          (education === 'UG' && ['UG', 'College', 'Other'].includes(service.level)) ||
          (education === 'PG' && service.level === 'PG');
        const streamMatch = stream === 'All' || service.stream === stream;
        return categoryMatch && educationMatch && streamMatch;
      }),
    [category, education, stream],
  );

  return (
    <div className="space-y-8">
      <FilterRow label="Service Category" options={categoryFilters} value={category} onChange={setCategory} />
      <FilterRow label="Education Level" options={educationFilters} value={education} onChange={setEducation} />
      <FilterRow label="Stream" options={streamFilters} value={stream} onChange={setStream} />

      <div className="flex items-center justify-between gap-4 rounded-2xl bg-slate-50 px-4 py-3 text-sm text-slate-600">
        <span>
          Showing <strong className="text-slate-950">{filtered.length}</strong> services
        </span>
        <span className="hidden items-center gap-2 sm:inline-flex">
          <ChevronDown className="h-4 w-4" aria-hidden="true" />
          Tap a card for a service-specific WhatsApp CTA
        </span>
      </div>

      {filtered.length > 0 ? (
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {filtered.map((service) => (
            <article key={service.title} className="rounded-3xl border border-[var(--border)] bg-white p-5 shadow-sm">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-700">{service.category}</p>
              <h3 className="mt-2 text-xl font-bold text-slate-950">{service.title}</h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">{service.description}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {service.items.slice(0, 4).map((item) => (
                  <span key={item} className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-700">
                    {item}
                  </span>
                ))}
              </div>
              <Link
                href={whatsappLink(service.message || createWhatsAppMessage(service.title, whatsappMessages.custom))}
                target="_blank"
                rel="noreferrer"
                className="mt-6 inline-flex items-center justify-center rounded-full bg-brand-600 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-brand-700"
              >
                {service.ctaLabel || 'Get Help'}
              </Link>
            </article>
          ))}
        </div>
      ) : (
        <div className="rounded-[2rem] border border-[var(--border)] bg-white p-8 text-center shadow-sm">
          <p className="text-xl font-bold text-slate-950">Can&apos;t find what you need?</p>
          <p className="mt-2 text-sm text-slate-600">Tell us your requirement on WhatsApp.</p>
          <div className="mt-6">
            <Link
              href={whatsappLink(createWhatsAppMessage('a custom academic requirement', whatsappMessages.custom))}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-full bg-brand-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-brand-700"
            >
              Ask on WhatsApp
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
