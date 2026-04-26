'use client';

import { motion } from 'framer-motion';
import { GALLERY } from '@/constants';
import Image from 'next/image';

export default function Gallery() {
    return (
        <section className="section-container space-y-12 bg-white/5">
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="text-center space-y-4"
            >
                <h2 className="text-4xl md:text-5xl font-serif text-foreground italic">Gallery</h2>
                <div className="w-24 h-1 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto rounded-full" />
                <p className="text-text-muted text-sm tracking-widest uppercase italic">Our Beautiful Memories</p>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-5xl mx-auto px-4 w-full">
                {GALLERY.map((src, idx) => (
                    <motion.div
                        key={idx}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.1 }}
                        className={`relative w-full rounded-2xl overflow-hidden shadow-[0_10px_30px_rgba(139,115,85,0.15)] group ${
                            idx === 0 
                                ? 'col-span-2 row-span-2 h-80 md:h-[500px]' 
                                : 'col-span-1 h-64 md:h-80'
                        }`}
                    >
                        <Image
                            src={src}
                            alt={`Gallery ${idx + 1}`}
                            fill
                            unoptimized={src.includes('foto7')}
                            sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
                            className="object-cover transition-transform duration-1000 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
