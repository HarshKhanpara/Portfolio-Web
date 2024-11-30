import { useEffect, useState } from 'react';
import { PageTransition } from '../components/PageTransition';
import { motion } from 'framer-motion';
import { Calendar, ChevronLeft } from 'lucide-react';
import { Link } from 'wouter';

const blogPosts = {
  'modern-web-development': {
    title: 'Modern Web Development with React and Three.js',
    publishDate: '2024-03-15',
    content: `
      <p>Modern web development has evolved significantly over the years, with new technologies and frameworks emerging to help developers create more immersive and interactive experiences. In this post, we'll explore how React and Three.js can be combined to create stunning 3D visualizations on the web.</p>
      
      <h2>Why React and Three.js?</h2>
      <p>React's component-based architecture makes it perfect for building complex user interfaces, while Three.js provides powerful 3D rendering capabilities. Together, they enable developers to create engaging 3D experiences while maintaining clean and maintainable code.</p>
      
      <h2>Getting Started</h2>
      <p>To begin working with React and Three.js, you'll need to set up your development environment and install the necessary dependencies. We'll walk through the process step by step and explore some basic examples.</p>
    `,
    imageUrl: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee'
  },
  'machine-learning-basics': {
    title: 'Getting Started with Machine Learning',
    publishDate: '2024-03-10',
    content: `
      <p>Machine learning has become an essential part of modern software development, enabling applications to learn from data and make intelligent decisions. This guide will introduce you to the fundamental concepts and help you get started with practical machine learning projects.</p>
      
      <h2>Understanding the Basics</h2>
      <p>Before diving into complex algorithms and models, it's important to understand the basic principles of machine learning, including supervised and unsupervised learning, model training, and evaluation metrics.</p>
      
      <h2>Tools and Frameworks</h2>
      <p>We'll explore popular machine learning frameworks and tools that make it easier to implement and deploy machine learning models in your applications.</p>
    `,
    imageUrl: 'https://images.unsplash.com/photo-1677442136019-21780ecad995'
  },
  'cloud-architecture': {
    title: 'Cloud Architecture Best Practices',
    publishDate: '2024-03-05',
    content: `
      <p>Designing scalable and resilient cloud architectures is crucial for modern applications. This post covers best practices and patterns for building robust cloud-native solutions.</p>
      
      <h2>Key Principles</h2>
      <p>Learn about important principles such as scalability, reliability, security, and cost optimization when designing cloud architectures.</p>
      
      <h2>Architecture Patterns</h2>
      <p>Explore common architecture patterns and when to apply them in your cloud-native applications.</p>
    `,
    imageUrl: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0'
  }
};

interface BlogPostPageProps {
  params: {
    slug: string;
  };
}

export function BlogPostPage({ params }: BlogPostPageProps) {
  const post = blogPosts[params.slug as keyof typeof blogPosts];

  if (!post) {
    return (
      <PageTransition>
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-white text-center">
            <h2 className="text-2xl font-bold mb-4">Post Not Found</h2>
            <Link href="/blog">
              <a className="text-white/80 hover:text-white inline-flex items-center gap-2">
                <ChevronLeft className="w-4 h-4" />
                Back to Blog
              </a>
            </Link>
          </div>
        </div>
      </PageTransition>
    );
  }

  return (
    <PageTransition>
      <div className="min-h-screen py-24 px-6">
        <article className="max-w-3xl mx-auto">
          <Link href="/blog">
            <a className="text-white/80 hover:text-white inline-flex items-center gap-2 mb-8">
              <ChevronLeft className="w-4 h-4" />
              Back to Blog
            </a>
          </Link>
          
          <div className="relative h-96 rounded-xl overflow-hidden mb-12">
            <img
              src={post.imageUrl}
              alt={post.title}
              className="w-full h-full object-cover"
            />
          </div>

          <div className="flex items-center gap-2 text-white/60 mb-6">
            <Calendar className="w-4 h-4" />
            <time>{new Date(post.publishDate).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric'
            })}</time>
          </div>

          <h1 className="text-4xl font-bold text-white mb-6">{post.title}</h1>
          <div 
            className="prose prose-invert max-w-none"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </article>
      </div>
    </PageTransition>
  );
}