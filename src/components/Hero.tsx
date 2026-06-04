"use client";

import { motion } from "framer-motion";
import { ArrowRight, BookOpen, Settings, Briefcase, Truck, Sparkles } from "lucide-react";

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.1,
      },
    },
  } as const;

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  } as const;

  const verticalTiles = [
    {
      title: "Distribución",
      description: "Logística y abastecimiento ágil para tiendas.",
      icon: Truck,
      borderColor: "border-brand-mint/30 hover:border-brand-mint text-brand-forest",
      shadowColor: "shadow-brand-mint/5",
    },
    {
      title: "Editorial",
      description: "Desarrollo y coedición regional de juegos.",
      icon: BookOpen,
      borderColor: "border-brand-lilac/30 hover:border-brand-lilac text-brand-purple",
      shadowColor: "shadow-brand-lilac/5",
    },
    {
      title: "Producción",
      description: "Fabricación a medida con acabados premium.",
      icon: Settings,
      borderColor: "border-brand-blue/30 hover:border-brand-blue text-brand-blue",
      shadowColor: "shadow-brand-blue/5",
    },
    {
      title: "Consultoría",
      description: "Viabilidad comercial y planes de marketing.",
      icon: Briefcase,
      borderColor: "border-brand-forest/20 hover:border-brand-forest text-brand-forest",
      shadowColor: "shadow-brand-forest/5",
    },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-28 pb-16 overflow-hidden bg-white">
      {/* Subtle Artistic Background Grid */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 right-0 w-[45rem] h-[45rem] rounded-full bg-brand-forest/3 blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[40rem] h-[40rem] rounded-full bg-brand-purple/3 blur-[120px] pointer-events-none" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(15,23,42,0.015)_1px,transparent_1px),linear-gradient(to_bottom,rgba(15,23,42,0.015)_1px,transparent_1px)] bg-[size:3rem_3rem] pointer-events-none" />
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center relative z-10">
        
        {/* Left Column: Headline and CTAs */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="lg:col-span-7 flex flex-col items-start text-left space-y-6 sm:space-y-8"
        >
          {/* Subtle Banner */}
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-forest/5 border border-brand-forest/10 text-xs font-bold uppercase tracking-wider text-brand-forest"
          >
            <Sparkles className="h-3.5 w-3.5 text-brand-forest" />
            DISTRIBUIDORA & EDITORIAL LÍDER
          </motion.div>

          {/* Headline */}
          <motion.h1
            variants={itemVariants}
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-slate-900 leading-tight font-display"
          >
            Conectamos ideas, <br />
            publicamos emoción y <br />
            <span className="text-brand-blue">distribuimos diversión.</span>
          </motion.h1>

          {/* Description */}
          <motion.p
            variants={itemVariants}
            className="text-base sm:text-lg md:text-xl text-slate-800 max-w-2xl font-semibold leading-relaxed"
          >
            Somos el socio estratégico integral en la industria de juegos de mesa. Abastecemos a tiendas, coeditamos con autores locales y producimos juegos con calidad global.
          </motion.p>

          {/* CTAs */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
          >
            <a
              href="#catalogo"
              className="flex items-center justify-center gap-2 bg-brand-mint hover:bg-brand-mint/90 text-brand-purple font-bold px-8 py-4 rounded-xl shadow-sm hover:shadow-md hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300 text-center text-sm uppercase tracking-wider"
            >
              Ver Catálogo
              <ArrowRight className="h-4.5 w-4.5" />
            </a>
            
            <a
              href="#contacto"
              className="flex items-center justify-center gap-2 bg-brand-purple hover:bg-brand-purple/95 text-white font-bold px-8 py-4 rounded-xl shadow-sm hover:shadow-md hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300 text-center text-sm uppercase tracking-wider"
            >
              Asesoría Comercial
            </a>
          </motion.div>
        </motion.div>

        {/* Right Column: Dynamic Visual Representation */}
        <div className="lg:col-span-5 flex items-center justify-center">
          <div className="grid grid-cols-2 gap-4 w-full max-w-md mx-auto relative">
            
            {/* Center decorative accent (physical compass / coin glow effect) */}
            <div className="absolute inset-0 bg-brand-forest/5 blur-[50px] -z-10 rounded-full" />

            {verticalTiles.map((tile, idx) => {
              const TileIcon = tile.icon;
              return (
                <motion.div
                  key={tile.title}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.2 + idx * 0.1 }}
                  whileHover={{ 
                    y: -4, 
                    boxShadow: "0 12px 30px -4px rgba(15, 23, 42, 0.06)",
                    transition: { duration: 0.2 }
                  }}
                  className={`boutique-card p-5 rounded-2xl border ${tile.borderColor} ${tile.shadowColor} flex flex-col justify-between h-[180px] cursor-pointer group`}
                >
                  <div className="flex justify-between items-start">
                    <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-100 group-hover:bg-white transition-colors">
                      <TileIcon className="h-5 w-5" />
                    </div>
                    <span className="text-[10px] font-bold text-slate-400 group-hover:text-brand-forest">0{idx + 1}</span>
                  </div>
                  <div>
                    <h3 className="text-base font-extrabold text-slate-900 mb-1 group-hover:text-brand-forest transition-colors">
                      {tile.title}
                    </h3>
                    <p className="text-xs text-slate-700 font-medium leading-relaxed">
                      {tile.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
