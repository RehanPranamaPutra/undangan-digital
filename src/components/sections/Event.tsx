import { WEDDING_DATA } from "@/constants";
import { MapPin, Calendar } from "lucide-react";

export default function Event() {
  return (
    <section className="py-24 bg-white relative">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
           <h2 className="font-serif text-4xl text-[#2d3e33]">Waktu & Lokasi</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* AKAD */}
          <div className="p-10 border border-stone-100 rounded-3xl bg-stone-50 shadow-sm text-center space-y-4 hover:shadow-md transition">
            <Calendar className="mx-auto text-amber-600" />
            <h3 className="font-serif text-3xl italic">Akad Nikah</h3>
            <p className="font-bold">{WEDDING_DATA.akad.day}, {WEDDING_DATA.akad.date}</p>
            <p className="text-sm opacity-70">Pukul 08:00 WIB - Selesai</p>
            <div className="pt-4 border-t border-stone-200">
               <p className="font-serif text-lg">{WEDDING_DATA.akad.location}</p>
            </div>
          </div>

          {/* RESEPSI */}
          <div className="p-10 border border-amber-100 rounded-3xl bg-[#2d3e33] text-white text-center space-y-4 hover:shadow-md transition">
            <Calendar className="mx-auto text-amber-200" />
            <h3 className="font-serif text-3xl italic">Resepsi</h3>
            <p className="font-bold">{WEDDING_DATA.resepsi.day}, {WEDDING_DATA.resepsi.date}</p>
            <p className="text-sm opacity-70">Pukul 11:00 WIB - Selesai</p>
            <div className="pt-4 border-t border-white/20">
               <p className="font-serif text-lg">{WEDDING_DATA.resepsi.location}</p>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
           <a 
             href={WEDDING_DATA.maps} 
             target="_blank"
             className="inline-flex items-center gap-2 px-8 py-3 bg-amber-600 text-white rounded-full font-bold shadow-lg"
           >
             <MapPin size={18} /> Lihat Lokasi G-Maps
           </a>
        </div>
      </div>
    </section>
  );
}