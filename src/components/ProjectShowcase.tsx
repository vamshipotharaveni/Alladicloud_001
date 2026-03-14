import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { NavLink } from 'react-router-dom';

const projects = [
  {
    title: 'Smartest Cab',
    category: 'Mobile App',
    description: 'A revolutionary ride booking system with real-time tracking and smart dispatching.',
    tech: ['Flutter', 'Node.js', 'MySQL'],
    image: 'https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?auto=format&fit=crop&q=80&w=2070',
  },
  {
    title: 'My Ride',
    category: 'Web Platform',
    description: 'Comprehensive transport management solution for large-scale logistics operations.',
    tech: ['React', 'Spring Boot', 'Oracle'],
    image: 'https://images.unsplash.com/photo-1559067515-bf7d799b6d4d?auto=format&fit=crop&q=80&w=2030',
  },
  {
    title: 'Buddy Poker',
    category: 'Gaming',
    description: 'Feature-rich online gaming platform with real-time multi-player engagement.',
    tech: ['Angular', 'Node.js', 'WebSockets'],
    image: 'https://images.unsplash.com/photo-1511193311914-0346f16fea90?auto=format&fit=crop&q=80&w=2070',
  },
  {
    title: 'POS Systems',
    category: 'Enterprise',
    description: 'Scalable retail billing and inventory management system for modern storefronts.',
    tech: ['Java', 'MySQL', 'Desktop App'],
    image: 'https://images.unsplash.com/photo-1556742044-3c52d6e88c62?auto=format&fit=crop&q=80&w=2070',
  },
  {
    title: 'Paperless Classroom',
    category: 'EdTech',
    description: 'Digital education platform streamlining classroom workflows and assignments.',
    tech: ['React', 'Node.js', 'MongoDB'],
    image: 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?auto=format&fit=crop&q=80&w=2074',
  },
];

export const ProjectShowcase: React.FC = () => {
  return (
    <section className="py-24 bg-slate-50 dark:bg-slate-900/50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-16 px-6">
        <div className="flex flex-col md:flex-row justify-between items-end gap-8">
          <div className="max-w-2xl">
            <h2 className="text-4xl font-bold mb-4">Innovation in Action</h2>
            <p className="text-lg text-slate-600 dark:text-slate-400">
              Explore our portfolio of successful digital transformations across various industries.
            </p>
          </div>
          <NavLink to="/portfolio" className="bg-white dark:bg-slate-800 p-4 rounded-full border border-slate-200 dark:border-slate-700 hover:scale-105 transition-transform">
            <ArrowUpRight size={24} className="text-primary-600" />
          </NavLink>
        </div>
      </div>

      <div className="flex space-x-8 px-6 pb-12 overflow-x-auto scrollbar-hide">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="min-w-[350px] md:min-w-[450px] group relative rounded-3xl overflow-hidden aspect-[4/5] shadow-xl"
          >
            <img 
              src={project.image} 
              alt={project.title} 
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/20 to-transparent" />
            
            <div className="absolute inset-0 p-8 flex flex-col justify-end">
              <span className="text-primary-400 text-sm font-semibold mb-2 uppercase tracking-widest">{project.category}</span>
              <h3 className="text-2xl font-bold text-white mb-3">{project.title}</h3>
              <p className="text-slate-300 text-sm mb-6 line-clamp-2">{project.description}</p>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((t, i) => (
                  <span key={i} className="px-3 py-1 bg-white/10 backdrop-blur-md rounded-full text-xs text-white border border-white/20">
                    {t}
                  </span>
                ))}
              </div>
              
              <NavLink 
                to="/portfolio" 
                className="w-full py-4 bg-white text-slate-900 rounded-2xl font-bold flex items-center justify-center space-x-2 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300"
              >
                <span>View Details</span>
                <ArrowUpRight size={18} />
              </NavLink>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
