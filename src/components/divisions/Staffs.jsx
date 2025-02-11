import { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";
import "swiper/css/autoplay";
import "swiper/css/mousewheel";
import {
  EffectCoverflow,
  Navigation,
  Pagination,
  Autoplay,
  Mousewheel,
} from "swiper/modules";

import abdul from '../images/abdul.webp';
import abi from '../images/abi.webp';
import arun from '../images/Arunn.webp';
import bala from '../images/balahariharan.webp';
import deva from '../images/deva.webp';
import jeeva from '../images/jeeva.webp';
import jothi from '../images/jothi.webp';
import karthick from '../images/karthick.webp';
import narmatha from '../images/narmatha.webp';
import rajaram from '../images/rajaram.webp';
import kokila from '../images/kokila.webp';
import rubina from '../images/rubina.webp';
import seenu from '../images/seenu.webp';
import senthil from '../images/senthil.webp';
import sakthi from '../images/sakthi.webp';
import suba from '../images/suba.webp';
import varshini from '../images/Varshi.webp';
import vijay from '../images/vijay.webp';
import Vishalini from '../images/Vishalini.webp';
import sundar from '../images/sundar.webp';
import dharshini from '../images/dharshini.webp';
import dhilip from '../images/dhilip.webp'

const allStaff = [
  { image: rajaram, name: "RAJARAM", role: "Project Developer", quotes: "Transforming ideas into digital solutions, one project at a time." },
  { image: karthick, name: "KARTHICK", role: "Full Stack Developer", quotes: "Building bridges between front-end design and back-end functionality." },
  { image: sakthi, name: "SAKTHI RAJENDHARAN", role: "Project Developer", quotes: "Innovation starts with a single line of code." },
  { image: jeeva, name: "JEEVANANTHAN", role: "Full Stack Developer", quotes: "Code is art, and every bug is a lesson learned." },
  { image: senthil, name: "SENTHIL NADHAN", role: "Full Stack Developer", quotes: "Efficiency is not just a goal; it’s a mindset." },
  { image: abdul, name: "ABDUAL RAZEETHU", role: "Full Stack Developer", quotes: "Code is like humor. When you have to explain it, it’s bad." },
  { image: arun, name: "ARUN", role: "Full Stack Developer", quotes: "Turning lines of code into seamless user experiences." },
  { image: varshini, name: "KALAIVARSHINI", role: "Full Stack Developer", quotes: "Technology brings us together, but innovation sets us apart." },
  { image: rubina, name: "RUBINA", role: "Full Stack Developer", quotes: "Transforming the web, one pixel at a time." },
  { image: kokila, name: "GOKILA", role: "Full Stack Developer", quotes: "Dream big, code smart, achieve excellence." },
  { image: narmatha, name: "NARMATHA", role: "Full Stack Developer", quotes: "Coding is a way of life, and optimization is key." },
  { image: bala, name: "BALA HARIHARAN", role: "Full Stack Developer", quotes: "Designing solutions that shape the future." },
  { image: suba, name: "SUBALAKSHMI", role: "HR", quotes: "The best asset of any company is its people." },
  { image: sundar, name: "SUNDAR RAJAN", role: "Business Developer", quotes: "Turning opportunities into long-term success." },
  { image: deva, name: "DEVACHANDAN", role: "Digital Creator", quotes: "Creativity is the spark that drives innovation." },
  { image: seenu, name: "SRINIVASAN", role: "Digital Creator", quotes: "Bringing ideas to life through the magic of digital art." },
  { image: abi, name: "ABI", role: "Digital Creator", quotes: "Designing the future with a splash of creativity." },
  { image: vijay, name: "VIJAY", role: "Tester", quotes: "Ensuring quality by testing every detail." },
  { image: jothi, name: "JOTHI", role: "Tester", quotes: "Quality is not an act, it’s a habit." },
  { image: Vishalini, name: "Vishalini", role: "Data Scientist", quotes: "Turning data into decisions that drive success." },
  { image: dharshini, name: "DHARSHINI", role: "UI/UX Designer", quotes: "Design is not just what it looks like; it’s how it works." },
  { image: dhilip, name: 'Dhillip', role: 'Graphic Designer', quotes: 'Design is the silent ambassador of your brand.' }

];

const StaffSwiper = () => {
  useEffect(() => {
    console.log("Swiper Component Mounted");
    console.log("Total Staff Members:", allStaff.length);
  }, []);

  return (
    <div id="team" className="py-10 bg-gray-900 px-2 md:px-10">
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-10 text-white">
        Meet Our Team
      </h1>

      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={1}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        loop={true}
        autoplay={{ delay: 2500, disableOnInteraction: false }}
        coverflowEffect={{
          rotate: 45,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: false,
        }}
        pagination={{ clickable: true }}
        navigation={true}
        mousewheel={{ forceToAxis: true }}
        modules={[EffectCoverflow, Pagination, Navigation, Autoplay, Mousewheel]}
      >
        {allStaff.map((member, index) => (
          <SwiperSlide key={index} className="p-4">
            <div className="bg-gray-800 rounded-xl shadow-lg p-6 text-center transition-transform duration-300 hover:shadow-xl hover:scale-105">
              <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden border-4 border-blue-400 shadow-md">
                <img
                  src={member.image}
                  alt={`${member.name} - ${member.role}`}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <h2 className="text-xl font-semibold text-white">{member.name}</h2>
              <p className="text-gray-300">{member.role}</p>
              <p className="text-sm text-gray-400 mt-3 px-4 py-2 bg-gray-700 rounded-md">
                {member.quotes || "Empowering success through innovation."}
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default StaffSwiper;
