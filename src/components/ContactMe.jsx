import { useState } from "react";
import { motion } from "framer-motion";
import { AiFillMail } from "react-icons/ai";
import { BsFillTelephoneFill } from "react-icons/bs";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
//import { format, parseISO } from "date-fns";

const ContactMe = () => {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);

    //const formatDate = (dateString) => {
    //  const date = parseISO(dateString); // Parse the ISO date string from Getform
    //  return format(date, "yyyy-MM-dd HH:mm:ss OOOO"); // Adjust the format as needed
    //};

    //const updatedFormData = {
    //   ...formData,
    //  submittedAt: formatDate, // Add the formatted date
    //};

    try {
      const response = await fetch("https://getform.io/f/bpjjmoxb", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        // Clear the form fields
        setFormData({
          name: "",
          email: "",
          message: "",
        });
        toast.success("Form submitted successfully!", {
          position: "top-center",
        });

        setLoading(false);
      } else {
        toast.error("Form submitted failed!", {
          position: "top-center",
        });
      }
    } catch (error) {
      toast.error(error.message, {
        position: "top-center",
      });
      setLoading(false);
    }
  };

  return (
    <div className="max-w-[1200px] mx-auto p-6 my-16 md:my-20">
      <div>
        <h3 className="mb-4 font-bold text-3xl text-gray-200 tracking-tight">
          Get in Touch
        </h3>
        <hr className="w-1/4 md:w-1/12 h-[3px] border-none bg-green mt-2" />
      </div>
      <div className="flex flex-col lg:flex-row items-center my-12 lg:my-8">
        <div className="lg:basis-1/3 lg:mr-10 lg:px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="max-w-[300px] md:max-w-[400px]"
          >
            <p className="text-xl text-gray-200 font-medium">
              Let&apos;s start a journey together
            </p>
            <p className="my-2">
              <a
                href="mailto:balikiskamil@gmail.com"
                className="text-gray-300 hover:text-green"
              >
                <AiFillMail className="text-green inline mr-3" />
                balikiskamil@gmail.com
              </a>
            </p>
            <p className="my-2">
              <a
                href="tel:+2348138777481"
                className="text-gray-300 hover:text-green"
              >
                <BsFillTelephoneFill className="text-green inline mr-3" />
                +2348138777481
              </a>
            </p>
          </motion.div>
        </div>

        <form
          onSubmit={handleSubmit}
          className="flex flex-col lg:basis-2/3 mt-8 "
        >
          <input
            type="text"
            name="name"
            placeholder="Enter your name..."
            value={formData.name}
            onChange={handleInputChange}
            className="w-full text-gray-200 bg-gray-800 border border-green border-opacity-80 rounded-md outline-none mb-4 py-2 pl-2 pr-4"
            required
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            placeholder="Enter your email..."
            className="w-full text-gray-200 bg-gray-800 border border-green border-opacity-80 rounded-md outline-none mb-4 py-2 pl-2 pr-4"
            required
          />
          <textarea
            name="message"
            cols="30"
            rows="5"
            placeholder="Write me a message..."
            value={formData.message}
            onChange={handleInputChange}
            className="w-full text-gray-200 bg-gray-800 border border-green border-opacity-80 rounded-md outline-none mb-4 py-2 pl-2 pr-4"
            required
          />
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
            type="submit"
            className="w-full md:w-1/2 text-green text-lg font-bold py-2 px-4 border border-green border-opacity-80 rounded-md hover:bg-green hover:text-white"
          >
            {loading ? (
              <div className="flex items-center">
                <svg
                  className="animate-spin h-5 w-5 mr-3 text-p-button3"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                  ></path>
                </svg>
                Loading...
              </div>
            ) : (
              "Send Message"
            )}
          </motion.button>
          <ToastContainer />
        </form>
      </div>
    </div>
  );
};

export default ContactMe;
