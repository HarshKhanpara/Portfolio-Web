import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Terminal, Check, X, RefreshCcw, Trophy, Zap } from 'lucide-react';
import { challenges } from './challenges';
import { achievements } from './achievements';
import { Timer } from './Timer';
import { AchievementPopup } from './AchievementPopup';
import type { Achievement, GameStats } from './types';

export function CodeGame() {
  const [currentChallenge, setCurrentChallenge] = useState(challenges[0]);
  const [input, setInput] = useState('');
  const [attempts, setAttempts] = useState(0);
  const [solved, setSolved] = useState(false);
  const [showGame, setShowGame] = useState(false);
  const [gameStats, setGameStats] = useState<GameStats>({
    totalScore: 0,
    solvedChallenges: 0,
    perfectSolves: 0,
    fastSolves: 0,
    streak: 0
  });
  const [unlockedAchievement, setUnlockedAchievement] = useState<Achievement | null>(null);
  const [startTime, setStartTime] = useState<number | null>(null);

  useEffect(() => {
    if (showGame && !startTime) {
      setStartTime(Date.now());
    }
  }, [showGame]);

  const checkAchievements = () => {
    achievements.forEach(achievement => {
      if (!achievement.unlocked && achievement.condition(gameStats)) {
        achievement.unlocked = true;
        setUnlockedAchievement(achievement);
        setTimeout(() => setUnlockedAchievement(null), 3000);
      }
    });
  };

  const checkCode = () => {
    if (input.toLowerCase() === currentChallenge.pattern) {
      const timeTaken = startTime ? (Date.now() - startTime) / 1000 : 0;
      const perfectSolve = attempts === 0;
      const fastSolve = timeTaken < 10;
      
      setSolved(true);
      setGameStats(prev => ({
        totalScore: prev.totalScore + currentChallenge.points,
        solvedChallenges: prev.solvedChallenges + 1,
        perfectSolves: perfectSolve ? prev.perfectSolves + 1 : prev.perfectSolves,
        fastSolves: fastSolve ? prev.fastSolves + 1 : prev.fastSolves,
        streak: perfectSolve ? prev.streak + 1 : 0
      }));
      
      checkAchievements();
    } else {
      setAttempts(attempts + 1);
      setGameStats(prev => ({ ...prev, streak: 0 }));
    }
  };

  const nextChallenge = () => {
    const currentIndex = challenges.findIndex(c => c.pattern === currentChallenge.pattern);
    if (currentIndex < challenges.length - 1) {
      setCurrentChallenge(challenges[currentIndex + 1]);
      setInput('');
      setAttempts(0);
      setSolved(false);
      setStartTime(Date.now());
    } else {
      setShowGame(false);
    }
  };

  const resetGame = () => {
    setCurrentChallenge(challenges[0]);
    setInput('');
    setAttempts(0);
    setSolved(false);
    setGameStats({
      totalScore: 0,
      solvedChallenges: 0,
      perfectSolves: 0,
      fastSolves: 0,
      streak: 0
    });
    setStartTime(Date.now());
    setShowGame(true);
  };

  const handleTimeout = () => {
    setAttempts(attempts + 1);
    setGameStats(prev => ({ ...prev, streak: 0 }));
  };

  return (
    <div className="w-full max-w-6xl mx-auto px-6 py-24">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="text-center mb-8"
      >
        <Terminal className="w-12 h-12 mx-auto mb-4 text-white" />
        <h2 className="text-3xl font-bold text-white mb-2">Code Breaking Challenge</h2>
        <p className="text-white/60 mb-6">Test your coding knowledge</p>
        {!showGame && (
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={resetGame}
            className="px-6 py-3 bg-white text-black rounded-lg font-medium hover:bg-white/90"
          >
            Start Challenge
          </motion.button>
        )}
      </motion.div>

      <AnimatePresence mode="wait">
        {showGame && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="max-w-md mx-auto"
          >
            <div className="bg-white/5 rounded-xl p-8">
              <div className="flex justify-between items-center mb-4">
                <div className="flex items-center gap-2">
                  <span className="text-white/60">Level {challenges.findIndex(c => c === currentChallenge) + 1}</span>
                  <span className={`px-2 py-1 rounded text-xs ${
                    currentChallenge.difficulty === 'easy' ? 'bg-green-500' :
                    currentChallenge.difficulty === 'medium' ? 'bg-yellow-500' :
                    'bg-red-500'
                  }`}>
                    {currentChallenge.difficulty.toUpperCase()}
                  </span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-1">
                    <Trophy className="w-4 h-4 text-yellow-500" />
                    <span className="text-white">{gameStats.totalScore}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Zap className="w-4 h-4 text-blue-500" />
                    <span className="text-white">x{gameStats.streak}</span>
                  </div>
                </div>
              </div>

              {currentChallenge.timeLimit && (
                <Timer
                  duration={currentChallenge.timeLimit}
                  onTimeout={handleTimeout}
                  isRunning={!solved}
                />
              )}
              
              <div className="my-6">
                <span className="text-white/60 text-sm">{currentChallenge.category}</span>
                <p className="text-xl text-white mt-2">{currentChallenge.hint}</p>
              </div>
              
              <div className="flex gap-4 mb-6">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && !solved && checkCode()}
                  disabled={solved}
                  className="flex-1 px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:border-white/40"
                  placeholder="Enter code..."
                />
                {!solved ? (
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={checkCode}
                    className="px-6 py-2 bg-white text-black rounded-lg font-medium hover:bg-white/90"
                  >
                    Check
                  </motion.button>
                ) : (
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={nextChallenge}
                    className="px-6 py-2 bg-green-500 text-white rounded-lg font-medium hover:bg-green-600"
                  >
                    Next
                  </motion.button>
                )}
              </div>

              {attempts > 0 && !solved && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="flex items-center gap-2 text-red-400"
                >
                  <X className="w-4 h-4" />
                  <span>Try again! Attempts: {attempts}</span>
                </motion.div>
              )}

              {solved && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="flex items-center gap-2 text-green-400"
                >
                  <Check className="w-4 h-4" />
                  <span>Great job! +{currentChallenge.points} points</span>
                </motion.div>
              )}
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={resetGame}
              className="mt-6 px-6 py-3 mx-auto flex items-center gap-2 text-white/60 hover:text-white"
            >
              <RefreshCcw className="w-4 h-4" />
              Reset Game
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>

      <AchievementPopup achievement={unlockedAchievement} />
    </div>
  );
}