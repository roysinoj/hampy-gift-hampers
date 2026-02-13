import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";

interface LoadingScreenProps {
  onComplete: () => void;
}

export const LoadingScreen = ({ onComplete }: LoadingScreenProps) => {
  const [isPresent, setIsPresent] = useState(true);

  useEffect(() => {
    // Shorter duration: 1.2s total before starting exit
    const timer = setTimeout(() => {
      setIsPresent(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence mode="wait" onExitComplete={onComplete}>
      {isPresent && (
        <motion.div
          className="fixed inset-0 z-[9999] bg-[#f8f5f2] flex items-center justify-center"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
        >
          <div className="flex items-center gap-2">
            <motion.div
              className="w-10 h-10 bg-black rounded-full flex items-center justify-center text-white text-lg font-black"
              initial={{ scale: 0, rotate: -90 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 20,
                duration: 0.8,
              }}
            >
              H
            </motion.div>
            
            <motion.span
              className="text-2xl font-black tracking-tight"
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.4 }}
            >
              Hampy.
            </motion.span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
