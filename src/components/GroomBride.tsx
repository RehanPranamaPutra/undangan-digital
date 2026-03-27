'use client';

import { motion } from 'framer-motion';
import { BRIDE, GROOM, ASSETS } from '@/constants';
import Image from 'next/image';
import { Instagram } from 'lucide-react';

export default function GroomBride() {
    return (
        <section className="section-container space-y-6 bg-white/20">
            {/* Elegant Heading */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center space-y-4"
            >
                <h2 className="text-4xl md:text-5xl font-serif text-foreground italic">Mempelai</h2>
                <div className="w-24 h-1 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto rounded-full" />
                <p className="text-text-muted text-sm tracking-widest uppercase max-w-md mx-auto leading-loose">
                    Atas Izin Allah SWT kami akan melangsungkan pernikahan
                </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24 max-w-5xl mx-auto w-full relative">
                {/* Groom */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="luxury-card group text-center space-y-6 relative overflow-visible"
                >
                    <div className="absolute -top-10 -left-10 w-32 h-32 floral-overlay opacity-30 rotate-45 group-hover:scale-110 transition-transform duration-1000" style={{ backgroundImage: `url(${ASSETS.floralBorder})` }} />

                    <div className="relative w-56 h-72 mx-auto rounded-t-[6rem] rounded-b-2xl overflow-hidden border-4 border-white shadow-[0_20px_50px_rgba(139,115,85,0.3)] bg-primary/5">
                        <Image
                            src={GROOM.image}
                            alt={GROOM.name}
                            fill
                            className="object-cover object-top transition-transform duration-1000 group-hover:scale-110"
                        />
                    </div>
                    <div className="space-y-2">
                        <h3 className="text-3xl font-serif text-primary italic">{GROOM.name}</h3>
                        <p className="text-sm font-medium tracking-widest text-[#8b7355] uppercase">Putra dari</p>
                        <p className="text-text-muted font-serif italic text-lg leading-relaxed">
                            Bpk. {GROOM.father} & Ibu {GROOM.mother}
                        </p>
                    </div>
                    <a href={GROOM.instagram} target="_blank" className="inline-flex items-center gap-2 text-primary hover:text-accent transition-colors">
                        <Instagram size={20} className="p-1 bg-primary/10 rounded-full" />
                        <span className="text-sm font-medium tracking-widest italic">
                            @{GROOM.instagram.split('?')[0].split('/').filter(Boolean).pop()}
                        </span>
                    </a>
                </motion.div>

                {/* Bride */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="luxury-card group text-center space-y-6 relative overflow-visible"
                >
                    <div className="absolute -top-10 -right-10 w-32 h-32 floral-overlay opacity-30 rotate-[220deg] group-hover:scale-110 transition-transform duration-1000" style={{ backgroundImage: `url(${ASSETS.floralBorder})` }} />

                    <div className="relative w-56 h-72 mx-auto rounded-t-[6rem] rounded-b-2xl overflow-hidden border-4 border-white shadow-[0_20px_50px_rgba(139,115,85,0.3)] bg-primary/5">
                        <Image
                            src={BRIDE.image}
                            alt={BRIDE.name}
                            fill
                            className="object-cover object-top transition-transform duration-1000 group-hover:scale-110"
                        />
                    </div>
                    <div className="space-y-2">
                        <h3 className="text-3xl font-serif text-primary italic">{BRIDE.name}</h3>
                        <p className="text-sm font-medium tracking-widest text-[#8b7355] uppercase">Putri dari</p>
                        <p className="text-text-muted font-serif italic text-lg leading-relaxed">
                            Bpk. {BRIDE.father} & Ibu {BRIDE.mother}
                        </p>
                    </div>
                    <a href={BRIDE.instagram} target="_blank" className="inline-flex items-center gap-2 text-primary hover:text-accent transition-colors">
                        <Instagram size={20} className="p-1 bg-primary/10 rounded-full" />
                        <span className="text-sm font-medium tracking-widest italic">
                            @{BRIDE.instagram.split('?')[0].split('/').filter(Boolean).pop()}
                        </span>
                    </a>
                </motion.div>

                {/* 'dengan' label in the middle for desktop */}
                <div className="hidden md:flex absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-primary/30 text-5xl font-serif italic pointer-events-none">
                    dengan
                </div>
            </div>
        </section>
    );
}
