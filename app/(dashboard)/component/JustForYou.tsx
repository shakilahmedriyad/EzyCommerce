import ProductCard from "@/components/ProductCard/ProductCard";
import { ProductType } from "@/utils/type";

export default function JustForYou({ products }: { products: ProductType[] }) {
  return (
    <section>
      <h2 className="headline1 mb-10">Just for you</h2>
      <div className="grid gap-x-10 grid-cols-4">
        {products.map((item) => (
          <ProductCard key={item.id} {...item} />
        ))}
      </div>
    </section>
  );
}
