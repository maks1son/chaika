"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  Bath,
  BedDouble,
  BriefcaseBusiness,
  CalendarDays,
  Car,
  Check,
  Coffee,
  Mail,
  MapPin,
  Phone,
  ShieldCheck,
  Star,
  Train,
  Wifi,
} from "lucide-react";

const ease = [0.22, 0.8, 0.28, 1] as [number, number, number, number];

const navLinks = [
  { label: "О гостинице", href: "#about" },
  { label: "Номера", href: "#rooms" },
  { label: "Сервис", href: "#service" },
  { label: "Адрес", href: "#contacts" },
];

const assetPath = (path: string) => `/chaika${path}`;

const heroStats = [
  { value: "центр", label: "Сызрани" },
  { value: "24/7", label: "заезд" },
  { value: "от 3700", label: "руб. за ночь" },
  { value: "57", label: "Ульяновская" },
];

const proofItems = [
  {
    icon: MapPin,
    title: "Исторический центр",
    text: "Удобно для командировок, прогулок по городу и коротких остановок в пути.",
  },
  {
    icon: Car,
    title: "Закрытая парковка",
    text: "Место во внутреннем дворе для гостей, которые приезжают на машине.",
  },
  {
    icon: Coffee,
    title: "Кафе при гостинице",
    text: "Завтрак, кофе и спокойный ужин без поиска места после дороги.",
  },
  {
    icon: Wifi,
    title: "Рабочий Wi-Fi",
    text: "Номера подходят для деловых поездок, звонков и вечерней работы.",
  },
];

const rooms = [
  {
    name: "Люкс",
    price: "7500",
    area: "42 м2",
    image: assetPath("/generated/chaika-room-premium.png"),
    text: "Просторный номер с отдельной зоной отдыха, большой кроватью и ванной.",
    tags: ["2 гостя", "ванна", "рабочая зона"],
  },
  {
    name: "Премиум",
    price: "5500",
    area: "32 м2",
    image: assetPath("/generated/chaika-room-twin.png"),
    text: "Улучшенный номер для пары или командировки, когда нужен запас пространства.",
    tags: ["king size", "душ", "мини-бар"],
  },
  {
    name: "Комфорт",
    price: "3700",
    area: "20 м2",
    image: assetPath("/generated/chaika-room-comfort.png"),
    text: "Аккуратный номер для спокойной ночевки в центре города без лишнего шума.",
    tags: ["душ", "TV", "фен"],
  },
];

const details = [
  ["300 м", "до автовокзала"],
  ["5", "категорий номеров"],
  ["78", "номеров в фонде"],
  ["24/7", "стойка регистрации"],
];

const reviews = [
  {
    name: "Анна К.",
    meta: "деловая поездка",
    text: "Тихий номер, быстрый заезд и нормальный завтрак. Для работы в центре города очень удобно.",
  },
  {
    name: "Игорь М.",
    meta: "проездом",
    text: "Приехал ночью, заселили без суеты. Машину оставил во дворе, утром быстро выехал дальше.",
  },
  {
    name: "Семья Орловых",
    meta: "выходные",
    text: "Брали люкс на два дня. Просторно, чисто, до городских мест дошли пешком.",
  },
];

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Proof />
        <About />
        <Rooms />
        <Service />
        <Reviews />
        <Contacts />
      </main>
      <Footer />
    </>
  );
}

