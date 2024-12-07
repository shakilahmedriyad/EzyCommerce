import MainLayout from "@/components/utils/MainLayout";
import Carousel from "./component/Carousel";
import TopCategories from "./component/TopCategories";
import FlashSales from "./component/FlashSales";
import JustForYou from "./component/JustForYou";
import axios from "axios";
import { CategoryType, ProductType } from "@/utils/type";

export default async function Home() {
  const response = await axios.get(
    `${process.env.NEXT_PUBLIC_API_URL}/api/billboard`
  );
  const billboard = response.data;
  const responseCategory = await axios.get<CategoryType[]>(
    `${process.env.NEXT_PUBLIC_API_URL}/api/category`
  );

  const category = responseCategory.data.slice(0, 5);

  const responseProduct = await axios.get(
    `${process.env.NEXT_PUBLIC_API_URL}/api/product`
  );
  const products: ProductType[] = responseProduct.data
    .slice(0, 5)
    .map(
      (item: {
        id: string;
        name: string;
        price: number;
        category: { name: string };
        image: { url: string }[];
      }) => {
        return {
          id: item.id,
          name: item.name,
          price: item.price,
          category: item.category.name,
          image: item.image[0].url,
        };
      }
    );

  const JustForYouProducts: ProductType[] = responseProduct.data
    .slice(6, 12)
    .map(
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
    <main className="mt-6">
      <MainLayout>
        <Carousel data={billboard} />
        <TopCategories categories={category} />
        <FlashSales products={products} />
        {JustForYouProducts.length > 0 && (
          <JustForYou products={JustForYouProducts} />
        )}
      </MainLayout>
    </main>
  );
}
