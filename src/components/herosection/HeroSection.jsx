import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import {
  TextAnimation,
  TextAnimationP,
  Button,
} from "../Animations/textAnimation";
import { useState } from "react";
import herosection from "../images/herosection.jpg";
import herosection1 from "../images/herosection1.jpg";
import herosection2 from "../images/herosection2.jpg";
import { useNavigate } from "react-router-dom";

const HeroSection = () => {
  const navigate = useNavigate();
  const slides = [
    {
      image: herosection,
      title: "Empowering Your Digital Future with Customized IT Solutions",
      subHead: "End-to-end services for digital growth. Web design, SEO, app development & more.",
      button: "Start Your Digital Transformation",
    },
    {
      image: herosection1,
      title: "Innovate. Transform. Succeed. Digital Marketing Experts at Your Service.",
      subHead: "Harness the power of innovative strategies for business growth.",
      button: "Get Your Free Consultation",
    },
    {
      image: herosection2,
      title: "Your Success, Our Commitment: Tailored IT Solutions for Every Industry",
      subHead: "Customized web and mobile development for businesses of all sizes.",
      button: "Learn How We Can Help",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  const handleSlideChange = (swiper) => {
    setActiveIndex(swiper.realIndex);
  };

  return (
    <div id="home" className="w-full h-screen overflow-hidden bg-black">
      <Swiper
        className="relative w-full h-full"
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={0}
        slidesPerView={1}
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        loop={true}
        speed={1000}
        onSlideChange={handleSlideChange}
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="relative w-full overflow-hidden h-screen">
              <img
                src={slide.image}
                alt={`High-quality digital solutions - Slide ${index + 1}`}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 h-full w-full bg-black opacity-60"></div>
              <div className="absolute inset-0 p-3 flex flex-col justify-center items-start text-start text-white md:p-20">
                {activeIndex === index && (
                  <>
                    <TextAnimation text={slide.title} delay={0.5} />
                    <TextAnimationP text={slide.subHead} delay={1} />
                    <Button text={slide.button} delay={0.5} onClick={() => navigate('/contact-form')}/>
                  </>
                )}
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default HeroSection;