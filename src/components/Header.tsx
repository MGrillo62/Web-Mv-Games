"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowRight, Dices } from "lucide-react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { name: "Servicios", href: "#servicios" },
    { name: "Novedades", href: "#novedades" },
    { name: "Catálogo", href: "#catalogo" },
    { name: "Contacto", href: "#contacto" },
    { name: "Entrar al Portal", href: "https://gestorde-ventas.vercel.app/", external: true },
  ];

  return (
    <motion.header
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 px-4 py-3 md:px-8"
    >
      <div className="max-w-7xl mx-auto glass-header rounded-2xl px-6 py-3 flex items-center justify-between shadow-sm shadow-slate-100/10">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 group">
          <div className="p-2 rounded-xl bg-brand-forest/10 border border-brand-forest/20 group-hover:border-brand-mint transition-colors duration-300">
            <Dices className="h-6 w-6 text-brand-forest group-hover:rotate-12 transition-transform duration-300" />
          </div>
          <span className="text-xl font-extrabold tracking-tight text-slate-900">
            MV <span className="text-brand-forest">Games</span>
          </span>
        </a>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center gap-8">
          {menuItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              target={item.external ? "_blank" : undefined}
              rel={item.external ? "noopener noreferrer" : undefined}
              className="text-sm font-bold text-slate-800 hover:text-brand-forest transition-colors duration-200"
            >
              {item.name}
            </a>
          ))}
        </nav>

        {/* CTA Button */}
        <div className="hidden md:flex items-center gap-4">
          <a
            href="#contacto"
            className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-brand-purple bg-brand-mint hover:bg-brand-mint/90 px-5 py-3 rounded-xl transition-all duration-300 shadow-sm shadow-brand-mint/10 hover:shadow hover:shadow-brand-mint/20 hover:-translate-y-0.5 active:translate-y-0"
          >
            Apertura de Cuenta
            <ArrowRight className="h-3.5 w-3.5" />
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 text-slate-800 hover:text-slate-900 transition-colors focus:outline-none"
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="absolute left-4 right-4 mt-2 p-6 rounded-2xl glass-header border-slate-200/50 shadow-2xl md:hidden"
          >
            <div className="flex flex-col gap-5">
              {menuItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  target={item.external ? "_blank" : undefined}
                  rel={item.external ? "noopener noreferrer" : undefined}
                  onClick={() => setIsOpen(false)}
                  className="text-base font-extrabold text-slate-900 hover:text-brand-forest transition-colors"
                >
                  {item.name}
                </a>
              ))}
              <hr className="border-slate-100 my-1" />
              <a
                href="#contacto"
                onClick={() => setIsOpen(false)}
                className="flex items-center justify-center gap-2 w-full text-center text-xs font-bold uppercase tracking-wider text-white bg-brand-forest hover:bg-brand-forest/90 px-4 py-3.5 rounded-xl transition-colors"
              >
                Apertura de Cuenta
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
