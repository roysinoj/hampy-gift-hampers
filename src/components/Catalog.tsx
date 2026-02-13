import React from "react";
import { motion } from "motion/react";
import { Heart } from "lucide-react";

const PRODUCTS = [
  {
    id: 1,
    title: "The Sweet Tooth",
    price: "₹45.00",
    color: "bg-pink-100",
    img: "https://images.unsplash.com/photo-1761276297637-4418549ead2d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxicmlnaHQlMjBwb3AlMjBhcnQlMjBnaWZ0JTIwYm94fGVufDF8fHx8MTc3MDgzMDA4N3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  },
  {
    id: 2,
    title: "Abstract Living",
    price: "₹120.00",
    color: "bg-blue-100",
    img: "https://images.unsplash.com/photo-1706466615511-18622e5ef756?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwbGF5ZnVsJTIwM2QlMjBhYnN0cmFjdCUyMHNoYXBlJTIwcGFzdGVsfGVufDF8fHx8MTc3MDgzMDA4N3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  },
  {
    id: 3,
    title: "Party Starter",
    price: "₹89.00",
    color: "bg-yellow-100",
    img: "https://images.unsplash.com/photo-1649432208894-5b710b6fa6c5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aWJyYW50JTIwY2FuZHklMjBjb2xvcmZ1bCUyMGZsYXQlMjBsYXl8ZW58MXx8fHwxNzcwODMwMDg3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  },
  {
    id: 4,
    title: "The Minimalist",
    price: "₹65.00",
    color: "bg-gray-100",
    img: "https://images.unsplash.com/photo-1753718605172-86d37d27596d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBnaWZ0JTIwaGFtcGVyJTIwYWVzdGhldGljfGVufDF8fHx8MTc3MDgyOTU2M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  }
];

export const Catalog = () => {
  return (
    <section className="py-20 px-4 md:px-8 bg-white">
      <div className="container mx-auto">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-4xl md:text-6xl font-black tracking-tight mb-4">Fresh Drops</h2>
            <p className="text-gray-500 font-medium">Newest arrivals for your favorite people.</p>
          </div>
          <button className="hidden md:block bg-gray-100 hover:bg-black hover:text-white px-6 py-3 rounded-full font-bold transition-colors">
            See All Products
          </button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {PRODUCTS.map((product) => (
            <motion.div
              key={product.id}
              whileHover={{ y: -10 }}
              className="group cursor-pointer"
            >
              <div className={`relative aspect-[3/4] ${product.color} rounded-[2rem] overflow-hidden mb-4`}>
                <img 
                  src={product.img} 
                  alt={product.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <button className="absolute top-4 right-4 bg-white/50 backdrop-blur-md p-3 rounded-full hover:bg-white hover:scale-110 transition-all text-red-500">
                  <Heart size={20} />
                </button>
              </div>
              
              <div className="flex justify-between items-start px-2">
                <div>
                  <h3 className="text-xl font-bold">{product.title}</h3>
                  <p className="text-gray-500 font-medium">{product.price}</p>
                </div>
                <button className="bg-black text-white px-4 py-2 rounded-full text-sm font-bold opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all">
                  Add
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
