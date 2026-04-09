'use client'
import { motion } from "framer-motion";

export default function Hero() {
    return (
        <section className="relative">
            {/* Background */}
            <div
                className="absolute inset-0"
                style={{
                    background: "linear-gradient(160deg, #1a0f00 0%, #2d1f00 25%, #1a1200 50%, #0d0a05 100%)",
                }}
            />
            {/* Radial glow */}
            <div
                className="absolute inset-0"
                style={{
                    background: "radial-gradient(ellipse 80% 60% at 50% 70%, rgba(180,120,0,0.10) 0%, transparent 70%)",
                }}
            />

            {/* Content */}
            <div className="relative z-10">
                {/* Main Hero */}
                <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 pt-28 pb-20">
                    <motion.h1
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7 }}
                        className="font-black leading-none"
                        style={{ fontSize: "clamp(3rem, 8vw, 7rem)" }}
                    >
                        <span className="text-yellow-400">HAJJ</span>{" "}
                        <span className="text-white">UMRAH</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.2 }}
                        className="text-gray-300 text-sm sm:text-base font-medium mt-3 tracking-widest uppercase"
                    >
                        DELUX UMRAH PACKAGES
                    </motion.p>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.3 }}
                        className="text-sm sm:text-lg font-bold mt-1 tracking-widest uppercase"
                    >
                        <span className="text-gray-300">ARTED FROM </span>
                        <span className="text-yellow-400">USD3235</span>
                    </motion.p>

                    <motion.button
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.45 }}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.97 }}
                        className="mt-8 bg-yellow-400 text-black font-bold px-8 py-3 rounded text-sm hover:bg-yellow-300 transition-colors"
                    >
                        Get Started
                    </motion.button>
                </div>

                {/* Search Bar */}
                <div className="w-full bg-white py-3 px-4 shadow-lg">
                    <div className="max-w-5xl mx-auto">
                        <div className="flex flex-wrap items-center gap-4">
                            <div className="flex items-center gap-2">
                                <svg className="w-4 h-4 text-gray-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                                <span className="text-sm text-gray-700">Flight ticket</span>
                            </div>
                            <div className="w-px h-5 bg-gray-200 hidden sm:block" />
                            <div className="flex items-center gap-2">
                                <svg className="w-4 h-4 text-gray-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                                <span className="text-sm text-gray-700">Distance</span>
                            </div>
                            <div className="w-px h-5 bg-gray-200 hidden sm:block" />
                            <div className="flex items-center gap-2">
                                <svg className="w-4 h-4 text-gray-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10" />
                                </svg>
                                <span className="text-sm text-gray-700">Packages</span>
                            </div>
                            <div className="w-px h-5 bg-gray-200 hidden sm:block" />
                            <div className="flex items-center gap-2">
                                <svg className="w-4 h-4 text-gray-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                <span className="text-sm text-gray-700">Price</span>
                            </div>
                            <button className="ml-auto bg-yellow-400 text-black p-2 rounded hover:bg-yellow-300 transition-colors">
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
