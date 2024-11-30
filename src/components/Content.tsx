import { motion } from 'framer-motion';
import { ArrowRight, ChevronDown } from 'lucide-react';
import { useLocation } from 'wouter';
import { Typewriter } from 'react-simple-typewriter';

export function Content() {
  const [, setLocation] = useLocation();

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const scrollToContent = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth',
    });
  };

  return (
    <div className="absolute inset-0 flex flex-col items-center justify-center">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-2xl px-4 text-center text-white"
      >
        {/* Header with Gradient Text */}
        <motion.div variants={itemVariants}>
          <h2 className="text-5xl md:text-7xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-purple-500">
            <Typewriter
              words={['Software Engineer', 'Data Scientist', 'Problem Solver']}
              loop={0}
              cursor
              cursorStyle="|"
              typeSpeed={80}
              deleteSpeed={60}
              delaySpeed={2000}
            />
          </h2>
        </motion.div>

        {/* Subtext */}
        <motion.p
          variants={itemVariants}
          className="text-lg md:text-xl mb-12 leading-relaxed text-gray-300"
        >
          Crafting elegant solutions through code and creativity, bringing innovative ideas to life with modern technologies.
        </motion.p>

        {/* Buttons */}
        <motion.div
          variants={itemVariants}
          className="flex flex-wrap justify-center gap-6"
        >
          <button
            onClick={() => setLocation('/projects')}
            className="group px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full font-medium hover:scale-105 transition-transform flex items-center gap-2 shadow-lg"
          >
            View Projects
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
          <button
            onClick={() => setLocation('/contact')}
            className="group px-8 py-4 border-2 border-white text-white rounded-full font-medium hover:bg-gradient-to-r hover:from-white hover:to-gray-300 hover:text-black transition-all flex items-center gap-2 shadow-lg"
          >
            Let&apos;s Talk
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </motion.div>
      </motion.div>

      {/* Scroll to Explore Button */}
      <motion.button
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1 }}
        onClick={scrollToContent}
        className="absolute bottom-32 text-gray-400 hover:text-white flex flex-col items-center gap-2 transition-colors"
      >
        
        <span className="text-sm">Scroll to explore</span>
        <ChevronDown className="w-6 h-6 animate-bounce" />
      </motion.button>
    </div>
  );
}
