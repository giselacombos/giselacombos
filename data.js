// Gisela Combos — datos

window.COMBOS = [
  {
    id: 1, code: "S1", name: "Combo Gran Evento", category: "salado",
    items: ["36 Tartitas", "36 Pizzetas", "36 Chips J y Q", "36 Salchichitas envueltas", "36 Mini Empanaditas", "24 Mini Hamburguesas"],
    servings: "Aprox. 30–40 personas",
    price: 220000,
    image: "assets/combos/variado.jpg",
    featured: true,
  },
  {
    id: 2, code: "S2", name: "Combo Reunión", category: "salado",
    items: ["24 Pizzetas", "24 Mini Empanaditas", "24 Mini Hamburguesas"],
    servings: "Aprox. 10–15 personas",
    price: 78000,
    image: "assets/combos/COMBO VARIADO.png",
  },
  {
    id: 3, code: "S3", name: "Combo Picada", category: "salado",
    items: ["12 Pizzetas", "12 Chips J y Q", "12 Mini Empanaditas", "12 Mini Hamburguesas"],
    servings: "Aprox. 6–8 personas",
    price: 48000,
    image: "assets/combos/CHIPS.jpg",
  },
  {
    id: 4, code: "S4", name: "Combo Cumple", category: "salado",
    items: ["24 Tartitas", "24 Pizzetas", "24 Salchichitas envueltas", "24 Mini Empanaditas"],
    servings: "Aprox. 12–15 personas",
    price: 85000,
    image: "assets/combos/tartitas.jpg",
  },
  {
    id: 5, code: "S5", name: "Combo Tardecita", category: "salado",
    items: ["24 Pizzetas", "24 Salchichitas envueltas", "24 Mini Empanaditas", "24 Chips J y Q"],
    servings: "Aprox. 12–15 personas",
    price: 75000,
    image: "assets/combos/pizzetas.jpg",
  },
  {
    id: 6, code: "D6", name: "Combo Tartas Clásicas", category: "dulce",
    items: ["1 Pasta Frola", "1 Tarta Cocada", "1 Tarta Bombón"],
    detail: "Todo de 26cm de diámetro",
    servings: "Aprox. 24 porciones",
    price: 53000,
    image: "assets/combos/PASTA FROLA.png",
  },
  {
    id: 7, code: "D7", name: "Combo Tartas Frescas", category: "dulce",
    items: ["1 Tarta Frutal (frutilla o durazno)", "1 Lemon Pie", "1 Tarta Bombón"],
    detail: "Todo de 26cm de diámetro",
    servings: "Aprox. 24 porciones",
    price: 57000,
    image: "assets/combos/TARTA FRUTAL 2.png",
  },
  {
    id: 8, code: "D8", name: "Combo Mesa Dulce", category: "dulce",
    items: ["1kg Alfajorcitos de Maicena", "1kg Bombones de Quaker", "12 Cupcakes"],
    detail: "Alfajorcitos comunes o de colores",
    servings: "Aprox. 15 personas",
    price: 54000,
    image: "assets/combos/BOMBON QUAKER.png",
  },
  {
    id: 9, code: "D9", name: "Combo Torta + Dulces", category: "dulce",
    items: ["1 Torta 1½kg con decoración en chantilly (1 relleno)", "24 Alfajorcitos de Maicena", "24 Bombones de Quaker", "12 Cupcakes"],
    servings: "Aprox. 20 personas",
    price: 68500,
    image: "assets/combos/DULCE.png",
    featured: true,
  },
  {
    id: 10, code: "D10", name: "Combo Celebración", category: "dulce",
    items: ["1 Torta 2kg con decoración en chantilly (2 rellenos)", "1kg Alfajorcitos de Maicena", "24 Bombones de Quaker", "1 Tarta Frutal 26cm"],
    servings: "Aprox. 30 personas",
    price: 83500,
    image: "assets/combos/TORTA.png",
  },
];

// Productos individuales — agrupados por sección
window.PRODUCTOS = [
  // Salados — Base ($15.000/docena)
  { name: "Pizzetas", price: 15000, unit: "por docena", tier: "Salado · Base", image: "assets/combos/pizzetas.jpg", category: "salado" },
  { name: "Chips de Jamón y Queso", price: 15000, unit: "por docena", tier: "Salado · Base", image: "assets/combos/CHIPS.jpg", category: "salado" },
  { name: "Salchichitas envueltas", price: 15000, unit: "por docena", tier: "Salado · Base", image: "assets/combos/variado.jpg", category: "salado" },
  { name: "Mini Empanaditas", price: 15000, unit: "por docena", tier: "Salado · Base", image: "assets/combos/empanaditas.jpg", category: "salado" },

  // Salados — Premium ($21.000/docena)
  { name: "Tartitas", price: 21000, unit: "por docena", tier: "Salado · Premium", image: "assets/combos/tartitas.jpg", category: "salado" },
  { name: "Mini Hamburguesas", price: 21000, unit: "por docena", tier: "Salado · Premium", image: "assets/combos/COMBO VARIADO.png", category: "salado" },

  // Dulces — por kilo / docena
  { name: "Alfajorcitos de Maicena", price: 18000, unit: "por kilo", tier: "Dulce", image: "assets/combos/alfajorcitos.jpg", category: "dulce" },
  { name: "Bombones de Quaker", price: 18000, unit: "por kilo", tier: "Dulce", image: "assets/combos/BOMBON QUAKER.png", category: "dulce" },
  { name: "Cupcakes", price: 18000, unit: "por docena", tier: "Dulce", image: "assets/combos/DULCE.png", category: "dulce" },

  // Tartas 26cm
  { name: "Pasta Frola", price: 17500, unit: "26cm · 12 porc.", tier: "Tarta 26cm", image: "assets/combos/PASTA FROLA.png", category: "dulce" },
  { name: "Tarta Cocada", price: 17500, unit: "26cm · 12 porc.", tier: "Tarta 26cm", image: "assets/combos/tartafrutal.jpg", category: "dulce" },
  { name: "Tarta Bombón", price: 18000, unit: "26cm · 12 porc.", tier: "Tarta 26cm", image: "assets/combos/tartitas2.jpg", category: "dulce" },
  { name: "Lemon Pie", price: 19000, unit: "26cm · 12 porc.", tier: "Tarta 26cm", image: "assets/combos/LEMON PIE.jpg", category: "dulce" },
  { name: "Tarta Frutal", price: 20000, unit: "frutilla o durazno · 26cm", tier: "Tarta 26cm", image: "assets/combos/TARTA FRUTAL 2.png", category: "dulce" },

  // Tortas
  { name: "Torta 1½ kg", price: 14500, unit: "1 relleno · chantilly", tier: "Torta", image: "assets/combos/TORTA.png", category: "dulce" },
  { name: "Torta 2 kg", price: 25500, unit: "2 rellenos · chantilly", tier: "Torta", image: "assets/combos/DULCE.png", category: "dulce" },
];

window.WHATSAPP_PHONE = "5492915397100";
window.WA = (msg) => `https://wa.me/${window.WHATSAPP_PHONE}?text=${encodeURIComponent(msg)}`;
window.fmtPrice = (n) => "$" + n.toLocaleString("es-AR");
