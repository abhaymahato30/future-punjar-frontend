import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import aditya from '../assets/team/aditya.jpg'
gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  const addressRef = useRef(null);
  const phoneRef = useRef(null);
  const emailRef = useRef(null);
  const founderRef = useRef(null);

  useEffect(() => {
    // GSAP animation for Address Section
    gsap.fromTo(
      addressRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        scrollTrigger: {
          trigger: addressRef.current,
          start: 'top 80%',
          toggleActions: 'play none none reverse',
        },
      }
    );

    // GSAP animation for Phone Section
    gsap.fromTo(
      phoneRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        scrollTrigger: {
          trigger: phoneRef.current,
          start: 'top 80%',
          toggleActions: 'play none none reverse',
        },
      }
    );

    // GSAP animation for Email Section
    gsap.fromTo(
      emailRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        scrollTrigger: {
          trigger: emailRef.current,
          start: 'top 80%',
          toggleActions: 'play none none reverse',
        },
      }
    );

    // GSAP animation for Founder Details Section
    gsap.fromTo(
      founderRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        scrollTrigger: {
          trigger: founderRef.current,
          start: 'top 80%',
          toggleActions: 'play none none reverse',
        },
      }
    );
  }, []);

  return (
    <section id="contact" className="min-h-screen bg-gray-800 py-20 px-4 ">
      <div className="max-w-screen-lg mx-auto text-center">
        {/* Title with Colorful Gradient */}
        <h2 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 via-red-500 to-pink-600 mb-12">
          Contact Us
        </h2>

        {/* Contact Info Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {/* Address Card */}
          <div
            ref={addressRef}
            className="bg-white shadow-lg rounded-lg p-6 text-center hover:shadow-xl transition-shadow duration-300 hover:scale-105 hover:bg-indigo-100 transform-gpu"
          >
            <h3 className="text-2xl font-semibold text-gray-700 mb-4 hover:text-blue-500 transition-colors duration-300">Our Address</h3>
            <p className="text-gray-600 hover:text-gray-800 transition-colors duration-300">
              97/D, Usha Siddhi Kunj Vardhman Compound Lalpur, Ranchi, Jharkhand-834001
            </p>
            <p className="text-gray-600 hover:text-gray-800 transition-colors duration-300">
              BIT Sindri Dhanbad, Jharkhand JUT Namkum Ranchi, Jharkhand
            </p>
          </div>

          {/* Phone Card */}
          <div
            ref={phoneRef}
            className="bg-white shadow-lg rounded-lg p-6 text-center hover:shadow-xl transition-shadow duration-300 hover:scale-105 hover:bg-indigo-100 transform-gpu"
          >
            <h3 className="text-2xl font-semibold text-gray-700 mb-4 hover:text-blue-500 transition-colors duration-300">Phone</h3>
            <p className="flex justify-center items-center text-gray-600 hover:text-gray-800 transition-colors duration-300">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6 text-blue-500 mr-2 hover:text-blue-700 transition-colors duration-300"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 10l4 4-4 4m8-8l4 4-4 4m5-5h2a2 2 0 012 2v10a2 2 0 01-2 2h-2m-7 0H5a2 2 0 01-2-2V7a2 2 0 012-2h10a2 2 0 012 2v6"
                />
              </svg>
              +91 9430649460
            </p>
          </div>

          {/* Email Card */}
          <div
            ref={emailRef}
            className="bg-white shadow-lg rounded-lg p-6 text-center hover:shadow-xl transition-shadow duration-300 hover:scale-105 hover:bg-indigo-100 transform-gpu"
          >
            <h3 className="text-2xl font-semibold text-gray-700 mb-4 hover:text-blue-500 transition-colors duration-300">Email</h3>
            <p className="flex justify-center items-center text-gray-600 hover:text-gray-800 transition-colors duration-300">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6 text-blue-500 mr-2 hover:text-blue-700 transition-colors duration-300"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M16 12V8l4-4M4 12v4l-4 4m16-4H4m4 0h8m4 0h-4m0 0l-4-4"
                />
              </svg>
              Panjarrenewables@gmail.com
            </p>
          </div>
        </div>

        {/* Founder Details */}
        <div
          ref={founderRef}
          className="mt-16 bg-white p-12 rounded-lg shadow-lg hover:shadow-xl transform-gpu hover:scale-105 hover:bg-indigo-100"
        >
          <h3 className="text-3xl font-semibold text-gray-700 mb-4 text-center text-gradient-to-r from-yellow-400 via-red-500 to-pink-600">
            Meet the Founder
          </h3>
          <div className="flex items-center justify-center space-x-6">
            {/* Founder Image */}
            <img
              src={aditya}
              alt="Founder"
              className="rounded-full w-32 h-32 object-cover transition-transform duration-500 transform hover:scale-110"
            />
            <div>
              <h4 className="text-xl font-semibold text-gray-800 hover:text-blue-500 transition-colors duration-300">
                ADITYA KUMAR
              </h4>
              <p className="text-gray-600">Founder</p>
              <p className="mt-4 text-gray-600">B.E - Electrical Engg. M.T - Energy Management</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
