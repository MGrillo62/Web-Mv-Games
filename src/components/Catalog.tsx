"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, SlidersHorizontal, AlertCircle, CheckCircle, Package } from "lucide-react";
import Image from "next/image";

interface ProductType {
  id: string;
  name: string;
  description: string | null;
  stock: number;
  category: string;
  salePrice: number;
  sku: string;
  imageUrl: string | null;
  tipo: string;
}

interface CatalogProps {
  products: ProductType[];
}


export default function Catalog({ products }: CatalogProps) {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("TODOS");
  const [visibleCount, setVisibleCount] = useState(8);

  // 1. Filter out only products of type "PRODUCTO" (launches are handled in the Launches section)
  const catalogProducts = useMemo(() => {
    return products.filter((p) => p.tipo.toUpperCase() === "PRODUCTO");
  }, [products]);

  // 2. Extract unique categories dynamically for filter buttons
  const categories = useMemo(() => {
    const unique = new Set(catalogProducts.map((p) => p.category.trim().toUpperCase()));
    return ["TODOS", ...Array.from(unique)];
  }, [catalogProducts]);

  // 3. Filter products by search term and selected category
  const filteredProducts = useMemo(() => {
    return catalogProducts.filter((product) => {
      const matchesSearch =
        product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.sku.toLowerCase().includes(searchTerm.toLowerCase());

      const matchesCategory =
        selectedCategory === "TODOS" ||
        product.category.trim().toUpperCase() === selectedCategory;

      return matchesSearch && matchesCategory;
    });
  }, [catalogProducts, searchTerm, selectedCategory]);

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + 8);
  };


  // Stock status helper (improved text legibility)
  const getStockBadge = (stock: number) => {
    if (stock === 0) {
      return (
        <span className="flex items-center gap-1.5 text-[10px] font-bold text-red-700 bg-red-50 px-2.5 py-1 rounded-md border border-red-200">
          <span className="h-1.5 w-1.5 rounded-full bg-red-600" /> Agotado
        </span>
      );
    }
    if (stock <= 10) {
      return (
        <span className="flex items-center gap-1.5 text-[10px] font-bold text-amber-800 bg-amber-50 px-2.5 py-1 rounded-md border border-amber-200">
          <span className="h-1.5 w-1.5 rounded-full bg-amber-600 animate-pulse" /> Poco Stock ({stock})
        </span>
      );
    }
    return (
      <span className="flex items-center gap-1.5 text-[10px] font-bold text-brand-forest bg-emerald-50 px-2.5 py-1 rounded-md border border-emerald-250">
        <span className="h-1.5 w-1.5 rounded-full bg-brand-forest" /> En Stock
      </span>
    );
  };

  return (
    <section id="catalogo" className="py-24 relative overflow-hidden bg-white border-t border-slate-100">
      {/* Background decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-0 w-[40rem] h-[40rem] rounded-full bg-slate-50 blur-[130px] -translate-x-1/2" />
        <div className="absolute bottom-0 right-0 w-[35rem] h-[35rem] rounded-full bg-slate-50 blur-[130px] translate-x-1/4" />
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-wider text-brand-forest mb-3 block">
            Catálogo Comercial
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 mb-6 font-display">
            Nuestros <span className="text-brand-forest">Juegos en Distribución</span>
          </h2>
          <p className="text-slate-800 text-base sm:text-lg font-medium leading-relaxed">
            Explora nuestra colección lista para abastecer tu tienda. Ofrecemos juegos modernos con alta rotación y de la mejor calidad.
          </p>
        </div>

        {/* Filter Toolbar */}
        <div className="boutique-card p-4 md:p-6 rounded-2xl border-slate-100 shadow-sm mb-8 flex flex-col md:flex-row gap-4 items-center justify-between">
          
          {/* Search Input */}
          <div className="relative w-full md:max-w-xs">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-500" />
            <input
              type="text"
              placeholder="Buscar por nombre o SKU..."
              value={searchTerm}
              onChange={(e) => {
                setSearchTerm(e.target.value);
                setVisibleCount(8); // Reset count on search
              }}
              className="w-full pl-10 pr-4 py-2.5 bg-slate-50 hover:bg-slate-100/50 border border-slate-200 rounded-xl text-xs text-slate-900 placeholder-slate-500 focus:outline-none focus:border-brand-forest focus:ring-1 focus:ring-brand-forest/10 transition-all font-bold"
            />
          </div>

          {/* Icon indicator */}
          <div className="hidden lg:flex items-center gap-2 text-xs font-bold text-slate-700">
            <SlidersHorizontal className="h-4 w-4 text-slate-600" />
            <span>Filtros rápidos por categoría</span>
          </div>

        </div>

        {/* Category Filter Buttons */}
        <div className="flex flex-wrap gap-2 justify-center mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => {
                setSelectedCategory(cat);
                setVisibleCount(8); // Reset count on category change
              }}
              className={`px-5 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider border transition-all duration-200 ${
                selectedCategory === cat
                  ? "bg-brand-mint text-brand-purple border-brand-mint shadow-sm scale-102"
                  : "bg-white text-slate-700 border-slate-350 hover:border-slate-400 hover:bg-slate-50"
              }`}
            >
              {cat === "TODOS" ? "Todos los juegos" : cat}
            </button>
          ))}
        </div>

        {/* Catalog Grid */}
        {filteredProducts.length === 0 ? (
          <div className="boutique-card p-12 text-center rounded-3xl border-slate-100 max-w-md mx-auto my-12 bg-slate-50/50">
            <Package className="h-10 w-10 text-slate-500 mx-auto mb-4 opacity-70" />
            <h3 className="text-base font-bold text-slate-800 mb-1">No se encontraron productos</h3>
            <p className="text-xs text-slate-700 font-medium">
              Prueba cambiando la categoría de filtro o escribiendo otro término de búsqueda.
            </p>
          </div>
        ) : (
          <>
            <motion.div 
              layout
              className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8"
            >
              <AnimatePresence mode="popLayout">
                {filteredProducts.slice(0, visibleCount).map((product) => (
                  <motion.div
                    layout
                    key={product.id}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.3 }}
                    className="boutique-card rounded-2xl border border-slate-200/60 overflow-hidden flex flex-col justify-between h-full bg-white hover:border-brand-mint/55 transition-all duration-300 hover:shadow-xl hover:shadow-slate-100 group cursor-pointer"
                  >
                    
                    {/* Art Gallery Frame Cover Container */}
                    <div className="relative aspect-square w-full bg-slate-50 flex items-center justify-center p-4 border-b border-slate-100 overflow-hidden">
                      <div className="w-full h-full border border-slate-200/60 rounded-xl overflow-hidden shadow-inner bg-white relative">
                        {product.imageUrl ? (
                          <Image
                            src={product.imageUrl}
                            alt={product.name}
                            fill
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                            className="object-contain p-2 group-hover:scale-102 transition-transform duration-500"
                            loading="lazy"
                          />
                        ) : (
                          <div className="w-full h-full flex flex-col items-center justify-center text-slate-400 bg-slate-50/50">
                            <Package className="h-8 w-8 opacity-40 mb-2" />
                            <span className="text-[9px] uppercase tracking-widest text-slate-500 font-bold">Sin Imagen</span>
                          </div>
                        )}
                      </div>

                      {/* Stock badge top right */}
                      <div className="absolute top-6 right-6 z-20">
                        {getStockBadge(product.stock)}
                      </div>
                    </div>

                    {/* Content Details */}
                    <div className="p-6 flex flex-col flex-grow justify-between">
                      <div>
                        {/* Category & SKU */}
                        <div className="flex items-center justify-between mb-2.5">
                          <span className="text-[9px] font-bold uppercase tracking-wider text-brand-forest">
                            {product.category}
                          </span>
                          <span className="text-[9px] font-mono text-slate-800 bg-slate-100 px-1.5 py-0.5 rounded border border-slate-200">
                            SKU: {product.sku}
                          </span>
                        </div>

                        {/* Title */}
                        <h3 className="text-sm font-extrabold text-slate-900 line-clamp-2 group-hover:text-brand-forest transition-colors mb-4 font-display leading-snug">
                          {product.name}
                        </h3>
                      </div>

                      {/* Price */}
                      <div className="pt-4 border-t border-slate-100 mt-auto flex items-baseline justify-between">
                        <span className="text-[10px] text-slate-700 font-bold uppercase tracking-widest">Precio Mayorista</span>
                        <span className="text-base font-extrabold text-slate-900">
                          S/ {product.salePrice.toFixed(2)}
                        </span>
                      </div>
                    </div>

                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>

            {/* Pagination Load More Button */}
            {filteredProducts.length > visibleCount && (
              <div className="text-center mt-12">
                <button
                  onClick={handleLoadMore}
                  className="inline-flex items-center gap-2 border-2 border-brand-mint bg-transparent hover:bg-brand-mint text-brand-purple hover:text-brand-purple font-extrabold px-8 py-3.5 rounded-xl transition-all duration-300 uppercase text-xs tracking-wider shadow-sm hover:shadow-md cursor-pointer"
                >
                  Cargar Más Juegos
                </button>
              </div>
            )}
          </>
        )}

      </div>
    </section>
  );
}
