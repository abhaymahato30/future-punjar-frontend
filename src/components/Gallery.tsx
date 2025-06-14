import React, { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import a1 from '../assets/gallary/1.jpeg';
import a2 from '../assets/gallary/2.jpeg';
import a3 from '../assets/gallary/3.jpg';
import a4 from '../assets/gallary/4.jpg';
import a5 from '../assets/gallary/5.jpeg';
import a6 from '../assets/gallary/6.jpeg';
import a7 from '../assets/gallary/7.jpeg';
import a8 from '../assets/gallary/8.jpg';
import a9 from '../assets/gallary/9.jpg';

gsap.registerPlugin(ScrollTrigger);

interface ImageItem {
  id: number;
  src: string;
  alt: string;
}

const Gallery: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [currentImage, setCurrentImage] = useState<string | null>(null);
  const galleryRef = useRef<(HTMLDivElement | null)[]>([]);

  const images: ImageItem[] = [
    { id: 1, src: a1, alt: 'Newspaper 1' },
    { id: 2, src: a2, alt: 'Certificate 1' },
    { id: 3, src: a3, alt: 'Newspaper 2' },
    { id: 4, src: a4, alt: 'Certificate 2' },
    { id: 5, src: a5, alt: 'Newspaper 3' },
    { id: 6, src: a6, alt: 'Certificate 3' },
    { id: 7, src: a7, alt: 'Certificate 4' },
    { id: 8, src: a8, alt: 'Certificate 5' },
    { id: 9, src: a9, alt: 'Certificate 6' },
  ];

  const openModal = (src: string) => {
    setCurrentImage(src);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    setCurrentImage(null);
  };

  useEffect(() => {
    galleryRef.current.forEach((el, index) => {
      if (el) {
        gsap.fromTo(
          el,
          { opacity: 0, y: 100 },
          {
            opacity: 1,
            y: 0,
            delay: index * 0.1,
            scrollTrigger: {
              trigger: el,
              start: 'top 80%',
              toggleActions: 'play none none reverse',
            },
          }
        );
      }
    });
  }, []);

  return (
    <section id="gallery" className="py-16 px-4 bg-gray-100">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-blue-600 mb-8">Recognition</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {images.map((image, index) => (
            <div
              key={image.id}
              ref={(el) => (galleryRef.current[index] = el)}
              className="relative group cursor-pointer overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300"
              onClick={() => openModal(image.src)}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-80 h-60 object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black bg-opacity-30 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          ))}
        </div>

        {isOpen && currentImage && (
          <div
            className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
            onClick={closeModal}
          >
            <div className="relative max-w-3xl p-4 bg-white rounded-lg shadow-lg">
              <button
                onClick={closeModal}
                className="absolute top-0 right-0 p-2 text-white bg-red-600 rounded-full hover:bg-red-700 text-xl leading-none"
              >
                ×
              </button>
              <img
                src={currentImage}
                alt="Enlarged View"
                className="max-w-full max-h-screen object-contain"
              />
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Gallery;
