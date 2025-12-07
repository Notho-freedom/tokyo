import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import tour1 from "@/assets/tour-1.jpg";
import tour2 from "@/assets/tour-2.jpg";
import tour3 from "@/assets/tour-3.jpg";
import tour4 from "@/assets/tour-4.jpg";

const tours = [
  { id: 1, image: tour1, number: "№1" },
  { id: 2, image: tour2, number: "№2" },
  { id: 3, image: tour3, number: "№3" },
  { id: 4, image: tour4, number: "№4" },
];

const ToursSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-24 px-6 md:px-12 bg-background">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-muted-foreground text-sm uppercase tracking-widest mb-4">
            и получите незабываемые эмоции
          </p>
          <h2 className="section-title text-foreground">ПОПУЛЯРНЫЕ ТУРЫ</h2>
        </motion.div>

        {/* Tours Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {tours.map((tour, index) => (
            <motion.div
              key={tour.id}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="card-tour aspect-[3/4] rounded-lg"
            >
              <img
                src={tour.image}
                alt={`Tour ${tour.number}`}
                className="card-tour-image rounded-lg"
              />
              <div className="card-tour-overlay rounded-lg" />
              <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6">
                <h3 className="font-display text-lg md:text-xl font-semibold text-foreground mb-1">
                  ТУР {tour.number}
                </h3>
                <p className="text-foreground/60 text-xs md:text-sm">
                  и получите незабываемые
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ToursSection;
