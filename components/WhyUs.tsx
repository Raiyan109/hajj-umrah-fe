'use client'

import { motion } from "motion/react";

const reasons = [
    {
        icon: "🏅",
        title: "Competent",
        desc: "The Guide are infinite in knowledge, was charged to providing solutions so that they are able to provide care and comfort in anything.",
        dark: false,
    },
    {
        icon: "💰",
        title: "Affordable Rates",
        desc: "The Guide are infinite in knowledge, was charged to providing solutions so that they are able to provide care and comfort in anything.",
        dark: true,
    },
    {
        icon: "📱",
        title: "Responsive",
        desc: "The Guide are infinite in knowledge, was charged to providing solutions so that they are able to provide care and comfort in anything.",
        dark: false,
    },
    {
        icon: "🛡️",
        title: "Care & Safety",
        desc: "The Guide are infinite in knowledge, was charged to providing solutions so that they are able to provide care and comfort in anything.",
        dark: true,
    },
];

export default function WhyUs() {
    return (
        <section className="bg-white py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-10"
                >
                    <h2 className="text-2xl md:text-4xl font-bold text-gray-900">Why Us ?</h2>
                </motion.div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-3xl mx-auto">
                    {reasons.map((r, i) => (
                        <motion.div
                            key={r.title}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: i * 0.1 }}
                            className="group rounded-xl p-6 hover:bg-gray-900 transition-colors duration-300 hover:cursor-pointer"
                        >
                            <div className="w-10 h-10 rounded-full bg-yellow-400 flex items-center justify-center text-xl mb-3">
                                {r.icon}
                            </div>

                            <h3 className="font-bold text-base mb-2 text-gray-900 group-hover:text-white transition-colors">
                                {r.title}
                            </h3>

                            <p className="text-xs leading-relaxed text-gray-500 group-hover:text-gray-400 transition-colors">
                                {r.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
