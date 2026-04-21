// Gisela Combos — sections

const { useState, useMemo } = React;

const WA_DEFAULT = window.WA("Hola Gisela! Quiero hacer un pedido.");

function WhatsAppIcon({ size = 18 }) {
  return React.createElement("svg", { width: size, height: size, viewBox: "0 0 24 24", fill: "currentColor", "aria-hidden": true },
  React.createElement("path", { d: "M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" }),
  React.createElement("path", { d: "M12 0C5.373 0 0 5.373 0 12c0 2.123.554 4.118 1.528 5.845L.057 23.882 6.304 22.44A11.938 11.938 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 01-5.007-1.374l-.36-.214-3.713.973.99-3.617-.235-.372A9.818 9.818 0 1112 21.818z" })
  );
}

function Header() {
  const [open, setOpen] = useState(false);
  const nav = [
  { href: "#combos", label: "Combos" },
  { href: "#productos", label: "Individuales" },
  { href: "#sobre", label: "Sobre Gisela" },
  { href: "#presupuesto", label: "Presupuesto" }];

  return (
    <header className="site-header">
      <div className="container header-inner">
        <a href="#top" className="brand">
          <img src="assets/logo-gisela.png" alt="Gisela Combos" />
          <span className="brand-name">Gisela <em>Combos</em></span>
        </a>
        <nav className="nav-desktop">
          {nav.map((l) => <a key={l.href} href={l.href}>{l.label}</a>)}
        </nav>
        <div className="header-cta">
          <a href={WA_DEFAULT} target="_blank" rel="noopener noreferrer" className="btn btn-wa btn-sm">
            <WhatsAppIcon size={16} /> Pedir ahora
          </a>
          <button className="nav-burger" onClick={() => setOpen(!open)} aria-label="Menú">
            <span /><span /><span />
          </button>
        </div>
      </div>
      {open &&
      <nav className="nav-mobile">
          {nav.map((l) => <a key={l.href} href={l.href} onClick={() => setOpen(false)}>{l.label}</a>)}
        </nav>
      }
    </header>);

}

function Hero() {
  return (
    <section className="hero" id="top" data-screen-label="Hero">
      <div className="hero-decor" aria-hidden="true">
        <span className="blob b1" /><span className="blob b2" /><span className="blob b3" />
        <span className="sparkle s1">✦</span><span className="sparkle s2">✦</span>
      </div>
      <div className="container hero-inner">
        <div className="hero-copy">
          <span className="eyebrow">Bahía Blanca · Pedidos con anticipación</span>
          <h1 className="hero-title">
            Sabores que acompañan <em>tus mejores momentos</em>.
          </h1>
          <p className="hero-sub">
            Combos dulces y salados, listos para tu cumple, reunión o evento. Hechos en casa, entregados a tiempo.
          </p>
          <div className="hero-ctas">
            <a href={WA_DEFAULT} target="_blank" rel="noopener noreferrer" className="btn btn-wa btn-lg">
              <WhatsAppIcon /> Armar mi pedido
            </a>
            <a href="#combos" className="btn btn-ghost btn-lg">Ver combos →</a>
          </div>
          <div className="hero-meta">
            <div><b>+200</b><span>eventos al año</span></div>
            <div className="divider" />
            <div><b>10</b><span>combos listos</span></div>
            <div className="divider" />
            <div><b>50%</b><span>de seña y reservás</span></div>
          </div>
        </div>
        <div className="hero-visual">
          <div className="hero-card hc-1">
            <img src="assets/combos/variado.jpg" alt="Combo salado variado" />
          </div>
          <div className="hero-card hc-2">
            <img src="assets/combos/LEMON PIE.jpg" alt="Lemon Pie" />
          </div>
          <div className="hero-card hc-3">
            <img src="assets/combos/alfajorcitos.jpg" alt="Alfajorcitos" />
          </div>
          <div className="hero-badge">
            <span className="badge-top">desde</span>
            <span className="badge-price">$48.000</span>
            <span className="badge-sub">combo picada</span>
          </div>
        </div>
      </div>
    </section>);

}

function Sobre() {
  return (
    <section className="sobre" id="sobre" data-screen-label="Sobre">
      <div className="container sobre-inner">
        <div className="sobre-visual">
          <img src="assets/combos/tartitas.jpg" alt="Tartitas caseras" />
          <div className="sobre-stamp">
            <span>Hecho</span>
            <b>en casa</b>
            <span>
</span>
          </div>
        </div>
        <div className="sobre-copy">
          <span className="eyebrow">Quién está detrás</span>
          <h2>Hola, soy <em>Gisela</em>.</h2>
          <p>
            Hace más de siete años que cocino para los eventos de otras familias como si fueran los míos. Empecé vendiendo tartitas a las vecinas y hoy preparo combos completos para cumpleaños, reuniones y celebraciones en Bahía Blanca.
          </p>
          <p>
            Todo lo que ves en la página lo amaso, horneo y armo con mi equipo. Nada congelado industrial, nada apurado. Y si tenés una idea que no está en el menú, escribime: casi siempre se puede.
          </p>
          <ul className="sobre-list">
            <li><span>●</span> Elaboración 100% casera</li>
            <li><span>●</span> Reservá con seña y congelás el precio</li>
            <li><span>●</span> Entregas coordinadas en Bahía Blanca y zona</li>
          </ul>
        </div>
      </div>
    </section>);
}

