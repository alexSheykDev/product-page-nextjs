"use server";

import { IProduct } from "@/interfaces/product";
import getBackendUrl from "@/lib/helpers/getBackendUrl";
import Fetcher from "@/utils/fetcher";

export default async function getProductByIdAction(
  productId: string,
): Promise<IProduct | null> {
  const fetcher = new Fetcher();
  if (!productId) {
    console.warn("getProductByIdAction: No product ID provided.");
    return null;
  }
  const productPath = `${getBackendUrl()}products/${productId}`;

  try {
    const productResponse: IProduct = await fetcher.get(productPath);

    return productResponse;
  } catch (error) {
    console.error(`Error fetching products`, error);
    return null;
  }
}
