import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { motion, AnimatePresence } from "motion/react";
import { ArrowLeft, Lock, ShieldCheck, Mail, Calendar, MapPin, MessageSquare, Phone, CheckCircle, Instagram } from "lucide-react";

export const Checkout = ({ orderData, onBack, onPlaceOrder }) => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [formData, setFormData] = useState(null);
  
  const { items, quantity, hamper } = orderData;
  const itemsTotal = items.reduce((sum, item) => sum + item.price, 0);
  const hamperCost = hamper.price;
  const costPerHamper = itemsTotal + hamperCost;
  const totalOrderValue = costPerHamper * quantity;

  const onSubmit = (data) => {
    setFormData(data);
    setShowConfirmation(true);
  };

  const handleFinalConfirmation = () => {
    onPlaceOrder({ ...formData, orderData, totalOrderValue });
  };

  return (
    <div className="min-h-screen bg-[#f8f5f2] pt-32 pb-20 px-4 md:px-8 relative">
      
      {/* Success Modal */}
      <AnimatePresence>
        {showConfirmation && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <motion.div 
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-black/40 backdrop-blur-sm" 
            />
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, y: 20 }} 
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative bg-white rounded-[2rem] p-8 md:p-12 w-full max-w-md text-center shadow-2xl overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-green-400 to-green-600"></div>
              
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6 text-green-600">
                <CheckCircle size={40} strokeWidth={3} />
              </div>
              
              <h2 className="text-3xl font-black tracking-tight mb-4">Order Placed!</h2>
              
              <p className="text-gray-500 font-medium mb-8 leading-relaxed">
                Thank you for choosing HampyGifts. You will get your receipt in your mentioned <span className="text-black font-bold">Email</span> and <span className="text-black font-bold">WhatsApp</span>.
              </p>
              
              <button 
                onClick={handleFinalConfirmation}
                className="w-full bg-black text-white py-4 rounded-xl font-bold text-lg hover:scale-[1.02] transition-transform"
              >
                Back to Home
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <div className="container mx-auto max-w-6xl">
        
        <button 
          onClick={onBack}
          className="inline-flex items-center gap-2 text-gray-500 font-bold hover:text-black mb-8 transition-colors"
        >
          <ArrowLeft size={20} /> Back to Builder
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* LEFT: Checkout Form */}
          <div className="lg:col-span-2">
            <h1 className="text-4xl font-black tracking-tight mb-8">Secure Checkout</h1>
            
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
              
              {/* Contact Info */}
              <section className="bg-white rounded-[2rem] p-8 shadow-sm">
                <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
                  <span className="w-8 h-8 bg-black text-white rounded-full flex items-center justify-center text-sm">1</span>
                  Contact Information
                </h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-gray-400 uppercase tracking-wider">Full Name</label>
                    <input 
                      {...register("fullName", { required: "Full name is required" })}
                      className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 font-medium focus:outline-none focus:border-black transition-colors"
                      placeholder="Jane Doe"
                    />
                    {errors.fullName && <p className="text-red-500 text-xs font-bold">{errors.fullName.message}</p>}
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-bold text-gray-400 uppercase tracking-wider">WhatsApp Number</label>
                    <div className="relative">
                      <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
                      <input 
                        {...register("whatsapp", { 
                          required: "WhatsApp number is required",
                          pattern: { value: /^[0-9+]{10,15}$/, message: "Invalid phone number" }
                        })}
                        className="w-full bg-gray-50 border border-gray-200 rounded-xl pl-11 pr-4 py-3 font-medium focus:outline-none focus:border-black transition-colors"
                        placeholder="+91 98765 43210"
                      />
                    </div>
                    {errors.whatsapp && <p className="text-red-500 text-xs font-bold">{errors.whatsapp.message}</p>}
                  </div>

                  <div className="space-y-2 md:col-span-2">
                    <label className="text-xs font-bold text-gray-400 uppercase tracking-wider">Email Address</label>
                    <div className="relative">
                      <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
                      <input 
                        {...register("email", { 
                          required: "Email is required",
                          pattern: { value: /^\S+@\S+$/i, message: "Invalid email address" }
                        })}
                        className="w-full bg-gray-50 border border-gray-200 rounded-xl pl-11 pr-4 py-3 font-medium focus:outline-none focus:border-black transition-colors"
                        placeholder="jane@example.com"
                      />
                    </div>
                    {errors.email && <p className="text-red-500 text-xs font-bold">{errors.email.message}</p>}
                  </div>
                </div>
              </section>

              {/* Delivery Details */}
              <section className="bg-white rounded-[2rem] p-8 shadow-sm">
                <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
                  <span className="w-8 h-8 bg-black text-white rounded-full flex items-center justify-center text-sm">2</span>
                  Delivery Details
                </h2>

                <div className="grid grid-cols-1 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-gray-400 uppercase tracking-wider">Event Date</label>
                    <div className="relative">
                      <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
                      <input 
                        type="date"
                        {...register("eventDate", { 
                          required: "Event date is required",
                          validate: value => new Date(value) > new Date() || "Date must be in the future"
                        })}
                        className="w-full bg-gray-50 border border-gray-200 rounded-xl pl-11 pr-4 py-3 font-medium focus:outline-none focus:border-black transition-colors"
                      />
                    </div>
                    {errors.eventDate && <p className="text-red-500 text-xs font-bold">{errors.eventDate.message}</p>}
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-bold text-gray-400 uppercase tracking-wider">Delivery Address</label>
                    <div className="relative">
                      <MapPin className="absolute left-4 top-4 text-gray-400" size={16} />
                      <textarea 
                        {...register("address", { required: "Address is required" })}
                        rows={3}
                        className="w-full bg-gray-50 border border-gray-200 rounded-xl pl-11 pr-4 py-3 font-medium focus:outline-none focus:border-black transition-colors resize-none"
                        placeholder="Full street address, city, state, zip code"
                      />
                    </div>
                    {errors.address && <p className="text-red-500 text-xs font-bold">{errors.address.message}</p>}
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-bold text-gray-400 uppercase tracking-wider">Message Card (Optional)</label>
                    <div className="relative">
                      <MessageSquare className="absolute left-4 top-4 text-gray-400" size={16} />
                      <textarea 
                        {...register("message")}
                        rows={2}
                        className="w-full bg-gray-50 border border-gray-200 rounded-xl pl-11 pr-4 py-3 font-medium focus:outline-none focus:border-black transition-colors resize-none"
                        placeholder="A warm message to go with your gifts..."
                      />
                    </div>
                  </div>
                </div>
              </section>

              <button 
                type="submit"
                className="w-full bg-black text-white text-xl font-bold py-5 rounded-2xl shadow-xl hover:shadow-2xl hover:scale-[1.01] transition-all flex items-center justify-center gap-3"
              >
                Place Order <span className="opacity-50">|</span> ₹{totalOrderValue.toLocaleString()}
              </button>

              <p className="text-center text-xs text-gray-400 max-w-md mx-auto leading-relaxed">
                By placing this order, you agree to our <span className="underline cursor-pointer hover:text-black">Terms of Service</span> and <span className="underline cursor-pointer hover:text-black">Privacy Policy</span>.
              </p>

            </form>
          </div>

          {/* RIGHT: Order Summary */}
          <div className="lg:col-span-1">
            <div className="sticky top-32 space-y-6">
              
              <div className="bg-white rounded-[2rem] p-8 shadow-xl border-2 border-black/5">
                <h2 className="text-xl font-black tracking-tight mb-6">Order Summary</h2>
                
                {/* Hamper Details */}
                <div className="flex items-center gap-4 mb-6 pb-6 border-b border-gray-100">
                  <div className="w-16 h-16 bg-gray-100 rounded-xl overflow-hidden shrink-0">
                    <img src={hamper.image} alt={hamper.title} className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <h3 className="font-bold">{hamper.title}</h3>
                    <p className="text-sm text-gray-500">{quantity} Hampers</p>
                  </div>
                </div>

                {/* Items List */}
                <div className="space-y-3 mb-6 max-h-[300px] overflow-y-auto pr-2 custom-scrollbar">
                  {items.map(item => (
                    <div key={item.id} className="flex justify-between items-center text-sm">
                      <span className="text-gray-600 truncate flex-1">{item.title}</span>
                      <span className="font-bold">₹{item.price}</span>
                    </div>
                  ))}
                  <div className="flex justify-between items-center text-sm text-gray-400 pt-2">
                     <span>Hamper Packaging</span>
                     <span>₹{hamper.price}</span>
                  </div>
                </div>

                {/* Calculations */}
                <div className="bg-gray-50 rounded-xl p-4 space-y-3 mb-6">
                   <div className="flex justify-between text-sm">
                     <span className="text-gray-500">Cost per Hamper</span>
                     <span className="font-bold">₹{costPerHamper}</span>
                   </div>
                   <div className="flex justify-between text-sm">
                     <span className="text-gray-500">Quantity</span>
                     <span className="font-bold">x {quantity}</span>
                   </div>
                   <div className="border-t border-gray-200 pt-3 flex justify-between items-center">
                     <span className="font-black text-lg">Total</span>
                     <span className="font-black text-xl">₹{totalOrderValue.toLocaleString()}</span>
                   </div>
                </div>

                <div className="flex items-center justify-center gap-2 text-green-600 text-xs font-bold bg-green-50 p-3 rounded-lg">
                  <ShieldCheck size={16} />
                  Secure Checkout
                </div>

              </div>

              {/* Support Actions */}
              <div className="bg-white rounded-[2rem] p-6 shadow-sm text-center">
                 <p className="text-sm font-bold text-gray-500 mb-4">Need help with your order?</p>
                 <div className="flex gap-3 justify-center">
                   <a 
                     href="https://api.whatsapp.com/send/?phone=917594866878&text&type=phone_number&app_absent=0"
                     target="_blank"
                     rel="noopener noreferrer"
                     className="flex-1 border-2 border-[#25D366] text-[#25D366] bg-white py-3 rounded-xl font-bold text-sm hover:bg-[#25D366] hover:text-white transition-all flex items-center justify-center gap-2"
                   >
                     <Phone size={18} /> WhatsApp
                   </a>
                   <a 
                     href="https://www.instagram.com/hampy_gifts"
                     target="_blank"
                     rel="noopener noreferrer"
                     className="flex-1 border-2 border-[#C13584] text-[#C13584] bg-white py-3 rounded-xl font-bold text-sm hover:bg-gradient-to-tr hover:from-[#FF0060] hover:via-[#D300C5] hover:to-[#7C00FF] hover:border-transparent hover:text-white transition-all flex items-center justify-center gap-2"
                   >
                     <Instagram size={18} /> Instagram
                   </a>
                 </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </div>
  );
};
