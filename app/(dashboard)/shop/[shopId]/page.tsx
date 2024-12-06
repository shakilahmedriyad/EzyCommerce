import MainLayout from "@/components/utils/MainLayout";
import axios from "axios";

export default async function ShopId({
  params,
}: {
  params: Promise<{ shopId: string }>;
}) {
  const { shopId } = await params;

  const response = await axios.get(
    `${process.env.NEXT_PUBLIC_API_URL}/api/${shopId}/product`
  );

  return (
    <MainLayout>
      {response.data.length == 0 ? (
        <div className="w-full pt-44 text-4xl h-full justify-center flex items-center">
          No Item Found
        </div>
      ) : (
        <div>
          <h1>products</h1>
        </div>
      )}
    </MainLayout>
  );
}
