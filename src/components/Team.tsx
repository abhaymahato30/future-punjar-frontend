import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "../styles/team.scss";

// Image imports
import aditya from "../assets/team/aditya.jpg"
import manish from "../assets/team/manish.jpg";
import abhay from "../assets/team/abhay.jpg";
import anurag from "../assets/team/anurag.jpg";
import neha from "../assets/team/neha.jpg";
import shivanand from "../assets/team/shivanand.jpg";
import vipul from "../assets/advisor/vipul.jpg";

gsap.registerPlugin(ScrollTrigger);

// Type for team member
interface TeamMember {
  email: string;
  name: string;
  batch: string;
  teams: string[];
  linkedin: string;
  photo: string;
}

const Core: React.FC = () => {
  const cardRefs = useRef<HTMLDivElement[]>([]);

  const data: TeamMember[] = [
    {
      email: "princy.kumarijha@example.com",
      name: "Aditya Kumar",
      batch: "2022-26",
      teams: ["Founder"],
      linkedin: "https://www.linkedin.com/in/prinsu-panjar-aditya-8a10b3184/",
      photo: aditya,
    },
    {
      email: "princy.kumarijha@example.com",
      name: "Vipul Vidyakar",
      batch: "2022-26",
      teams: ["CEO"],
      linkedin: "https://www.linkedin.com/in/prinsu-panjar-aditya-8a10b3184/",
      photo: vipul,
    },
    {
      email: "princy.kumarijha@example.com",
      name: "Neha Singh",
      batch: "2022-26",
      teams: ["Finance and Accounting"],
      linkedin: "#",
      photo: neha,
    },
    {
      email: "princy.kumarijha@example.com",
      name: "Anurag Kumar",
      batch: "2022-26",
      teams: ["Operational"],
      linkedin: "#",
      photo: anurag,
    },
  ];

  useEffect(() => {
    cardRefs.current.forEach((el, index) => {
      if (!el) return;
      gsap.fromTo(
        el,
        { opacity: 0, y: 100 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          delay: index * 0.2,
          scrollTrigger: {
            trigger: el,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );
    });
  }, []);

  return (
    <section className="bg-white  p-10 mt-20">
      <div className="text-center mt-16">
        <h2 className="text-4xl font-bold text-blue-600">Our Team</h2>
      </div>

      <div className="container px-6 py-6 mx-auto mt-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-4">
          {data.map((d, index) => (
            <div
              key={index}
              ref={(el) => {
                if (el) cardRefs.current[index] = el;
              }}
              className="flex flex-col items-center p-8 transition-colors duration-300 transform border-light cursor-pointer rounded-xl hover:border-transparent group bg-slate-100 hover:bg-blue-600"
            >
              <img
                className="object-cover w-40 h-40 rounded-full ring-4 ring-gray-300"
                src={d.photo}
                alt={d.name}
              />
              <h1 className="mt-4 text-2xl font-semibold text-gray-700 capitalize group-hover:text-white">
                {d.name}
              </h1>
              <p className="mt-2 text-gray-500 capitalize group-hover:text-gray-300">
                {d.teams.join(", ")}
              </p>
              {/* Add social links back if needed */}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Core;
