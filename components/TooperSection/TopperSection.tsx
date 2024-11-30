import { FaFacebook, FaYoutube } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";
import { IoLogoLinkedin } from "react-icons/io5";
import MainLayout from "@/components/utils/MainLayout";

export default function Topper() {
  return (
    <div className="bg-[#214A25]  text-sm text-white">
      <MainLayout>
        <section className="flex py-4  justify-between">
          <p>Call us: +123-456-789</p>
          <p>
            Sign Up and{" "}
            <span className="uppercase font-bold"> GET 25% OFF </span> for your
            fist order.{" "}
            <span className="text-[#ffc973] cursor-pointer underline">
              Sign up now
            </span>
          </p>
          <div className="flex text-[#ffba35] gap-3 items-center">
            <FaFacebook className="cursor-pointer" size={20} />
            <FaYoutube className="cursor-pointer" size={24} />
            <AiFillTwitterCircle className="cursor-pointer" size={24} />
            <IoLogoLinkedin className="cursor-pointer" size={21.5} />
          </div>
        </section>
      </MainLayout>
    </div>
  );
}
