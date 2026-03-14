import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { NavLink } from 'react-router-dom';


export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-32 pb-10">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute top-[-5%] left-[-5%] w-[30rem] h-[30rem] bg-primary-500/5 rounded-full blur-[100px]" />
        <div className="absolute bottom-[-5%] right-[-5%] w-[25rem] h-[25rem] bg-accent/5 rounded-full blur-[80px]" />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.1] mix-blend-overlay pointer-events-none" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full text-center flex-grow flex flex-col justify-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center"
        >
          {/* Growth Badge */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center space-x-2 bg-slate-100 dark:bg-slate-800/50 px-4 py-1.5 rounded-full border border-slate-200 dark:border-slate-700/50 mb-8"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-500 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary-500"></span>
            </span>
            <span className="text-xs font-bold text-slate-600 dark:text-slate-400 tracking-wider uppercase">
              Accelerate your growth
            </span>
          </motion.div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-[1.1] tracking-tight text-slate-900 dark:text-white max-w-4xl">
            Empowering Businesses with <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-primary-400">
              Smart Digital Solutions
            </span>
          </h1>

          <p className="text-lg md:text-xl text-slate-500 dark:text-slate-400 max-w-2xl mb-10 leading-relaxed">
            Scalable Software Engineering <span className="mx-2 opacity-30">|</span> 
            Cloud Architecture <span className="mx-2 opacity-30">|</span> 
            Enterprise Innovation
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto mb-16">
            <NavLink
              to="/contact"
              className="w-full sm:w-auto px-8 py-4 bg-primary-600 hover:bg-primary-700 text-white rounded-xl font-bold transition-all shadow-lg shadow-primary-500/20 flex items-center justify-center group"
            >
              Get Started
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </NavLink>
            <NavLink
              to="/services"
              className="w-full sm:w-auto px-8 py-4 bg-white dark:bg-slate-900 hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-900 dark:text-white rounded-xl font-bold transition-all flex items-center justify-center border border-slate-200 dark:border-slate-800"
            >
              Explore Services
            </NavLink>
          </div>
        </motion.div>
      </div>

      {/* Tech Stack Pulse at Bottom of Hero */}
      <div className="w-full relative z-10 py-10 border-t border-slate-100/50 dark:border-slate-900/50 bg-white/30 dark:bg-slate-950/30 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-wrap items-center justify-center gap-10 md:gap-x-20 md:gap-y-12 transition-all duration-700">
            {[
              { name: 'Java', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg' },
              { name: 'Spring', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg' },
              { name: 'Node', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
              { name: 'React', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
              { name: 'Flutter', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg' },
              { name: 'MySQL', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
              { name: 'AWS', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg' }
            ].map((tech, index) => (
              <motion.div 
                key={tech.name}
                initial={{ opacity: 0, y: 10 }}
                animate={{ 
                  y: [0, -8, 0],
                  opacity: 0.85
                }}
                transition={{
                  y: {
                    duration: 3.5 + (index % 2.5),
                    repeat: Infinity,
                    delay: index * 0.4,
                    ease: "easeInOut"
                  },
                  opacity: { duration: 0.5, delay: 0.1 * index }
                }}
                whileHover={{ scale: 1.2, opacity: 1, y: -12 }}
                className="flex items-center"
              >
                <img 
                  src={tech.logo} 
                  alt={tech.name} 
                  className="w-10 h-10 md:w-12 md:h-12 object-contain drop-shadow-sm filter brightness-100 contrast-100" 
                />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
