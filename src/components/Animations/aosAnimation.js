import AOS from "aos";
import "aos/dist/aos.css";

export const initAOS = () => {
    AOS.init({
        duration: 1200,
        easing: "ease-out-back", 
        once: false,
        offset: 100,
        opacity: 0.5, 
        delay: 100, 
        startEvent: 'DOMContentLoaded',
    });
};
