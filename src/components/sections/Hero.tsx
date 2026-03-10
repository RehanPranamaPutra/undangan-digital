"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { WEDDING_DATA } from "@/constants";
import { MailOpen } from "lucide-react";

export default function Hero({ guestName }: { guestName: string }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <AnimatePresence>
        {!isOpen && (
          <motion.div 
            exit={{ y: "-100%" }}
            transition={{ duration: 1, ease: "easeInOut" }}
            className="fixed inset-0 z-[100] flex items-center justify-center overflow-hidden"
          >
            {/* Background Cover */}
            <div className="absolute inset-0">
              <img src={WEDDING_DATA.assets.coverBg} className="w-full h-full object-cover shadow-inner" alt="cover" />
              <div className="absolute inset-0 bg-black/50 backdrop-blur-[2px]" />
            </div>

            <div className="relative z-10 text-center text-white px-6">
              <motion.p initial={{ opacity:0 }} animate={{ opacity:1 }} className="uppercase tracking-[0.4em] text-[10px] mb-4">The Wedding of</motion.p>
              <h1 className="font-serif text-6xl italic mb-8 text-amber-200">
                {WEDDING_DATA.bride.nickname} & {WEDDING_DATA.groom.nickname}
              </h1>
              
              <div className="mb-12">
                <p className="text-xs opacity-70 mb-2 italic text-stone-200 uppercase tracking-widest">Kepada Yth. Bapak/Ibu/Saudara/i:</p>
                <h2 className="text-3xl font-serif font-bold">{guestName}</h2>
              </div>

              <button 
                onClick={() => setIsOpen(true)}
                className="flex items-center gap-2 mx-auto px-8 py-3 bg-amber-200 text-stone-900 rounded-full font-bold hover:bg-white transition-all shadow-xl animate-bounce"
              >
                <MailOpen size={18} /> Buka Undangan
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Hero (Sesudah Buka Undangan) */}
      <section className="relative h-screen flex items-center justify-center bg-[#fdfcf8] px-6 text-center overflow-hidden">
         <div className="absolute top-0 right-0 w-64 opacity-20">
            <img src={WEDDING_DATA.assets.floralTexture} alt="floral" />
         </div>
         <motion.div 
           initial={{ opacity: 0 }} 
           whileInView={{ opacity: 1 }}
           className="z-10 space-y-4"
         >
           <p className="font-serif text-stone-400 italic text-xl">Save the Date</p>
           <h2 className="font-serif text-7xl md:text-9xl text-[#2d3e33] italic">
              {WEDDING_DATA.bride.nickname} & {WEDDING_DATA.groom.nickname}
           </h2>
           <p className="tracking-[0.5em] text-stone-500">03 . 04 . 2026</p>
         </motion.div>
         <div className="absolute bottom-0 left-0 w-64 opacity-20 rotate-180">
            <img src={WEDDING_DATA.assets.floralTexture} alt="floral" />
         </div>
      </section>
    </>
  );
}