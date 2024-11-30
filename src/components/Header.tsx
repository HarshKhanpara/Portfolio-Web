import { Github, Linkedin, Mail } from 'lucide-react';
import { Link, useLocation } from 'wouter';
import { ResumeButton } from './ResumeButton';

export function Header() {
  const [_, setLocation] = useLocation();
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-black via-gray-900 to-gray-800 bg-pattern p-6">
      <nav className="max-w-7xl mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold text-white cursor-pointer" onClick={() => setLocation('/')}>Harsh Khanpara</h1>
        <div className="flex items-center gap-6">
        <div className="hidden sm:block">
            <ResumeButton />
          </div>
          <a href="https://github.com/HarshKhanpara" target="_blank" className="text-white hover:text-gray-300 transition-colors">
            <Github className="w-6 h-6" />
          </a>
          <a href="https://www.linkedin.com/in/harsh-khanpara" target="_blank" className="text-white hover:text-gray-300 transition-colors">
            <Linkedin className="w-6 h-6" />
          </a>
          <a href="mailto:khanparaharsh779@gmail.com" className="text-white hover:text-gray-300 transition-colors">
            <Mail className="w-6 h-6" />
          </a>
        </div>
      </nav>
    </header>
  );
}