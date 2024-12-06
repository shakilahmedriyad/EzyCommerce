import MainLayout from "@/components/utils/MainLayout";
import Carousel from "./component/Carousel";
import TopCategories from "./component/TopCategories";
import FlashSales from "./component/FlashSales";
import JustForYou from "./component/JustForYou";

export default function Home() {
  return (
    <main className="mt-6">
      <MainLayout>
        <Carousel />
        <TopCategories />
        <FlashSales />
        <JustForYou />
      </MainLayout>
    </main>
  );
}
