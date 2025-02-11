import { LuMenu } from "react-icons/lu";
import { FaChevronDown } from "react-icons/fa";
import { useContext, useState, useEffect } from "react";
import logo_light from "../images/digitaly-light.png";
import SideNavbar from "./SideNavbar";
import { NavTitle } from "../context/NavTitle";
import { FaArrowRight } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const { navTitle } = useContext(NavTitle); // Fetch the navigation title data
  const [isopen, setIsopen] = useState(false); // Mobile menu state
  const [hoveredItem, setHoveredItem] = useState(null); // For hover effect
  const [scrollingUp, setScrollingUp] = useState(true); // Navbar scroll visibility
  const [lastScrollY, setLastScrollY] = useState(0); // To track scroll position
  const naviagate = useNavigate();


  // Scroll event listener to hide/show the navbar
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        setScrollingUp(false); // Scroll down - hide navbar
      } else {
        setScrollingUp(true); // Scroll up - show navbar
      }
      setLastScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  const handleNavigate = (path, index) => {
    naviagate(path, {state: index})
  }

  const handleNav = (path) => {
    if (path === "Services") {
      naviagate("/service-contact");
    } else if (path === "Industries") {
      naviagate("/contact-form");
    }
  };

  // Toggle the mobile menu visibility
  const handleClick = () => {
    setIsopen(!isopen);
  };

  return (
    <nav
      className={`bg-transparent backdrop-blur-2xl w-full py-2 fixed top-0 z-40 transition-transform duration-300 ${
        scrollingUp ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="relative flex justify-between items-center px-5 md:px-10 max-w-[1440px] mx-auto">
        {/* Logo */}
        <img
          src={logo_light}
          alt="digitaly-logo"
          className="w-14 h-14 md:w-16 md:h-16"
        />

        {/* Navigation Items */}
        <ul className="hidden md:flex gap-5 text-white font-medium max-w-full">
          {Object.keys(navTitle).map((item, index) => {
            const { title, path, subTitle } = navTitle[item];

            return (
              <div
                key={index}
                className=""
                onMouseEnter={() => setHoveredItem(index)}
                onMouseLeave={() => setHoveredItem(null)}
              >
                <li
                  className={`transition duration-300 flex items-center py-6 gap-1 border-b-2 ${
                    hoveredItem === index
                      ? "border-[#FF6900]"
                      : "border-transparent"
                  } hover:text-[#FF6900] cursor-pointer`}
                  tabIndex={0}
                  onKeyDown={(e) => e.key === "Enter" && setHoveredItem(index)}
                  aria-expanded={hoveredItem === index}
                  onClick={() => naviagate(path)}
                >
                  <a
                    href={`#${title.toLowerCase()}`} // Make sure to link to the correct section ID
                    className="flex items-center gap-1"
                    onClick={(e) => {
                      e.preventDefault();
                      const section = document.getElementById(title.toLowerCase());
                      if (section) {
                        section.scrollIntoView({
                          behavior: "smooth", // Smooth scroll
                          block: "start",
                        });
                      }
                    }}
                  >
                    {title}
                    {subTitle && subTitle.length > 0 && (
                      <FaChevronDown className="text-sm transition-transform duration-300" />
                    )}
                  </a>
                </li>

                {/* Dropdown for Subtitles */}
                {hoveredItem === index &&
                  subTitle &&
                  subTitle.length > 0 &&  (
                    <div
                      className="absolute left-0 top-full w-[100%] bg-black rounded-lg py-10 px-10 backdrop-blur-2xl shadow-lg transition-all duration-300 ease-in-out z-50"
                      onMouseEnter={() => setHoveredItem(index)}
                      onMouseLeave={() => setHoveredItem(null)}
                    >
                      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2">
                        {subTitle.map((subItem, subIndex) => (
                          <div
                            key={subIndex}
                            className="text-white p-2 hover:scale-105 rounded hover:text-[#FF6900] transition duration-300 cursor-pointer text-ellipsis break-words"
                            onClick={() => handleNavigate(path, subIndex)}
                          >
                            <a
                              href={`#${subItem
                                .toLowerCase()
                                .replace(/\s+/g, "-")}`} 
                              onClick={(e) => {
                                e.preventDefault();
                                const section = document.getElementById(
                                  subItem.toLowerCase().replace(/\s+/g, "-")
                                );
                                if (section) {
                                  section.scrollIntoView({
                                    behavior: "smooth",
                                    block: "start",
                                  });
                                }
                              }}
                            >
                              {subItem}
                            </a>
                          </div>
                        ))}
                      </div>

                      {/* Add the button for Services or Industries */}
                      {(title === "Services" || title === "Industries") && (
                        <button className="bg-[#FF6900] flex cursor-pointer gap-1 items-center text-white px-4 py-2 rounded-md mt-3" onClick={() => handleNav(title)}>
                          LET'S TALK{" "}
                          <FaArrowRight className="text-sm animate-slide-right" />
                        </button>
                      )}
                    </div>
                  )}
              </div>
            );
          })}
        </ul>

        {/* Mobile Menu Button */}
        <button
          aria-label="Open menu"
          className="text-white text-2xl md:hidden cursor-pointer"
          onClick={handleClick}
        >
          <LuMenu />
        </button>
      </div>

      {/* Side Navbar (for mobile) */}
      <SideNavbar
        navTitle={navTitle}
        isopen={isopen}
        handleClick={handleClick}
      />
    </nav>
  );
};

export default Navbar;
