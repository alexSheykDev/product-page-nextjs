"use client";

import { useWishlist } from "@/hooks/useWishlist";
import { IconHeart, IconHeartFilled } from "@tabler/icons-react";

type WishlistButtonProps = {
  productId: string;
};

export default function WishlistButton({ productId }: WishlistButtonProps) {
  const { wishlistItem, toggleWishlist, isAdding, isRemoving } =
    useWishlist(productId);

  return (
    <button
      onClick={toggleWishlist}
      disabled={isAdding || isRemoving}
      className="flex items-center gap-2 text-primary font-semibold cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
    >
      {wishlistItem ? (
        <IconHeartFilled size={24} className="text-primary" />
      ) : (
        <IconHeart size={24} className="text-primary" />
      )}

      <span className="text-primary">
        {wishlistItem ? "Remove from Wishlist" : "Add to Wishlist"}
      </span>
    </button>
  );
}
