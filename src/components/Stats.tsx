import { motion } from 'framer-motion';
import { Code2, Award, Coffee, Users } from 'lucide-react';

const stats = [
  {
    icon: Code2,
    value: '500K+',
    label: 'Lines of Code',
    color: 'from-blue-400 to-blue-600'
  },
  {
    icon: Award,
    value: '50+',
    label: 'Projects Completed',
    color: 'from-purple-400 to-purple-600'
  },
  {
    icon: Users,
    value: '30+',
    label: 'Happy Clients',
    color: 'from-pink-400 to-pink-600'
  },
  {
    icon: Coffee,
    value: '1000+',
    label: 'Cups of Coffee',
    color: 'from-yellow-400 to-yellow-600'
  }
];

export function Stats() {
  return (
    <div className="w-full max-w-6xl mx-auto px-6 py-24 border-t border-white/10  rounded-lg">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-12 md:gap-16">
        {stats.map((stat, index) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="text-center transition-transform duration-300"
          >
            <div
              className={`w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-r ${stat.color} flex items-center justify-center shadow-2xl transform transition-transform duration-300 ease-in-out hover:scale-110`}
            >
              <stat.icon className="w-10 h-10 text-white" />
            </div>
            <div className="text-5xl font-extrabold text-white mb-2 tracking-tight">{stat.value}</div>
            <div className="text-white/70 text-lg font-medium">{stat.label}</div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
