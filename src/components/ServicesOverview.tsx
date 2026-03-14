import React from 'react';
import { motion } from 'framer-motion';
import { Globe, Smartphone, Server, Cloud, Database, Cpu, ArrowRight } from 'lucide-react';
import { NavLink } from 'react-router-dom';

const services = [
  {
    title: 'Web Development',
    description: 'Custom websites, enterprise platforms, and SaaS systems built with modern frameworks.',
    icon: Globe,
    color: 'bg-blue-500',
  },
  {
    title: 'Mobile App Development',
    description: 'High-performance native and cross-platform mobile applications for iOS and Android.',
    icon: Smartphone,
    color: 'bg-purple-500',
  },
  {
    title: 'Enterprise Software',
    description: 'Scalable business solutions tailored to streamline operations and enhance productivity.',
    icon: Server,
    color: 'bg-indigo-500',
  },
  {
    title: 'Cloud Solutions',
    description: 'Secure and scalable cloud infrastructure, migration, and management services.',
    icon: Cloud,
    color: 'bg-sky-500',
  },
  {
    title: 'API Development',
    description: 'Robust and secure RESTful and GraphQL APIs for seamless system integration.',
    icon: Cpu,
    color: 'bg-emerald-500',
  },
  {
    title: 'Database Solutions',
    description: 'Expert database design, optimization, and management for high-data environments.',
    icon: Database,
    color: 'bg-cyan-500',
  },
];

export const ServicesOverview: React.FC = () => {
  return (
    <section className="py-24 bg-slate-50 dark:bg-slate-900/50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-2xl">
            <h2 className="text-4xl font-bold mb-4">Empowering Businesses with Cutting-Edge Solutions</h2>
            <p className="text-lg text-slate-600 dark:text-slate-400">
              We provide a comprehensive suite of IT services designed to help you stay ahead in the digital landscape.
            </p>
          </div>
          <NavLink to="/services" className="group flex items-center space-x-2 text-primary-600 font-semibold text-lg">
            <span>View All Services</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </NavLink>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10, boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.15)" }}
              className="glass p-10 rounded-[2.5rem] group border-transparent hover:border-primary-500/30 transition-all duration-500"
            >
              <div className={`w-16 h-16 ${service.color} rounded-2xl flex items-center justify-center mb-8 shadow-2xl shadow-${service.color.split('-')[1]}-500/40 text-white transform group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500`}>
                <service.icon size={32} />
              </div>
              <h3 className="text-2xl font-black mb-4 group-hover:text-primary-600 transition-colors uppercase tracking-tight">{service.title}</h3>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-lg font-medium opacity-80 group-hover:opacity-100 transition-opacity">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
