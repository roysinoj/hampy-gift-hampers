import React from "react";
import { Instagram, Twitter, Facebook } from "lucide-react";

export const Footer = ({ onNavigate }) => {
  return (
    <footer className="px-4 md:px-8 pb-8">
      <div className="bg-black text-white rounded-[3rem] py-16 px-8 md:px-16 overflow-hidden relative">
        <div className="container mx-auto relative z-10">
          <div className="grid md:grid-cols-12 gap-12 mb-20">
            <div className="md:col-span-5">
              <h2 className="text-4xl font-black tracking-tight mb-6">Stay in the loop.</h2>
              <p className="text-gray-400 mb-8 max-w-sm">
                Get 10% off your first order and be the first to know about new drops. No spam, we promise.
              </p>
              <div className="flex gap-2">
                <input 
                  type="email" 
                  placeholder="your@email.com" 
                  className="bg-white/10 border border-white/10 rounded-full px-6 py-4 flex-1 focus:outline-none focus:bg-white/20 transition-colors"
                />
                <button className="bg-white text-black rounded-full px-8 font-bold hover:bg-gray-200 transition-colors">
                  Join
                </button>
              </div>
            </div>
            
            <div className="md:col-span-2 md:col-start-8">
              <h4 className="font-bold mb-6 text-gray-500">Shop</h4>
              <ul className="space-y-4 font-medium">
                <li><a href="#" className="hover:text-gray-300">New Arrivals</a></li>
                <li><a href="#" className="hover:text-gray-300">Bestsellers</a></li>
                <li><a href="#" className="hover:text-gray-300">Corporate</a></li>
                <li><a href="#" className="hover:text-gray-300">Sale</a></li>
              </ul>
            </div>

            <div className="md:col-span-2">
              <h4 className="font-bold mb-6 text-gray-500">Help</h4>
              <ul className="space-y-4 font-medium">
                <li><a href="#" className="hover:text-gray-300">FAQ</a></li>
                <li><a href="#" className="hover:text-gray-300">Shipping</a></li>
                <li><a href="#" className="hover:text-gray-300">Returns</a></li>
                <li><button onClick={() => onNavigate && onNavigate("contact")} className="hover:text-gray-300 text-left w-full">Contact</button></li>
              </ul>
            </div>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center gap-8 border-t border-white/10 pt-8">
            <div className="text-[5rem] md:text-[8rem] font-black leading-none tracking-tighter opacity-20 hover:opacity-100 transition-opacity cursor-default select-none">
              HAMPY.
            </div>
            <div className="flex gap-4">
              <a href="#" className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center hover:bg-white hover:text-black transition-all">
                <Instagram size={20} />
              </a>
              <a href="#" className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center hover:bg-white hover:text-black transition-all">
                <Twitter size={20} />
              </a>
              <a href="#" className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center hover:bg-white hover:text-black transition-all">
                <Facebook size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Decorative Gradient Background */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-purple-900/40 to-transparent pointer-events-none"></div>
      </div>
    </footer>
  );
};
