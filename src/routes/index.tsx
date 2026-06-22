import { createFileRoute, useNavigate, Link } from "@tanstack/react-router";
import { useEffect, useState, useRef } from "react";
import crossPng from "@/assets/cross.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "LIØN & † — Editorial" },
    ],
  }),
  component: Editorial,
});

const NAV = [
  { label: "HOMBRE", slug: "hombre" as const },
  { label: "MUJER", slug: "mujer" as const },
  { label: "NIÑOS", slug: "ninos" as const },
  { label: "ACCESORIOS", slug: "accesorios" as const },
  { label: "OFERTAS", slug: undefined },
];

const CATEGORIES = [
  {
    code: "M / 01",
    title: "HOMBRE",
    subtitle: "Sastrería de calle",
    tags: "STREETWEAR · OVERSIZE · DENIM",
    pieces: "24 piezas",
    img: "https://images.unsplash.com/photo-1488161628813-04466f872be2?w=1400&q=90&fit=crop",
    slug: "hombre",
  },
  {
    code: "F / 02",
    title: "MUJER",
    subtitle: "Editorial contemporáneo",
    tags: "TAILORING · SLIP · LEATHER",
    pieces: "31 piezas",
    img: "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?w=1400&q=90&fit=crop",
    slug: "mujer",
  },
  {
    code: "U / 03",
    title: "TODO",
    subtitle: "Drop completo sin filtros",
    tags: "ARCHIVO · UNISEX · LIMITED",
    pieces: "55 piezas",
    img: "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?w=1400&q=90&fit=crop",
    slug: null,
  },
];

