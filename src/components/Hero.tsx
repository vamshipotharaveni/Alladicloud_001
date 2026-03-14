import { motion } from 'framer-motion';
import { ArrowRight, Cloud, Smartphone, Globe, Shield } from 'lucide-react';
import { NavLink } from 'react-router-dom';
import heroImage from '../assets/hero.png';

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 -left-20 w-80 h-80 bg-primary-600/20 rounded-full blur-[100px]" />
        <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-accent/20 rounded-full blur-[100px]" />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150 mix-blend-overlay pointer-events-none" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="inline-flex items-center space-x-2 bg-slate-200/50 dark:bg-slate-800/50 backdrop-blur-md px-4 py-2 rounded-full border border-slate-300/50 dark:border-slate-700/50 mb-8">
            <span className="flex h-2 w-2 rounded-full bg-primary-500 animate-pulse" />
            <span className="text-sm font-medium text-slate-600 dark:text-slate-300">
              Leading Cloud & Software Experts
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-slate-900 via-primary-600 to-slate-900 dark:from-white dark:via-primary-500 dark:to-white bg-clip-text text-transparent leading-[1.1]">
            Building Powerful Digital <br /> Solutions for Modern Businesses
          </h1>

          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed">
            Alladi Cloud Solutions delivers scalable software, cloud infrastructure, and enterprise applications designed for high performance and reliability.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <NavLink
              to="/services"
              className="w-full sm:w-auto px-8 py-4 bg-primary-600 hover:bg-primary-700 text-white rounded-2xl font-semibold transition-all shadow-lg shadow-primary-600/20 flex items-center justify-center group"
            >
              Explore Services
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </NavLink>
            <NavLink
              to="/contact"
              className="w-full sm:w-auto px-8 py-4 glass hover:bg-white/90 dark:hover:bg-slate-800/90 rounded-2xl font-semibold transition-all flex items-center justify-center"
            >
              Contact Us
            </NavLink>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="mt-16 relative"
        >
          <div className="relative inline-block">
            <img 
              src={heroImage} 
              alt="ACS Platform Preview" 
              className="max-w-4xl w-full h-auto rounded-[2rem] shadow-2xl border border-white/20"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/20 to-transparent rounded-[2rem]" />
          </div>
        </motion.div>

        {/* Floating Code/Tech Elements Animation */}
        <div className="mt-20 relative h-20">
          {[Cloud, Globe, Smartphone, Shield].map((Icon, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0 }}
              animate={{ 
                opacity: [0.4, 1, 0.4],
                y: [0, -20, 0],
                x: i % 2 === 0 ? [0, 10, 0] : [0, -10, 0]
              }}
              transition={{ 
                duration: 4, 
                repeat: Infinity, 
                delay: i * 0.5,
                ease: "easeInOut"
              }}
              className="absolute hidden md:block"
              style={{
                left: `${20 + i * 20}%`,
                top: 0
              }}
            >
              <div className="p-4 glass rounded-2xl text-primary-600">
                <Icon size={24} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
