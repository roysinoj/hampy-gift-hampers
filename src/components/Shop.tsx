import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Search, SlidersHorizontal, ArrowDown, Heart, Star, ShoppingBag } from "lucide-react";

export const PRODUCTS = [
  {
    id: 1,
    title: "Morning Brew Kit",
    price: 1299,
    category: "Beverages",
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1563985031263-6692d3817079?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2ZmZWUlMjBicmV3aW5nJTIwa2l0JTIwZ2lmdHxlbnwxfHx8fDE3NzA4MzExMDh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    tag: "Best Seller"
  },
  {
    id: 2,
    title: "Zen Garden Box",
    price: 899,
    category: "Plants",
    rating: 4.5,
    image: "https://images.unsplash.com/photo-1613568466225-392f7c272664?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdWNjdWxlbnQlMjBwbGFudCUyMGdpZnQlMjBib3h8ZW58MXx8fHwxNzcwODMxMTA4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    tag: "Eco Friendly"
  },
  {
    id: 3,
    title: "The Executive",
    price: 2499,
    category: "Stationery",
    rating: 5.0,
    image: "https://images.unsplash.com/photo-1608828201317-ce72715cb12a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBzdGF0aW9uZXJ5JTIwZ2lmdCUyMHNldHxlbnwxfHx8fDE3NzA4MzExMDh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    tag: "Luxury"
  },
  {
    id: 4,
    title: "Sweet Indulgence",
    price: 1599,
    category: "Food",
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1679143121492-820c69266ab8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcnRpc2FuYWwlMjBjaG9jb2xhdGUlMjBoYW1wZXJ8ZW58MXx8fHwxNzcwODMxMTA4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    tag: "Trending"
  },
  {
    id: 5,
    title: "Mixologist Kit",
    price: 3299,
    category: "Beverages",
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1671061782914-1277d9fc2a74?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2NrdGFpbCUyMG1ha2luZyUyMGtpdCUyMGdpZnR8ZW58MXx8fHwxNzcwODMxMTA4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    tag: null
  },
  {
    id: 6,
    title: "Tea Ceremony",
    price: 1899,
    category: "Beverages",
    rating: 4.6,
    image: "https://images.unsplash.com/photo-1758506041168-0cd81e706a6f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWElMjBsb3ZlciUyMGdpZnQlMjBzZXR8ZW58MXx8fHwxNzcwODMxMTA4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    tag: "New"
  },
  {
    id: 7,
    title: "Savory Delights",
    price: 1199,
    category: "Food",
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1711837690911-3a8d8262053b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnb3VybWV0JTIwc25hY2slMjBnaWZ0JTIwYm94fGVufDF8fHx8MTc3MDgzMTEwOHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    tag: null
  },
  {
    id: 8,
    title: "Self Care Sunday",
    price: 2199,
    category: "Wellness",
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1515377905703-c4788e51af15?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcGElMjBnaWZ0JTIwc2V0JTIwZmxhdCUyMGxheXxlbnwxfHx8fDE3NzA4Mjk1NjN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    tag: "Popular"
  }
];

const CATEGORIES = ["All", "Beverages", "Food", "Wellness", "Plants", "Stationery"];

export const Shop = ({ onProductClick }) => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProducts = activeCategory === "All" 
    ? PRODUCTS 
    : PRODUCTS.filter(p => p.category === activeCategory);

  return (
    <div className="pt-32 pb-20 px-4 md:px-8 bg-[#f8f5f2] min-h-screen">
      <div className="container mx-auto">
        
        {/* Header Area */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12">
          <div>
            <h1 className="text-5xl md:text-7xl font-black tracking-tighter mb-4">All Hampers</h1>
            <p className="text-gray-500 font-medium text-lg max-w-md">
              Explore our hand-picked collection of gifts that make you look like a thoughtful genius.
            </p>
          </div>
          
          <div className="flex gap-4">
             <div className="relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                <input 
                  type="text" 
                  placeholder="Search gifts..." 
                  className="pl-12 pr-6 py-3 rounded-full border border-gray-200 focus:outline-none focus:border-black bg-white w-full md:w-64"
                />
             </div>
             <button className="w-12 h-12 bg-white rounded-full border border-gray-200 flex items-center justify-center hover:bg-black hover:text-white transition-colors">
                <SlidersHorizontal size={20} />
             </button>
          </div>
        </div>

        {/* Categories */}
        <div className="flex gap-3 overflow-x-auto pb-8 scrollbar-hide mb-8">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-3 rounded-full font-bold whitespace-nowrap transition-all ${
                activeCategory === cat 
                  ? "bg-black text-white" 
                  : "bg-white text-gray-500 hover:bg-gray-100"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProducts.map((product) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                key={product.id}
                className="group relative"
              >
                {/* Image Container */}
                <div className="relative aspect-[4/5] bg-gray-200 rounded-[2.5rem] overflow-hidden mb-4 cursor-pointer" onClick={() => onProductClick(product)}>
                  <img 
                    src={product.image} 
                    alt={product.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  
                  {/* Overlay Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                  {/* Top Tags */}
                  {product.tag && (
                    <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold shadow-sm">
                      {product.tag}
                    </div>
                  )}
                  <button className="absolute top-4 right-4 bg-white/50 backdrop-blur-md p-2 rounded-full hover:bg-white text-red-500 transition-all hover:scale-110">
                    <Heart size={20} />
                  </button>

                  {/* Hover Add to Cart */}
                  <div className="absolute bottom-4 left-4 right-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <button className="w-full bg-white text-black py-4 rounded-full font-bold flex items-center justify-center gap-2 hover:bg-gray-100">
                      <ShoppingBag size={18} /> Add to Cart
                    </button>
                  </div>
                </div>

                {/* Info */}
                <div className="px-2">
                  <div className="flex justify-between items-start mb-1">
                    <h3 className="text-xl font-bold tracking-tight">{product.title}</h3>
                    <div className="flex items-center gap-1 text-sm font-bold bg-yellow-100 px-2 py-0.5 rounded-full">
                      <Star size={12} className="fill-yellow-500 text-yellow-500" />
                      {product.rating}
                    </div>
                  </div>
                  <p className="text-gray-500 font-medium">₹{product.price}</p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Load More */}
        <div className="mt-20 flex justify-center">
          <button className="bg-white border-2 border-gray-200 text-black px-8 py-4 rounded-full font-bold flex items-center gap-2 hover:border-black transition-colors">
            Load More Products <ArrowDown size={20} />
          </button>
        </div>

      </div>
    </div>
  );
};
