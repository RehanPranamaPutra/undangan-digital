'use client';

import { motion } from 'framer-motion';
import { MailOpen, Heart } from 'lucide-react';
import { BRIDE_NAME, GROOM_NAME, ASSETS } from '@/constants';
import Image from 'next/image';

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
            className="fixed inset-0 z-[100] flex items-center justify-center overflow-hidden py-10 bg-background"
        >
            {/* Background Image (foto7.jpeg) */}
            <div className="absolute inset-0 z-0">
                <Image 
                    src="/images/foto7.jpeg" 
                    alt="Wedding Cover" 
                    fill 
                    priority
                    unoptimized
                    className="object-cover object-[center_15%] opacity-80" 
                />
                <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/30 to-background/90" />
            </div>
            
            {/* Luxury Background Textures */}
            <div className="absolute inset-0 opacity-20 mix-blend-overlay rotate-12 scale-150 z-0 pointer-events-none" style={{ backgroundImage: `url(${ASSETS.floralBorder})`, backgroundSize: 'contain', backgroundRepeat: 'no-repeat' }} />
            <div className="absolute inset-0 opacity-10 z-0 pointer-events-none" style={{ backgroundImage: `url(${ASSETS.paperTexture})` }} />

            <div className="relative z-10 text-center space-y-12 px-6 max-w-lg w-full">
                {/* Decorative Element */}
                <motion.div
                    initial={{ scale: 0, rotate: -180 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ type: "spring", damping: 15, delay: 0.2 }}
                    className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto border border-primary/30 shadow-xl backdrop-blur-md"
                >
                    <Heart className="text-primary fill-primary/20" size={32} />
                </motion.div>

                <div className="space-y-6">
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                        className="text-primary font-bold font-serif italic tracking-[0.3em] uppercase text-[10px] md:text-xs drop-shadow-[0_0_8px_rgba(255,255,255,1)]"
                    >
                        The Wedding of
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.6, duration: 0.8 }}
                        className="space-y-2 drop-shadow-[0_0_15px_rgba(255,255,255,0.8)]"
                    >
                        <h1 className="text-5xl md:text-6xl font-serif text-primary italic leading-tight px-4 font-semibold">
                            {GROOM_NAME.split(' ')[0]}
                        </h1>
                        <span className="block text-3xl md:text-4xl font-serif text-accent font-bold">&</span>
                        <h1 className="text-5xl md:text-6xl font-serif text-primary italic leading-tight px-4 font-semibold">
                            {BRIDE_NAME.split(' ')[0]}
                        </h1>
                    </motion.div>
                </div>

                {guestName && (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.8 }}
                        className="space-y-4 py-8 rounded-[2rem] bg-white/50 backdrop-blur-md border border-white shadow-xl"
                    >
                        <p className="text-[10px] font-bold text-text-muted uppercase tracking-[0.2em]">Kepada Yth. Bapak/Ibu/Saudara/i</p>
                        <h2 className="text-2xl md:text-3xl font-serif text-foreground italic capitalize underline decoration-primary/30 underline-offset-8 px-4">
                            {decodeURIComponent(guestName)}
                        </h2>
                    </motion.div>
                )}

                <motion.button
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1 }}
                    onClick={onOpen}
                    className="btn-premium group flex items-center gap-3 mx-auto px-8 py-4 md:px-10 md:py-5 rounded-full shadow-xl hover:scale-105 active:scale-95 transition-all w-fit justify-center"
                >
                    <MailOpen className="group-hover:rotate-12 transition-transform" size={18} />
                    <span className="tracking-[0.2em] font-bold text-xs md:text-sm">Buka Undangan</span>
                </motion.button>
            </div>
        </motion.div>
    );
}
