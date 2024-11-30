import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Terminal, Check, X, RefreshCcw } from 'lucide-react';

const CODES = [
  { pattern: 'const', hint: '_ _ _ _ _: Variable declaration keyword' },
  { pattern: 'async', hint: '_ _ _ _ _: Used for promises' },
  { pattern: 'react', hint: '_ _ _ _ _: Popular UI library' },
  { pattern: 'props', hint: '_ _ _ _ _: Component parameters' },
  { pattern: 'state', hint: '_ _ _ _ _: Component data' }
];

export function CodeGame() {
  const [currentCode, setCurrentCode] = useState(CODES[0]);
  const [input, setInput] = useState('');
  const [attempts, setAttempts] = useState(0);
  const [solved, setSolved] = useState(false);
  const [showGame, setShowGame] = useState(false);
  const [score, setScore] = useState(0);

  const checkCode = () => {
    if (input.toLowerCase() === currentCode.pattern) {
      setSolved(true);
      setScore(score + 1);
    } else {
      setAttempts(attempts + 1);
    }
  };

  const nextPuzzle = () => {
    const nextIndex = CODES.findIndex(code => code.pattern === currentCode.pattern) + 1;
    if (nextIndex < CODES.length) {
      setCurrentCode(CODES[nextIndex]);
      setInput('');
      setAttempts(0);
      setSolved(false);
    } else {
      setShowGame(false);
    }
  };

  const resetGame = () => {
    setCurrentCode(CODES[0]);
    setInput('');
    setAttempts(0);
    setSolved(false);
    setScore(0);
    setShowGame(true);
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
              <div className="flex justify-between items-center mb-6">
                <span className="text-white/60">Puzzle {CODES.findIndex(code => code.pattern === currentCode.pattern) + 1}/{CODES.length}</span>
                <span className="text-white/60">Score: {score}</span>
              </div>
              
              <p className="text-xl text-white mb-6">{currentCode.hint}</p>
              
              <div className="flex gap-4 mb-6">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
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
                    onClick={nextPuzzle}
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
                  <span>Great job! Code cracked!</span>
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
    </div>
  );
}