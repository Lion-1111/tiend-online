import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowLeft } from "lucide-react";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { formatPrice, products } from "@/lib/products";
import { useCart } from "@/lib/cart";

export const Route = createFileRoute("/producto/$id")({
  loader: ({ params }) => {
    const product = products.find((p) => p.id === params.id);
    if (!product) throw notFound();
    return { product };
  },
  head: ({ loaderData }) => ({
    meta: loaderData
      ? [
          { title: `${loaderData.product.name} — LØN & CO` },
          { name: "description", content: loaderData.product.description },
          { property: "og:title", content: loaderData.product.name },
          { property: "og:description", content: loaderData.product.description },
          { property: "og:image", content: loaderData.product.image },
        ]
      : [],
  }),
  notFoundComponent: () => (
    <div className="min-h-screen flex items-center justify-center">Producto no encontrado</div>
  ),
  errorComponent: ({ error }) => (
    <div className="min-h-screen flex items-center justify-center text-sm text-neutral-600">
      {error.message}
    </div>
  ),
  component: ProductoDetalle,
});

function ProductoDetalle() {
  const { product } = Route.useLoaderData();
  const [size, setSize] = useState<number | null>(null);
  const hasSizes = product.sizes.length > 0 && product.sizes[0] !== 0;
  const { addItem } = useCart();

  const handleAddToCart = () => {
    if (hasSizes && !size) return;
    addItem(product, size ?? 0, 1);
  };

  return (
    <div className="min-h-screen bg-white text-black">
      <SiteHeader />
      <div className="max-w-7xl mx-auto px-6 pt-6 pb-20">
        <Link
          to="/catalogo"
          className="inline-flex items-center gap-2 text-xs font-bold tracking-widest hover:opacity-60"
        >
          <ArrowLeft className="w-4 h-4" /> VOLVER
        </Link>

        <div className="mt-6 grid md:grid-cols-2 gap-12">
          <div className="bg-neutral-100 aspect-square overflow-hidden">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover"
            />
          </div>

          <div>
            <div className="text-xs uppercase tracking-widest text-neutral-500">
              {product.brand}
            </div>
            <h1 className="text-4xl md:text-5xl font-black tracking-tight mt-2">
              {product.name}
            </h1>
            <div className="mt-4 flex items-baseline gap-3">
              <span className="text-2xl font-bold">{formatPrice(product.price)}</span>
              {product.oldPrice && (
                <span className="text-lg text-neutral-400 line-through">
                  {formatPrice(product.oldPrice)}
                </span>
              )}
            </div>

            {hasSizes && (
              <div className="mt-10">
                <div className="text-xs font-bold tracking-widest mb-3">TALLA</div>
                <div className="grid grid-cols-6 gap-2">
                  {product.sizes.map((s: number) => (
                    <button
                      key={s}
                      onClick={() => setSize(s)}
                      className={`py-3 border text-sm font-semibold transition ${
                        size === s
                          ? "border-black bg-black text-white"
                          : "border-neutral-300 hover:border-black"
                      }`}
                    >
                      {s}
                    </button>
                  ))}
                </div>
                {!size && (
                  <p className="mt-3 text-xs text-neutral-500">
                    Selecciona una talla para continuar
                  </p>
                )}
              </div>
            )}

            <button
              onClick={handleAddToCart}
              disabled={hasSizes && !size}
              className="mt-8 w-full bg-black text-white py-4 text-xs font-bold tracking-widest disabled:bg-neutral-300 disabled:cursor-not-allowed hover:bg-neutral-800"
            >
              AGREGAR AL CARRITO
            </button>

            <div className="mt-12">
              <h3 className="text-xs font-bold tracking-widest mb-3">DESCRIPCIÓN</h3>
              <p className="text-neutral-700 leading-relaxed">{product.description}</p>
            </div>
          </div>
        </div>
      </div>
      <SiteFooter />
    </div>
  );
}
