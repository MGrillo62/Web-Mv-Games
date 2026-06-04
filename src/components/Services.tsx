"use client";

import { motion } from "framer-motion";
import { Truck, BookOpen, Settings, Briefcase, Check } from "lucide-react";

export default function Services() {
  const services = [
    {
      id: "distribucion",
      title: "Distribución",
      subtitle: "Abastecimiento a Tiendas",
      description: "Conectamos editoriales internacionales con la red más amplia de tiendas minoristas, librerías y jugueterías nacionales e internacionales.",
      icon: Truck,
      accentColor: "text-brand-forest",
      ringColor: "border-brand-mint/30 bg-brand-mint/5",
      dotBg: "bg-brand-mint",
      features: [
        "Catálogo B2B siempre actualizado",
        "Despachos nacionales e internacionales",
        "Plataforma ágil para pedidos",
        "Soporte comercial continuo"
      ]
    },
    {
      id: "editorial",
      title: "Editorial",
      subtitle: "Coedición y Publicación",
      description: "Traducimos, coeditamos y traemos al mercado títulos exitosos a nivel mundial, apoyando también la creación de autores locales.",
      icon: BookOpen,
      accentColor: "text-brand-purple",
      ringColor: "border-brand-lilac/30 bg-brand-lilac/5",
      dotBg: "bg-brand-lilac",
      features: [
        "Localización de manuales y textos",
        "Lanzamientos coordinados en la región",
        "Playtesting profesional y feedback",
        "Firma de derechos internacionales"
      ]
    },
    {
      id: "produccion",
      title: "Producción",
      subtitle: "Calidad de Exportación",
      description: "Fabricamos juegos de mesa bajo estrictas normas de control de calidad, asegurando la durabilidad de cada componente.",
      icon: Settings,
      accentColor: "text-brand-blue",
      ringColor: "border-brand-blue/20 bg-brand-blue/5",
      dotBg: "bg-brand-blue",
      features: [
        "Materiales eco-friendly certificados",
        "Acabados premium en cartas y cajas",
        "Miniaturas y troqueles de alta definición",
        "Logística de importación integrada"
      ]
    },
    {
      id: "consultoria",
      title: "Consultoría",
      subtitle: "Asesoramiento Estratégico",
      description: "Orientamos a creadores y nuevas editoriales en todo el ciclo de vida del juego: desde el prototipo hasta su venta final.",
      icon: Briefcase,
      accentColor: "text-brand-forest",
      ringColor: "border-brand-forest/20 bg-brand-forest/5",
      dotBg: "bg-brand-forest",
      features: [
        "Análisis de viabilidad de costos",
        "Estrategias de distribución y precios",
        "Mentoría en campañas de crowdfunding",
        "Optimización de reglas y accesibilidad"
      ]
    }
  ];

  return (
    <section id="servicios" className="py-24 relative overflow-hidden bg-slate-50/50">
      {/* Background sutil */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[55rem] h-[55rem] rounded-full bg-slate-100 blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <motion.span
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs font-bold uppercase tracking-wider text-brand-forest mb-3 block"
          >
            Servicios Corporativos
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 mb-6 font-display"
          >
            Soluciones 360° para la industria de los <span className="text-brand-forest">Juegos de Mesa</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-800 text-base sm:text-lg font-semibold leading-relaxed"
          >
            Abarcamos toda la cadena de valor del juego de mesa moderno, garantizando una distribución impecable y de alta calidad.
          </motion.p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, idx) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="boutique-card boutique-card-hover rounded-2xl p-6 flex flex-col justify-between h-full bg-white group"
              >
                <div>
                  
                  {/* Physical Engraved Style Icon */}
                  <div className="flex justify-between items-start mb-6">
                    <div className={`inline-flex items-center justify-center p-2 rounded-full border shadow-sm ${service.ringColor} group-hover:scale-105 transition-transform duration-300`}>
                      <div className="p-2.5 rounded-full bg-white border border-slate-100 shadow-sm flex items-center justify-center">
                        <Icon className={`h-5 w-5 ${service.accentColor}`} />
                      </div>
                    </div>
                    {/* Small Color Gem Accent representing tokens */}
                    <div className={`h-2.5 w-2.5 rounded-full ${service.dotBg} shadow-sm`} />
                  </div>

                  <span className="block text-[10px] font-bold text-slate-700 uppercase tracking-widest mb-1.5">
                    {service.subtitle}
                  </span>
                  
                  <h3 className="text-lg font-bold text-slate-900 mb-3 group-hover:text-brand-forest transition-colors font-display">
                    {service.title}
                  </h3>
                  
                  <p className="text-xs text-slate-800 font-semibold mb-6 leading-relaxed">
                    {service.description}
                  </p>
                </div>

                {/* Features List */}
                <ul className="space-y-3 pt-5 border-t border-slate-150 mt-auto">
                  {service.features.map((feat) => (
                    <li key={feat} className="flex items-start gap-2.5 text-xs text-slate-800 font-bold">
                      <div className="p-0.5 rounded-full bg-brand-forest/10 text-brand-forest shrink-0 mt-0.5">
                        <Check className="h-3 w-3" />
                      </div>
                      <span className="leading-tight">{feat}</span>
                    </li>
                  ))}
                </ul>

              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
