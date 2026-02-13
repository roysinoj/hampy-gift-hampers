import React from "react";
import { motion } from "motion/react";
import { Sparkles } from "lucide-react";

export const Marquee = () => {
  return (
    <div className="py-8 bg-black rotate-1 my-12 overflow-hidden">
      <motion.div 
        className="flex gap-12 text-white text-2xl md:text-4xl font-bold uppercase tracking-wide whitespace-nowrap items-center"
        animate={{ x: [0, -1000] }}
        transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
      >
        <span>Free Shipping on Orders $100+</span>
        <Sparkles size={32} className="text-yellow-400" />
        <span>Next Day Delivery Available</span>
        <Sparkles size={32} className="text-pink-400" />
        <span>Curated by Humans</span>
        <Sparkles size={32} className="text-purple-400" />
        <span>Sustainable Packaging</span>
        <Sparkles size={32} className="text-green-400" />
        <span>Free Shipping on Orders $100+</span>
        <Sparkles size={32} className="text-yellow-400" />
        <span>Next Day Delivery Available</span>
        <Sparkles size={32} className="text-pink-400" />
      </motion.div>
    </div>
  );
};
