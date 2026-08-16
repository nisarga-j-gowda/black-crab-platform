'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, MessageCircle, X } from 'lucide-react';
import { navItems } from '@/lib/nav';
import { SITE, createWhatsAppMessage, whatsappLink } from '@/lib/site';
import { WhatsAppButton } from '@/components/whatsapp-button';

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const original = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false);
    };
    window.addEventListener('keydown', onKeyDown);
    return () => {
      document.body.style.overflow = original;
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [open]);

  const closeMenu = () => setOpen(false);

  return (
    <>
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'border-b border-slate-200/80 bg-white/90 shadow-[0_10px_30px_rgba(15,23,42,0.06)] backdrop-blur-xl'
            : 'border-b border-transparent bg-white/80 backdrop-blur-xl'
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 lg:px-8">
          <Link href="#home" className="flex items-center gap-3 text-xl font-black tracking-tight text-slate-950">
            <Image
              src="/images/logo.png"
              alt={`${SITE.brandName} logo`}
              width={152}
              height={44}
              priority
              className="h-8 w-auto sm:h-9"
            />
            <span className="hidden text-lg font-black tracking-tight text-slate-950 sm:inline">Black Crab</span>
          </Link>

          <nav className="hidden items-center gap-6 md:flex" aria-label="Primary">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-slate-600 transition hover:text-slate-950 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex">
            <WhatsAppButton
              size="sm"
              label="WhatsApp Us"
              message={createWhatsAppMessage(
                'general enquiry',
                'I found your website and would like to know about your academic services. I have a requirement and would like to discuss it.',
              )}
              icon={<MessageCircle className="h-4 w-4" aria-hidden="true" />}
            />
          </div>

          <div className="flex items-center gap-2 md:hidden">
            <Link
              href={whatsappLink(
                createWhatsAppMessage(
                  'general enquiry',
                  'I found your website and would like to know about your academic services. I have a requirement and would like to discuss it.',
                ),
              )}
              target="_blank"
              rel="noreferrer"
              aria-label="WhatsApp us"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-900 shadow-sm transition hover:border-brand-200 hover:text-brand-700"
            >
              <MessageCircle className="h-5 w-5" aria-hidden="true" />
            </Link>
            <button
              type="button"
              onClick={() => setOpen(true)}
              aria-label="Open navigation menu"
              aria-expanded={open}
              aria-controls="mobile-nav-drawer"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-900 shadow-sm transition hover:border-brand-200 hover:text-brand-700"
            >
              <Menu className="h-5 w-5" aria-hidden="true" />
            </button>
          </div>
        </div>
      </header>

      <div
        className={`fixed inset-0 z-[60] md:hidden ${open ? 'pointer-events-auto' : 'pointer-events-none'}`}
        aria-hidden={!open}
      >
        <button
          type="button"
          aria-label="Close navigation menu"
          onClick={closeMenu}
          className={`absolute inset-0 bg-slate-950/45 transition-opacity ${open ? 'opacity-100' : 'opacity-0'}`}
        />
        <aside
          id="mobile-nav-drawer"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile navigation"
          className={`absolute right-0 top-0 flex h-full w-[min(88vw,22rem)] flex-col bg-white shadow-2xl transition-transform duration-300 ease-out ${open ? 'translate-x-0' : 'translate-x-full'}`}
        >
          <div className="flex items-center justify-between border-b border-slate-100 px-5 py-4">
            <div className="flex items-center gap-2">
              <Image
                src="/images/logo.png"
                alt={`${SITE.brandName} logo`}
                width={132}
                height={38}
                className="h-8 w-auto"
              />
              <span className="text-base font-black tracking-tight text-slate-950">Black Crab</span>
            </div>
            <button
              type="button"
              onClick={closeMenu}
              aria-label="Close navigation menu"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 text-slate-900"
            >
              <X className="h-5 w-5" aria-hidden="true" />
            </button>
          </div>
          <nav className="flex-1 space-y-1 px-4 py-5" aria-label="Mobile primary">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={closeMenu}
                className="flex items-center justify-between rounded-2xl px-4 py-3 text-base font-medium text-slate-700 transition hover:bg-slate-50 hover:text-slate-950 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2"
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <div className="border-t border-slate-100 p-4">
            <WhatsAppButton
              className="w-full"
              label="WhatsApp Us"
              message={createWhatsAppMessage(
                'general enquiry',
                'I found your website and would like to know about your academic services. I have a requirement and would like to discuss it.',
              )}
            />
          </div>
        </aside>
      </div>
    </>
  );
}
