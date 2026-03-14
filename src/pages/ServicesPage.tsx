import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Car, Smartphone, Gamepad, ShoppingBag, GraduationCap, ClipboardList, Activity } from 'lucide-react';

const products = [
  {
    title: 'Smartest Cab',
    category: 'Transportation & Mobility',
    description: 'A comprehensive taxi management ecosystem including Passenger App and Driver App. Designed for small taxi businesses and individuals to keep 90% of fares with instantaneous bank transfers.',
    image: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&q=80&w=2000',
    icon: Car,
    features: ['Passenger & Driver Apps', 'Instant Fare Transfer', 'Cloud-Based Dispatch', 'Dynamic Fare Setting'],
  },
  {
    title: 'My Ride',
    category: 'Ride Sharing',
    description: 'Innovative ride-sharing solution developed with Java, REST services, and Flutter. Provides a seamless experience for both passengers and drivers with real-time tracking.',
    image: 'https://images.unsplash.com/photo-1532105956626-9569c03602f6?auto=format&fit=crop&q=80&w=2000',
    icon: Smartphone,
    features: ['Flutter Mobile Apps', 'REST Web Services', 'Real-time GPS', 'Driver Performance Tracking'],
  },
  {
    title: 'Grants Management System',
    category: 'GovTech Solutions',
    description: 'Role-based grants management system for Federal/State grants. Features multi-level approval workflows with automated email notifications and audit trails.',
    image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=2000',
    icon: ClipboardList,
    features: ['Role-based access', 'Approval Chain Workflows', 'Email Integration', 'Reporting & Compliance'],
  },
  {
    title: 'Fleet Management',
    category: 'Enterprise Logistics',
    description: 'Real-time vehicle tracking and performance monitoring. Features geo-fencing, idle time reports, and route optimization to boost logistical efficiency.',
    image: 'https://images.unsplash.com/photo-1519003722824-194d4455a60c?auto=format&fit=crop&q=80&w=2000',
    icon: Activity,
    features: ['Geo-fencing', 'Idle-time Tracking', 'Route Optimization', 'Driver Behavior Analytics'],
  },
  {
    title: 'Paperless Classroom',
    category: 'EdTech',
    description: 'Electronic document management for educational institutions. Reduces risk and increases efficiency by documenting every compliance and accreditation element.',
    image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&q=80&w=2000',
    icon: GraduationCap,
    features: ['Accreditation Tracking', 'Faculty Records', 'Student Portfolio', 'Compliance Documentation'],
  },
  {
    title: 'Buddy Poker',
    category: 'Gaming',
    description: 'High-performance gaming app built with specialized algorithms. Offers a secure and engaging platform for professional and recreational players.',
    image: 'https://images.unsplash.com/photo-1511193311914-0346f16efe90?auto=format&fit=crop&q=80&w=2000',
    icon: Gamepad,
    features: ['Custom Gaming Engine', 'Secure Transactions', 'Social Integration', 'Anti-cheat Algorithms'],
  },
  {
    title: 'Point of Sale (POS)',
    category: 'Retail',
    description: 'Customized retail solutions integrated with MySQL/Oracle databases. Efficiently manages transactions, inventory, and customer data within your budget.',
    image: 'https://images.unsplash.com/photo-1556742044-3c52d6e88ceb?auto=format&fit=crop&q=80&w=2000',
    icon: ShoppingBag,
    features: ['Inventory Management', 'Oracle Integration', 'Custom Reporting', 'Multi-terminal Support'],
  },
];

export const ServicesPage: React.FC = () => {
  return (
    <div className="pt-24 pb-20">
      <section className="px-6 mb-24">
        <div className="max-w-7xl mx-auto text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl font-bold mb-8"
          >
            Our Product <span className="text-primary-600">Ecosystem</span>
          </motion.h1>
          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto leading-relaxed">
            Alladi Cloud Solutions develops technologically advanced products designed to solve real-world problems and drive enterprise productivity.
          </p>
        </div>
      </section>

      <div className="space-y-32">
        {products.map((product, index) => (
          <section key={product.title} className="px-6">
            <div className={`max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
               <motion.div
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className={index % 2 === 1 ? 'lg:order-2' : ''}
              >
                <div className="w-16 h-16 bg-primary-100 dark:bg-primary-900/30 rounded-2xl flex items-center justify-center text-primary-600 mb-6 font-bold">
                  <product.icon size={32} />
                </div>
                <div className="text-sm font-bold text-primary-600 uppercase tracking-widest mb-2">{product.category}</div>
                <h2 className="text-4xl font-bold mb-6">{product.title}</h2>
                <p className="text-lg text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">
                  {product.description}
                </p>
                <div className="grid grid-cols-2 gap-4">
                  {product.features.map((feature) => (
                    <div key={feature} className="flex items-center space-x-2 text-slate-600 dark:text-slate-300">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary-500" />
                      <span className="text-sm font-medium">{feature}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className={`relative ${index % 2 === 1 ? 'lg:order-1' : ''}`}
              >
                <div className="aspect-video rounded-[2.5rem] overflow-hidden shadow-2xl relative group">
                  <img src={product.image} alt={product.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent flex items-end p-10">
                     <span className="text-white font-bold text-lg">{product.title} Dashboard Preview</span>
                  </div>
                </div>
                <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] bg-primary-500/10 blur-[100px] rounded-full" />
              </motion.div>
            </div>
          </section>
        ))}
      </div>

      {/* CTA */}
      <section className="px-6 mt-32">
        <div className="max-w-5xl mx-auto rounded-[3rem] bg-slate-900 dark:bg-slate-900 p-16 text-center text-white relative overflow-hidden">
           <div className="relative z-10">
              <h2 className="text-4xl font-bold mb-6">Need a Custom Solution?</h2>
              <p className="text-slate-400 text-lg mb-10 max-w-2xl mx-auto">
                In addition to our flagship products, we offer custom software development services, delivery support, and maintenance.
              </p>
              <Link to="/contact" className="inline-block bg-primary-600 hover:bg-primary-700 font-bold px-10 py-5 rounded-2xl transition-all shadow-xl shadow-primary-500/20">
                Schedule a Consultation
              </Link>
           </div>
           <div className="absolute top-0 right-0 w-64 h-64 bg-primary-600/20 blur-[100px] -translate-y-1/2 translate-x-1/2" />
        </div>
      </section>
    </div>
  );
};
