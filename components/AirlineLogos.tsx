const airlines = [
    { name: "Conrad", style: "font-bold text-xl tracking-wider uppercase" },
    { name: "AirArabia", style: "font-bold text-xl" },
    { name: "QATAR", style: "font-bold text-xl tracking-wide uppercase", sub: "AIRWAYS" },
    { name: "Saudia", style: "font-bold text-xl italic text-red-600" },
    { name: "Sky", style: "font-bold text-2xl text-blue-500 italic" },
    { name: "KUWAIT", style: "font-bold text-sm uppercase tracking-widest text-blue-800" },
];

const AirlineLogos = () => {
    return (
        <section className="bg-white py-8 px-6">
            <div className="max-w-5xl mx-auto flex flex-wrap items-center justify-center gap-8 md:gap-14">
                {airlines.map((airline) => (
                    <div key={airline.name} className="flex flex-col items-center opacity-70 hover:opacity-100 transition-opacity cursor-pointer">
                        <span className={airline.style}>{airline.name}</span>
                        {airline.sub && <span className="text-[8px] tracking-[0.3em] uppercase">{airline.sub}</span>}
                    </div>
                ))}
            </div>
        </section>
    );
};

export default AirlineLogos;
