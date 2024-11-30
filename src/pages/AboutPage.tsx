import { PageTransition } from '../components/PageTransition';
import { motion } from 'framer-motion';
import { Code, Database, Globe, Palette } from 'lucide-react';

const skills = [
  { icon: Code, label: 'Frontend', items: ['React', 'TypeScript', 'Tailwind CSS'] },
  { icon: Database, label: 'Backend', items: ['Node.js', 'Python', 'PostgreSQL'] },
  { icon: Globe, label: 'DevOps', items: ['AWS', 'Docker', 'CI/CD'] },
  { icon: Palette, label: 'Design', items: ['Figma', 'UX/UI', 'Animation'] }
];

export function AboutPage() {
  return (
    <PageTransition>
      <div className="min-h-screen py-24 px-6 relative">
        {/* Animated Background */}
        <div className="absolute inset-0  opacity-20 animate-pulse"></div>
        
        <div className="max-w-4xl mx-auto text-white relative z-10">
          {/* About Me Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-yellow-500 mb-8">
              About Me
            </h2>
            <p className="text-lg leading-relaxed mb-12 text-white/80">
              I'm a passionate software engineer with over 5 years of experience in building scalable applications.
              I specialize in full-stack development with a focus on creating elegant, user-centric solutions
              that solve real-world problems.
            </p>
          </motion.div>

          {/* Skills Section */}
          <h3 className="text-4xl tracking-wide font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500 mb-4 text-center">Skills & Expertise</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-4">
            {skills.map(({ icon: Icon, label, items }) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="relative bg-white/10 backdrop-blur-lg rounded-xl p-8 hover:bg-white/20 transition-all group transform hover:scale-105 hover:rotate-3"
              >
                {/* Background Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-40 transition-opacity duration-500 rounded-xl blur-lg"></div>

                {/* Card Content */}
                <div className="relative z-10">
                  {/* Icon and Label */}
                  <div className="flex items-center gap-4 mb-6">
                    <motion.div
                      className="w-16 h-16 p-3 rounded-full shadow-2xl transform transition-all group-hover:scale-125 group-hover:rotate-12"
                      whileHover={{ scale: 1.1, rotate: 10 }}
                    >
                      <Icon className="w-full h-full text-white" />
                    </motion.div>
                    <h4 className="text-xl font-semibold text-white group-hover:text-transparent group-hover:bg-clip-text bg-gradient-to-r from-pink-500 to-yellow-500">
                      {label}
                    </h4>
                  </div>

                  {/* Skill List */}
                  <ul className="space-y-3">
                    {items.map((item) => (
                      <motion.li
                        key={item}
                        className="text-white/80 text-lg transition-all group-hover:text-white"
                        whileHover={{ scale: 1.05 }}
                      >
                        <div className="flex items-center gap-2">
                          <span>{item}</span>
                        </div>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </PageTransition>
  );
}