function ComboCard({ c }) {
  const msg = `Hola Gisela! Me interesa el ${c.name} (${c.code}). ¿Podemos coordinar?`;
  return (
    <article className="combo-card" data-featured={c.featured ? "true" : "false"}>
      <div className="combo-media">
        <img src={c.image} alt={c.name} />
        <span className="combo-tag">{c.category === "salado" ? "Salado" : "Dulce"}</span>
        {c.featured && <span className="combo-fav">Más elegido</span>}
      </div>
      <div className="combo-body">
        <div className="combo-head">
          <div>
            <span className="combo-code">{c.code}</span>
            <h3 className="combo-name">{c.name}</h3>
          </div>
          <div className="combo-price">
            <b>{window.fmtPrice(c.price)}</b>
            {c.servings && <span>{c.servings}</span>}
          </div>
        </div>
        <ul className="combo-items">
          {c.items.map((it, i) => <li key={i}>{it}</li>)}
        </ul>
        {c.detail && <p className="combo-detail">{c.detail}</p>}
        <a href={window.WA(msg)} target="_blank" rel="noopener noreferrer" className="btn btn-wa btn-block">
          <WhatsAppIcon /> Pedir este combo
        </a>
      </div>
    </article>);

}

function CombosSection() {
  const [filter, setFilter] = useState("todos");
  const filtered = useMemo(() => {
    if (filter === "todos") return window.COMBOS;
    return window.COMBOS.filter((c) => c.category === filter);
  }, [filter]);
  return (
    <section className="combos" id="combos" data-screen-label="Combos">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">Nuestros combos</span>
          <h2>Elegí el que mejor acompañe <em>tu momento</em>.</h2>
          <p className="section-sub">Diez combinaciones listas para que solo te preocupes por armar la mesa.</p>
        </div>
        <div className="combos-filter">
          {[
          { k: "todos", l: "Todos" },
          { k: "salado", l: "Salados" },
          { k: "dulce", l: "Dulces" }].
          map((o) =>
          <button key={o.k} className={"chip" + (filter === o.k ? " active" : "")} onClick={() => setFilter(o.k)}>
              {o.l}
            </button>
          )}
        </div>
        <div className="combos-grid">
          {filtered.map((c) => <ComboCard key={c.id} c={c} />)}
        </div>
      </div>
    </section>);

}

