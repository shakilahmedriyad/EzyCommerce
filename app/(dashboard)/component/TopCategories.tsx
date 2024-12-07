import CategoryCard from "@/components/CategoryCard/CategoryCard";
import { CategoryType } from "@/utils/type";
import Link from "next/link";

export default function TopCategories({
  categories,
}: {
  categories: CategoryType[];
}) {
  return (
    <div className="my-12">
      <h1 className="headline1">Category</h1>
      <div className="grid gap-5 py-5 grid-cols-6">
        {categories.map((category) => (
          <Link href={`/categories/${category.id}`} key={category.id}>
            <CategoryCard name={category.name} />
          </Link>
        ))}
      </div>
    </div>
  );
}
