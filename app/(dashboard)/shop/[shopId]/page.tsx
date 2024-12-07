import ProductCard from "@/components/ProductCard/ProductCard";
import MainLayout from "@/components/utils/MainLayout";
import { ProductType } from "@/utils/type";
import axios from "axios";

export default async function ShopId({
  params,
}: {
  params: Promise<{ shopId: string }>;
}) {
  const { shopId } = await params;

  const response = await axios.get(
    `${process.env.NEXT_PUBLIC_API_URL}/api/${shopId}/product`
  );
  const products: ProductType[] = response.data.map(
    (item: {
      name: string;
      price: number;
      category: { name: string };
      image: { url: string }[];
    }) => {
      return {
        name: item.name,
        price: item.price,
        category: item.category.name,
        image: item.image[0].url,
      };
    }
  );

  return (
    <MainLayout>
      {response.data.length == 0 ? (
        <div className="w-full pt-44 text-4xl h-full justify-center flex items-center">
          No Item Found
        </div>
      ) : (
        <div className="py-10 grid grid-cols-3 gap-x-7 gap-y-10">
          {products.map((item) => (
            <ProductCard key={item.id} {...item} />
          ))}
        </div>
      )}
    </MainLayout>
  );
}
