import getProductsAction from "@/actions/product/getProductsAction";
import ProductCard from "@/components/modules/Product/ProductCard";

export default async function ProductsListingPage() {
  const products = await getProductsAction();
  console.log(products);
  return (
    <div className="pt-14 px-10">
      <h1 className="text-center text-headers mb-10">Our Products</h1>
      <div className="flex gap-x-5">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
