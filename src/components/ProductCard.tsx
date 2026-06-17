import { Link } from "@tanstack/react-router";
import { formatPrice, type Product } from "@/lib/products";

export function ProductCard({ product }: { product: Product }) {
  const discount = product.oldPrice
    ? Math.round(((product.oldPrice - product.price) / product.oldPrice) * 100)
    : 0;
  return (
    <Link
      to="/producto/$id"
      params={{ id: product.id }}
      className="group block"
    >
      <div className="relative aspect-square overflow-hidden bg-neutral-100">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute top-3 left-3 flex flex-col gap-1">
          {product.isNew && (
            <span className="bg-black text-white text-[10px] font-bold tracking-widest px-2 py-1">
              NUEVO
            </span>
          )}
          {discount > 0 && (
            <span className="bg-red-600 text-white text-[10px] font-bold tracking-widest px-2 py-1">
              -{discount}%
            </span>
          )}
        </div>
      </div>
      <div className="pt-3">
        <div className="text-xs text-neutral-500 uppercase tracking-wider">
          {product.brand}
        </div>
        <div className="font-semibold mt-1">{product.name}</div>
        <div className="mt-1 flex items-baseline gap-2">
          <span className="font-bold">{formatPrice(product.price)}</span>
          {product.oldPrice && (
            <span className="text-sm text-neutral-400 line-through">
              {formatPrice(product.oldPrice)}
            </span>
          )}
        </div>
      </div>
    </Link>
  );
}