function Productos() {
  const msg = (p) => `Hola Gisela! Quiero consultar por ${p.name} (${p.unit}).`;
  // Agrupar por tier manteniendo orden
  const groups = useMemo(() => {
    const g = {};
    window.PRODUCTOS.forEach((p) => {
      if (!g[p.tier]) g[p.tier] = [];
      g[p.tier].push(p);
    });
    return Object.entries(g);
  }, []);

  return (
    <section className="productos" id="productos" data-screen-label="Productos">
      <div className="container">
        <div className="section-head align-left">
          <span className="eyebrow">Por fuera de los combos</span>
          <h2>Productos <em>individuales</em>.</h2>
          <p className="section-sub">¿No te hace falta un combo entero? Pedí por docena, kilo o unidad según el producto.</p>
        </div>

        <div className="productos-groups">
          {groups.map(([tier, items]) =>
          <div key={tier} className="productos-group">
              <div className="productos-group-head">
                <h3>{tier}</h3>
                {items[0].price === items[items.length - 1].price && items.every((it) => it.price === items[0].price) &&
              <span className="productos-group-price">{window.fmtPrice(items[0].price)} <small>{items[0].unit}</small></span>
              }
              </div>
              <div className="productos-grid">
                {items.map((p, i) =>
              <a key={i} href={window.WA(msg(p))} target="_blank" rel="noopener noreferrer" className="producto-card">
                    <div className="producto-media"><img src={p.image} alt={p.name} /></div>
                    <div className="producto-body">
                      <h4>{p.name}</h4>
                      <p className="producto-unit">{p.unit}</p>
                      <div className="producto-foot">
                        <b>{window.fmtPrice(p.price)}</b>
                        <span className="mini-wa"><WhatsAppIcon size={14} /> Pedir</span>
                      </div>
                    </div>
                  </a>
              )}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>);

}

function Calculador() {
  const [qty, setQty] = useState({});
  const inc = (id) => setQty((q) => ({ ...q, [id]: (q[id] || 0) + 1 }));
  const dec = (id) => setQty((q) => {
    const v = (q[id] || 0) - 1;
    if (v <= 0) {const n = { ...q };delete n[id];return n;}
    return { ...q, [id]: v };
  });
  const clear = () => setQty({});
  const total = window.COMBOS.reduce((s, c) => s + c.price * (qty[c.id] || 0), 0);
  const has = Object.values(qty).some((v) => v > 0);
  const build = () => {
    const lines = window.COMBOS.filter((c) => (qty[c.id] || 0) > 0).
    map((c) => `• ${c.code} ${c.name} x${qty[c.id]} — ${window.fmtPrice(c.price * qty[c.id])}`);
    return window.WA(`Hola Gisela! Armé este presupuesto:\n\n${lines.join("\n")}\n\nTotal estimado: ${window.fmtPrice(total)}`);
  };

  return (
    <section className="calc" id="presupuesto" data-screen-label="Calculador">
      <div className="container calc-inner">
        <div className="calc-copy">
          <span className="eyebrow">Armá tu pedido</span>
          <h2>Calculá tu <em>presupuesto</em> al instante.</h2>
          <p>Sumá los combos que te interesan. Al final, te llevamos directo a WhatsApp con el detalle listo para enviar.</p>
          <div className="calc-summary">
            <div className="calc-total">
              <span>Total estimado</span>
              <b>{window.fmtPrice(total)}</b>
            </div>
            <div className="calc-actions">
              {has && <button className="btn btn-ghost btn-sm" onClick={clear}>Limpiar</button>}
              <a
                href={has ? build() : WA_DEFAULT}
                target="_blank" rel="noopener noreferrer"
                className={"btn btn-wa " + (has ? "" : "btn-disabled")}
                onClick={(e) => {if (!has) e.preventDefault();}}>
                
                <WhatsAppIcon /> {has ? "Enviar presupuesto" : "Elegí combos"}
              </a>
            </div>
            <p className="calc-note">Precio estimado. Confirmación final por WhatsApp según fecha, zona y disponibilidad.</p>
          </div>
        </div>

        <div className="calc-list">
          {window.COMBOS.map((c) => {
            const q = qty[c.id] || 0;
            return (
              <div key={c.id} className={"calc-row" + (q > 0 ? " active" : "")}>
                <img src={c.image} alt="" />
                <div className="calc-row-body">
                  <div className="calc-row-top">
                    <span className="combo-code">{c.code}</span>
                    <b>{c.name}</b>
                  </div>
                  <span className="calc-row-price">{window.fmtPrice(c.price)}</span>
                </div>
                <div className="stepper">
                  <button onClick={() => dec(c.id)} aria-label="Menos" disabled={q === 0}>−</button>
                  <span>{q}</span>
                  <button onClick={() => inc(c.id)} aria-label="Más">+</button>
                </div>
              </div>);

          })}
        </div>
      </div>
    </section>);

}

function ComoPedir() {
  const steps = [
  { n: "01", t: "Elegí o armá", d: "Explorá los combos o usá el calculador para combinar cantidades." },
  { n: "02", t: "Escribinos", d: "Enviá el pedido por WhatsApp. Te respondemos en el día." },
  { n: "03", t: "Reservá", d: "Sellás la fecha con 50% de seña y congelás el precio." },
  { n: "04", t: "Disfrutá", d: "Coordinamos entrega en Bahía Blanca y zona. Vos ponés la mesa." }];

  return (
    <section className="como" id="como-pedir" data-screen-label="Cómo pedir">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">Cómo pedir</span>
          <h2>Cuatro pasos y <em>listo</em>.</h2>
        </div>
        <ol className="como-grid">
          {steps.map((s) =>
          <li key={s.n} className="como-step">
              <span className="como-n">{s.n}</span>
              <h3>{s.t}</h3>
              <p>{s.d}</p>
            </li>
          )}
        </ol>
        <div className="como-cta">
          <a href={WA_DEFAULT} target="_blank" rel="noopener noreferrer" className="btn btn-wa btn-lg">
            <WhatsAppIcon /> Empezar mi pedido
          </a>
        </div>
      </div>
    </section>);

}

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div className="footer-brand">
          <img src="assets/logo-gisela.png" alt="Gisela Combos" />
          <p><em>Sabores</em> que acompañan tus mejores momentos.</p>
        </div>
        <div className="footer-col">
          <h4>Navegar</h4>
          <a href="#combos">Combos</a>
          <a href="#productos">Individuales</a>
          <a href="#sobre">Sobre Gisela</a>
          <a href="#presupuesto">Presupuesto</a>
        </div>
        <div className="footer-col">
          <h4>Contacto</h4>
          <a href={WA_DEFAULT} target="_blank" rel="noopener noreferrer">WhatsApp · 291 539 7100</a>
          <span>Bahía Blanca y zona</span>
          <span>Reservá con anticipación</span>
        </div>
        <div className="footer-col">
          <h4>Horarios</h4>
          <span>Lun a Sáb · 9 a 19 hs</span>
          <span>Entregas con fecha coordinada</span>
        </div>
      </div>
      <div className="footer-bottom container">
        <span>© 2026 Gisela Combos</span>
        <span>Hecho con cariño en Bahía Blanca</span>
      </div>
    </footer>);

}

function WhatsAppFloat() {
  return (
    <a href={WA_DEFAULT} target="_blank" rel="noopener noreferrer" className="wa-float" aria-label="WhatsApp">
      <WhatsAppIcon size={28} />
    </a>);

}

Object.assign(window, { Header, Hero, Sobre, CombosSection, Productos, Calculador, ComoPedir, Footer, WhatsAppFloat });