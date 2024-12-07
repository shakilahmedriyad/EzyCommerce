import CategoryCard from "@/components/CategoryCard/CategoryCard";
import MainLayout from "@/components/utils/MainLayout";
import { CategoryType } from "@/utils/type";
import axios from "axios";
import Link from "next/link";

export default async function Category() {
  const response = await axios.get<CategoryType[]>(
    `${process.env.NEXT_PUBLIC_API_URL}/api/category`
  );

  const category = response.data;

  return (
    <MainLayout>
      <div className="my-10 grid grid-cols-5 lg:grid-cols-7 gap-4">
        {category.map((item) => (
          <Link href={`/categories/${item.id}`} key={item.id}>
            <CategoryCard {...item} />
          </Link>
        ))}
      </div>
    </MainLayout>
  );
}
