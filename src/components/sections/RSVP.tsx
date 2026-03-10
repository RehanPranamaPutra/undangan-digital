"use client";
import { useState } from "react";
import { supabase } from "@/lib/supabase";

export default function RSVP({ guestName }: { guestName: string }) {
  const [status, setStatus] = useState("Hadir");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    const { error } = await supabase.from('rsvps').insert([{ name: guestName, status, message }]);
    setLoading(false);
    if (!error) alert("Terima kasih atas konfirmasinya!");
  };

  return (
    <section className="py-20 px-6 bg-[#2d3e33] text-stone-100">
      <div className="max-w-md mx-auto text-center">
        <h2 className="font-serif text-3xl mb-8 italic">Konfirmasi Kehadiran</h2>
        <form onSubmit={handleSubmit} className="text-left space-y-4">
          <input className="w-full p-3 bg-white/10 border border-white/20 rounded outline-none" value={guestName} readOnly />
          <select className="w-full p-3 bg-white/10 border border-white/20 rounded outline-none" onChange={(e) => setStatus(e.target.value)}>
            <option className="text-stone-800" value="Hadir">Hadir</option>
            <option className="text-stone-800" value="Tidak Hadir">Tidak Hadir</option>
          </select>
          <textarea className="w-full p-3 bg-white/10 border border-white/20 rounded h-32 outline-none" placeholder="Berikan ucapan terbaikmu..." onChange={(e) => setMessage(e.target.value)} />
          <button className="w-full py-4 bg-stone-200 text-stone-800 rounded-full font-bold uppercase tracking-widest hover:bg-white transition">
            {loading ? "Mengirim..." : "Kirim RSVP"}
          </button>
        </form>
      </div>
    </section>
  );
}