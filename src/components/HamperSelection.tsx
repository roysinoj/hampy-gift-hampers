import React from "react";
import { motion } from "motion/react";
import { ArrowLeft, Check, Sparkles, Leaf, ShoppingBag } from "lucide-react";

const HAMPERS = [
  {
    id: "wicker",
    title: "Wicker Basket",
    price: 300,
    tag: "Popular",
    material: "Natural Wicker",
    description: "Classic, rustic charm. Reusable and sturdy.",
    icon: ShoppingBag,
    image: "https://images.unsplash.com/photo-1761342528497-904c34a88890?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3aWNrZXIlMjBwaWNuaWMlMjBiYXNrZXQlMjBlbXB0eXxlbnwxfHx8fDE3NzA5NzM1NzV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    color: "bg-orange-100",
    textColor: "text-orange-700"
  },
  {
    id: "premium-cloth",
    title: "Premium Cloth Bag",
    price: 150,
    tag: "Eco",
    material: "Heavy Canvas",
    description: "Elegant and sustainable. Perfect for reuse.",
    icon: Sparkles,
    image: "https://images.unsplash.com/photo-1677753727712-c79ce4c420c1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcmVtaXVtJTIwY2FudmFzJTIwdG90ZSUyMGJhZyUyMGdpZnR8ZW58MXx8fHwxNzcwOTczNTc1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    color: "bg-green-100",
    textColor: "text-green-700"
  },
  {
    id: "budget-cloth",
    title: "Budget Cloth Bag",
    price: 19,
    tag: "Eco",
    material: "Light Cotton",
    description: "Simple, effective, and budget-friendly.",
    icon: Leaf,
    image: "https://images.unsplash.com/photo-1621357366416-3e754e1a3d8b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3R0b24lMjBkcmF3c3RyaW5nJTIwZ2lmdCUyMGJhZ3xlbnwxfHx8fDE3NzA5NzM1NzV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    color: "bg-blue-100",
    textColor: "text-blue-700"
  }
];

export const HamperSelection = ({ onSelectHamper, onBack }) => {
  return (
    <div className="min-h-screen bg-[#f8f5f2] pt-32 pb-20 px-4 md:px-8">
      <div className="container mx-auto">
        
        {/* Header */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <button 
            onClick={onBack}
            className="inline-flex items-center gap-2 text-gray-500 font-bold hover:text-black mb-8 transition-colors"
          >
            <ArrowLeft size={20} /> Back to Budget
          </button>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-black tracking-tighter mb-6"
          >
            Pick Your Style
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-gray-500 font-medium"
          >
            Choose how you want your gifts to be presented.
          </motion.p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {HAMPERS.map((hamper, index) => (
            <motion.div
              key={hamper.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              onClick={() => onSelectHamper(hamper)}
              className="group relative bg-white rounded-[2.5rem] overflow-hidden cursor-pointer hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-black"
            >
              {/* Image Area */}
              <div className="h-64 overflow-hidden relative">
                <img 
                  src={hamper.image} 
                  alt={hamper.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-300"></div>
                
                {/* Tag */}
                <div className="absolute top-6 left-6">
                  <span className={`px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-white/90 backdrop-blur shadow-sm ${hamper.id === 'wicker' ? 'text-orange-600' : 'text-green-600'}`}>
                    {hamper.tag}
                  </span>
                </div>
              </div>

              {/* Content Area */}
              <div className="p-8">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-2xl font-bold tracking-tight mb-1">{hamper.title}</h3>
                    <p className="text-gray-400 font-medium text-sm">{hamper.material}</p>
                  </div>
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center ${hamper.color} ${hamper.textColor}`}>
                    <hamper.icon size={20} />
                  </div>
                </div>

                <p className="text-gray-600 mb-8 leading-relaxed h-12">
                  {hamper.description}
                </p>

                <div className="flex items-center justify-between border-t border-gray-100 pt-6">
                  <div>
                    <span className="block text-xs font-bold text-gray-400 uppercase tracking-wider">Added Cost</span>
                    <span className="text-2xl font-black text-black">+₹{hamper.price}</span>
                  </div>
                  
                  <div className="w-12 h-12 rounded-full bg-black text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transform translate-x-4 group-hover:translate-x-0 transition-all duration-300">
                    <Check size={24} />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </div>
  );
};
