import { Minus, Plus, ShoppingBag, Trash2, X } from "lucide-react";
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { useCart } from "@/lib/cart";
import { formatPrice } from "@/lib/products";

export function CartDrawer() {
  const { items, isOpen, setOpen, removeItem, updateQuantity, totalPrice, totalItems, clear } =
    useCart();

  return (
    <Sheet open={isOpen} onOpenChange={setOpen}>
      <SheetContent className="w-full sm:max-w-md flex flex-col p-0 gap-0">
        <SheetHeader className="px-6 py-5 border-b border-neutral-200">
          <SheetTitle className="text-xs font-bold tracking-widest flex items-center gap-2">
            <ShoppingBag className="w-4 h-4" />
            TU CARRITO ({totalItems})
          </SheetTitle>
        </SheetHeader>

        {items.length === 0 ? (
          <div className="flex-1 flex flex-col items-center justify-center px-6 text-center">
            <ShoppingBag className="w-12 h-12 text-neutral-300 mb-4" />
            <p className="font-semibold">Tu carrito está vacío</p>
            <p className="text-sm text-neutral-500 mt-1">
              Agrega productos para empezar tu compra.
            </p>
            <button
              onClick={() => setOpen(false)}
              className="mt-6 text-xs font-bold tracking-widest border border-black px-4 py-2 hover:bg-black hover:text-white"
            >
              SEGUIR COMPRANDO
            </button>
          </div>
        ) : (
          <>
            <div className="flex-1 overflow-y-auto px-6 py-4 divide-y divide-neutral-200">
              {items.map((item) => (
                <div key={item.id} className="flex gap-4 py-4">
                  <div className="w-20 h-20 bg-neutral-100 flex-shrink-0 overflow-hidden">
                    <img
                      src={item.product.image}
                      alt={item.product.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex justify-between gap-2">
                      <div className="min-w-0">
                        <div className="text-[10px] uppercase tracking-widest text-neutral-500">
                          {item.product.brand}
                        </div>
                        <div className="font-semibold text-sm truncate">{item.product.name}</div>
                        {item.size > 0 && (
                          <div className="text-xs text-neutral-500 mt-0.5">Talla: {item.size}</div>
                        )}
                      </div>
                      <button
                        onClick={() => removeItem(item.id)}
                        aria-label="Eliminar"
                        className="text-neutral-400 hover:text-black"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                    <div className="flex justify-between items-center mt-2">
                      <div className="flex items-center border border-neutral-300">
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          aria-label="Restar"
                          className="px-2 py-1 hover:bg-neutral-100"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="px-3 text-sm font-semibold">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          aria-label="Sumar"
                          className="px-2 py-1 hover:bg-neutral-100"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>
                      <span className="font-bold text-sm">
                        {formatPrice(item.product.price * item.quantity)}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
              <button
                onClick={clear}
                className="text-[10px] tracking-widest text-neutral-500 hover:text-black flex items-center gap-1 pt-4"
              >
                <X className="w-3 h-3" /> VACIAR CARRITO
              </button>
            </div>

            <div className="border-t border-neutral-200 px-6 py-5 space-y-4">
              <div className="flex justify-between text-sm">
                <span className="text-neutral-500">Subtotal</span>
                <span className="font-semibold">{formatPrice(totalPrice)}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-neutral-500">Envío</span>
                <span className="font-semibold">Calculado al pagar</span>
              </div>
              <div className="flex justify-between text-base border-t border-neutral-200 pt-4">
                <span className="font-bold">Total</span>
                <span className="font-black">{formatPrice(totalPrice)}</span>
              </div>
              <button className="w-full bg-black text-white py-4 text-xs font-bold tracking-widest hover:bg-neutral-800">
                FINALIZAR COMPRA
              </button>
              <button
                onClick={() => setOpen(false)}
                className="w-full text-xs font-bold tracking-widest text-neutral-600 hover:text-black"
              >
                SEGUIR COMPRANDO
              </button>
            </div>
          </>
        )}
      </SheetContent>
    </Sheet>
  );
}
