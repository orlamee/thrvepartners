"use client";
import React, { useState } from "react";
import Image, { StaticImageData } from "next/image";
import co from "../../assets/ceo.png";
import { Slide } from "react-awesome-reveal";

const CEOData = [
  {
    id: 1,
    name: "Eustace Esotu",
    position: "Managing Director",
    image: co,
    content:
      "Eustace studied Health Administration and Public Policy as well as political science at University of Maryland, Baltimore County (UMBC). While completing his degree, he worked as a Strategy Consultant for a number of internationally based companies. He is also experienced in managing high net worth securities portfolios.",
  },
  {
    id: 2,
    name: "Miriam Obasi",
    position: "Digital Marketing Manager",
    image: co,
    content:
      "Miriam is an accomplished digital marketer with 4 years of experience in the industry. She specializes in creating data-driven campaigns that generate measurable results. With expertise in various digital marketing channels, including social media, SEO, content marketing, and paid advertising, she crafts integrated strategies that drive brand awareness and lead generation. Her excellent communication skills and attention to detail contribute to seamless project execution and client satisfaction.",
  },

  {
    id: 3,
    name: "Obinna Onyekwe",
    position: "Production Manager",
    image: co,
    content:
      "Obinna is a highly skilled and accomplished Videographer and editor. With a proven track record of successfully managing and overseeing production operations, in industries such as hospitality, real estate and entertainment who has demonstrated exceptional leadership and organizational abilities.",
  },

  {
    id: 4,
    name: "Eustace Esotu",
    position: "Digital Marketing Manager",
    image: co,
    content:
      "Eustace studied Health Administration and Public Policy as well as political science at University of Maryland, Baltimore County (UMBC). While completing his degree, he worked as a Strategy Consultant for a number of internationally based companies. He is also experienced in managing high net worth securities portfolios.",
  },
];

export default function TheWho() {
  const [selectedCEO, setSelectedCEO] = useState(CEOData[0]);

  const handleCEOClick = (ceo: React.SetStateAction<{ id: number; name: string; position: string; image: StaticImageData; content: string; }>) => {
    setSelectedCEO(ceo);
  };

  return (
    <section className="bg-[#454545] py-10 md:py-[100px]">
      <div className="container">
        <Slide>
          <div className="flex flex-col md:flex-row gap-10 items-center justify-between">
            <div className="md:w-1/2 w-full">
              <div className="grid grid-cols-2 gap-10">
                {CEOData.map((ceo) => (
                  <div
                    key={ceo.id}
                    className="relative group"
                    onClick={() => handleCEOClick(ceo)}
                  >
                    <Image
                      src={ceo.image}
                      alt={`ceo-${ceo.id}`}
                      className="w-full cursor-pointer"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-75 text-white p-2 opacity-0 group-hover:opacity-100 transition-opacity">
                      <p className="text-sm font-semibold">{ceo.name}</p>
                      <p className="text-xs">{ceo.position}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="md:w-1/2 w-full">
              <p className="text-white font-[500] text-[22px] leading-[50px]">
                {selectedCEO.content}
              </p>
            </div>
          </div>
        </Slide>
      </div>
    </section>
  );
}
