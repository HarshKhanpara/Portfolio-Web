import { useLocation } from 'wouter';
import { motion } from 'framer-motion';
import { Code2, Home, Mail, User, BookOpen } from 'lucide-react';

const links = [
  { path: '/', icon: Home, label: 'Home' },
  { path: '/about', icon: User, label: 'About' },
  { path: '/projects', icon: Code2, label: 'Projects' },
  { path: '/blog', icon: BookOpen, label: 'Blog' },
  { path: '/contact', icon: Mail, label: 'Contact' }
];

export function Navigation() {
  const [location, setLocation] = useLocation();

  return (
    <nav className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 bg-white/10 backdrop-blur-md rounded-full px-6 py-3">
      <ul className="flex gap-8">
        {links.map(({ path, icon: Icon, label }) => (
          <li key={path}>
            <button
              onClick={() => setLocation(path)}
              className={`relative flex flex-col items-center gap-1 text-sm ${
                location === path ? 'text-white' : 'text-white/60 hover:text-white/80'
              }`}
            >
              <Icon className="w-5 h-5" />
              <span className="text-xs">{label}</span>
              {location === path && (
                <motion.div
                  layoutId="active"
                  className="absolute -bottom-3 w-12 h-0.5 bg-white rounded-full"
                />
              )}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}