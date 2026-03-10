import { WEDDING_DATA } from "@/constants";

export default function Family() {
  return (
    <section className="py-20 bg-stone-50 text-stone-700 px-6">
      <div className="max-w-4xl mx-auto border-t border-b border-stone-200 py-12">
        <h2 className="text-center font-serif text-3xl mb-12 italic">Turut Mengundang</h2>
        
        <div className="grid md:grid-cols-2 gap-12 text-sm leading-relaxed">
          <div>
            <h3 className="font-bold border-b mb-4 pb-2 uppercase tracking-widest text-stone-400">Pihak Mamak</h3>
            <ul className="space-y-2 italic">
              {WEDDING_DATA.family.mamak.map((item, i) => <li key={i}>{item}</li>)}
            </ul>
          </div>
          <div>
            <h3 className="font-bold border-b mb-4 pb-2 uppercase tracking-widest text-stone-400">Pihak Etek / Apak</h3>
            <ul className="space-y-2 italic">
              {WEDDING_DATA.family.etekApak.map((item, i) => <li key={i}>{item}</li>)}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}