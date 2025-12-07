import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Play } from "lucide-react";
import inspireBg from "@/assets/inspire-bg.jpg";
import videoThumb1 from "@/assets/video-thumb-1.jpg";
import videoThumb2 from "@/assets/video-thumb-2.jpg";

const InspireSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="relative min-h-screen overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={inspireBg}
          alt="Mount Fuji at night"
          className="w-full h-full object-cover"
        />
        <div 
          className="absolute inset-0"
          style={{
            background: "linear-gradient(to bottom, hsla(220, 30%, 8%, 0.7) 0%, hsla(220, 30%, 8%, 0.85) 100%)"
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 py-24 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          {/* Main Title */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="mb-12"
          >
            <h2 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold text-foreground leading-none">
              TRAVEL AND
              <br />
              INSPIRE YOUR
              <br />
              LIFE
            </h2>
          </motion.div>

          {/* Video Button */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex items-center gap-4 mb-16"
          >
            <button className="play-button">
              <Play className="w-6 h-6 text-foreground ml-1" fill="currentColor" />
            </button>
            <span className="text-foreground/70 text-sm">Смотреть видео</span>
          </motion.div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-foreground/60 text-sm max-w-md mb-16"
          >
            Здесь будет текст-описание для видео,
            которое вам предоставлено для
            запуска и которое очень интересное.
          </motion.p>

          {/* Video Thumbnails */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex gap-4 md:gap-6 justify-end"
          >
            <div className="relative w-48 md:w-64 aspect-video rounded-lg overflow-hidden group cursor-pointer">
              <img
                src={videoThumb1}
                alt="Video thumbnail"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-background/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <Play className="w-8 h-8 text-foreground" fill="currentColor" />
              </div>
            </div>
            <div className="relative w-48 md:w-64 aspect-video rounded-lg overflow-hidden group cursor-pointer">
              <img
                src={videoThumb2}
                alt="Video thumbnail"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-background/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <Play className="w-8 h-8 text-foreground" fill="currentColor" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default InspireSection;
