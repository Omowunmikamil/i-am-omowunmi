import {
  AiOutlineGithub,
  AiOutlineLinkedin,
  AiOutlineX,
  AiOutlineWhatsApp,
} from "react-icons/ai";
import { ImLocation2 } from "react-icons/im";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <div className=" flex flex-col md:flex-row justify-center md:justify-between items-center border-t border-green border-opacity-20 py-4 px-10 md:px-36 mt-12 shadow-[0_10px_0_5px_rgba(19, 202, 144,0.3)]">
      <motion.div
        initial="initial"
        animate="animate"
        style={{ display: "flex", gap: 8 }}
      >
        <motion.a
          href="https://github.com/Omowunmikamil"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{
            scale: 1.2,
            rotate: 180,
            borderRadius: "100%",
            cursor: "pointer",
            transition: { duration: 0.3 },
          }}
        >
          <AiOutlineGithub
            size={28}
            className="text-gray-400 hover:text-green "
          />
        </motion.a>
        <motion.a
          href="https://www.linkedin.com/in/omowunmi-kamiludeen/"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{
            scale: 1.2,
            rotate: 180,
            borderRadius: "100%",
            cursor: "pointer",
            transition: { duration: 0.3 },
          }}
        >
          <AiOutlineLinkedin
            size={28}
            className="text-gray-400 hover:text-green "
          />
        </motion.a>
        <motion.a
          href="https://wa.me/+2348138777481"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{
            scale: 1.2,
            rotate: 180,
            borderRadius: "100%",
            cursor: "pointer",
            transition: { duration: 0.3 },
          }}
        >
          <AiOutlineWhatsApp
            size={28}
            className="text-gray-400 hover:text-green "
          />
        </motion.a>
        <motion.a
          href="https://x.com/Browser_Nerd"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{
            scale: 1.2,
            rotate: 180,
            borderRadius: "100%",
            cursor: "pointer",
            transition: { duration: 0.3 },
          }}
        >
          <AiOutlineX size={28} className="text-gray-400 hover:text-green " />
        </motion.a>
        <motion.a
          href="#"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{
            scale: 1.2,
            rotate: 180,
            borderRadius: "100%",
            cursor: "pointer",
            transition: { duration: 0.3 },
          }}
        >
          <ImLocation2 size={28} className="text-gray-400 hover:text-green " />
        </motion.a>
      </motion.div>
      <div className="">
        <p className="text-sm text-gray-300 mt-2 md:mt-0 text-center">
          &copy; Copyright 2024. Designed by
          <span className="text-green"> OMOWUNMI KAMILUDEEN</span>
        </p>
      </div>
    </div>
  );
};

export default Footer;
