export interface Challenge {
  pattern: string;
  hint: string;
  difficulty: 'easy' | 'medium' | 'hard';
  points: number;
  category: string;
  timeLimit?: number;
}

export interface Achievement {
  id: string;
  title: string;
  description: string;
  icon: string;
  condition: (stats: GameStats) => boolean;
  unlocked: boolean;
}

export interface GameStats {
  totalScore: number;
  solvedChallenges: number;
  perfectSolves: number;
  fastSolves: number;
  streak: number;
}