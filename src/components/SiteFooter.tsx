export function SiteFooter() {
  return (
    <footer className="bg-black text-white mt-20">
      <div className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-4 gap-10">
        <div>
          <div className="font-black text-xl mb-4">LØN & CO</div>
          <p className="text-sm text-neutral-400">
            Las mejores marcas del mundo. Un solo lugar.
          </p>
        </div>
        <div>
          <div className="text-xs font-bold tracking-widest mb-4">TIENDA</div>
          <ul className="space-y-2 text-sm text-neutral-400">
            <li>Hombre</li>
            <li>Mujer</li>
            <li>Niños</li>
            <li>Accesorios</li>
          </ul>
        </div>
        <div>
          <div className="text-xs font-bold tracking-widest mb-4">AYUDA</div>
          <ul className="space-y-2 text-sm text-neutral-400">
            <li>Envíos</li>
            <li>Devoluciones</li>
            <li>Guía de tallas</li>
            <li>Contacto</li>
          </ul>
        </div>
        <div>
          <div className="text-xs font-bold tracking-widest mb-4">COMUNIDAD</div>
          <ul className="space-y-2 text-sm text-neutral-400">
            <li>Segunda mano</li>
            <li>Ropa gratis</li>
            <li>Donar</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-neutral-800 py-6 text-center text-xs text-neutral-500">
        © {new Date().getFullYear()} LØN & CO. Todos los derechos reservados.
      </div>
    </footer>
  );
}
