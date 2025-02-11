import { useState, useEffect, useContext, useRef } from "react";
import { NavTitle } from "../context/NavTitle";
import { RiArrowDownDoubleFill } from "react-icons/ri";
import FooterSection from "../divisions/FooterSection";
import { productContext } from "../context/ProductContext";
import { useLocation, useNavigate } from "react-router-dom";

const ProductPage = () => {
  const navigate = useNavigate();
  const { navTitle } = useContext(NavTitle);  // Fetch navTitle from context
  const titles = navTitle.Product?.subTitle || [];  // Get subtitles for the "Service" section
  const { productData } = useContext(productContext);  // Get service data
  const indexData = useLocation();
  const indexes = indexData.state || 0;

  const [loading, setLoading] = useState(true);  // Simulate loading
  const [activeIndex, setActiveIndex] = useState(indexes);  // Default active index
  const sectionRefs = useRef([]);  // Store references to sections
  const titleListRef = useRef(null);  // Reference to title list for scrolling

  const [canScrollDown, setCanScrollDown] = useState(true);  // Control scrolling behavior
  const [isTitleVisible, setIsTitleVisible] = useState(true);  // Toggle title list visibility

  // Simulate data loading
  useEffect(() => {
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: "instant" }); 
      setLoading(false);
    }, 0);
  }, []);

  // Scroll event to dynamically update active section
  const handleScroll = () => {
    let newActiveIndex = activeIndex;

    sectionRefs.current.forEach((section, index) => {
      const { top, bottom } = section.getBoundingClientRect();
      if (top <= window.innerHeight / 2 && bottom >= window.innerHeight / 2) {
        newActiveIndex = index;
      }
    });

    if (newActiveIndex !== activeIndex) {
      setActiveIndex(newActiveIndex);
    }

    // Check if we can scroll further down
    const isAtBottom =
      titleListRef.current.scrollHeight === titleListRef.current.scrollTop + titleListRef.current.clientHeight;
    setCanScrollDown(!isAtBottom);
  };

  // Bind scroll event
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [activeIndex]);

  // Scroll the title list down on click
  const handleArrowClick = () => {
    titleListRef.current.scrollBy({
      top: 100,
      behavior: "smooth",
    });
  };

  // Handle click to scroll to the specific section
  const handleTitleClick = (index) => {
    setActiveIndex(index);
    sectionRefs.current[index].scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <>
    <section className="px-2 py-12 bg-slate-800 md:px-6">
      <div className="text-center mt-10">
        <h1 className="text-4xl text-white font-bold mb-8">Products</h1>
      </div>

      <div className="flex flex-col md:flex-row gap-2">
        {/* Title List */}
        <div className="hidden md:block sticky h-fit rounded-sm top-0 w-full md:w-3/12 bg-slate-900 p-2  md:top-1">
          {isTitleVisible && (
            <ul
              className="space-y-4 overflow-y-auto max-h-[600px]"
              ref={titleListRef}
            >
              {loading ? (
                Array.from({ length: titles.length }).map((_, index) => (
                  <li key={index} className="h-6 bg-slate-600 rounded-md animate-pulse"></li>
                ))
              ) : (
                titles.map((item, index) => (
                  <li
                    key={index}
                    className={`text-white hover:text-slate-400 cursor-pointer p-2 rounded-md ${activeIndex === index ? 'bg-[#F57D20]' : ''}`}
                    onClick={() => handleTitleClick(index)}
                  >
                    {item}
                  </li>
                ))
              )}

              {canScrollDown && (
                <div className="absolute bottom-0 right-1 mb-4">
                  <span
                    className="text-white text-4xl cursor-pointer"
                    onClick={handleArrowClick}
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
            Array.from({ length: productData.length }).map((_, index) => (
              <div key={index} className="bg-slate-900 p-6 rounded-lg shadow-lg space-y-4 animate-pulse">
                <div className="h-6 bg-slate-600 rounded-md mb-4"></div>
                <div className="w-40 h-40 bg-slate-600 rounded-md mb-4"></div>
                <div className="h-4 bg-slate-600 rounded-md mb-4"></div>
                <div className="h-4 bg-slate-600 rounded-md mb-4"></div>
              </div>
            ))
          ) : (
            productData.map((item, index) => (
              <div
                key={index}
                className="bg-slate-900 p-6 rounded-lg shadow-lg space-y-4"
                ref={(el) => (sectionRefs.current[index] = el)} // Store the section ref
              >
                <h2 className="text-2xl font-bold text-white">
                  {titles[index]}
                </h2>
                <img
                  src={item.image}
                  alt={`${item.content} relevant image`}
                  className="w-[200px] md:w-[200px] h-[200px] object-contain rounded-md mb-4 mx-auto"
                />
                <p className="text-white text-lg mb-4">{item.content}</p>
                <button className="bg-[#F57D20] p-2 rounded text-white font-bold cursor-pointer" onClick={() => navigate('/contact-form')}>
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

export default ProductPage;
