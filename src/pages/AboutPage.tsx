import { useSpring } from '@react-spring/web';
import 'swiper/css';
import { useState } from 'react';
import type { Swiper as SwiperClass } from 'swiper/types';

import About from '../components/About';
import PastWorks from '../components/Pastworks';
import Gallery from '../components/Gallery';
import GalleryComponent from '../components/GalleryComponent';

const AboutPage = () => {
  const [swiper, setSwiper] = useState<SwiperClass | null>(null);

  // Animation only uses numbers
  const galleryAnimation = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    config: { tension: 170, friction: 26 },
  });

  const goToPrevSlide = () => swiper?.slidePrev();
  const goToNextSlide = () => swiper?.slideNext();

  return (
    <>
      <About />
      <PastWorks />
      <Gallery />

      <section id="gallery">
        <GalleryComponent
          galleryAnimation={galleryAnimation}
          goToPrevSlide={goToPrevSlide}
          goToNextSlide={goToNextSlide}
          setSwiper={setSwiper}
        />
      </section>
    </>
  );
};

export default AboutPage;
