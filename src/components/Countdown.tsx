'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { COUNTDOWN_TARGET } from '@/constants';

export default function Countdown() {
    const targetDate = new Date(COUNTDOWN_TARGET);
    const [timeLeft, setTimeLeft] = useState({
        days: 0, hours: 0, minutes: 0, seconds: 0
    });

    useEffect(() => {
        const timer = setInterval(() => {
            const now = new Date();
            const difference = targetDate.getTime() - now.getTime();

            const d = Math.floor(difference / (1000 * 60 * 60 * 24));
            const h = Math.floor((difference / (1000 * 60 * 60)) % 24);
            const m = Math.floor((difference / 1000 / 60) % 60);
            const s = Math.floor((difference / 1000) % 60);

            setTimeLeft({ days: d, hours: h, minutes: m, seconds: s });

            if (difference < 0) {
                clearInterval(timer);
                setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
            }
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    const TimeUnit = ({ value, label, delay }: { value: number, label: string, delay: number }) => (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay, duration: 0.8 }}
            className="flex flex-col items-center p-4 md:p-6 luxury-card min-w-[80px] md:min-w-[120px] aspect-square justify-center group hover:scale-105 transition-transform duration-500"
        >
            <span className="text-3xl md:text-5xl font-serif text-primary group-hover:text-accent transition-colors">
                {String(value).padStart(2, '0')}
            </span>
            <span className="text-[10px] md:text-xs uppercase tracking-[0.2em] text-text-muted mt-2 font-semibold">
                {label}
            </span>
        </motion.div>
    );

    return (
        <section className="section-container relative bg-white/20">
            {/* Elegant Heading */}
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="text-center space-y-8 z-10"
            >
                <div className="space-y-4">
                    <h2 className="text-4xl md:text-5xl font-serif text-foreground italic">Menuju Hari Bahagia</h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto rounded-full" />
                </div>

                <div className="flex flex-wrap justify-center gap-4 md:gap-8">
                    <TimeUnit value={timeLeft.days} label="Hari" delay={0.1} />
                    <TimeUnit value={timeLeft.hours} label="Jam" delay={0.2} />
                    <TimeUnit value={timeLeft.minutes} label="Menit" delay={0.3} />
                    <TimeUnit value={timeLeft.seconds} label="Detik" delay={0.4} />
                </div>
            </motion.div>
        </section>
    );
}
