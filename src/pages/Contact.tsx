import { Layout } from "@/components/Layout";
import { Eyebrow } from "@/components/Eyebrow";

const Contact = () => (
  <Layout>
    <section className="px-6 md:px-20 pt-20 pb-16 border-b border-hair">
      <Eyebrow>Contact</Eyebrow>
      <h1 className="font-display text-6xl md:text-8xl text-bone leading-[0.95] mt-4 max-w-3xl">
        Write to the house.
      </h1>
    </section>

    <section className="px-6 md:px-20 mt-20 grid md:grid-cols-12 gap-12">
      <aside className="md:col-span-4 space-y-10">
        {[
          { k: "Maison", v: ["MARÉ NOIR", "12 Rue de la Marine", "13260 Cassis, France"] },
          { k: "Inner Circle", v: ["circle@marenoir.com"] },
          { k: "Press & Editorial", v: ["press@marenoir.com"] },
          { k: "Atelier", v: ["By appointment only", "+33 4 42 00 00 00"] },
        ].map((b) => (
          <div key={b.k}>
            <Eyebrow>{b.k}</Eyebrow>
            <div className="mt-3 space-y-1 text-bone/70 text-sm leading-relaxed">
              {b.v.map((l) => <div key={l}>{l}</div>)}
            </div>
          </div>
        ))}
      </aside>

      <form className="md:col-span-7 md:col-start-6 space-y-8" onSubmit={(e) => e.preventDefault()}>
        {[
          { label: "Name", type: "text" },
          { label: "Email", type: "email" },
          { label: "Subject", type: "text" },
        ].map((f) => (
          <div key={f.label}>
            <Eyebrow>{f.label}</Eyebrow>
            <input type={f.type} className="mt-3 w-full bg-transparent border-b border-hair py-3 text-bone focus:outline-none focus:border-gold transition-colors" />
          </div>
        ))}
        <div>
          <Eyebrow>Message</Eyebrow>
          <textarea rows={6} className="mt-3 w-full bg-transparent border-b border-hair py-3 text-bone focus:outline-none focus:border-gold transition-colors resize-none" />
        </div>
        <button className="px-10 py-4 border border-bone/40 text-[11px] tracking-eyebrow uppercase text-bone hover:bg-bone hover:text-background transition-colors">
          Send
        </button>
      </form>
    </section>
  </Layout>
);

export default Contact;