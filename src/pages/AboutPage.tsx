import { useSpring } from '@react-spring/web';
import 'swiper/css';
import { useRef ,useState} from 'react';
// import Navbar from '../components/Navbar/Navbar'
import About  from '../components/About'
import PastWorks from '../components/Pastworks'
import Gallery from '../components/Gallery'
import GalleryComponent from '../components/GalleryComponent'



const AboutPage = () => {
     // Create a reference for Swiper to control the carousel programmatically

  // Animations for sections

  // Function to go to next slide
  const [swiper, setSwiper] = useState(null);

  const galleryAnimation = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    config: { tension: 170, friction: 26 },
  });

  const goToPrevSlide = () => swiper?.slidePrev();
  const goToNextSlide = () => swiper?.slideNext();

  // gsap
 





  return (
    <>
    {/* <Navbar/>    */}
    <About/>
    <PastWorks/>
    <Gallery/>
    <section id="gallery" >
      
      
      <GalleryComponent
           galleryAnimation={galleryAnimation}
           goToPrevSlide={goToPrevSlide}
           goToNextSlide={goToNextSlide}
      
      
      />
         

      </section>

    
    </>
  )
}

export default AboutPage