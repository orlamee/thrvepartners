"use client"
import { Slide } from "react-awesome-reveal"

export default function Hero() {
  return (
    <section className="pt-[200px] pb-[150px] bg-cover bg-no-repeat hero">
      <div className="container">
        <div className="flex flex-col sm:flex-row justify-between">
          <div className="w-full sm:w-1/2 mb-4 sm:mb-0">
            <Slide>
              <h1 className="text-[#fff] text-[80px] leading-[100px] font-[800]">
                Here not only to help you survive but, thrve...
              </h1>
            </Slide>
            <div className="mt-6">
              <button className="border text-white border-white rounded-[40px] py-5 px-6 text-[20px] transition duration-300 ease-in-out hover:bg-[#81b917]">Start a project</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
