import { PageTransition } from '../components/PageTransition';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import { projects } from '../data/projects';

export function ProjectsPage() {
  return (
    <PageTransition>
      <div className="min-h-screen py-24 px-6 bg-gradient-to-r from-gray-900 via-gray-800 to-black">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-yellow-500 mb-16 text-center">
            Featured Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{
                  scale: 1.05, // Slight scale-up
                  rotate: 5,   // Slight rotation on hover
                  z: 10,       // Move along the Z-axis
                  transition: { duration: 0.3, ease: "ease-in-out" },
                  backgroundColor: "#ffffff10",
                }}
                className="bg-white/10 backdrop-blur-md rounded-xl overflow-hidden group shadow-xl hover:shadow-2xl transition-shadow duration-300 transform"
              >
                <div className="relative h-60 overflow-hidden rounded-t-xl">
                  <img
                    src={project.imageUrl}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform group-hover:scale-110"
                  />
                </div>
                <div className="p-6 space-y-4">
                  <h3 className="text-2xl font-semibold text-white mb-2">{project.title}</h3>
                  <p className="text-white/80 text-lg mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-4 py-1 text-sm bg-white/20 rounded-full text-white/90"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-6 mt-4">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-white/80 hover:text-white transition-colors"
                      >
                        <Github className="w-5 h-5" />
                        <span>Code</span>
                      </a>
                    )}
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-white/80 hover:text-white transition-colors"
                      >
                        <ExternalLink className="w-5 h-5" />
                        <span>Live Demo</span>
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </PageTransition>
  );
}
