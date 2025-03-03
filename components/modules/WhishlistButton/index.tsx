"use client";

import { useWishlist } from "@/hooks/useWishlist";
import HeartIcon from "@/icons/HeartIcon";

export default function WishlistButton({ productId }: { productId: string }) {
  const { wishlistItem, toggleWishlist, isAdding, isRemoving } =
    useWishlist(productId);

  return (
    <button
      onClick={toggleWishlist}
      disabled={isAdding || isRemoving}
      className="mt-4 flex items-center gap-3 text-primary font-semibold cursor-pointer"
    >
      <HeartIcon isFilled={wishlistItem ? true : false} />
      <span className="text-primary">
        {wishlistItem ? "Remove from Wishlist" : "Add to Wishlist"}
      </span>
    </button>
  );
}
