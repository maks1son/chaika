"use client";

import { motion } from "framer-motion";
import { Bed, Maximize, Tv, Bath, ArrowUpRight } from "lucide-react";

const ease = [0.22, 0.8, 0.28, 1] as [number, number, number, number];

type Room = {
  name: string;
  price: number;
  area: string;
  beds: string;
  desc: string;
  amenities: string[];
  img: string;
};

const featured: Room = {
  name: "Люкс",
  price: 7500,
  area: "42 м²",
  beds: "2-местный",
  desc: "Просторные апартаменты с отдельной гостиной зоной, широкой кроватью и ванной. Лучший вид на исторический центр и максимум пространства для отдыха и работы.",
  amenities: ["Гостиная зона", "Ванна", "Мини-бар", "Рабочий стол", "Smart TV"],
  img: "https://images.unsplash.com/photo-1591088398332-8a7791972843?w=1400&q=80",
};

const rooms: Room[] = [
  {
    name: "Премиум",
    price: 5500,
    area: "32 м²",
    beds: "2-местный",
    desc: "Улучшенный номер с большой кроватью, мягкой зоной и всем необходимым для комфортного пребывания.",
    amenities: ["Мягкая зона", "Душ", "Мини-бар"],
    img: "https://images.unsplash.com/photo-1566665797739-1674de7a421a?w=900&q=80",
  },
  {
    name: "Комфорт плюс",
    price: 4700,
    area: "26 м²",
    beds: "2-местный",
    desc: "Уютный номер с продуманной планировкой, удобной кроватью и собственным санузлом с душевой.",
    amenities: ["Душ", "Холодильник", "Рабочий стол"],
    img: "https://images.unsplash.com/photo-1618773928121-c32242e63f39?w=900&q=80",
  },
  {
    name: "Двухместный",
    price: 4200,
    area: "24 м²",
    beds: "2 кровати",
    desc: "Практичный номер с двумя раздельными кроватями — идеален для коллег и друзей в поездке.",
    amenities: ["2 кровати", "Душ", "Телевизор"],
    img: "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?w=900&q=80",
  },
  {
    name: "Комфорт",
    price: 3700,
    area: "20 м²",
    beds: "2-местный",
    desc: "Аккуратный и тихий номер по самой доступной цене — всё нужное для спокойной ночёвки в центре.",
    amenities: ["Душ", "Телевизор", "Фен"],
    img: "https://images.unsplash.com/photo-1590490360182-c33d57733427?w=900&q=80",
  },
];

