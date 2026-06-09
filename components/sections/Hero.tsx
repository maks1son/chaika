"use client";

import { motion } from "framer-motion";
import { CalendarDays, Users, ArrowRight } from "lucide-react";

const ease = [0.22, 0.8, 0.28, 1] as [number, number, number, number];

/* Decorative flight-path arcs (seagull wing motif) */
const arcs = [
  { d: "M-50 220 C 200 120, 420 120, 640 220", delay: 0.2, opacity: 0.5 },
  { d: "M-50 320 C 260 180, 560 180, 880 320", delay: 0.5, opacity: 0.35 },
  { d: "M-50 430 C 320 250, 720 250, 1100 430", delay: 0.8, opacity: 0.25 },
  { d: "M-50 540 C 380 330, 820 330, 1300 540", delay: 1.1, opacity: 0.18 },
];

export default function Hero() {
  return (
    <section
      id="top"
      className="relative min-h-screen w-full flex flex-col justify-end overflow-hidden bg-petrol-night"
    >
      {/* Gradient base */}
      <div className="absolute inset-0 bg-gradient-to-br from-petrol-deep via-petrol-night to-[#06181c]" />

      {/* Soft glows */}
      <div className="absolute -top-1/4 -right-1/4 w-[60%] h-[60%] rounded-full bg-teal/15 blur-[120px]" />
      <div className="absolute top-1/3 -left-1/4 w-[50%] h-[50%] rounded-full bg-cyan/10 blur-[120px]" />

      {/* Animated flight-path arcs */}
      <svg
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 1200 700"
        preserveAspectRatio="xMidYMid slice"
        aria-hidden
      >
        {arcs.map((a, i) => (
          <motion.path
            key={i}
            d={a.d}
            fill="none"
            stroke="url(#arcGrad)"
            strokeWidth="1.5"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: a.opacity }}
            transition={{ duration: 2.4, delay: a.delay, ease }}
          />
        ))}
        <defs>
          <linearGradient id="arcGrad" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#2FB6C9" stopOpacity="0" />
            <stop offset="45%" stopColor="#2FB6C9" />
            <stop offset="100%" stopColor="#CFC6B8" stopOpacity="0.4" />
          </linearGradient>
        </defs>
      </svg>

      {/* Floating seagull marks */}
      {[
        { top: "18%", left: "12%", size: 34, delay: 1.4, dur: 7 },
        { top: "26%", left: "78%", size: 22, delay: 1.7, dur: 9 },
        { top: "40%", left: "64%", size: 16, delay: 2, dur: 8 },
        { top: "14%", left: "46%", size: 14, delay: 2.2, dur: 10 },
      ].map((g, i) => (
        <motion.svg
          key={i}
          viewBox="0 0 48 24"
          fill="none"
          className="absolute text-cyan/40"
          style={{ top: g.top, left: g.left, width: g.size, height: g.size / 2 }}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: [0, -10, 0] }}
          transition={{
            opacity: { delay: g.delay, duration: 1 },
            y: { delay: g.delay, duration: g.dur, repeat: Infinity, ease: "easeInOut" },
          }}
          aria-hidden
        >
          <path
            d="M2 18C8 18 12 6 18 6C22 6 23 12 24 12C25 12 26 6 30 6C36 6 40 18 46 18"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </motion.svg>
      ))}

      {/* Giant watermark mark */}
      <motion.svg
        viewBox="0 0 48 24"
        fill="none"
        className="absolute -right-20 top-1/4 w-[55vw] text-teal/[0.06] pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 1.6 }}
        aria-hidden
      >
        <path
          d="M2 18C8 18 12 6 18 6C22 6 23 12 24 12C25 12 26 6 30 6C36 6 40 18 46 18"
          stroke="currentColor"
          strokeWidth="1.2"
          strokeLinecap="round"
        />
      </motion.svg>

      {/* Top gradient for navbar legibility */}
      <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-petrol-night/80 to-transparent" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl w-full mx-auto px-6 md:px-10 pb-10 md:pb-14 pt-36">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease, delay: 0.3 }}
          className="inline-flex items-center gap-2.5 mb-7"
        >
          <span className="h-px w-10 bg-cyan" />
          <span className="text-xs md:text-sm tracking-[0.3em] uppercase text-cyan font-medium">
            Сызрань · ул. Ульяновская, 57 · с 1981 года
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease, delay: 0.4 }}
          className="font-[family-name:var(--font-cormorant)] font-medium leading-[0.95] tracking-tight max-w-4xl"
          style={{ fontSize: "clamp(3rem, 8.5vw, 7rem)" }}
        >
          <span className="bg-gradient-to-r from-ivory via-ivory to-stone bg-clip-text text-transparent">
            Гостиница в самом
          </span>
          <br />
          <span className="italic bg-gradient-to-r from-cyan to-stone bg-clip-text text-transparent">
            сердце города
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease, delay: 0.55 }}
          className="mt-6 max-w-xl text-ivory/65 text-base md:text-lg font-light leading-relaxed"
        >
          Комфортабельные номера, тёплый сервис и тишина исторического центра
          Сызрани. Заселение круглосуточно, в двух шагах от вокзала.
        </motion.p>

        {/* Quick stats row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease, delay: 0.65 }}
          className="mt-8 flex flex-wrap items-center gap-x-10 gap-y-4"
        >
          {[
            { v: "78", l: "номеров" },
            { v: "5", l: "категорий" },
            { v: "24/7", l: "заселение" },
            { v: "от 3700 ₽", l: "за ночь" },
          ].map((s) => (
            <div key={s.l} className="flex items-baseline gap-2">
              <span className="font-[family-name:var(--font-cormorant)] text-3xl text-cyan font-semibold leading-none">
                {s.v}
              </span>
              <span className="text-xs text-ivory/45 uppercase tracking-wider">
                {s.l}
              </span>
            </div>
          ))}
        </motion.div>

        {/* Booking widget */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease, delay: 0.75 }}
          className="mt-10 bg-ivory/95 backdrop-blur-md rounded-2xl shadow-2xl p-3 md:p-4 flex flex-col md:flex-row items-stretch gap-3 max-w-3xl"
        >
          <Field label="Заезд" icon={<CalendarDays className="h-4 w-4 text-teal" />}>
            <input
              type="date"
              className="w-full bg-transparent text-sm text-petrol-deep font-medium outline-none"
            />
          </Field>
          <div className="hidden md:block w-px bg-petrol-deep/10 my-2" />
          <Field label="Выезд" icon={<CalendarDays className="h-4 w-4 text-teal" />}>
            <input
              type="date"
              className="w-full bg-transparent text-sm text-petrol-deep font-medium outline-none"
            />
          </Field>
          <div className="hidden md:block w-px bg-petrol-deep/10 my-2" />
          <Field label="Гости" icon={<Users className="h-4 w-4 text-teal" />}>
            <select className="w-full bg-transparent text-sm text-petrol-deep font-medium outline-none cursor-pointer">
              <option>1 гость</option>
              <option>2 гостя</option>
              <option>3 гостя</option>
              <option>4 гостя</option>
            </select>
          </Field>
          <a
            href="#rooms"
            className="shrink-0 flex items-center justify-center gap-2 bg-teal hover:bg-cyan text-ivory text-sm font-semibold tracking-wide px-7 rounded-xl py-4 md:py-0 transition-colors duration-300"
          >
            Подобрать номер
            <ArrowRight className="h-4 w-4" />
          </a>
        </motion.div>
      </div>

      {/* Scroll hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="relative z-10 max-w-7xl w-full mx-auto px-6 md:px-10 pb-6"
      >
        <div className="flex items-center gap-3 text-ivory/40 text-xs tracking-widest uppercase">
          <span className="h-8 w-px bg-ivory/30" />
          Листайте вниз
        </div>
      </motion.div>
    </section>
  );
}

function Field({
  label,
  icon,
  children,
}: {
  label: string;
  icon: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <label className="flex-1 flex items-center gap-3 px-4 py-2.5 rounded-xl hover:bg-petrol-deep/[0.03] transition-colors">
      <span className="shrink-0">{icon}</span>
      <span className="flex flex-col min-w-0 flex-1">
        <span className="text-[11px] uppercase tracking-wider text-petrol-deep/45 font-semibold">
          {label}
        </span>
        {children}
      </span>
    </label>
  );
}
