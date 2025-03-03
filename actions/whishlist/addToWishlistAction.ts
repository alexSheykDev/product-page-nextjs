"use server";

import { IWishlist } from "@/interfaces/wishlist";
import getBackendUrl from "@/lib/helpers/getBackendUrl";
import Fetcher from "@/utils/fetcher";

export default async function addToWishlistAction(
  productId: string,
): Promise<IWishlist | null> {
  const fetcher = new Fetcher();
  if (!productId) {
    console.warn("addToWishlistAction: No product ID provided.");
    return null;
  }
  const addWishlistPath = `${getBackendUrl()}wishlist`;

  try {
    const addWishlistResponse: IWishlist = await fetcher.post(addWishlistPath, {
      productId,
    } as never);

    if (addWishlistResponse?.id) {
      return addWishlistResponse;
    }
    return null;
  } catch (error) {
    console.error(`Error fetching products`, error);
    return null;
  }
}
