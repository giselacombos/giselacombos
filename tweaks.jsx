// Tweaks panel — edit mode protocol

const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "palette": "durazno",
  "fontPair": "dm-jakarta",
  "cardStyle": "foto-grande",
  "heroStyle": "foto-protagonista",
  "decor": "sutil"
}/*EDITMODE-END*/;

window.TWEAK_DEFAULTS = TWEAK_DEFAULTS;

const PALETTES = {
  durazno:  { bg: "oklch(0.985 0.008 70)",  fg: "oklch(0.28 0.015 45)",  primary: "oklch(0.76 0.10 45)",  secondary: "oklch(0.86 0.05 15)", accent: "oklch(0.93 0.025 70)" },
  rosa:     { bg: "oklch(0.985 0.008 15)",  fg: "oklch(0.28 0.015 15)",  primary: "oklch(0.78 0.09 15)",  secondary: "oklch(0.88 0.04 45)", accent: "oklch(0.94 0.02 30)" },
  crema:    { bg: "oklch(0.985 0.006 85)",  fg: "oklch(0.26 0.012 60)",  primary: "oklch(0.72 0.09 60)",  secondary: "oklch(0.85 0.05 35)", accent: "oklch(0.93 0.025 85)" },
  salvia:   { bg: "oklch(0.985 0.006 130)", fg: "oklch(0.28 0.012 140)", primary: "oklch(0.72 0.06 140)", secondary: "oklch(0.85 0.05 25)", accent: "oklch(0.93 0.02 120)" },
};

const FONT_PAIRS = {
  "dm-jakarta": { heading: '"DM Serif Display", serif', body: '"Plus Jakarta Sans", system-ui, sans-serif', headingWeight: 400 },
  "quicksand":  { heading: '"Quicksand", sans-serif', body: '"Nunito", sans-serif', headingWeight: 700 },
  "fraunces":   { heading: '"Fraunces", serif', body: '"Nunito", sans-serif', headingWeight: 500 },
};

function applyTweaks(t) {
  const p = PALETTES[t.palette] || PALETTES.durazno;
  const f = FONT_PAIRS[t.fontPair] || FONT_PAIRS["dm-jakarta"];
  const r = document.documentElement.style;
  r.setProperty("--bg", p.bg);
  r.setProperty("--fg", p.fg);
  r.setProperty("--primary", p.primary);
  r.setProperty("--secondary", p.secondary);
  r.setProperty("--accent", p.accent);
  r.setProperty("--font-heading", f.heading);
  r.setProperty("--font-body", f.body);
  r.setProperty("--heading-weight", f.headingWeight);
  document.body.dataset.cardStyle = t.cardStyle;
  document.body.dataset.heroStyle = t.heroStyle;
  document.body.dataset.decor = t.decor;
}

window.applyTweaks = applyTweaks;

function TweaksPanel() {
  const [t, setT] = React.useState(TWEAK_DEFAULTS);
  const [open, setOpen] = React.useState(false);
  const [visible, setVisible] = React.useState(false);

  React.useEffect(() => {
    applyTweaks(t);
  }, [t]);

  React.useEffect(() => {
    const onMsg = (e) => {
      if (!e.data || typeof e.data !== "object") return;
      if (e.data.type === "__activate_edit_mode") setVisible(true);
      if (e.data.type === "__deactivate_edit_mode") setVisible(false);
    };
    window.addEventListener("message", onMsg);
    window.parent.postMessage({ type: "__edit_mode_available" }, "*");
    return () => window.removeEventListener("message", onMsg);
  }, []);

  const update = (k, v) => {
    const next = { ...t, [k]: v };
    setT(next);
    window.parent.postMessage({ type: "__edit_mode_set_keys", edits: { [k]: v } }, "*");
  };

  if (!visible) return null;

  const row = (label, key, options) => (
    React.createElement("div", { className: "tw-row", key },
      React.createElement("div", { className: "tw-label" }, label),
      React.createElement("div", { className: "tw-opts" },
        options.map(o =>
          React.createElement("button", {
            key: o.value,
            className: "tw-opt" + (t[key] === o.value ? " active" : ""),
            onClick: () => update(key, o.value),
          }, o.label)
        )
      )
    )
  );

  return React.createElement("div", { className: "tw-panel" + (open ? " open" : "") },
    React.createElement("button", {
      className: "tw-toggle",
      onClick: () => setOpen(!open),
      "aria-label": "Tweaks",
    }, open ? "×" : "✦"),
    open && React.createElement("div", { className: "tw-body" },
      React.createElement("div", { className: "tw-title" }, "Tweaks"),
      row("Paleta", "palette", [
        { value: "durazno", label: "Durazno" },
        { value: "rosa", label: "Rosa" },
        { value: "crema", label: "Crema" },
        { value: "salvia", label: "Salvia" },
      ]),
      row("Tipografía", "fontPair", [
        { value: "dm-jakarta", label: "DM Serif" },
        { value: "quicksand", label: "Quicksand" },
        { value: "fraunces", label: "Fraunces" },
      ]),
      row("Hero", "heroStyle", [
        { value: "foto-protagonista", label: "Con foto" },
        { value: "solo-tipografia", label: "Tipográfico" },
        { value: "collage", label: "Collage" },
      ]),
      row("Cards", "cardStyle", [
        { value: "foto-grande", label: "Foto grande" },
        { value: "foto-lateral", label: "Foto lateral" },
        { value: "sin-foto", label: "Sin foto" },
      ]),
      row("Decoración", "decor", [
        { value: "sutil", label: "Sutil" },
        { value: "alegre", label: "Alegre" },
        { value: "ninguna", label: "Ninguna" },
      ]),
    )
  );
}

window.TweaksPanel = TweaksPanel;
