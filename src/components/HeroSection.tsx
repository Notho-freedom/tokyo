import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Compass, Map, Camera } from "lucide-react";
import heroImage1 from "@/assets/hero-torii.jpg";
import heroImage2 from "@/assets/hero-slide-2.jpg";
import heroImage3 from "@/assets/hero-slide-3.jpg";
import heroImage4 from "@/assets/hero-slide-4.jpg";
import heroImage5 from "@/assets/hero-slide-5.jpg";

const heroSlides = [
  { image: heroImage1, title: "VISIT\nTOKYO" },
  { image: heroImage2, title: "EXPLORE\nJAPAN" },
  { image: heroImage3, title: "DISCOVER\nKYOTO" },
  { image: heroImage4, title: "ANCIENT\nTEMPLES" },
  { image: heroImage5, title: "TASTE\nJAPAN" },
];

const features = [
  {
    icon: Compass,
    title: "Пару предложений текста и еще что-нибудь",
    description: "интересненькое для читателей",
  },
  {
    icon: Map,
    title: "Пару предложений текста и еще что-нибудь",
    description: "интересненькое для читателей",
  },
  {
    icon: Camera,
    title: "Пару предложений текста и еще что-нибудь",
    description: "интересненькое для читателей",
  },
];

const slideNumbers = ["01", "02", "03", "04", "05"];

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [activeFeature, setActiveFeature] = useState(0);

  const goToSlide = useCallback((index: number) => {
    setCurrentSlide(index);
  }, []);

  // Auto-advance slides
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Background Images with Crossfade */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
          className="absolute inset-0"
        >
          <img
            src={heroSlides[currentSlide].image}
            alt={`Slide ${currentSlide + 1}`}
            className="w-full h-full object-cover"
          />
          <div 
            className="absolute inset-0"
            style={{
              background: "linear-gradient(to bottom, hsla(220, 20%, 6%, 0.3) 0%, hsla(220, 20%, 6%, 0.5) 50%, hsla(220, 20%, 6%, 0.95) 100%)"
            }}
          />
        </motion.div>
      </AnimatePresence>

      {/* Content */}
      <div className="relative z-10 min-h-screen flex flex-col justify-center px-6 md:px-12 pt-24">
        <div className="max-w-7xl mx-auto w-full">
          {/* Main Title with Animation */}
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mb-8"
            >
              <h1 className="hero-title text-foreground whitespace-pre-line">
                {heroSlides[currentSlide].title}
              </h1>
            </motion.div>
          </AnimatePresence>

          {/* Slide Indicators - Right Side */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="absolute right-6 md:right-12 top-1/2 -translate-y-1/2 flex flex-col items-end gap-3"
          >
            {slideNumbers.map((num, index) => (
              <button
                key={num}
                onClick={() => goToSlide(index)}
                className={`slide-indicator transition-all duration-300 ${
                  index === currentSlide 
                    ? "text-foreground text-lg font-semibold scale-110" 
                    : "text-foreground/40 hover:text-foreground/70"
                }`}
              >
                {num}
              </button>
            ))}
          </motion.div>

          {/* Feature Cards with Underline Navigation */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mt-16 max-w-5xl"
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.9 + index * 0.1 }}
                  className="group"
                  onMouseEnter={() => setActiveFeature(index)}
                >
                  <feature.icon className="w-6 h-6 text-foreground/60 mb-4" />
                  <p className="text-foreground/70 text-sm mb-1">{feature.title}</p>
                  <p className="text-foreground/50 text-sm mb-4">{feature.description}</p>
                  <button 
                    className="feature-btn inline-flex items-center gap-2 text-foreground/80 text-sm uppercase tracking-widest transition-all duration-300 hover:text-foreground group-hover:text-foreground"
                    onClick={() => setActiveFeature(index)}
                  >
                    ПОДРОБНЕЕ
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </button>
                </motion.div>
              ))}
            </div>
            
            {/* Shared Underline */}
            <div className="relative mt-4 h-px bg-foreground/20 max-w-5xl">
              <motion.div
                className="absolute top-0 h-px bg-foreground"
                initial={false}
                animate={{
                  left: `${(activeFeature * 100) / 3}%`,
                  width: `${100 / 3}%`,
                }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
