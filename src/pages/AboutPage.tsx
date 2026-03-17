import { motion } from 'framer-motion';
import { Award, Target, Eye, Shield, Users, Zap, Gem } from 'lucide-react';
import ceoImage from '../assets/CEO image.jpg';

const stats = [
  { label: 'Years of Excellence', value: '30+' },
  { label: 'Global Projects', value: '100+' },
  { label: 'Expert Engineers', value: '40+' },
  { label: 'Happy Clients', value: '50+' },
];

const values = [
  {
    icon: Target,
    title: 'Our Mission',
    description: "To create technologically advanced products that enhance people's lives and boost client productivity through innovative IT solutions.",
  },
  {
    icon: Eye,
    title: 'Our Vision',
    description: 'To be a global leader in cloud applications and custom software development, driven by technical excellence and visionary management.',
  },
  {
    icon: Shield,
    title: 'Core Values',
    description: 'Technical excellence, strategic thinking, and a commitment to delivering scalable, secure, and high-performance solutions.',
  },
];

const strengths = [
  'Visionary top management with 30+ years of IT experience.',
  'Strong technology team with AWS and Sun certified architects.',
  'Expertise in Java, JEE, Spring, REST, Angular, and Flutter.',
  'Experience with government agencies (Customs & Border Protection, EZ-Pass).',
  'Scalable deployments on both Windows and Linux servers.',
  'Performance optimized for various platforms and operating systems.',
];

export const AboutPage = () => {
  return (
    <div className="pt-24 pb-20">
      {/* Hero Section */}
      <section className="px-6 mb-20">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block px-4 py-1.5 mb-6 bg-primary-100 dark:bg-primary-900/30 rounded-full text-primary-600 dark:text-primary-400 font-medium text-sm"
          >
            About Alladi Cloud Solutions
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-6xl font-bold mb-8 leading-tight"
          >
            Pioneering the Future of <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-accent">Digital Innovation</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="max-w-3xl mx-auto text-xl text-slate-600 dark:text-slate-400 leading-relaxed"
          >
            Alladi Cloud Solutions Pvt. Ltd. is an innovative IT company that thrives to create technologically advanced products that enhance lives and boost productivity.
          </motion.p>
        </div>
      </section>

      {/* Stats */}
      <section className="px-6 mb-32">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-8 rounded-3xl glass text-center"
              >
                <div className="text-4xl font-bold text-primary-600 mb-2">{stat.value}</div>
                <div className="text-slate-600 dark:text-slate-400 text-sm font-medium uppercase tracking-wider">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Overview & Content */}
      <section className="px-6 mb-32">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Journey & Expertise</h2>
              <p className="text-slate-600 dark:text-slate-400 mb-6 text-lg leading-relaxed">
                Our portfolio includes cutting-edge solutions like Smartest Cab, My Ride, Buddy Poker, Point of Sale, and Paperless Classroom.
                Developed using state-of-the-art technologies such as Java, JEE, Spring, JPA, REST web services, Angular, and Flutter.
              </p>
              <p className="text-slate-600 dark:text-slate-400 mb-10 text-lg leading-relaxed">
                Beyond product development, we offer custom software services, maintenance, and project delivery support with significant expertise in mobile app development.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {strengths.map((strength, i) => (
                  <div key={i} className="flex items-center space-x-3 p-4 bg-slate-50 dark:bg-slate-900/50 rounded-2xl border border-slate-100 dark:border-slate-800">
                    <div className="w-2 h-2 rounded-full bg-primary-500" />
                    <span className="text-sm font-medium">{strength}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-primary-500/20 to-accent/20 rounded-[3rem] p-8">
                <div className="w-full h-full glass rounded-[2.5rem] flex items-center justify-center p-12">
                  <Gem className="w-32 h-32 text-primary-600" />
                </div>
              </div>
              <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-accent/10 rounded-full blur-3xl -z-10" />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="px-6 py-24 bg-primary-600 relative overflow-hidden mb-32">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent rounded-full translate-x-1/2 translate-y-1/2 blur-3xl" />
        </div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center text-white"
              >
                <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-6 backdrop-blur-sm">
                  <value.icon size={32} />
                </div>
                <h3 className="text-2xl font-bold mb-4">{value.title}</h3>
                <p className="text-primary-100 text-lg">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CEO Section */}
      <section className="px-6 mb-32">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="aspect-[3/4] rounded-[3rem] overflow-hidden border-8 border-white dark:border-slate-900 shadow-2xl bg-slate-200">
                <img
                  src={ceoImage}
                  alt="Malleshaiah Alladi - CEO & Founder"
                  className="w-full h-full object-cover"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 p-8 glass rounded-3xl max-w-sm">
                <h4 className="text-xl font-bold truncate">Malleshaiah (Mal) Alladi</h4>
                <p className="text-primary-600 font-medium">CEO & Founder</p>
                <p className="text-xs text-slate-500 mt-2">Certified PMP, AWS Solution Architect, MS IT (Virginia Tech)</p>
              </div>
            </motion.div>

            <div>
              <h2 className="text-4xl font-bold mb-8">Leadership with Vision</h2>
              <div className="space-y-6 text-lg text-slate-600 dark:text-slate-400">
                <p>
                  Malleshaiah (Mal) Alladi is a computer engineer and the founder of Alladi Cloud Solutions. With over 30 years of IT experience, Mal possesses a deep understanding of cloud applications and is dedicated to innovative IT solutions.
                </p>
                <p>
                  He holds an MS in IT from Virginia Tech and is a certified Project Management Professional (PMP) and AWS Solution Architect. His exceptional algorithm skills have even been published in renowned IT magazines.
                </p>
                <p>
                  Throughout his career, Mal has led the architecture of notable solutions such as EZ-Pass for 95 and 495 express lanes. Before founding ACS, he held senior roles at Lockheed Martin, Xerox, DOL, and Customs & Border Protection.
                </p>
                <div className="pt-6">
                  <h4 className="font-bold text-slate-900 dark:text-white mb-4 italic text-xl">
                    "At ACS, we leverage deep architecture expertise to build products that don't just solve problems, but define new standards."
                  </h4>
                  <div className="flex flex-wrap gap-3">
                    {['PMP Certified', 'AWS Solution Architect', 'MS IT (VT)', '30+ Yrs Exp'].map(tag => (
                      <span key={tag} className="px-3 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 rounded-full text-sm font-semibold">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Subsidiary Info */}
      <section className="px-6 py-20 bg-slate-50 dark:bg-slate-900/50 rounded-[4rem] mx-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-6">Global Presence</h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
            Alladi Cloud Solutions is an IT Development center expanded into India and a subsidiary of Brainy Way Solutions Inc, a USA based IT Development and Consultancy company.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-8">
            <div className="flex flex-col items-center">
              <Award className="w-10 h-10 text-primary-600 mb-2" />
              <span className="font-bold">AWS Architects</span>
            </div>
            <div className="flex flex-col items-center">
              <Users className="w-10 h-10 text-primary-600 mb-2" />
              <span className="font-bold">PMP Managers</span>
            </div>
            <div className="flex flex-col items-center">
              <Zap className="w-10 h-10 text-primary-600 mb-2" />
              <span className="font-bold">Scrum Masters</span>
            </div>
            <div className="flex flex-col items-center">
              <Award className="w-10 h-10 text-primary-600 mb-2" />
              <span className="font-bold">Sun Certified</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
