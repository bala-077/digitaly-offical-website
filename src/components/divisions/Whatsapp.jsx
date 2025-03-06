import { useState, useEffect } from 'react';
import whatsapp from '../images/whatsapp.png';
import { initAOS } from "../Animations/aosAnimation";

const Whatsapp = () => {
  const [show, setShow] = useState(false);
  const preBuiltMessage = encodeURIComponent("Hello, I would like to inquire about your services.");
  const whatsappLink = `https://wa.me/9442338670?text=${preBuiltMessage}`;

  useEffect(() => {
    initAOS();

    const checkScrollPosition = () => {
      setShow(window.scrollY > 100);
    };

    window.addEventListener('scroll', checkScrollPosition);
    return () => window.removeEventListener('scroll', checkScrollPosition);
  }, []);

  return (
    <>
      {show && (
        <a
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-14 right-4 z-40 md:bottom-20 md:right-5"
          style={{
            animation: "bounce 2s infinite",
          }}
        >
          <img
            src={whatsapp}
            alt="whatsapp-png-image"
            className="w-10 h-10 md:w-12 md:h-12"
            data-aos="fade-left"
          />
        </a>
      )}
    </>
  );
};

export default Whatsapp;
