import { motion, AnimatePresence } from 'framer-motion';
import { Achievement } from './types';

interface AchievementPopupProps {
  achievement: Achievement | null;
}

export function AchievementPopup({ achievement }: AchievementPopupProps) {
  if (!achievement) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -50 }}
        className="fixed bottom-8 right-8 bg-gradient-to-r from-purple-500 to-pink-500 text-white p-4 rounded-lg shadow-lg"
      >
        <div className="flex items-center gap-4">
          <achievement.icon className="w-8 h-8" />
          <div>
            <h4 className="font-bold">{achievement.title}</h4>
            <p className="text-sm opacity-90">{achievement.description}</p>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}