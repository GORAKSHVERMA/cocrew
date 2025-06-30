import React from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Mail, Phone, ArrowUpRight } from "lucide-react";

const Contact = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  };

  const staggerContainer = {
    initial: {},
    animate: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };
  return (
    <div className="min-h-screen bg-black text-white font-figtree overflow-x-hidden">
      {/* Navigation */}
      <motion.nav
        className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur-md border-b border-gray-800 px-10 py-3"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <motion.div
            className="flex items-center gap-2"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            <div className="w-10 h-10 relative">
              <svg
                width="53"
                height="39"
                viewBox="0 0 75 39"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M54.8136 2.06651C51.3596 0.815327 47.6121 0.616501 44.0451 1.49517C40.4781 2.37384 37.2517 4.29054 34.774 7.00289C32.2963 9.71521 30.6786 13.1013 30.1253 16.7331C29.5721 20.3648 30.1082 24.0791 31.6658 27.4062L35.225 25.7397C33.997 23.1166 33.5743 20.1883 34.0106 17.325C34.4468 14.4617 35.7223 11.792 37.6757 9.65358C39.6292 7.51517 42.1729 6.00403 44.9851 5.31126C47.7974 4.6185 50.752 4.77522 53.4752 5.7616L54.8136 2.06651Z"
                  fill="#5B5B5B"
                />
                <path
                  d="M40.857 7.1442C38.2847 4.26948 34.8812 2.26695 31.119 1.41463C27.3568 0.56231 23.4225 0.902496 19.8625 2.38796C16.3024 3.87342 13.2932 6.43045 11.2525 9.70404C9.21189 12.9776 8.24111 16.8054 8.47497 20.6558C8.70876 24.5062 10.1356 28.1884 12.5574 31.1909C14.9791 34.1936 18.2756 36.3677 21.9892 37.4115C25.7028 38.4553 29.6493 38.317 33.2807 37.0157C36.9121 35.7144 40.0483 33.3149 42.2539 30.1501L40.2048 28.7221C38.7781 30.7693 36.8944 32.4563 34.7028 33.6496C32.5113 34.8428 30.0721 35.5095 27.5783 35.5969C25.0845 35.6843 22.6046 35.19 20.3349 34.1532C18.0651 33.1163 16.0679 31.5653 14.5014 29.623C11.8685 26.3598 10.6146 22.197 11.0073 18.0224C11.4 13.8478 13.4081 9.99186 16.6033 7.27679C19.7986 4.56173 23.9281 3.20243 28.1113 3.48879C32.2945 3.77515 36.2003 5.6845 38.9958 8.80965L40.857 7.1442Z"
                  fill="#D9D9D9"
                />
                <path
                  d="M42.951 9.9879C41.6053 7.74007 39.7992 5.80236 37.6515 4.30202C35.5038 2.80168 33.0629 1.77265 30.4893 1.28253C27.9157 0.792399 25.2675 0.852257 22.7186 1.45817C20.1697 2.06408 17.7779 3.20234 15.7001 4.79819C13.6224 6.39405 11.9057 8.41139 10.6629 10.7177C9.42009 13.0241 8.67923 15.5672 8.48898 18.1802C8.29873 20.7932 8.6634 23.4168 9.55903 25.8789C10.4547 28.3409 11.861 30.5856 13.6857 32.4656C15.8786 34.7254 18.6101 36.3905 21.6234 37.3045C24.6367 38.2186 27.8329 38.3516 30.9117 37.691C33.9905 37.0304 36.8509 35.5979 39.2239 33.5282C41.597 31.4584 43.405 28.8193 44.4779 25.8589L40.7831 24.5198C39.9371 26.8538 38.5117 28.9345 36.6407 30.5663C34.7697 32.1981 32.5146 33.3274 30.0872 33.8483C27.6599 34.3691 25.1399 34.2642 22.7642 33.5436C20.3885 32.8229 18.235 31.5102 16.506 29.7286C14.777 27.947 13.5293 25.7551 12.8802 23.3588C12.2311 20.9626 12.2018 18.4406 12.7952 16.0299C13.3885 13.6193 14.585 11.399 16.2722 9.57778C17.9594 7.75656 20.0819 6.39418 22.4403 5.61864C25.598 4.58017 29.015 4.6469 32.1298 5.80786C35.2445 6.96882 37.8716 9.15493 39.5792 12.0069L42.951 9.9879Z"
                  fill="#D9D9D9"
                />
                <path
                  d="M29.942 18.5009C29.7929 21.1869 30.229 23.8733 31.2202 26.3742C32.2114 28.8751 33.734 31.1308 35.6827 32.9854C37.6315 34.84 39.9598 36.2492 42.5067 37.1154C45.0535 37.9817 47.7582 38.2844 50.4336 38.0026C53.1089 37.7207 55.6912 36.8611 58.0016 35.4832C60.3121 34.1053 62.2957 32.2419 63.8153 30.022C65.3348 27.8021 66.3539 25.2786 66.8023 22.626C67.2506 19.9735 67.1174 17.2552 66.4119 14.6592L62.6194 15.6898C63.1757 17.7366 63.2807 19.8797 62.9272 21.971C62.5738 24.0623 61.7702 26.0519 60.5721 27.8021C58.7663 30.4404 56.1467 32.4152 53.1132 33.4251C50.0797 34.4349 46.7991 34.4242 43.7722 33.3946C41.7642 32.7117 39.9285 31.6007 38.3921 30.1385C36.8557 28.6763 35.6552 26.8979 34.8738 24.9261C34.0923 22.9543 33.7485 20.8364 33.866 18.7187L29.942 18.5009Z"
                  fill="#5B5B5B"
                />
                <path
                  d="M41.3545 13.1405C42.4624 13.1405 43.3606 12.2423 43.3606 11.1344C43.3606 10.0265 42.4624 9.12842 41.3545 9.12842C40.2466 9.12842 39.3485 10.0265 39.3485 11.1344C39.3485 12.2423 40.2466 13.1405 41.3545 13.1405Z"
                  fill="#D9D9D9"
                />
                <path
                  d="M64.6095 17.5238C65.7174 17.5238 66.6156 16.6256 66.6156 15.5177C66.6156 14.4098 65.7174 13.5117 64.6095 13.5117C63.5016 13.5117 62.6035 14.4098 62.6035 15.5177C62.6035 16.6256 63.5016 17.5238 64.6095 17.5238Z"
                  fill="#5B5B5B"
                />
                <path
                  d="M53.9107 5.85922C55.0186 5.85922 55.9167 4.96109 55.9167 3.85319C55.9167 2.7453 55.0186 1.84717 53.9107 1.84717C52.8028 1.84717 51.9047 2.7453 51.9047 3.85319C51.9047 4.96109 52.8028 5.85922 53.9107 5.85922Z"
                  fill="#5B5B5B"
                />
                <path
                  d="M42.5433 27.4798C43.6512 27.4798 44.5493 26.5817 44.5493 25.4738C44.5493 24.3659 43.6512 23.4678 42.5433 23.4678C41.4354 23.4678 40.5372 24.3659 40.5372 25.4738C40.5372 26.5817 41.4354 27.4798 42.5433 27.4798Z"
                  fill="#D9D9D9"
                />
              </svg>
            </div>
            <span className="text-xl font-bold">CoCrew</span>
          </motion.div>

          <motion.div
            className="hidden md:flex items-center gap-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            {[
              { name: "Home", path: "/" },
              { name: "About", path: "/about" },
              { name: "Contact", path: "/contact" },
            ].map((item, index) => (
              <motion.div key={item.name}>
                <Link
                  to={item.path}
                  className="text-sm hover:text-gray-300 transition-colors relative"
                >
                  <motion.div
                    initial={{ y: -20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.4 + index * 0.1, duration: 0.3 }}
                    whileHover={{ scale: 1.1 }}
                  >
                    {item.name}
                    <motion.div
                      className="absolute -bottom-1 left-0 h-0.5 bg-cocrew-purple"
                      initial={{ width: 0 }}
                      whileHover={{ width: "100%" }}
                      transition={{ duration: 0.2 }}
                    />
                  </motion.div>
                </Link>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.4 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {/* Mobile: Home button */}
            <Link to="/" className="md:hidden">
              <Button className="bg-cocrew-purple hover:bg-cocrew-purple/90 text-white relative overflow-hidden group px-6 py-3">
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "100%" }}
                  transition={{ duration: 0.6 }}
                />
                Home
                <motion.div
                  whileHover={{ rotate: 45 }}
                  transition={{ duration: 0.2 }}
                >
                  <ArrowUpRight className="w-4 h-4 ml-1" />
                </motion.div>
              </Button>
            </Link>
            {/* Desktop: Get in touch button */}
            <Link to="/contact" className="hidden md:block">
              <Button className="bg-cocrew-purple hover:bg-cocrew-purple/90 text-white relative overflow-hidden group px-6 py-3">
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "100%" }}
                  transition={{ duration: 0.6 }}
                />
                Get in touch
                <motion.div
                  whileHover={{ rotate: 45 }}
                  transition={{ duration: 0.2 }}
                >
                  <ArrowUpRight className="w-4 h-4 ml-1" />
                </motion.div>
              </Button>
            </Link>
          </motion.div>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <motion.section
        className="pt-32 pb-20 px-4 relative"
        initial="initial"
        animate="animate"
        variants={staggerContainer}
      >
        <div className="max-w-4xl mx-auto text-center">
          <motion.div variants={fadeInUp} className="mb-6">
            <Badge className="bg-cocrew-dark text-white border-cocrew-darkgray">
              Contact
            </Badge>
          </motion.div>

          <motion.h1
            className="text-4xl md:text-7xl font-bold mb-6 leading-tight"
            variants={fadeInUp}
          >
            Get in Touch with Us
          </motion.h1>

          <motion.div
            className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto"
            variants={fadeInUp}
          >
            <span className="font-bold">
              Have questions or need support? Fill out the form and our team
              will get back to you shortly — we're here to help you work
              smarter.
            </span>
          </motion.div>
        </div>
      </motion.section>

      {/* Contact Section */}
      <motion.section
        className="py-20 px-4"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, amount: 0.3 }}
        variants={staggerContainer}
      >
        <div className="max-w-6xl mx-auto">
          {/* Email and Phone Cards */}
          <motion.div
            className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto mb-12"
            variants={staggerContainer}
          >
            <motion.div
              className="bg-gradient-to-br from-cocrew-purple/30 to-cocrew-dark/80 rounded-lg p-6 border border-black"
              variants={fadeInUp}
              whileHover={{ scale: 1.02 }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 bg-white/10 rounded flex items-center justify-center">
                  <Mail className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white">E-mail</h3>
              </div>
              <p className="text-gray-400">cocrew.in@gmail.com</p>
            </motion.div>

            <motion.div
              className="bg-gradient-to-br from-cocrew-purple/30 to-cocrew-dark/80 rounded-lg p-6 border border-black"
              variants={fadeInUp}
              whileHover={{ scale: 1.02 }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 bg-white/10 rounded flex items-center justify-center">
                  <Phone className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white">Phone</h3>
              </div>
              <p className="text-gray-400">+91 8130037118</p>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div className="max-w-3xl mx-auto" variants={fadeInUp}>
            <div className="bg-cocrew-dark/80 rounded-2xl p-8 border border-black">
              <form
                action="https://formspree.io/f/xblyqzqr"
                method="POST"
                className="space-y-6"
              >
                {/* First Name and Last Name */}
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="firstName"
                      className="block text-white font-medium mb-3"
                    >
                      First Name
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="name"
                      placeholder="Jane"
                      required
                      className="w-full bg-cocrew-dark/80 border border-gray-700 rounded p-4 text-gray-300 placeholder-gray-500 focus:border-cocrew-purple focus:outline-none transition-colors"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="lastName"
                      className="block text-white font-medium mb-3"
                    >
                      Last Name
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      placeholder="Smith"
                      className="w-full bg-cocrew-dark/80 border border-gray-700 rounded p-4 text-gray-300 placeholder-gray-500 focus:border-cocrew-purple focus:outline-none transition-colors"
                    />
                  </div>
                </div>

                {/* Email and Phone */}
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-white font-medium mb-3"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      placeholder="Jane@mail.com"
                      required
                      className="w-full bg-cocrew-dark/80 border border-gray-700 rounded p-4 text-gray-300 placeholder-gray-500 focus:border-cocrew-purple focus:outline-none transition-colors"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-white font-medium mb-3"
                    >
                      Phone
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      placeholder="+1(969) 819-8061"
                      className="w-full bg-cocrew-dark/80 border border-gray-700 rounded p-4 text-gray-300 placeholder-gray-500 focus:border-cocrew-purple focus:outline-none transition-colors"
                    />
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label
                    htmlFor="message"
                    className="block text-white font-medium mb-3"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    placeholder="Hi, I am jane i want help with...."
                    rows={5}
                    required
                    className="w-full bg-cocrew-dark/80 border border-gray-700 rounded p-4 text-gray-300 placeholder-gray-500 focus:border-cocrew-purple focus:outline-none transition-colors resize-none"
                  />
                </div>

                {/* Submit Button */}
                <Button
                  type="submit"
                  className="w-full bg-cocrew-purple hover:bg-cocrew-purple/90 text-white py-4 text-lg font-medium"
                >
                  Submit Form
                </Button>
              </form>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Footer */}
      <footer className="bg-gradient-to-b from-cocrew-purple/30 to-transparent border-t border-cocrew-darkgray mt-20">
        <div className="max-w-6xl mx-auto px-4 py-16">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="md:col-span-2 space-y-6">
              <div className="flex items-center gap-2">
                <div className="w-12 h-12">
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets%2F4ba335ef1fbf41e880b7029eb15064e0%2Fb93d17e8b7e14343a6989aef32e8f5a9"
                    alt="CoCrew Logo"
                    className="w-full h-full"
                  />
                </div>
                <span className="text-2xl font-bold">CoCrew</span>
              </div>
              <p className="text-gray-400 max-w-xs">
                CoCrew – We Handle the Work. You Lead the Way.
              </p>
            </div>

            <div>
              <h4 className="text-lg font-medium mb-4">Links</h4>
              <div className="space-y-2">
                <a
                  href="/#services"
                  className="block text-gray-400 hover:text-white transition-colors"
                >
                  Services
                </a>
                <a
                  href="/#process"
                  className="block text-gray-400 hover:text-white transition-colors"
                >
                  Process
                </a>
                <a
                  href="/#case-studies"
                  className="block text-gray-400 hover:text-white transition-colors"
                >
                  Case studies
                </a>
                <a
                  href="/#benefits"
                  className="block text-gray-400 hover:text-white transition-colors"
                >
                  Benefits
                </a>
                <a
                  href="/#pricing"
                  className="block text-gray-400 hover:text-white transition-colors"
                >
                  Pricing
                </a>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-medium mb-4">Pages</h4>
              <div className="space-y-2">
                <Link
                  to="/"
                  className="block text-gray-400 hover:text-white transition-colors"
                >
                  Home
                </Link>
                <Link
                  to="/about"
                  className="block text-gray-400 hover:text-white transition-colors"
                >
                  About
                </Link>
                <Link
                  to="/contact"
                  className="block text-gray-400 hover:text-white transition-colors"
                >
                  Contact
                </Link>
                <a
                  href="#"
                  className="block text-gray-400 hover:text-white transition-colors"
                >
                  404
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-cocrew-darkgray pt-8 mt-16">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-gray-400 text-sm">
                We Handle the Work. You Lead the Way.
              </p>
              <p className="text-gray-400 text-sm">© All right reserved</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Contact;
