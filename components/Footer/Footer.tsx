import { FaFacebook, FaYoutube } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";
import { IoLogoLinkedin } from "react-icons/io5";
import EzyCommerceIcon from "../Icons/EzyCommerceIcon";
import MainLayout from "../utils/MainLayout";

export default function Footer() {
  return (
    <footer className="w-full py-10 bg-brandGreen">
      <MainLayout>
        <div className="w-full flex flex-col gap-y-4 justify-center items-center">
          <EzyCommerceIcon fill="transparent" className="w-[10.5rem] " />
          <div className="flex text-[#ffba35] gap-3 items-center">
            <FaFacebook className="cursor-pointer" size={20} />
            <FaYoutube className="cursor-pointer" size={24} />
            <AiFillTwitterCircle className="cursor-pointer" size={24} />
            <IoLogoLinkedin className="cursor-pointer" size={21.5} />
          </div>
        </div>
      </MainLayout>
    </footer>
  );
}
