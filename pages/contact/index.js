import React, { useState, useEffect } from "react";
import { BsArrowRight } from "react-icons/bs";
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ThreeDots } from "react-loader-spinner";
import { HiPhone, HiEnvelope } from "react-icons/hi2";
import { FaGithub, FaLinkedin, FaWhatsapp, FaBehance } from "react-icons/fa";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const socialLinks = [
    {
      icon: <HiPhone className="text-2xl" />,
      href: "tel:9140585097",
      text: "(+91) 9140585097",
    },
    {
      icon: <HiEnvelope className="text-2xl" />,
      href: "mailto:ashishsharmastudio@gmail.com",
      text: "ashishsharmastudio@gmail.com",
    },
    {
      icon: <FaGithub className="text-2xl" />,
      href: "https://github.com/ashishsharmastudio",
      text: "Github",
    },
    {
      icon: <FaLinkedin className="text-2xl" />,
      href: "https://linkedin.com/in/ashish-sharma-rrr",
      text: "LinkedIn",
    },
    {
      icon: <FaWhatsapp className="text-2xl" />,
      href: "https://wa.me/919140585097",
      text: "WhatsApp",
    },
    {
      icon: <FaBehance className="text-2xl" />,
      href: "/",
      text: "Behance",
    },
  ];

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await axios.post(
        "https://nodemailer-app-n32c.onrender.com/sendEmail",
        {
          name,
          email,
          subject,
          message,
        }
      );

      if (response.status === 200) {
        toast.success("Your message has been sent successfully!");
        setName("");
        setEmail("");
        setSubject("");
        setMessage("");
      } else {
        toast.error("There was an issue sending your message.");
      }
    } catch (error) {
      console.error(error);
      toast.error("There was an error sending your message. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen bg-primary/30 w-full overflow-x-hidden">
      <div className="container mx-auto px-4 py-24 lg:py-32">
        <div className="flex flex-col lg:flex-row gap-8 max-w-[1400px] mx-auto">
          {/* Contact Info Section */}
          <motion.div
            variants={fadeIn("left", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="w-full lg:w-1/2 flex flex-col gap-6 bg-primary/30 p-6 lg:p-8 rounded-lg"
          >
            <h3 className="h2 text-center text-3xl lg:text-4xl">
              Contact <span className="text-accent">Information</span>
            </h3>

            <div className="flex flex-col gap-6">
              <div className="grid grid-cols-1 xs:grid-cols-2 gap-4">
                {socialLinks.map((link, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-4 hover:text-accent transition-colors"
                  >
                    {link.icon}
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm lg:text-base break-all"
                    >
                      {link.text}
                    </a>
                  </div>
                ))}
              </div>

              <div className="flex justify-center w-full">
                <button
                  className="flex items-center gap-4 btn rounded-full border border-white/50 max-w-[170px] px-8 transition-all duration-300 justify-center overflow-hidden hover:border-accent group"
                  onClick={() =>
                    window.open(
                      "https://drive.google.com/file/d/1FEMCT7u9NAP0xVgNdaKw_VP57oNzLm-j/view?usp=sharing",
                      "_blank"
                    )
                  }
                >
                  <span className="group-hover:-translate-y-[120%] group-hover:opacity-0 transition-all duration-500">
                    Download CV
                  </span>
                  <BsArrowRight className="-translate-y-[120%] opacity-0 group-hover:flex group-hover:-translate-y-0 group-hover:opacity-100 transition-all duration-300 absolute text-[22px]" />
                </button>
              </div>
            </div>
          </motion.div>

          {/* Form Section */}
          <div className="w-full lg:w-1/2 flex flex-col">
            <motion.h2
              variants={fadeIn("up", 0.2)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="h2 text-center mb-8"
            >
              Let&apos;s <span className="text-accent">connect.</span>
            </motion.h2>

            <motion.form
              onSubmit={handleSubmit}
              variants={fadeIn("down", 0.4)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="flex flex-col gap-4 w-full"
            >
              <div className="flex flex-col sm:flex-row gap-4">
                <input
                  type="text"
                  placeholder="Name"
                  className="input flex-1"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="input flex-1"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <input
                type="text"
                placeholder="Subject"
                className="input"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                required
              />
              <textarea
                placeholder="Message"
                className="textarea min-h-[180px]"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
              ></textarea>

              <button
                type="submit"
                className="btn rounded-full border border-white/50 max-w-[170px] px-8 transition-all duration-300 flex items-center justify-center overflow-hidden hover:border-accent group"
                disabled={loading}
              >
                <span className="group-hover:-translate-y-[120%] group-hover:opacity-0 transition-all duration-500">
                  Let&apos;s talk
                </span>
                <BsArrowRight className="-translate-y-[120%] opacity-0 group-hover:flex group-hover:-translate-y-0 group-hover:opacity-100 transition-all duration-300 absolute text-[22px]" />
              </button>
            </motion.form>

            {loading && (
              <div className="flex justify-center mt-4">
                <ThreeDots color="#00BFFF" height={50} width={50} />
              </div>
            )}
          </div>
        </div>
      </div>
      <ToastContainer position="top-right" autoClose={5000} />
    </div>
  );
};

export default Contact;
