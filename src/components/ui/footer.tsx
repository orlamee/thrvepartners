import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#fff]">
      <div className="mx-auto w-full container p-4 py-6 lg:py-[60px]">
        <div className="md:flex md:justify-between">
          <div className="sm:w-1/3 w-full">
            <div className="mb-6 md:mb-0">
              <Link
                href="https://flowbite.com/"
                className="flex items-center"
              ></Link>
              <p className="mt-4 text-black text-[14px] leading-[22px] font-[400]">
                Thrive, founded on Juneteenth, is a Maryland-based consulting
                and financial services company that specializes in the growth
                and development of minority-owned businesses and nonprofit
                organizations.
              </p>
            </div>
          </div>
          <div className="sm:w-1/2 w-full">
            <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
              <div>
                <h2 className="mb-6 leading-[19px] text-[18px] font-[700] text-black">
                  About Us
                </h2>
                {/* <ul className="text-white text-[14px] font-[400]">
                  <li className="mb-4">
                    <Link href="#" className="hover:underline">
                      About Us
                    </Link>
                  </li>
                  <li className="mb-4">
                    <Link href="#" className="hover:underline">
                      Become A Volunteer
                    </Link>
                  </li>
                  <li className="mb-4">
                    <Link href="#" className="hover:underline">
                      Make A Submission
                    </Link>
                  </li>
                </ul> */}
              </div>
              <div>
                <h2 className="mb-6 leading-[19px] text-[18px] font-[700] text-black">
                  Services
                </h2>
                <ul className="text-white text-[14px] font-[400]">
                  <li className="mb-4">
                    <Link href="#" className="hover:underline">
                      Blog
                    </Link>
                  </li>
                  <li className="mb-4">
                    <Link href="#" className="hover:underline">
                      Newsletter
                    </Link>
                  </li>
                  <li className="mb-4">
                    <Link href="#" className="hover:underline">
                      Frequently Asked Questions
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h2 className="mb-6 leading-[19px] text-[18px] font-[700] text-black">
                  Clients
                </h2>
                {/* <ul className="text-white text-[14px] font-[400]">
                  <li className="mb-4">
                    <Link href="#" className="hover:underline">
                      +23490812378191
                    </Link>
                  </li>
                  <li className="mb-4">
                    <Link href="#" className="hover:underline">
                      support@wamirii.com
                    </Link>
                  </li>
                </ul> */}
              </div>
            </div>
          </div>
        </div>
        <hr />
        <div className="flex flex-row justify-end mt-4">
          <p className="text-black text-[14px] font-[400]">info@thrvepartners.com</p>
        </div>
      </div>
    </footer>
  );
}
