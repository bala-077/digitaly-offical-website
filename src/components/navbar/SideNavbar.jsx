import { IoIosCloseCircleOutline } from "react-icons/io";
import { useNavigate } from "react-router-dom";

const SideNav = ({ navTitle = {}, isopen, handleClick }) => {
  const navigate = useNavigate();

  const handleCloseClick = () => {
    handleClick(); // This should close the sidebar
  };

  return (
    <div
      className={`${isopen ? 'left-0' : '-left-[1500px]'} fixed bg-black/95 backdrop-blur-3xl top-0 h-screen w-[100%] transition-all p-6 md:hidden`}
    >
      <div className="relative">
        {/* Close button */}
        <p
          className="absolute right-0 text-white -top-5 text-2xl cursor-pointer"
          onClick={handleCloseClick} // Close the sidebar when clicked
        >
          <IoIosCloseCircleOutline />
        </p>

        {/* Navigation Items */}
        <ul>
          {Object.keys(navTitle).map((item, index) => {
            const { title, path } = navTitle[item]; // We no longer need 'subTitle'

            return (
              <div key={index} className="mt-5">
                <li
                  className="text-lg text-white cursor-pointer"
                  onClick={() => {
                    navigate(path); // Navigate to the path
                    handleCloseClick(); // Close the sidebar after navigating
                  }}
                >
                  {title}
                </li>
              </div>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default SideNav;
