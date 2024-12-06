import MainLayout from "@/components/utils/MainLayout";
import { IoCallOutline, IoMailOutline } from "react-icons/io5";
export default function ContactUs() {
  return (
    <MainLayout>
      <section className="flex h-full gap-x-10 w-full pt-16">
        <div className="px-9  justify-center-center  py-10 rounded-lg shadow-lg border">
          <div className="flex gap-x-5 items-center">
            <div className="rounded-full flex justify-center items-center p-2 border bg-brandGreen">
              <IoCallOutline size={20} className="text-white" />
            </div>
            <p className="text-lg font-medium">Call To Us</p>
          </div>
          <p className="mt-4">we are available 24/7, 7 days a week</p>
          <p className="mt-2">Phone: +123 456-789</p>
          <hr className="border-brandGreen my-9" />
          <div className="flex gap-x-5  items-center">
            <div className="rounded-full  flex justify-center items-center p-2 border bg-brandGreen">
              <IoMailOutline size={20} className="text-white" />
            </div>
            <p className="text-lg font-medium">Write To Us</p>
          </div>
          <p className="mt-4">
            Fill out our form and we will contact you within 24 hours.
          </p>
          <p className="mt-2">Emails: support@ezyCommere.com</p>
          <p className="mt-2">Emails: contact@ezyCommere.com</p>
        </div>
        <div className="py-10 shadow-lg px-10 rounded-lg border h-full">
          <div className=" h-14 grid grid-cols-3 gap-x-10 w-full  ">
            <input
              className="outline-none  px-3 text-sm border border-brandGreen rounded-xl"
              type="text"
              placeholder="Your Name"
              required
            />
            <input
              className="outline-none px-3 text-sm border border-brandGreen rounded-xl"
              type="text"
              placeholder="Your Email"
              required
            />
            <input
              className="outline-none px-3 text-sm border border-brandGreen rounded-xl"
              type="text"
              placeholder="Your Phone"
              required
            />
          </div>
          <textarea
            rows={7}
            placeholder="Your message"
            className="w-full text-sm border px-5 py-4 border-brandGreen rounded-xl mt-10 h-full"
          />
          <button className="bg-brandGreen text-white px-6 py-4 mt-6 flex ml-auto  rounded-full">
            Send Message
          </button>
        </div>
      </section>
    </MainLayout>
  );
}
