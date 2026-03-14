import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

const categories = ['All', 'Mobility', 'Enterprise', 'Gaming', 'EdTech', 'GovTech'];

const projects = [
  {
    title: 'Smartest Cab Ecosystem',
    category: 'Mobility',
    description: 'A complete taxi business solution with passenger and driver apps, cloud dispatch, and 90% fare retention for owners.',
    image: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&q=80&w=2000',
    tags: ['Java', 'Spring', 'JEE', 'Android', 'iOS'],
    link: '#',
  },
  {
    title: 'My Ride Sharing',
    category: 'Mobility',
    description: 'Next-gen ride-sharing platform built with Flutter and REST web services for seamless cross-platform performance.',
    image: 'https://images.unsplash.com/photo-1532105956626-9569c03602f6?auto=format&fit=crop&q=80&w=2000',
    tags: ['Flutter', 'REST API', 'MySQL', 'Cloud'],
    link: '#',
  },
  {
    title: 'Grants Management',
    category: 'GovTech',
    description: 'Specialized system for Federal and State grants with complex approval matrices and role-based access.',
    image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=2000',
    tags: ['Java', 'Oracle', 'JPA', 'Angular'],
    link: '#',
  },
  {
    title: 'Buddy Poker App',
    category: 'Gaming',
    description: 'A sophisticated social gaming platform using custom algorithms for fair play and secure real-time interactions.',
    image: 'https://images.unsplash.com/photo-1511193311914-0346f16efe90?auto=format&fit=crop&q=80&w=2000',
    tags: ['C++', 'Spring Boot', 'WebSockets', 'Flutter'],
    link: '#',
  },
  {
    title: 'Paperless Classroom',
    category: 'EdTech',
    description: 'Compliance-focused document management system for academic accreditation and faculty documentation.',
    image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&q=80&w=2000',
    tags: ['Angular', 'Spring', 'MongoDB', 'Cloud'],
    link: '#',
  },
  {
    title: 'Advanced POS System',
    category: 'Enterprise',
    description: 'Customized retail management solution designed for budget-conscious SMEs with Oracle database integration.',
    image: 'https://images.unsplash.com/photo-1556742044-3c52d6e88ceb?auto=format&fit=crop&q=80&w=2000',
    tags: ['Java', 'Oracle', 'Swing', 'REST'],
    link: '#',
  },
];

export const PortfolioPage: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredProjects = activeCategory === 'All' 
    ? projects 
    : projects.filter(p => p.category === activeCategory);

  return (
    <div className="pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl font-bold mb-4"
          >
            Our Masterpieces
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-slate-600 dark:text-slate-400"
          >
            Explore our diverse portfolio of high-impact digital solutions.
          </motion.p>
        </div>

        {/* Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-8 py-3 rounded-2xl font-bold transition-all ${
                activeCategory === cat 
                  ? 'bg-primary-600 text-white shadow-lg shadow-primary-500/25' 
                  : 'bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-700 hover:border-primary-500'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                layout
                key={project.title}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.3 }}
                className="group glass rounded-[2.5rem] overflow-hidden"
              >
                <div className="aspect-[4/3] overflow-hidden relative">
                  <img src={project.image} alt={project.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-8">
                    <div className="flex space-x-4">
                      <a href={project.link} className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-slate-900 hover:bg-primary-600 hover:text-white transition-colors">
                        <ExternalLink size={20} />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="p-8">
                  <div className="text-primary-600 font-bold text-sm uppercase mb-2 tracking-widest">{project.category}</div>
                  <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
                  <p className="text-slate-600 dark:text-slate-400 mb-6 line-clamp-2">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map(tag => (
                      <span key={tag} className="px-3 py-1 bg-slate-100 dark:bg-slate-900/50 rounded-lg text-xs font-semibold text-slate-500 dark:text-slate-400">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </div>
  );
};
