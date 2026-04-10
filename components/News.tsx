'use client'
import { motion } from "motion/react";

const newsItems = [
    {
        title: "Essential Packing Tips for Your Hajj",
        date: "Mar 2026",
        color: "#1a3a2a",
    },
    {
        title: "Personal Stories from the Sacred Journey",
        date: "Mar 2026",
        color: "#2d1a0a",
    },
    {
        title: "The Ultimate Guide to Performing Umrah",
        date: "Mar 2026",
        color: "#0a1a3a",
    },
];

export default function News() {
    return (
        <section className="bg-white py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between mb-8">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-2xl md:text-4xl font-bold text-gray-900"
                    >
                        Haramain News
                    </motion.h2>
                    <a href="#" className="text-sm text-yellow-500 font-semibold hover:text-yellow-600">
                        See More →
                    </a>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {newsItems.map((item, i) => (
                        <motion.div
                            key={item.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: i * 0.1 }}
                            className="group cursor-pointer"
                        >
                            <div
                                className="w-full h-44 rounded-xl mb-3 flex items-center justify-center relative overflow-hidden"
                                style={{ background: item.color }}
                            >
                                {/* Kaaba / mosque illustration placeholder */}
                                <div className="text-white/20 text-7xl">🕌</div>
                                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                                <div className="absolute bottom-3 right-3 bg-yellow-400 text-black text-xs font-bold px-2 py-0.5 rounded">
                                    {item.date}
                                </div>
                            </div>
                            <h3 className="text-base font-semibold text-gray-800 group-hover:text-yellow-500 transition-colors leading-snug">
                                {item.title}
                            </h3>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
