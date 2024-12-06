import Image from "next/image";

export default function ShopCard({ name }: { name: string }) {
  return (
    <div className="relative shadow-md group max-w-[25rem] cursor-pointer rounded-xl overflow-hidden h-full w-full">
      <Image
        className="object-cover group-hover:scale-110 duration-300 "
        src={"/shoe2.jpg"}
        alt="shoe shop"
        width={1920}
        height={1080}
      />
      <div className="absolute px-2  bottom-0 duration-300 text- w-full py-3 text-center text-4xl z-10  bg-brandYellow">
        <p>{name}</p>
        <p className="text-base">A place where you will find your business</p>
      </div>
    </div>
  );
}
