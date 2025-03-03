"use client";

import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

interface CartItem {
  id: string;
  name: string;
  price: string;
  image: string;
  quantity: number;
  /*TODO: color: string; */
}

const getCartFromStorage = (): CartItem[] => {
  if (typeof window === "undefined") return [];
  const storedCart = localStorage.getItem("shopping_cart");
  return storedCart ? JSON.parse(storedCart) : [];
};

const saveCartToStorage = (cart: CartItem[]) => {
  if (typeof window !== "undefined") {
    localStorage.setItem("shopping_cart", JSON.stringify(cart));
  }
};

export function useCart() {
  const queryClient = useQueryClient();

  const { data: cart = [] } = useQuery({
    queryKey: ["cart"],
    queryFn: () => Promise.resolve(getCartFromStorage()),
    initialData: [],
  });

  const addMutation = useMutation({
    mutationFn: async (newItem: CartItem) => {
      const existingCart = cart ?? [];
      const existingItem = existingCart.find((item) => item.id === newItem.id);

      let updatedCart;
      if (existingItem) {
        updatedCart = existingCart.map((item) =>
          item.id === newItem.id
            ? { ...item, quantity: item.quantity + newItem.quantity }
            : item,
        );
      } else {
        updatedCart = [...existingCart, newItem];
      }

      saveCartToStorage(updatedCart);
      return Promise.resolve(updatedCart);
    },
    onSuccess: (newCart) => {
      queryClient.setQueryData(["cart"], newCart);
    },
  });

  const updateQuantityMutation = useMutation({
    mutationFn: async ({ id, quantity }: { id: string; quantity: number }) => {
      const updatedCart = (cart ?? []).map((item) =>
        item.id === id ? { ...item, quantity } : item,
      );
      saveCartToStorage(updatedCart);
      return Promise.resolve(updatedCart);
    },
    onSuccess: (newCart) => {
      queryClient.setQueryData(["cart"], newCart);
    },
  });

  const removeMutation = useMutation({
    mutationFn: async (id: string) => {
      const updatedCart = (cart ?? []).filter((item) => item.id !== id);
      saveCartToStorage(updatedCart);
      return Promise.resolve(updatedCart);
    },
    onSuccess: (newCart) => {
      queryClient.setQueryData(["cart"], newCart);
    },
  });

  const cartCount = (cart ?? []).reduce(
    (total, item) => total + item.quantity,
    0,
  );

  return {
    cart,
    cartCount,
    addToCart: addMutation.mutate,
    updateQuantity: updateQuantityMutation.mutate,
    removeFromCart: removeMutation.mutate,
  };
}
