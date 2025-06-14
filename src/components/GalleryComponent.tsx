import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';
import { Autoplay } from 'swiper/modules';
import { animated, SpringValue } from 'react-spring';

import g1 from '../assets/gallery/1.jpg';
import g2 from '../assets/gallery/2.jpg';
import g3 from '../assets/gallery/3.jpg';
import g4 from '../assets/gallery/4.jpg';
import g5 from '../assets/gallery/5.jpg';
import g7 from '../assets/gallery/7.jpg';
import g8 from '../assets/gallery/8.jpg';
import g9 from '../assets/gallery/9.jpg';
import g10 from '../assets/gallery/10.jpg';
import g11 from '../assets/gallery/11.jpg';
import g12 from '../assets/gallery/12.jpg';
import g13 from '../assets/gallery/13.jpg';
import g14 from '../assets/gallery/14.jpg';
import g15 from '../assets/gallery/15.jpg';
import g16 from '../assets/gallery/16.jpg';

import { Swiper as SwiperClass } from 'swiper/types';

// Define prop types
interface GalleryComponentProps {
  galleryAnimation: {
    [key: string]: SpringValue<string | number>;
  };
}

const GalleryComponent: React.FC<GalleryComponentProps> = ({ galleryAnimation }) => {
  const swiperRef = useRef<SwiperClass | null>(null);
  const [swiperInstance, setSwiperInstance] = useState<SwiperClass | null>(null);

  const images: string[] = [
    g1, g2, g3, g4, g5, g7, g8, g9, g10, g11, g12, g13, g14, g15, g16,
  ];

  const onSwiperInit = (swiper: SwiperClass) => {
    setSwiperInstance(swiper);
  };

  const goToPrevSlide = () => {
    swiperInstance?.slidePrev();
  };

  const goToNextSlide = () => {
    swiperInstance?.slideNext();
  };

  return (
    <section className="py-16 px-4 bg-white">
      <animated.div style={galleryAnimation} className="text-center">
        <h2 className="text-4xl font-bold text-blue-600">Our Gallery</h2>

        <div className="relative mt-8">
          <Swiper
            ref={swiperRef}
            modules={[Autoplay]}
            spaceBetween={10}
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            loop={true}
            autoplay={{
              delay: 1000,
              disableOnInteraction: false,
            }}
            onSwiper={onSwiperInit}
            className="my-swiper"
          >
            {images.map((imageUrl, index) => (
              <SwiperSlide key={index}>
                <img
                  src={imageUrl}
                  alt={`Gallery ${index + 1}`}
                  className="w-full h-80 object-cover rounded-lg"
                />
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom Buttons */}
          <div className="absolute top-1/2 z-10 left-0 transform -translate-y-1/2 pl-4">
            <button
              onClick={goToPrevSlide}
              className="text-white bg-blue-600 hover:bg-blue-700 p-2 rounded-full shadow-lg"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
              </svg>
            </button>
          </div>

          <div className="absolute top-1/2 z-10 right-0 transform -translate-y-1/2 pr-4">
            <button
              onClick={goToNextSlide}
              className="text-white bg-blue-600 hover:bg-blue-700 p-2 rounded-full shadow-lg"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </animated.div>
    </section>
  );
};

export default GalleryComponent;
