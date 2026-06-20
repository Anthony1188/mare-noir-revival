import { Link } from "react-router-dom";
import { Layout } from "@/components/Layout";
import { Eyebrow } from "@/components/Eyebrow";
import { products } from "@/data/products";

const Collection = () => (
  <Layout>
    <section className="px-6 md:px-20 pt-20 pb-16 border-b border-hair">
      <div className="grid md:grid-cols-12 gap-10 items-end">
        <div className="md:col-span-7">
          <Eyebrow>Drop 001 — Edition I</Eyebrow>
          <h1 className="font-display text-6xl md:text-8xl text-bone leading-[0.95] mt-4">
            The Collection
          </h1>
        </div>
        <div className="md:col-span-5 space-y-3 md:pl-10 md:border-l border-hair">
          <p className="text-bone/60 leading-relaxed">
            Three silhouettes. One hundred and twenty pieces each. Crafted from
            reclaimed nylon along the Mediterranean coast. Once they're gone,
            they're gone.
          </p>
          <p className="text-[11px] tracking-eyebrow uppercase text-bone/40">
            360 pieces total · Shipping worldwide
          </p>
        </div>
      </div>
    </section>

    <section className="grid md:grid-cols-3 gap-px bg-[hsl(var(--border))]">
      {products.map((p, i) => (
        <Link key={p.slug} to={`/product/${p.slug}`} className="group relative bg-background p-8 md:p-10 flex flex-col">
          <div className="flex items-center justify-between mb-6">
            <Eyebrow>Silhouette {p.silhouette}</Eyebrow>
            <Eyebrow>{String(i + 1).padStart(2, "0")} / 03</Eyebrow>
          </div>
          <div className="aspect-[3/4] overflow-hidden bg-abyss/40">
            <img src={p.image} alt={p.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.03]" loading="lazy" width={1024} height={1280} />
          </div>
          <div className="mt-8 flex items-baseline justify-between">
            <h2 className="font-display text-4xl text-bone">{p.name}</h2>
            <span className="text-sm text-bone/60">€{p.price}</span>
          </div>
          <p className="text-sm text-bone/50 mt-3 leading-relaxed">{p.description}</p>
          <span className="mt-6 text-[11px] tracking-eyebrow uppercase text-bone/70 border-b border-bone/30 self-start pb-1 group-hover:text-gold">
            View Piece
          </span>
        </Link>
      ))}
    </section>
  </Layout>
);

export default Collection;