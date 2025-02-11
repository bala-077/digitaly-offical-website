import { motion } from 'framer-motion';
import React from 'react';

const TextAnimation = ({ text, delay = 0 }) => {
  return React.createElement(
    motion.h1,
    {
      initial: { opacity: 0, y: 20 },
      animate: { opacity: 1, y: 0 },
      transition: { duration: 1, delay },
      className: "text-4xl font-bold text-white md:text-5xl",
    },
    text
  );
};

const TextAnimationP = ({ text, delay = 0 }) => {
  return React.createElement(
    motion.p,
    {
      initial: { opacity: 0, y: 20 },
      animate: { opacity: 1, y: 0 },
      transition: { duration: 0.5, delay },
      className: "text-lg mt-5 text-white font-semibold md:text-2xl",
    },
    text
  );
};

const Button = ({ text, delay = 0 }) => {
  return React.createElement(
    motion.button,
    {
      initial: { opacity: 0 },
      animate: { opacity: 1 },
      transition: { duration: 2, delay },
      className: "px-6 py-3 bg-blue-500 cursor-pointer hover:bg-blue-700 rounded-lg text-white font-semibold transition duration-300 mt-6",
    },
    text
  );
};

export { TextAnimation, TextAnimationP, Button };
