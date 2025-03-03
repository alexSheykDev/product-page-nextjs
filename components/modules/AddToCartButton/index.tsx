"use client";

import { useState } from "react";
import { useCart } from "@/hooks/useCart";
import Button from "@/components/elements/Button";
import { IconMinus, IconPlus } from "@tabler/icons-react";

export default function AddToCartButton({
  product,
}: {
  product: { id: string; name: string; price: string; images: string[] };
}) {
  const { cart, addToCart, updateQuantity } = useCart();
  const [quantity, setQuantity] = useState(1);

  const cartItem = cart.find((item) => item.id === product.id);

  const handleAddToCart = () => {
    if (cartItem) {
      updateQuantity({ id: product.id, quantity });
    } else {
      addToCart({
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.images[0],
        quantity,
      });
    }
  };

  return (
    <div className="flex items-center gap-6 mt-6">
      <div className="flex items-center gap-x-10 border border-cool-gray rounded-sm p-4 h-[52px]">
        <button onClick={() => setQuantity((prev) => Math.max(1, prev - 1))}>
          <IconMinus stroke={2} width={20} height={20} color="#17183B" />
        </button>
        <span className="text-xl text-headers font-semibold tracking-wide">
          {quantity}
        </span>
        <button onClick={() => setQuantity((prev) => prev + 1)}>
          <IconPlus stroke={2} width={20} height={20} color="#17183B" />
        </button>
      </div>

      <Button className="whitespace-nowrap" onClick={handleAddToCart}>
        {cartItem ? "Update Cart" : "Add to Cart"}
      </Button>
    </div>
  );
}
