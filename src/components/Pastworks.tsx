import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import a1 from '../assets/pastworks/1.jpg';
import a2 from '../assets/pastworks/2.jpg';
import a3 from '../assets/pastworks/3.jpg';
import a4 from '../assets/pastworks/8.jpg';
import a5 from '../assets/pastworks/5.jpg';
import a6 from '../assets/pastworks/6.jpg';

gsap.registerPlugin(ScrollTrigger);

interface Project {
  title: string;
  description: string;
  highlights: string[];
  image: string;
  link: string;
}

const PastWorks: React.FC = () => {
  const projectRefs = useRef<HTMLDivElement[]>([]);

  const projects: Project[] = [
    {
      title: "31 Solar Pumps in Rural Villages",
      description: "Design & Installation of 31 Solar Pumps of different capacities in rural villages of Gumla, Simdega, Khunti, and Latehar District. Aimed to provide reliable water solutions for farming communities.",
      highlights: ["31", "Solar", "Pumps", "Gumla", "Simdega", "Khunti", "Latehar", "District"],
      image: a1,
      link: "/projects/solar-pumps"
    },
    {
      title: "48 Solar Micro Grids in Rural Villages",
      description: "Installed 48 Solar Micro Grids of different capacities in rural villages of Gumla, Simdega, and Khunti, Latehar District. These microgrids are essential for off-grid areas with limited access to electricity.",
      highlights: ["48", "Solar", "Micro", "Grids", "Gumla", "Simdega", "Khunti", "Latehar", "District"],
      image: a2,
      link: "/projects/solar-micro-grids"
    },
    {
      title: "50 KWP On-Grid Solar System",
      description: "Designed and installed a 50 KWP on-grid solar system at ARKA Jain University, Jamshedpur. Net-metering by JUSCO was also implemented to optimize energy usage.",
      highlights: ["50", "KWP", "On-Grid", "ARKA", "Jain", "University", "Jamshedpur", "Net-metering", "JUSCO"],
      image: a3,
      link: "/projects/arka-jain-solar"
    },
    {
      title: "18 Hybrid Solar Systems in Commercial Structures",
      description: "Installed 18 Nos 10KWP Hybrid Solar Systems in Ramgarh, Ranchi, and Dhanbad, on commercial structures. These systems ensure efficient energy generation with hybrid technology.",
      highlights: ["18", "Hybrid", "Solar", "Systems", "Ramgarh", "Ranchi", "Dhanbad", "Commercial", "Structures"],
      image: a6,
      link: "/projects/hybrid-solar"
    },
    {
      title: "Solar Street Light at BIT Sindri",
      description: "Installed solar street lights at BIT Sindri, providing sustainable and energy-efficient lighting solutions for the campus.",
      highlights: ["Solar", "Street", "Light", "BIT", "Sindri"],
      image: a4,
      link: "/projects/solar-street-light"
    },
    {
      title: "Solar Tree at Parjanya B.Ed College",
      description: "Implemented a Solar Tree at Parjanya B.Ed College in Baliapur, enhancing sustainability and raising awareness about renewable energy.",
      highlights: ["Solar", "Tree", "Parjanya", "B.Ed", "College", "Baliapur"],
      image: a5,
      link: "/projects/solar-tree"
    }
  ];

  useEffect(() => {
    projectRefs.current.forEach((el, index) => {
      if (el) {
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
              toggleActions: "play none none reverse"
            }
          }
        );
      }
    });
  }, []);

  return (
    <section className="py-16 px-4 bg-gray-100">
      <div className="text-center">
        <h2 className="text-4xl font-bold text-blue-600">Our Past Works</h2>
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {projects.map((project, index) => (
            <div
              key={index}
              ref={(el) => {
                if (el) projectRefs.current[index] = el;
              }}
              className="bg-white shadow-lg rounded-lg overflow-hidden"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-56 object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-semibold">{project.title}</h3>
                <p className="mt-2 text-gray-600">
                  {project.description.split(".").map((sentence, idx) => (
                    <span key={idx}>
                      {sentence.trim().split(" ").map((word, wordIndex) => {
                        return project.highlights.includes(word) ? (
                          <span
                            key={wordIndex}
                            className="text-green-600 font-bold"
                          >
                            {word}{" "}
                          </span>
                        ) : (
                          <span key={wordIndex}>{word} </span>
                        );
                      })}
                      .{" "}
                    </span>
                  ))}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PastWorks;
