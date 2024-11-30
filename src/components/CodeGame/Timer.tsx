import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface TimerProps {
  duration: number;
  onTimeout: () => void;
  isRunning: boolean;
}

export function Timer({ duration, onTimeout, isRunning }: TimerProps) {
  const [timeLeft, setTimeLeft] = useState(duration);

  useEffect(() => {
    if (!isRunning) return;
    
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          onTimeout();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [isRunning, onTimeout]);

  useEffect(() => {
    setTimeLeft(duration);
  }, [duration]);

  return (
    <div className="relative w-full h-2 bg-white/10 rounded-full overflow-hidden">
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-green-400 to-blue-500"
        initial={{ width: '100%' }}
        animate={{ width: `${(timeLeft / duration) * 100}%` }}
        transition={{ duration: 1, ease: 'linear' }}
      />
    </div>
  );
}