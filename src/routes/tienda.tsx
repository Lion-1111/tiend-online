import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { ProductCard } from "@/components/ProductCard";
import { brands, categories, products } from "@/lib/products";
import { ArrowRight, Recycle, Gift } from "lucide-react";

export const Route = createFileRoute("/tienda")({
  head: () => ({
    meta: [
      { title: "LØN & CO — Define tu estilo" },
      {
        name: "description",
        content:
          "Las mejores marcas del mundo en un solo lugar. Nike, Adidas, Jordan, Puma y más. Tu siguiente look empieza aquí.",
      },
      { property: "og:title", content: "LØN & CO — Define tu estilo" },
      {
        property: "og:description",
        content: "Las mejores marcas del mundo. Un solo lugar.",
      },
    ],
  }),
  component: Home,
});

function Home() {
  const featured = products.slice(0, 5);
  return (
    <div className="min-h-screen bg-white text-black">
      <SiteHeader />

      {/* HERO */}
      <section className="relative h-[88vh] min-h-[600px] w-full overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1483985988355-763728e1935b?w=1920&q=80"
          alt="Define tu estilo"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/20 to-transparent" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 h-full flex flex-col justify-center text-white">
          <div className="text-xs tracking-[0.3em] uppercase mb-4">Nueva Temporada</div>
          <h1 className="text-6xl md:text-8xl font-black leading-[0.95] tracking-tight max-w-3xl">
            DEFINE
            <br />
            TU ESTILO
          </h1>
          <p className="mt-6 max-w-md text-neutral-200">
            Las mejores marcas del mundo. Un solo lugar. Tu siguiente look empieza aquí.
          </p>
          <div className="mt-8 flex gap-3">
            <Link
              to="/catalogo"
              className="bg-white text-black px-6 py-3 text-xs font-bold tracking-widest inline-flex items-center gap-2 hover:bg-neutral-200"
            >
              EXPLORAR TODO <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              to="/catalogo"
              search={{ categoria: "hombre" }}
              className="border border-white text-white px-6 py-3 text-xs font-bold tracking-widest hover:bg-white hover:text-black"
            >
              VER HOMBRE
            </Link>
          </div>
        </div>
      </section>

      {/* BRAND MARQUEE */}
      <section className="bg-black text-white py-6 overflow-hidden">
        <div className="flex gap-12 whitespace-nowrap animate-[scroll_30s_linear_infinite]">
          {[...brands, ...brands, ...brands].map((b, i) => (
            <span key={i} className="text-2xl font-black tracking-widest">
              {b}
            </span>
          ))}
        </div>
        <style>{`@keyframes scroll{from{transform:translateX(0)}to{transform:translateX(-50%)}}`}</style>
      </section>

      {/* SECCIÓN LØN EXCLUSIVES */}
      <section className="max-w-[1920px] mx-auto px-5 md:px-10 py-16 md:py-24">
        <div className="flex items-end justify-between mb-8 md:mb-10">
          <h2 className="text-3xl md:text-5xl font-medium tracking-tight">LØN EXCLUSIVES</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
          {/* Tarjeta 1 */}
          <div className="relative aspect-[4/5] md:aspect-[3/4] lg:aspect-[4/5] bg-neutral-100 overflow-hidden group">
            <img 
              src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=1200&q=80" 
              alt="LØN Mujer" 
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            {/* Gradiente estilo Nike para oscurecer la base */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80" />
            
            <div className="absolute bottom-8 left-8 right-8 text-white z-10 flex flex-col items-start">
              <span className="font-medium text-sm md:text-base mb-1">LØN para mujer</span>
              <h3 className="text-2xl md:text-3xl font-medium mb-6">Sastrería Contemporánea</h3>
              <Link to="/catalogo" className="bg-white text-black px-6 py-2.5 rounded-full font-medium text-sm md:text-[15px] hover:bg-neutral-200 transition-colors">
                Comprar
              </Link>
            </div>
          </div>

          {/* Tarjeta 2 */}
          <div className="relative aspect-[4/5] md:aspect-[3/4] lg:aspect-[4/5] bg-neutral-100 overflow-hidden group">
            <img 
              src="https://images.unsplash.com/photo-1492288991661-058aa541ff43?w=1200&q=80" 
              alt="LØN Hombre" 
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80" />
            
            <div className="absolute bottom-8 left-8 right-8 text-white z-10 flex flex-col items-start">
              <span className="font-medium text-sm md:text-base mb-1">LØN para hombre</span>
              <h3 className="text-2xl md:text-3xl font-medium mb-6">Streetwear Esencial</h3>
              <Link to="/catalogo" className="bg-white text-black px-6 py-2.5 rounded-full font-medium text-sm md:text-[15px] hover:bg-neutral-200 transition-colors">
                Comprar
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* SECCIÓN OTRAS MARCAS (ESTILO NIKE) */}
      <section className="max-w-[1920px] mx-auto px-5 md:px-10 pb-16 md:pb-24">
        <div className="flex items-end justify-between mb-8 md:mb-10">
          <h2 className="text-3xl md:text-5xl font-medium tracking-tight">MÁS MARCAS</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
          {/* Tarjeta Nike/Jordan */}
          <div className="relative aspect-[4/5] bg-neutral-100 overflow-hidden group">
            <img 
              src="https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?w=1000&q=80" 
              alt="Jordan" 
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80" />
            
            <div className="absolute bottom-8 left-8 right-8 text-white z-10 flex flex-col items-start">
              <span className="font-medium text-sm md:text-base mb-1">Jordan para hombre</span>
              <h3 className="text-2xl md:text-3xl font-medium mb-6">Jordan Air Force 1</h3>
              <Link to="/catalogo" search={{ q: "jordan" }} className="bg-white text-black px-6 py-2.5 rounded-full font-medium text-sm md:text-[15px] hover:bg-neutral-200 transition-colors">
                Comprar
              </Link>
            </div>
          </div>

          {/* Tarjeta Adidas/Yeezy */}
          <div className="relative aspect-[4/5] bg-neutral-100 overflow-hidden group">
            <img 
              src="https://images.unsplash.com/photo-1518002171953-a080ee817e1f?w=1000&q=80" 
              alt="Running" 
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80" />
            
            <div className="absolute bottom-8 left-8 right-8 text-white z-10 flex flex-col items-start">
              <span className="font-medium text-sm md:text-base mb-1">Running</span>
              <h3 className="text-2xl md:text-3xl font-medium mb-6">Inicia la temporada</h3>
              <Link to="/catalogo" search={{ q: "running" }} className="bg-white text-black px-6 py-2.5 rounded-full font-medium text-sm md:text-[15px] hover:bg-neutral-200 transition-colors">
                Comprar
              </Link>
            </div>
          </div>

          {/* Tarjeta Accesorios */}
          <div className="hidden lg:block relative aspect-[4/5] bg-neutral-100 overflow-hidden group">
            <img 
              src="https://images.unsplash.com/photo-1556306535-0f09a536f01f?w=1000&q=80" 
              alt="Accesorios" 
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80" />
            
            <div className="absolute bottom-8 left-8 right-8 text-white z-10 flex flex-col items-start">
              <span className="font-medium text-sm md:text-base mb-1">Accesorios</span>
              <h3 className="text-2xl md:text-3xl font-medium mb-6">Complementa tu look</h3>
              <Link to="/catalogo" search={{ categoria: "accesorios" }} className="bg-white text-black px-6 py-2.5 rounded-full font-medium text-sm md:text-[15px] hover:bg-neutral-200 transition-colors">
                Comprar
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* SEGUNDA MANO */}
      <section className="relative bg-[#f3ebe0] py-20">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1558769132-cb1aea458c5e?w=800&q=80"
              alt="Ropa de segunda mano"
              className="w-full aspect-[4/5] object-cover"
            />
            <div className="absolute bottom-6 right-0 bg-black text-white px-5 py-3 text-xs font-bold tracking-widest">
              SEGUNDA MANO
            </div>
          </div>

          <div>
            <div className="inline-flex items-center gap-2 text-xs tracking-[0.3em] uppercase text-neutral-600 mb-4">
              <Recycle className="w-4 h-4" />
              Moda Circular
            </div>
            <h2 className="text-5xl md:text-6xl font-black tracking-tight leading-[0.95]">
              ROPA DE
              <br />
              SEGUNDA
              <br />
              MANO
            </h2>
            <p className="mt-6 text-neutral-700">
              Creemos que la moda no tiene fecha de caducidad. Cada pieza tiene una
              historia — y merece una segunda oportunidad. Encuentra ropa, calzado y
              accesorios de marcas premium en excelente estado, a precios que hacen
              sentido.
            </p>
            <p className="mt-4 text-neutral-700">
              Menos desperdicio. Más estilo. Comprar de segunda mano es el movimiento más
              inteligente —y más responsable— que puedes hacer hoy.
            </p>
            <ul className="mt-6 space-y-2 text-sm">
              <li>✓ Precios hasta 70% más bajos que el original</li>
              <li>✓ Contribuyes a reducir el desperdicio textil</li>
              <li>✓ Piezas revisadas y en excelente estado</li>
            </ul>
            <Link
              to="/catalogo"
              className="mt-8 inline-block bg-black text-white px-6 py-3 text-xs font-bold tracking-widest hover:bg-neutral-800"
            >
              EXPLORAR SEGUNDA MANO
            </Link>
          </div>
        </div>
      </section>

      {/* ROPA GRATIS */}
      <section className="bg-black text-white py-24">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 border border-neutral-700 px-4 py-2 text-[10px] tracking-[0.3em] uppercase text-neutral-300 mb-6">
            <Gift className="w-4 h-4" />
            Iniciativa Comunitaria
          </div>
          <h2 className="text-5xl md:text-7xl font-black tracking-tight">
            ROPA
            <br />
            GRATIS
          </h2>
          <p className="mt-6 max-w-2xl mx-auto text-neutral-300">
            En LØN & CO creemos que vestirse bien no debería ser un privilegio. Por eso
            tenemos una sección de ropa completamente gratuita para quienes más lo
            necesitan. Si tú puedes dar, da. Si necesitas, toma sin pena.
          </p>
          <div className="mt-16 grid md:grid-cols-3 gap-6 text-left">
            {[
              {
                t: "¿Cómo funciona?",
                d: "Dona ropa que ya no uses en buenas condiciones. Nosotros la revisamos, la limpiamos y la ponemos disponible para quien la necesite — sin costo.",
              },
              {
                t: "¿Para quién es?",
                d: "Para familias, estudiantes, personas en situación vulnerable o cualquiera que quiera un look nuevo sin gastar. Sin preguntas, sin juicios.",
              },
              {
                t: "¿Dónde recoger?",
                d: "Puedes recoger tu ropa en nuestro punto de encuentro o coordinamos entrega. Contáctanos por WhatsApp y te ayudamos sin complicaciones.",
              },
            ].map((b) => (
              <div key={b.t} className="border border-neutral-800 bg-neutral-950 p-6">
                <h3 className="font-bold text-lg mb-3">{b.t}</h3>
                <p className="text-sm text-neutral-400">{b.d}</p>
              </div>
            ))}
          </div>
          <div className="mt-20">
            <div className="text-2xl md:text-3xl font-black tracking-tight">
              ¿QUIERES DONAR O RECIBIR?
            </div>
            <p className="text-neutral-400 mt-3">
              Juntos construimos comunidad. Cada pieza de ropa cuenta.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href="https://wa.me/"
                className="bg-white text-black px-6 py-4 text-xs font-bold tracking-widest inline-flex items-center justify-center gap-2 hover:bg-neutral-200"
              >
                QUIERO DONAR <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="https://wa.me/"
                className="border border-white px-6 py-4 text-xs font-bold tracking-widest hover:bg-white hover:text-black"
              >
                NECESITO ROPA
              </a>
            </div>
          </div>
        </div>
      </section>


      {/* VIVE EL JUEGO */}
      <section className="relative h-[60vh] min-h-[420px] overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=1920&q=80"
          alt="Vive el juego"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 h-full flex flex-col justify-center text-white">
          <div className="text-xs tracking-[0.3em] uppercase mb-4">Colección Exclusiva</div>
          <h2 className="text-5xl md:text-7xl font-black tracking-tight leading-[0.95]">
            VIVE EL
            <br />
            JUEGO
          </h2>
          <p className="mt-6 max-w-md text-neutral-200">
            Estilo que va más allá de la cancha. Ropa y calzado para quienes viven al
            máximo.
          </p>
          <Link
            to="/catalogo"
            className="mt-8 bg-white text-black px-6 py-3 text-xs font-bold tracking-widest inline-flex w-fit items-center gap-2 hover:bg-neutral-200"
          >
            COMPRAR AHORA <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
