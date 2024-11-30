export default function CategoryCard({ name }: { name: string }) {
  return (
    <div className="text-lg cursor-pointer bg-[#ffba35]  border py-5 text-center rounded-full px-2 font-medium uppercase">
      {name.substring(0, 15) + (name.length > 15 ? "..." : "")}
    </div>
  );
}
