'use client';

import { motion } from 'framer-motion';
import { EVENT } from '@/constants';
import { Calendar, Clock, MapPin } from 'lucide-react';

export default function EventSchedule() {
    return (
        <section className="section-container space-y-6 relative bg-white/10">
            {/* Elegant Heading */}
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="text-center space-y-4"
            >
                <h2 className="text-4xl md:text-5xl font-serif text-foreground italic">Acara Pernikahan</h2>
                <div className="w-24 h-1 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto rounded-full" />
                <p className="text-text-muted text-sm tracking-widest uppercase italic">The Special Moments</p>
            </motion.div>

            <div className="max-w-2xl mx-auto w-full z-10 px-4">
                {/* Resepsi */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="luxury-card group space-y-8 relative overflow-hidden"
                >
                    <div className="absolute bottom-0 left-0 w-32 h-32 bg-primary/5 rounded-full -ml-16 -mb-16 group-hover:scale-150 transition-transform duration-1000" />
                    <div className="space-y-4 text-center">
                        <h3 className="text-3xl font-serif text-primary italic">Resepsi Pernikahan</h3>
                        <div className="flex flex-col items-center gap-4 text-text-muted">
                            <div className="flex items-center gap-3 bg-white/50 px-6 py-2 rounded-full border border-primary/10 shadow-sm">
                                <Calendar className="text-primary" size={18} />
                                <span className="font-medium text-sm tracking-wide">{EVENT.resepsi.date}</span>
                            </div>
                            <div className="flex items-center gap-3 bg-white/50 px-6 py-2 rounded-full border border-primary/10 shadow-sm">
                                <Clock className="text-primary" size={18} />
                                <span className="font-medium text-sm tracking-wide">{EVENT.resepsi.time}</span>
                            </div>
                        </div>
                    </div>
                    <div className="space-y-3 text-center border-t border-primary/5 pt-8">
                        <p className="font-serif text-lg text-foreground font-bold">{EVENT.resepsi.location}</p>
                        <p className="text-sm text-text-muted leading-relaxed italic">{EVENT.resepsi.address}</p>
                        <a
                            href={EVENT.resepsi.maps}
                            target="_blank"
                            className="btn-premium inline-flex items-center gap-2 mt-4 text-xs"
                        >
                            <MapPin size={14} /> Petunjuk Lokasi
                        </a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
