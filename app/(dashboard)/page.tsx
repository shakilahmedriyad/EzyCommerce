import MainLayout from "@/components/utils/MainLayout";
import Carousel from "./component/Carousel";
import TopCategories from "./component/TopCategories";

export default function Home() {
  return (
    <main className="mt-6">
      <MainLayout>
        <Carousel />
        <TopCategories />
      </MainLayout>
    </main>
  );
}
