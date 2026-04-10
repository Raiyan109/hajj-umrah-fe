'use client'

import { motion } from "motion/react";

const packages = [
    {
        label: "Economy Package",
        tag: "Save 40%",
        price: "$480",
        highlight: false,
        items: [
            "Jan 15 - Jan 25 (10)",
            "Document Guide",
            "5 Stars Hotel",
            "Visa Included",
        ],
    },
    {
        label: "Standard Package",
        tag: "Save 60%",
        price: "$890",
        highlight: true,
        items: [
            "Jan 14 - Jan 25 (5)",
            "5 Stars Hotel",
            "Local Meals",
            "Visa Included",
        ],
    },
    {
        label: "Luxury Package",
        tag: "Save 55%",
        price: "$1,490",
        highlight: false,
        items: [
            "5 Star Hotel",
            "Document Desk",
            "5 Star Meals",
            "Visa Included",
        ],
    },
];

export default function Packages() {
    return (
        <section className="bg-gray-50 py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-3"
                >
                    <h2 className="text-2xl md:text-4xl font-bold text-gray-900">Choose Your Package</h2>
                    <p className="text-gray-500 text-sm mt-2 max-w-md mx-auto">
                        Select from amazing plan below, amazing, customized or best deals 1.
                        Customize your subscription for a purpose to.
                    </p>
                </motion.div>

                <div className="flex flex-wrap justify-center gap-6 mt-10">
                    {packages.map((pkg, i) => (
                        <motion.div
                            key={pkg.label}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: i * 0.1 }}
                            className={`relative rounded-xl p-6 w-full sm:w-72 shadow-md ${pkg.highlight
                                ? "bg-yellow-400 text-black"
                                : "bg-white text-gray-800"
                                }`}
                        >
                            {/* Tag */}
                            <div
                                className={`absolute top-4 right-4 text-xs font-semibold px-2 py-0.5 rounded ${pkg.highlight
                                    ? "bg-black text-yellow-400"
                                    : "bg-yellow-400 text-black"
                                    }`}
                            >
                                {pkg.tag}
                            </div>

                            <p className={`text-sm font-semibold mb-1 ${pkg.highlight ? "text-black/70" : "text-gray-500"}`}>
                                {pkg.label}
                            </p>
                            <h3 className="text-3xl font-black mb-4">{pkg.price}</h3>

                            <p className={`text-xs font-semibold mb-3 ${pkg.highlight ? "text-black/60" : "text-gray-500"}`}>
                                What's included
                            </p>

                            <ul className="space-y-2 mb-6">
                                {pkg.items.map((item) => (
                                    <li key={item} className="flex items-center gap-2 text-sm">
                                        <svg
                                            className={`w-4 h-4 flex-shrink-0 ${pkg.highlight ? "text-black" : "text-yellow-500"}`}
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2.5}
                                                d="M5 13l4 4L19 7"
                                            />
                                        </svg>
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>

                            <motion.button
                                whileHover={{ scale: 1.04 }}
                                whileTap={{ scale: 0.97 }}
                                className={`w-full py-2.5 mt-4 rounded-full text-sm font-bold transition-colors ${pkg.highlight
                                    ? "bg-black text-white hover:bg-gray-900"
                                    : "bg-yellow-400 text-black hover:bg-yellow-300"
                                    }`}
                            >
                                Get started
                            </motion.button>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
