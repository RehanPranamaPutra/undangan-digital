'use client';

import { motion } from 'framer-motion';
import { BRIDE_NAME, GROOM_NAME, WEDDING_DATE } from '@/constants';

export default function Hero() {
    return (
        <section className="section-container text-center space-y-8 min-h-screen flex flex-col justify-center relative bg-white/30">
            {/* Animated Floral Background Elements */}
            <div className="floral-overlay -top-20 -left-20 w-80 h-80 bg-[url('https://png.pngtree.com/png-vector/20220909/ourmid/pngtree-vintage-watercolor-flower-frame-gold-glitter-wedding-invitations-floral-border-png-image_6144889.png')] rotate-12" />
            <div className="floral-overlay -bottom-20 -right-20 w-80 h-80 bg-[url('https://png.pngtree.com/png-vector/20220909/ourmid/pngtree-vintage-watercolor-flower-frame-gold-glitter-wedding-invitations-floral-border-png-image_6144889.png')] -rotate-12" />

            <div className="space-y-6 z-10 relative">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                    className="space-y-2"
                >
                    <p className="text-text-muted tracking-[0.3em] uppercase text-xs font-sans font-medium mb-4">The Wedding of</p>
                    <h1 className="text-6xl md:text-8xl font-serif text-primary italic leading-tight">
                        {GROOM_NAME.split(' ')[0]} <span className="text-4xl md:text-6xl text-accent block md:inline font-sans not-italic mx-4">&</span> {BRIDE_NAME.split(' ')[0]}
                    </h1>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5, duration: 1 }}
                    className="space-y-6"
                >
                    <div className="w-px h-20 bg-gradient-to-b from-transparent via-primary/30 to-transparent mx-auto" />
                    <p className="text-xl md:text-2xl font-serif text-text-muted italic">{WEDDING_DATE}</p>
                    <div className="max-w-lg mx-auto p-8 rounded-[3rem] border border-primary/5 bg-white/20 backdrop-blur-sm">
                        <p className="text-sm md:text-base leading-relaxed text-text-muted italic leading-loose">
                            "Dan di antara tanda-tanda (kebesaran)-Nya ialah Dia menciptakan pasangan-pasangan untukmu dari jenismu sendiri, agar kamu cenderung dan merasa tenteram kepadanya, dan Dia menjadikan di antaramu rasa kasih dan sayang."
                            <span className="block mt-4 font-bold not-italic tracking-widest uppercase text-[10px]">— Ar-Rum: 21</span>
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
