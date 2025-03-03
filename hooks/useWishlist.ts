"use client";

import addToWishlistAction from "@/actions/whishlist/addToWishlistAction";
import getWishlistByProductIdAction from "@/actions/whishlist/getWishlistByProductIdAction";
import removeWishlistAction from "@/actions/whishlist/removeWishlistAction";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";

export function useWishlist(productId: string) {
  const queryClient = useQueryClient();

  const { data: wishlist, isLoading } = useQuery({
    queryKey: ["wishlist", productId],
    queryFn: async () => getWishlistByProductIdAction(productId),
    staleTime: 1000 * 60 * 5,
  });

  const wishlistItem = wishlist?.[0] || null;

  const addMutation = useMutation({
    mutationFn: async () => addToWishlistAction(productId),
    onSuccess: (newItem) => {
      queryClient.setQueryData(["wishlist", productId], [newItem]);
    },
  });

  const removeMutation = useMutation({
    mutationFn: async () => removeWishlistAction(wishlistItem?.id || null),
    onSuccess: () => {
      queryClient.setQueryData(["wishlist", productId], []);
    },
  });

  return {
    wishlistItem,
    isLoading,
    toggleWishlist: () => {
      if (wishlistItem) {
        removeMutation.mutate();
      } else {
        addMutation.mutate();
      }
    },
    isAdding: addMutation.isPending,
    isRemoving: removeMutation.isPending,
  };
}
