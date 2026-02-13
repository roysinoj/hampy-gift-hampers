import React from "react";
import { motion } from "motion/react";
import { ArrowDown, Sparkles } from "lucide-react";

export const Hero = ({ onShopClick, onBuildClick }) => {
  return (
    <section className="relative pt-32 pb-20 px-4 md:px-8 min-h-[90vh] flex flex-col items-center justify-center overflow-hidden">
      
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
        <div className="absolute top-[10%] left-[5%] w-64 h-64 bg-purple-200 rounded-full blur-3xl opacity-60 animate-pulse"></div>
        <div className="absolute bottom-[20%] right-[10%] w-80 h-80 bg-yellow-200 rounded-full blur-3xl opacity-60 animate-pulse delay-700"></div>
        <div className="absolute top-[40%] left-[60%] w-72 h-72 bg-pink-200 rounded-full blur-3xl opacity-60 animate-pulse delay-300"></div>
      </div>

      <div className="container mx-auto text-center relative z-10">
        
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 bg-white border border-gray-200 shadow-lg shadow-purple-500/10 rounded-full px-6 py-3 mb-8"
        >
          <span className="animate-spin-slow">✨</span>
          <span className="font-bold text-sm tracking-wide">THE FUTURE OF GIFTING IS HERE</span>
          <span className="animate-spin-slow">✨</span>
        </motion.div>

        <h1 className="text-6xl md:text-9xl font-black tracking-tighter leading-[0.9] mb-8 relative">
          <motion.span
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="block"
          >
            LESS BORING.
          </motion.span>
          <motion.span
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-pink-500 to-yellow-500"
          >
            MORE GIVING.
          </motion.span>
          
          {/* Floating Sticker Images */}
          <motion.img
            src="https://images.unsplash.com/photo-1513201099705-a9746e1e201f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25mZXR0aSUyMGNlbGVicmF0aW9uJTIwYmFja2dyb3VuZCUyMHBhc3RlbHxlbnwxfHx8fDE3NzA4MzA4NDJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" // Confetti/Abstract
            alt="Sticker"
            className="hidden lg:block absolute -top-12 -left-12 w-32 h-32 rounded-2xl rotate-12 border-4 border-white shadow-xl object-cover"
            initial={{ scale: 0, rotate: 0 }}
            animate={{ scale: 1, rotate: -12 }}
            transition={{ delay: 0.4, type: "spring" }}
          />
           <motion.img
            src="https://images.unsplash.com/photo-1549465220-1a8b9238cd48?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwbGF5ZnVsJTIwZ2lmdCUyMGJveHxlbnwxfHx8fDE3NzA4MzA4NDJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" // Gift box
            alt="Sticker"
            className="hidden lg:block absolute top-0 -right-4 w-40 h-40 rounded-full border-4 border-white shadow-xl object-cover"
            initial={{ scale: 0, rotate: 0 }}
            animate={{ scale: 1, rotate: 12 }}
            transition={{ delay: 0.6, type: "spring" }}
          />
        </h1>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-xl md:text-2xl text-gray-500 font-medium max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Curated hampers that don't suck. 
          <br className="hidden md:block" />
          Hand-picked for the people you actually like.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <button 
            onClick={onBuildClick}
            className="w-full sm:w-auto bg-black text-white px-10 py-5 rounded-full font-bold text-lg hover:bg-gray-800 transition-all hover:scale-105 active:scale-95 shadow-xl shadow-black/20 flex items-center justify-center gap-2"
          >
            Build Your Own
          </button>
          <button 
            onClick={onShopClick}
            className="w-full sm:w-auto bg-white text-black border-2 border-gray-100 px-10 py-5 rounded-full font-bold text-lg hover:border-black transition-all hover:scale-105 active:scale-95"
          >
            Shop The Drop
          </button>
        </motion.div>

        {/* Floating Product Cards (Parallax-ish feel) */}
        <div className="relative w-full h-32 md:h-48 mt-16 max-w-5xl mx-auto">
           <motion.div 
             initial={{ y: 100, opacity: 0 }}
             animate={{ y: 0, opacity: 1 }}
             transition={{ delay: 0.5 }}
             className="absolute left-[5%] md:left-[10%] bottom-0 w-32 md:w-48 aspect-square bg-white p-2 rounded-3xl shadow-2xl rotate-[-6deg] z-10"
           >
             <img src="https://images.unsplash.com/photo-1512909006721-3d6018887383?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYW5ZcyUyMGhvbGRpbmclMjBjb2xvcmZ1bCUyMGdpZnQlMjBib3glMjBpc29sYXRlZHxlbnwxfHx8fDE3NzA4MzA4NDJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" className="w-full h-full object-cover rounded-2xl" alt="Mini 1" />
           </motion.div>

           <motion.div 
             initial={{ y: 100, opacity: 0 }}
             animate={{ y: 0, opacity: 1 }}
             transition={{ delay: 0.7 }}
             className="absolute right-[5%] md:right-[10%] bottom-4 w-40 md:w-56 aspect-square bg-white p-2 rounded-3xl shadow-2xl rotate-[6deg] z-10"
           >
             <img src="https://images.unsplash.com/photo-1513885535751-8b9238bd345a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdGFjayUyMG9mJTIwY29sb3JZnVsJTIwcHJlc2VudHMlMjBjcmVhdGl2ZXxlbnwxfHx8fDE3NzA4MzA4NDJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" className="w-full h-full object-cover rounded-2xl" alt="Mini 2" />
           </motion.div>

           <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.9, duration: 1, repeat: Infinity, repeatType: "reverse" }}
              className="absolute left-1/2 -translate-x-1/2 bottom-8"
           >
              <ArrowDown size={32} className="text-gray-300" />
           </motion.div>
        </div>

      </div>
    </section>
  );
};
