import React from 'react';
import { Link } from 'react-router';
import { House, TriangleAlert } from 'lucide-react';

const ErrorSection = () => {
  return (
    <div className="relative isolate flex min-h-[80vh] items-center justify-center overflow-hidden bg-[radial-gradient(circle_at_top_left,rgba(36,77,63,0.18),transparent_38%),radial-gradient(circle_at_bottom_right,rgba(239,68,68,0.12),transparent_32%),linear-gradient(135deg,#f7f7f5_0%,#eef2ef_100%)] px-4 py-12">
      <div className="absolute left-10 top-10 h-32 w-32 rounded-full bg-[#244D3F]/10 blur-3xl" />
      <div className="absolute bottom-10 right-10 h-40 w-40 rounded-full bg-error/10 blur-3xl" />

      <div className="relative flex w-full max-w-3xl items-center justify-center overflow-hidden rounded-3xl bg-[#244D3F] p-8 text-white shadow-2xl shadow-black/20 sm:p-10 md:p-14">
        <div className="absolute left-8 top-8 h-24 w-24 rounded-full border border-white/10" />
        <div className="absolute bottom-8 right-8 h-28 w-28 rounded-full border border-white/10" />

        <div className="relative flex w-full max-w-xl flex-col items-center text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-4 py-2 text-sm font-semibold text-white/80">
            <TriangleAlert size={16} />
            Page not found
          </div>

          <div className="mt-8 flex h-44 w-44 items-center justify-center rounded-full border border-white/15 bg-white/10 shadow-2xl shadow-black/20 sm:h-52 sm:w-52">
            <span className="text-[5rem] font-black leading-none sm:text-[6.5rem]">
              404
            </span>
          </div>

          <div className="mt-8 space-y-3">
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-white/60">
              Error 404
            </p>
            <h1 className="text-4xl font-black leading-tight sm:text-5xl">
              Lost in the wrong place.
            </h1>
            <p className="mx-auto max-w-lg text-sm leading-6 text-white/70 sm:text-base">
              The route you requested does not exist, may have moved, or the
              address was typed incorrectly.
            </p>
          </div>

          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link
              to="/"
              className="btn border-0 bg-white text-[#244D3F] shadow-lg shadow-black/20 hover:bg-white/90 gap-2"
            >
              <House size={18} />
              Back to Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ErrorSection;