function CategoryCard({ cat, index, onSelect }: { cat: any, index: number, onSelect: any }) {
  const ref = useRef<HTMLButtonElement>(null);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    if (window.innerWidth >= 768) return;
    const observer = new IntersectionObserver(
      ([entry]) => setIsActive(entry.isIntersecting),
      { threshold: 0.6 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <button
      ref={ref}
      onClick={() => onSelect(cat.slug)}
      data-active={isActive}
      className="group relative overflow-hidden border-b border-white/10 md:border-b-0 md:border-r last:border-r-0 min-h-[50vh] md:min-h-[calc(100vh-88px)] text-left"
    >
      <img
        src={cat.img}
        alt={cat.title}
        className="absolute inset-0 w-full h-full object-cover transition-all duration-[1400ms] ease-out grayscale opacity-70 md:group-hover:scale-[1.06] md:group-hover:grayscale-0 md:group-hover:opacity-100 group-data-[active=true]:scale-[1.06] group-data-[active=true]:grayscale-0 group-data-[active=true]:opacity-100"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-black/30 transition-all duration-700 md:group-hover:from-black/95 md:group-hover:via-black/20 md:group-hover:to-transparent group-data-[active=true]:from-black/95 group-data-[active=true]:via-black/20 group-data-[active=true]:to-transparent" />

      <div className="absolute top-4 md:top-8 left-4 md:left-8 flex items-center gap-2 md:gap-3 text-white/50 font-mono text-[8px] md:text-[10px] tracking-[0.25em] md:tracking-[0.3em] uppercase">
        <span className="h-px w-4 md:w-6 bg-white/40 transition-all duration-500 md:group-hover:w-10 group-data-[active=true]:w-10" />
        {cat.code}
      </div>

      <div
        className="absolute top-4 md:top-8 right-4 md:right-8 text-white/40 font-mono text-[8px] md:text-[10px] tracking-[0.25em] md:tracking-[0.3em] uppercase"
        style={{ writingMode: "vertical-rl" }}
      >
        {cat.pieces}
      </div>

      <div className="absolute top-1/2 left-6 md:left-10 right-6 md:right-10 -translate-y-1/2 text-center opacity-0 translate-y-2 pointer-events-none transition-all duration-700 md:group-hover:opacity-100 md:group-hover:translate-y-0 group-data-[active=true]:opacity-100 group-data-[active=true]:translate-y-0">
        <span className="font-heading italic text-white/80" style={{ fontSize: "clamp(16px, 1.5vw, 28px)", fontWeight: 300, letterSpacing: "0.02em" }}>
          « {cat.subtitle} »
        </span>
      </div>

      <div className="absolute bottom-6 md:bottom-10 left-4 md:left-10 right-4 md:right-10 z-10">
        <div className="h-px w-12 md:w-16 bg-white/40 mb-3 md:mb-4 transition-all duration-700 md:group-hover:w-28 group-data-[active=true]:w-28" />
        <p className="text-white/60 font-mono text-[8px] md:text-[10px] tracking-[0.2em] md:tracking-[0.25em] uppercase mb-2 md:mb-3">
          {cat.tags}
        </p>
        <h2 className="text-white font-heading overflow-hidden" style={{ fontSize: "clamp(32px, 5vw, 88px)", fontWeight: 400, letterSpacing: "-0.02em", lineHeight: 1 }}>
          <span className="inline-block transition-transform duration-700 md:group-hover:-translate-y-1 group-data-[active=true]:-translate-y-1">
            {cat.title}
          </span>
        </h2>
        <div className="mt-3 md:mt-5 flex items-center justify-between">
          <span className="text-white/0 font-mono text-[8px] md:text-[10px] tracking-[0.3em] md:tracking-[0.35em] uppercase transition-all duration-500 -translate-x-2 md:group-hover:text-white/80 md:group-hover:translate-x-0 group-data-[active=true]:text-white/80 group-data-[active=true]:translate-x-0">
            Entrar →
          </span>
          <span className="text-white/30 font-mono text-[8px] md:text-[10px] tracking-[0.25em] md:tracking-[0.3em]">
            0{index + 1} / 03
          </span>
        </div>
      </div>
    </button>
  );
}

function Editorial() {
  const navigate = useNavigate();
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [ringPos, setRingPos] = useState({ x: -100, y: -100 });
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 2500);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const onMove = (e: MouseEvent) => setPos({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  useEffect(() => {
    let raf = 0;
    const loop = () => {
      setRingPos((prev) => ({
        x: prev.x + (pos.x - prev.x) * 0.18,
        y: prev.y + (pos.y - prev.y) * 0.18,
      }));
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(raf);
  }, [pos]);

  const handleSelectCategory = (slug: string | null) => {
    if (slug) {
      navigate({ to: "/catalogo", search: { categoria: slug } });
    } else {
      navigate({ to: "/catalogo" });
    }
  };

  return (
    <>
      {/* SPLASH SCREEN */}
      <div 
        className={`fixed inset-0 z-50 bg-black flex items-center justify-center transition-opacity duration-1000 ${showSplash ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
      >
        <div className="flex items-center gap-4 md:gap-6 font-heading text-6xl md:text-8xl lg:text-[10rem] text-white opacity-90 animate-pulse">
            <span style={{ fontWeight: 300, letterSpacing: "-0.02em" }}>LIØN &amp;</span>
            <img src={crossPng} alt="†" className="w-12 h-12 md:w-20 md:h-20 lg:w-28 lg:h-28 object-contain" style={{ filter: "brightness(1.2)" }} />
        </div>
      </div>
      <div className="cursor-dot hidden md:block" style={{ left: pos.x, top: pos.y }} />
      <div className="cursor-ring hidden md:block" style={{ left: ringPos.x, top: ringPos.y }} />

      <div className="min-h-screen bg-black text-white flex flex-col">
        <header className="flex flex-col md:flex-row items-center justify-between px-4 md:px-8 py-4 md:py-6 z-10 gap-4 relative">
          <Link to="/" className="flex items-center gap-2 font-heading text-lg md:text-xl flex-shrink-0 hover:opacity-80 transition-opacity">
            <span style={{ fontWeight: 300, letterSpacing: "-0.02em" }}>LIØN &amp;</span>
            <img src={crossPng} alt="†" style={{ width: 14, height: 14, objectFit: "contain", filter: "brightness(1.2)" }} />
          </Link>
          <div className="hidden md:block absolute left-1/2 -translate-x-1/2 text-center text-white/40 font-mono text-[10px] tracking-[0.25em] uppercase pointer-events-none">
            Editorial Lookbook
          </div>
          <nav className="flex flex-wrap justify-center md:justify-end gap-3 md:gap-7 font-mono text-[9px] md:text-[11px] tracking-[0.15em] md:tracking-[0.2em] uppercase">
            {NAV.map((item, i) => (
              <Link
                key={item.label}
                to="/catalogo"
                search={item.slug ? { categoria: item.slug } : undefined}
                className={`transition-colors ${i === NAV.length - 1 ? "text-white" : "text-white/60 hover:text-white"}`}
              >
                {item.label}
              </Link>
            ))}
            <Link to="/tienda" className="text-white/60 hover:text-white transition-colors">
              TIENDA
            </Link>
          </nav>
        </header>

        <section className="flex-1 grid grid-cols-1 md:grid-cols-3 relative">
          <div className="absolute top-4 md:top-6 left-1/2 -translate-x-1/2 z-20 text-white/50 font-mono text-[9px] md:text-[10px] tracking-[0.25em] md:tracking-[0.3em] uppercase mix-blend-difference pointer-events-none">
            ¿Cómo quieres explorar?
          </div>

          {CATEGORIES.map((cat, i) => (
            <CategoryCard key={cat.title} cat={cat} index={i} onSelect={handleSelectCategory} />
          ))}
        </section>

        <footer className="flex justify-between px-8 py-5 text-white/30 font-mono text-[10px] tracking-[0.25em] uppercase border-t border-white/5">
          <span>SS 2025 — Drop 01</span>
          <span>Buenos Aires, AR</span>
        </footer>
      </div>
    </>
  );
}
