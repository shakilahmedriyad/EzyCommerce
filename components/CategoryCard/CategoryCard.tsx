export default function CategoryCard({ name }: { name: string }) {
  return (
    <div className="text-lg max-w-[12rem] cursor-pointer hover:bg-brandGreen bg-brandYellow hover:text-white  border py-5 text-center rounded-xl px-2 font-medium uppercase">
      {name.substring(0, 15) + (name.length > 15 ? "..." : "")}
    </div>
  );
}
