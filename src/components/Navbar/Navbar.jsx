import { Menu, X } from "lucide-react";
import { useState } from "react";
import { navItems } from "../../function/data";
import logo from "../../assets/logo.jpeg";

const Navbar = () => {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);
  const toggleNavbar = () => {
    setMobileDrawerOpen(!mobileDrawerOpen);
  };

  return (
    <nav className="sticky top-0 z-50 py-3 backdrop-blur-lg border-b border-neutral-700/80">
      <div className="container px-4 mx-auto relative text-sm">
        <div className="flex justify-between items-center">
          {/* Logo and Netlify Badge */}
          <div className="flex items-center flex-shrink-0">
            <img
              src={logo}
              alt="Logo"
              width={160}
              style={{ borderRadius: "15px 5px 15px 5px" }}
            />
            <div style={{ display: "none" }}>
              <a
                href="https://app.netlify.com/sites/spacze7/deploys"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="https://api.netlify.com/api/v1/badges/e44b0413-7d75-47ce-8fce-009b983ff6cd/deploy-status"
                  alt="Netlify Status"
                />
              </a>
            </div>
          </div>

          {/* Desktop Navigation Items */}
          <ul className="hidden lg:flex ml-14 space-x-12">
            {navItems.map((item, index) => (
              <li key={index}>
                <a href="#" className="hover:text-indigo-600">
                  {item.name}
                </a>
              </li>
            ))}
          </ul>

          {/* Contact Button */}
          <div className="hidden lg:flex justify-center space-x-12 items-center">
            <a
              href="#"
              className="bg-gradient-to-r from-blue-500 to-purple-800 py-2 px-3 rounded-md"
            >
              Contact Me
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="lg:hidden md:flex flex-col justify-end">
            <button onClick={toggleNavbar}>
              {mobileDrawerOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileDrawerOpen && (
          <div className="fixed right-0 z-20 bg-neutral-900 w-full p-12 flex flex-col justify-center items-center lg:hidden">
            <ul>
              {navItems.map((item, index) => (
                <li key={index} className="py-4">
                  <a href="#" className="hover:text-indigo-600">
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
            <div className="flex space-x-6">
              <a
                href="#"
                className="py-2 px-3 rounded-md bg-gradient-to-r from-purple-500 to-blue-800"
              >
                Contact Us
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
