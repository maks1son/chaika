"use client";

import { motion } from "framer-motion";
import { CalendarDays, Users, ArrowRight } from "lucide-react";

const ease = [0.22, 0.8, 0.28, 1] as [number, number, number, number];

export default function Hero() {
  return (
    <section
      id="top"
      className="relative min-h-screen w-full flex flex-col justify-end overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=2000&q=80"
          alt="Номер гостиницы Чайка"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-petrol-night via-petrol-night/55 to-petrol-deep/40" />
        <div className="absolute inset-0 bg-gradient-to-r from-petrol-night/70 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl w-full mx-auto px-6 md:px-10 pb-10 md:pb-14 pt-32">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease }}
          className="inline-flex items-center gap-2.5 mb-7"
        >
          <span className="h-px w-10 bg-cyan" />
          <span className="text-xs md:text-sm tracking-[0.3em] uppercase text-cyan font-medium">
            Сызрань · с 1981 года
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease, delay: 0.1 }}
          className="font-[family-name:var(--font-cormorant)] text-ivory font-medium leading-[0.95] tracking-tight max-w-4xl"
          style={{ fontSize: "clamp(3rem, 8vw, 6.5rem)" }}
        >
          Гостиница в самом
          <br />
          <span className="italic text-stone">сердце города</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease, delay: 0.25 }}
          className="mt-6 max-w-xl text-ivory/70 text-base md:text-lg font-light leading-relaxed"
        >
          Комфортабельные номера, тёплый сервис и тишина исторического центра
          Сызрани. Заселение круглосуточно, в двух шагах от вокзала.
        </motion.p>

        {/* Booking widget */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease, delay: 0.4 }}
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
        transition={{ delay: 1, duration: 1 }}
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
