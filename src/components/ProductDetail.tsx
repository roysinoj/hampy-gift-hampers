import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowLeft, Star, Minus, Plus, ShoppingBag, Heart, Truck, ShieldCheck, Leaf } from "lucide-react";

export const ProductDetail = ({ product, onBack }) => {
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState("description");
  const [isLiked, setIsLiked] = useState(false);

  if (!product) return null;

  return (
    <div className="pt-32 pb-20 px-4 md:px-8 bg-[#f8f5f2] min-h-screen">
      <div className="container mx-auto">
        
        {/* Back Button */}
        <button 
          onClick={onBack}
          className="group flex items-center gap-2 font-bold text-gray-500 hover:text-black mb-8 transition-colors"
        >
          <div className="w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center group-hover:border-black transition-colors">
            <ArrowLeft size={20} />
          </div>
          Back to Shop
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          
          {/* Left Column: Images */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-4"
          >
            <div className="aspect-[4/5] bg-gray-200 rounded-[2.5rem] overflow-hidden relative">
              <img 
                src={product.image} 
                alt={product.title} 
                className="w-full h-full object-cover"
              />
              {product.tag && (
                <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-bold shadow-sm">
                  {product.tag}
                </div>
              )}
            </div>
            {/* Thumbnail Gallery (Mock) */}
            <div className="grid grid-cols-4 gap-4">
              {[...Array(4)].map((_, i) => (
                <div key={i} className={`aspect-square rounded-2xl overflow-hidden cursor-pointer border-2 ${i === 0 ? "border-black" : "border-transparent"}`}>
                  <img 
                    src={product.image} 
                    alt="Thumbnail" 
                    className="w-full h-full object-cover hover:opacity-80 transition-opacity"
                  />
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Column: Details */}
          <motion.div 
             initial={{ opacity: 0, x: 20 }}
             animate={{ opacity: 1, x: 0 }}
             transition={{ delay: 0.1 }}
          >
            <div className="flex justify-between items-start mb-4">
               <span className="text-gray-500 font-bold tracking-wider uppercase text-sm">{product.category}</span>
               <div className="flex items-center gap-1 text-sm font-bold bg-yellow-100 px-3 py-1 rounded-full">
                  <Star size={14} className="fill-yellow-500 text-yellow-500" />
                  {product.rating} (128 reviews)
                </div>
            </div>

            <h1 className="text-4xl md:text-6xl font-black tracking-tighter mb-4 leading-none">{product.title}</h1>
            <p className="text-3xl font-bold text-gray-900 mb-8">₹{product.price}</p>

            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              Experience the ultimate joy of gifting with our curated {product.title}. 
              Handpicked items that bring warmth, happiness, and a touch of luxury to any occasion. 
              Perfect for birthdays, anniversaries, or just because.
            </p>

            {/* Quantity & Actions */}
            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <div className="flex items-center bg-white border border-gray-200 rounded-full px-2 w-fit">
                <button 
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-10 h-10 flex items-center justify-center hover:bg-gray-100 rounded-full transition-colors"
                >
                  <Minus size={16} />
                </button>
                <span className="w-12 text-center font-bold text-lg">{quantity}</span>
                <button 
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-10 h-10 flex items-center justify-center hover:bg-gray-100 rounded-full transition-colors"
                >
                  <Plus size={16} />
                </button>
              </div>

              <button className="flex-1 bg-black text-white px-8 py-4 rounded-full font-bold text-lg flex items-center justify-center gap-2 hover:bg-gray-800 transition-all hover:scale-[1.02]">
                <ShoppingBag size={20} /> Add to Cart — ₹{product.price * quantity}
              </button>

              <button 
                onClick={() => setIsLiked(!isLiked)}
                className={`w-14 h-14 flex-shrink-0 border-2 rounded-full flex items-center justify-center transition-all ${isLiked ? "border-red-500 bg-red-50 text-red-500" : "border-gray-200 hover:border-black"}`}
              >
                <Heart size={24} className={isLiked ? "fill-current" : ""} />
              </button>
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-3 gap-4 mb-10">
              <div className="bg-white p-4 rounded-2xl flex flex-col items-center text-center gap-2 border border-gray-100">
                <Truck size={24} className="text-purple-500" />
                <span className="text-xs font-bold">Free Shipping</span>
              </div>
              <div className="bg-white p-4 rounded-2xl flex flex-col items-center text-center gap-2 border border-gray-100">
                <ShieldCheck size={24} className="text-green-500" />
                <span className="text-xs font-bold">Secure Pay</span>
              </div>
              <div className="bg-white p-4 rounded-2xl flex flex-col items-center text-center gap-2 border border-gray-100">
                <Leaf size={24} className="text-orange-500" />
                <span className="text-xs font-bold">Eco Friendly</span>
              </div>
            </div>

            {/* Tabs / Accordion */}
            <div className="border-t border-gray-200 pt-8">
              <div className="flex gap-8 border-b border-gray-200 pb-4 mb-6">
                {["description", "ingredients", "shipping"].map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`text-lg font-bold capitalize pb-4 relative transition-colors ${activeTab === tab ? "text-black" : "text-gray-400 hover:text-gray-600"}`}
                  >
                    {tab}
                    {activeTab === tab && (
                      <motion.div layoutId="underline" className="absolute bottom-0 left-0 right-0 h-0.5 bg-black" />
                    )}
                  </button>
                ))}
              </div>
              
              <div className="min-h-[100px] text-gray-600 leading-relaxed">
                {activeTab === "description" && (
                  <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                    This {product.title} is designed to bring a smile to anyone's face. 
                    Curated with the finest items, each component is selected for its quality and aesthetic appeal. 
                    The box itself is a keepsake, sturdy and beautifully designed.
                  </motion.p>
                )}
                {activeTab === "ingredients" && (
                  <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                    • Premium Arabica Coffee Beans<br/>
                    • 70% Dark Chocolate Bar<br/>
                    • Hand-poured Soy Candle (Vanilla Scent)<br/>
                    • Ceramic Mug<br/>
                    • Greeting Card
                  </motion.p>
                )}
                {activeTab === "shipping" && (
                  <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                    We ship worldwide! Orders are processed within 24 hours. 
                    Standard shipping takes 3-5 business days. Express delivery available at checkout.
                  </motion.p>
                )}
              </div>
            </div>

          </motion.div>
        </div>
      </div>
    </div>
  );
};
