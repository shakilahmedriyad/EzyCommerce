import ProductCard from "@/components/ProductCard/ProductCard";

export default function JustForYou() {
  return (
    <section>
      <h2 className="headline1 mb-10">Just for you</h2>
      <div className="grid gap-x-10 grid-cols-4">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
    </section>
  );
}
