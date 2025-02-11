import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { Link } from 'react-router-dom';
import digitaly_logo from "../images/digitaly-light.png";

const FooterSection = () => {
  const socialLinks = [
    { href: "https://www.facebook.com/profile.php?id=61572642070238", icon: <FaFacebookF size={24} />, hoverColor: "hover:bg-blue-600" },
    { href: "https://www.instagram.com/digitaly.live/", icon: <FaInstagram size={24} />, hoverColor: "hover:bg-pink-500" },
    { href: "https://linkedin.com", icon: <FaLinkedinIn size={24} />, hoverColor: "hover:bg-blue-700" },
  ];

  const quickLinks = [
    { name: "Home", path: '/' },
    { name: "About", path: '/' },
    { name: "Services", path: '/services' },
    { name: "Contact", path: '/contact-form' }
  ];

  return (
    <footer className="bg-slate-900 text-white py-12">
      <div className="max-w-screen-xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-6 text-center md:text-left">
        {/* Logo and About Section */}
        <div className="flex flex-col items-center md:items-start">
          <h2 className="text-2xl font-bold bg-gradient-to-r from-[#056839] to-[#f64a00] text-transparent bg-clip-text mb-5">
            Digitaly
          </h2>
          <img src={digitaly_logo} alt="Digitaly-Logo" className="h-40 w-40 mb-5" />
          <p className="text-gray-300 text-sm mb-6">
            We create innovative digital solutions that help businesses grow and thrive.
          </p>
        </div>

        {/* Quick Links */}
        <div className="flex flex-col items-center md:items-start">
          <h3 className="text-xl font-semibold text-white mb-4">Quick Links</h3>
          <ul className="space-y-2 text-gray-300 text-sm">
            {quickLinks.map((link, index) => (
              <li key={index}>
                <Link to={link.path} className="hover:text-green-500 transition duration-300 transform hover:scale-105">
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Social Media Links */}
        <div className="flex flex-col items-center md:items-start">
          <h3 className="text-xl font-semibold text-white mb-4">Follow Us</h3>
          <div className="flex space-x-4">
            {socialLinks.map(({ href, icon, hoverColor }) => (
              <a
                key={href}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className={`text-gray-300 ${hoverColor} transition duration-300 transform hover:scale-110 p-2 rounded-full`}
              >
                {icon}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="border-t border-gray-700 mt-8 pt-4 text-center text-sm text-gray-400">
        <p>&copy; 2025 Digitaly. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default FooterSection;
