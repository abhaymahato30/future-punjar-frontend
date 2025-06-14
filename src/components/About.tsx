import  { useEffect, useRef } from 'react';
import light from '../assets/About/light.jpg'

import train from '../assets/About/train.jpg'
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);


const About = () => {
  const imgRef1 = useRef(null);
  const imgRef2 = useRef(null);
  const text1 = useRef(null);
  const text2 = useRef(null);
  const text3 = useRef(null);
  const text4 = useRef(null);




  useEffect(() => {
    // Animation for the first image
    // gsap.fromTo(
    //   imgRef1.current,
    //   { scale: 0.9, opacity: 0 },
    //   {
    //     scale: 1,
    //     opacity: 1,
    //     duration: 1,
    //     scrollTrigger: {
    //       trigger: imgRef1.current,
    //       start: "top 80%",
    //       toggleActions: "play none none reverse",
    //     },
    //   }
    // );

    // Animation for the second image
    gsap.fromTo(
      text1.current,
      { scale: 0.9, opacity: 0 },
      {
        scale: 1,
        opacity: 1,
        duration: 1,
        scrollTrigger: {
          trigger:   text1.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      }
    );
    gsap.fromTo(
     text2.current,
      { scale: 0.9, opacity: 0 },
      {
        scale: 1,
        opacity: 1,
        duration: 1,
        scrollTrigger: {
          trigger:   text2.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      }
    ); 
    gsap.fromTo(
      text4.current,
       { scale: 0.9, opacity: 0 },
       {
         scale: 1,
         opacity: 1,
         duration: 1,
         scrollTrigger: {
           trigger:   text4.current,
           start: "top 80%",
           toggleActions: "play none none reverse",
         },
       }
     ); 
       gsap.fromTo(
      text3.current,
      { scale: 0.9, opacity: 0 },
      {
        scale: 1,
        opacity: 1,
        duration: 1,
        scrollTrigger: {
          trigger:  text3.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      }
    );  
      gsap.fromTo(
      imgRef2.current,
      { scale: 0.9, opacity: 0 },
      {
        scale: 1,
        opacity: 1,
        duration: 1,
        scrollTrigger: {
          trigger: imgRef2.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      }
    );
  }, []);
  return (
    <section id="company-info" className="py-16 mt-40 px-4 bg-gray-100">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between">
        
        {/* Left Column (Images stacked vertically) */}
        <div className="w-full md:w-1/2 flex flex-col space-y-8">
          <div className="overflow-hidden rounded-lg shadow-lg" ref={imgRef1}>
            <img src={light} alt="Project 1" className="w-full h-auto object-cover rounded-lg" />
          </div>
          <div className="overflow-hidden rounded-lg shadow-lg" ref={imgRef2}>
            <img src={train} alt="Project 3" className="w-full h-auto object-cover rounded-lg" />
          </div>
        </div>
        
        {/* Right Column (Company Info) */}
        <div className="w-full md:w-1/2 h-full md:pl-12 mt-8 md:mt-0">
          <h2 className="text-3xl font-bold text-blue-600 mb-8 text-center md:text-left">About Panjar Renewables</h2>

          {/* Company Overview */}
          <div className="mb-12" ref={text1}>
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Company Overview</h3>
            <p className="text-lg text-gray-700">
              <span className="font-bold text-blue-600">Founded at the BIT Sindri Incubation Center</span>, 
              <span className="font-medium text-gray-800"> Panjar Renewable is a dynamic startup</span> dedicated to advancing 
              <span className="font-bold text-green-600"> green energy</span> through innovative 
              <span className="font-medium text-gray-800"> solar technology</span>. The company's mission is to develop, design, and commercialize 
              <span className="font-bold text-blue-600"> solar appliances tailored for agricultural</span> and 
              <span className="font-bold text-blue-600"> small-scale industrial applications</span>, addressing specific needs in regions like 
              <span className="font-medium text-gray-800"> Jharkhand ,Uttar Pradesh and Bihar.</span>
            </p>
          </div>

          {/* Mission */}
          <div className="mb-12" ref={text4}>
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Our Mission</h3>
            <p className="text-lg text-gray-700">
              <span className="font-bold text-blue-600">To drive sustainable development</span> by designing and commercializing 
              <span className="font-bold text-green-600"> innovative solar appliances</span> that enhance 
              <span className="font-bold text-blue-600"> agricultural productivity</span> and support 
              <span className="font-bold text-blue-600"> small-scale industries</span>, while reducing reliance on 
              <span className="font-bold text-gray-800"> fossil fuels</span> and minimizing 
              <span className="font-bold text-green-600"> environmental impact</span>.
            </p>
          </div>

          {/* Vision */}
          <div className="mb-12" ref={text2}>
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Our Vision</h3>
            <p className="text-lg text-gray-700">
              <span className="font-bold text-blue-600">To be a leading provider of green energy solutions</span> in India, transforming 
              the <span className="font-bold text-blue-600">agricultural</span> and 
              <span className="font-bold text-blue-600"> small-scale industrial sectors</span> with cutting-edge 
              <span className="font-medium text-gray-800"> solar technology</span>, and contributing to a 
              <span className="font-bold text-green-600"> cleaner, more sustainable future</span>.
            </p>
          </div>

          {/* Core Objectives */}
          <div ref={text3}>
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Core Objectives</h3>
            <ul className="text-lg text-gray-700 space-y-4 list-inside list-disc">
              <li><span className="font-bold text-blue-600">Enhance agricultural productivity</span> by developing solar-powered appliances specifically designed for farmers in rural areas.</li>
              <li><span className="font-bold text-blue-600">Support small-scale industries</span> through affordable, solar-based energy solutions, reducing costs and increasing efficiency.</li>
              <li><span className="font-bold text-green-600">Reduce reliance on fossil fuels</span> and help communities transition to renewable energy sources.</li>
              <li><span className="font-bold text-gray-800">Minimize environmental impact</span> through the design and implementation of energy-efficient solar technologies.</li>
              <li><span className="font-bold text-blue-600">Promote sustainable development</span> and economic growth in underserved regions like Jharkhand and Bihar.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;