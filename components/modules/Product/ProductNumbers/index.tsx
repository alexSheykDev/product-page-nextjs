import ProductRating from "@/components/modules/Product/ProductRating";

type ProductNumbersProps = {
  price: string;
  rating: number;
  reviewCount: number;
};
const ProductNumbers = ({
  price,
  rating,
  reviewCount,
}: ProductNumbersProps) => {
  return (
    <div className="flex justify-between items-center mt-8">
      <h2 className="text-headers font-semibold">${price}</h2>
      <ProductRating rating={rating} reviewCount={reviewCount} />
    </div>
  );
};

export default ProductNumbers;
