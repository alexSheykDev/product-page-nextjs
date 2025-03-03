"use server";

import { IWishlist } from "@/interfaces/wishlist";
import getBackendUrl from "@/lib/helpers/getBackendUrl";
import Fetcher from "@/utils/fetcher";

export default async function removeWishlistAction(
  wishlistId: string | null,
): Promise<IWishlist | null> {
  const fetcher = new Fetcher();
  if (!wishlistId) {
    console.warn("addToWishlistAction: No wishlist ID provided.");
    return null;
  }
  const removeWishlistPath = `${getBackendUrl()}wishlist/${wishlistId}`;

  try {
    const removeWishlistResponse: IWishlist =
      await fetcher.delete(removeWishlistPath);

    if (removeWishlistResponse?.id) {
      return removeWishlistResponse;
    }
    return null;
  } catch (error) {
    console.error(`Error fetching products`, error);
    return null;
  }
}
