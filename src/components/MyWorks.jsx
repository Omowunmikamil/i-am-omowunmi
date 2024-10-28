import { projects } from "../assets/project";
import { AiOutlineGithub } from "react-icons/ai";
import { motion } from "framer-motion";

const MyWorks = () => {
  return (
    <div className="max-w-[1200px] mx-auto p-6 my-20">
      <div>
        <h2 className="text-3xl text-gray-200 font-bold mb-2">My Projects</h2>
        <hr className="w-1/4 md:w-1/12 h-[3px] border-none bg-green mb-8" />
      </div>

      {projects.map((project, index) => (
        <div
          key={index}
          className={`flex flex-col md:flex-row ${
            index % 2 !== 0 ? "md:flex-row-reverse" : ""
          } mb-12`}
        >
          <div className="w-full md:w-1/2 p-4">
            <img
              src={project.img}
              alt={project.title}
              className="w-full h-full object-cover rounded-lg shadow-lg"
            />
          </div>

          <div className="w-full md:w-1/2 flex flex-col justify-center p-4">
            <h3 className="text-gray-200 text-2xl font-semibold mb-4">
              {project.title}
            </h3>
            <p className="text-gray-400 mb-4">{project.description}</p>
            <div className="flex space-x-4 items-center">
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
                className="text-gray-200 py-2 px-4 bg-slate-600 rounded-lg hover:bg-hover"
              >
                <a href={project.links.site}>Visit site</a>
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
                className="text-gray-200 py-2 px-8 bg-slate-600 rounded-lg hover:bg-hover"
              >
                <a href={project.links.github}>
                  <AiOutlineGithub className="text-2xl" />
                </a>
              </motion.button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MyWorks;
