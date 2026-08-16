'use client';

import { useState } from 'react';
import Link from 'next/link';
import type { LucideIcon } from 'lucide-react';
import { ChevronDown, ArrowRight } from 'lucide-react';
import { whatsappLink } from '@/lib/site';

type ServiceCardProps = {
  title: string;
  description: string;
  items: readonly string[];
  message: string;
  icon: LucideIcon;
  ctaLabel: string;
};

export function ServiceCard({ title, description, items, message, icon: Icon, ctaLabel }: ServiceCardProps) {
  const [expanded, setExpanded] = useState(false);
  const hasLongList = items.length > 4;
  const visibleItems = expanded || !hasLongList ? items : items.slice(0, 4);

  return (
    <article className="flex h-full flex-col rounded-3xl border border-[var(--border)] bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-xl sm:p-6">
      <div className="flex items-start gap-4">
        <div className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-brand-50 text-brand-700">
          <Icon className="h-6 w-6" aria-hidden="true" />
        </div>
        <div className="min-w-0">
          <h3 className="text-lg font-bold text-slate-950 sm:text-xl">{title}</h3>
          <p className="mt-1 text-sm leading-6 text-slate-600">{description}</p>
        </div>
      </div>

      <div className="mt-5 flex flex-wrap gap-2">
        {visibleItems.map((item) => (
          <span key={item} className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-700">
            {item}
          </span>
        ))}
      </div>

      {hasLongList && (
        <button
          type="button"
          onClick={() => setExpanded((value) => !value)}
          className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-brand-700 transition hover:text-brand-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2"
        >
          {expanded ? 'Hide Services' : 'View Services'}
          <ChevronDown className={`h-4 w-4 transition-transform ${expanded ? 'rotate-180' : ''}`} aria-hidden="true" />
        </button>
      )}

      <div className="mt-auto pt-6">
        <Link
          href={whatsappLink(message)}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 rounded-full bg-brand-600 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-brand-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2"
        >
          {ctaLabel}
          <ArrowRight className="h-4 w-4" aria-hidden="true" />
        </Link>
      </div>
    </article>
  );
}
