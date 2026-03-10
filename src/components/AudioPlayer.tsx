'use client';

import { useState, useRef, useEffect } from 'react';
import { Music, Pause } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function AudioPlayer() {
    const [isPlaying, setIsPlaying] = useState(false);
    const audioRef = useRef<HTMLAudioElement | null>(null);

    useEffect(() => {
        const audio = new Audio('https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3');
        audio.loop = true;
        audioRef.current = audio;

        return () => {
            if (audioRef.current) {
                audioRef.current.pause();
            }
        };
    }, []);

    const togglePlay = () => {
        if (!audioRef.current) return;

        if (isPlaying) {
            audioRef.current.pause();
        } else {
            audioRef.current.play();
        }
        setIsPlaying(!isPlaying);
    };

    return (
        <div className="fixed bottom-6 right-6 z-50">
            <motion.button
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={togglePlay}
                className={`relative w-14 h-14 rounded-full flex items-center justify-center shadow-2xl border-2 transition-all duration-500 overflow-hidden ${isPlaying
                        ? 'bg-primary border-primary text-white'
                        : 'bg-white/80 backdrop-blur-md border-primary/20 text-primary'
                    }`}
            >
                {/* Rotating Vinyl Background effect */}
                <AnimatePresence>
                    {isPlaying && (
                        <motion.div
                            initial={{ rotate: 0 }}
                            animate={{ rotate: 360 }}
                            transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                            className="absolute inset-0 opacity-20 bg-[radial-gradient(circle,transparent_20%,currentColor_80%)] border-2 border-dashed border-white/30 rounded-full"
                        />
                    )}
                </AnimatePresence>

                {isPlaying ? <Pause size={24} /> : <Music size={24} className="animate-pulse" />}
            </motion.button>

            {/* Tooltip */}
            <AnimatePresence>
                {!isPlaying && (
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 20 }}
                        className="absolute right-16 top-1/2 -translate-y-1/2 px-4 py-2 bg-white/90 backdrop-blur-sm border border-primary/10 rounded-full shadow-lg pointer-events-none whitespace-nowrap"
                    >
                        <p className="text-[10px] font-bold text-primary uppercase tracking-widest">
                            Putar Musik
                        </p>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
