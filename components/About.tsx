'use client'
import { motion } from "motion/react";

const features = [
    { icon: "🏨", label: "Luxury hotel" },
    { icon: "✈️", label: "VIP Plane ait" },
    { icon: "🛂", label: "Easy Visa" },
    { icon: "🥗", label: "Fresh Food" },
    { icon: "🕌", label: "Assist Harah" },
    { icon: "🚗", label: "Air condition car" },
    { icon: "🗺️", label: "Roadmap Guide" },
    { icon: "⏰", label: "24/7 Service" },
];

export default function About() {
    return (
        <section className="bg-white py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col lg:flex-row gap-12 items-center">
                    {/* Left - Image collage */}
                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                        className="w-full lg:w-2/5 flex-shrink-0"
                    >
                        <div className="relative">
                            {/* Main card with "MADINAH" label */}
                            <div className="relative bg-gray-800 rounded-xl overflow-hidden shadow-xl"
                                style={{ height: 340 }}>
                                {/* Background gradient representing Madinah mosque */}
                                {/* <div
                                    className="absolute inset-0"
                                    style={{
                                        background: "linear-gradient(135deg, #1a3a2a 0%, #0d2418 50%, #162d1e 100%)",
                                    }}
                                /> */}
                                {/* Mosque silhouette suggestion */}
                                {/* <div className="absolute bottom-0 left-0 right-0 h-40 opacity-30"
                                    style={{
                                        background: "linear-gradient(to top, #0a1f12 0%, transparent 100%)",
                                    }}
                                /> */}

                                <img
                                    src="/madina.png"
                                    alt=""
                                    width={1920}
                                    height={1080}
                                    className="w-full h-full object-cover"
                                />

                                {/* MADINAH badge */}
                                <div className="absolute top-4 left-4 bg-yellow-400 text-black font-bold text-xs px-3 py-1.5 rounded">
                                    MADINAH
                                </div>
                                <div className="absolute top-10 left-4 text-white font-semibold text-sm mt-1">
                                    40 PRAYERS ECO HAJJ
                                </div>

                                {/* Photo grid overlay at bottom */}
                                {/* <div className="absolute bottom-4 left-4 right-4 grid grid-cols-3 gap-1">
                                    {[1, 2, 3].map((n) => (
                                        <div key={n} className="h-16 rounded bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center">
                                            <div className="w-8 h-8 rounded-full bg-white/20" />
                                        </div>
                                    ))}
                                </div> */}
                            </div>

                            {/* Small floating card */}
                            <div className="absolute -bottom-4 -right-4 bg-white rounded-xl shadow-xl p-3 w-32">
                                <div className="flex items-center gap-1 mb-1">
                                    {[1, 2, 3, 4, 5].map((s) => (
                                        <svg key={s} className="w-3 h-3 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                        </svg>
                                    ))}
                                </div>
                                <p className="text-xs text-gray-600">5.0 Rating</p>
                                <p className="text-xs font-semibold text-gray-800">Trusted Agency</p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right - Text content */}
                    <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                        className="w-full lg:w-3/5"
                    >
                        {/* Arabic calligraphy decoration */}
                        <div className=" text-lg mb-2" style={{ fontFamily: "'Tajawal', sans-serif" }}>
                            بسم الله الرحمن الرحيم
                        </div>

                        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3 leading-tight">
                            We are award winning<br />
                            <span className="text-gray-800">Hajj & Umrah Agency</span>
                        </h2>

                        <p className="text-gray-500 text-sm leading-relaxed mb-6 max-w-md">
                            Since we have services available in knowledgeable, was charged to provide
                            care and comfort in anything. The Guide are infinite in knowledge, was charged to
                            providing solutions so that they are able to provide care and comfort in anything.
                        </p>

                        <div className="grid grid-cols-2 gap-x-8 gap-y-3">
                            {features.map((feature, i) => (
                                <motion.div
                                    key={feature.label}
                                    initial={{ opacity: 0, y: 10 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.3, delay: i * 0.05 }}
                                    className="flex items-center gap-2"
                                >
                                    <div className="w-7 h-7 rounded-full bg-yellow-50 border border-yellow-200 flex items-center justify-center text-sm flex-shrink-0">
                                        {feature.icon}
                                    </div>
                                    <span className="text-sm text-gray-700 font-medium">{feature.label}</span>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
