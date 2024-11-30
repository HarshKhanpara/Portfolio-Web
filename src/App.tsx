import { Route, Switch } from 'wouter';
import { AnimatePresence } from 'framer-motion';
import { Navigation } from './components/Navigation';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ProjectsPage } from './pages/ProjectsPage';
import { ContactPage } from './pages/ContactPage';
import { BlogPage } from './pages/BlogPage';
import { BlogPostPage } from './pages/BlogPostPage';
import { Header } from './components/Header';

function App() {
  return (
    <div className="bg-black min-h-screen">
      <Header />
      <Navigation />
      <AnimatePresence mode="wait">
        <Switch>
          <Route path="/" component={HomePage} />
          <Route path="/about" component={AboutPage} />
          <Route path="/projects" component={ProjectsPage} />
          <Route path="/blog" component={BlogPage} />
          <Route path="/blog/:slug" component={BlogPostPage} />
          <Route path="/contact" component={ContactPage} />
        </Switch>
      </AnimatePresence>
    </div>
  );
}

export default App;