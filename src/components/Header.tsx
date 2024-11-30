import { Github, Linkedin, Mail } from 'lucide-react';

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-black via-gray-900 to-gray-800 bg-pattern p-6">
      <nav className="max-w-7xl mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold text-white">John Doe</h1>
        <div className="flex gap-6">
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300 transition-colors">
            <Github className="w-6 h-6" />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300 transition-colors">
            <Linkedin className="w-6 h-6" />
          </a>
          <a href="mailto:contact@example.com" className="text-white hover:text-gray-300 transition-colors">
            <Mail className="w-6 h-6" />
          </a>
        </div>
      </nav>
    </header>
  );
}