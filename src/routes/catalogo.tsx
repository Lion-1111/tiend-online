import { createFileRoute } from "@tanstack/react-router";
import { useMemo } from "react";
import { z } from "zod";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { ProductCard } from "@/components/ProductCard";
import { products } from "@/lib/products";

const searchSchema = z.object({
  categoria: z.enum(["hombre", "mujer", "ninos", "accesorios"]).optional(),
  q: z.string().optional(),
});

export const Route = createFileRoute("/catalogo")({
  validateSearch: searchSchema,
  head: () => ({
    meta: [
      { title: "Catálogo — LØN & CO" },
      {
        name: "description",
        content: "Explora todos los productos: zapatillas, ropa y accesorios de las mejores marcas.",
      },
    ],
  }),
  component: Catalogo,
});

function Catalogo() {
  const { categoria, q } = Route.useSearch();
  
  // Optimizamos el filtrado con useMemo para que solo se recalcule si cambia la URL
  const filtered = useMemo(() => {
    let res = products;
    if (categoria) res = res.filter((p) => p.category === categoria);
    if (q) {
      const qLower = q.toLowerCase();
      res = res.filter(p => 
        p.name.toLowerCase().includes(qLower) || 
        p.brand.toLowerCase().includes(qLower) || 
        p.description.toLowerCase().includes(qLower)
      );
    }
    return res;
  }, [categoria, q]);

  const title = q ? `BUSCANDO: "${q.toUpperCase()}"` : (categoria ? categoria.toUpperCase() : "TODO");

  return (
    <div className="min-h-screen bg-white text-black">
      <SiteHeader />
      <div className="max-w-7xl mx-auto px-6 pt-10 pb-20">
        <div className="flex items-end justify-between mb-10 border-b border-neutral-200 pb-6">
          <div>
            <h1 className="text-5xl md:text-6xl font-black tracking-tight">{title}</h1>
            <div className="text-sm text-neutral-500 mt-2">
              {filtered.length} producto{filtered.length === 1 ? "" : "s"}
            </div>
          </div>
          <button className="text-xs font-bold tracking-widest border border-black px-4 py-2 hover:bg-black hover:text-white">
            FILTROS
          </button>
        </div>
        {filtered.length === 0 ? (
          <div className="py-20 text-center text-neutral-500">
            No hay productos en esta categoría.
          </div>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filtered.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        )}
      </div>
      <SiteFooter />
    </div>
  );
}
