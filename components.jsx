/* Gisela Combos — components */
const { useState, useEffect, useMemo, useRef } = React;

// ———————————————————————————————————————————————————————————
// Data
// ———————————————————————————————————————————————————————————
const COMBOS = [
  { id: 1, name: "Combo S1", tagline: "El completo · 6 bocados", items: ["36 Tartitas", "36 Pizzetas", "36 Chips J y Q", "36 Salchichitas envueltas", "36 Mini Empanaditas", "24 Mini Hamburguesas"], price: 220000, category: "salado", servings: "40–50 personas", image: "assets/combos/variado2.jpg" },
  { id: 2, name: "Combo S2", tagline: "Clásico salado", items: ["24 Pizzetas", "24 Mini Empanaditas", "24 Mini Hamburguesas"], price: 78000, category: "salado", servings: "12–15 personas", image: "assets/combos/variado.jpg" },
  { id: 3, name: "Combo S3", tagline: "Picoteo express", items: ["12 Pizzetas", "12 Chips J y Q", "12 Mini Empanaditas", "12 Mini Hamburguesas"], price: 48000, category: "salado", servings: "6–8 personas", image: "assets/combos/pizzetas.jpg" },
  { id: 4, name: "Combo S4", tagline: "Variado dorado", items: ["24 Tartitas", "24 Pizzetas", "24 Salchichitas envueltas", "24 Mini Empanaditas"], price: 85000, category: "salado", servings: "15–18 personas", image: "assets/combos/tartitas.jpg" },
  { id: 5, name: "Combo S5", tagline: "Para picar sin parar", items: ["24 Pizzetas", "24 Salchichitas envueltas", "24 Mini Empanaditas", "24 Chips J y Q"], price: 75000, category: "salado", servings: "12–15 personas", image: "assets/combos/empanaditas.jpg" },
  { id: 6, name: "Combo D6", tagline: "Trío de tartas", items: ["1 Pasta Frola", "1 Tarta Cocada", "1 Tarta Bombón", "(todo 26cm de diámetro)"], price: 53000, category: "dulce", servings: "20–25 porciones", image: "assets/combos/tartafrutal.jpg" },
  { id: 7, name: "Combo D7", tagline: "Frutal & cítrico", items: ["1 Tarta Frutal (frutilla o durazno)", "1 Lemon Pie", "1 Tarta Bombón", "(todo 26cm)"], price: 57000, category: "dulce", servings: "20–25 porciones", image: "assets/combos/LEMON PIE.jpg" },
  { id: 8, name: "Combo D8", tagline: "Mesa dulce clásica", items: ["1 kg Alfajorcitos de Maicena", "1 kg Bombones de Quaker", "12 Cupcakes"], price: 54000, category: "dulce", servings: "25–30 personas", image: "assets/combos/alfajorcitos.jpg" },
  { id: 9, name: "Combo D9", tagline: "Cumpleaños mediano", items: ["1 Torta 1½ kg (1 relleno)", "24 Alfajorcitos de Maicena", "24 Bombones de Quaker", "12 Cupcakes"], price: 68500, category: "dulce", servings: "15–20 personas", image: "assets/combos/tartitas2.jpg" },
  { id: 10, name: "Combo D10", tagline: "Cumpleaños grande", items: ["1 Torta 2 kg (2 rellenos)", "1 kg Alfajorcitos de Maicena", "24 Bombones de Quaker", "1 Tarta Frutal 26cm"], price: 83500, category: "dulce", servings: "25–30 personas", image: "assets/combos/tartafrutal.jpg" },
];

const INDIVIDUALES = [
  { name: "Mini Pizzetas", unit: "docena", image: "assets/combos/pizzetas.jpg" },
  { name: "Mini Empanaditas", unit: "docena", image: "assets/combos/empanaditas.jpg" },
  { name: "Tartitas saladas", unit: "docena", image: "assets/combos/tartitas.jpg" },
  { name: "Chips J y Q", unit: "docena", image: "assets/combos/CHIPS.jpg" },
  { name: "Alfajorcitos de Maicena", unit: "kg", image: "assets/combos/alfajorcitos.jpg" },
  { name: "Lemon Pie", unit: "26 cm", image: "assets/combos/LEMON PIE.jpg" },
  { name: "Tarta Frutal", unit: "26 cm", image: "assets/combos/tartafrutal.jpg" },
  { name: "Tartitas dulces", unit: "docena", image: "assets/combos/tartitas2.jpg" },
];

