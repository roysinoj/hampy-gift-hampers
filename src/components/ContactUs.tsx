import React, { useState } from "react";
import { useForm } from "react-hook-form@7.55.0";
import { motion, AnimatePresence } from "motion/react";
import { Mail, Phone, MapPin, Clock, Instagram, Send, CheckCircle, ArrowRight } from "lucide-react";

export const ContactUs = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm();
  const [isSubmitted, setIsSubmitted] = useState(false);

  const onSubmit = (data) => {
    // Simulate API call
    console.log("Contact Form Data:", data);
    
    // Show success message
    setIsSubmitted(true);
    
    // Reset form after delay
    setTimeout(() => {
      setIsSubmitted(false);
      reset();
    }, 5000);
  };

  return (
    <div className="pt-28 pb-16 px-4 md:px-8 bg-[#f8f5f2] min-h-screen">
      <div className="container mx-auto max-w-5xl">
        
        {/* Header */}
        <div className="text-center mb-12 space-y-3">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-black tracking-tighter"
          >
            Get in Touch.
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg text-gray-500 max-w-xl mx-auto font-medium"
          >
            Have a question about our hampers? Want a custom order? Or just want to say hi? We'd love to hear from you.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10">
          
          {/* Left Column: Contact Info */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="space-y-4"
          >
            {/* Contact Details Card */}
            <div className="bg-white rounded-[2rem] p-6 md:p-8 shadow-sm border border-gray-100">
              <h2 className="text-xl font-black mb-6 flex items-center gap-3">
                <span className="w-8 h-8 bg-black text-white rounded-full flex items-center justify-center">
                  <Phone size={16} />
                </span>
                Contact Info
              </h2>

              <div className="space-y-6">
                <div className="flex items-start gap-4 group">
                  <div className="w-10 h-10 bg-gray-50 rounded-xl flex items-center justify-center text-gray-400 group-hover:bg-black group-hover:text-white transition-colors">
                    <Mail size={20} />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-1">Email Us</p>
                    <a href="mailto:contact@hampygifts.in" className="text-base md:text-lg font-bold hover:underline decoration-2 underline-offset-4">
                      contact@hampygifts.in
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4 group">
                  <div className="w-10 h-10 bg-gray-50 rounded-xl flex items-center justify-center text-gray-400 group-hover:bg-black group-hover:text-white transition-colors">
                    <Phone size={20} />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-1">Call Us</p>
                    <a href="tel:+917594866878" className="text-base md:text-lg font-bold hover:underline decoration-2 underline-offset-4">
                      +91 75948 66878
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4 group">
                  <div className="w-10 h-10 bg-gray-50 rounded-xl flex items-center justify-center text-gray-400 group-hover:bg-black group-hover:text-white transition-colors">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-1">Visit Us</p>
                    <p className="text-base md:text-lg font-bold leading-tight">
                      1st Street, Forest Road,<br/>
                      Theni 625531
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Business Hours Card */}
            <div className="bg-white rounded-[2rem] p-6 md:p-8 shadow-sm border border-gray-100">
               <h2 className="text-xl font-black mb-6 flex items-center gap-3">
                 <span className="w-8 h-8 bg-black text-white rounded-full flex items-center justify-center">
                   <Clock size={16} />
                 </span>
                Business Hours
               </h2>
               
               <ul className="space-y-4">
                 <li className="flex justify-between items-center text-base font-bold border-b border-gray-100 pb-3">
                   <span className="text-gray-500">Mon – Fri</span>
                   <span>9:00 AM – 6:00 PM</span>
                 </li>
                 <li className="flex justify-between items-center text-base font-bold border-b border-gray-100 pb-3">
                   <span className="text-gray-500">Saturday</span>
                   <span>10:00 AM – 4:00 PM</span>
                 </li>
                 <li className="flex justify-between items-center text-base font-bold text-gray-400 pb-1">
                   <span>Sunday</span>
                   <span className="text-red-500 bg-red-50 px-3 py-1 rounded-full text-xs">Closed</span>
                 </li>
               </ul>
            </div>

            {/* Social Links */}
            <div className="grid grid-cols-2 gap-4">
              <a 
                href="https://api.whatsapp.com/send/?phone=917594866878&text&type=phone_number&app_absent=0" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group border-2 border-[#25D366] text-[#25D366] bg-white p-4 rounded-[1.5rem] flex flex-col items-center justify-center gap-2 hover:bg-[#25D366] hover:text-white transition-all shadow-sm hover:shadow-[#25D366]/30"
              >
                <Phone size={24} className="group-hover:scale-110 transition-transform" />
                <span className="font-bold text-base">WhatsApp</span>
              </a>
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group border-2 border-[#C13584] text-[#C13584] bg-white p-4 rounded-[1.5rem] flex flex-col items-center justify-center gap-2 hover:bg-gradient-to-tr hover:from-[#FF0060] hover:via-[#D300C5] hover:to-[#7C00FF] hover:border-transparent hover:text-white transition-all shadow-sm hover:shadow-[#C13584]/30"
              >
                <Instagram size={24} className="group-hover:scale-110 transition-transform" />
                <span className="font-bold text-base">Instagram</span>
              </a>
            </div>

          </motion.div>

          {/* Right Column: Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
          >
            <div className="bg-white rounded-[2rem] p-6 md:p-10 shadow-xl border-2 border-black relative overflow-hidden h-full">
              
              <AnimatePresence mode="wait">
                {isSubmitted ? (
                  <motion.div 
                    key="success"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    className="absolute inset-0 flex flex-col items-center justify-center text-center p-8 bg-white z-10"
                  >
                    <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center text-green-600 mb-6">
                      <CheckCircle size={40} strokeWidth={3} />
                    </div>
                    <h3 className="text-2xl font-black mb-4">Message Sent!</h3>
                    <p className="text-gray-500 font-medium text-base max-w-xs mb-8">
                      Thanks for reaching out. We'll get back to you as soon as possible.
                    </p>
                    <button 
                      onClick={() => setIsSubmitted(false)}
                      className="bg-black text-white px-6 py-3 rounded-xl font-bold hover:bg-gray-800 transition-colors"
                    >
                      Send Another
                    </button>
                  </motion.div>
                ) : (
                  <motion.div key="form" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                    <h2 className="text-2xl font-black mb-2">Send us a Message</h2>
                    <p className="text-gray-500 font-bold text-sm mb-6">We usually respond within 24 hours.</p>

                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                      
                      {/* Name */}
                      <div className="space-y-1.5">
                        <label className="text-[10px] font-bold text-gray-400 uppercase tracking-wider pl-2">Full Name</label>
                        <input 
                          {...register("fullName", { required: "Full name is required" })}
                          className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 font-medium text-base focus:outline-none focus:border-black focus:ring-1 focus:ring-black transition-all"
                          placeholder="Jane Doe"
                        />
                        {errors.fullName && <p className="text-red-500 text-[10px] font-bold pl-2">{errors.fullName.message}</p>}
                      </div>

                      {/* Email */}
                      <div className="space-y-1.5">
                        <label className="text-[10px] font-bold text-gray-400 uppercase tracking-wider pl-2">Email Address</label>
                        <input 
                          {...register("email", { 
                            required: "Email is required",
                            pattern: { value: /^\S+@\S+$/i, message: "Invalid email address" }
                          })}
                          className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 font-medium text-base focus:outline-none focus:border-black focus:ring-1 focus:ring-black transition-all"
                          placeholder="jane@example.com"
                        />
                        {errors.email && <p className="text-red-500 text-[10px] font-bold pl-2">{errors.email.message}</p>}
                      </div>

                      {/* Phone */}
                      <div className="space-y-1.5">
                        <label className="text-[10px] font-bold text-gray-400 uppercase tracking-wider pl-2">Phone Number</label>
                        <input 
                          {...register("phone", { 
                            required: "Phone number is required",
                            pattern: { value: /^[0-9+]{10,15}$/, message: "Invalid phone number" }
                          })}
                          className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 font-medium text-base focus:outline-none focus:border-black focus:ring-1 focus:ring-black transition-all"
                          placeholder="+91 98765 43210"
                        />
                        {errors.phone && <p className="text-red-500 text-[10px] font-bold pl-2">{errors.phone.message}</p>}
                      </div>

                      {/* Message */}
                      <div className="space-y-1.5">
                        <label className="text-[10px] font-bold text-gray-400 uppercase tracking-wider pl-2">Your Message</label>
                        <textarea 
                          {...register("message", { required: "Message is required" })}
                          rows={4}
                          className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 font-medium text-base focus:outline-none focus:border-black focus:ring-1 focus:ring-black transition-all resize-none"
                          placeholder="Tell us what you need..."
                        />
                        {errors.message && <p className="text-red-500 text-[10px] font-bold pl-2">{errors.message.message}</p>}
                      </div>

                      {/* Submit Button */}
                      <button 
                        type="submit"
                        className="w-full bg-black text-white text-lg font-black py-4 rounded-xl shadow-lg hover:shadow-xl hover:scale-[1.01] transition-all flex items-center justify-center gap-2 mt-2 group"
                      >
                        Send Message 
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                      </button>

                    </form>
                  </motion.div>
                )}
              </AnimatePresence>
              
            </div>
          </motion.div>

        </div>
      </div>
    </div>
  );
};
