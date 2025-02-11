import { useState, useEffect } from 'react';
import whatsapp from '../images/whatsapp.png';
import { initAOS } from "../Animations/aosAnimation";

const Whatsapp = () => {
  const [show, setShow] = useState(false);
  const preBuiltMessage = encodeURIComponent('Hello, I would like to inquire about your services.');

  useEffect(() => {
    initAOS();

    const checkScrollPosition = () => {
      if (window.scrollY > 100) {
        setShow(true);
      } else {
        setShow(false);
      }
    };

    window.addEventListener('scroll', checkScrollPosition);

    return () => {
      window.removeEventListener('scroll', checkScrollPosition);
    };
  }, []);

  return (
    <>
      {show && (
        <a
          href={`https://wa.me/9442338670?text=${preBuiltMessage}`}
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-20 right-4 z-40 md:bottom-20 md:right-5"
          style={{
            animation: "bounce 2s infinite",
          }}
        >
          <img
            src={whatsapp}
            alt="whatsapp-png-image"
            className="w-12 h-12 md:w-12 md:h-12"
            data-aos="fade-left"
          />
        </a>
      )}
    </>
  );
};

export default Whatsapp;