const WA_NUMBER = "5492915397100";
const waLink = (msg) => `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(msg)}`;
const money = (n) => `$${n.toLocaleString("es-AR")}`;

// ———————————————————————————————————————————————————————————
// Icons
// ———————————————————————————————————————————————————————————
const WA = ({ cls = "w-4 h-4" }) => (
  <svg viewBox="0 0 24 24" className={cls} fill="currentColor" aria-hidden="true">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
    <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.554 4.118 1.528 5.845L.057 23.882 6.304 22.44A11.938 11.938 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 01-5.007-1.374l-.36-.214-3.713.973.99-3.617-.235-.372A9.818 9.818 0 1112 21.818z" />
  </svg>
);

const IconSparkle = ({ cls = "w-4 h-4" }) => (
  <svg viewBox="0 0 24 24" className={cls} fill="currentColor" aria-hidden="true">
    <path d="M12 2l1.8 5.4L19 9l-5.2 1.6L12 16l-1.8-5.4L5 9l5.2-1.6L12 2z" />
    <circle cx="19" cy="17" r="1.2" />
    <circle cx="5" cy="19" r="0.9" />
  </svg>
);

const IconMinus = ({ cls = "w-4 h-4" }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" className={cls}><path d="M5 12h14" /></svg>
);
const IconPlus = ({ cls = "w-4 h-4" }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" className={cls}><path d="M12 5v14M5 12h14" /></svg>
);
const IconTrash = ({ cls = "w-4 h-4" }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={cls}><path d="M3 6h18M8 6V4h8v2M6 6l1 14h10l1-14" /></svg>
);
const IconCheck = ({ cls = "w-4 h-4" }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className={cls}><path d="M5 12l5 5L20 7" /></svg>
);
const IconChevron = ({ cls = "w-4 h-4" }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={cls}><path d="M9 18l6-6-6-6" /></svg>
);
const IconMenu = ({ cls = "w-6 h-6" }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className={cls}><path d="M3 6h18M3 12h18M3 18h18" /></svg>
);
const IconClose = ({ cls = "w-6 h-6" }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className={cls}><path d="M6 6l12 12M6 18L18 6" /></svg>
);
const IconPin = ({ cls = "w-4 h-4" }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={cls}><path d="M12 22s-7-7.5-7-12a7 7 0 1 1 14 0c0 4.5-7 12-7 12z" /><circle cx="12" cy="10" r="2.5" /></svg>
);
const IconClock = ({ cls = "w-4 h-4" }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={cls}><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></svg>
);
const IconHeart = ({ cls = "w-4 h-4" }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={cls}><path d="M12 21s-7-4.5-9.5-9A5.5 5.5 0 0 1 12 6a5.5 5.5 0 0 1 9.5 6c-2.5 4.5-9.5 9-9.5 9z" /></svg>
);

