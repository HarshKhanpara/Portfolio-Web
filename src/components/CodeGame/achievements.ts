import { Achievement, GameStats } from './types';
import { Trophy, Zap, Target, Fire, Star } from 'lucide-react';

export const achievements: Achievement[] = [
  {
    id: 'first-solve',
    title: 'First Steps',
    description: 'Solve your first challenge',
    icon: Trophy,
    condition: (stats: GameStats) => stats.solvedChallenges >= 1,
    unlocked: false
  },
  {
    id: 'perfect-streak',
    title: 'Perfect Precision',
    description: 'Solve 3 challenges without any mistakes',
    icon: Target,
    condition: (stats: GameStats) => stats.perfectSolves >= 3,
    unlocked: false
  },
  {
    id: 'speed-demon',
    title: 'Speed Demon',
    description: 'Solve a challenge in under 10 seconds',
    icon: Zap,
    condition: (stats: GameStats) => stats.fastSolves >= 1,
    unlocked: false
  },
  {
    id: 'master-coder',
    title: 'Master Coder',
    description: 'Reach a score of 1000 points',
    icon: Star,
    condition: (stats: GameStats) => stats.totalScore >= 1000,
    unlocked: false
  },
  {
    id: 'hot-streak',
    title: 'On Fire',
    description: 'Maintain a streak of 5 correct answers',
    icon: Fire,
    condition: (stats: GameStats) => stats.streak >= 5,
    unlocked: false
  }
];