import Image from "next/image";
import { IoIosStar, IoMdHeartEmpty } from "react-icons/io";
import { AiOutlineShopping } from "react-icons/ai";

export default function ProductCard({
  name,
  category,
  price,
  image,
}: {
  image: string;
  name: string;
  category: string;
  price: number;
}) {
  return (
    <div className="max-w-[30rem] cursor-pointer  h-[30rem]   w-full">
      <div className="max-h-[21rem] rounded-xl overflow-hidden relative w-full h-full">
        <p className="px-5 font-medium left-3 top-3 text-sm rounded-full absolute z-10 text-white bg-brandGreen py-2">
          50% off
        </p>
        <div className="absolute z-10 space-y-2 right-3 top-5">
          <div className="bg-white rounded-full p-2">
            <IoMdHeartEmpty className="cursor-pointer" size={25} />
          </div>
          <div className="bg-white rounded-full p-2">
            <AiOutlineShopping className="cursor-pointer" size={25} />
          </div>
        </div>
        <Image
          className="rounded-xl hover:scale-110 duration-300 absolute h-full object-cover"
          src={image || "/shoe1.jpg"}
          alt="chair"
          width={1920}
          height={1080}
        />
      </div>
      <div className="mt-2 space-y-2 px-2">
        <div className="flex items-center justify-between">
          <p className="text-gray-600">{category}</p>
          <p className="font-medium gap-1  flex items-center">
            <IoIosStar size={25} className="text-brandYellow" />
            <span className="text-lg">4.9</span>
          </p>
        </div>
        <h2 className="text-xl font-medium">{name}</h2>
        <p className="flex w-full gap-x-2 items-center">
          <span className="font-medium text-lg">${price}</span>
          <span className="text-gray-600 line-through">${price * 2}</span>
        </p>
      </div>
    </div>
  );
}
