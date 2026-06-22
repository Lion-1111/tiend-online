import { Link, useNavigate } from "@tanstack/react-router";
import { Search, ShoppingBag, User, Menu, X, ChevronRight } from "lucide-react";
import { useCart } from "@/lib/cart";
import { useState, useEffect } from "react";

export function SiteHeader() {
  const { open, totalItems } = useCart();
  const [searchQuery, setSearchQuery] = useState("");
  const [isMobileSearchOpen, setIsMobileSearchOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  // Prevent scroll when modals are open
  useEffect(() => {
    if (isMobileSearchOpen || isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileSearchOpen, isMobileMenuOpen]);

  const handleSearch = (e: React.FormEvent, term?: string) => {
    e.preventDefault();
    const query = term || searchQuery.trim();
    if (query) {
      navigate({ to: "/catalogo", search: { q: query } });
      setSearchQuery("");
      setIsMobileSearchOpen(false);
      setIsMobileMenuOpen(false);
    }
  };

  const popularSearches = ["sastrería", "oversize", "denim", "streetwear", "camisas", "accesorios"];
  
  const navLinks = [
    { label: "Inicio", to: "/tienda", search: undefined },
    { label: "Hombre", to: "/catalogo", search: { categoria: "hombre" } },
    { label: "Mujer", to: "/catalogo", search: { categoria: "mujer" } },
    { label: "Niños", to: "/catalogo", search: { categoria: "ninos" } },
    { label: "Accesorios", to: "/catalogo", search: { categoria: "accesorios" } },
    { label: "Ofertas", to: "/catalogo", search: undefined },
  ];

  return (
    <>
      {/* 1. Barra de Utilidad Superior (Desktop) */}
      <div className="bg-[#f5f5f5] hidden md:block border-b border-neutral-200">
        <div className="max-w-[1920px] mx-auto px-10 h-9 flex items-center justify-end text-[11px] font-medium text-neutral-800 tracking-wide">
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-black transition-colors">Buscar tienda</a>
            <span className="text-neutral-400 font-light">|</span>
            <a href="#" className="hover:text-black transition-colors">Ayuda</a>
            <span className="text-neutral-400 font-light">|</span>
            <a href="#" className="hover:text-black transition-colors">Únete</a>
            <span className="text-neutral-400 font-light">|</span>
            <a href="#" className="hover:text-black transition-colors">Iniciar sesión</a>
          </div>
        </div>
      </div>

      <header className="sticky top-0 z-40 bg-white border-b border-neutral-200">
        <div className="max-w-[1920px] mx-auto px-5 md:px-10 h-16 md:h-[70px] flex items-center justify-between">
          
          {/* Logo (Lado Izquierdo) */}
          <div className="flex-1 md:flex-none flex items-center">
            <Link to="/" className="font-black tracking-tighter text-2xl" onClick={() => setIsMobileMenuOpen(false)}>
              LØN & CO
            </Link>
          </div>

          {/* 2. Menú Centrado (Desktop) */}
          <nav className="hidden md:flex flex-1 justify-center items-center gap-7 text-[15px] font-medium">
            {navLinks.map(link => (
              <Link
                key={link.label}
                to={link.to}
                search={link.search as any}
                className="hover:border-b-2 border-black pb-1 border-transparent transition-all"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* 3. Utilidades y Buscador (Lado Derecho) */}
          <div className="flex justify-end items-center gap-4 md:gap-5">
            
            {/* Buscador de Escritorio (Pill-shape gris) */}
            <form onSubmit={handleSearch} className="hidden md:flex relative group">
              <div className="bg-[#f5f5f5] hover:bg-[#e5e5e5] transition-colors rounded-full flex items-center px-3 py-2">
                <button type="button" onClick={handleSearch} className="hover:opacity-70">
                  <Search className="w-5 h-5 text-neutral-800" />
                </button>
                <input
                  type="text"
                  placeholder="Buscar"
                  className="bg-transparent border-none outline-none ml-2 text-sm w-32 focus:w-48 transition-all"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
            </form>

            {/* Iconos de Navegación Móvil y Escritorio */}
            <div className="flex items-center gap-4 md:gap-4">
              {/* Lupa (Solo móvil) */}
              <button className="md:hidden hover:opacity-60 transition-opacity" onClick={() => setIsMobileSearchOpen(true)}>
                <Search className="w-[22px] h-[22px]" strokeWidth={2} />
              </button>
              
              {/* Usuario (Todos los dispositivos) */}
              <button className="hidden md:block hover:opacity-60 transition-opacity">
                <User className="w-[22px] h-[22px]" strokeWidth={2} />
              </button>
              <button className="md:hidden hover:opacity-60 transition-opacity">
                <User className="w-[22px] h-[22px]" strokeWidth={2} />
              </button>

              {/* Carrito (Todos los dispositivos) */}
              <button aria-label="Carrito" onClick={open} className="hover:opacity-60 relative transition-opacity">
                <ShoppingBag className="w-[22px] h-[22px]" strokeWidth={2} />
                {totalItems > 0 && (
                  <span className="absolute -top-1 -right-2 bg-black text-white text-[10px] font-bold rounded-full w-4 h-4 flex items-center justify-center">
                    {totalItems}
                  </span>
                )}
              </button>

              {/* Menú Hamburguesa (Solo móvil) */}
              <button className="md:hidden hover:opacity-60 transition-opacity pl-1" onClick={() => setIsMobileMenuOpen(true)}>
                <Menu className="w-7 h-7" strokeWidth={1.5} />
              </button>
            </div>
          </div>
          
        </div>
      </header>

      {/* OVERLAY DE BÚSQUEDA MÓVIL (PANTALLA COMPLETA) */}
      <div 
        className={`fixed inset-0 bg-white z-50 transition-opacity duration-200 md:hidden flex flex-col ${
          isMobileSearchOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="flex items-center px-4 py-3 gap-3 border-b border-neutral-100">
          <form onSubmit={handleSearch} className="flex-1 relative flex items-center">
            <Search className="w-5 h-5 absolute left-3 text-black" strokeWidth={2} />
            <input
              type="text"
              autoFocus={isMobileSearchOpen}
              placeholder="Buscar"
              className="w-full bg-[#f5f5f5] rounded-full py-2.5 pl-10 pr-4 outline-none text-[15px]"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </form>
          <button 
            onClick={() => setIsMobileSearchOpen(false)}
            className="text-[15px] font-medium hover:opacity-60 px-1"
          >
            Cancelar
          </button>
        </div>
        
        <div className="p-6">
          <h3 className="text-[15px] font-medium text-neutral-500 mb-4">Términos de búsqueda populares</h3>
          <div className="flex flex-wrap gap-2">
            {popularSearches.map(term => (
              <button
                key={term}
                onClick={(e) => handleSearch(e, term)}
                className="bg-[#f5f5f5] hover:bg-neutral-200 text-black px-5 py-2.5 rounded-full text-[15px] font-medium transition-colors"
              >
                {term}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* OVERLAY DE MENÚ HAMBURGUESA (PANTALLA COMPLETA) */}
      <div 
        className={`fixed inset-0 bg-white z-50 transition-transform duration-300 md:hidden flex flex-col ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between px-6 py-4">
          <div className="w-6" /> {/* Espaciador */}
          <button onClick={() => setIsMobileMenuOpen(false)} className="p-1 hover:bg-neutral-100 rounded-full">
            <X className="w-7 h-7" strokeWidth={1.5} />
          </button>
        </div>
        
        <div className="flex-1 overflow-y-auto px-6 py-4">
          <nav className="flex flex-col mb-10">
            {navLinks.map((link, i) => (
              <Link
                key={link.label}
                to={link.to}
                search={link.search as any}
                className={`flex justify-between items-center py-4 text-[22px] font-medium ${i !== navLinks.length - 1 ? 'border-b border-neutral-100' : ''}`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
                <ChevronRight className="w-5 h-5 text-neutral-400" />
              </Link>
            ))}
          </nav>
          
          <div className="mt-8 mb-10">
             <h3 className="text-xl font-medium mb-6">Convertirse en Miembro de LØN</h3>
             <div className="flex flex-col gap-3">
               <button className="w-full bg-black text-white py-3.5 rounded-full font-medium text-[15px]">Únete</button>
               <button className="w-full border border-neutral-300 py-3.5 rounded-full font-medium text-[15px]">Iniciar sesión</button>
             </div>
          </div>

          <div className="flex flex-col gap-6 text-[17px] font-medium text-neutral-600 mb-8">
            <a href="#" className="flex items-center gap-4 hover:text-black"><ShoppingBag className="w-6 h-6" strokeWidth={1.5}/> Pedidos</a>
            <a href="#" className="flex items-center gap-4 hover:text-black"><Search className="w-6 h-6" strokeWidth={1.5}/> Buscar tienda</a>
            <a href="#" className="flex items-center gap-4 hover:text-black"><User className="w-6 h-6" strokeWidth={1.5}/> Ayuda</a>
          </div>
        </div>
      </div>
    </>
  );
}
