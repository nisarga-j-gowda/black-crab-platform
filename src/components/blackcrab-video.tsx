'use client';

import Image from 'next/image';

export function BlackCrabVideo() {
  return (
    <div className="relative overflow-hidden rounded-[2.75rem] bg-[radial-gradient(circle_at_top,rgba(16,185,129,0.12),transparent_42%),linear-gradient(180deg,rgba(255,255,255,0.92)_0%,rgba(244,247,250,0.88)_100%)] ring-1 ring-slate-200/80 shadow-lg shadow-slate-200/60">
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="absolute h-56 w-56 rounded-full bg-brand-500/10 blur-3xl" />
        <div className="absolute h-72 w-72 rounded-full bg-orange-400/10 blur-3xl" />
        <Image
          src="/images/logo.png"
          alt=""
          width={340}
          height={98}
          className="h-auto w-[72%] max-w-[22rem] opacity-10 select-none"
          aria-hidden="true"
        />
      </div>
      <video
        className="relative aspect-[4/3] h-full w-full object-cover [mask-image:radial-gradient(circle_at_center,black_86%,transparent_100%)]"
        src="/videos/hero_video.mp4"
        autoPlay
        muted
        loop
        playsInline
        controls
        preload="metadata"
        aria-label="Black Crab service showcase video"
      />
    </div>
  );
}
