import { Layout } from "@/components/Layout";
import { Eyebrow } from "@/components/Eyebrow";
import journal1 from "@/assets/journal-1.jpg";
import journal2 from "@/assets/journal-2.jpg";
import journal3 from "@/assets/journal-3.jpg";

const entries = [
  { eyebrow: "Field Note 001", title: "On the discipline of depth", date: "VI · MMXXVI", image: journal1, body: "Why the night sea, and why restraint became the only language worth speaking." },
  { eyebrow: "Object Study", title: "The weight of a single aglet", date: "V · MMXXVI", image: journal2, body: "Cast brass, brushed by hand, fixed once and never again." },
  { eyebrow: "Place 002", title: "A house above a black sea", date: "IV · MMXXVI", image: journal3, body: "Notes from a week in a concrete villa where the pool agreed to disappear into the sea." },
];

const Journal = () => (
  <Layout>
    <section className="px-6 md:px-20 pt-20 pb-16 border-b border-hair">
      <Eyebrow>Journal</Eyebrow>
      <h1 className="font-display text-6xl md:text-8xl text-bone leading-[0.95] mt-4 max-w-3xl">
        Field notes from the depths.
      </h1>
    </section>

    <section className="px-6 md:px-20 mt-20 space-y-32">
      {entries.map((e, i) => (
        <article key={e.title} className={`grid md:grid-cols-12 gap-10 items-center ${i % 2 ? "md:[&>div:first-child]:order-2" : ""}`}>
          <div className="md:col-span-7 aspect-[4/5] overflow-hidden">
            <img src={e.image} alt={e.title} className="w-full h-full object-cover" loading="lazy" width={1280} height={1600} />
          </div>
          <div className="md:col-span-5 space-y-6">
            <div className="flex items-center gap-4">
              <Eyebrow>{e.eyebrow}</Eyebrow>
              <span className="w-8 h-px bg-bone/30" />
              <Eyebrow>{e.date}</Eyebrow>
            </div>
            <h2 className="font-display text-4xl md:text-5xl text-bone leading-tight">{e.title}</h2>
            <p className="text-bone/60 leading-relaxed">{e.body}</p>
            <a href="#" className="inline-block text-[11px] tracking-eyebrow uppercase text-bone/80 border-b border-bone/30 pb-1 hover:text-gold">Read entry</a>
          </div>
        </article>
      ))}
    </section>
  </Layout>
);

export default Journal;