'use client';

import { useState } from 'react';
import {
  Bars3Icon,
  XMarkIcon,
  ChevronDownIcon,
  MapPinIcon,
  UserIcon,
  ShoppingCartIcon,
} from '@heroicons/react/24/outline';
import { motion } from 'framer-motion';

const menuItems = [
  { label: 'Men', options: ['T-shirts', 'Jeans', 'Shoes'] },
  { label: 'Women', options: ['Dresses', 'Blouses', 'Heels'] },
  { label: 'Kids', options: ['Shirts', 'Shorts', 'Sneakers'] },
];

export default function Navbar() {
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);

  const toggleMenu = (label: string) => {
    setOpenMenu(openMenu === label ? null : label);
  };

  return (
    <motion.nav
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="w-full bg-background text-marromEscuro px-6 py-4 shadow-md flex items-center justify-between relative"
    >
      {/* Mobile Hamburger */}
      <div className="lg:hidden">
        <button onClick={() => setMobileOpen(!mobileOpen)}>
          {mobileOpen ? (
            <XMarkIcon className="w-6 h-6 text-verde" />
          ) : (
            <Bars3Icon className="w-6 h-6 text-verde" />
          )}
        </button>
      </div>

      {/* Logo com ondinha SVG personalizada */}
        <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        className="text-xl font-bold text-vermelho flex items-center gap-2 absolute left-1/2 transform -translate-x-1/2 lg:static lg:translate-x-0"
        >
        <span>Malan</span>
        <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8, ease: 'easeOut' }}
            className="w-8 h-8"
        >
            <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
 <path d="M2 6C2.6 6.5 3.2 7 4.5 7C7 7 7 5 9.5 5C10.8 5 11.4 5.5 12 6C12.6 6.5 13.2 7 14.5 7C17 7 17 5 19.5 5C20.8 5 21.4 5.5 22 6M2 18C2.6 18.5 3.2 19 4.5 19C7 19 7 17 9.5 17C10.8 17 11.4 17.5 12 18C12.6 18.5 13.2 19 14.5 19C17 19 17 17 19.5 17C20.8 17 21.4 17.5 22 18M2 12C2.6 12.5 3.2 13 4.5 13C7 13 7 11 9.5 11C10.8 11 11.4 11.5 12 12C12.6 12.5 13.2 13 14.5 13C17 13 17 11 19.5 11C20.8 11 21.4 11.5 22 12" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
 </svg>
        </motion.div>
</motion.div>
      {/* Desktop Menu */}
      <div className="hidden lg:flex space-x-6 items-center">
        {menuItems.map(({ label, options }) => (
          <div key={label} className="relative group">
            <button
              onClick={() => toggleMenu(label)}
              className="flex items-center gap-1 font-medium hover:text-marrom"
            >
              {label}
              <ChevronDownIcon className="w-4 h-4" />
            </button>
            {openMenu === label && (
              <div className="absolute mt-2 w-40 bg-white text-marromEscuro rounded shadow-lg z-50">
                {options.map((option) => (
                  <a
                    key={option}
                    href="#"
                    className="block px-4 py-2 hover:bg-marrom hover:text-white transition"
                  >
                    {option}
                  </a>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Right Icons */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        className="flex items-center space-x-4"
      >
        <button className="flex items-center gap-1 hover:text-marrom hidden sm:flex">
          <MapPinIcon className="w-5 h-5" />
          <span className="text-sm">EN</span>
        </button>
        <button className="hover:text-marrom">
          <UserIcon className="w-5 h-5" />
        </button>
        <button className="hover:text-marrom relative">
          <ShoppingCartIcon className="w-5 h-5" />
          <span className="absolute -top-2 -right-2 bg-vermelho text-white text-xs rounded-full px-1">0</span>
        </button>
      </motion.div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="absolute top-full left-0 w-full bg-verde text-white flex flex-col z-40 px-6 py-4 space-y-2 lg:hidden"
        >
          {menuItems.map(({ label, options }) => (
            <div key={label}>
              <span className="font-semibold">{label}</span>
              <div className="ml-2 mt-1 space-y-1">
                {options.map((option) => (
                  <a
                    key={option}
                    href="#"
                    className="block text-sm hover:underline"
                  >
                    {option}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </motion.div>
      )}
    </motion.nav>
  );
}
