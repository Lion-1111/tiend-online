export type Product = {
  id: string;
  brand: string;
  name: string;
  price: number;
  oldPrice?: number;
  image: string;
  category: "hombre" | "mujer" | "ninos" | "accesorios";
  isNew?: boolean;
  description: string;
  sizes: number[];
};

export const products: Product[] = [
  {
    id: "6a29166da33b660b688e88b4",
    brand: "Nike",
    name: "Air Force 1 '07",
    price: 1899,
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&q=80",
    category: "hombre",
    description:
      "Un ícono del streetwear. Cuero suave, suela de Air-Sole y estilo atemporal para el día a día.",
    sizes: [25, 26, 27, 28, 29, 30],
  },
  {
    id: "6a29166da33b660b688e88b5",
    brand: "Adidas",
    name: "Ultraboost 22",
    price: 2499,
    oldPrice: 3200,
    image: "https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=800&q=80",
    category: "hombre",
    description:
      "Comodidad responsiva con tecnología Boost. Ideal para correr o usar todo el día.",
    sizes: [25, 26, 27, 28, 29, 30],
  },
  {
    id: "6a29166da33b660b688e88b6",
    brand: "Jordan",
    name: "Air Jordan 4 Retro",
    price: 4599,
    image: "https://images.unsplash.com/photo-1556048219-bb6978360b84?w=800&q=80",
    category: "hombre",
    description:
      "El clásico de 1989 vuelve. Diseño icónico, materiales premium y cultura sneaker en estado puro.",
    sizes: [26, 27, 28, 29, 30],
  },
  {
    id: "6a29166da33b660b688e88b7",
    brand: "Adidas",
    name: "Stan Smith",
    price: 1599,
    image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=800&q=80",
    category: "mujer",
    isNew: true,
    description:
      "Minimalismo total. El tenis blanco que combina con todo, ahora en materiales sostenibles.",
    sizes: [22, 23, 24, 25, 26, 27],
  },
  {
    id: "6a29166da33b660b688e88b8",
    brand: "Nike",
    name: "Free Run 5.0",
    price: 1799,
    oldPrice: 2200,
    image: "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?w=800&q=80",
    category: "hombre",
    isNew: true,
    description:
      "Flexibilidad natural. Sensación descalzo con la protección que necesitas.",
    sizes: [25, 26, 27, 28, 29],
  },
  {
    id: "6a29166da33b660b688e88b9",
    brand: "Puma",
    name: "Future Rider",
    price: 1299,
    image: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=800&q=80",
    category: "hombre",
    description:
      "Inspirado en los 80, hecho para hoy. Colores vibrantes y comodidad retro-moderna.",
    sizes: [25, 26, 27, 28, 29, 30],
  },
  {
    id: "6a29166da33b660b688e88ba",
    brand: "Nike",
    name: "Mochila Heritage",
    price: 899,
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=800&q=80",
    category: "accesorios",
    description:
      "Espacio para todo. Diseño clásico, materiales duraderos y el swoosh que nunca falla.",
    sizes: [0],
  },
  {
    id: "6a29166da33b660b688e88bb",
    brand: "Adidas",
    name: "Gorra Structured Cap",
    price: 499,
    image: "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?w=800&q=80",
    category: "accesorios",
    isNew: true,
    description: "Estilo clean. Ajuste perfecto, tela transpirable y el trefoil clásico.",
    sizes: [0],
  },
];

export const categories = [
  {
    slug: "hombre",
    name: "HOMBRE",
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&q=80",
  },
  {
    slug: "mujer",
    name: "MUJER",
    image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=800&q=80",
  },
  {
    slug: "ninos",
    name: "NIÑOS",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&q=80",
  },
  {
    slug: "accesorios",
    name: "ACCESORIOS",
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=800&q=80",
  },
];

export const brands = [
  "NIKE",
  "ADIDAS",
  "JORDAN",
  "PUMA",
  "NEW BALANCE",
  "VANS",
  "CONVERSE",
  "UNDER ARMOUR",
];

export function formatPrice(n: number) {
  return "$" + n.toLocaleString("en-US");
}
