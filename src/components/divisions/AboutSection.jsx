import { RiSearchLine } from "react-icons/ri";
import { IoDiamondOutline } from "react-icons/io5";
import { SlBadge } from "react-icons/sl";
import { RiTimerFlashLine } from "react-icons/ri";
import { useEffect } from "react";
import { initAOS } from "../Animations/aosAnimation";

const AboutSection = () => {
  useEffect(() => {
    initAOS();
  }, []);

  const aboutContents = [
    {
      icon: <RiSearchLine className="text-2xl text-orange-500 md:text-4xl" />,
      title: "Stay Ahead of Your Competition",
      content: "Stay relevant and competitive in a rapidly evolving digital market. Our solutions ensure you’re always ahead of the curve.",
    },
    {
      icon: <IoDiamondOutline className="text-2xl text-orange-500 md:text-4xl" />,
      title: "Maximize Your Brand's Value",
      content:
        "Unlock your brand's full potential with data-driven digital marketing strategies that engage and convert your target audience.",
    },
    {
      icon: <SlBadge className="text-2xl text-orange-500 md:text-4xl" />,
      title: "Commitment to Quality & Excellence",
      content:
        "We prioritize quality over quantity, delivering exceptional results that not only meet but exceed your expectations, ensuring long-term value.",
    },
    {
      icon: <RiTimerFlashLine className="text-2xl text-orange-500 md:text-4xl" />,
      title: "Fast, Efficient Turnaround Times",
      content:
        "We understand the urgency in the digital space and provide rapid, effective solutions to meet your critical business objectives quickly.",
    },
  ];

  return (
    <section id="why choose us" className="bg-slate-900 w-full overflow-hidden py-5 px-3 md:px-16 md:py-20">
      <div className="w-full mx-auto">
        <div className="text-start">
          <h2 data-aos="fade-up" className="text-2xl text-white font-bold mb-4 md:text-4xl">
            Why Choose Us for Your Digital Growth?
          </h2>
          <p data-aos="fade-up" className="text-gray-300 text-sm leading-relaxed mx-auto md:text-base">
            At DIGITALY, we specialize in offering top-notch digital marketing, web development, and custom software solutions that drive growth. Our tailored services are designed to enhance your online presence, improve customer experience, and streamline business processes. Whether you need a high-performing website, a powerful SEO strategy, or a custom mobile app, we craft solutions that deliver measurable results. Partner with us to experience digital transformation that leads to long-term success.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 mt-12 md:gap-6">
          {aboutContents.map((item, index) => (
            <div
              key={index}
              data-aos={index % 2 === 0 ? "fade-left" : "fade-right"}
              data-aos-delay={`${index * 200}`}
              className="bg-[#1E293B] rounded-sm px-1 py-2 text-start transition-all duration-500 ease-in-out md:px-3 md:py-3 md:rounded-xl"
            >
              <span>{item.icon}</span>
              <h3 className="text-xl font-semibold text-white transition-colors duration-300">
                {item.title}
              </h3>
              <p className="text-gray-300 mt-2 transition-colors duration-300">
                {item.content}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-12">
        <h2
          data-aos="fade-up"
          className="text-2xl text-center font-bold mb-4 text-white md:text-3xl"
        >
          Why{" "}
          <span className="bg-gradient-to-r from-[#056839] to-[#f64a00] text-transparent bg-clip-text">
            Digitaly
          </span>{" "}
          Stands Out Among Digital Agencies
        </h2>
        <p data-aos="fade-up" className="text-gray-300 leading-relaxed">
          At DIGITALY, we go beyond traditional digital marketing services. We offer customized digital solutions that are specifically designed to fit the unique needs of your business, whether you're a startup or an established brand. Our team collaborates with you to create targeted strategies that align with your business goals. From enhancing user experience through intuitive web design and development to boosting visibility with SEO and SEM, we provide comprehensive services that ensure your digital success.
        </p>
        <p data-aos="fade-up" className="text-gray-300 leading-relaxed mt-4">
          Our customer-centric approach ensures that we solve your customers' pain points while driving targeted traffic to your website, converting leads into loyal customers, and fostering long-term relationships. With our proven strategies, we deliver measurable growth and consistent results that ensure your business stays ahead in an ever-competitive market.
        </p>
      </div>
    </section>
  );
};

export default AboutSection;
