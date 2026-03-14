import React from 'react';
import { motion } from 'framer-motion';
import { Users, Zap, Shield, Repeat, BarChart } from 'lucide-react';

const coreValues = [
  {
    title: 'Experienced Engineers',
    description: 'Our team consists of veteran developers with deep expertise in enterprise technologies.',
    icon: Users,
  },
  {
    title: 'Scalable Architecture',
    description: 'We build systems that grow with your business, ensuring long-term reliability.',
    icon: Zap,
  },
  {
    title: 'Enterprise-Grade Security',
    description: 'Security is at the heart of everything we build, protecting your valuable data.',
    icon: Shield,
  },
  {
    title: 'Agile Development',
    description: 'Fast, iterative development cycles that deliver value early and often.',
    icon: Repeat,
  },
  {
    title: 'Performance Optimized',
    description: 'We ensure your applications are lightning-fast and highly responsive.',
    icon: BarChart,
  },
];

export const WhyChooseUs: React.FC = () => {
  return (
    <section className="py-24 bg-white dark:bg-slate-950 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-6">Why Industry Leaders Trust Alladi Cloud Solutions</h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 mb-10">
              We don't just build software; we build foundations for business growth. Our approach combines technical excellence with strategic thinking.
            </p>
            <div className="space-y-8">
              {coreValues.map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start space-x-4"
                >
                  <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900/30 rounded-xl flex items-center justify-center shrink-0 text-primary-600 dark:text-primary-400">
                    <value.icon size={24} />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold mb-1">{value.title}</h4>
                    <p className="text-slate-600 dark:text-slate-400">{value.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
          
          <div className="relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative z-10 rounded-[2.5rem] overflow-hidden shadow-2xl shadow-primary-500/10 border border-slate-200 dark:border-slate-800"
            >
              <img 
                src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=2070" 
                alt="Our Team" 
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent" />
              <div className="absolute bottom-10 left-10 right-10 p-8 glass rounded-3xl">
                <p className="text-xl font-medium text-white italic mb-4">
                  "Alladi Cloud Solutions transformed our backend infrastructure, allowing us to scale 10x within a single year."
                </p>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-slate-200 rounded-full" />
                  <div>
                    <p className="font-bold text-white">Shivanand Prasad</p>
                    <p className="text-sm text-slate-300">CTO, Enterprise Partner</p>
                  </div>
                </div>
              </div>
            </motion.div>
            
            {/* Decors */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-primary-600/5 dark:bg-primary-600/10 rounded-full blur-[100px] -z-10" />
          </div>
        </div>
      </div>
    </section>
  );
};
