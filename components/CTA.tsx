'use client'
import { motion } from "framer-motion";

export default function CTA() {
    return (
        <section
            className="py-16 relative overflow-hidden"
            style={{
                background: "linear-gradient(160deg, #1a0f00 0%, #2d1f00 30%, #0d0a05 100%)",
            }}
        >
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-2xl md:text-4xl font-bold text-white mb-3"
                >
                    Are you Ready ?
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    className="text-gray-400 text-sm max-w-sm mx-auto mb-6"
                >
                    Select from amazing plan below, amazing customized or best deals 1. Customize your subscription for a purpose to.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="flex flex-wrap gap-3 justify-center"
                >
                    <button className="bg-yellow-400 text-black font-bold px-7 py-2.5 rounded text-sm hover:bg-yellow-300 transition-colors">
                        Hajj Pre Registration
                    </button>
                    <button className="border border-yellow-400 text-yellow-400 font-bold px-7 py-2.5 rounded text-sm hover:bg-yellow-400 hover:text-black transition-colors">
                        Get VIP Package
                    </button>
                </motion.div>
            </div>
        </section>
    );
}
