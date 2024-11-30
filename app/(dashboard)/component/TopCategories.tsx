import CategoryCard from "@/components/CategoryCard/CategoryCard";

export default function TopCategories() {
  return (
    <div className="my-12">
      <h1 className="headline1">Category</h1>
      <div className="grid gap-5 py-5 grid-cols-6">
        <CategoryCard name="Shoe" />
        <CategoryCard name="T-shirt" />
        <CategoryCard name="Electronic" />
        <CategoryCard name="Pants" />
        <CategoryCard name="Makeup" />
        <CategoryCard name="Jersy" />
      </div>
    </div>
  );
}
