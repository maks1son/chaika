"use client";

import { motion } from "framer-motion";
import {
  Coffee,
  Briefcase,
  Car,
  Shirt,
  Clock4,
  Luggage,
} from "lucide-react";

const ease = [0.22, 0.8, 0.28, 1] as [number, number, number, number];

const services = [
  {
    icon: Coffee,
    title: "Кафе на территории",
    desc: "Завтраки, обеды и ужины с домашней кухней. Утренний кофе включён в проживание.",
  },
  {
    icon: Briefcase,
    title: "Деловые поездки",
    desc: "Тихие номера с рабочим столом, быстрый Wi-Fi и помощь с документами для командировок.",
  },
  {
    icon: Car,
    title: "Закрытая парковка",
    desc: "Охраняемая стоянка во внутреннем дворе — ваш автомобиль под присмотром круглосуточно.",
  },
  {
    icon: Shirt,
    title: "Прачечная",
    desc: "Стирка и глажка вещей по запросу. Удобно для долгих поездок и деловых визитов.",
  },
  {
    icon: Clock4,
    title: "Заселение 24/7",
    desc: "Приезжаете ночным поездом? Стойка регистрации работает круглосуточно, без доплат.",
  },
  {
    icon: Luggage,
    title: "Коллективные заезды",
    desc: "Спецпредложения и блоки номеров для групп, команд и корпоративных мероприятий.",
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-ivory py-24 md:py-36 px-6 md:px-10">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-flex items-center gap-2.5 mb-5">
            <span className="h-px w-10 bg-teal" />
            <span className="text-xs tracking-[0.3em] uppercase text-teal font-semibold">
              Услуги и удобства
            </span>
            <span className="h-px w-10 bg-teal" />
          </span>
          <h2
            className="font-[family-name:var(--font-cormorant)] text-petrol-deep font-medium leading-[1.05]"
            style={{ fontSize: "clamp(2.25rem, 4.5vw, 3.75rem)" }}
          >
            Всё для спокойного <span className="italic text-teal">пребывания</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-petrol-deep/10 rounded-3xl overflow-hidden border border-petrol-deep/10">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease, delay: (i % 3) * 0.08 }}
              className="group bg-ivory p-9 hover:bg-petrol-deep transition-colors duration-400"
            >
              <div className="h-12 w-12 rounded-full bg-teal/10 group-hover:bg-cyan/20 flex items-center justify-center mb-5 transition-colors">
                <s.icon className="h-5 w-5 text-teal group-hover:text-cyan transition-colors" />
              </div>
              <h3 className="font-[family-name:var(--font-cormorant)] text-2xl text-petrol-deep group-hover:text-ivory font-medium mb-2.5 transition-colors">
                {s.title}
              </h3>
              <p className="text-petrol-deep/60 group-hover:text-ivory/65 text-sm leading-relaxed transition-colors">
                {s.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
