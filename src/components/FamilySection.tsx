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

                <div className="max-w-4xl mx-auto space-y-12">
                    {[
                        { title: "Mamak", list: FAMILY_LIST.mamak },
                        { title: "Etek / Apak", list: FAMILY_LIST.etek_apak },
                        { title: "Apak / Andeh", list: FAMILY_LIST.apak_andeh },
                        { title: "Kakak / Adik", list: FAMILY_LIST.kakak_adik }
                    ].map((group, index) => (
                        <motion.div
                            key={group.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="space-y-4 text-center"
                        >
                            <h3 className="text-xl font-serif text-primary italic border-b border-primary/10 pb-2 w-fit mx-auto px-4">{group.title}</h3>
                            <ul className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 justify-items-center">
                                {group.list.map((name, idx) => (
                                    <li key={idx} className="text-sm text-text-muted leading-relaxed">
                                        {name}
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </section>
    );
}
