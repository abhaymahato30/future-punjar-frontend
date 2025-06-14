import React, { useRef } from "react";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
import "../styles/team.scss";

// Advisor photos
import dk from "../assets/advisor/dksingh.png";
import vinod from "../assets/advisor/vinod.jpg";
import vinod2 from "../assets/advisor/vinod2.jpg";
import ramesh from "../assets/advisor/ramesh.jpeg";
import baba from "../assets/advisor/baba.png";



// Type for advisor
interface Advisor {
  email: string;
  name: string;
  batch: string;
  teams: string[];
  linkedin?: string;
  photo: string;
}

const Advisors: React.FC = () => {
  const cardRefs = useRef<HTMLDivElement[]>([]);

  const data: Advisor[] = [
    {
      email: "",
      name: "Siddhi Nath Singh",
      batch: "2022-26",
      teams: ["Serial entrepreneur and renowned businessman in Jharkhand"],
      photo: baba,
    },
    {
      email: "",
      name: "Dr. D.K. Singh ",
      batch: "2022-26",
      teams: ["Vice Chancellor, Jharkhand University of Technologies"],
      linkedin: "#",
      photo: dk,
    },
    {
      email: "",
      name: "Raj Dubey",
      batch: "2022-26",
      teams: ["Legal Advisor,Over 25 years in business structuring with international and domestic clients"],
      linkedin: "#",
      photo: vinod,
    },
    {
      email: "",
      name: "Ramesh Yadav",
      batch: "2022-26",
      teams: ["Serial entrepreneur, charter member of TiE, mentor and professor of entrepreneurship"],
      linkedin: "https://www.linkedin.com/in/shivanandmodi/",
      photo: ramesh,
    },
    {
      email: "",
      name: "Vinod Rao",
      batch: "2022-26",
      teams: ["Experience with Tesla & SpaceX"],
      linkedin: "https://www.linkedin.com/in/shivanandmodi/",
      photo: vinod2,
    },
  ];

  return (
    <section className="bg-white  p-10">
      <div className="text-center">
        <h2 className="text-4xl font-bold text-blue-600">Our Advisors</h2>
      </div>
      <div className="container px-6 py-6 mx-auto mt-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-4">
          {data.map((d, index) => (
            <div
              key={index}
              ref={(el) => {
                if (el) cardRefs.current[index] = el;
              }}
              className="flex flex-col items-center p-8 transition-colors duration-300 transform  cursor-pointer rounded-xl hover:border-transparent group bg-slate-100 hover:bg-blue-600"
            >
              <img
                className="object-cover w-40 h-40 rounded-full ring-4 ring-gray-300"
                src={d.photo}
                alt={d.name}
              />

              <h1 className="mt-4 text-2xl font-semibold text-gray-700 capitalize group-hover:text-white">
                {d.name}
              </h1>

              <p className="mt-2 text-gray-500 capitalize group-hover:text-gray-300 text-center">
                {d.teams.join(", ")}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Advisors;
