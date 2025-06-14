import React, { useState, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface FAQItem {
  question: string;
  answer: React.ReactNode;
}

const FAQ: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleAnswer = (index: number) => {
    setActiveIndex(prev => (prev === index ? null : index));
  };

  const faqData: FAQItem[] = [
    {
      question: "What is Panjar Renewables LLP?",
      answer: (
        <>
          <span className="font-bold text-blue-600">Panjar Renewables LLP</span> is a startup focused on developing
          <span className="font-bold text-green-600"> solar-powered solutions</span> for
          <span className="font-bold"> agricultural</span> and <span className="font-bold">small-scale industrial applications</span>.
          Based at the <span className="font-bold text-blue-600">BIT Sindri Incubation Center</span>, our mission is to drive
          <span className="font-bold text-green-600"> sustainable development</span> by creating innovative solar appliances tailored for local needs.
        </>
      )
    },
    {
      question: "What types of products does Panjar offer?",
      answer: (
        <>
          We offer a range of <span className="font-bold text-green-600">solar-powered products</span>, including
          <span className="font-bold"> solar dryers</span> for produce,
          <span className="font-bold">distillers for essential oils</span>, and
          <span className="font-bold"> power sources</span> for agricultural equipment. Additionally, we provide
          <span className="font-bold text-blue-600"> solar energy solutions</span> like
          <span className="font-bold">EV charging stations</span>, streetlights, and smart benches.
        </>
      )
    },
    {
      question: "What problem does Panjar address in the agricultural sector?",
      answer: (
        <>
          <span className="font-bold">Small farmers</span> often face challenges with <span className="font-bold">produce spoilage</span>,
          costly <span className="font-bold">cold storage</span>, and reliance on <span className="font-bold">intermediaries</span>.
          Our <span className="font-bold text-green-600">solar appliances</span> aim to reduce <span className="font-bold">produce wastage</span>,
          offer affordable solutions, and improve farmers' <span className="font-bold">profitability</span>.
        </>
      )
    },
    {
      question: "What are the unique features of Panjar’s products?",
      answer: (
        <>
          Our products are designed with features such as adjustable angles for <span className="font-bold">optimal sunlight exposure</span>
          and <span className="font-bold">multi-fuel capabilities</span>, allowing continuous operation even without sunlight.
          This ensures better <span className="font-bold">efficiency</span> and faster <span className="font-bold">ROI</span> for our customers.
        </>
      )
    },
    {
      question: "Where does Panjar Renewable operate?",
      answer: (
        <>
          We primarily serve regions like <span className="font-bold">Jharkhand</span>,
          <span className="font-bold">Bihar</span>, <span className="font-bold">Odisha</span>, and <span className="font-bold">Uttar Pradesh</span>,
          focusing on areas where <span className="font-bold">solar-powered solutions</span> can provide significant economic and environmental benefits.
        </>
      )
    },
    {
      question: "How does Panjar support local farmers and small businesses?",
      answer: (
        <>
          We offer products that help reduce <span className="font-bold">operational costs</span> and boost <span className="font-bold">productivity</span>.
          By collaborating with <span className="font-bold">local institutions</span>, we ensure our products address real-world needs,
          ultimately enhancing <span className="font-bold">agricultural efficiency</span> and sustainability.
        </>
      )
    },
    {
      question: "What sets Panjar apart from other renewable energy companies?",
      answer: (
        <>
          Panjar focuses on <span className="font-bold text-blue-600">customer-centric design</span>, local market needs, and customized solutions.
          Our approach combines rigorous <span className="font-bold">field testing</span>, adaptability to local climates, and a focus on
          <span className="font-bold text-green-600">eco-friendly</span> and <span className="font-bold">cost-effective solutions</span>.
        </>
      )
    },
    {
      question: "Does Panjar offer customization services?",
      answer: (
        <>
          Yes, we provide customized <span className="font-bold text-green-600">solar solutions</span> based on specific customer needs and industry requirements.
          This includes adapting designs for different <span className="font-bold">agricultural</span> and <span className="font-bold">industrial uses</span>.
        </>
      )
    },
    {
      question: "How does Panjar contribute to environmental sustainability?",
      answer: (
        <>
          Our <span className="font-bold text-green-600">solar-powered appliances</span> reduce reliance on <span className="font-bold">fossil fuels</span>,
          cut <span className="font-bold">greenhouse gas emissions</span>, and promote the use of <span className="font-bold">renewable energy</span>.
          This aligns with our commitment to a cleaner, more <span className="font-bold text-green-600">sustainable future</span>.
        </>
      )
    },
    {
      question: "What is Panjar’s vision for the future?",
      answer: (
        <>
          Panjar aims to expand its market reach, enhance its product line, and increase <span className="font-bold">production capacity</span>.
          We are committed to fostering <span className="font-bold text-green-600">sustainable development</span> in the agricultural and small-scale industrial sectors
          through innovative <span className="font-bold">solar technology</span>.
        </>
      )
    },
    {
      question: "How can I get in touch with Panjar Renewable?",
      answer: (
        <>
          You can reach us at <span className="font-bold text-blue-600">adityakumar4645@gmail.com</span> or by phone at
          <span className="font-bold"> 8986954645</span> for more information about our products and services.
        </>
      )
    }
  ];

//   useEffect(() => {
//     faqData.forEach((_, index) => {
//       gsap.fromTo(
//         `.faq-item-${index}`,
//         { opacity: 0, y: 50 },
//         {
//           opacity: 1,
//           y: 0,
//           scrollTrigger: {
//             trigger: `.faq-item-${index}`,
//             start: "top 80%",
//             toggleActions: "play none none reverse"
//           }
//         }
//       );
//     });
//   }, []);

  return (
    <section id="faq" className="py-16 px-4 bg-gray-100">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-blue-600 mb-6">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {faqData.map((item, index) => (
            <div key={index} className={`faq-item-${index} bg-white shadow-lg rounded-lg overflow-hidden`}>
              <div
                onClick={() => toggleAnswer(index)}
                className="flex justify-between items-center p-4 cursor-pointer transition duration-300 ease-in-out hover:bg-blue-50"
              >
                <h3 className="text-lg font-semibold text-gray-900">{item.question}</h3>
                <span
                  className={`transform transition-all duration-300 ${activeIndex === index ? 'rotate-180' : ''}`}
                >
                  <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                       xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                          d="M19 9l-7 7-7-7"></path>
                  </svg>
                </span>
              </div>
              <div
                className={`max-h-0 overflow-hidden transition-all duration-500 ease-in-out ${activeIndex === index ? 'max-h-40' : ''}`}
              >
                <p className="p-4 text-gray-600">{item.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
