import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ACSLogo from '../assets/ACSLogo.png';

export const LoadingScreen: React.FC = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] bg-slate-950 flex flex-col items-center justify-center"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <div className="w-24 h-24 bg-white rounded-3xl flex items-center justify-center shadow-2xl shadow-primary-600/20 p-4">
              <img src={ACSLogo} alt="Loading..." className="w-full h-auto" />
            </div>
            {/* Pulsing rings */}
            <div className="absolute inset-0 rounded-3xl border-2 border-primary-600 animate-ping opacity-20" />
          </motion.div>
          
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mt-8 text-center"
          >
            <h2 className="text-2xl font-bold text-white mb-2 font-display">Alladi Cloud</h2>
            <div className="w-48 h-1 bg-slate-800 rounded-full overflow-hidden">
              <motion.div
                initial={{ x: "-100%" }}
                animate={{ x: "100%" }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                className="w-full h-full bg-primary-500 shadow-[0_0_15px_rgba(59,130,246,0.8)]"
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
