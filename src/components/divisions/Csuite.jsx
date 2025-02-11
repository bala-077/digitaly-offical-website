import { useEffect } from "react";
import arun from "../images/Arun.webp";
import aarthi from "../images/Aarthi.webp";
import venkat from "../images/Venkat.webp";
import { FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { initAOS } from '../Animations/aosAnimation';

const Csuit = () => {
  useEffect(() => {
    initAOS();
  }, []);

  const founders = [
    {
      name: "Arun Kanyakumar",
      description: "Founder",
      linkedin: "https://www.linkedin.com/in/arunkanyakumar",
      image: arun,
      quotes: "Inspiring leadership with innovative ideas.",
    },
    {
      name: "Venkatakrishnan Lakshmanan",
      description: "Director",
      linkedin: "https://www.linkedin.com/in/venkatakrishnan-lakshmanan-director-it?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BtyieAVPgT22HyDWvzl6H9w%3D%3D",
      image: venkat,
      quotes: "Building pathways to success.",
    },
    {
      name: "Aarthi Venkatakrishnan",
      description: "Director",
      linkedin: "https://www.linkedin.com/in/aarthi-venkatakrishnan",
      image: aarthi,
      quotes: "Driving creativity and innovation.",
    },
    {
      name: "Rajesh Kumar",
      description: "Technical Advisor",
      linkedin: "https://www.linkedin.com/in/shirish-shinde-9ab0a5179/",
      image: arun,
      quotes: "Empowering the team for excellence.",
    },
  ];

  return (
    <section className="p-5 bg-slate-700 md:px-12 py-8 transition-all duration-500">
      <h1
        className="text-2xl mt-10 font-bold text-white md:text-4xl text-center"
        data-aos="fade-up"
      >
        C-suite
      </h1>
      <div className="grid grid-cols-1 py-10 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {founders.map((item, index) => (
          <div
            key={index}
            className="relative bg-slate-800 rounded-lg shadow-lg overflow-hidden group transform transition-transform duration-500 hover:shadow-xl md:hover:scale-105"
            data-aos="fade-up"
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-[400px] object-cover rounded-t-lg transition-transform duration-500 group-hover:scale-105"
              loading="lazy"
            />
            <div className="absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-gray-900 via-slate-800 to-transparent text-white transition-opacity duration-500">
              <h4 className="text-xl font-bold truncate">{item.name}</h4>
              <p className="text-sm mt-1 text-start font-bold uppercase text-green-500  rounded-lg">
                {item.description}
              </p>
              <div className="mt-4 flex gap-4 md:hidden">
                <a
                  href={item.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center p-3 bg-blue-600 rounded-full text-white hover:bg-blue-700 hover:shadow-[0_0_15px_#2563eb] transition-all duration-500"
                >
                  <FaLinkedin size={20} />
                </a>
                <a
                  href="#"
                  className="flex items-center justify-center p-3 bg-green-600 rounded-full text-white hover:bg-green-700 hover:shadow-[0_0_15px_#16a34a] transition-all duration-500"
                >
                  <FaWhatsapp size={20} />
                </a>
              </div>
              <button className="hidden md:w-full mt-3 py-2 bg-blue-600 text-sm font-semibold text-white rounded hover:bg-blue-700 transition-all duration-500">
                Contact Us
              </button>
            </div>
            <div className="hidden md:flex absolute inset-0 flex-col items-center justify-center bg-black/80 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <img
                src={item.image}
                alt={item.name}
                className="rounded-full w-32 h-32 object-cover mb-4"
              />
              <p className="text-white text-lg text-center px-6">
                {item.quotes}
              </p>
              <div className="mt-4 flex gap-4">
                <a
                  href={item.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center p-3 bg-blue-600 rounded-full text-white hover:bg-blue-700 hover:shadow-[0_0_15px_#2563eb] transition-all duration-500"
                >
                  <FaLinkedin size={20} />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Csuit;
