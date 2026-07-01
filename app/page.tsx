"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import type { ReactNode } from "react";
import {
  ArrowUpRight,
  BedDouble,
  CalendarDays,
  Car,
  Coffee,
  Mail,
  MapPin,
  Phone,
  Search,
  Star,
  Train,
  Wifi,
} from "lucide-react";

const ease = [0.22, 0.8, 0.28, 1] as [number, number, number, number];
const assetPath = (path: string) => `/chaika${path}`;

const navLinks = [
  { label: "О гостинице", href: "#about" },
  { label: "Номера", href: "#rooms" },
  { label: "Кафе", href: "#dining" },
  { label: "Контакты", href: "#contacts" },
];

const amenities = [
  { icon: BedDouble, title: "Номера от 3700 руб.", text: "Люкс, премиум и стандарт для короткой остановки или командировки." },
  { icon: Coffee, title: "Кафе при гостинице", text: "Завтраки, кофе и спокойный ужин без поиска места после дороги." },
  { icon: Car, title: "Закрытая парковка", text: "Удобно для гостей на машине и тех, кто приезжает поздно вечером." },
  { icon: Wifi, title: "Wi-Fi и рабочие места", text: "Можно созвониться, разобрать почту и спокойно подготовиться к встрече." },
];

const stayImages = [
  { src: "/generated/chaika-room-premium.png", alt: "Светлый номер гостиницы Чайка" },
  { src: "/generated/chaika-cafe.png", alt: "Завтрак в кафе гостиницы Чайка" },
  { src: "/generated/chaika-room-twin.png", alt: "Номер для гостей в центре Сызрани" },
];

const rooms = [
  {
    name: "Люкс",
    price: "7500",
    area: "42 м2",
    image: "/generated/chaika-room-premium.png",
    text: "Просторный номер с отдельной зоной отдыха, большой кроватью и ванной.",
  },
  {
    name: "Премиум",
    price: "5500",
    area: "32 м2",
    image: "/generated/chaika-room-twin.png",
    text: "Улучшенный формат для пары или деловой поездки, когда важен запас пространства.",
  },
  {
    name: "Стандарт",
    price: "3700",
    area: "20 м2",
    image: "/generated/chaika-room-comfort.png",
    text: "Чистый спокойный номер для ночи в пути, работы и восстановления после дороги.",
  },
];

const cityNotes = [
  {
    date: "Центр",
    title: "Историческая часть рядом",
    image: "/generated/chaika-map.png",
  },
  {
    date: "24/7",
    title: "Заезд в любое время",
    image: "/generated/chaika-facade.png",
  },
  {
    date: "Деловая поездка",
    title: "Тихая база между встречами",
    image: "/generated/chaika-room-comfort.png",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-paper text-ink">
      <Hero />
      <About />
      <ImageTriptych />
      <Rooms />
      <Dining />
      <Meetings />
      <City />
      <Contacts />
    </main>
  );
}

function Hero() {
  return (
    <section className="relative min-h-[100dvh] overflow-hidden bg-ink text-white">
      <Image
        src={assetPath("/generated/chaika-facade.png")}
        alt="Гостиница Чайка в центре Сызрани"
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgb(0_0_0_/_0.62)_0%,rgb(0_0_0_/_0.34)_48%,rgb(0_0_0_/_0.18)_100%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgb(0_0_0_/_0.38)_0%,transparent_38%,rgb(0_0_0_/_0.34)_100%)]" />

      <header className="absolute inset-x-0 top-0 z-20">
        <div className="mx-auto flex h-20 max-w-[1340px] items-center justify-between px-5 text-[11px] font-bold uppercase tracking-[0.12em] md:px-10">
          <a href="#top" className="text-lg normal-case tracking-normal text-white">
            Чайка
          </a>
          <nav className="hidden items-center gap-9 lg:flex">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} className="text-white/82 transition hover:text-white">
                {link.label}
              </a>
            ))}
          </nav>
          <a
            href="tel:+79372390022"
            className="rounded-full bg-white px-5 py-3 text-[10px] text-ink transition hover:bg-accent hover:text-white"
          >
            Забронировать
          </a>
        </div>
      </header>

      <div id="top" className="relative z-10 mx-auto flex min-h-[100dvh] max-w-[1340px] flex-col justify-end px-5 pb-7 pt-28 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 26 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease }}
          className="mb-10 max-w-[760px] md:mb-16"
        >
          <p className="mb-5 text-[11px] font-bold uppercase tracking-[0.18em] text-white/74">
            Городская гостиница - Сызрань
          </p>
          <h1 className="font-display text-[clamp(58px,8.4vw,132px)] font-medium leading-[0.86] tracking-normal">
            Остановитесь в центре города.
          </h1>
          <p className="mt-8 max-w-[520px] text-base leading-7 text-white/78 md:text-lg">
            "Чайка" - спокойная гостиница на Ульяновской, 57: рядом городские маршруты,
            вокзал, кафе, парковка и номера для нормального отдыха после дороги.
          </p>
        </motion.div>

        <div className="grid gap-4 lg:grid-cols-[1fr_auto] lg:items-end">
          <BookingBar />
          <div className="w-fit bg-white px-5 py-4 text-ink shadow-[0_18px_55px_rgb(0_0_0_/_0.18)]">
            <div className="flex items-center gap-1 text-accent">
              {Array.from({ length: 5 }).map((_, index) => (
                <Star key={index} className="h-4 w-4 fill-current" />
              ))}
            </div>
            <div className="mt-2 text-sm font-bold">4.7 по отзывам гостей</div>
            <div className="mt-1 text-xs text-muted">Для отдыха и командировок</div>
          </div>
        </div>
      </div>
    </section>
  );
}

