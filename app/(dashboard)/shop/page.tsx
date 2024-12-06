import ShopCard from "@/components/ShopCard/ShopCard";
import MainLayout from "@/components/utils/MainLayout";
import axios from "axios";
import Link from "next/link";

interface shopType {
  name: string;
  id: string;
}

export default async function Shop() {
  const data = await axios.get<shopType[]>(
    `${process.env.NEXT_PUBLIC_API_URL}/api/stores`
  );
  const store = data.data;
  return (
    <MainLayout>
      <div className="grid gap-10 my-12 grid-cols-4">
        {store.map((item) => (
          <Link href={`/shop/${item.id}`} key={item.id}>
            <ShopCard name={item.name} />
          </Link>
        ))}
      </div>
    </MainLayout>
  );
}
