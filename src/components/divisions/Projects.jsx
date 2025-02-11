import { useState, useEffect } from "react";
import partnership from "../images/partnership.png";
import CountUp from "react-countup";
import { FaProjectDiagram, FaPeopleCarry, FaClock, FaUsers } from "react-icons/fa";
import { initAOS } from "../Animations/aosAnimation";
import { useNavigate } from "react-router-dom";

const Projects = () => {
  const [inView, setInView] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    initAOS(); // Initialize AOS animations
  }, []);

  const stats = [
    { label: "Projects Undertaken", value: 20, icon: <FaProjectDiagram /> },
    { label: "Ongoing Projects", value: 5, icon: <FaClock /> },
    { label: "Hours of Support", value: 999, icon: <FaPeopleCarry /> },
    { label: "Number of Workers", value: 25, icon: <FaUsers /> },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setInView(true);
        } else {
          setInView(false);
        }
      },
      { threshold: 0.5 }
    );

    const section = document.getElementById("projectsSection");
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <div className="bg-slate-900 px-2 py-10 overflow-hidden md:p-8">
      <div className="max-w-7xl mx-auto" id="projectsSection" data-aos="fade-up">
        <h2 className="text-2xl font-bold text-center mb-12 text-white sm:text-3xl md:text-4xl">
          Our Projects and Stats
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-[#1E293B] p-2 rounded-lg shadow-xl hover:shadow-2xl md:p-6"
            >
              <div className="flex items-center mb-4 text-gray-200">
                <div className={`transition-all duration-300 hover:scale-125 text-xl md:text-2xl`}>
                  {stat.icon}
                </div>
                <h3 className="text-xl text-gray-100 font-semibold ml-2">{stat.label}</h3>
              </div>

              <p className="text-4xl font-bold text-gray-200">
                {inView && (
                  <CountUp start={0} end={stat.value} duration={2} separator="," redraw={true} />
                )}
              </p>
            </div>
          ))}
        </div>

        <div className="flex flex-col md:flex-row gap-5 mt-10 items-center rounded-lg shadow-lg md:mt-20" >
          <div className="hidden md:flex w-4/12 relative justify-center items-center" data-aos="fade-right">
            <img src={partnership} alt="Partnership" className="w-3/4 h-auto relative z-50" />
            <div className="absolute top-1/2 left-1/2 z-0 -translate-x-1/2 -translate-y-1/2 rounded-full h-60 w-60 bg-gradient-to-r from-[#00bfff] to-[#1E90FF] flex justify-center items-center"></div>
          </div>

          <div className="w-full md:w-8/12 bg-[#1E293B] p-3 rounded-lg shadow-xl md:p-8" data-aos="fade-left">
            <h3 className="text-2xl font-bold text-white leading-tight md:text-3xl">Partner with Us for Success</h3>
            <p className="text-base text-gray-300 mt-4 leading-relaxed md:text-lg">
              Collaborate with us to explore innovative digital solutions tailored to empower your business.
              Together, we’ll develop impactful strategies that foster growth and achieve outstanding results.
            </p>
            <button className="mt-6 px-6 py-3 bg-blue-600 font-bold cursor-pointer text-white rounded-lg hover:bg-blue-700 transition duration-300" onClick={() => navigate('/contact-form')}>
              Reach Us
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
