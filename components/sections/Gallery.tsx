"use client";

import { motion } from "framer-motion";

const ease = [0.22, 0.8, 0.28, 1] as [number, number, number, number];

const photos = [
  {
    src: "https://images.unsplash.com/photo-1590490360182-c33d57733427?w=1100&q=80",
    alt: "Классический номер",
    cls: "col-span-2 row-span-2",
  },
  {
    src: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=700&q=80",
    alt: "Номер с видом",
    cls: "col-span-1 row-span-1",
  },
  {
    src: "https://images.unsplash.com/photo-1591088398332-8a7791972843?w=700&q=80",
    alt: "Апартаменты Люкс",
    cls: "col-span-1 row-span-1",
  },
  {
    src: "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?w=700&q=80",
    alt: "Современный номер",
    cls: "col-span-1 row-span-1",
  },
  {
    src: "https://images.unsplash.com/photo-1618773928121-c32242e63f39?w=700&q=80",
    alt: "Уютный номер",
    cls: "col-span-1 row-span-1",
  },
];

export default function Gallery() {
  return (
    <section id="gallery" className="bg-petrol-deep py-24 md:py-36 px-6 md:px-10">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <div>
            <span className="inline-flex items-center gap-2.5 mb-5">
              <span className="h-px w-10 bg-cyan" />
              <span className="text-xs tracking-[0.3em] uppercase text-cyan font-semibold">
                Галерея
              </span>
            </span>
            <h2
              className="font-[family-name:var(--font-cormorant)] text-ivory font-medium leading-[1.05]"
              style={{ fontSize: "clamp(2.25rem, 4.5vw, 3.75rem)" }}
            >
              Атмосфера <span className="italic text-stone">«Чайки»</span>
            </h2>
          </div>
          <p className="max-w-xs text-ivory/55 text-sm leading-relaxed">
            Загляните внутрь до приезда — номера, лобби и кафе, в которых хочется
            задержаться подольше.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 auto-rows-[180px] md:auto-rows-[220px] gap-4">
          {photos.map((p, i) => (
            <motion.div
              key={p.src}
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease, delay: i * 0.06 }}
              className={`group relative overflow-hidden rounded-2xl ${p.cls}`}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={p.src}
                alt={p.alt}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-petrol-night/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <span className="absolute bottom-4 left-4 text-ivory text-sm font-medium tracking-wide opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                {p.alt}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
