import { PageTransition } from '../components/PageTransition';
import { motion } from 'framer-motion';
import { ArrowRight, Calendar } from 'lucide-react';
import { Link } from 'wouter';

const blogPosts = [
  {
    slug: 'modern-web-development',
    title: 'Modern Web Development with React and Three.js',
    description: 'Exploring the latest trends in web development and creating immersive 3D experiences.',
    publishDate: '2024-03-15',
    imageUrl: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee'
  },
  {
    slug: 'machine-learning-basics',
    title: 'Getting Started with Machine Learning',
    description: 'A comprehensive guide to understanding machine learning fundamentals and practical applications.',
    publishDate: '2024-03-10',
    imageUrl: 'https://images.unsplash.com/photo-1677442136019-21780ecad995'
  },
  {
    slug: 'cloud-architecture',
    title: 'Cloud Architecture Best Practices',
    description: 'Learn how to design scalable and resilient cloud architectures for modern applications.',
    publishDate: '2024-03-05',
    imageUrl: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0'
  }
];

export function BlogPage() {
  return (
    <PageTransition>
      <div className="min-h-screen py-24 px-6 bg-gradient-to-r from-gray-800 via-gray-900 to-black">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-yellow-500 mb-12 text-center">
            My Blogs
          </h2>
          <div className="space-y-12">
            {blogPosts.map((post) => (
              <motion.article
                key={post.slug}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="bg-white/10 backdrop-blur-md rounded-xl overflow-hidden group shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:scale-105"
              >
                <div className="relative h-64 overflow-hidden rounded-t-xl">
                  <img
                    src={post.imageUrl}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform group-hover:scale-110"
                  />
                </div>
                <div className="p-8">
                  <div className="flex items-center gap-2 text-white/60 mb-4">
                    <Calendar className="w-4 h-4" />
                    <time>{new Date(post.publishDate).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}</time>
                  </div>
                  <h3 className="text-2xl font-semibold text-white mb-4">{post.title}</h3>
                  <p className="text-white/80 mb-6">{post.description}</p>
                  <Link href={`/blog/${post.slug}`}>
                    <a className="inline-flex items-center gap-2 text-white hover:text-pink-500 transition-colors">
                      Read More
                      <ArrowRight className="w-4 h-4" />
                    </a>
                  </Link>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </PageTransition>
  );
}
