import { useState, useEffect } from 'react';
import { FaArrowUp } from "react-icons/fa";
import { motion } from 'framer-motion';

const Arrow = () => {
  const [show, setShow] = useState(false);

  // Function to handle scroll behavior
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Function to show/hide the arrow based on scroll position
  const checkScrollPosition = () => {
    if (window.scrollY > 200) { // Show when scrolled down 200px
      setShow(true);
    } else {
      setShow(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', checkScrollPosition);

    return () => {
      window.removeEventListener('scroll', checkScrollPosition);
    };
  }, []);

  return (
    <>
      {show && (
        <motion.section
          className="fixed bottom-2 right-4 z-40  cursor-pointer rounded-full bg-[#F57D20] p-1 shadow-xl hover:bg-[#f5a020] transition-colors duration-300 md:p-3"
          onClick={scrollToTop}
          animate={{
            scale: [0.8, 1.2, 1],
            opacity: [0, 1],
          }}
          transition={{
            duration: 0.5,
            ease: "easeOut",
          }}
        >
          <FaArrowUp className="text-white text-xl md:text-2xl" />
        </motion.section>
      )}
    </>
  );
};

export default Arrow;
