import { motion } from 'framer-motion';
import { Briefcase, GraduationCap, Code, Brain } from 'lucide-react';

const experiences = [
  {
    title: 'Software Engineer',
    company: 'Outfindr',
    period: '2022 - Present',
    description: 'Building scalable web applications using modern technologies.',
    icon: Code,
    color: 'from-blue-400 to-blue-600'
  },
  {
    title: 'Deep Learning Intern',
    company: 'iNeuron',
    period: '2021 - 2022',
    description: 'Worked on computer vision and natural language processing projects.',
    icon: Brain,
    color: 'from-purple-400 to-purple-600'
  },
  {
    title: 'Freelance Developer',
    company: 'Self-employed',
    period: '2020 - Present',
    description: 'Developing custom solutions for clients worldwide.',
    icon: Briefcase,
    color: 'from-pink-400 to-pink-600'
  },
  {
    title: 'B.Tech in Computer Science',
    company: 'Engineering University',
    period: '2018 - 2022',
    description: 'Specialized in artificial intelligence and web technologies.',
    icon: GraduationCap,
    color: 'from-green-400 to-green-600'
  }
];

export function Experience() {
  return (
    <div className="w-full max-w-6xl mx-auto px-6 py-32">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl tracking-wide font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500 mb-4">
          Experience & Education
        </h2>
        <p className="text-white/60 text-lg">My professional journey and academic background</p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
        {experiences.map((exp, index) => (
          <motion.div
            key={exp.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="relative group"
          >
            <div className="absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-20 transition-opacity rounded-xl" />
            <div className="relative bg-gradient-to-br from-white/10 via-white/20 to-white/30 rounded-xl p-8 hover:bg-gradient-to-br hover:from-white/20 hover:via-white/30 hover:to-white/40 transition-all duration-300 ease-in-out shadow-2xl group-hover:shadow-3xl">
              <div className="flex items-start gap-6">
                <div className={`p-4 rounded-full bg-gradient-to-r ${exp.color} transition-all duration-500 ease-in-out transform hover:scale-110`}>
                  <exp.icon className="w-8 h-8 text-white" />
                </div>
                <div className="w-full">
                  <h3 className="text-2xl font-semibold text-white mb-2">{exp.title}</h3>
                  <p className="text-white/70 text-lg mb-1">{exp.company}</p>
                  <p className="text-white/40 text-sm mb-4">{exp.period}</p>
                  <p className="text-white/90 text-lg">{exp.description}</p>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
