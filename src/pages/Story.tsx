import { Layout } from "@/components/Layout";
import { Eyebrow } from "@/components/Eyebrow";
import storyHands from "@/assets/story-1.jpg";
import storyWide from "@/assets/story-wide.jpg";

const Story = () => (
  <Layout>
    <section className="relative h-[80vh] min-h-[560px] overflow-hidden">
      <img src={storyWide} alt="Dark Mediterranean cliffs" className="absolute inset-0 w-full h-full object-cover" width={1920} height={1080} />
      <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/20 to-background" />
      <div className="absolute inset-0 flex items-end p-10 md:p-20">
        <div>
          <Eyebrow>Our Story</Eyebrow>
          <h1 className="font-display text-6xl md:text-8xl text-bone mt-4 leading-[0.95] max-w-3xl">
            Inspired by<br />the depths.
          </h1>
        </div>
      </div>
    </section>

    <section className="px-6 md:px-20 mt-32 grid md:grid-cols-12 gap-10">
      <div className="md:col-span-4">
        <Eyebrow>Chapter I</Eyebrow>
        <h2 className="font-display text-4xl text-bone mt-3 leading-tight">The night the sea turned black.</h2>
      </div>
      <div className="md:col-span-7 md:col-start-6 space-y-6 text-bone/70 leading-loose">
        <p>MARÉ NOIR began on a cliff above Cassis, at one in the morning, when the Mediterranean stopped being blue and became something else entirely — an unlit material, almost solid, almost mineral.</p>
        <p>We wanted clothing that respected that hour. Not a costume for the day, but a quiet uniform for the moment after — when the crowd has left, the cliffs cool, and what remains is only depth.</p>
      </div>
    </section>

    <section className="mt-32 grid md:grid-cols-2 gap-px bg-[hsl(var(--border))]">
      <div className="bg-background aspect-[4/5]">
        <img src={storyHands} alt="Hands working dark fishing net" className="w-full h-full object-cover" loading="lazy" width={1280} height={1600} />
      </div>
      <div className="bg-background p-10 md:p-16 flex flex-col justify-center space-y-6">
        <Eyebrow>Chapter II — Material</Eyebrow>
        <h2 className="font-display text-4xl md:text-5xl text-bone leading-tight">From discarded net to first edition.</h2>
        <p className="text-bone/60 leading-relaxed">
          Every piece begins as reclaimed ocean nylon — recovered along the Mediterranean coast, regenerated in Italy, cut and finished in a small atelier in Portugal. Hardware is brushed brass, fixed by hand.
        </p>
        <p className="text-bone/60 leading-relaxed">
          We release in numbered editions of 120, and then no more. What stays is the object, and the memory of the water it was made for.
        </p>
      </div>
    </section>

    <section className="px-6 md:px-20 mt-32 grid md:grid-cols-3 gap-px bg-[hsl(var(--border))]">
      {[
        { k: "MMXXIV", v: "House founded, Marseille" },
        { k: "120 / 03", v: "Pieces per silhouette" },
        { k: "ITA · PRT", v: "Mill and atelier" },
      ].map((s) => (
        <div key={s.k} className="bg-background p-10">
          <div className="font-display text-4xl text-bone">{s.k}</div>
          <div className="text-[10px] tracking-eyebrow uppercase text-bone/40 mt-3">{s.v}</div>
        </div>
      ))}
    </section>
  </Layout>
);

export default Story;