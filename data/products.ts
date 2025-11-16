export type Product = {
  slug: string;
  name: string;
  category: string;
  promoTag: string;
  price: string;
  oldPrice: string;
  skin: string;
};

export const products: Product[] = [
  {
    slug: "rotina-completa-pele-oleosa",
    name: "Rotina Completa Pele Oleosa",
    category: "Dermocosmética",
    promoTag: "-20%",
    price: "39,90 €",
    oldPrice: "49,90 €",
    skin: "Pele oleosa / acneica",
  },
  {
    slug: "serum-vitamina-c-iluminador",
    name: "Sérum Vitamina C Iluminador",
    category: "Skin Care",
    promoTag: "",
    price: "24,90 €",
    oldPrice: "",
    skin: "Pele baça / manchas ligeiras",
  },
  {
    slug: "protetor-solar-diario-spf50",
    name: "Protetor Solar Diário SPF50+",
    category: "Solar",
    promoTag: "",
    price: "18,90 €",
    oldPrice: "",
    skin: "Todos os tipos de pele",
  },
  {
    slug: "base-fluida-clinic-cover",
    name: "Base Fluida Clinic Cover",
    category: "Maquilhagem",
    promoTag: "",
    price: "23,90 €",
    oldPrice: "",
    skin: "Pele sensível · vários tons",
  },
  {
    slug: "creme-reparador-barreira",
    name: "Creme Reparador de Barreira",
    category: "Skin Care",
    promoTag: "-15%",
    price: "21,50 €",
    oldPrice: "25,30 €",
    skin: "Pele seca / sensibilizada",
  },
  {
    slug: "gel-limpeza-suave-bebe",
    name: "Gel Limpeza Suave Bebé",
    category: "Bebé & Mamã",
    promoTag: "",
    price: "11,90 €",
    oldPrice: "",
    skin: "Pele delicada do bebé",
  },
  {
    slug: "coffret-maquilhagem-dia-a-dia",
    name: "Coffret Maquilhagem Dia-a-dia",
    category: "Maquilhagem",
    promoTag: "-25%",
    price: "29,90 €",
    oldPrice: "39,90 €",
    skin: "Todos os tipos",
  },
  {
    slug: "hidratante-oil-free",
    name: "Hidratante Oil-Free",
    category: "Dermocosmética",
    promoTag: "",
    price: "19,90 €",
    oldPrice: "",
    skin: "Pele mista a oleosa",
  },
];
