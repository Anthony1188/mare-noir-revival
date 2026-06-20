import noir from "@/assets/product-noir.jpg";
import abyss from "@/assets/product-abyss.jpg";
import sable from "@/assets/product-sable.jpg";

export type Product = {
  slug: string;
  name: string;
  silhouette: string;
  price: number;
  image: string;
  hex: string;
  edition: string;
  pieces: number;
  description: string;
};

export const products: Product[] = [
  {
    slug: "noir",
    name: "Noir",
    silhouette: "I",
    price: 295,
    image: noir,
    hex: "#0d0d0d",
    edition: "Drop 001 — Edition I",
    pieces: 120,
    description:
      "The original. Cut from regenerated matte nylon with hand-finished gold aglets. A short that disappears against the depth.",
  },
  {
    slug: "abyss",
    name: "Abyss",
    silhouette: "II",
    price: 295,
    image: abyss,
    hex: "#0f1b3d",
    edition: "Drop 001 — Edition II",
    pieces: 120,
    description:
      "Midnight navy. A longer cut, drawn from the colour of the Mediterranean at one a.m. — calm, certain, unrepeatable.",
  },
  {
    slug: "sable",
    name: "Sable",
    silhouette: "III",
    price: 295,
    image: sable,
    hex: "#c9b99a",
    edition: "Drop 001 — Edition III",
    pieces: 120,
    description:
      "Warm stone. The single light note in the collection — for late afternoons when the cliffs hold the sun a moment longer.",
  },
];

export const journal = [
  {
    slug: "the-depths",
    eyebrow: "Field Note 001",
    title: "On the discipline of depth",
    excerpt:
      "Why we chose the night sea as our beginning, and how restraint became the only language worth speaking.",
    image: "/src/assets/journal-1.jpg",
  },
  {
    slug: "the-aglet",
    eyebrow: "Object Study",
    title: "The weight of a single aglet",
    excerpt:
      "A study of the smallest object in the collection: cast brass, brushed by hand, fixed once and never again.",
    image: "/src/assets/journal-2.jpg",
  },
  {
    slug: "the-house",
    eyebrow: "Place 002",
    title: "A house above a black sea",
    excerpt:
      "Notes from a week in a concrete house on the Amalfi coast, where the pool and the sea agreed to disappear into one another.",
    image: "/src/assets/journal-3.jpg",
  },
];