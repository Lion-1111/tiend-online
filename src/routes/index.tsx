import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { ProductCard } from "@/components/ProductCard";
import { brands, categories, products } from "@/lib/products";
import { Recycle, Gift } from "lucide-react";
import { ArrowRight } from "lucide-react";

export const Route = createFileRoute("/")({
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

      {/* CATEGORÍAS */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="flex items-end justify-between mb-10">
          <h2 className="text-4xl md:text-5xl font-black tracking-tight">CATEGORÍAS</h2>
          <Link to="/catalogo" className="text-sm font-semibold hover:underline">
            Ver todo →
          </Link>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {categories.map((c) => (
            <Link
              key={c.slug}
              to="/catalogo"
              search={{ categoria: c.slug }}
              className="group relative aspect-[3/4] overflow-hidden bg-neutral-100"
            >
              <img
                src={c.image}
                alt={c.name}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 text-white font-black text-xl tracking-tight">
                {c.name}
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* DESTACADOS */}
      <section className="max-w-7xl mx-auto px-6 py-10">
        <div className="flex items-end justify-between mb-10">
          <h2 className="text-4xl md:text-5xl font-black tracking-tight">DESTACADOS</h2>
          <Link to="/catalogo" className="text-sm font-semibold hover:underline">
            Ver todo →
          </Link>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {featured.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </section>

      {/* SEGUNDA MANO */}
      <section className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center">
        <img
          src="https://images.unsplash.com/photo-1558769132-cb1aea458c5e?w=800&q=80"
          alt="Ropa de segunda mano"
          className="w-full aspect-[4/5] object-cover"
        />
        <div>
          <div className="text-xs tracking-[0.3em] uppercase text-neutral-500 mb-3">
            Segunda Mano · Moda Circular
          </div>
          <h2 className="text-4xl md:text-5xl font-black tracking-tight leading-[1.05]">
            ROPA DE
            <br />
            SEGUNDA
            <br />
            MANO
          </h2>
          <p className="mt-6 text-neutral-700">
            Creemos que la moda no tiene fecha de caducidad. Cada pieza tiene una historia
            — y merece una segunda oportunidad. Encuentra ropa, calzado y accesorios de
            marcas premium en excelente estado, a precios que hacen sentido.
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
      </section>

      {/* ROPA GRATIS */}
      <section className="bg-neutral-50 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-xs tracking-[0.3em] uppercase text-neutral-500 mb-3">
            Iniciativa Comunitaria
          </div>
          <h2 className="text-4xl md:text-5xl font-black tracking-tight">ROPA GRATIS</h2>
          <p className="mt-6 max-w-2xl text-neutral-700">
            En LØN & CO creemos que vestirse bien no debería ser un privilegio. Por eso
            tenemos una sección de ropa completamente gratuita para quienes más lo
            necesitan. Si tú puedes dar, da. Si necesitas, toma sin pena.
          </p>
          <div className="mt-12 grid md:grid-cols-3 gap-8">
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
              <div key={b.t} className="bg-white p-6 border border-neutral-200">
                <h3 className="font-bold text-lg mb-3">{b.t}</h3>
                <p className="text-sm text-neutral-700">{b.d}</p>
              </div>
            ))}
          </div>
          <div className="mt-12">
            <div className="text-xl font-bold">¿QUIERES DONAR O RECIBIR?</div>
            <p className="text-neutral-700 mt-2">
              Juntos construimos comunidad. Cada pieza de ropa cuenta.
            </p>
            <div className="mt-6 flex gap-3">
              <a
                href="https://wa.me/"
                className="bg-black text-white px-6 py-3 text-xs font-bold tracking-widest hover:bg-neutral-800"
              >
                QUIERO DONAR
              </a>
              <a
                href="https://wa.me/"
                className="border border-black px-6 py-3 text-xs font-bold tracking-widest hover:bg-black hover:text-white"
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
