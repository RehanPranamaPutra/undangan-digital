'use client';

import { useState, useRef, useEffect } from 'react';
import { Music, Pause } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function AudioPlayer() {
    const [isPlaying, setIsPlaying] = useState(true);
    const audioRef = useRef<HTMLAudioElement | null>(null);

    useEffect(() => {
        const audio = new Audio('/music/wedding-music.mp3');
        audio.loop = true;
        audioRef.current = audio;

        // Autoplay when mounted (triggered by user interaction in OpeningCover)
        audio.play().catch(error => {
            console.log("Autoplay prevented:", error);
            setIsPlaying(false);
        });

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

        </div>
    );
}
