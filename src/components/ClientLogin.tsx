"use client";

import { ArrowRight, Check } from "lucide-react";

export default function ClientLogin() {
  return (
    <section className="py-20 relative bg-slate-50/50 overflow-hidden border-t border-slate-100">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 right-1/4 w-[25rem] h-[25rem] rounded-full bg-brand-forest/5 blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left info column */}
          <div className="lg:col-span-6 text-left space-y-6">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-purple mb-2 block">
              Portal de Distribuidores
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-display">
              Accede a tu cuenta de <br />
              <span className="text-brand-purple">Distribuidor Autorizado</span>
            </h2>
            <p className="text-slate-850 text-sm sm:text-base font-semibold leading-relaxed max-w-lg">
              Los clientes mayoristas registrados tienen acceso exclusivo a tarifas especiales por volumen, inventario en tiempo real, gestión de cotizaciones y descarga de material de marketing.
            </p>
            <div className="space-y-3 pt-2">
              <div className="flex items-center gap-3 text-xs font-bold text-slate-900">
                <div className="h-5 w-5 rounded-full bg-brand-forest/10 flex items-center justify-center text-brand-forest">
                  <Check className="h-3.5 w-3.5" />
                </div>
                <span>Descarga directa de tarifas y catálogos en PDF</span>
              </div>
              <div className="flex items-center gap-3 text-xs font-bold text-slate-900">
                <div className="h-5 w-5 rounded-full bg-brand-forest/10 flex items-center justify-center text-brand-forest">
                  <Check className="h-3.5 w-3.5" />
                </div>
                <span>Historial de órdenes y seguimiento de despachos</span>
              </div>
            </div>
          </div>

          {/* Right login card column */}
          <div className="lg:col-span-6 flex justify-center">
            <div className="w-full max-w-md bg-white rounded-3xl border border-slate-200/80 shadow-xl p-8 flex flex-col justify-between space-y-6 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-brand-forest via-brand-mint to-brand-purple" />
              <div>
                <h3 className="text-xl font-extrabold text-slate-900 font-display mb-2.5">Ingresar al Gestor</h3>
                <p className="text-xs text-slate-700 leading-relaxed font-semibold mb-1">
                  Accede de forma directa a nuestro gestor de ventas externo para consultar precios mayoristas vigentes, realizar tus pedidos en tiempo real y coordinar envíos.
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100">
                <a
                  href="https://gestorde-ventas.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2.5 w-full bg-brand-purple hover:bg-brand-purple/95 text-white font-extrabold text-xs py-4 rounded-xl transition-all shadow-md shadow-brand-purple/10 hover:shadow-lg hover:shadow-brand-purple/20 active:translate-y-0.5 text-center uppercase tracking-wider cursor-pointer"
                >
                  Entrar al Portal B2B
                  <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
