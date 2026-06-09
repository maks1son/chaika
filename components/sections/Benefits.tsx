import { Clock, Wifi, Car, Coffee, MapPin } from "lucide-react";

const items = [
  { icon: Clock, title: "24/7", sub: "Круглосуточно" },
  { icon: Wifi, title: "Wi-Fi", sub: "Бесплатный интернет" },
  { icon: Car, title: "Парковка", sub: "Закрытая, охраняемая" },
  { icon: Coffee, title: "Кафе", sub: "На территории отеля" },
  { icon: MapPin, title: "Центр", sub: "Историческое сердце" },
];

export default function Benefits() {
  return (
    <section className="bg-petrol-deep">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid grid-cols-2 md:grid-cols-5 divide-x divide-ivory/10 border-x border-ivory/10">
          {items.map((it) => (
            <div
              key={it.title}
              className="group flex flex-col items-center text-center gap-2 py-8 px-3 hover:bg-petrol-night/60 transition-colors"
            >
              <it.icon className="h-6 w-6 text-cyan group-hover:scale-110 transition-transform" />
              <span className="font-[family-name:var(--font-cormorant)] text-2xl text-ivory leading-none mt-1">
                {it.title}
              </span>
              <span className="text-xs text-ivory/50 tracking-wide">
                {it.sub}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
