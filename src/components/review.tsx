import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface ReviewItem {
  quote: string;
  author: string;
  position: string;
  highlight: string;
}

const Review: React.FC = () => {
  const reviewRef = useRef<(HTMLDivElement | null)[]>([]);

  const reviewData: ReviewItem[] = [
    {
      quote: "I recently started using Panjar's solar dryer, and it’s been a game-changer for my farm...",
      author: "Rohit Kumar",
      position: "Small Farmer, Bihar",
      highlight: "solar dryer, cost-effective"
    },
    {
      quote: "Panjar Renewables has created a wonderful range of solar-powered solutions...",
      author: "Aditi Sharma",
      position: "Municipal Coordinator, Jharkhand",
      highlight: "solar-powered solutions, eco-friendly"
    },
    {
      quote: "From initial consultation to post-installation support, Panjar's team has been fantastic...",
      author: "Anjali Mehta",
      position: "Essential Oil Producer, Odisha",
      highlight: "solar distiller, functional, sustainable"
    },
    {
      quote: "We use Panjar's solar-powered water pumps on our farm, and they have been incredibly effective...",
      author: "Suresh Patel",
      position: "Farmer, Uttar Pradesh",
      highlight: "solar-powered water pumps, reduce reliance on diesel"
    },
    {
      quote: "Running a small manufacturing unit, energy costs are a big concern for us...",
      author: "Vikas Jain",
      position: "Small Business Owner, Jharkhand",
      highlight: "solar power sources, cut down electricity bills"
    },
    {
      quote: "As an advocate for green energy, I’m thrilled to see companies like Panjar stepping up...",
      author: "Priya Singh",
      position: "Environmental Consultant, Ranchi",
      highlight: "smart benches, green energy"
    }
  ];

  useEffect(() => {
    reviewRef.current.forEach((el, i) => {
      if (el) {
        gsap.fromTo(
          el,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            scrollTrigger: {
              trigger: el,
              start: "top 90%",
              toggleActions: "play none none none"
            }
          }
        );
      }
    });
  }, []);

  return (
    <section id="reviews" className="py-16 mt-40 px-4 bg-gray-100">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-blue-600 mb-8">Customer Reviews</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviewData.map((review, index) => (
            <div
              key={index}
              ref={(el) => (reviewRef.current[index] = el)}
              className="review-card bg-white shadow-lg rounded-lg p-6 space-y-4"
            >
              <p className="text-lg text-gray-600 italic">"{review.quote}"</p>
              <p className="font-semibold text-gray-900">{review.author}</p>
              <p className="text-gray-700">{review.position}</p>
              <div className="space-x-2">
                {review.highlight.split(',').map((word, idx) => (
                  <span key={idx} className="text-green-600 font-bold">{word.trim()}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Review;
