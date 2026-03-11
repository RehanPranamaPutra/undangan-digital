'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, User, Users, MessageSquare, Check, Clock } from 'lucide-react';
import { supabase } from '@/lib/supabase';

interface RSVPData {
    id: string;
    name: string;
    attendance: string;
    message: string;
    created_at: string;
}

interface RSVPFormProps {
    guestName?: string;
}

export default function RSVPForm({ guestName = '' }: RSVPFormProps) {
    const [status, setStatus] = useState<'idle' | 'loading' | 'success'>('idle');
    const [formData, setFormData] = useState({
        name: guestName,
        attendance: 'hadir',
        message: ''
    });
    const [guestbook, setGuestbook] = useState<RSVPData[]>([]);

    useEffect(() => {
        // Anti-spam: check if already submitted
        const hasSubmitted = localStorage.getItem(`wedding_rsvp_submitted_${guestName.replace(/\s+/g, '_')}`);
        if (hasSubmitted) {
            setStatus('success');
        }

        fetchMessages();
    }, [guestName]);

    // Update form if guestName changes (though it shouldn't in this context)
    useEffect(() => {
        setFormData(prev => ({ ...prev, name: guestName }));
    }, [guestName]);

    const fetchMessages = async () => {
        const { data, error } = await supabase
            .from('rsvps')
            .select('*')
            .order('created_at', { ascending: false })
            .limit(20);

        if (!error && data) {
            setGuestbook(data);
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('loading');

        const { error } = await supabase
            .from('rsvps')
            .insert([
                {
                    name: formData.name || guestName || 'Tamu Undangan',
                    attendance: formData.attendance,
                    message: formData.message
                }
            ]);

        if (error) {
            console.error('Error submitting RSVP:', error);
            alert('Maaf, gagal mengirim ucapan. Silakan coba lagi.');
            setStatus('idle');
        } else {
            // Save submission state to prevent re-submission
            localStorage.setItem(`wedding_rsvp_submitted_${guestName.replace(/\s+/g, '_')}`, 'true');
            setStatus('success');
            fetchMessages();
            setFormData({ name: guestName, attendance: 'hadir', message: '' });
        }
    };

    return (
        <section className="section-container bg-[#f9f7f0]/50 space-y-6 overflow-hidden">
            {/* Elegant Heading */}
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="text-center z-10 space-y-4"
            >
                <h2 className="text-4xl md:text-5xl font-serif text-foreground italic">Kirim Ucapan & RSVP</h2>
                <div className="w-24 h-1 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto rounded-full" />
                <p className="text-text-muted text-sm tracking-widest uppercase italic max-w-md mx-auto">
                    Berikan doa restu dan konfirmasi kehadiran Anda
                </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto w-full z-10 px-6 relative">
                {/* RSVP Form */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1 }}
                    className="luxury-card h-fit space-y-8 sticky top-10"
                >
                    <AnimatePresence mode="wait">
                        {status === 'success' ? (
                            <motion.div
                                key="success"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                className="py-12 text-center space-y-4"
                            >
                                <div className="w-24 h-24 bg-green-50 text-green-600 rounded-full flex items-center justify-center mx-auto shadow-inner">
                                    <Check size={48} />
                                </div>
                                <h3 className="text-3xl font-serif text-foreground italic">Terima Kasih!</h3>
                                <p className="text-text-muted">Ucapan dan konfirmasi kehadiran Anda telah kami terima dengan penuh syukur.</p>
                                <button
                                    onClick={() => setStatus('idle')}
                                    className="text-primary font-bold hover:text-accent tracking-[0.2em] uppercase text-xs transition-colors"
                                >
                                    Kirim ucapan lagi
                                </button>
                            </motion.div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="space-y-2 group">
                                    <label className="flex items-center gap-3 text-xs font-bold text-text-muted uppercase tracking-widest transition-colors group-focus-within:text-primary">
                                        <User size={14} /> Nama Lengkap
                                    </label>
                                    <input
                                        readOnly
                                        type="text"
                                        value={formData.name}
                                        placeholder="Contoh: Bpk. Rehan & Keluarga"
                                        className="w-full px-5 py-4 rounded-2xl border border-primary/10 bg-primary/5 text-primary/70 cursor-not-allowed outline-none transition-all shadow-sm"
                                    />
                                </div>

                                <div className="space-y-2 group">
                                    <label className="flex items-center gap-3 text-xs font-bold text-text-muted uppercase tracking-widest transition-colors group-focus-within:text-primary">
                                        <Users size={14} /> Konfirmasi Kehadiran
                                    </label>
                                    <div className="relative">
                                        <select
                                            value={formData.attendance}
                                            onChange={(e) => setFormData({ ...formData, attendance: e.target.value })}
                                            className="w-full px-5 py-4 rounded-2xl border border-primary/10 bg-white/50 focus:ring-4 focus:ring-primary/5 focus:bg-white outline-none appearance-none cursor-pointer shadow-sm text-foreground font-medium"
                                        >
                                            <option value="hadir">✅ Saya Akan Hadir</option>
                                            <option value="tidak_hadir">❌ Maaf, Saya Tidak Bisa Hadir</option>
                                            <option value="masih_ragu">🤔 Masih Ragu</option>
                                        </select>
                                        <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none text-primary/40">
                                            ▼
                                        </div>
                                    </div>
                                </div>

                                <div className="space-y-2 group">
                                    <label className="flex items-center gap-3 text-xs font-bold text-text-muted uppercase tracking-widest transition-colors group-focus-within:text-primary">
                                        <MessageSquare size={14} /> Ucapan atau Doa
                                    </label>
                                    <textarea
                                        required
                                        rows={4}
                                        value={formData.message}
                                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                        placeholder="Berikan ucapan terbaik Anda untuk mempelai..."
                                        className="w-full px-5 py-4 rounded-2xl border border-primary/10 bg-white/50 focus:ring-4 focus:ring-primary/5 focus:bg-white outline-none transition-all resize-none shadow-sm"
                                    />
                                </div>

                                <button
                                    disabled={status === 'loading'}
                                    type="submit"
                                    className="btn-premium w-full flex items-center justify-center gap-3 shadow-xl"
                                >
                                    {status === 'loading' ? (
                                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                                    ) : (
                                        <><Send size={18} /> Kirim Ucapan</>
                                    )}
                                </button>
                            </form>
                        )}
                    </AnimatePresence>
                </motion.div>

                {/* Guestbook Section */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1 }}
                    className="space-y-8"
                >
                    <div className="flex items-center justify-between border-b border-primary/10 pb-4">
                        <h3 className="text-2xl font-serif text-foreground italic flex items-center gap-3">
                            <MessageSquare className="text-primary" /> Pesan & Doa
                        </h3>
                        <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest">
                            {guestbook.length} Respon
                        </span>
                    </div>

                    <div className="space-y-4 max-h-[450px] overflow-y-auto pr-2 custom-scrollbar">
                        <AnimatePresence mode="popLayout">
                            {guestbook.length === 0 ? (
                                <p className="text-text-muted italic text-center py-20 grayscale opacity-50">Belum ada ucapan. Jadilah yang pertama!</p>
                            ) : (
                                guestbook.map((msg, idx) => (
                                    <motion.div
                                        key={msg.id}
                                        layout
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: idx * 0.05 }}
                                        className="bg-white/40 p-5 rounded-2xl border border-primary/10 shadow-sm space-y-2 relative group"
                                    >
                                        <div className="flex justify-between items-start">
                                            <div className="space-y-1">
                                                <p className="font-bold text-primary font-serif uppercase tracking-widest text-xs">{msg.name}</p>
                                                <div className="flex items-center gap-2 text-[9px] text-text-muted/60 font-bold uppercase tracking-widest">
                                                    <Clock size={10} />
                                                    {new Date(msg.created_at).toLocaleDateString('id-ID', {
                                                        day: 'numeric',
                                                        month: 'short'
                                                    })}
                                                </div>
                                            </div>
                                            <span className={`text-[8px] px-2 py-0.5 rounded-full font-bold uppercase tracking-widest ${msg.attendance === 'hadir' ? 'bg-green-100/50 text-green-700' : 'bg-red-50/50 text-red-600'}`}>
                                                {msg.attendance === 'hadir' ? 'Hadir' : 'Absen'}
                                            </span>
                                        </div>
                                        <p className="text-text-muted text-sm leading-relaxed italic">"{msg.message}"</p>
                                    </motion.div>
                                ))
                            )}
                        </AnimatePresence>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

