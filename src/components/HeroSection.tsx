import { motion } from "framer-motion";
import { ArrowRight, Compass, Map, Camera } from "lucide-react";
import heroImage from "@/assets/hero-torii.jpg";

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
  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Torii gate at sunset"
          className="w-full h-full object-cover"
        />
        <div 
          className="absolute inset-0"
          style={{
            background: "linear-gradient(to bottom, hsla(220, 20%, 6%, 0.3) 0%, hsla(220, 20%, 6%, 0.5) 50%, hsla(220, 20%, 6%, 0.95) 100%)"
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 min-h-screen flex flex-col justify-center px-6 md:px-12 pt-24">
        <div className="max-w-7xl mx-auto w-full">
          {/* Main Title */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="mb-8"
          >
            <h1 className="hero-title text-foreground">
              VISIT
              <br />
              TOKYO
            </h1>
          </motion.div>

          {/* Slide Indicators - Right Side */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="absolute right-6 md:right-12 top-1/2 -translate-y-1/2 flex flex-col items-end gap-3"
          >
            {slideNumbers.map((num, index) => (
              <span
                key={num}
                className={`slide-indicator ${index === 2 ? "active" : ""}`}
              >
                {num}
              </span>
            ))}
          </motion.div>

          {/* Feature Cards */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 max-w-5xl"
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.9 + index * 0.1 }}
                className="group"
              >
                <feature.icon className="w-6 h-6 text-foreground/60 mb-4" />
                <p className="text-foreground/70 text-sm mb-1">{feature.title}</p>
                <p className="text-foreground/50 text-sm mb-4">{feature.description}</p>
                <button className="btn-outline-hero group-hover:border-primary group-hover:text-primary">
                  ПОДРОБНЕЕ
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </button>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
