import MainLayout from "@/components/utils/MainLayout";
import Image from "next/image";
import { IoIosStar } from "react-icons/io";
import { FaMinus, FaPlus } from "react-icons/fa6";

export default async function ProductPage() {
  return (
    <MainLayout>
      <div className="flex gap-x-6 py-24 justify-center">
        <div className="w-full flex justify-center h-[40rem] ">
          <Image
            src={"/shoe2.jpg"}
            className="w-full max-w-[30rem] rounded-2xl h-full object-cover"
            alt="shoe2"
            width={1920}
            height={1080}
          />
        </div>
        <div className="w-full">
          <p className="text-gray-600">Chair</p>
          <h2 className="text-3xl">Nike shoe</h2>
          <div className="flex ">
            <IoIosStar size={25} className="text-brandYellow" />
            <IoIosStar size={25} className="text-brandYellow" />
            <IoIosStar size={25} className="text-brandYellow" />
            <IoIosStar size={25} className="text-brandYellow" />
            <IoIosStar size={25} className="text-brandYellow" />
            <IoIosStar size={25} className="text-brandYellow" />
          </div>
          <p className="mt-6 text-sm">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe quis
            consectetur obcaecati dolorem quam facere reiciendis molestias
            praesentium, velit perspiciatis totam nam vero earum mollitia sit
            corrupti blanditiis?
            <br />
            <br />
            Hic, nihil. Lorem ipsum dolor sit amet, consectetur adipisicing
            elit. Saepe quis consectetur obcaecati dolorem quam facere
            reiciendis molestias praesentium, velit perspiciatis totam nam vero
            earum mollitia sit corrupti blanditiis? Hic, nihil.
          </p>
          <div className="flex items-center gap-x-4">
            <div className="flex border max-w-fit my-10 border-brandGreen rounded-3xl items-center">
              <div className="px-5 border-r py-1.5  border-brandGreen">
                <FaMinus size={20} className="text-brandGreen" />
              </div>
              <div className="px-5 border-r  py-1.5  border-brandGreen">1</div>
              <div className="px-5 py-1.5 rounded-3xl border-brandGreen">
                <FaPlus size={20} className="text-brandGreen" />
              </div>
            </div>
            <div className="flex h-full gap-x-3">
              <button className="bg-brandGreen py-3 px-4 rounded-3xl text-white">
                Add to Cart
              </button>
              <button className="bg-brandYellow py-3 px-4 rounded-3xl text-white">
                Add Buy Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