export default function Rooms() {
  return (
    <section id="rooms" className="bg-petrol-night py-24 md:py-36 px-6 md:px-10">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
          <div>
            <span className="inline-flex items-center gap-2.5 mb-5">
              <span className="h-px w-10 bg-cyan" />
              <span className="text-xs tracking-[0.3em] uppercase text-cyan font-semibold">
                Номера
              </span>
            </span>
            <h2
              className="font-[family-name:var(--font-cormorant)] text-ivory font-medium leading-[1.05]"
              style={{ fontSize: "clamp(2.25rem, 4.5vw, 3.75rem)" }}
            >
              Пять категорий —<br />
              <span className="italic text-stone">от уютных до люкса</span>
            </h2>
          </div>
          <p className="max-w-xs text-ivory/55 text-sm leading-relaxed">
            Все цены указаны за ночь и включают завтрак, Wi-Fi и парковку. Заселение
            и выезд — в любое время суток.
          </p>
        </div>

        {/* Featured — Люкс */}
        <motion.div
          initial={{ opacity: 0, y: 26 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease }}
          className="group grid lg:grid-cols-2 rounded-3xl overflow-hidden bg-petrol-deep mb-6 border border-ivory/10"
        >
          <div className="relative h-72 lg:h-auto overflow-hidden">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={featured.img}
              alt={featured.name}
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <span className="absolute top-5 left-5 bg-cyan text-petrol-deep text-xs font-bold tracking-widest uppercase px-4 py-1.5 rounded-full">
              Лучший выбор
            </span>
          </div>
          <div className="p-8 md:p-12 flex flex-col justify-center">
            <div className="flex items-baseline justify-between gap-4 mb-4">
              <h3 className="font-[family-name:var(--font-cormorant)] text-4xl md:text-5xl text-ivory font-medium">
                {featured.name}
              </h3>
              <div className="text-right">
                <div className="font-[family-name:var(--font-cormorant)] text-3xl text-cyan font-semibold leading-none">
                  {featured.price.toLocaleString("ru")} ₽
                </div>
                <div className="text-xs text-ivory/45 mt-1">за ночь</div>
              </div>
            </div>
            <div className="flex flex-wrap gap-5 text-ivory/55 text-sm mb-5">
              <span className="inline-flex items-center gap-2">
                <Maximize className="h-4 w-4 text-cyan" /> {featured.area}
              </span>
              <span className="inline-flex items-center gap-2">
                <Bed className="h-4 w-4 text-cyan" /> {featured.beds}
              </span>
              <span className="inline-flex items-center gap-2">
                <Bath className="h-4 w-4 text-cyan" /> Ванна
              </span>
              <span className="inline-flex items-center gap-2">
                <Tv className="h-4 w-4 text-cyan" /> Smart TV
              </span>
            </div>
            <p className="text-ivory/65 leading-relaxed mb-7">{featured.desc}</p>
            <div className="flex flex-wrap gap-2 mb-8">
              {featured.amenities.map((a) => (
                <span
                  key={a}
                  className="text-xs text-ivory/70 border border-ivory/20 rounded-full px-3 py-1"
                >
                  {a}
                </span>
              ))}
            </div>
            <a
              href="tel:+79372390022"
              className="self-start inline-flex items-center gap-2 bg-teal hover:bg-cyan text-ivory text-sm font-semibold tracking-wide px-7 py-3.5 rounded-full transition-colors duration-300"
            >
              Забронировать Люкс
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
        </motion.div>

        {/* Grid — other rooms */}
        <div className="grid md:grid-cols-2 gap-6">
          {rooms.map((r, i) => (
            <motion.div
              key={r.name}
              initial={{ opacity: 0, y: 26 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease, delay: i * 0.08 }}
              className="group rounded-3xl overflow-hidden bg-petrol-deep border border-ivory/10 flex flex-col"
            >
              <div className="relative h-60 overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={r.img}
                  alt={r.name}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-petrol-deep/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute bottom-4 right-4 bg-ivory/95 backdrop-blur rounded-full px-4 py-1.5">
                  <span className="font-[family-name:var(--font-cormorant)] text-xl text-petrol-deep font-semibold">
                    {r.price.toLocaleString("ru")} ₽
                  </span>
                </div>
              </div>
              <div className="p-7 flex flex-col flex-1">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-[family-name:var(--font-cormorant)] text-3xl text-ivory font-medium">
                    {r.name}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-4 text-ivory/50 text-sm mb-4">
                  <span className="inline-flex items-center gap-1.5">
                    <Maximize className="h-3.5 w-3.5 text-cyan" /> {r.area}
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <Bed className="h-3.5 w-3.5 text-cyan" /> {r.beds}
                  </span>
                </div>
                <p className="text-ivory/60 text-sm leading-relaxed mb-5 flex-1">
                  {r.desc}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {r.amenities.map((a) => (
                    <span
                      key={a}
                      className="text-xs text-ivory/65 border border-ivory/15 rounded-full px-3 py-1"
                    >
                      {a}
                    </span>
                  ))}
                </div>
                <a
                  href="tel:+79372390022"
                  className="inline-flex items-center justify-between gap-2 border border-ivory/25 hover:border-cyan hover:bg-cyan/10 text-ivory text-sm font-semibold tracking-wide px-6 py-3 rounded-full transition-all duration-300"
                >
                  Забронировать
                  <ArrowUpRight className="h-4 w-4 text-cyan" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
