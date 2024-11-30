import { motion } from 'framer-motion';
import { Code2, Database, Cloud, Cpu, Palette, LineChart } from 'lucide-react';

const skills = [
  {
    category: 'Frontend Development',
    icon: Code2,
    items: ['React', 'TypeScript', 'Next.js', 'Tailwind CSS', 'Three.js'],
    color: 'from-blue-400 to-blue-600'
  },
  {
    category: 'Backend Development',
    icon: Database,
    items: ['Node.js', 'Python', 'PostgreSQL', 'MongoDB', 'GraphQL'],
    color: 'from-green-400 to-green-600'
  },
  {
    category: 'DevOps & Cloud',
    icon: Cloud,
    items: ['AWS', 'Docker', 'CI/CD', 'Kubernetes', 'Terraform'],
    color: 'from-purple-400 to-purple-600'
  },
  {
    category: 'Machine Learning',
    icon: Cpu,
    items: ['TensorFlow', 'PyTorch', 'Computer Vision', 'NLP', 'Deep Learning'],
    color: 'from-red-400 to-red-600'
  },
  {
    category: 'UI/UX Design',
    icon: Palette,
    items: ['Figma', 'Adobe XD', 'User Research', 'Prototyping', 'Design Systems'],
    color: 'from-pink-400 to-pink-600'
  },
  {
    category: 'Data Analysis',
    icon: LineChart,
    items: ['Python', 'Pandas', 'NumPy', 'Data Visualization', 'Statistical Analysis'],
    color: 'from-yellow-400 to-yellow-600'
  }
];

export function Skills() {
  return (
    <div className="w-full max-w-6xl mx-auto px-6 pb-32">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl tracking-wide font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500 mb-4">Skills & Expertise</h2>
        <p className="text-white/60">Technologies and tools I work with</p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {skills.map((skill, index) => (
          <motion.div
            key={skill.category}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="relative group"
          >
            <div className="absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-10 transition-opacity rounded-xl" />
            <div className="relative bg-white/5 rounded-xl p-8 hover:bg-white/10 transition-colors h-full">
              <div className={`p-3 rounded-lg bg-gradient-to-r ${skill.color} w-fit mb-6`}>
                <skill.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">{skill.category}</h3>
              <ul className="space-y-2">
                {skill.items.map((item) => (
                  <li key={item} className="text-white/80">{item}</li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}