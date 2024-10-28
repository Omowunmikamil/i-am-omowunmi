import { useEffect, useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { Link, NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import logo from "../assets/O-logo-w.png";

function NavBar() {
  const [nav, setNav] = useState(false);
  const [scrollEffect, setScrollEffect] = useState(false);

  useEffect(() => {
    const handelScroll = () => {
      if (window.scrollY > 50) {
        setScrollEffect(true);
      } else {
        setScrollEffect(false);
      }
    };
    window.addEventListener("scroll", handelScroll);

    return () => {
      window.removeEventListener("scroll", handelScroll);
    };
  }, []);

  const toggleNav = () => {
    setNav(!nav);
  };

  const closeNav = () => {
    setNav(false);
  };

  const menuVariants = {
    open: {
      x: 0,
      transition: {
        stiffness: 20,
        damping: 15,
      },
    },
    closed: {
      x: "-100%",
      transition: {
        stiffness: 20,
        damping: 15,
      },
    },
  };

  return (
    <div
      className={`fixed top-0 w-full z-50 ${
        scrollEffect ? "bg-opacity-70 backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <div className="max-w-[1300px] mx-auto flex justify-between items-center text-gray-200 text-xl pl-3 pr-4 md:px-0 h-20">
        <Link to="/">
          <img src={logo} className="w-20" alt="logo" />
        </Link>

        <ul className="hidden md:flex z-10 gap-12 cursor-pointer">
          <motion.li
            initial={{ y: 80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            exit={{
              opacity: 0,
              y: 90,
              transition: {
                ease: "easeInOut",
                delay: 1,
              },
            }}
          >
            <NavLink
              to="/"
              className="text-base hover:text-green"
              smooth={true}
            >
              <p>Home</p>
              <hr className="w-2/4 h-[3px] border-none bg-green hidden" />
            </NavLink>
          </motion.li>

          <motion.li
            initial={{ y: 80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            exit={{
              opacity: 0,
              y: 90,
              transition: {
                ease: "easeInOut",
                delay: 1,
              },
            }}
          >
            <NavLink
              to="/about"
              className="text-base hover:text-green"
              smooth={true}
            >
              <p>About</p>
              <hr className="w-2/4 h-[3px] border-none bg-green hidden" />
            </NavLink>
          </motion.li>

          <motion.li
            initial={{ y: 80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5 }}
            exit={{
              opacity: 0,
              y: 90,
              transition: {
                ease: "easeInOut",
                delay: 1,
              },
            }}
          >
            <NavLink
              to="portfolio"
              className="text-base hover:text-green"
              smooth={true}
            >
              <p>Portfolio</p>
              <hr className="w-2/4 h-[3px] border-none bg-green hidden" />
            </NavLink>
          </motion.li>

          <motion.li
            initial={{ y: 80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6 }}
            exit={{
              opacity: 0,
              y: 90,
              transition: {
                ease: "easeInOut",
                delay: 1,
              },
            }}
          >
            <NavLink
              to="contact"
              className="text-base hover:text-green"
              smooth={true}
            >
              <p>Contact</p>
              <hr className="w-2/4 h-[3px] border-none bg-green hidden" />
            </NavLink>
          </motion.li>
        </ul>

        <div className="md:hidden z-50 text-gray-200" onClick={toggleNav}>
          {nav ? <AiOutlineClose size={35} /> : <AiOutlineMenu size={35} />}
        </div>

        <motion.div
          variants={menuVariants}
          initial={false}
          animate={nav ? "open" : "closed"}
          className="fixed left-0 top-0 w-full min-h-screen bg-black z-40 bg-opacity-50 backdrop-blur-md"
        >
          <ul className="text-xl font-semibold space-y-5 mt-20 text-center ">
            <li>
              <NavLink
                to="/"
                onClick={closeNav}
                smooth={true}
                duration={500}
                offset={50}
                className="text-base hover:text-green"
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                onClick={closeNav}
                smooth={true}
                duration={500}
                offset={50}
                className="text-base hover:text-green"
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/portfolio"
                onClick={closeNav}
                smooth={true}
                duration={500}
                offset={50}
                className="text-base hover:text-green"
              >
                Portfolio
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                onClick={closeNav}
                smooth={true}
                duration={500}
                offset={50}
                className="text-base hover:text-green"
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </motion.div>
      </div>
    </div>
  );
}

export default NavBar;
