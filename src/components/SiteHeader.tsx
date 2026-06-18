import { Link } from "@tanstack/react-router";
import { Search, ShoppingBag } from "lucide-react";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 bg-white border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link to="/" className="font-black tracking-tight text-xl">
          LØN & CO
        </Link>
        <nav className="hidden md:flex items-center gap-8 text-xs font-semibold tracking-widest">
          <a href="#hero" className="hover:opacity-60">
            INICIO
          </a>
          <Link to="/catalogo" search={{ categoria: "hombre" }} className="hover:opacity-60">
            HOMBRE
          </Link>
          <Link to="/catalogo" search={{ categoria: "mujer" }} className="hover:opacity-60">
            MUJER
          </Link>
          <Link to="/catalogo" search={{ categoria: "ninos" }} className="hover:opacity-60">
            NIÑOS
          </Link>
          <Link to="/catalogo" search={{ categoria: "accesorios" }} className="hover:opacity-60">
            ACCESORIOS
          </Link>
          <Link to="/catalogo" className="hover:opacity-60 text-red-600">
            OFERTAS
          </Link>
        </nav>
        <div className="flex items-center gap-4">
          <button aria-label="Buscar" className="hover:opacity-60">
            <Search className="w-5 h-5" />
          </button>
          <button aria-label="Carrito" className="hover:opacity-60">
            <ShoppingBag className="w-5 h-5" />
          </button>
        </div>
      </div>
    </header>
  );
}
