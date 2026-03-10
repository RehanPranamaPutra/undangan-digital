'use client';

import { motion } from 'framer-motion';
import { MailOpen, Heart } from 'lucide-react';
import { BRIDE_NAME, GROOM_NAME, ASSETS } from '@/constants';

interface OpeningCoverProps {
    onOpen: () => void;
    guestName?: string;
}

export default function OpeningCover({ onOpen, guestName }: OpeningCoverProps) {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, y: -100 }}
            transition={{ duration: 1, ease: "easeInOut" }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-background overflow-hidden"
        >
            {/* Luxury Background Textures */}
            <div className="absolute inset-0 opacity-20 mix-blend-overlay rotate-12 scale-150" style={{ backgroundImage: `url(${ASSETS.floralBorder})`, backgroundSize: 'contain', backgroundRepeat: 'no-repeat' }} />
            <div className="absolute inset-0 opacity-10" style={{ backgroundImage: `url(${ASSETS.paperTexture})` }} />
            <div className="absolute inset-0 opacity-5" style={{ backgroundImage: `url(${ASSETS.goldDust})` }} />

            <div className="relative z-10 text-center space-y-12 px-6 max-w-lg w-full">
                {/* Decorative Element */}
                <motion.div
                    initial={{ scale: 0, rotate: -180 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ type: "spring", damping: 15, delay: 0.2 }}
                    className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto border border-primary/20 shadow-xl"
                >
                    <Heart className="text-primary fill-primary/20" size={32} />
                </motion.div>

                <div className="space-y-6">
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                        className="text-text-muted font-serif italic tracking-[0.3em] uppercase text-xs"
                    >
                        The Wedding of
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.6, duration: 0.8 }}
                        className="space-y-2"
                    >
                        <h1 className="text-5xl md:text-6xl font-serif text-primary italic leading-tight">
                            {BRIDE_NAME.split(',')[0]}
                        </h1>
                        <span className="block text-3xl font-serif text-accent">&</span>
                        <h1 className="text-5xl md:text-6xl font-serif text-primary italic leading-tight">
                            {GROOM_NAME.split(' ')[0]}
                        </h1>
                    </motion.div>
                </div>

                {guestName && (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.8 }}
                        className="space-y-4 py-8 rounded-[2rem] bg-white/30 backdrop-blur-sm border border-white/50 shadow-sm"
                    >
                        <p className="text-xs font-bold text-text-muted uppercase tracking-[0.2em]">Kepada Yth. Bapak/Ibu/Saudara/i</p>
                        <h2 className="text-3xl font-serif text-foreground italic capitalize underline decoration-primary/20 underline-offset-8">
                            {decodeURIComponent(guestName)}
                        </h2>
                    </motion.div>
                )}

                <motion.button
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1 }}
                    onClick={onOpen}
                    className="btn-premium group flex items-center gap-3 mx-auto px-10 py-5 rounded-full shadow-2xl hover:scale-105 active:scale-95 transition-all w-full md:w-auto justify-center"
                >
                    <MailOpen className="group-hover:rotate-12 transition-transform" size={20} />
                    <span className="tracking-[0.2em] font-bold">Buka Undangan</span>
                </motion.button>
            </div>

            {/* Bottom Floral Decoration */}
            <motion.div
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 0.3, y: 0 }}
                transition={{ delay: 1.2, duration: 1 }}
                className="absolute bottom-[-10%] left-1/2 -translate-x-1/2 w-full max-w-2xl aspect-square pointer-events-none mix-blend-multiply"
                style={{ backgroundImage: `url(${ASSETS.floralBorder})`, backgroundSize: 'contain', backgroundPosition: 'bottom center', backgroundRepeat: 'no-repeat' }}
            />
        </motion.div>
    );
}