function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4">
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between rounded-[4px] border border-white/70 bg-white/88 px-4 shadow-[0_18px_60px_rgba(47,127,182,0.12)] backdrop-blur-xl md:px-6">
        <a href="#top" className="flex items-center gap-2" aria-label="Гостиница Чайка, на главную">
          <span className="text-sm font-bold text-ink md:text-base">
            Гостиница «Чайка»
          </span>
          <span className="hidden h-1.5 w-1.5 rounded-[2px] bg-accent md:block" aria-hidden="true" />
          <span className="hidden text-sm font-semibold text-muted md:inline">
            центр Сызрани
          </span>
        </a>

        <div className="hidden items-center gap-7 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-semibold text-ink/62 transition hover:text-ink"
            >
              {link.label}
            </a>
          ))}
        </div>

        <a
          href="tel:+79372390022"
          className="inline-flex h-11 items-center justify-center gap-2 rounded-[4px] bg-accent px-5 text-sm font-bold text-white shadow-[0_12px_24px_rgba(75,159,216,0.22)] transition hover:bg-accent-dark active:translate-y-px"
        >
          <Phone className="h-4 w-4" />
          <span className="hidden sm:inline">8-937-239-00-22</span>
          <span className="sm:hidden">Звонок</span>
        </a>
      </nav>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative min-h-[100dvh] overflow-hidden bg-paper px-4 pb-10 pt-24 md:pt-28">
      <div className="mx-auto grid max-w-7xl gap-5 lg:grid-cols-[1.02fr_0.98fr]">
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease }}
          className="relative flex min-h-[650px] flex-col justify-end overflow-hidden rounded-[4px] bg-ink p-6 text-white md:p-10"
        >
          <Image
            src={assetPath("/generated/chaika-facade.png")}
            alt="Городская гостиница Чайка на спокойной улице в центре Сызрани"
            fill
            priority
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(31,41,51,0.04),rgba(31,41,51,0.68))]" />
          <div className="relative max-w-2xl">
            <p className="mb-5 inline-flex rounded-[4px] bg-white/16 px-4 py-2 text-sm font-semibold backdrop-blur">
              Сызрань, ул. Ульяновская, 57
            </p>
            <h1 className="font-display text-[clamp(3.1rem,7.4vw,7.2rem)] font-medium leading-[0.94] tracking-[-0.02em]">
              Гостиница в центре города
            </h1>
            <p className="mt-6 max-w-lg text-lg leading-7 text-white/78">
              Для тех, кому нужен спокойный номер, понятный сервис и быстрый доступ к деловому центру Сызрани.
            </p>
          </div>
        </motion.div>

        <div className="grid gap-5">
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease, delay: 0.08 }}
            className="rounded-[4px] border border-line bg-white p-6 shadow-soft md:p-8"
          >
            <div className="grid grid-cols-2 gap-4">
              {heroStats.map((item) => (
                <div key={item.label} className="rounded-[4px] bg-paper px-5 py-5">
                  <div className="font-display text-4xl font-semibold leading-none text-ink">
                    {item.value}
                  </div>
                  <div className="mt-2 text-sm font-semibold text-muted">{item.label}</div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease, delay: 0.14 }}
            className="rounded-[4px] border border-line bg-white p-6 shadow-soft md:p-8"
          >
            <div className="flex items-center gap-3 text-sm font-bold text-accent">
              <CalendarDays className="h-5 w-5" />
              Прямое бронирование
            </div>
            <h2 className="mt-5 max-w-md font-display text-4xl font-medium leading-tight text-ink md:text-5xl">
              Подберем номер под поездку за один звонок
            </h2>
            <p className="mt-4 max-w-md leading-7 text-muted">
              Командировка, семейный заезд, ночь проездом или группа. Администратор сразу уточнит цену и наличие.
            </p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <a
                href="tel:+79372390022"
                className="inline-flex h-13 items-center justify-center gap-2 rounded-[4px] bg-accent px-7 text-sm font-bold text-white transition hover:bg-accent-dark active:translate-y-px"
              >
                <Phone className="h-4 w-4" />
                Позвонить
              </a>
              <a
                href="#rooms"
                className="inline-flex h-13 items-center justify-center rounded-[4px] border border-ink/18 px-7 text-sm font-bold text-ink transition hover:border-ink hover:bg-ink hover:text-white active:translate-y-px"
              >
                Смотреть номера
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease, delay: 0.2 }}
            className="relative min-h-[220px] overflow-hidden rounded-[4px] border border-line bg-white shadow-soft"
          >
            <Image
              src={assetPath("/generated/chaika-map.png")}
              alt="Схема расположения гостиницы Чайка в центре Сызрани"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function Proof() {
  return (
    <section className="bg-paper px-4 py-10">
      <div className="mx-auto grid max-w-7xl gap-3 md:grid-cols-4">
        {proofItems.map((item) => (
          <article
            key={item.title}
            className="rounded-[4px] border border-line bg-white p-6"
          >
            <item.icon className="h-6 w-6 text-accent" />
            <h3 className="mt-5 text-lg font-bold text-ink">{item.title}</h3>
            <p className="mt-3 text-sm leading-6 text-muted">{item.text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="bg-paper px-4 py-20 md:py-28">
      <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <p className="text-sm font-bold text-accent">Коротко о нас</p>
          <h2 className="mt-4 font-display text-[clamp(2.7rem,5vw,5.8rem)] font-medium leading-[0.98] tracking-[-0.02em] text-ink">
            Не курорт у воды, а нормальная городская гостиница
          </h2>
        </div>
        <div className="grid gap-5 md:grid-cols-[0.95fr_1.05fr]">
          <div className="relative min-h-[360px] overflow-hidden rounded-[4px] border border-line bg-white shadow-soft">
            <Image
              src={assetPath("/generated/chaika-room-premium.png")}
              alt="Светлый номер гостиницы Чайка"
              fill
              sizes="(min-width: 768px) 40vw, 100vw"
              className="object-cover"
            />
          </div>
          <div className="rounded-[4px] border border-line bg-white p-7 shadow-soft md:p-8">
            <p className="leading-7 text-muted">
              «Чайка» находится в центральной части Сызрани. Это важное отличие: сайт не должен обещать отдых на берегу. Его задача честно продать удобство города, спокойный сон, парковку, кафе и круглосуточное заселение.
            </p>
            <div className="mt-8 grid grid-cols-2 gap-4">
              {details.map(([value, label]) => (
                <div key={label} className="border-t border-line pt-4">
                  <div className="font-display text-4xl font-semibold text-ink">{value}</div>
                  <div className="mt-1 text-sm font-semibold text-muted">{label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Rooms() {
  return (
    <section id="rooms" className="bg-paper px-4 py-20 md:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-3xl">
          <p className="text-sm font-bold text-accent">Номера</p>
          <h2 className="mt-4 font-display text-[clamp(2.7rem,5vw,5.6rem)] font-medium leading-none tracking-[-0.02em] text-ink">
            От короткой ночевки до просторного люкса
          </h2>
        </div>
        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          {rooms.map((room) => (
            <article
              key={room.name}
              className="group overflow-hidden rounded-[4px] border border-line bg-white shadow-soft"
            >
              <div className="relative h-72 overflow-hidden">
                <Image
                  src={room.image}
                  alt={`Номер ${room.name} в гостинице Чайка`}
                  fill
                  sizes="(min-width: 1024px) 33vw, 100vw"
                  className="object-cover transition duration-700 group-hover:scale-105"
                />
              </div>
              <div className="p-7">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="font-display text-4xl font-medium text-ink">{room.name}</h3>
                    <p className="mt-2 text-sm font-semibold text-muted">{room.area}</p>
                  </div>
                  <div className="text-right">
                    <div className="font-display text-3xl font-semibold text-accent">
                      {room.price}
                    </div>
                    <div className="text-xs font-bold text-muted">руб. за ночь</div>
                  </div>
                </div>
                <p className="mt-5 min-h-18 leading-7 text-muted">{room.text}</p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {room.tags.map((tag) => (
                    <span key={tag} className="rounded-[4px] bg-paper px-3 py-1.5 text-xs font-bold text-ink/70">
                      {tag}
                    </span>
                  ))}
                </div>
                <a
                  href="tel:+79372390022"
                  className="mt-7 inline-flex h-12 w-full items-center justify-center rounded-[4px] bg-accent px-6 text-sm font-bold text-white transition hover:bg-accent-dark active:translate-y-px"
                >
                  Забронировать
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Service() {
  const list = [
    { icon: ShieldCheck, label: "Круглосуточная стойка регистрации" },
    { icon: BriefcaseBusiness, label: "Удобно для командировок" },
    { icon: BedDouble, label: "Одноместные и двухместные номера" },
    { icon: Bath, label: "Собственный санузел в номере" },
    { icon: Coffee, label: "Кафе и завтраки на территории" },
    { icon: Train, label: "Быстрый выезд к вокзалам и центру" },
  ];

  return (
    <section id="service" className="bg-paper px-4 py-20 md:py-28">
      <div className="mx-auto grid max-w-7xl gap-5 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="relative min-h-[560px] overflow-hidden rounded-[4px] border border-line bg-white shadow-soft">
          <Image
            src={assetPath("/generated/chaika-cafe.png")}
            alt="Кафе при городской гостинице Чайка"
            fill
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover"
          />
        </div>
        <div className="rounded-[4px] border border-line bg-white p-7 shadow-soft md:p-10">
          <p className="text-sm font-bold text-accent">Сервис</p>
          <h2 className="mt-4 font-display text-[clamp(2.5rem,4.4vw,5rem)] font-medium leading-none tracking-[-0.02em] text-ink">
            Все нужное без лишней театральности
          </h2>
          <p className="mt-6 max-w-lg leading-7 text-muted">
            Сайт должен продавать не выдуманный luxury, а предсказуемый комфорт: где остановиться, где оставить машину, где поесть и кому позвонить ночью.
          </p>
          <div className="mt-9 grid gap-3">
            {list.map((item) => (
              <div key={item.label} className="flex items-center gap-4 rounded-[4px] bg-paper p-4">
                <span className="grid h-11 w-11 place-items-center rounded-[4px] bg-white text-accent">
                  <item.icon className="h-5 w-5" />
                </span>
                <span className="font-bold text-ink">{item.label}</span>
                <Check className="ml-auto h-5 w-5 text-accent" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Reviews() {
  return (
    <section className="bg-paper px-4 py-20 md:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-8 lg:grid-cols-[0.72fr_1.28fr]">
          <div>
            <p className="text-sm font-bold text-accent">Отзывы</p>
            <h2 className="mt-4 font-display text-[clamp(2.5rem,4.4vw,5rem)] font-medium leading-none tracking-[-0.02em] text-ink">
              Гости ценят понятные вещи
            </h2>
            <div className="mt-6 flex items-center gap-2">
              {Array.from({ length: 5 }).map((_, index) => (
                <Star key={index} className="h-5 w-5 fill-accent text-accent" />
              ))}
              <span className="ml-2 text-sm font-bold text-muted">9.4 из 10</span>
            </div>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {reviews.map((review) => (
              <article key={review.name} className="rounded-[4px] border border-line bg-white p-6 shadow-soft">
                <p className="text-lg leading-7 text-ink">{review.text}</p>
                <div className="mt-7 border-t border-line pt-5">
                  <div className="font-bold text-ink">{review.name}</div>
                  <div className="mt-1 text-sm font-semibold text-muted">{review.meta}</div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Contacts() {
  return (
    <section id="contacts" className="bg-paper px-4 pb-20 pt-10 md:pb-28">
      <div className="mx-auto grid max-w-7xl gap-5 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="rounded-[4px] border border-line bg-white p-7 shadow-soft md:p-10">
          <p className="text-sm font-bold text-accent">Контакты</p>
          <h2 className="mt-4 font-display text-[clamp(2.5rem,4.5vw,5rem)] font-medium leading-none tracking-[-0.02em] text-ink">
            Забронировать номер напрямую
          </h2>
          <div className="mt-8 space-y-5">
            <Contact icon={MapPin} title="Адрес" value="г. Сызрань, ул. Ульяновская, 57" />
            <Contact icon={Phone} title="Телефон" value="8-937-239-00-22" href="tel:+79372390022" />
            <Contact icon={Mail} title="Email" value="chaika-otel@mail.ru" href="mailto:chaika-otel@mail.ru" />
          </div>
          <a
            href="tel:+79372390022"
            className="mt-9 inline-flex h-13 w-full items-center justify-center gap-2 rounded-[4px] bg-accent px-7 text-sm font-bold text-white transition hover:bg-accent-dark active:translate-y-px sm:w-auto"
          >
            <Phone className="h-4 w-4" />
            Позвонить администратору
          </a>
        </div>
        <div className="relative min-h-[520px] overflow-hidden rounded-[4px] border border-line bg-white shadow-soft">
          <Image
            src={assetPath("/generated/chaika-map.png")}
            alt="Маршрут к гостинице Чайка в центре Сызрани"
            fill
            sizes="(min-width: 1024px) 55vw, 100vw"
            className="object-cover"
          />
          <div className="absolute bottom-6 left-6 right-6 rounded-[4px] bg-white/88 p-5 shadow-soft backdrop-blur">
            <div className="text-sm font-bold text-accent">Ориентир</div>
            <div className="mt-1 text-xl font-bold text-ink">Ульяновская, 57</div>
            <p className="mt-2 text-sm leading-6 text-muted">
              Центральная часть города, рядом с основными маршрутами и вокзалами.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Contact({
  icon: Icon,
  title,
  value,
  href,
}: {
  icon: typeof MapPin;
  title: string;
  value: string;
  href?: string;
}) {
  const content = (
    <span className="text-lg font-bold text-ink transition hover:text-accent">{value}</span>
  );

  return (
    <div className="flex gap-4">
      <span className="grid h-12 w-12 shrink-0 place-items-center rounded-[4px] bg-paper text-accent">
        <Icon className="h-5 w-5" />
      </span>
      <div>
        <div className="text-sm font-bold text-muted">{title}</div>
        {href ? <a href={href}>{content}</a> : content}
      </div>
    </div>
  );
}

function Footer() {
  return (
    <footer className="bg-paper px-4 pb-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-5 rounded-[4px] border border-line bg-white p-7 text-ink shadow-soft md:flex-row md:items-center md:justify-between md:p-8">
        <div>
          <div className="text-base font-bold">Гостиница «Чайка»</div>
          <p className="mt-2 max-w-md text-sm leading-6 text-muted">
            Городская гостиница в центре Сызрани. Ульяновская, 57. Работаем круглосуточно.
          </p>
        </div>
        <div className="flex flex-col gap-2 text-sm text-muted sm:flex-row sm:items-center sm:gap-5">
          <a href="tel:+79372390022" className="font-bold text-ink hover:text-accent">
            8-937-239-00-22
          </a>
          <a href="mailto:chaika-otel@mail.ru" className="hover:text-accent">
            chaika-otel@mail.ru
          </a>
        </div>
      </div>
    </footer>
  );
}
