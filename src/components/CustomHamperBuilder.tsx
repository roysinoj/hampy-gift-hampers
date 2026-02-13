import React, { useState, useMemo } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Search, ShoppingBag, X, Plus, Minus, AlertCircle, CheckCircle2, ChevronDown, ChevronUp, Package, Wallet } from "lucide-react";

import { PRODUCTS } from "../data/products";

// Mock Data (Removed products to use imported ones)
const CATEGORIES = ["All", "Dry Fruits", "Chocolates", "Wellness", "Beverages", "Food", "Decor"];
const QUANTITY_OPTIONS = [25, 50, 100, 250, 500];

export const CustomHamperBuilder = ({ targetBudget, selectedHamper, onBack, onCheckout }) => {
  const [selectedItems, setSelectedItems] = useState([]); // Array of product IDs
  const [activeCategory, setActiveCategory] = useState("All");
  const [quantity, setQuantity] = useState(50);
  const [searchQuery, setSearchQuery] = useState("");
  const [showSummaryMobile, setShowSummaryMobile] = useState(false);

  // Derived state
  const hamperBasePrice = selectedHamper?.price || 0;
  
  const selectedProductsList = useMemo(() => {
    return PRODUCTS.filter(p => selectedItems.includes(p.id));
  }, [selectedItems]);

  const itemsTotal = selectedProductsList.reduce((sum, item) => sum + item.price, 0);
  const costPerHamper = itemsTotal + hamperBasePrice;
  const totalOrderValue = costPerHamper * quantity;
  
  // Budget calculations
  const budgetLimit = targetBudget ? parseInt(targetBudget) : 1000; // Default fallback
  const remainingBudget = budgetLimit - costPerHamper;
  const isOverBudget = remainingBudget < 0;
  const budgetProgress = Math.min(100, (costPerHamper / budgetLimit) * 100);

  // Handlers
  const toggleProduct = (productId) => {
    setSelectedItems(prev => {
      if (prev.includes(productId)) {
        return prev.filter(id => id !== productId);
      } else {
        return [...prev, productId];
      }
    });
  };

  const filteredProducts = PRODUCTS.filter(product => {
    const matchesCategory = activeCategory === "All" || product.category === activeCategory;
    const matchesSearch = product.title.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-[#f8f5f2] pt-24 pb-32 md:pb-12 px-4 relative">
      
      {/* Mobile Summary Toggle */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-white border-t border-gray-200 p-4 shadow-[0_-4px_20px_rgba(0,0,0,0.1)]">
        <div className="flex justify-between items-center mb-2" onClick={() => setShowSummaryMobile(!showSummaryMobile)}>
          <div>
            <p className="text-xs font-bold text-gray-500 uppercase">Total / Hamper</p>
            <p className={`text-xl font-black ${isOverBudget ? "text-red-500" : "text-black"}`}>₹{costPerHamper}</p>
          </div>
          <div className="flex items-center gap-2">
             <span className="text-sm font-medium text-gray-500">{selectedItems.length} items</span>
             {showSummaryMobile ? <ChevronDown /> : <ChevronUp />}
          </div>
        </div>
        <button 
          onClick={() => setShowSummaryMobile(!showSummaryMobile)} // Toggle mobile
          className="w-full bg-black text-white py-3 rounded-xl font-bold"
        >
          Checkout — ₹{totalOrderValue.toLocaleString()}
        </button>
      </div>

      <div className="container mx-auto h-full flex flex-col md:flex-row gap-8">
        
        {/* LEFT COLUMN: Product Selection */}
        <div className="w-full md:w-2/3 lg:w-3/4 pb-20 md:pb-0">
          
          {/* Header */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
            <div>
              <button onClick={onBack} className="text-gray-500 font-bold hover:text-black text-sm mb-2 flex items-center gap-1">
                <ChevronDown className="rotate-90" size={16} /> Change Hamper Style
              </button>
              <h1 className="text-3xl md:text-5xl font-black tracking-tight">Build Your Hamper</h1>
            </div>
            
            {/* Search */}
            <div className="relative w-full md:w-72">
               <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
               <input 
                 type="text" 
                 placeholder="Search items..." 
                 value={searchQuery}
                 onChange={(e) => setSearchQuery(e.target.value)}
                 className="w-full pl-11 pr-4 py-3 rounded-full border border-gray-200 focus:outline-none focus:border-black bg-white"
               />
            </div>
          </div>

          {/* Categories */}
          <div className="flex gap-2 overflow-x-auto pb-4 scrollbar-hide mb-6">
            {CATEGORIES.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2 rounded-full font-bold text-sm whitespace-nowrap transition-colors ${
                  activeCategory === cat ? "bg-black text-white" : "bg-white text-gray-500 hover:bg-gray-100"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Product Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {filteredProducts.map(product => {
              const isSelected = selectedItems.includes(product.id);
              return (
                <div 
                  key={product.id}
                  onClick={() => toggleProduct(product.id)}
                  className={`
                    relative group bg-white rounded-[1.5rem] overflow-hidden cursor-pointer border-2 transition-all duration-200
                    ${isSelected ? "border-black shadow-lg" : "border-transparent hover:border-gray-200 hover:shadow-md"}
                  `}
                >
                  <div className="aspect-square relative">
                    <img src={product.image} alt={product.title} className="w-full h-full object-cover" />
                    {isSelected && (
                      <div className="absolute inset-0 bg-black/10 flex items-center justify-center backdrop-blur-[1px]">
                         <div className="w-10 h-10 bg-black text-white rounded-full flex items-center justify-center shadow-xl">
                           <CheckCircle2 size={20} />
                         </div>
                      </div>
                    )}
                    <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
                       <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-sm">
                         {isSelected ? <Minus size={16} /> : <Plus size={16} />}
                       </div>
                    </div>
                  </div>
                  <div className="p-4">
                    <p className="text-xs font-bold text-gray-400 mb-1">{product.category}</p>
                    <h3 className="font-bold text-sm leading-tight mb-2 min-h-[2.5em]">{product.title}</h3>
                    <p className="font-bold text-lg">₹{product.price}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* RIGHT COLUMN: Summary (Sticky) */}
        <div className={`
          fixed inset-0 z-50 md:z-0 md:static md:w-1/3 lg:w-1/4
          ${showSummaryMobile ? "flex" : "hidden md:flex"}
        `}>
          <div className="absolute inset-0 bg-black/50 md:hidden" onClick={() => setShowSummaryMobile(false)}></div>
          
          <div className={`
            absolute bottom-0 left-0 right-0 md:static bg-white w-full rounded-t-[2rem] md:rounded-[2.5rem] p-6 md:p-8 
            flex flex-col h-[85vh] md:h-fit md:sticky md:top-32 shadow-2xl md:shadow-xl overflow-y-auto
          `}>
             <div className="md:hidden w-12 h-1 bg-gray-200 rounded-full mx-auto mb-6"></div>

             <div className="flex items-center justify-between mb-6">
               <h2 className="text-2xl font-black tracking-tight">Your Hamper</h2>
               <div className="bg-gray-100 px-3 py-1 rounded-full text-xs font-bold text-gray-500">
                 {selectedItems.length} Items
               </div>
             </div>

             {/* Selected Items List */}
             <div className="flex-grow space-y-3 mb-8 overflow-y-auto max-h-[300px] pr-2">
               {selectedItems.length === 0 ? (
                 <div className="text-center py-12 border-2 border-dashed border-gray-100 rounded-2xl">
                   <Package className="mx-auto text-gray-300 mb-3" size={32} />
                   <p className="text-gray-400 font-medium text-sm">Tap items to add them</p>
                 </div>
               ) : (
                 <AnimatePresence>
                   <div className="flex items-center justify-between p-3 bg-gray-50 rounded-xl border border-gray-100">
                      <div className="flex items-center gap-3">
                         <div className="w-10 h-10 bg-white rounded-lg border border-gray-200 flex items-center justify-center">
                            <ShoppingBag size={16} className="text-gray-400"/>
                         </div>
                         <div>
                            <p className="font-bold text-sm">{selectedHamper?.title || "Packaging"}</p>
                            <p className="text-xs text-gray-500">Base Cost</p>
                         </div>
                      </div>
                      <span className="font-bold">₹{hamperBasePrice}</span>
                   </div>
                   {selectedProductsList.map(item => (
                     <motion.div 
                        key={item.id}
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="flex items-center justify-between p-2"
                     >
                        <span className="text-sm font-medium text-gray-600 truncate max-w-[150px]">{item.title}</span>
                        <div className="flex items-center gap-3">
                          <span className="text-sm font-bold">₹{item.price}</span>
                          <button onClick={() => toggleProduct(item.id)} className="text-gray-300 hover:text-red-500">
                            <X size={14} />
                          </button>
                        </div>
                     </motion.div>
                   ))}
                 </AnimatePresence>
               )}
             </div>

             {/* Budget Progress */}
             <div className="mb-8">
               <div className="flex justify-between text-sm font-bold mb-2">
                 <span className="flex items-center gap-1 text-gray-500">
                   <Wallet size={14} /> Budget ({budgetLimit})
                 </span>
                 <span className={isOverBudget ? "text-red-500" : "text-green-600"}>
                   {remainingBudget >= 0 ? `₹${remainingBudget} left` : `₹${Math.abs(remainingBudget)} over`}
                 </span>
               </div>
               <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                 <div 
                   className={`h-full transition-all duration-500 ${isOverBudget ? "bg-red-500" : "bg-green-500"}`}
                   style={{ width: `${Math.min(100, budgetProgress)}%` }}
                 ></div>
               </div>
               {isOverBudget && (
                 <div className="flex items-center gap-2 mt-2 text-red-500 text-xs font-bold bg-red-50 p-2 rounded-lg">
                   <AlertCircle size={14} />
                   <span>Exceeds budget per hamper!</span>
                 </div>
               )}
             </div>

             {/* Quantity Selector */}
             <div className="mb-8">
               <label className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-3">Quantity (Hampers)</label>
               <div className="flex flex-wrap gap-2">
                 {QUANTITY_OPTIONS.map(opt => (
                   <button
                     key={opt}
                     onClick={() => setQuantity(opt)}
                     className={`px-3 py-2 rounded-lg text-sm font-bold border transition-colors ${
                       quantity === opt 
                       ? "bg-black text-white border-black" 
                       : "bg-white text-gray-500 border-gray-200 hover:border-black"
                     }`}
                   >
                     {opt}
                   </button>
                 ))}
               </div>
             </div>

             {/* Totals */}
             <div className="border-t border-gray-100 pt-6 mt-auto">
               <div className="flex justify-between items-center mb-2">
                 <span className="text-gray-500 font-medium">Cost per Hamper</span>
                 <span className="font-bold text-lg">₹{costPerHamper}</span>
               </div>
               <div className="flex justify-between items-center mb-6">
                 <span className="text-gray-900 font-black text-xl">Total</span>
                 <span className="text-3xl font-black tracking-tighter">₹{totalOrderValue.toLocaleString()}</span>
               </div>

               <button 
                 disabled={selectedItems.length === 0}
                 onClick={() => onCheckout({ items: selectedProductsList, quantity, hamper: selectedHamper })}
                 className={`w-full py-4 rounded-xl font-bold text-lg flex items-center justify-center gap-2 transition-all ${
                   selectedItems.length === 0 
                   ? "bg-gray-200 text-gray-400 cursor-not-allowed" 
                   : "bg-black text-white hover:bg-gray-800 hover:scale-[1.02] shadow-xl"
                 }`}
               >
                 Checkout Now
               </button>
             </div>

          </div>
        </div>

      </div>
    </div>
  );
};