// ———————————————————————————————————————————————————————————
// Header
// ———————————————————————————————————————————————————————————
function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { href: "#combos", label: "Combos" },
    { href: "#individuales", label: "Productos" },
    { href: "#gisela", label: "Sobre Gisela" },
    { href: "#calculador", label: "Presupuesto" },
    { href: "#como-pedir", label: "Cómo pedir" },
  ];

  return (
    <header className={`gc-header ${scrolled ? "is-scrolled" : ""}`}>
      <div className="gc-container gc-header__row">
        <a href="#top" className="gc-header__brand" aria-label="Gisela Combos — inicio">
          <img src="assets/logo-gisela.png" alt="" />
          <span className="gc-header__brand-text">
            <span className="gc-header__brand-name">Gisela</span>
            <span className="gc-header__brand-sub">Combos</span>
          </span>
        </a>
        <nav className="gc-header__nav" aria-label="Principal">
          {links.map(l => (
            <a key={l.href} href={l.href}>{l.label}</a>
          ))}
        </nav>
        <div className="gc-header__cta">
          <a className="gc-btn gc-btn--wa gc-btn--sm" href={waLink("Hola Gisela! Quiero hacer un pedido.")} target="_blank" rel="noopener">
            <WA cls="w-4 h-4" />
            <span>WhatsApp</span>
          </a>
          <button className="gc-header__burger" onClick={() => setOpen(v => !v)} aria-label="Menú" aria-expanded={open}>
            {open ? <IconClose /> : <IconMenu />}
          </button>
        </div>
      </div>
      {open && (
        <nav className="gc-header__mobile" aria-label="Principal móvil">
          {links.map(l => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)}>
              <span>{l.label}</span>
              <IconChevron />
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}

// ———————————————————————————————————————————————————————————
// Hero
// ———————————————————————————————————————————————————————————
function Hero({ heroStyle }) {
  const withHeroImage = heroStyle !== "typography";
  return (
    <section id="top" className={`gc-hero ${withHeroImage ? "gc-hero--photo" : "gc-hero--type"}`}>
      <div className="gc-hero__bg" aria-hidden="true">
        <span className="gc-blob gc-blob--peach" />
        <span className="gc-blob gc-blob--rose" />
        <span className="gc-blob gc-blob--beige" />
      </div>
      <div className="gc-container gc-hero__grid">
        <div className="gc-hero__copy">
          <div className="gc-hero__eyebrow">
            <IconSparkle cls="w-3.5 h-3.5" />
            <span>Pastelería & salados · Bahía Blanca</span>
          </div>
          <h1 className="gc-hero__title">
            Sabores que acompañan
            <br />
            <em>tus mejores</em> momentos.
          </h1>
          <p className="gc-hero__lead">
            Combos dulces y salados, listos para tu cumpleaños, reunión o evento.
            Pedí por WhatsApp y coordinamos cantidad, fecha y entrega.
          </p>
          <div className="gc-hero__ctas">
            <a className="gc-btn gc-btn--wa gc-btn--lg" href={waLink("Hola Gisela! Quiero hacer un pedido.")} target="_blank" rel="noopener">
              <WA cls="w-5 h-5" />
              <span>Pedir por WhatsApp</span>
            </a>
            <a className="gc-btn gc-btn--ghost gc-btn--lg" href="#combos">
              <span>Ver los combos</span>
              <IconChevron />
            </a>
          </div>
          <div className="gc-hero__meta">
            <div><strong>10</strong><span>combos armados</span></div>
            <div className="gc-hero__sep" />
            <div><strong>Seña 50%</strong><span>congelás el precio</span></div>
            <div className="gc-hero__sep" />
            <div><strong>Bahía Blanca</strong><span>y alrededores</span></div>
          </div>
        </div>
        {withHeroImage && (
          <div className="gc-hero__media">
            <div className="gc-hero__frame">
              <img src="assets/combos/variado.jpg" alt="Bandeja de pizzetas, empanaditas y bocados variados" />
              <div className="gc-hero__badge">
                <IconHeart cls="w-3.5 h-3.5" />
                <span>Hecho con cariño</span>
              </div>
            </div>
            <div className="gc-hero__frame gc-hero__frame--small">
              <img src="assets/combos/LEMON PIE.jpg" alt="Lemon pie recién horneado" />
            </div>
            <div className="gc-hero__tag">
              <span className="gc-hero__tag-dot" />
              <span>Reservá con anticipación</span>
            </div>
          </div>
        )}
      </div>
      <Marquee />
    </section>
  );
}

function Marquee() {
  const items = ["Pizzetas", "Tartitas", "Empanaditas", "Mini hamburguesas", "Chips J y Q", "Lemon pie", "Alfajorcitos", "Tarta frutal", "Bombones de Quaker", "Cupcakes", "Salchichitas envueltas", "Tarta bombón"];
  const loop = [...items, ...items];
  return (
    <div className="gc-marquee" aria-hidden="true">
      <div className="gc-marquee__track">
        {loop.map((t, i) => (
          <span className="gc-marquee__item" key={i}>
            <span className="gc-marquee__dot" />
            {t}
          </span>
        ))}
      </div>
    </div>
  );
}

// ———————————————————————————————————————————————————————————
// Combos section
// ———————————————————————————————————————————————————————————
function CombosSection({ density }) {
  const [tab, setTab] = useState("todos");
  const filtered = useMemo(() => {
    if (tab === "todos") return COMBOS;
    return COMBOS.filter(c => c.category === tab);
  }, [tab]);

  const counts = {
    todos: COMBOS.length,
    salado: COMBOS.filter(c => c.category === "salado").length,
    dulce: COMBOS.filter(c => c.category === "dulce").length,
  };

  return (
    <section id="combos" className={`gc-section gc-combos gc-combos--${density}`}>
      <div className="gc-container">
        <div className="gc-section__head">
          <div className="gc-section__eyebrow"><span className="gc-dot" /> Menú de combos</div>
          <h2 className="gc-section__title">Elegí el combo perfecto <em>para tu evento</em></h2>
          <p className="gc-section__lead">Salados y dulces pensados por cantidad de invitados. Todos los precios son orientativos — confirmamos por WhatsApp según fecha y zona.</p>
        </div>

        <div className="gc-tabs" role="tablist">
          {[
            { id: "todos", label: "Todos" },
            { id: "salado", label: "Salados" },
            { id: "dulce", label: "Dulces" },
          ].map(t => (
            <button
              key={t.id}
              role="tab"
              aria-selected={tab === t.id}
              className={`gc-tab ${tab === t.id ? "is-active" : ""}`}
              onClick={() => setTab(t.id)}
            >
              <span>{t.label}</span>
              <span className="gc-tab__count">{counts[t.id]}</span>
            </button>
          ))}
        </div>

        <div className="gc-grid gc-grid--combos">
          {filtered.map((c, i) => (
            <ComboCard key={c.id} combo={c} idx={i} density={density} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ComboCard({ combo, idx, density }) {
  const msg = `Hola Gisela! Quiero pedir el ${combo.name} (${money(combo.price)}).`;
  const tone = combo.category === "dulce" ? "dulce" : "salado";
  return (
    <article className={`gc-combo gc-combo--${tone}`} style={{ animationDelay: `${idx * 45}ms` }}>
      <div className="gc-combo__media">
        <img src={combo.image} alt={combo.name} loading="lazy" />
        <span className={`gc-chip gc-chip--${tone}`}>
          {tone === "dulce" ? "Dulce" : "Salado"}
        </span>
        <span className="gc-combo__servings">{combo.servings}</span>
      </div>
      <div className="gc-combo__body">
        <div className="gc-combo__head">
          <h3>{combo.name}</h3>
          <p className="gc-combo__tagline">{combo.tagline}</p>
        </div>
        {density !== "compact" && (
          <ul className="gc-combo__items">
            {combo.items.map((it, i) => (
              <li key={i}><IconCheck cls="w-3.5 h-3.5" /><span>{it}</span></li>
            ))}
          </ul>
        )}
        <div className="gc-combo__foot">
          <div className="gc-combo__price">
            <span className="gc-combo__price-label">Desde</span>
            <span className="gc-combo__price-value">{money(combo.price)}</span>
          </div>
          <a className="gc-btn gc-btn--wa gc-btn--sm" href={waLink(msg)} target="_blank" rel="noopener">
            <WA cls="w-4 h-4" />
            <span>Pedir</span>
          </a>
        </div>
      </div>
    </article>
  );
}

// ———————————————————————————————————————————————————————————
// Productos individuales
// ———————————————————————————————————————————————————————————
function Individuales() {
  return (
    <section id="individuales" className="gc-section gc-individuales">
      <div className="gc-container">
        <div className="gc-section__head gc-section__head--split">
          <div>
            <div className="gc-section__eyebrow"><span className="gc-dot" /> También por separado</div>
            <h2 className="gc-section__title">¿Querés algo <em>puntual</em>? Pedí por unidad.</h2>
          </div>
          <p className="gc-section__lead">
            Si no necesitás un combo completo, también preparamos cantidades a pedido. Consultanos mínimos y disponibilidad por WhatsApp.
          </p>
        </div>
        <div className="gc-grid gc-grid--individuales">
          {INDIVIDUALES.map((p, i) => (
            <a
              key={p.name}
              className="gc-prod"
              href={waLink(`Hola Gisela! Quiero consultar por ${p.name}.`)}
              target="_blank"
              rel="noopener"
              style={{ animationDelay: `${i * 40}ms` }}
            >
              <div className="gc-prod__media">
                <img src={p.image} alt={p.name} loading="lazy" />
              </div>
              <div className="gc-prod__body">
                <h3>{p.name}</h3>
                <p>por {p.unit}</p>
                <span className="gc-prod__arrow"><IconChevron /></span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

// ———————————————————————————————————————————————————————————
// Sobre Gisela
// ———————————————————————————————————————————————————————————
function SobreGisela() {
  return (
    <section id="gisela" className="gc-section gc-about">
      <div className="gc-container gc-about__grid">
        <div className="gc-about__media">
          <div className="gc-about__frame">
            <img src="assets/combos/variado2.jpg" alt="Bandejas de productos caseros preparados" />
          </div>
          <div className="gc-about__tag">
            <IconSparkle cls="w-3.5 h-3.5" />
            <span>Desde Bahía Blanca</span>
          </div>
        </div>
        <div className="gc-about__copy">
          <div className="gc-section__eyebrow"><span className="gc-dot" /> Sobre Gisela</div>
          <h2 className="gc-section__title gc-section__title--left">
            Cocinamos para que vos <em>disfrutes</em> tu evento.
          </h2>
          <p>
            Gisela Combos nació de la idea simple de que organizar un cumpleaños, un té o una reunión
            no tiene por qué ser un lío. Preparamos todo en casa, con ingredientes frescos y recetas
            que ya son de familia — las mismas pizzetas, tartitas y alfajorcitos que comen en tu evento
            son los que le damos a los nuestros.
          </p>
          <ul className="gc-about__bullets">
            <li><span className="gc-about__pill">1</span><div><strong>Hecho en el día</strong><p>Coordinamos retiro/entrega para que llegue fresquísimo.</p></div></li>
            <li><span className="gc-about__pill">2</span><div><strong>Reservá con seña</strong><p>Con el 50% congelás el precio y asegurás tu fecha.</p></div></li>
            <li><span className="gc-about__pill">3</span><div><strong>Atención personal</strong><p>Te respondemos por WhatsApp — nada de formularios eternos.</p></div></li>
          </ul>
          <a className="gc-btn gc-btn--wa gc-btn--md" href={waLink("Hola Gisela! Me gustaría consultarte sobre los combos.")} target="_blank" rel="noopener">
            <WA cls="w-4 h-4" />
            <span>Hablar con Gisela</span>
          </a>
        </div>
      </div>
    </section>
  );
}

// ———————————————————————————————————————————————————————————
// Calculador de Presupuesto
// ———————————————————————————————————————————————————————————
function Calculador() {
  const [qty, setQty] = useState({});
  const [openCat, setOpenCat] = useState("salado");

  const inc = (id) => setQty(p => ({ ...p, [id]: (p[id] || 0) + 1 }));
  const dec = (id) => setQty(p => {
    const v = (p[id] || 0) - 1;
    if (v <= 0) { const n = { ...p }; delete n[id]; return n; }
    return { ...p, [id]: v };
  });
  const clear = () => setQty({});

  const total = COMBOS.reduce((s, c) => s + c.price * (qty[c.id] || 0), 0);
  const seña = Math.round(total * 0.5);
  const count = Object.values(qty).reduce((a, b) => a + b, 0);
  const has = count > 0;

  const buildMsg = () => {
    const lines = COMBOS
      .filter(c => (qty[c.id] || 0) > 0)
      .map(c => `- ${c.name} x${qty[c.id]} (${money(c.price * qty[c.id])})`);
    return waLink(
      `Hola Gisela! Quiero consultar por este presupuesto:\n\n${lines.join("\n")}\n\nTotal estimado: ${money(total)}\nSeña (50%): ${money(seña)}`
    );
  };

  const cats = [
    { id: "salado", label: "Salados", items: COMBOS.filter(c => c.category === "salado") },
    { id: "dulce", label: "Dulces", items: COMBOS.filter(c => c.category === "dulce") },
  ];

  return (
    <section id="calculador" className="gc-section gc-calc">
      <div className="gc-container">
        <div className="gc-section__head">
          <div className="gc-section__eyebrow"><span className="gc-dot" /> Armá tu pedido</div>
          <h2 className="gc-section__title">Calculador de <em>presupuesto</em></h2>
          <p className="gc-section__lead">Sumá cantidades y obtené un estimado en segundos. Después lo enviás por WhatsApp y lo terminamos de coordinar.</p>
        </div>

        <div className="gc-calc__grid">
          <div className="gc-calc__list">
            {cats.map(cat => (
              <div key={cat.id} className={`gc-calc__group ${openCat === cat.id ? "is-open" : ""}`}>
                <button className="gc-calc__group-head" onClick={() => setOpenCat(openCat === cat.id ? "" : cat.id)}>
                  <span className="gc-calc__group-title">{cat.label}</span>
                  <span className="gc-calc__group-count">{cat.items.length}</span>
                  <span className="gc-calc__group-caret"><IconChevron /></span>
                </button>
                {openCat === cat.id && (
                  <div className="gc-calc__rows">
                    {cat.items.map(c => {
                      const v = qty[c.id] || 0;
                      return (
                        <div key={c.id} className={`gc-calc__row ${v > 0 ? "is-active" : ""}`}>
                          <div className="gc-calc__thumb"><img src={c.image} alt="" /></div>
                          <div className="gc-calc__info">
                            <p className="gc-calc__name">{c.name}<span className="gc-calc__tag">{c.servings}</span></p>
                            <p className="gc-calc__price">{money(c.price)}</p>
                          </div>
                          <div className="gc-calc__stepper">
                            <button onClick={() => dec(c.id)} disabled={v === 0} aria-label="Quitar"><IconMinus /></button>
                            <span>{v}</span>
                            <button onClick={() => inc(c.id)} aria-label="Agregar"><IconPlus /></button>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>
            ))}
          </div>

          <aside className="gc-calc__summary">
            <div className="gc-calc__summary-inner">
              <div className="gc-calc__summary-head">
                <span className="gc-calc__badge"><IconSparkle cls="w-3.5 h-3.5" /> Tu presupuesto</span>
                {has && (
                  <button className="gc-calc__clear" onClick={clear}><IconTrash /> Limpiar</button>
                )}
              </div>

              {!has ? (
                <div className="gc-calc__empty">
                  <div className="gc-calc__empty-icon"><IconSparkle cls="w-6 h-6" /></div>
                  <p><strong>Armá tu pedido</strong></p>
                  <p className="gc-calc__empty-sub">Sumá combos con los botones + y acá vas a ver el total en vivo.</p>
                </div>
              ) : (
                <>
                  <ul className="gc-calc__cart">
                    {COMBOS.filter(c => (qty[c.id] || 0) > 0).map(c => (
                      <li key={c.id}>
                        <span className="gc-calc__cart-name">{c.name} <em>×{qty[c.id]}</em></span>
                        <span className="gc-calc__cart-price">{money(c.price * qty[c.id])}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="gc-calc__totals">
                    <div className="gc-calc__total-row">
                      <span>Total estimado</span>
                      <strong>{money(total)}</strong>
                    </div>
                    <div className="gc-calc__total-row gc-calc__total-row--muted">
                      <span>Seña 50% (congela precio)</span>
                      <span>{money(seña)}</span>
                    </div>
                  </div>
                  <a className="gc-btn gc-btn--wa gc-btn--block gc-btn--lg" href={buildMsg()} target="_blank" rel="noopener">
                    <WA cls="w-5 h-5" />
                    <span>Enviar por WhatsApp</span>
                  </a>
                </>
              )}

              <p className="gc-calc__fine">
                Precio estimado. Confirmación final por WhatsApp según fecha, zona y disponibilidad.
              </p>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}

// ———————————————————————————————————————————————————————————
// Cómo pedir
// ———————————————————————————————————————————————————————————
function ComoPedir() {
  const steps = [
    { n: "01", title: "Elegí tu combo", desc: "O armá tu propio presupuesto con el calculador.", hint: "1 min" },
    { n: "02", title: "Escribinos por WhatsApp", desc: "Confirmamos cantidades, fecha y zona de entrega.", hint: "~10 min" },
    { n: "03", title: "Seña y a disfrutar", desc: "Con el 50% reservás la fecha. El día del evento, listo.", hint: "Coordinamos" },
  ];
  return (
    <section id="como-pedir" className="gc-section gc-how">
      <div className="gc-container">
        <div className="gc-section__head">
          <div className="gc-section__eyebrow"><span className="gc-dot" /> Cómo pedir</div>
          <h2 className="gc-section__title">Tres pasos y <em>listo</em></h2>
        </div>
        <ol className="gc-how__steps">
          {steps.map((s, i) => (
            <li key={s.n} className="gc-how__step">
              <div className="gc-how__num">{s.n}</div>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
              <span className="gc-how__hint"><IconClock cls="w-3.5 h-3.5" /> {s.hint}</span>
              {i < steps.length - 1 && <span className="gc-how__arrow" aria-hidden="true"><IconChevron /></span>}
            </li>
          ))}
        </ol>
        <div className="gc-how__cta">
          <a className="gc-btn gc-btn--wa gc-btn--lg" href={waLink("Hola Gisela! Quiero hacer un pedido.")} target="_blank" rel="noopener">
            <WA cls="w-5 h-5" />
            <span>Empezar mi pedido</span>
          </a>
          <p className="gc-how__fine"><IconPin cls="w-3.5 h-3.5" /> Bahía Blanca y alrededores · Reservá con anticipación</p>
        </div>
      </div>
    </section>
  );
}

// ———————————————————————————————————————————————————————————
// Footer
// ———————————————————————————————————————————————————————————
function Footer() {
  return (
    <footer className="gc-footer">
      <div className="gc-container gc-footer__grid">
        <div className="gc-footer__brand">
          <img src="assets/logo-gisela.png" alt="Gisela Combos" />
          <p>Combos dulces y salados<br />para tus mejores momentos.</p>
        </div>
        <div className="gc-footer__col">
          <h4>Navegá</h4>
          <a href="#combos">Combos</a>
          <a href="#individuales">Productos individuales</a>
          <a href="#gisela">Sobre Gisela</a>
          <a href="#calculador">Presupuesto</a>
          <a href="#como-pedir">Cómo pedir</a>
        </div>
        <div className="gc-footer__col">
          <h4>Contacto</h4>
          <a href={waLink("Hola Gisela!")} target="_blank" rel="noopener"><WA cls="w-3.5 h-3.5" /> WhatsApp 291 539‑7100</a>
          <span><IconPin cls="w-3.5 h-3.5" /> Bahía Blanca y alrededores</span>
          <span><IconClock cls="w-3.5 h-3.5" /> Reservá con anticipación</span>
        </div>
      </div>
      <div className="gc-footer__bottom">
        <span>© 2025 Gisela Combos</span>
        <span>Hecho con <IconHeart cls="w-3 h-3" /> en Bahía Blanca</span>
      </div>
    </footer>
  );
}

// ———————————————————————————————————————————————————————————
// Float WhatsApp
// ———————————————————————————————————————————————————————————
function WhatsAppFloat() {
  const [expanded, setExpanded] = useState(false);
  return (
    <a
      className={`gc-float ${expanded ? "is-expanded" : ""}`}
      href={waLink("Hola Gisela! Quiero hacer un pedido.")}
      target="_blank"
      rel="noopener"
      onMouseEnter={() => setExpanded(true)}
      onMouseLeave={() => setExpanded(false)}
      aria-label="Contactar por WhatsApp"
    >
      <WA cls="w-7 h-7" />
      <span className="gc-float__label">Pedí por WhatsApp</span>
    </a>
  );
}

// ———————————————————————————————————————————————————————————
// Tweaks panel
// ———————————————————————————————————————————————————————————
function TweaksPanel({ visible, tweaks, setTweaks }) {
  if (!visible) return null;

  const palettes = [
    { id: "peach",   label: "Durazno (actual)", swatch: ["#e9a87d", "#e8c2bf", "#efe1cc"] },
    { id: "rose",    label: "Rosa azucarado",    swatch: ["#e59fb0", "#f1c6d4", "#f4e3e7"] },
    { id: "terracotta", label: "Terracota cálida", swatch: ["#c98063", "#deae92", "#ecd6c2"] },
    { id: "mint",    label: "Menta pastelera",   swatch: ["#89c2a8", "#c6dfce", "#e5efe3"] },
  ];
  const densities = [
    { id: "cozy",    label: "Cómoda (con lista)" },
    { id: "compact", label: "Compacta (sin lista)" },
  ];
  const heroStyles = [
    { id: "photo",      label: "Con foto" },
    { id: "typography", label: "Tipografía sola" },
  ];

  const persist = (patch) => {
    const next = { ...tweaks, ...patch };
    setTweaks(next);
    try {
      window.parent.postMessage({ type: "__edit_mode_set_keys", edits: patch }, "*");
    } catch (e) {}
  };

  return (
    <div className="gc-tweaks">
      <div className="gc-tweaks__head">
        <span className="gc-tweaks__title">Tweaks</span>
        <span className="gc-tweaks__hint">Probá variaciones</span>
      </div>

      <div className="gc-tweaks__group">
        <label>Paleta</label>
        <div className="gc-tweaks__palette">
          {palettes.map(p => (
            <button
              key={p.id}
              className={`gc-tweaks__swatch ${tweaks.palette === p.id ? "is-on" : ""}`}
              onClick={() => persist({ palette: p.id })}
              aria-label={p.label}
            >
              <span className="gc-tweaks__dots">
                {p.swatch.map((c, i) => <span key={i} style={{ background: c }} />)}
              </span>
              <span className="gc-tweaks__swatch-label">{p.label}</span>
            </button>
          ))}
        </div>
      </div>

      <div className="gc-tweaks__group">
        <label>Densidad de cards</label>
        <div className="gc-tweaks__pills">
          {densities.map(d => (
            <button key={d.id} className={`gc-tweaks__pill ${tweaks.density === d.id ? "is-on" : ""}`} onClick={() => persist({ density: d.id })}>
              {d.label}
            </button>
          ))}
        </div>
      </div>

      <div className="gc-tweaks__group">
        <label>Estilo de hero</label>
        <div className="gc-tweaks__pills">
          {heroStyles.map(d => (
            <button key={d.id} className={`gc-tweaks__pill ${tweaks.heroStyle === d.id ? "is-on" : ""}`} onClick={() => persist({ heroStyle: d.id })}>
              {d.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

// ———————————————————————————————————————————————————————————
// Root App
// ———————————————————————————————————————————————————————————
function App({ defaults }) {
  const [tweaks, setTweaks] = useState(defaults);
  const [tweakVisible, setTweakVisible] = useState(false);

  useEffect(() => {
    const handler = (ev) => {
      const d = ev.data || {};
      if (d.type === "__activate_edit_mode") setTweakVisible(true);
      if (d.type === "__deactivate_edit_mode") setTweakVisible(false);
    };
    window.addEventListener("message", handler);
    try {
      window.parent.postMessage({ type: "__edit_mode_available" }, "*");
    } catch (e) {}
    return () => window.removeEventListener("message", handler);
  }, []);

  useEffect(() => {
    document.documentElement.dataset.palette = tweaks.palette;
  }, [tweaks.palette]);

  return (
    <div className="gc-app" data-palette={tweaks.palette}>
      <Header />
      <main>
        <Hero heroStyle={tweaks.heroStyle} />
        <CombosSection density={tweaks.density} />
        <Individuales />
        <SobreGisela />
        <Calculador />
        <ComoPedir />
      </main>
      <Footer />
      <WhatsAppFloat />
      <TweaksPanel visible={tweakVisible} tweaks={tweaks} setTweaks={setTweaks} />
    </div>
  );
}

Object.assign(window, { App });
