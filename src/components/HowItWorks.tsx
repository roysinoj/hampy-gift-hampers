import React from "react";
import { motion } from "motion/react";
import { Coins, Gift, MessageCircle, ArrowRight } from "lucide-react";

const STEPS = [
  {
    id: "01",
    title: "Choose Budget",
    sub: "₹599 - ₹999",
    icon: Coins,
    color: "bg-yellow-400",
    iconColor: "text-black"
  },
  {
    id: "02",
    title: "Customize",
    sub: "Pick your items",
    icon: Gift,
    color: "bg-purple-400",
    iconColor: "text-black"
  },
  {
    id: "03",
    title: "Place Order",
    sub: "Via WhatsApp",
    icon: MessageCircle,
    color: "bg-green-500",
    iconColor: "text-black"
  }
];

export const HowItWorks = () => {
  return (
    <section className="py-8 px-4 md:px-8">
      <div className="container mx-auto bg-black text-white rounded-[3rem] p-8 md:p-16 relative overflow-hidden">
        
        {/* Subtle Background Glow */}
        <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-b from-gray-900/50 to-black pointer-events-none"></div>

        <div className="flex flex-col lg:flex-row items-center gap-16 relative z-10">
          
          {/* Header Section */}
          <div className="lg:w-1/4 text-center lg:text-left">
            <h2 className="text-4xl md:text-5xl font-black tracking-tighter mb-4 leading-none">
              How It <br className="hidden lg:block"/> Works
            </h2>
            <p className="text-gray-500 font-medium text-lg">
              Simple, fast, and personal.
            </p>
          </div>

          {/* Steps Horizontal List */}
          <div className="lg:w-3/4 w-full">
            <div className="flex flex-col md:flex-row gap-6">
              {STEPS.map((step, index) => (
                <div key={step.id} className="relative flex-1 group">
                  <div className="bg-[#1A1A1A] border border-white/5 p-8 rounded-[2rem] h-full hover:bg-[#222] transition-colors duration-300 flex flex-col items-start gap-6">
                    
                    {/* Icon Circle */}
                    <div className={`w-14 h-14 ${step.color} rounded-full flex items-center justify-center shadow-lg`}>
                      <step.icon size={24} className={step.iconColor} strokeWidth={2} />
                    </div>

                    {/* Step Number Pill */}
                    <div className="border border-white/10 px-3 py-1 rounded-full text-xs font-mono text-gray-400 bg-white/5">
                      {step.id}
                    </div>
                    
                    {/* Text Content */}
                    <div>
                      <h3 className="font-bold text-xl mb-1">{step.title}</h3>
                      <p className="text-gray-500 font-medium">{step.sub}</p>
                    </div>
                  </div>

                  {/* Connecting Arrow (Desktop Only) */}
                  {index < STEPS.length - 1 && (
                    <div className="hidden md:flex absolute -right-3 top-1/2 -translate-y-1/2 z-10 items-center justify-center w-8 h-8 text-gray-600">
                      <ArrowRight size={20} />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
