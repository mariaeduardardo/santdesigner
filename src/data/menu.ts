export type Complement = {
  id: string;
  name: string;
  price: number;
  category: string;
};

export type MenuItem = {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  image?: string;
  badge?: string;
  hasComplements?: boolean;
  sizes?: { label: string; price: number }[];
};

export const complements: Complement[] = [
  // Frutas
  { id: "morango", name: "Morango", price: 4, category: "Frutas" },
  { id: "banana", name: "Banana", price: 3, category: "Frutas" },
  // Coberturas
  { id: "cob-chocolate", name: "Chocolate", price: 2.5, category: "Coberturas" },
  { id: "cob-morango", name: "Morango", price: 2.5, category: "Coberturas" },
  { id: "cob-doce-leite", name: "Doce de Leite", price: 2.5, category: "Coberturas" },
  { id: "cob-amora", name: "Amora", price: 2.5, category: "Coberturas" },
  { id: "cob-cafe", name: "Café", price: 2.5, category: "Coberturas" },
  // Toppings
  { id: "granola", name: "Granola", price: 3, category: "Toppings" },
  { id: "leite-condensado", name: "Leite Condensado", price: 3, category: "Toppings" },
  { id: "nutella", name: "Nutella", price: 9.5, category: "Toppings" },
  { id: "pacoca", name: "Paçoca", price: 3, category: "Toppings" },
  { id: "ovomaltine", name: "Ovomaltine", price: 4.5, category: "Toppings" },
  { id: "biscoito-oreo", name: "Biscoito Oreo", price: 4.5, category: "Toppings" },
  { id: "chocoboll", name: "Chocoboll", price: 4.5, category: "Toppings" },
  { id: "confete", name: "Confete", price: 4.5, category: "Toppings" },
  { id: "amendoim", name: "Amendoim", price: 3, category: "Toppings" },
  { id: "coco-ralado", name: "Coco Ralado", price: 3, category: "Toppings" },
  { id: "mel", name: "Mel", price: 3, category: "Toppings" },
  // Cremes Especiais
  { id: "leite-ninho", name: "Creme de Leite Ninho", price: 7.99, category: "Cremes Especiais" },
  { id: "sonho-valsa", name: "Creme Sonho de Valsa", price: 7.99, category: "Cremes Especiais" },
  { id: "ganache", name: "Ganache", price: 7.99, category: "Cremes Especiais" },
];

export const menuCategories = [
  "Promoção da Semana",
  "Creme de Açaí Completo",
  "Vitamina de Açaí",
  "Monte do Seu Jeito",
  "Metade Cupuaçu × Metade Açaí",
  "Cupuaçu",
  "Picolés e Paletas",
  "Bebidas",
];

