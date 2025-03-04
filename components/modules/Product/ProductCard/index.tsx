import Link from "next/link";
import Image from "next/image";
import { IProduct } from "@/interfaces/product";
import ProductRating from "@/components/modules/Product/ProductRating";

export default function ProductCard({ product }: { product: IProduct }) {
  const truncateText = (text: string, maxLength: number) => {
    return text.length > maxLength
      ? text.substring(0, maxLength) + "..."
      : text;
  };

  return (
    <Link
      href={`/products/${product.id}`}
      className="block bg-white p-4 rounded-lg shadow hover:shadow-lg transition-shadow duration-300"
    >
      <div className="relative w-full ">
        <Image
          src={product.images[0]}
          alt={product.name}
          width={200}
          height={200}
          className="rounded-lg object-cover"
        />
      </div>

      <div className="mt-3">
        <h3 className="font-semibold text-lg text-headers">{product.name}</h3>

        <ProductRating
          rating={product.rating}
          reviewCount={product.review_count}
        />

        <p className="mt-2 text-headers max-w-2xs">
          {truncateText(product.description, 80)}
        </p>

        <h2 className="mt-2 text-primary">${product.price}</h2>
      </div>
    </Link>
  );
}
