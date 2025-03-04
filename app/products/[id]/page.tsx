import getProductByIdAction from "@/actions/product/getProductByIdAction";
import AddToCartButton from "@/components/modules/AddToCartButton";
import Breadcrumbs from "@/components/modules/Breadcrumb";
import ProductNumbers from "@/components/modules/Product/ProductNumbers";
import ProductSlider from "@/components/modules/Product/ProductSlider";
import SocialLinks from "@/components/modules/SocialLinks";
import WishlistButton from "@/components/modules/WhishlistButton";
import { IconArrowNarrowLeft } from "@tabler/icons-react";
import Link from "next/link";

export default async function ProductDetailedPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const productId = (await params).id;
  const product = await getProductByIdAction(productId);

  if (!product) {
    return <div className="text-center text-headers">No product was found</div>;
  }

  return (
    <div className="mx-auto pt-14 px-10">
      <div className="grid md:grid-cols-4 gap-12 mt-6">
        <div className="col-span-2 max-w-2/3">
          <Link className="" href="/">
            <IconArrowNarrowLeft width={24} height={24} stroke={2} />
          </Link>
          <Breadcrumbs name={product.name} category={product.category} />
          <h1 className="mt-16">{product.name}</h1>
          <ProductNumbers
            price={product.price}
            rating={product.rating}
            reviewCount={product.review_count}
          />
          <p className="mt-14 text-headers">{product.description}</p>
          <AddToCartButton product={product} />
          <p className="mt-6 text-headers">
            Free 3-5 day shipping • Tool-free assembly • 30-day trial
          </p>
          <div className="flex justify-between items-center mt-14">
            <WishlistButton productId={product.id} />
            <SocialLinks />
          </div>
        </div>

        <div className="col-span-2">
          <ProductSlider images={product.images} />
        </div>
      </div>
    </div>
  );
}
