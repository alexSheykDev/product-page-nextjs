"use server";

import { IWishlist } from "@/interfaces/wishlist";
import getBackendUrl from "@/lib/helpers/getBackendUrl";
import Fetcher from "@/utils/fetcher";

export default async function getWishlistByProductIdAction(
  productId: string,
): Promise<IWishlist[] | null> {
  const fetcher = new Fetcher();
  if (!productId) {
    console.warn("getProductByIdAction: No product ID provided.");
    return null;
  }
  const wishlistPath = `${getBackendUrl()}wishlist?productId=${productId}`;

  try {
    const wishlistResponse: IWishlist[] = await fetcher.get(wishlistPath);

    if (Array.isArray(wishlistResponse)) {
      return wishlistResponse;
    }
    return null;
  } catch (error) {
    console.error(`Error fetching products`, error);
    return null;
  }
}
