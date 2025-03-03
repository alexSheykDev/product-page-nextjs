export interface IProduct {
  id: string;
  createdAt: string;
  name: string;
  price: string;
  description: string;
  variations: IVariation[];
  category: string;
  images: string[];
  rating: number;
  review_count: number;
  free_shipping: boolean;
  shipment_days: number;
}

export interface IVariation {
  title: string;
  options: string[];
}
