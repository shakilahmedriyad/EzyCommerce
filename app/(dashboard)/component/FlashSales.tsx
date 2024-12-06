import ProductCard from "@/components/ProductCard/ProductCard";

export default function FlashSales() {
  return (
    <section className="my-10">
      <h1 className="headline1 mb-10">Flash Sales</h1>
      <div className="grid grid-cols-4 gap-x-10">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
    </section>
  );
}