export const menuItems: MenuItem[] = [
  // Promoção da Semana
  {
    id: "promo-2x500",
    name: "2 Cremes de Açaí 500ml",
    description: "Combo especial da semana! Dois cremes de 500ml com complementos.",
    price: 39.99,
    category: "Promoção da Semana",
    badge: "🔥 Promoção",
  },
  // Creme de Açaí Completo
  {
    id: "creme-300",
    name: "Creme de Açaí 300ml",
    description: "Açaí cremoso com granola, banana e leite condensado.",
    price: 14.99,
    category: "Creme de Açaí Completo",
  },
  {
    id: "creme-500",
    name: "Creme de Açaí 500ml",
    description: "Açaí cremoso com granola, banana e leite condensado.",
    price: 21.99,
    category: "Creme de Açaí Completo",
    badge: "⭐ Mais Pedido",
  },
  {
    id: "creme-700",
    name: "Creme de Açaí 700ml",
    description: "Açaí cremoso com granola, banana e leite condensado.",
    price: 27.99,
    category: "Creme de Açaí Completo",
  },
  {
    id: "creme-1000",
    name: "Creme de Açaí 1 Litro",
    description: "Açaí cremoso com granola, banana e leite condensado.",
    price: 34.99,
    category: "Creme de Açaí Completo",
  },
  // Vitamina de Açaí
  {
    id: "vitamina-300",
    name: "Vitamina de Açaí 300ml",
    description: "Vitamina de açaí batida com banana.",
    price: 12.99,
    category: "Vitamina de Açaí",
  },
  {
    id: "vitamina-500",
    name: "Vitamina de Açaí 500ml",
    description: "Vitamina de açaí batida com banana.",
    price: 18.99,
    category: "Vitamina de Açaí",
  },
  {
    id: "vitamina-700",
    name: "Vitamina de Açaí 700ml",
    description: "Vitamina de açaí batida com banana.",
    price: 24.99,
    category: "Vitamina de Açaí",
  },
  // Monte do Seu Jeito
  {
    id: "monte-300",
    name: "Monte do Seu Jeito 300ml",
    description: "Escolha o tamanho e adicione seus complementos favoritos!",
    price: 11.99,
    category: "Monte do Seu Jeito",
    hasComplements: true,
  },
  {
    id: "monte-500",
    name: "Monte do Seu Jeito 500ml",
    description: "Escolha o tamanho e adicione seus complementos favoritos!",
    price: 17.99,
    category: "Monte do Seu Jeito",
    hasComplements: true,
  },
  {
    id: "monte-700",
    name: "Monte do Seu Jeito 700ml",
    description: "Escolha o tamanho e adicione seus complementos favoritos!",
    price: 23.99,
    category: "Monte do Seu Jeito",
    hasComplements: true,
  },
  {
    id: "monte-1000",
    name: "Monte do Seu Jeito 1 Litro",
    description: "Escolha o tamanho e adicione seus complementos favoritos!",
    price: 30.99,
    category: "Monte do Seu Jeito",
    hasComplements: true,
  },
  // Metade Cupuaçu × Metade Açaí
  {
    id: "mix-500",
    name: "Mix Cupuaçu e Açaí 500ml",
    description: "Metade cupuaçu, metade açaí. O melhor dos dois mundos!",
    price: 23.99,
    category: "Metade Cupuaçu × Metade Açaí",
  },
  {
    id: "mix-700",
    name: "Mix Cupuaçu e Açaí 700ml",
    description: "Metade cupuaçu, metade açaí. O melhor dos dois mundos!",
    price: 29.99,
    category: "Metade Cupuaçu × Metade Açaí",
  },
  // Cupuaçu
  {
    id: "cupuacu-500",
    name: "Creme de Cupuaçu 500ml",
    description: "Cupuaçu cremoso com complementos.",
    price: 24.99,
    category: "Cupuaçu",
  },
  // Picolés e Paletas
  {
    id: "picole-acai",
    name: "Picolé de Açaí",
    description: "Picolé artesanal de açaí puro.",
    price: 6.99,
    category: "Picolés e Paletas",
  },
  {
    id: "paleta-morango",
    name: "Paleta de Morango com Chocolate",
    description: "Paleta mexicana recheada.",
    price: 8.99,
    category: "Picolés e Paletas",
  },
  // Bebidas
  {
    id: "agua",
    name: "Água Mineral 500ml",
    description: "Água mineral sem gás.",
    price: 3.5,
    category: "Bebidas",
  },
  {
    id: "suco-laranja",
    name: "Suco de Laranja Natural",
    description: "Suco de laranja natural 300ml.",
    price: 8.99,
    category: "Bebidas",
  },
];

export const WHATSAPP_NUMBER = "5531996068614";
export const STORE_INFO = {
  name: "Bendito Açaí",
  address: "Praça Louis Braille, 5 - Saudade, Belo Horizonte - MG",
  phone: "(31) 99606-8614",
  hours: "Aberto até 22h45",
  instagram: "@benditoacai.bh",
  instagramUrl: "https://instagram.com/benditoacai.bh",
  rating: 4.4,
  reviews: 134,
  minOrder: 9,
};
