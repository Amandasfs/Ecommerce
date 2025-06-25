'use client';

import { ShoppingBag, Sparkles, Footprints } from 'lucide-react';
import { motion } from 'framer-motion';

import p1 from '../assets/products/p1.jpg';
import p2 from '../assets/products/p2.jpg';
import p3 from '../assets/products/p3.jpg';
import p4 from '../assets/products/p4.jpg';
import p5 from '../assets/products/p5.jpg';
import p6 from '../assets/products/p6.jpg';

const products = [
  { id: 1, name: 'Elegant Jacket', price: '$249.00', image: p1 },
  { id: 2, name: 'Floral Dress', price: '$199.00', image: p2 },
  { id: 3, name: 'Kids Set', price: '$129.00', image: p3 },
  { id: 4, name: 'Printed Shirt', price: '$89.00', image: p4 },
  { id: 5, name: 'Casual Look', price: '$169.00', image: p5 },
  { id: 6, name: 'Premium Hoodie', price: '$189.00', image: p6 },
];

const categories = [
  {
    id: 1,
    name: 'Accessories',
    icon: <ShoppingBag className="w-14 h-14 text-marrom mb-4" />,
  },
  {
    id: 2,
    name: 'Beauty',
    icon: <Sparkles className="w-14 h-14 text-verde mb-4" />,
  },
  {
    id: 3,
    name: 'Shoes',
    icon: <Footprints className="w-14 h-14 text-marrom mb-4" />,
  },
];

export default function HomeProducts() {
  return (
    <section className="bg-white py-24 px-4 md:px-20" id="home">
      {/* Categories */}
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-4xl md:text-5xl font-bold text-vermelho text-center mb-16"
      >
        Categories
      </motion.h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 mb-24">
        {categories.map((cat, idx) => (
          <motion.div
            key={cat.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1, duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-white group rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer border-2 border-transparent hover:border-marrom"
          >
            <div className="flex justify-center">{cat.icon}</div>
            <h3 className="text-2xl font-semibold text-marrom group-hover:text-marromEscuro mb-2">
              {cat.name}
            </h3>
            <p className="text-marromEscuro group-hover:text-black text-sm">
              Discover the best {cat.name.toLowerCase()} for your style.
            </p>
          </motion.div>
        ))}
      </div>

      {/* Featured Products */}
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-4xl md:text-5xl font-bold text-vermelho text-center mb-16"
      >
        Featured Products
      </motion.h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {products.map((product, index) => (
          <motion.div
            key={product.id}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300"
          >
            <div className="w-full h-72 overflow-hidden">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-marrom mb-2">{product.name}</h3>
              <p className="text-marromEscuro mb-4 font-medium">{product.price}</p>
              <button className="bg-verde hover:bg-marrom text-white px-6 py-2 rounded-xl shadow transition">
                Buy
              </button>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Final Button */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.6 }}
        className="text-center mt-20"
      >
        <button className="text-vermelho border-2 border-vermelho hover:bg-vermelho hover:text-white transition px-8 py-4 rounded-full font-medium text-lg shadow-sm">
          View All Products
        </button>
      </motion.div>
    </section>
  );
}
