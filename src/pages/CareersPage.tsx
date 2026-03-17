import { motion } from 'framer-motion';
import { Briefcase, ArrowRight } from 'lucide-react';

const positions = [
  { title: 'Senior Java Developer', type: 'Full-time', location: 'Hyderabad (Hybrid)', exp: '5+ Years' },
  { title: 'React Frontend Engineer', type: 'Full-time', location: 'Remote', exp: '3+ Years' },
  { title: 'Mobile App Developer (Flutter)', type: 'Full-time', location: 'Hyderabad', exp: '2+ Years' },
  { title: 'DevOps Engineer', type: 'Full-time', location: 'Hyderabad (Hybrid)', exp: '4+ Years' },
];

export const CareersPage = () => {
  return (
    <div className="pt-32 pb-24">
      <section className="px-6 mb-24 text-center max-w-4xl mx-auto">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl font-bold mb-6"
        >
          Build the Future of <span className="text-primary-600">Cloud Technology</span>
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-xl text-slate-600 dark:text-slate-400"
        >
          Join a team of visionaries and problem solvers. At Alladi Cloud, 
          we value innovation, technical excellence, and cultural growth.
        </motion.p>
      </section>

      <section className="px-6 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24 items-center mb-24">
        <div>
          <h2 className="text-4xl font-bold mb-8">Work Culture & Benefits</h2>
          <div className="space-y-6">
            {[
              { title: 'Innovation First', desc: 'Work on cutting-edge technologies and enterprise solutions.' },
              { title: 'Growth Mindset', desc: 'Comprehensive learning programs and career path development.' },
              { title: 'Healthy Balance', desc: 'Flexible work hours and remote opportunities.' },
              { title: 'Great Benefits', desc: 'Competitive salary packages and health insurance.' },
            ].map((item, i) => (
              <div key={i} className="flex items-start space-x-4">
                <div className="w-1.5 h-1.5 bg-primary-600 rounded-full mt-2.5 shrink-0" />
                <div>
                  <h4 className="font-bold text-lg">{item.title}</h4>
                  <p className="text-slate-600 dark:text-slate-400">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <img src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&auto=format&fit=crop&q=80" className="rounded-3xl shadow-xl mt-12" alt="Culture" />
          <img src="https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=800&auto=format&fit=crop&q=80" className="rounded-3xl shadow-xl" alt="Office" />
        </div>
      </section>

      <section className="px-6 max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center">Open Positions</h2>
        <div className="space-y-4">
          {positions.map((pos, i) => (
            <motion.div
              key={i}
              whileHover={{ x: 10 }}
              className="glass p-8 rounded-[2rem] flex flex-col md:flex-row justify-between items-center gap-6 group cursor-pointer"
            >
              <div className="flex items-center space-x-6">
                <div className="p-4 bg-primary-600/10 rounded-2xl text-primary-600">
                  <Briefcase size={28} />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-1 group-hover:text-primary-600 transition-colors">{pos.title}</h3>
                  <p className="text-sm text-slate-500">{pos.type} • {pos.location}</p>
                </div>
              </div>
              <div className="flex items-center space-x-8">
                <span className="text-sm font-semibold text-slate-600 dark:text-slate-400">{pos.exp}</span>
                <button className="flex items-center space-x-2 text-primary-600 font-bold group">
                  <span>Apply Now</span>
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};
