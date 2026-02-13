import React, { useState } from "react";
import { motion } from "motion/react";
import { ArrowRight, Star, Sparkles, Zap, Crown, CheckCircle2 } from "lucide-react";

const BUDGET_TIERS = [
  {
    id: 1,
    price: 199,
    label: "Starter",
    tagline: "Small gestures, big smiles.",
    items: "1–2 Items",
    idealFor: "Return Gifts",
    features: ["Perfect for bulk orders", "Cute packaging", "Quick delivery"],
    icon: Zap,
    color: "bg-blue-500",
    lightColor: "bg-blue-50 text-blue-600",
    hoverBorder: "group-hover:border-blue-500"
  },
  {
    id: 2,
    price: 799,
    label: "Popular",
    tagline: "The crowd favorite choice.",
    items: "6–7 Items",
    idealFor: "Birthdays & Weddings",
    features: ["Highly customizable", "Premium unboxing", "Best value for money"],
    popular: true,
    icon: Star,
    color: "bg-purple-500",
    lightColor: "bg-purple-50 text-purple-600",
    hoverBorder: "group-hover:border-purple-500"
  },
  {
    id: 3,
    price: 888,
    label: "Premium",
    tagline: "Elegant and thoughtfully curated.",
    items: "5–6 Items",
    idealFor: "Corporate",
    features: ["Sophisticated items", "Branding options", "Priority support"],
    icon: Sparkles,
    color: "bg-orange-500",
    lightColor: "bg-orange-50 text-orange-600",
    hoverBorder: "group-hover:border-orange-500"
  },
  {
    id: 4,
    price: 999,
    label: "Luxury",
    tagline: "The ultimate gifting experience.",
    items: "8–10 Items",
    idealFor: "VIPs & Specials",
    features: ["Luxury brands", "Handwritten note", "Exclusive packaging"],
    icon: Crown,
    color: "bg-green-500",
    lightColor: "bg-green-50 text-green-600",
    hoverBorder: "group-hover:border-green-500"
  }
];

export const BudgetSelection = ({ onSelectBudget }) => {
  const [hoveredId, setHoveredId] = useState(null);

  return (
    <section id="budget-selection" className="py-24 px-4 md:px-8 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-full bg-[#f8f5f2] -z-10"></div>
      <div className="absolute top-40 right-0 w-96 h-96 bg-purple-200/30 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute bottom-20 left-0 w-96 h-96 bg-yellow-200/30 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="container mx-auto">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div className="max-w-2xl">
            <h2 className="text-5xl md:text-7xl font-black tracking-tighter mb-6 leading-[0.9]">
              Gift by <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-pink-500 to-yellow-500">Budget.</span>
            </h2>
            <p className="text-xl text-gray-500 font-medium max-w-lg">
              Smart gifting starts here. Pick a price point, and we'll curate the perfect hamper for you.
            </p>
          </div>
          
          <div className="hidden md:block">
            <button className="flex items-center gap-2 font-bold border-b-2 border-black pb-1 hover:text-purple-600 hover:border-purple-600 transition-colors">
              View Custom Options <ArrowRight size={18} />
            </button>
          </div>
        </div>

        {/* Cards Container */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
          {BUDGET_TIERS.map((tier) => (
            <motion.div
              key={tier.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: tier.id * 0.1 }}
              onMouseEnter={() => setHoveredId(tier.id)}
              onMouseLeave={() => setHoveredId(null)}
              onClick={() => onSelectBudget && onSelectBudget(tier.price)}
              className={`
                group relative flex flex-col justify-between p-8 rounded-[2.5rem] cursor-pointer
                transition-all duration-500 ease-out border-2
                ${tier.popular 
                  ? "bg-black text-white border-black shadow-2xl scale-[1.02] md:-translate-y-4" 
                  : "bg-white text-black border-transparent hover:border-gray-200 hover:shadow-xl hover:-translate-y-2"
                }
              `}
            >
              {/* Floating "Popular" Badge */}
              {tier.popular && (
                <div className="absolute -top-4 left-8 bg-gradient-to-r from-purple-500 via-pink-500 to-yellow-500 text-white px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest shadow-lg">
                  Most Loved
                </div>
              )}

              {/* Top Section */}
              <div className="mb-10">
                <div className="flex justify-between items-start mb-6">
                  <div className={`w-14 h-14 rounded-2xl flex items-center justify-center transition-transform duration-500 group-hover:scale-110 ${tier.popular ? "bg-white/10 text-white" : tier.lightColor}`}>
                    <tier.icon size={28} strokeWidth={2} />
                  </div>
                  {tier.popular && <Star className="fill-yellow-400 text-yellow-400 animate-pulse" size={24} />}
                </div>

                <h3 className={`font-bold uppercase tracking-wider text-sm mb-2 ${tier.popular ? "text-gray-400" : "text-gray-400"}`}>
                  {tier.label}
                </h3>
                <div className="flex items-start gap-1 mb-4">
                   <span className="text-2xl font-bold mt-2">₹</span>
                   <span className="text-7xl font-black tracking-tighter leading-none">{tier.price}</span>
                </div>
                <p className={`font-medium text-lg leading-snug ${tier.popular ? "text-gray-300" : "text-gray-600"}`}>
                  {tier.tagline}
                </p>
              </div>

              {/* Features List */}
              <div className="space-y-4 mb-10 flex-grow">
                {tier.features.map((feature, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle2 size={18} className={tier.popular ? "text-green-400" : "text-green-500"} />
                    <span className={`font-medium text-sm ${tier.popular ? "text-gray-300" : "text-gray-600"}`}>
                      {feature}
                    </span>
                  </div>
                ))}
              </div>

              {/* Action Button */}
              <div className="mt-auto">
                <button className={`w-full py-4 rounded-xl font-bold text-sm transition-all duration-300 flex items-center justify-center gap-2
                  ${tier.popular 
                    ? "bg-white text-black hover:bg-gray-100" 
                    : "bg-black text-white hover:bg-gray-800 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0"
                  }
                `}>
                  Choose Plan <ArrowRight size={16} />
                </button>
                
                {/* Fallback button state for mobile/touch where hover isn't primary */}
                {!tier.popular && (
                  <div className="md:hidden w-full py-4 rounded-xl font-bold text-sm bg-black text-white flex items-center justify-center gap-2 mt-[-56px]">
                     Choose Plan <ArrowRight size={16} />
                  </div>
                )}
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
