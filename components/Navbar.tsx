'use client'
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Search, User, ShoppingCart, Menu, X } from "lucide-react";

const navLinks = ["Home", "Hajj Packages", "Umrah Packages", "Haramain Umrah", "Contact"];

export default function Navbar() {
    const [mobileOpen, setMobileOpen] = useState(false);

    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-sm">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-14">
                    {/* Logo */}
                    <div className="flex items-center gap-2">
                        <div className="w-7 h-7 rounded-full bg-yellow-400 flex items-center justify-center">
                            <span className="text-black text-xs font-bold">F</span>
                        </div>
                        <span className="text-white font-semibold text-sm">Fingah_Travel</span>
                    </div>

                    {/* Desktop Nav */}
                    <nav className="hidden md:flex items-center gap-6">
                        {navLinks.map((link, i) => (
                            <a
                                key={link}
                                href="#"
                                className={`text-sm font-medium transition-colors ${i === 0 ? "text-yellow-400" : "text-gray-300 hover:text-white"
                                    }`}
                            >
                                {link}
                            </a>
                        ))}
                    </nav>

                    {/* Icons */}
                    <div className="hidden md:flex items-center gap-3">
                        <button className="text-gray-300 hover:text-white">
                            <Search size={18} />
                        </button>
                        <button className="text-gray-300 hover:text-white">
                            <User size={18} />
                        </button>
                        <button className="bg-yellow-400 text-black px-4 py-1.5 rounded text-sm font-semibold hover:bg-yellow-300 transition-colors">
                            USD
                        </button>
                    </div>

                    {/* Mobile hamburger */}
                    <button
                        className="md:hidden text-white"
                        onClick={() => setMobileOpen(!mobileOpen)}
                    >
                        {mobileOpen ? <X size={22} /> : <Menu size={22} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {mobileOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="md:hidden bg-black/95 overflow-hidden"
                    >
                        <div className="px-4 py-4 flex flex-col gap-3">
                            {navLinks.map((link, i) => (
                                <a
                                    key={link}
                                    href="#"
                                    className={`text-sm font-medium py-2 border-b border-gray-800 ${i === 0 ? "text-yellow-400" : "text-gray-300"
                                        }`}
                                >
                                    {link}
                                </a>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}
