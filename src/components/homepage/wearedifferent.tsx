"use client"
import Image from "next/image";
import partner from "../../assets/partnerships@4x.png";
import { Slide } from "react-awesome-reveal";

export default function Different() {
  return (
    <section className="bg-[#fff] py-10 md:py-[100px]">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="w-full lg:w-1/2">
            <h2 className="uppercase text-[16px] md:text-[14px] lg:text-[16px] font-semibold leading-[20px] md:leading-[24px] text-[#81b917]">
              We are Different
            </h2>
            <h1 className="text-[36px] md:text-[48px] lg:text-[60px] font-semibold leading-[48px] md:leading-[64px]">
              Using data driven strategies
            </h1>
            <p className="text-[16px] md:text-[20px] lg:text-[20px] font-normal leading-[28px] md:leading-[36px] mt-4 md:mt-6">
              The firm has various portfolio offerings and targets business
              growth through services such as web development, digital
              marketing, financial/tax, brand development, business strategy and
              legal services.
            </p>
          </div>
          <div className="w-full lg:w-5/12">
            <Slide>
              <Image src={partner} alt="partner" className="w-full" />
            </Slide>
          </div>
        </div>
      </div>
    </section>
  );
}
