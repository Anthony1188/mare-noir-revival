import { Link, useParams } from "react-router-dom";
import { Layout } from "@/components/Layout";
import { Eyebrow } from "@/components/Eyebrow";
import { products } from "@/data/products";
import { useState } from "react";

const Product = () => {
  const { slug } = useParams();
  const product = products.find((p) => p.slug === slug) ?? products[0];
  const [size, setSize] = useState("M");

  return (
    <Layout>
      <div className="px-6 md:px-20 pt-10 pb-6 text-[10px] tracking-eyebrow uppercase text-bone/40">
        <Link to="/collection" className="hover:text-bone">Collection</Link>
        <span className="mx-2">/</span>
        <span className="text-bone/70">{product.name}</span>
      </div>

      <section className="grid md:grid-cols-2 gap-px bg-[hsl(var(--border))]">
        <div className="bg-background aspect-[3/4] md:aspect-auto">
          <img src={product.image} alt={product.name} className="w-full h-full object-cover" width={1024} height={1280} />
        </div>
        <div className="bg-background p-10 md:p-16 flex flex-col justify-center">
          <Eyebrow>{product.edition}</Eyebrow>
          <h1 className="font-display text-6xl md:text-7xl text-bone mt-4 leading-none">{product.name}</h1>
          <div className="hairline w-12 my-8" />
          <p className="text-bone/60 leading-relaxed max-w-md">{product.description}</p>

          <div className="mt-10 flex items-baseline gap-4">
            <span className="text-2xl font-display text-bone">€{product.price}</span>
            <span className="text-[10px] tracking-eyebrow uppercase text-bone/40">
              Of {product.pieces} pieces
            </span>
          </div>

          <div className="mt-10">
            <Eyebrow>Size</Eyebrow>
            <div className="flex gap-px bg-[hsl(var(--border))] mt-3 w-fit">
              {["XS", "S", "M", "L", "XL"].map((s) => (
                <button
                  key={s}
                  onClick={() => setSize(s)}
                  className={`bg-background px-5 py-3 text-sm transition-colors ${
                    size === s ? "text-gold" : "text-bone/60 hover:text-bone"
                  }`}
                >
                  {s}
                </button>
              ))}
            </div>
          </div>

          <button className="mt-10 px-10 py-4 border border-bone/40 text-[11px] tracking-eyebrow uppercase text-bone hover:bg-bone hover:text-background transition-colors w-fit">
            Add to Cart
          </button>

          <dl className="mt-12 grid grid-cols-2 gap-y-4 text-sm border-t border-hair pt-8">
            <dt className="text-bone/40 tracking-wider-luxe uppercase text-[10px]">Material</dt>
            <dd className="text-bone/80">Regenerated nylon</dd>
            <dt className="text-bone/40 tracking-wider-luxe uppercase text-[10px]">Hardware</dt>
            <dd className="text-bone/80">Brushed brass aglets</dd>
            <dt className="text-bone/40 tracking-wider-luxe uppercase text-[10px]">Cut</dt>
            <dd className="text-bone/80">Mid-thigh, lined</dd>
            <dt className="text-bone/40 tracking-wider-luxe uppercase text-[10px]">Made in</dt>
            <dd className="text-bone/80">Portugal</dd>
          </dl>
        </div>
      </section>

      <section className="px-6 md:px-20 mt-32">
        <Eyebrow>Continue</Eyebrow>
        <div className="grid md:grid-cols-2 gap-px bg-[hsl(var(--border))] mt-6">
          {products.filter((p) => p.slug !== product.slug).map((p) => (
            <Link key={p.slug} to={`/product/${p.slug}`} className="bg-background p-8 group">
              <div className="aspect-[3/4] overflow-hidden bg-abyss/40">
                <img src={p.image} alt={p.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.03]" loading="lazy" width={1024} height={1280} />
              </div>
              <div className="mt-6 flex items-baseline justify-between">
                <h3 className="font-display text-3xl text-bone">{p.name}</h3>
                <span className="text-sm text-bone/60">€{p.price}</span>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </Layout>
  );
};

export default Product;