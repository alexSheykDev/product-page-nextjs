"use server";

import { IProduct } from "@/interfaces/product";
import getBackendUrl from "@/lib/helpers/getBackendUrl";
import Fetcher from "@/utils/fetcher";

export default async function getProductsAction(): Promise<IProduct[] | []> {
  const fetcher = new Fetcher();

  const productsPath = `${getBackendUrl()}products`;

  try {
    const productsResponse: IProduct[] = await fetcher.get(productsPath);

    return Array.isArray(productsResponse) ? productsResponse : [];
  } catch (error) {
    console.error(`Error fetching products`, error);
    return [];
  }
}
