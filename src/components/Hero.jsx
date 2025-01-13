import profpic from "../assets/profpic.png";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import omowunmi from "../assets/omowunmi.pdf";

const Hero = () => {
  return (
    <div className="mt-20 lg:mt-16 mx-auto py-6 max-w-[1300px] relative">
      <div className="grid lg:grid-cols-2 gap-8  place-items-center">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <TypeAnimation
            sequence={[
              "Frontend Developer",
              1000,
              "Product Designer",
              1000,
              "Graphic Designer",
              1000,
            ]}
            speed={50}
            repeat={Infinity}
            className="font-bold text-gray-400 text-xl md:text-4xl italic my-4"
          />
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.5 }}
            className="text-gray-200 text-xl md:text-4xl font-semibold tracking-tight mb-4"
          >
            HELLO, I AM <br />
            <span className="text-green">OMOWUNMI KAMILUDEEN</span>
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 1 }}
            className="text-gray-400 text-base md:text-lg max-w-[350px] md:max-w-[570px] tracking-tight mb-6"
          >
            I craft captivating user experiences that grab attention and drive
            engagement. With a keen eye for design and an insatiable curiosity,
            I&apos;m passionate about shaping the digital future. My goal is to
            create intuitive, memorable interactions, with every pixel placed
            with purpose.
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
              className="cursor-pointer font-bold text-gray-200 text-sm md:text-base md:w-auto py-2 px-6 md:px-8 ml-2 md:ml-4 border border-green border-opacity-40 rounded-xl"
            >
              <Link to="/portfolio">Portfolio</Link>
            </motion.button>
          </motion.div>
        </motion.div>

        <motion.img
          src={profpic}
          className="max-w-[300px] md:max-w-[500px] mt-4 lg-mt-0"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        />
      </div>
    </div>
  );
};

export default Hero;
