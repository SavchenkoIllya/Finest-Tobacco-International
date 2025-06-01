import { Product, ProductTranslation } from "@/app/db/types";

export const products: Product["insert"][] = [
  {
    category: "Cigarettes",
    cigarette_length: "85mm",
    tobacco_part_length: "70mm",
    filter_length: "15mm",
    brand: "Pull",
    diameter: "8mm",
    nicotine: "1.1mg",
    tar: "10mg",
    filter_parameters: "Standard filter",
    image_url: "bacio sunset.jpg",
    active: true,
  },
  {
    category: "Cigarettes",
    cigarette_length: "100mm",
    tobacco_part_length: "80mm",
    filter_length: "20mm",
    brand: "Pull",
    diameter: "9mm",
    nicotine: "1.3mg",
    tar: "12mg",
    filter_parameters: "Premium filter",
    image_url: "bacio sunset.jpg",
    active: true,
  },
  {
    category: "Cigars",
    cigarette_length: "120mm",
    tobacco_part_length: "100mm",
    brand: "Bacio",
    filter_length: "20mm",
    diameter: "11mm",
    nicotine: "2.5mg",
    tar: "15mg",
    filter_parameters: "Special filter",
    image_url: "bacio sunset.jpg",
    active: true,
  },
  {
    category: "Cigars",
    cigarette_length: "150mm",
    tobacco_part_length: "120mm",
    filter_length: "30mm",
    diameter: "12mm",
    brand: "Bacio",
    nicotine: "2.8mg",
    tar: "18mg",
    filter_parameters: "Luxury filter",
    image_url: "bacio sunset.jpg",
    active: true,
  },
];

export const productTranslations: ProductTranslation["insert"][] = [
  {
    product_id: 1, // ID продукта 1
    locale: "en", // Английский язык
    title: "Classic Cigarette",
    subtitle: "Smooth taste, reliable quality",
    description: "A classic cigarette with a smooth taste and high quality.",
    blend: "Classic blend",
  },
  {
    product_id: 1, // ID продукта 1
    locale: "ru", // Русский язык
    title: "Классическая сигарета",
    subtitle: "Мягкий вкус, надежное качество",
    description: "Классическая сигарета с мягким вкусом и высоким качеством.",
    blend: "Классическая смесь",
  },
  {
    product_id: 2, // ID продукта 2
    locale: "en", // Английский язык
    title: "Premium Cigarette",
    subtitle: "Rich flavor, elegant design",
    description: "A premium cigarette for those who appreciate a rich flavor.",
    blend: "Premium blend",
  },
  {
    product_id: 2, // ID продукта 2
    locale: "ru", // Русский язык
    title: "Премиум сигарета",
    subtitle: "Богатый вкус, элегантный дизайн",
    description: "Премиум сигарета для тех, кто ценит богатый вкус.",
    blend: "Премиум смесь",
  },
  {
    product_id: 3, // ID продукта 3
    locale: "en", // Английский язык
    title: "Luxury Cigar",
    subtitle: "Refined taste and craftsmanship",
    description: "A luxury cigar for those who seek the finest tobacco.",
    blend: "Luxury blend",
  },
  {
    product_id: 3, // ID продукта 3
    locale: "ru", // Русский язык
    title: "Роскошная сигара",
    subtitle: "Изысканный вкус и мастерство",
    description: "Роскошная сигара для тех, кто ищет лучший табак.",
    blend: "Роскошная смесь",
  },
  {
    product_id: 4, // ID продукта 4
    locale: "en", // Английский язык
    title: "Exclusive Cigar",
    subtitle: "The best of tobacco, the best of craftsmanship",
    description:
      "An exclusive cigar for the connoisseur who appreciates the best.",
    blend: "Exclusive blend",
  },
  {
    product_id: 4, // ID продукта 4
    locale: "ru", // Русский язык
    title: "Эксклюзивная сигара",
    subtitle: "Лучший табак, лучшее мастерство",
    description: "Эксклюзивная сигара для ценителей, которые ценят лучшее.",
    blend: "Эксклюзивная смесь",
  },
];
