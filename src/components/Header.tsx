import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, ShoppingBag, Search } from "lucide-react";

export const Header = ({ onNavigate, currentPage }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Close menu when navigating
  const handleNav = (page) => {
    onNavigate(page);
    setIsMenuOpen(false);
  };

  return (
    <>
      <header className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4 pointer-events-none">
        <nav className="bg-white/80 backdrop-blur-xl border border-white/40 shadow-xl shadow-black/5 rounded-full px-6 py-3 flex items-center gap-8 md:gap-12 pointer-events-auto">
          
          <div className="hidden md:flex items-center gap-2 font-medium text-sm text-gray-600">
            <button 
              onClick={() => handleNav("home")}
              className={`px-4 py-2 rounded-full transition-all ${currentPage === "home" ? "bg-black text-white" : "hover:text-black hover:bg-gray-100"}`}
            >
              Home
            </button>
            <button 
              onClick={() => handleNav("shop")}
              className={`px-4 py-2 rounded-full transition-all ${currentPage === "shop" ? "bg-black text-white" : "hover:text-black hover:bg-gray-100"}`}
            >
              Shop
            </button>
            <button 
              onClick={() => handleNav("contact")}
              className={`px-4 py-2 rounded-full transition-all ${currentPage === "contact" ? "bg-black text-white" : "hover:text-black hover:bg-gray-100"}`}
            >
              Contact
            </button>
          </div>

          <button 
            onClick={() => handleNav("home")}
            className="text-2xl font-black tracking-tight flex items-center gap-1"
          >
            <span className="w-8 h-8 bg-black rounded-full flex items-center justify-center text-white text-sm">H</span>
            Hampy.
          </button>

          <div className="hidden md:flex items-center gap-2">
             <button className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors">
              <Search size={20} />
            </button>
            <button className="w-10 h-10 flex items-center justify-center rounded-full bg-black text-white hover:bg-gray-800 transition-colors relative">
              <ShoppingBag size={18} />
              <span className="absolute top-0 right-0 w-3 h-3 bg-red-500 rounded-full border-2 border-white"></span>
            </button>
          </div>

          <button 
            className="md:hidden w-10 h-10 flex items-center justify-center rounded-full bg-black text-white"
            onClick={() => setIsMenuOpen(true)}
          >
            <Menu size={20} />
          </button>
        </nav>
      </header>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", bounce: 0, duration: 0.3 }}
            className="fixed inset-4 z-[100] bg-black text-white rounded-[2.5rem] p-8 flex flex-col pointer-events-auto shadow-2xl overflow-hidden"
          >
            <div className="flex flex-col h-full">
              <div className="flex justify-between items-center mb-8 flex-none">
                <span className="text-4xl font-black tracking-tight">Menu</span>
                <button 
                  onClick={() => setIsMenuOpen(false)}
                  className="w-14 h-14 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors active:scale-95"
                >
                  <X size={28} />
                </button>
              </div>
              
              <div className="flex flex-col justify-center gap-6 flex-1 min-h-0 overflow-y-auto pb-8">
                <button onClick={() => handleNav("home")} className="text-left font-black tracking-tighter hover:text-gray-400 transition-colors font-normal text-[32px]">Home</button>
                <button onClick={() => handleNav("shop")} className="text-left font-black tracking-tighter hover:text-gray-400 transition-colors text-[32px] font-normal">Shop</button>
                <button onClick={() => handleNav("contact")} className="text-left font-black tracking-tighter hover:text-gray-400 transition-colors text-[32px] font-normal">Contact</button>
                <button className="text-left font-black tracking-tighter hover:text-gray-400 transition-colors text-[32px] font-normal">Account</button>
                <button className="text-left font-black tracking-tighter hover:text-gray-400 transition-colors text-[32px] font-normal">Cart (3)</button>
              </div>

              <div className="pt-6 border-t border-white/10 flex justify-between items-center text-sm font-medium text-gray-400 flex-none">
                <span>© 2024 Hampy.</span>
                <div className="flex gap-4">
                  <span className="hover:text-white cursor-pointer">Insta</span>
                  <span className="hover:text-white cursor-pointer">Twitter</span>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
