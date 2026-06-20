import { Link } from "react-router-dom";
import { Layout } from "@/components/Layout";
import { Eyebrow } from "@/components/Eyebrow";
import hero from "@/assets/hero-shorts.jpg";
import water from "@/assets/texture-water.jpg";
import journal2 from "@/assets/journal-2.jpg";
import storyWide from "@/assets/story-wide.jpg";
import { products } from "@/data/products";

const Index = () => {
  return (
    <Layout>
      {/* HERO */}
      <section className="relative">
        <div className="relative h-[88vh] min-h-[640px] overflow-hidden">
          <img
            src={hero}
            alt="The MARÉ NOIR collection floating in deep light"
            className="absolute inset-0 w-full h-full object-cover"
            width={1920}
            height={1280}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/10 to-background" />

          <div className="hidden md:flex absolute left-6 top-1/2 -translate-y-1/2 flex-col items-center gap-6">
            <span className="w-px h-12 bg-bone/30" />
            <span className="[writing-mode:vertical-rl] rotate-180 text-[10px] tracking-eyebrow uppercase text-bone/50">
              Inspired by the depths
            </span>
            <span className="w-px h-12 bg-bone/30" />
          </div>

          <div className="absolute inset-0 flex items-center">
            <div className="px-10 md:px-20 max-w-xl">
              <Eyebrow className="block mb-6">Drop 001 — Edition I</Eyebrow>
              <h1 className="font-display text-6xl md:text-8xl leading-[0.95] text-bone">
                The<br />Collection
              </h1>
              <div className="hairline w-16 my-8" />
              <p className="text-bone/70 max-w-sm leading-relaxed">
                Three silhouettes. One hundred and twenty pieces each. Crafted
                from reclaimed Mediterranean materials. Once they're gone,
                they're gone.
              </p>
              <Link
                to="/collection"
                className="inline-block mt-10 px-10 py-4 border border-bone/40 text-[11px] tracking-eyebrow uppercase text-bone hover:bg-bone hover:text-background transition-colors"
              >
                Explore Collection
              </Link>
            </div>
          </div>

          <div className="absolute bottom-8 left-10 md:left-20 flex items-start gap-3 text-[10px] tracking-eyebrow uppercase text-bone/40">
            <span className="size-3 rounded-full border border-bone/40 mt-0.5" />
            <div>
              <div>41.3874° N, 2.1686° E</div>
              <div>Mediterranean Sea</div>
            </div>
          </div>
        </div>
      </section>

      {/* PILLAR ROW */}
      <section className="border-t border-hair grid md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-[hsl(var(--border))]">
        {[
          { eyebrow: "Collection Story", title: "Rooted in the sea.", body: "Defined by depth. Built for timeless movement.", link: { to: "/story", label: "Discover" } },
          { eyebrow: "Premium Materials", title: "Regenerated nylons.", body: "Ocean-grade hardware. Refined finishes.", link: { to: "/journal", label: "Explore Materials" } },
          { eyebrow: "Limited Release", title: "Small drops.", body: "Thoughtful production. Always in limited numbers.", link: { to: "/collection", label: "Learn More" } },
          { eyebrow: "Inner Circle", title: "Be first to know.", body: "Exclusive drops. Private access.", form: true },
        ].map((c, i) => (
          <div key={i} className="p-8 md:p-10 space-y-5 min-h-[260px] flex flex-col">
            <Eyebrow>{c.eyebrow}</Eyebrow>
            <h3 className="font-display text-2xl text-bone leading-snug">{c.title}</h3>
            <p className="text-sm text-bone/60 leading-relaxed flex-1">{c.body}</p>
            {c.form ? (
              <form className="flex border-b border-hair pt-2" onSubmit={(e) => e.preventDefault()}>
                <input type="email" placeholder="Enter your email" className="flex-1 bg-transparent py-2 text-sm placeholder:text-bone/30 focus:outline-none" />
                <button className="text-bone/60 hover:text-gold text-sm">→</button>
              </form>
            ) : (
              <Link to={c.link!.to} className="text-[11px] tracking-eyebrow uppercase text-bone/80 hover:text-gold border-b border-bone/30 self-start pb-1">
                {c.link!.label}
              </Link>
            )}
          </div>
        ))}
      </section>

      {/* EDITORIAL */}
      <section className="mt-32 px-6 md:px-20 grid md:grid-cols-12 gap-10 items-center">
        <div className="md:col-span-5 space-y-6">
          <Eyebrow>Manifesto</Eyebrow>
          <h2 className="font-display text-5xl md:text-6xl text-bone leading-[1.02]">
            The sea at one a.m.<br />
            <em className="not-italic text-bone/50">is not a colour.</em>
          </h2>
          <p className="text-bone/60 leading-relaxed max-w-md">
            It is a discipline. MARÉ NOIR is a small house making swimwear for
            men who have stopped performing — for the hour after the crowd
            leaves, when the cliffs cool and the water turns to ink.
          </p>
          <Link to="/story" className="inline-block text-[11px] tracking-eyebrow uppercase text-bone/80 border-b border-bone/30 pb-1 hover:text-gold">
            Read the Story
          </Link>
        </div>
        <div className="md:col-span-7 aspect-[4/5] overflow-hidden">
          <img src={water} alt="Dark sea texture" className="w-full h-full object-cover" loading="lazy" width={1280} height={1280} />
        </div>
      </section>

      {/* COLLECTION PREVIEW */}
      <section className="mt-32 px-6 md:px-20">
        <div className="flex items-end justify-between mb-12">
          <div>
            <Eyebrow>Drop 001 — Three Silhouettes</Eyebrow>
            <h2 className="font-display text-5xl md:text-6xl text-bone mt-3">The Edition</h2>
          </div>
          <Link to="/collection" className="hidden md:inline-block text-[11px] tracking-eyebrow uppercase text-bone/70 hover:text-gold border-b border-bone/30 pb-1">
            View All
          </Link>
        </div>
        <div className="grid md:grid-cols-3 gap-px bg-[hsl(var(--border))]">
          {products.map((p) => (
            <Link key={p.slug} to={`/product/${p.slug}`} className="group relative bg-background p-8 flex flex-col">
              <div className="aspect-[3/4] overflow-hidden bg-abyss/40">
                <img src={p.image} alt={p.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.03]" loading="lazy" width={1024} height={1280} />
              </div>
              <div className="mt-6 flex items-baseline justify-between">
                <div>
                  <Eyebrow>Silhouette {p.silhouette}</Eyebrow>
                  <h3 className="font-display text-3xl text-bone mt-1">{p.name}</h3>
                </div>
                <span className="text-sm text-bone/60">€{p.price}</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* JOURNAL TEASE */}
      <section className="mt-32 px-6 md:px-20 grid md:grid-cols-2 gap-12 items-center">
        <div className="aspect-[4/5] overflow-hidden order-2 md:order-1">
          <img src={journal2} alt="Gold aglet on dark nylon" className="w-full h-full object-cover" loading="lazy" width={1280} height={1600} />
        </div>
        <div className="space-y-6 order-1 md:order-2">
          <Eyebrow>Journal — Object Study</Eyebrow>
          <h2 className="font-display text-5xl text-bone leading-tight">
            The weight of a single aglet.
          </h2>
          <p className="text-bone/60 leading-relaxed max-w-md">
            Cast brass, brushed by hand, fixed once and never again. A small
            note on the smallest object in the collection.
          </p>
          <Link to="/journal" className="inline-block text-[11px] tracking-eyebrow uppercase text-bone/80 border-b border-bone/30 pb-1 hover:text-gold">
            Read the Journal
          </Link>
        </div>
      </section>

      {/* FULL BLEED */}
      <section className="mt-32 relative h-[60vh] min-h-[420px] overflow-hidden">
        <img src={storyWide} alt="Dark cliffs and the Mediterranean" className="absolute inset-0 w-full h-full object-cover" loading="lazy" width={1920} height={1080} />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
        <div className="absolute inset-0 flex items-end p-10 md:p-20">
          <div>
            <Eyebrow>Maison MARÉ NOIR</Eyebrow>
            <h3 className="font-display text-4xl md:text-5xl text-bone mt-3 max-w-2xl leading-tight">
              For the hour after the crowd leaves.
            </h3>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;