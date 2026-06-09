"use client";

import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, Train, Plane } from "lucide-react";

const ease = [0.22, 0.8, 0.28, 1] as [number, number, number, number];

export default function Location() {
  return (
    <section id="location" className="bg-ivory py-24 md:py-32 px-6 md:px-10">
      <div className="max-w-7xl mx-auto">
        {/* CTA band */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease }}
          className="relative overflow-hidden rounded-3xl bg-petrol-deep px-8 md:px-16 py-14 md:py-20 mb-20"
        >
          <div className="relative z-10 max-w-2xl">
            <h2
              className="font-[family-name:var(--font-cormorant)] text-ivory font-medium leading-[1.05] mb-5"
              style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)" }}
            >
              Забронируйте номер <span className="italic text-cyan">сегодня</span>
            </h2>
            <p className="text-ivory/65 leading-relaxed mb-8 max-w-lg">
              Позвоните нам — поможем выбрать номер, подскажем по заезду и удержим
              лучшую цену. Отвечаем круглосуточно.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="tel:+79372390022"
                className="inline-flex items-center justify-center gap-2 bg-cyan hover:bg-teal text-petrol-deep hover:text-ivory text-sm font-bold tracking-wide px-8 py-4 rounded-full transition-colors duration-300"
              >
                <Phone className="h-4 w-4" />
                8-937-239-00-22
              </a>
              <a
                href="mailto:chaika-otel@mail.ru"
                className="inline-flex items-center justify-center gap-2 border border-ivory/30 hover:bg-ivory hover:text-petrol-deep text-ivory text-sm font-semibold tracking-wide px-8 py-4 rounded-full transition-colors duration-300"
              >
                <Mail className="h-4 w-4" />
                Написать на почту
              </a>
            </div>
          </div>
          {/* decorative seagull */}
          <svg
            viewBox="0 0 48 24"
            fill="none"
            className="absolute -right-6 -top-6 h-64 w-64 text-cyan/10 hidden md:block"
            aria-hidden
          >
            <path
              d="M2 18C8 18 12 6 18 6C22 6 23 12 24 12C25 12 26 6 30 6C36 6 40 18 46 18"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </motion.div>

        {/* Contacts + map */}
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <span className="inline-flex items-center gap-2.5 mb-5">
              <span className="h-px w-10 bg-teal" />
              <span className="text-xs tracking-[0.3em] uppercase text-teal font-semibold">
                Как нас найти
              </span>
            </span>
            <h3
              className="font-[family-name:var(--font-cormorant)] text-petrol-deep font-medium leading-[1.05] mb-8"
              style={{ fontSize: "clamp(2rem, 3.5vw, 3rem)" }}
            >
              В историческом центре <span className="italic text-teal">Сызрани</span>
            </h3>

            <ul className="space-y-6">
              <ContactRow icon={<MapPin className="h-5 w-5 text-teal" />} title="Адрес">
                г. Сызрань, ул. Ульяновская, 57
              </ContactRow>
              <ContactRow icon={<Phone className="h-5 w-5 text-teal" />} title="Телефон">
                <a href="tel:+79372390022" className="hover:text-teal transition-colors">
                  8-937-239-00-22
                </a>
              </ContactRow>
              <ContactRow icon={<Mail className="h-5 w-5 text-teal" />} title="Email">
                <a
                  href="mailto:chaika-otel@mail.ru"
                  className="hover:text-teal transition-colors"
                >
                  chaika-otel@mail.ru
                </a>
              </ContactRow>
              <ContactRow icon={<Clock className="h-5 w-5 text-teal" />} title="Режим работы">
                Круглосуточно, 7 дней в неделю
              </ContactRow>
            </ul>

            <div className="mt-8 flex flex-wrap gap-6 pt-8 border-t border-petrol-deep/10">
              <span className="inline-flex items-center gap-2 text-sm text-petrol-deep/65">
                <Train className="h-4 w-4 text-teal" /> 300 м до автовокзала
              </span>
              <span className="inline-flex items-center gap-2 text-sm text-petrol-deep/65">
                <Plane className="h-4 w-4 text-teal" /> 75 км до аэропорта Курумоч
              </span>
            </div>
          </div>

          {/* Map */}
          <div className="rounded-3xl overflow-hidden shadow-lg border border-petrol-deep/10 h-[420px]">
            <iframe
              title="Карта — гостиница Чайка, Сызрань"
              src="https://yandex.ru/map-widget/v1/?text=%D0%A1%D1%8B%D0%B7%D1%80%D0%B0%D0%BD%D1%8C%2C%20%D1%83%D0%BB.%20%D0%A3%D0%BB%D1%8C%D1%8F%D0%BD%D0%BE%D0%B2%D1%81%D0%BA%D0%B0%D1%8F%2C%2057&z=16"
              className="w-full h-full grayscale-[0.2]"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactRow({
  icon,
  title,
  children,
}: {
  icon: React.ReactNode;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <li className="flex items-start gap-4">
      <span className="mt-0.5 h-11 w-11 rounded-full bg-teal/10 flex items-center justify-center shrink-0">
        {icon}
      </span>
      <span className="flex flex-col">
        <span className="text-xs uppercase tracking-wider text-petrol-deep/45 font-semibold mb-0.5">
          {title}
        </span>
        <span className="text-lg text-petrol-deep">{children}</span>
      </span>
    </li>
  );
}
