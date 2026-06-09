"use client";

import { motion } from "framer-motion";

const stats = [
  { value: "78", label: "номеров пяти категорий" },
  { value: "45", label: "лет принимаем гостей" },
  { value: "300м", label: "до автовокзала" },
  { value: "9.4", label: "средняя оценка гостей" },
];

const ease = [0.22, 0.8, 0.28, 1] as [number, number, number, number];

export default function About() {
  return (
    <section
      id="about"
      className="relative bg-ivory grain py-24 md:py-36 px-6 md:px-10 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">
        {/* Text */}
        <div className="relative">
          <motion.span
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease }}
            className="inline-flex items-center gap-2.5 mb-6"
          >
            <span className="h-px w-10 bg-teal" />
            <span className="text-xs tracking-[0.3em] uppercase text-teal font-semibold">
              О гостинице
            </span>
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease, delay: 0.05 }}
            className="font-[family-name:var(--font-cormorant)] text-petrol-deep font-medium leading-[1.05]"
            style={{ fontSize: "clamp(2.25rem, 4.5vw, 3.75rem)" }}
          >
            Одна из крупнейших
            <br />
            гостиниц <span className="italic text-teal">Сызрани</span>
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease, delay: 0.15 }}
            className="mt-7 space-y-5 text-petrol-deep/65 leading-relaxed max-w-lg"
          >
            <p>
              «Чайка» расположена в историческом и культурном центре города — рядом
              с набережной, городскими театрами и деловыми кварталами. Отсюда удобно
              добираться куда угодно: вокзал и главные улицы в нескольких минутах.
            </p>
            <p>
              Каждый номер оснащён современной техникой и уютной мебелью: телевизор,
              холодильник, мини-бар, фен, телефон и собственный санузел с душевой или
              ванной. Мы бережём каждую минуту вашего пребывания.
            </p>
          </motion.div>

          {/* Stats */}
          <div className="mt-12 grid grid-cols-2 gap-x-8 gap-y-8 max-w-lg">
            {stats.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease, delay: 0.1 + i * 0.08 }}
                className="border-t border-petrol-deep/15 pt-4"
              >
                <div className="font-[family-name:var(--font-cormorant)] text-4xl md:text-5xl text-teal font-semibold leading-none">
                  {s.value}
                </div>
                <div className="mt-2 text-sm text-petrol-deep/55">{s.label}</div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Image collage */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease }}
          className="relative"
        >
          <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-xl">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://images.unsplash.com/photo-1590490360182-c33d57733427?w=1000&q=80"
              alt="Интерьер номера"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="absolute -bottom-8 -left-8 w-44 h-56 rounded-2xl overflow-hidden shadow-2xl border-4 border-ivory hidden md:block">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://images.unsplash.com/photo-1578683010236-d716f9a3f461?w=600&q=80"
              alt="Современный номер"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="absolute -top-6 -right-6 bg-petrol-deep text-ivory rounded-2xl px-6 py-5 shadow-xl hidden md:block">
            <div className="font-[family-name:var(--font-cormorant)] text-3xl leading-none">
              от 3700 ₽
            </div>
            <div className="text-xs text-ivory/60 tracking-wide mt-1">
              за ночь
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