function BookingBar() {
  return (
    <div className="grid gap-2 bg-white p-2 text-ink shadow-[0_24px_70px_rgb(0_0_0_/_0.22)] md:grid-cols-[1.4fr_1fr_1fr_auto] md:rounded-full">
      <div className="flex min-h-14 items-center gap-3 px-5">
        <MapPin className="h-5 w-5 text-accent" />
        <div>
          <div className="text-[10px] font-bold uppercase tracking-[0.12em] text-muted">Где</div>
          <div className="text-sm font-bold">Сызрань, Ульяновская 57</div>
        </div>
      </div>
      <div className="flex min-h-14 items-center gap-3 border-t border-line px-5 md:border-l md:border-t-0">
        <CalendarDays className="h-5 w-5 text-accent" />
        <div>
          <div className="text-[10px] font-bold uppercase tracking-[0.12em] text-muted">Заезд</div>
          <div className="text-sm font-bold">Сегодня</div>
        </div>
      </div>
      <div className="flex min-h-14 items-center gap-3 border-t border-line px-5 md:border-l md:border-t-0">
        <CalendarDays className="h-5 w-5 text-accent" />
        <div>
          <div className="text-[10px] font-bold uppercase tracking-[0.12em] text-muted">Выезд</div>
          <div className="text-sm font-bold">Любая дата</div>
        </div>
      </div>
      <a
        href="tel:+79372390022"
        className="flex min-h-14 items-center justify-center gap-2 rounded-full bg-accent px-7 text-sm font-extrabold uppercase tracking-[0.08em] text-white transition hover:bg-accent-dark"
      >
        <Search className="h-4 w-4" />
        Найти
      </a>
    </div>
  );
}

