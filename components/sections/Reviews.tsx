"use client";

import { Star } from "lucide-react";

const reviews = [
  {
    name: "Анна К.",
    context: "Деловая поездка",
    text: "Останавливалась по работе на три ночи. Тихо, чисто, до делового центра пешком. Завтрак приятно удивил — всё по-домашнему.",
  },
  {
    name: "Игорь М.",
    context: "Проездом",
    text: "Приехал ночным поездом в час ночи — заселили без вопросов и доплат. Парковка во дворе, машина в безопасности. Вернусь.",
  },
  {
    name: "Семья Орловых",
    context: "Отпуск",
    text: "Брали Люкс на выходные. Просторно, вид на старый город, ванна — то что надо после долгой дороги. Спасибо персоналу!",
  },
  {
    name: "Дмитрий В.",
    context: "Командировка",
    text: "Идеально для работы: быстрый Wi-Fi, стол, тишина. Кафе внизу выручало вечерами. Соотношение цены и качества — лучшее в городе.",
  },
  {
    name: "Ольга С.",
    context: "Туризм",
    text: "Уютный номер Комфорт плюс за разумные деньги. Расположение в самом центре — всё рядом. Чисто и аккуратно, рекомендую.",
  },
  {
    name: "Группа «СамараТур»",
    context: "Коллективный заезд",
    text: "Размещали группу 20 человек. Помогли с блоком номеров и завтраками на всех. Чёткая организация, всё вовремя.",
  },
];

export default function Reviews() {
  const loop = [...reviews, ...reviews];
  return (
    <section className="bg-stone/40 py-24 md:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-10 mb-12">
        <div className="text-center max-w-2xl mx-auto">
          <span className="inline-flex items-center gap-2.5 mb-5">
            <span className="h-px w-10 bg-teal" />
            <span className="text-xs tracking-[0.3em] uppercase text-teal font-semibold">
              Отзывы гостей
            </span>
            <span className="h-px w-10 bg-teal" />
          </span>
          <h2
            className="font-[family-name:var(--font-cormorant)] text-petrol-deep font-medium leading-[1.05]"
            style={{ fontSize: "clamp(2.25rem, 4.5vw, 3.75rem)" }}
          >
            Нас выбирают <span className="italic text-teal">снова</span>
          </h2>
          <div className="mt-5 flex items-center justify-center gap-2 text-petrol-deep/60 text-sm">
            <span className="flex gap-0.5">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-teal text-teal" />
              ))}
            </span>
            <span className="font-semibold text-petrol-deep">9.4 / 10</span>
            <span>· более 1200 отзывов</span>
          </div>
        </div>
      </div>

      {/* Marquee */}
      <div className="relative">
        <div className="flex gap-6 w-max animate-[marquee_42s_linear_infinite] hover:[animation-play-state:paused]">
          {loop.map((r, i) => (
            <article
              key={i}
              className="w-[330px] md:w-[380px] shrink-0 bg-ivory rounded-3xl p-8 shadow-sm border border-petrol-deep/5"
            >
              <span className="flex gap-0.5 mb-4">
                {Array.from({ length: 5 }).map((_, j) => (
                  <Star key={j} className="h-4 w-4 fill-teal text-teal" />
                ))}
              </span>
              <p className="text-petrol-deep/75 leading-relaxed mb-6 font-[family-name:var(--font-cormorant)] text-xl italic">
                «{r.text}»
              </p>
              <div className="flex items-center gap-3 pt-4 border-t border-petrol-deep/10">
                <div className="h-10 w-10 rounded-full bg-teal/15 flex items-center justify-center text-teal font-semibold">
                  {r.name[0]}
                </div>
                <div>
                  <div className="text-sm font-semibold text-petrol-deep">
                    {r.name}
                  </div>
                  <div className="text-xs text-petrol-deep/50">{r.context}</div>
                </div>
              </div>
            </article>
          ))}
        </div>
        {/* Edge fades */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-stone/40 to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-stone/40 to-transparent" />
      </div>
    </section>
  );
}
