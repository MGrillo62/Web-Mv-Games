"use client";

import { motion } from "framer-motion";
import { Calendar, Play, Info } from "lucide-react";
import Image from "next/image";

interface LaunchType {
  id: string;
  name: string;
  imageUrl: string | null;
  review: string | null;
  videoUrl: string | null;
  estimatedPrice: number;
  dateText: string;
  status: string;
  estimatedTime: string | null;
  arrivalDate: string | null;
}

interface LaunchesProps {
  data: LaunchType[];
}


export default function Launches({ data }: LaunchesProps) {
  const launches = data.length > 0 ? data : [
    {
      id: "fallback-1",
      name: "High Society",
      imageUrl: "https://allplay.com/images/biuv286z/production/927cb43f1fcf4d36a7e42635e63eb532c49ab684-1440x1440.webp?w=1200&q=90&fit=max&auto=format",
      review: "Una alta sociedad donde ostentar tu dinero es la clave de la victoria, pero terminar siendo el más pobre te eliminará instantáneamente del juego. Diseñado por Reiner Knizia.",
      videoUrl: "https://www.youtube.com/watch?v=59v5WTGZdvc",
      estimatedPrice: 120,
      dateText: "Julio 2026",
      status: "TRANSITO",
      estimatedTime: null,
      arrivalDate: null
    }
  ];

  const getStatusStyle = (status: string) => {
    switch (status.toUpperCase()) {
      case "TRANSITO":
        return "bg-brand-blue/10 text-brand-blue border-brand-blue/20";
      case "EDITORIAL":
        return "bg-brand-lilac/10 text-brand-purple border-brand-lilac/20";
      case "CONFIRMADA":
      case "CONFIRMADO":
        return "bg-brand-mint/10 text-brand-forest border-brand-mint/30";
      default:
        return "bg-slate-100 text-slate-700 border-slate-200";
    }
  };

  const getStatusLabel = (status: string) => {
    switch (status.toUpperCase()) {
      case "TRANSITO":
        return "En Tránsito";
      case "EDITORIAL":
        return "En Desarrollo";
      case "CONFIRMADA":
      case "CONFIRMADO":
        return "Confirmado";
      default:
        return status;
    }
  };


  return (
    <section id="novedades" className="py-24 relative overflow-hidden bg-white border-t border-slate-100">
      {/* Background decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-1/10 w-[30rem] h-[30rem] rounded-full bg-slate-50 blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        
        {/* Section Title */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
          <div className="max-w-2xl text-left">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-forest mb-3 block">
              Próximos Lanzamientos
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 mb-4 font-display">
              Novedades <span className="text-brand-purple">Editoriales</span> en camino
            </h2>
            <p className="text-slate-800 font-medium leading-relaxed">
              Sé el primero en enterarte de las novedades que se incorporarán a nuestro catálogo. Planifica tus compras con anticipación.
            </p>
          </div>
          <div className="mt-6 md:mt-0">
            <span className="px-4 py-2 rounded-xl bg-slate-50 border border-slate-100 text-xs font-bold text-slate-700 flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-brand-mint animate-pulse" />
              Sincronizado en tiempo real
            </span>
          </div>
        </div>

        {/* Shelf display wrapping structure */}
        <div className="relative pb-8">
          
          {/* Grid representing products sitting on the shelf */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">
            {launches.map((item, idx) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="boutique-card rounded-2xl border overflow-hidden flex flex-col justify-between h-full bg-white hover:border-brand-lilac/30 hover:shadow-xl hover:shadow-slate-100/50 group"
              >
                {/* Image container */}
                <div className="relative aspect-[4/3] w-full bg-slate-50 border-b border-slate-100 flex items-center justify-center p-4">
                  {item.imageUrl ? (
                    <div className="relative w-full h-full border border-slate-200/50 rounded-xl overflow-hidden shadow-inner bg-white">
                      <Image
                        src={item.imageUrl}
                        alt={item.name}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="object-contain p-2 group-hover:scale-102 transition-transform duration-500"
                      />
                    </div>
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-slate-400">
                      <Info className="h-10 w-10 opacity-30" />
                    </div>
                  )}

                  {/* Status Badges */}
                  <div className="absolute top-4 left-4 flex gap-2 z-20">
                    <span className="px-3 py-1 rounded-lg text-[10px] font-bold uppercase tracking-wider bg-brand-mint text-brand-purple shadow-sm">
                      Nuevo
                    </span>
                    <span className={`px-3 py-1 rounded-lg text-[10px] font-bold uppercase tracking-wider border backdrop-blur-md ${getStatusStyle(item.status)}`}>
                      {getStatusLabel(item.status)}
                    </span>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6 sm:p-8 flex flex-col flex-grow justify-between">
                  <div>
                    {/* Date */}
                    <div className="flex items-center gap-2 text-xs text-brand-purple font-bold mb-3.5">
                      <Calendar className="h-4 w-4 text-brand-purple/90" />
                      <span>Llegada estimada: {item.dateText}</span>
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-brand-purple transition-colors font-display">
                      {item.name}
                    </h3>

                    {/* Description */}
                    <p className="text-xs text-slate-800 font-semibold leading-relaxed mb-6">
                      {item.review || "Sin descripción disponible para este lanzamiento editorial."}
                    </p>
                  </div>

                  {/* Pricing and Actions */}
                  <div className="space-y-4 pt-5 border-t border-slate-100">
                    <div className="flex items-baseline justify-between">
                      <span className="text-[10px] text-slate-700 font-extrabold uppercase tracking-widest">Precio Mayorista Est.</span>
                      <span className="text-lg font-bold text-slate-900">
                        S/ {item.estimatedPrice.toFixed(2)}
                      </span>
                    </div>

                    <div className="pt-2">
                      {item.videoUrl ? (
                        <a
                          href={item.videoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-center gap-2 w-full border border-slate-200 hover:border-slate-350 bg-slate-50 hover:bg-slate-100/80 text-slate-800 text-xs font-semibold py-2.5 rounded-xl transition-all"
                        >
                          <Play className="h-3.5 w-3.5 fill-slate-800 stroke-none" />
                          Video
                        </a>
                      ) : (
                        <div className="text-center py-2.5 text-xs text-slate-700 font-bold bg-slate-50 border border-slate-100 rounded-xl">
                          Video en Desarrollo
                        </div>
                      )}
                    </div>
                  </div>
                </div>

              </motion.div>
            ))}
          </div>

          {/* Polished Display Shelf Ledge Element */}
          <div className="absolute left-0 right-0 bottom-4 h-1.5 bg-gradient-to-r from-slate-200 via-brand-forest/20 to-slate-200 rounded-full shadow-inner z-0 pointer-events-none" />
          <div className="absolute left-4 right-4 bottom-3 h-0.5 bg-white/20 blur-[1px] z-0 pointer-events-none" />
          
        </div>

      </div>
    </section>
  );
}
