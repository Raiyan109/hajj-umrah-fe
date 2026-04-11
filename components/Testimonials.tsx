'use client'
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";

const testimonials = [
    {
        name: "Mohammed Hamid",
        rating: 5,
        text: "Working with this company has been a breath of fresh air. In preparing solutions so that they are able to provide, care and comfort in anything.",
    },
    {
        name: "Fatima Al-Rashid",
        rating: 5,
        text: "The service was impeccable from start to finish. Our Umrah journey was spiritually enriching and logistically seamless. Highly recommend!",
    },
    {
        name: "Ibrahim Hassan",
        rating: 5,
        text: "Outstanding experience with Fingah Travel. The guides were knowledgeable and the accommodations were top-notch. Will definitely use them again.",
    },
];

export default function Testimonials() {
    const [current, setCurrent] = useState(0);

    return (
        <section
            className="py-20 relative overflow-hidden"
            style={{
                background: "linear-gradient(160deg, #1a0f00 0%, #2d1f00 25%, #1a1200 50%, #0d0a05 100%)",
            }}
        >
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-2xl md:text-5xl font-bold text-white mb-8"
                >
                    What's our Client say
                </motion.h2>

                <div className="flex flex-col md:flex-row gap-8 items-center">
                    {/* Testimonial Card */}
                    <div className="flex-1">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={current}
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                transition={{ duration: 0.4 }}
                                className="bg-white rounded-xl p-6 shadow-xl"
                            >
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="w-10 h-10 rounded-full bg-yellow-400 flex items-center justify-center text-black font-bold text-lg">
                                        {testimonials[current].name[0]}
                                    </div>
                                    <div>
                                        <p className="font-bold text-gray-900 text-lg">{testimonials[current].name}</p>
                                        <div className="flex gap-0.5 mt-0.5">
                                            {Array(testimonials[current].rating).fill(0).map((_, s) => (
                                                <svg key={s} className="w-3 h-3 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                                </svg>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                                <p className="text-gray-600 text-lg leading-relaxed">
                                    {testimonials[current].text}
                                </p>
                            </motion.div>
                        </AnimatePresence>

                        {/* Navigation dots */}
                        <div className="flex gap-2 mt-5">
                            {testimonials.map((_, i) => (
                                <button
                                    key={i}
                                    onClick={() => setCurrent(i)}
                                    className={`transition-all duration-200 rounded-full ${i === current ? "bg-yellow-400 w-6 h-3" : "bg-white/30 w-3 h-3"
                                        }`}
                                />
                            ))}
                        </div>
                    </div>

                    {/* Person image placeholder */}
                    <div className="hidden md:flex w-64 h-64 rounded-xl overflow-hidden relative flex-shrink-0 items-center justify-center"
                        style={{ background: "linear-gradient(135deg, #2d1a0a 0%, #1a0f00 100%)" }}
                    >
                        {/* <div className="text-center">
                            <div className="text-6xl mb-3">🤲</div>
                            <p className="text-yellow-400/60 text-xs">Pilgrim Stories</p>
                        </div> */}
                        <img src="/pilgrims.png" alt="" className="w-full h-full object-cover" />
                    </div>
                </div>
            </div>
        </section>
    );
}
