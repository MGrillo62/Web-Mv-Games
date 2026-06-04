"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Award, Sparkles } from "lucide-react";

export default function KeyData() {
  return (
    <section className="py-12 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        
        {/* Infographic Container */}
        <div className="boutique-card rounded-3xl p-8 md:p-12 bg-slate-50/40 border border-slate-100 flex flex-col md:grid md:grid-cols-3 gap-8 md:gap-12 md:divide-x md:divide-slate-200/60 divide-y md:divide-y-0 divide-slate-200/60">
          
          {/* 1. 4+ Verticales */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-center md:items-start text-center md:text-left md:px-4 space-y-3"
          >
            <div className="flex items-center gap-3">
              <span className="text-4xl sm:text-5xl font-extrabold tracking-tight text-brand-forest">
                4+
              </span>
              <div className="p-1.5 rounded-lg bg-brand-forest/10 text-brand-forest">
                <Award className="h-5 w-5" />
              </div>
            </div>
            <div>
              <h4 className="text-sm font-bold text-slate-800 uppercase tracking-wider mb-1">
                Verticales Integradas
              </h4>
              <p className="text-xs text-slate-700 font-medium leading-relaxed">
                Distribución ágil, servicios editoriales personalizados, producción a medida con calidad global y consultoría estratégica en un solo socio.
              </p>
            </div>
          </motion.div>

          {/* 2. 100% Profesional */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex flex-col items-center md:items-start text-center md:text-left pt-6 md:pt-0 md:pl-8 md:pr-4 space-y-3"
          >
            <div className="flex items-center gap-3">
              <span className="text-4xl sm:text-5xl font-extrabold tracking-tight text-brand-blue">
                100%
              </span>
              <div className="p-1.5 rounded-lg bg-brand-blue/10 text-brand-blue">
                <ShieldCheck className="h-5 w-5" />
              </div>
            </div>
            <div>
              <h4 className="text-sm font-bold text-slate-800 uppercase tracking-wider mb-1">
                Enfoque Profesional
              </h4>
              <p className="text-xs text-slate-700 font-medium leading-relaxed">
                Procesos comerciales optimizados sin margen de error, soporte comercial B2B personalizado y viabilidad financiera para cada tirada.
              </p>
            </div>
          </motion.div>

          {/* 3. Calidad y Excelencia (Replaced Neon references) */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col items-center md:items-start text-center md:text-left pt-6 md:pt-0 md:pl-8 space-y-3"
          >
            <div className="flex items-center gap-3">
              <span className="text-4xl sm:text-5xl font-extrabold tracking-tight text-brand-purple">
                Premium
              </span>
              <div className="p-1.5 rounded-lg bg-brand-purple/10 text-brand-purple">
                <Sparkles className="h-5 w-5 text-brand-purple" />
              </div>
            </div>
            <div>
              <h4 className="text-sm font-bold text-slate-800 uppercase tracking-wider mb-1">
                Calidad e Innovación
              </h4>
              <p className="text-xs text-slate-700 font-medium leading-relaxed">
                Catálogo curado con los mejores títulos mundiales. Coediciones cuidadas al detalle con materiales de alta resistencia, acabados premium y componentes duraderos.
              </p>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
