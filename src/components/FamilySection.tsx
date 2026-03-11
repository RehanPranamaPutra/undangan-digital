'use client';

import { motion } from 'framer-motion';
import { FAMILY_LIST } from '@/constants';

export default function FamilySection() {
    return (
        <section className="section-container relative bg-white/40">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="max-w-4xl mx-auto w-full space-y-6"
            >
                <div className="text-center space-y-4">
                    <h2 className="text-4xl md:text-5xl font-serif text-foreground italic">Turut Mengundang</h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto rounded-full" />
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                    {/* Mamak List */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="luxury-card space-y-6"
                    >
                        <h3 className="text-xl font-serif text-primary italic border-b border-primary/10 pb-2">Keluarga Ibu (Mamak)</h3>
                        <ul className="space-y-3">
                            {FAMILY_LIST.mamak.map((name, idx) => (
                                <li key={idx} className="text-sm text-text-muted leading-relaxed flex items-start gap-2">
                                    <span className="text-primary mt-1">•</span>
                                    {name}
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* Etek / Apak List */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="luxury-card space-y-6"
                    >
                        <h3 className="text-xl font-serif text-primary italic border-b border-primary/10 pb-2">Keluarga Ayah (Etek / Apak)</h3>
                        <ul className="space-y-3">
                            {FAMILY_LIST.etek_apak.map((name, idx) => (
                                <li key={idx} className="text-sm text-text-muted leading-relaxed flex items-start gap-2">
                                    <span className="text-primary mt-1">•</span>
                                    {name}
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                </div>
            </motion.div>
        </section>
    );
}
