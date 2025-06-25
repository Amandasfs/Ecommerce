'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import { motion } from 'framer-motion';
import 'swiper/css';
import 'swiper/css/autoplay';

// IMPORTAÇÃO MANUAL DAS IMAGENS
import w1 from '../assets/images/w1.jpg';
import w2 from '../assets/images/w2.jpg';
import m1 from '../assets/images/m1.jpg';
import m2 from '../assets/images/m2.jpg';
import m3 from '../assets/images/m3.jpg';
import k1 from '../assets/images/k1.jpg';
import k2 from '../assets/images/k2.jpg';
import k3 from '../assets/images/k3.jpg';
import i1 from '../assets/images/i1.jpg';

const productImages = [w1, w2, m1, m2, m3, k1, k2, k3, i1];

export default function HeroCarousel() {
  return (
    <div className="relative w-full h-[90vh] overflow-hidden">
      {/* Carrossel */}
      <Swiper
        modules={[Autoplay]}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        loop
        className="w-full h-full"
      >
        {productImages.map((src, idx) => (
          <SwiperSlide key={idx}>
            <img
              src={src}
              alt={`Produto ${idx + 1}`}
              className="w-full h-full object-cover"
            />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Overlay escuro */}
      <div className="absolute inset-0 bg-black/40 z-10"></div>

      {/* Conteúdo por cima */}
      <div className="absolute inset-0 flex items-center justify-center z-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center text-white"
        >
          <h1 className="text-4xl md:text-6xl font-bold drop-shadow-lg mb-6">
            Style that Inspires
          </h1>
          <button className="bg-verde hover:bg-marrom text-white font-medium px-6 py-3 rounded-xl shadow-lg transition duration-300">
            Buy Now
          </button>
        </motion.div>
      </div>
    </div>
  );
}