'use client';

import { motion } from 'framer-motion';

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="bg-marrom text-white py-8 mt-20"
    >
      <div className="container mx-auto px-4 text-center">
        <p className="text-sm md:text-base font-light">
          © {new Date().getFullYear()} Amanda de Freitas. All rights reserved.
        </p>
      </div>
    </motion.footer>
  );
}
