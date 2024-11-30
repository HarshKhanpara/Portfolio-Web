import { motion } from 'framer-motion';
import { FileDown } from 'lucide-react';

export function ResumeButton() {
  return (
    <motion.a
      href="/Harsh_Khanpara_resume.pdf"
      download="harsh_khanpara_resume.pdf"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="inline-flex items-center gap-2 px-5 py-3 bg-white/10 text-white rounded-full font-medium hover:bg-white/20 transition-colors"
    >
      <FileDown className="w-5 h-5" />
      Download Resume
    </motion.a>
  );
}