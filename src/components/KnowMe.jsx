import profpic from "../assets/profpic0.png";
//import ShinyEffect from "./ShinyEffect";
import {
  DiCss3,
  DiHtml5,
  DiJavascript1,
  DiReact,
  DiNodejsSmall,
} from "react-icons/di";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiFirebase } from "react-icons/si";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import omowunmi from "../assets/Omowunmi.docx.pdf";

const KnowMe = () => {
  return (
    <div className="mt-20 lg:mt-16 mx-auto p-6 max-w-[1200px] relative">
      {/*<div className="absolute inset-0 hidden md:block">
        <ShinyEffect size={750} left={0} top={0} />
      </div>*/}

      <div className="grid lg:grid-cols-2 gap-8 place-items-center">
        <motion.img
          src={profpic}
          className="max-w-[300px] md:max-w-[470px]"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        />

        <motion.div
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className=" mt-4 lg:mt-0"
        >
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.4 }}
            className="mb-4 font-bold text-3xl text-gray-200 tracking-tight"
          >
            Know Me
            <hr className="w-1/4 md:w-2/12 h-[3px] border-none bg-green mt-2" />
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.5 }}
            className="text-green text-2xl lg:text-4xl font-normal italic tracking-tight mb-3"
          >
            Frontend Developer
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 1 }}
            className="text-gray-400 text-base md:text-lg max-w-[300px] md:max-w-[500px] tracking-tight mb-4"
          >
            I am a passionate front-end developer, skilled in HTML, CSS,
            JavaScript, React.js, and Tailwind CSS. I am a collaborative team
            player with a keen eye for detail, focused on creating user-friendly
            interfaces. I am committed to continuous learning and staying
            updated on industry trends to drive innovation in web development.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 1.5 }}
          >
            <motion.button
              whileHover={{
                scale: 1.05,
                boxShadow: "0px 0px 8px rgba(0, 0, 0, 0.3)",
              }}
              whileTap={{ scale: 0.9 }}
              transition={{
                type: "spring",
                stiffness: 400,
                damping: 10,
              }}
              className="cursor-pointer font-bold text-gray-200 text-sm md:text-base md:w-auto py-2 px-3.5 md:px-4 border border-green border-opacity-40 rounded-xl"
            >
              <a href={omowunmi} download="omowunmi">
                Download CV
              </a>
            </motion.button>

            <motion.button
              whileHover={{
                scale: 1.05,
                boxShadow: "0px 0px 8px rgba(0, 0, 0, 0.3)",
              }}
              whileTap={{ scale: 0.9 }}
              transition={{
                type: "spring",
                stiffness: 400,
                damping: 10,
              }}
              className="cursor-pointer font-bold text-gray-200 text-sm md:text-base md:w-auto py-2 px-6 md:px-8 ml-4 border border-green border-opacity-40 rounded-xl"
            >
              <Link to="/portfolio">Portfolio</Link>
            </motion.button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 2 }}
            className="flex flex-col text-4xl md:text-5xl  justify-between items-start w-full py-8 md:px-0"
          >
            <p className="text-gray-200 font-medium text-xl md:text-2xl text-left mb-2">
              My Tech Stack
            </p>
            <div className="flex">
              <DiHtml5 className="text-orange-500 mr-2px" />
              <DiCss3 className="text-blue-600 mx-2px" />
              <DiJavascript1 className="text-yellow-500 mx-2px" />
              <RiTailwindCssFill className="text-blue-500 mx-2px" />
              <DiNodejsSmall className="text-emerald-600" />
              <DiReact className="text-blue-500 mx-2px" />
              <SiFirebase className="text-orange-600 ml-2px" />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default KnowMe;
