"use client";
import Image from "next/image";
import logo from "../../assets/thrve-logo.png";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  return (
    <nav className="bg-black dark:bg-gray-900 fixed w-full z-20 top-0 start-0 dark:border-gray-600">
      <div className="container flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
          <Image src={logo} alt="thrve" />
        </a>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </button>
        </div>
        <div className="lg:flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse hidden">
          <button
            type="button"
            className="text-white bg-black hover:bg-[#81b917] border border-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-[700] rounded-lg text-[14px] px-4 py-4 text-center"
          >
            Contact Us
          </button>
        </div>
        <div
          className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
          id="navbar-sticky"
        >
          <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <Link
                href="/service"
                className="block py-2 px-3 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-[#81b917] md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                aria-current="page"
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className="block py-2 px-3 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-[#81b917] md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                href="clients"
                className="block py-2 px-3 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-[#81b917] md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
                Clients
              </Link>
            </li>
          </ul>
        </div>
      </div>
      {mobileMenuOpen && (
        <div className="lg:hidden" role="dialog" aria-modal="true">
          <div className="fixed inset-0 z-50 bg-black"></div>
          <div className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex justify-end">
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <svg
                  width="55"
                  height="54"
                  viewBox="0 0 55 54"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="27.611" cy="26.7701" r="26.7399" fill="#240552" />
                  <path
                    d="M28.6641 25.5653L36.6516 33.5643L35.6097 34.6062L27.6107 26.6187L19.6117 34.6062L18.5698 33.5643L26.5573 25.5653L18.5698 17.5663L19.6117 16.5244L27.6107 24.5119L35.6097 16.5244L36.6516 17.5663L28.6641 25.5653Z"
                    fill="white"
                  />
                </svg>
              </button>
            </div>
            <div className="mt-16">
              <div className="w-8/12 mx-auto text-center">
                <ul className="space-y-6 text-center mb-20">
                  <li>
                    <p className="outline-none text-[14px] text-white leading-[17px] font-[500] ">
                      Services
                    </p>
                  </li>
                  <li>
                    <p className="outline-none text-[14px] text-white leading-[17px] font-[500] ">
                      About Us
                    </p>
                  </li>
                  <li>
                    <p className="outline-none text-[14px] text-white leading-[17px] font-[500] ">
                      Clients
                    </p>
                  </li>
                </ul>
                <Link href={"/"}>
                  <button
                    type="button"
                    className="text-white bg-black hover:bg-[#81b917] border border-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-[700] rounded-lg text-[14px] px-4 py-4 text-center"
                  >
                    Contact Us
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
