import React from "react";
import { Check, Shield, Zap, Smile } from "lucide-react";

export const Vibe = () => {
  return (
    <section className="py-20 px-4 md:px-8">
      <div className="container mx-auto bg-[#F2F0EB] rounded-[3rem] p-8 md:p-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <span className="bg-black text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wide">The Vibe Check</span>
            <h2 className="text-4xl md:text-6xl font-black tracking-tight mt-6 mb-8">
              Why we are <br /> 
              <span className="italic">kinda</span> different.
            </h2>
            <p className="text-lg text-gray-600 font-medium leading-relaxed mb-8">
              Most gift baskets feel like they were bought at a gas station. Ours feel like they were curated by your coolest friend who knows all the hidden gems.
            </p>
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: Zap, label: "Super Fast" },
                { icon: Shield, label: "Secure" },
                { icon: Smile, label: "Guaranteed Joy" },
                { icon: Check, label: "Hand Picked" }
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 bg-white p-4 rounded-2xl shadow-sm">
                  <item.icon size={20} className="text-black" />
                  <span className="font-bold">{item.label}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-purple-400 h-64 rounded-[2rem] rounded-tl-[5rem]"></div>
            <div className="bg-yellow-400 h-48 rounded-[2rem] rounded-tr-[5rem] self-end"></div>
            <div className="bg-pink-400 h-48 rounded-[2rem] rounded-bl-[5rem]"></div>
            <div className="bg-blue-400 h-64 rounded-[2rem] rounded-br-[5rem]"></div>
          </div>
        </div>
      </div>
    </section>
  );
};