function About() {
  return (
    <section id="about" className="bg-white py-20 md:py-28">
      <div className="mx-auto grid max-w-[1220px] gap-12 px-5 md:px-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
        <Reveal>
          <p className="kicker">Гостиница Чайка</p>
          <h2 className="mt-4 max-w-[580px] font-display text-[clamp(46px,5.8vw,84px)] font-medium leading-[0.96]">
            Элегантно и по делу
          </h2>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#rooms" className="rounded-full bg-ink px-5 py-3 text-xs font-extrabold uppercase tracking-[0.1em] text-white">
              Номера
            </a>
            <a href="tel:+79372390022" className="rounded-full bg-[#eef3f7] px-5 py-3 text-xs font-extrabold uppercase tracking-[0.1em] text-ink">
              Позвонить
            </a>
          </div>
        </Reveal>

        <Reveal className="lg:pt-8">
          <p className="max-w-[540px] text-lg font-bold leading-8">
            Это не отель на берегу и не курортная легенда. Это практичная городская
            точка в центре Сызрани: чистые номера, быстрое заселение, кафе, парковка
            и понятный сервис.
          </p>
          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            {amenities.map((item) => (
              <div key={item.title} className="border-t border-line pt-5">
                <item.icon className="mb-4 h-5 w-5 text-accent" />
                <h3 className="text-base font-extrabold">{item.title}</h3>
                <p className="mt-2 text-sm leading-6 text-muted">{item.text}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function ImageTriptych() {
  return (
    <section className="bg-white pb-20 md:pb-28">
      <div className="mx-auto grid max-w-[1340px] gap-7 px-5 md:grid-cols-3 md:px-10">
        {stayImages.map((image, index) => (
          <Reveal key={image.src} className={index === 1 ? "md:mt-0" : "md:mt-10"}>
            <div className="relative aspect-[0.92] overflow-hidden bg-[#eef3f7]">
              <Image
                src={assetPath(image.src)}
                alt={image.alt}
                fill
                loading="eager"
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover transition duration-700 hover:scale-[1.03]"
              />
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function Rooms() {
  return (
    <section id="rooms" className="bg-white py-20 md:py-28">
      <div className="mx-auto max-w-[1220px] px-5 md:px-10">
        <div className="grid gap-10 lg:grid-cols-[1fr_0.9fr] lg:items-end">
          <Reveal>
            <p className="kicker">Номера каждый день</p>
            <h2 className="mt-4 font-display text-[clamp(44px,5vw,76px)] font-medium leading-none">
              Тихо, чисто, в центре
            </h2>
          </Reveal>
          <Reveal>
            <p className="max-w-[500px] text-base font-bold leading-7 text-ink/78">
              Форматы под разные сценарии: остановиться на ночь, провести несколько
              рабочих дней или приехать вдвоем на выходные в Сызрань.
            </p>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-8 lg:grid-cols-3">
          {rooms.map((room) => (
            <Reveal key={room.name}>
              <article className="group">
                <div className="relative aspect-[0.82] overflow-hidden bg-[#eef3f7]">
                  <Image
                    src={assetPath(room.image)}
                    alt={`Номер ${room.name} в гостинице Чайка`}
                    fill
                    loading="eager"
                    sizes="(max-width: 1024px) 100vw, 33vw"
                    className="object-cover transition duration-700 group-hover:scale-[1.03]"
                  />
                  <div className="absolute left-4 top-4 bg-white px-4 py-3 text-xs font-extrabold uppercase tracking-[0.1em] text-ink">
                    от {room.price} руб.
                  </div>
                </div>
                <div className="grid grid-cols-[1fr_auto] gap-4 border-b border-line py-6">
                  <div>
                    <h3 className="font-display text-4xl font-medium">{room.name}</h3>
                    <p className="mt-3 text-sm leading-6 text-muted">{room.text}</p>
                  </div>
                  <div className="pt-2 text-sm font-bold text-accent">{room.area}</div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Dining() {
  return (
    <section id="dining" className="relative min-h-[560px] overflow-hidden bg-ink text-white md:min-h-[680px]">
      <Image
        src={assetPath("/generated/chaika-cafe.png")}
        alt="Кафе и завтрак в гостинице Чайка"
        fill
        loading="eager"
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-[rgb(0_0_0_/_0.56)]" />
      <div className="relative z-10 mx-auto flex min-h-[560px] max-w-[980px] flex-col items-center justify-center px-5 text-center md:min-h-[680px]">
        <Reveal>
          <p className="text-[11px] font-extrabold uppercase tracking-[0.16em] text-white/76">
            Завтрак, кофе, вечер
          </p>
          <h2 className="mt-5 font-display text-[clamp(46px,6vw,86px)] font-medium leading-none">
            Кафе без лишней суеты
          </h2>
          <p className="mx-auto mt-6 max-w-[620px] text-base font-bold leading-7 text-white/78">
            После дороги важны простые вещи: горячий завтрак, нормальный кофе,
            спокойный стол и возможность не искать место по городу.
          </p>
          <a
            href="tel:+79372390022"
            className="mt-8 inline-flex rounded-full bg-white/18 px-6 py-4 text-xs font-extrabold uppercase tracking-[0.1em] text-white backdrop-blur transition hover:bg-white hover:text-ink"
          >
            Уточнить питание
          </a>
        </Reveal>
      </div>
    </section>
  );
}

function Meetings() {
  return (
    <section className="bg-white py-20 md:py-28">
      <div className="mx-auto max-w-[1220px] px-5 md:px-10">
        <div className="grid gap-10 lg:grid-cols-[1fr_0.9fr] lg:items-end">
          <Reveal>
            <p className="kicker">Встречи и поездки</p>
            <h2 className="mt-4 font-display text-[clamp(44px,5vw,76px)] font-medium leading-none">
              Для деловых гостей
            </h2>
            <a href="#contacts" className="mt-7 inline-flex rounded-full bg-[#eef3f7] px-5 py-3 text-xs font-extrabold uppercase tracking-[0.1em] text-ink">
              Контакты
            </a>
          </Reveal>
          <Reveal>
            <p className="max-w-[520px] text-base font-bold leading-7 text-ink/78">
              Командировки, небольшие группы, поздний заезд, ранний выезд и
              спокойное утро перед встречей. "Чайка" держит базовые вещи в порядке.
            </p>
          </Reveal>
        </div>

        <Reveal className="mt-14">
          <div className="relative h-[320px] overflow-hidden bg-[#eef3f7] md:aspect-[16/9] md:h-auto">
            <Image
              src={assetPath("/generated/chaika-event.png")}
              alt="Вечерний стол для мероприятий в гостинице"
              fill
              loading="eager"
              sizes="(max-width: 1280px) 100vw, 1220px"
              className="object-cover"
            />
            <div className="absolute left-5 top-5 grid gap-2 md:left-8 md:top-8">
              <span className="w-fit bg-white px-4 py-3 text-xs font-extrabold uppercase tracking-[0.1em] text-ink">
                До 24/7 заселение
              </span>
              <span className="w-fit bg-accent px-4 py-3 text-xs font-extrabold uppercase tracking-[0.1em] text-white">
                Центр Сызрани
              </span>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function City() {
  return (
    <section className="bg-white pb-20 md:pb-28">
      <div className="mx-auto max-w-[1220px] px-5 md:px-10">
        <div className="grid gap-10 lg:grid-cols-[1fr_0.9fr] lg:items-end">
          <Reveal>
            <p className="kicker">Сызрань рядом</p>
            <h2 className="mt-4 font-display text-[clamp(44px,5vw,76px)] font-medium leading-none">
              Город начинается у двери
            </h2>
          </Reveal>
          <Reveal>
            <p className="max-w-[520px] text-base font-bold leading-7 text-ink/78">
              Удобно выйти по делам, вернуться на отдых, оставить машину во дворе и
              не тратить вечер на длинные переезды.
            </p>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-7 md:grid-cols-3">
          {cityNotes.map((note) => (
            <Reveal key={note.title}>
              <article className="group">
                <div className="relative aspect-[0.86] overflow-hidden bg-[#eef3f7]">
                  <Image
                    src={assetPath(note.image)}
                    alt={note.title}
                    fill
                    loading="eager"
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition duration-700 group-hover:scale-[1.03]"
                  />
                </div>
                <div className="mt-4 text-[11px] font-extrabold uppercase tracking-[0.12em] text-accent">
                  {note.date}
                </div>
                <h3 className="mt-2 font-display text-3xl font-medium leading-tight">{note.title}</h3>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contacts() {
  return (
    <footer id="contacts" className="bg-[#f5f8fb] py-16 text-ink md:py-20">
      <div className="mx-auto grid max-w-[1220px] gap-10 px-5 md:px-10 lg:grid-cols-[1fr_1.2fr] lg:items-start">
        <Reveal>
          <p className="kicker">Контакты</p>
          <h2 className="mt-4 font-display text-[clamp(42px,5vw,72px)] font-medium leading-none">
            Забронировать номер
          </h2>
          <p className="mt-6 max-w-[440px] text-base font-bold leading-7 text-muted">
            Позвони, чтобы уточнить свободные номера, время заезда, парковку и питание.
          </p>
        </Reveal>

        <Reveal>
          <div className="grid gap-4 sm:grid-cols-2">
            <Contact icon={MapPin} title="Адрес" value="г. Сызрань, ул. Ульяновская, 57" />
            <Contact icon={Phone} title="Телефон" value="8-937-239-00-22" href="tel:+79372390022" />
            <Contact icon={Mail} title="Email" value="chaika-otel@mail.ru" href="mailto:chaika-otel@mail.ru" />
            <Contact icon={Train} title="Формат" value="Городская гостиница 24/7" />
          </div>
          <div className="mt-7 flex flex-wrap gap-3">
            <a
              href="tel:+79372390022"
              className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-4 text-sm font-extrabold uppercase tracking-[0.08em] text-white transition hover:bg-accent-dark"
            >
              Позвонить
              <Phone className="h-4 w-4" />
            </a>
            <a
              href="mailto:chaika-otel@mail.ru"
              className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-4 text-sm font-extrabold uppercase tracking-[0.08em] text-ink transition hover:text-accent"
            >
              Написать
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
        </Reveal>
      </div>
      <div className="mx-auto mt-14 flex max-w-[1220px] flex-col gap-4 border-t border-line px-5 pt-7 text-xs font-bold uppercase tracking-[0.12em] text-muted md:flex-row md:items-center md:justify-between md:px-10">
        <span>Гостиница Чайка</span>
        <span>Центр Сызрани - Ульяновская, 57</span>
      </div>
    </footer>
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
    <div className="min-h-[132px] bg-white p-6 transition hover:-translate-y-1 hover:shadow-soft">
      <Icon className="h-5 w-5 text-accent" />
      <div className="mt-5 text-[11px] font-extrabold uppercase tracking-[0.12em] text-muted">{title}</div>
      <div className="mt-2 text-lg font-extrabold leading-snug">{value}</div>
    </div>
  );

  if (href) {
    return <a href={href}>{content}</a>;
  }

  return content;
}

function Reveal({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, ease }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
