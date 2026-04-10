import heroBg from "../public/hero-bg.jpg";
import SearchForm from "./SearchForm";

const HeroSection = () => {
    return (
        <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0">
                <img
                    src={heroBg.src}
                    alt="Masjid al-Haram Mecca"
                    className="w-full h-full object-cover"
                    width={1920}
                    height={1080}
                />
                <div className="absolute inset-0 bg-black/40" />
            </div>

            {/* Hero Content */}
            <div className="relative z-10 text-center px-6 mt-16">
                <h1 className="text-5xl md:text-7xl lg:text-8xl font-black uppercase tracking-wider">
                    <span className="text-yellow-400">HAJJ</span>{" "}
                    <span className="text-white">UMRAH</span>
                </h1>
                <p className="mt-4 text-white text-sm md:text-lg font-medium uppercase tracking-[0.2em] max-w-lg mx-auto leading-relaxed">
                    DELUX UMRAH PACKAGES STARTED FROM
                    <span className="text-primary font-bold"> BDT 3235</span>
                </p>
                <button className="mt-8 px-8 py-3 bg-primary text-primary-foreground font-semibold text-sm rounded-full hover:bg-yellow-400 transition-colors">
                    Get Started
                </button>
            </div>

            {/* Search Form overlapping bottom */}
            <div className="relative z-10 mt-16 mb-[-40px] w-full px-4">
                <SearchForm />
            </div>
        </section>
    );
};

export default HeroSection;
