"use client";

import { useCart } from "@/hooks/useCart";
import Image from "next/image";
import { useState } from "react";
import { IconShoppingCart, IconX } from "@tabler/icons-react";
import Button from "@/components/elements/Button";

export default function CartDropdown() {
  const { cart, cartCount, removeFromCart } = useCart();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative border-l border-french-gray">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="relative p-2 cursor-pointer"
      >
        <IconShoppingCart color="#17183B" />
        {cartCount > 0 && (
          <span className="absolute top-0 right-0 bg-primary text-white text-xs rounded-full px-1.5">
            {cartCount}
          </span>
        )}
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-72 bg-white shadow-xl rounded-xl p-4 border border-cool-gray z-50">
          <h3 className="text-lg font-semibold mb-2 text-gray-900">
            Shopping Cart
          </h3>

          {cart.length === 0 ? (
            <p className="text-gray-500 text-sm">Your cart is empty.</p>
          ) : (
            <ul className="max-h-64 overflow-y-auto">
              {cart.map((item) => (
                <li
                  key={item.id}
                  className="flex items-center gap-3 py-3 border-b border-cool-gray last:border-0 relative"
                >
                  <Image
                    src={item.image}
                    alt={item.name}
                    width={50}
                    height={50}
                    className="rounded-md border"
                  />

                  <div className="flex-1">
                    <p className="text-sm font-medium text-headers">
                      {item.name}
                    </p>
                    <p className="text-headers text-xs">
                      ${item.price} x {item.quantity}
                    </p>
                  </div>

                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="text-headers cursor-pointer hover:text-primary transition duration-200"
                    aria-label="Remove item"
                  >
                    <IconX size={18} />
                  </button>
                </li>
              ))}
            </ul>
          )}

          {cart.length > 0 && (
            <Button className="w-full mt-3">View Cart</Button>
          )}
        </div>
      )}
    </div>
  );
}
