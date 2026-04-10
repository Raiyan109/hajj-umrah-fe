'use client'
import { Calendar, MapPin, Package, DollarSign, Search } from "lucide-react";

const SearchForm = () => {
    return (
        <div className="w-full max-w-4xl mx-auto bg-white rounded-xl lg:rounded-full shadow-2xl px-8 py-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[1fr_1fr_1fr_1fr_auto] gap-4 items-end">
                {/* Flight Date */}
                <div className="flex flex-col gap-1">
                    <label className="flex items-center gap-1.5 text-lg font-semibold text-gray-800">
                        <Calendar size={16} className="text-gray-500" />
                        Flight Date
                    </label>
                    <select className="text-sm text-gray-400 bg-transparent border-0 border-b border-gray-200 pb-1 focus:outline-none focus:border-primary cursor-pointer">
                        <option>Dec 03 - Jan 23</option>
                        <option>Jan 24 - Feb 15</option>
                        <option>Mar 01 - Mar 20</option>
                    </select>
                </div>

                {/* Distance */}
                <div className="flex flex-col gap-1">
                    <label className="flex items-center gap-1.5 text-lg font-semibold text-gray-800">
                        <MapPin size={16} className="text-gray-500" />
                        Distance
                    </label>
                    <select className="text-sm text-gray-400 bg-transparent border-0 border-b border-gray-200 pb-1 focus:outline-none focus:border-primary cursor-pointer">
                        <option>1000 km - 1200 km</option>
                        <option>500 km - 1000 km</option>
                        <option>1200 km - 2000 km</option>
                    </select>
                </div>

                {/* Packages */}
                <div className="flex flex-col gap-1">
                    <label className="flex items-center gap-1.5 text-lg font-semibold text-gray-800">
                        <Package size={16} className="text-gray-500" />
                        Packages
                    </label>
                    <select className="text-sm text-gray-400 bg-transparent border-0 border-b border-gray-200 pb-1 focus:outline-none focus:border-primary cursor-pointer">
                        <option>Finance</option>
                        <option>Premium</option>
                        <option>Economy</option>
                    </select>
                </div>

                {/* Price */}
                <div className="flex flex-col gap-1">
                    <label className="flex items-center gap-1.5 text-lg font-semibold text-gray-800">
                        <DollarSign size={16} className="text-gray-500" />
                        Price
                    </label>
                    <select className="text-sm text-gray-400 bg-transparent border-0 border-b border-gray-200 pb-1 focus:outline-none focus:border-primary cursor-pointer">
                        <option>$2400 - $6000</option>
                        <option>$1000 - $2400</option>
                        <option>$6000 - $10000</option>
                    </select>
                </div>

                {/* Search Button */}
                <button className="w-14 h-14 rounded-full bg-yellow-400 flex items-center justify-center hover:bg-yellow-400 transition-colors shrink-0 self-center lg:self-end">
                    <Search size={20} className="text-primary-foreground" />
                </button>
            </div>
        </div>
    );
};

export default SearchForm;
