import ProductCard from "@/components/ProductCard/ProductCard";
import { ProductType } from "@/utils/type";

export default function FlashSales({ products }: { products: ProductType[] }) {
  return (
    <section className="my-10">
      <h1 className="headline1 mb-10">Flash Sales</h1>
      <div className="grid grid-cols-4 gap-x-10">
        {products.map((item) => (
          <ProductCard key={item.id} {...item} />
        ))}
      </div>
    </section>
  );
}
