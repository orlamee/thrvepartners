"use client"
import Image from "next/image";
import web from "../../assets/web.png";
import business from "../../assets/business.png";
import { Fade } from "react-awesome-reveal";

export default function WhoWeAre() {
  return (
    <section className="bg-[#fff] py-10 md:pt-[100px]">
      <div className="container">
        <Fade>
          <div className="w-full md:w-2/3 mx-auto text-center">
            <h2 className="uppercase text-[16px] md:text-[14px] lg:text-[16px] font-semibold leading-[20px] md:leading-[24px] text-[#81b917]">
              Who we are
            </h2>
            <h1 className="text-[36px] md:text-[48px] lg:text-[60px] font-semibold leading-[48px] md:leading-[64px]">
              We Help Businesses Thrive
            </h1>
            <p className="text-[16px] md:text-[20px] lg:text-[20px] font-normal leading-[28px] md:leading-[36px] mt-4 md:mt-6">
              Thrive, founded on Juneteenth, is a Maryland-based consulting and
              financial services company that specializes in the growth and
              development of minority-owned businesses and nonprofit
              organizations.
            </p>
          </div>
        </Fade>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10 mt-6 md:mt-10">
          <div className="bg-[#fff] p-4 md:p-10 shadow text-center rounded-[20px]">
            <Image src={web} alt="web" className="mb-4" />
            <h6 className="text-[#000] text-[20px] leading-[20px] font-[600]">
              <span className="text-[#81b917]">Web</span> Development
            </h6>
            <p className="mt-6">
              Your website is the core of your digital presence! We design
              websites with the best user experience.
            </p>
          </div>
          <div className="bg-[#fff] p-4 md:p-10 shadow text-center rounded-[20px]">
            <Image src={web} alt="business" className="mb-4" />
            <h6 className="text-[#000] text-[20px] leading-[20px] font-[600]">
              <span className="text-[#81b917]">Business</span> Strategy
            </h6>
            <p className="mt-6">
              Our team of experienced strategy consultants will understand your
              most complex business problems and provide innovative solutions for the expansion of your company.
            </p>
          </div>
          <div className="bg-[#fff] p-4 md:p-10 shadow text-center rounded-[20px]">
            <Image src={web} alt="business" className="mb-4" />
            <h6 className="text-[#000] text-[20px] leading-[20px] font-[600]">
              <span className="text-[#81b917]">Digtal</span> Marketing
            </h6>
            <p className="mt-6">
              Leverage our best in class marketing team to enhance your social
              media presence, pay-per-click advertising, and more.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
