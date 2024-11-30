import { Challenge } from './types';

export const challenges: Challenge[] = [
  {
    pattern: 'const',
    hint: '_ _ _ _ _: Variable declaration keyword',
    difficulty: 'easy',
    points: 100,
    category: 'JavaScript Basics',
    timeLimit: 30
  },
  {
    pattern: 'async',
    hint: '_ _ _ _ _: Used for promises',
    difficulty: 'medium',
    points: 200,
    category: 'Async JavaScript',
    timeLimit: 25
  },
  {
    pattern: 'react',
    hint: '_ _ _ _ _: Popular UI library',
    difficulty: 'easy',
    points: 100,
    category: 'Web Frameworks',
    timeLimit: 20
  },
  {
    pattern: 'class',
    hint: '_ _ _ _ _: OOP building block',
    difficulty: 'easy',
    points: 100,
    category: 'JavaScript Basics',
    timeLimit: 20
  },
  {
    pattern: 'redux',
    hint: '_ _ _ _ _: State management',
    difficulty: 'medium',
    points: 150,
    category: 'Web Frameworks',
    timeLimit: 25
  },
  {
    pattern: 'fetch',
    hint: '_ _ _ _ _: API calls',
    difficulty: 'medium',
    points: 150,
    category: 'Web APIs',
    timeLimit: 20
  },
  {
    pattern: 'await',
    hint: '_ _ _ _ _: Promise resolver',
    difficulty: 'hard',
    points: 300,
    category: 'Async JavaScript',
    timeLimit: 15
  },
  {
    pattern: 'proxy',
    hint: '_ _ _ _ _: Object wrapper',
    difficulty: 'hard',
    points: 300,
    category: 'Advanced JavaScript',
    timeLimit: 20
  }
];