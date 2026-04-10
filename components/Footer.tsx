'use client'
import { motion } from "framer-motion";

const footerLinks = {
    "What We Offer": ["Hajj Package", "Umrah Package", "Season Offer", "Private Tour"],
    "Contact Us": ["Chittagong, Bangladesh", "Phone +88 01811798126"],
};

export default function Footer() {
    return (
        <footer className="bg-gray-950 text-gray-300 pt-12 pb-6">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
                    {/* Brand */}
                    <div>
                        <div className="flex items-center gap-2 mb-3">
                            <div className="w-8 h-8 rounded-full bg-yellow-400 flex items-center justify-center">
                                <span className="text-black font-bold text-sm">F</span>
                            </div>
                            <span className="text-white font-semibold">Fingah_Travel</span>
                        </div>
                        <p className="text-xs text-gray-500 leading-relaxed mb-4">
                            Providing Affordable Religious Solutions to Unique Destinations and Improve Spiritual Experiences.
                        </p>
                        <div className="flex gap-3">
                            {["f", "t", "in", "y"].map((s) => (
                                <a
                                    key={s}
                                    href="#"
                                    className="w-7 h-7 rounded-full bg-gray-800 hover:bg-yellow-400 hover:text-black text-gray-400 flex items-center justify-center text-xs font-bold transition-colors"
                                >
                                    {s}
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Links */}
                    {Object.entries(footerLinks).map(([heading, links]) => (
                        <div key={heading}>
                            <h4 className="text-white font-semibold text-sm mb-3">{heading}</h4>
                            <ul className="space-y-2">
                                {links.map((link) => (
                                    <li key={link}>
                                        <a href="#" className="text-gray-500 text-xs hover:text-yellow-400 transition-colors">
                                            {link}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}

                    {/* Gallery */}
                    <div>
                        <h4 className="text-white font-semibold text-sm mb-3">Gallery</h4>
                        <div className="grid grid-cols-3 gap-1.5">
                            {[1, 2, 3, 4, 5, 6].map((n) => (
                                <div
                                    key={n}
                                    className="w-full aspect-square rounded bg-gray-800 flex items-center justify-center text-gray-600 text-lg"
                                >
                                    🕌
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Bottom bar */}
                <div className="border-t border-gray-800 pt-4 flex flex-col sm:flex-row items-center justify-between gap-2">
                    <p className="text-gray-600 text-xs">© Copyright Fingah travel all right reserved</p>
                    <div className="flex items-center gap-4">
                        <span className="text-gray-600 text-xs">we accept the following payment methods</span>
                        <div className="flex gap-2">
                            {["VISA", "MC", "PayPal"].map((p) => (
                                <span key={p} className="bg-gray-800 text-gray-400 text-xs px-2 py-0.5 rounded font-semibold">
                                    {p}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
