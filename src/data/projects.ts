import { Project } from '../types/project';

export const projects: Project[] = [
  {
    id: 'ai-platform',
    title: 'AI Platform',
    description: 'A machine learning platform for data scientists with real-time collaboration features.',
    technologies: ['React', 'Python', 'TensorFlow', 'WebSocket'],
    imageUrl: 'https://images.unsplash.com/photo-1677442136019-21780ecad995',
    githubUrl: 'https://github.com',
    liveUrl: 'https://demo.com'
  },
  {
    id: 'blockchain-app',
    title: 'Blockchain Analytics',
    description: 'Real-time blockchain analytics dashboard with advanced visualization.',
    technologies: ['TypeScript', 'Web3.js', 'D3.js', 'Node.js'],
    imageUrl: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0',
    githubUrl: 'https://github.com'
  },
  {
    id: 'iot-dashboard',
    title: 'IoT Dashboard',
    description: 'IoT device management platform with real-time monitoring.',
    technologies: ['React', 'GraphQL', 'MQTT', 'AWS IoT'],
    imageUrl: 'https://images.unsplash.com/photo-1518770660439-4636190af475',
    liveUrl: 'https://demo.com'
  }
];