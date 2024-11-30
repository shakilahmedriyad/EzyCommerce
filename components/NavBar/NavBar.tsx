"use client";
import MainLayout from "@/components/utils/MainLayout";
import classNames from "classnames";
import { IoCartOutline } from "react-icons/io5";
import { IoMdHeartEmpty } from "react-icons/io";
import { RxAvatar } from "react-icons/rx";
import { usePathname } from "next/navigation";
import EzyCommerceIcon from "../Icons/EzyCommerceIcon";
import Link from "next/link";
export default function NavBar() {
  const pathName = usePathname();
  const NavItem = [
    {
      label: "Home",
      slug: "/",
      isActive: pathName == "/",
    },
    {
      label: "Shop",
      slug: "/shop",
      isActive: pathName == "/shop",
    },
    {
      label: "Categories",
      slug: "/categories",
      isActive: pathName == "/categories",
    },
    {
      label: "About Us",
      slug: "/about-us",
      isActive: pathName == "/about-us",
    },
    {
      label: "Contact Us",
      slug: "/contact-us",
      isActive: pathName == "/contact-us",
    },
  ];
  return (
    <MainLayout>
      <nav className="w-full justify-between  py-4 items-center  flex">
        <Link href={"/"}>
          <EzyCommerceIcon className="w-[10rem]" />
        </Link>
        <ul className="gap-x-5 flex">
          {NavItem.map((item) => (
            <Link href={item.slug} key={item.slug}>
              <li
                className={classNames(
                  "cursor-pointer",
                  item.isActive ? "text-gray-800" : "text-gray-500"
                )}
                key={item.slug}
              >
                {item.label}
              </li>
            </Link>
          ))}
        </ul>
        <div className="flex items-center gap-x-1.5">
          <IoCartOutline className="cursor-pointer" size={25} />
          <IoMdHeartEmpty className="cursor-pointer" size={25} />
          <RxAvatar className="cursor-pointer" size={25} />
        </div>
      </nav>
    </MainLayout>
  );
}
