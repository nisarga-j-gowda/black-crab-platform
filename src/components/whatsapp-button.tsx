import Link from 'next/link';
import { MessageCircle } from 'lucide-react';
import type { ReactNode } from 'react';
import { whatsappLink } from '@/lib/site';

type WhatsAppButtonProps = {
  message: string;
  label: string;
  icon?: ReactNode;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
};

const sizeClasses = {
  sm: 'px-4 py-2.5 text-sm',
  md: 'px-5 py-3 text-sm',
  lg: 'px-6 py-3.5 text-base',
} as const;

export function WhatsAppButton({
  message,
  label,
  icon,
  size = 'md',
  className = '',
}: WhatsAppButtonProps) {
  return (
    <Link
      href={whatsappLink(message)}
      target="_blank"
      rel="noreferrer"
      className={`inline-flex items-center justify-center gap-2 rounded-full bg-brand-600 font-semibold text-white shadow-lg shadow-brand-600/20 transition hover:-translate-y-0.5 hover:bg-brand-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2 ${sizeClasses[size]} ${className}`}
    >
      {icon ?? <MessageCircle className="h-4 w-4" aria-hidden="true" />}
      {label}
    </Link>
  );
}
