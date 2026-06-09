const navLinks = [
  { label: "О гостинице", href: "#about" },
  { label: "Номера", href: "#rooms" },
  { label: "Услуги", href: "#services" },
  { label: "Галерея", href: "#gallery" },
  { label: "Контакты", href: "#location" },
];

export default function Footer() {
  return (
    <footer className="bg-petrol-night text-ivory px-6 md:px-10 pt-16 pb-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-12 pb-12 border-b border-ivory/10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2.5 mb-5">
              <svg viewBox="0 0 48 24" fill="none" className="h-7 w-7 text-cyan" aria-hidden>
                <path
                  d="M2 18C8 18 12 6 18 6C22 6 23 12 24 12C25 12 26 6 30 6C36 6 40 18 46 18"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span className="font-[family-name:var(--font-cormorant)] text-2xl font-semibold tracking-[0.2em]">
                ЧАЙКА
              </span>
            </div>
            <p className="text-ivory/55 text-sm leading-relaxed max-w-xs">
              Гостиница в историческом центре Сызрани. Комфортные номера, тёплый
              сервис и круглосуточное заселение с 1981 года.
            </p>
          </div>

          {/* Nav */}
          <div className="md:justify-self-center">
            <h4 className="text-xs uppercase tracking-widest text-ivory/40 font-semibold mb-5">
              Навигация
            </h4>
            <ul className="space-y-3">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="text-ivory/70 hover:text-cyan transition-colors text-sm"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contacts */}
          <div className="md:justify-self-end">
            <h4 className="text-xs uppercase tracking-widest text-ivory/40 font-semibold mb-5">
              Контакты
            </h4>
            <ul className="space-y-3 text-sm">
              <li className="text-ivory/70">г. Сызрань, ул. Ульяновская, 57</li>
              <li>
                <a href="tel:+79372390022" className="text-ivory hover:text-cyan transition-colors font-semibold">
                  8-937-239-00-22
                </a>
              </li>
              <li>
                <a href="mailto:chaika-otel@mail.ru" className="text-ivory/70 hover:text-cyan transition-colors">
                  chaika-otel@mail.ru
                </a>
              </li>
              <li className="text-ivory/55">Круглосуточно, 7 дней в неделю</li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-8 text-xs text-ivory/40">
          <p>© {new Date().getFullYear()} Гостиница «Чайка», Сызрань. Все права защищены.</p>
          <p>Сделано с заботой о гостях</p>
        </div>
      </div>
    </footer>
  );
}
