/* eslint-disable  @typescript-eslint/no-explicit-any */
import { TUrl } from "@/interfaces/shared/url";
import { TFetchOptions } from "@/interfaces/fetcher/fetchoptions";

export default interface IFetcher {
  get(url: TUrl, options?: Partial<TFetchOptions>): Promise<any>;
  post(url: TUrl, data?: any, options?: Partial<TFetchOptions>): Promise<any>;
  put(url: TUrl, data: any, options?: Partial<TFetchOptions>): Promise<any>;
  patch(url: TUrl, data: any, options?: Partial<TFetchOptions>): Promise<any>;
  delete(url: TUrl, options?: Partial<TFetchOptions>): Promise<void>;
  setBaseUrl(baseUrl: string): void;
}
