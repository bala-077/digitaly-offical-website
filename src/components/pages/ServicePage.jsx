import { useState, useEffect, useContext, useRef } from 'react';
import { NavTitle } from '../context/NavTitle';
import { ServiceContext } from '../context/ServiceContent';
import { RiArrowDownDoubleFill } from 'react-icons/ri';
import FooterSection from '../divisions/FooterSection';
import { useLocation, useNavigate } from 'react-router-dom';
import { aos}

const ServicePage = () => {
  const { navTitle } = useContext(NavTitle); // Access navTitle context
  const titles = navTitle.Service?.subTitle || []; // Access subtitle from "Service"
  const { serviceData } = useContext(ServiceContext); // serviceData should be the full data array
  const location = useLocation();
  const indexes = location.state || 0; // Set the default value of 0 in case no state is provided from navigation
  
  const [loading, setLoading] = useState(true);
  const [activeIndex, setActiveIndex] = useState(indexes); // Initialize activeIndex with the index passed through state
  const sectionRefs = useRef([]); // To store the references to each section
  const titleListRef = useRef(null); // Ref for the title list
  const navigate = useNavigate();

  const [canScrollDown, setCanScrollDown] = useState(true); // Whether the user can scroll down
  const [isTitleVisible, setIsTitleVisible] = useState(true); // State to manage visibility of the title list

  useEffect(() => {
    setActiveIndex(indexes);
    handleTitleClick(indexes);
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'instant' });
      setLoading(false);
    }, 0);
  }, []);

  // Function to handle title clicks and scroll smoothly to the selected section
  const handleTitleClick = (index) => {
    setActiveIndex(index);
    sectionRefs.current[index]?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  };

  // Function to handle the scroll event and dynamically update the active section
  const handleScroll = () => {
    let newActiveIndex = activeIndex;

    // Check each section's position relative to the viewport
    sectionRefs.current.forEach((section, index) => {
      const { top, bottom } = section.getBoundingClientRect();
      if (top <= window.innerHeight / 2 && bottom >= window.innerHeight / 2) {
        newActiveIndex = index;
      }
    });

    // If the active section changes, update the state
    if (newActiveIndex !== activeIndex) {
      setActiveIndex(newActiveIndex);
    }

    // Check if we can scroll further down
    const isAtBottom = titleListRef.current.scrollHeight === titleListRef.current.scrollTop + titleListRef.current.clientHeight;
    setCanScrollDown(!isAtBottom); // If we're at the bottom, we can't scroll down
  };

  // Bind the scroll event to update the active title
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [activeIndex]);

  // Function to handle the scrolling of the title list when the down arrow is clicked
  const handleArrowClick = () => {
    titleListRef.current.scrollBy({
      top: 100,  // Scroll vertically by 'scrollAmount' pixels
      behavior: 'smooth', // Smooth scrolling
    });
  };

  return (
    <>
      <section className="px-2 py-12 bg-slate-800 md:px-6">
        <div className="text-center mt-10">
          <h1 className="text-4xl text-white font-bold mb-8">Our Services</h1>
        </div>
        <div className="flex flex-col md:flex-row gap-2">
          {/* Title List */}
          <div className="hidden md:block sticky h-full rounded-sm top-0 w-full md:w-3/12 bg-slate-900 p-2 md:sticky md:top-1">
            {/* Conditionally render title list */}
            {isTitleVisible && (
              <ul
                className="space-y-4 overflow-y-auto max-h-[600px]"
                ref={titleListRef} // Ref for the title list
              >
                {loading ? (
                  // Skeleton for titles
                  Array.from({ length: titles.length }).map((_, index) => (
                    <li key={index} className="h-6 bg-slate-600 rounded-md animate-pulse"></li>
                  ))
                ) : (
                  titles.map((item, index) => (
                    <li
                      key={index}
                      className={`text-white hover:text-slate-400 cursor-pointer p-2 rounded-md ${activeIndex === index ? 'bg-[#F57D20]' : ''}`}
                      onClick={() => handleTitleClick(index)} // Clicking a title scrolls to that section
                    >
                      {item}
                    </li>
                  ))
                )}

                {/* Scroll Arrow */}
                {canScrollDown && (
                  <div className="absolute bottom-0 right-1 mb-4" style={{ animation: 'bounce 2s infinite' }}>
                    <span
                      className="text-white text-4xl cursor-pointer"
                      onClick={handleArrowClick} // Scroll down on click
                    >
                      <RiArrowDownDoubleFill />
                    </span>
                  </div>
                )}
              </ul>
            )}
          </div>

          {/* Content Section */}
          <div className="w-full md:w-10/12 space-y-3 md:pr-10">
            {loading ? (
              // Skeleton for service cards
              Array.from({ length: serviceData.length }).map((_, index) => (
                <div key={index} className="bg-slate-900 p-6 rounded-lg shadow-lg space-y-4 animate-pulse">
                  <div className="h-6 bg-slate-600 rounded-md mb-4"></div>
                  <div className="w-40 h-40 bg-slate-600 rounded-md mb-4"></div>
                  <div className="h-4 bg-slate-600 rounded-md mb-4"></div>
                  <div className="h-4 bg-slate-600 rounded-md mb-4"></div>
                </div>
              ))
            ) : (
              serviceData.map((item, index) => (
                <div
                  key={index}
                  className='bg-slate-900 p-6 rounded-lg shadow-lg space-y-4'
                  ref={(el) => (sectionRefs.current[index] = el)} // Store the section ref
                  data-index={index} // Store the index on each section
                >
                  {/* Dynamically updating the title */}
                  <h2 className="text-2xl font-bold text-white">
                    {titles[index] || titles[activeIndex]} {/* Display the title of the active service */}
                  </h2>
                  <img
                    src={item.image}
                    alt={`${item.content} relevant image`}
                    className="w-[200px] md:w-[200px] h-[200px] object-contain rounded-md mb-4 mx-auto"
                  />
                  <p className="text-white text-lg mb-4">{item.content}</p>
                  <button className="bg-[#F57D20] p-2 rounded text-white font-bold cursor-pointer" onClick={() => navigate('/service-contact')}>
                    Click to customize
                  </button>
                </div>
              ))
            )}
          </div>
        </div>
      </section>
      <FooterSection />
    </>
  );
};

export default ServicePage;
