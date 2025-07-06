import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";

const About = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
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
            {/* Mobile: Menu button */}
            <div className="md:hidden relative">
              <Button
                onClick={toggleMenu}
                className="bg-cocrew-purple hover:bg-cocrew-purple/90 text-white relative overflow-hidden group px-6 py-3"
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "100%" }}
                  transition={{ duration: 0.6 }}
                />
                {isMenuOpen ? (
                  <X className="w-4 h-4" />
                ) : (
                  <Menu className="w-4 h-4" />
                )}
              </Button>

              {/* Mobile Menu Dropdown */}
              <AnimatePresence>
                {isMenuOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -10, scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-12 right-0 bg-cocrew-dark border border-cocrew-darkgray rounded-lg shadow-lg py-2 min-w-[120px] z-50"
                  >
                    <Link
                      to="/"
                      className="block px-4 py-2 text-gray-300 hover:text-white hover:bg-cocrew-purple/20 transition-colors"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Home
                    </Link>
                    <Link
                      to="/about"
                      className="block px-4 py-2 text-gray-300 hover:text-white hover:bg-cocrew-purple/20 transition-colors"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      About
                    </Link>
                    <Link
                      to="/contact"
                      className="block px-4 py-2 text-gray-300 hover:text-white hover:bg-cocrew-purple/20 transition-colors"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Contact
                    </Link>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
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
              About Us
            </Badge>
          </motion.div>

          <motion.h1
            className="text-4xl md:text-7xl font-bold mb-6 leading-tight"
            variants={fadeInUp}
          >
            Helping Businesses Grow
          </motion.h1>

          <motion.p
            className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto"
            variants={fadeInUp}
          >
            CoCrew empowers startups and small businesses to save time, stay
            organized, and scale with ease
          </motion.p>
        </div>
      </motion.section>

      {/* Trust Logos */}
      <motion.section
        className="py-12 md:py-20"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, amount: 0.3 }}
        variants={staggerContainer}
      >
        <div className="max-w-6xl mx-auto px-4 text-center">
          <motion.p className="text-sm text-white mb-8" variants={fadeInUp}>
            business trust us
          </motion.p>
          <div className="overflow-hidden">
            <motion.div
              className="flex items-center gap-8 md:gap-16"
              animate={{
                x: [0, -100 * 8],
              }}
              transition={{
                duration: 20,
                ease: "linear",
                repeat: Infinity,
              }}
            >
              {Array.from({ length: 16 }, (_, i) => (
                <motion.div
                  key={i}
                  className="flex items-center justify-center flex-shrink-0"
                  style={{ minWidth: "100px" }}
                >
                  <img
                    src={
                      i % 4 === 0 || i % 4 === 2
                        ? "https://cdn.builder.io/api/v1/image/assets/TEMP/5386ad96554593f5751b1336cc2ceb4bc22559a1"
                        : "https://cdn.builder.io/api/v1/image/assets/TEMP/5aa3ccf83132ca4bc98a0b4ebafb4f082d3e962b"
                    }
                    alt={`Company logo ${i + 1}`}
                    className="h-12 md:h-16 w-auto transition-all duration-300"
                  />
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Who We Are Section */}
      <motion.section
        className="py-20 md:py-32"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, amount: 0.1 }}
        variants={staggerContainer}
      >
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <motion.div variants={fadeInUp} className="mb-6">
              <Badge className="bg-cocrew-dark text-white border-cocrew-darkgray">
                Who We Are
              </Badge>
            </motion.div>

            <motion.h2
              className="text-3xl md:text-5xl font-bold mb-6"
              variants={fadeInUp}
            >
              Who We Are
            </motion.h2>

            <motion.p
              className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto font-bold"
              variants={fadeInUp}
            >
              We're CoCrew — a modern virtual assistant agency helping startups,
              influencers, and small businesses save time, stay organized, and
              scale smarter.
            </motion.p>
          </div>

          {/* Stats Grid */}
          <motion.div
            className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto"
            variants={staggerContainer}
          >
            {[
              {
                icon: "📊",
                number: "Businesses",
                description:
                  "Businesses have streamlined their workflows with CoCrew's smart virtual support.",
              },
              {
                icon: "⏰",
                number: "1M+ Hours",
                description:
                  "Reducing manual work and boosting productivity through automation.",
              },
              {
                icon: "⚡",
                number: "95% Faster",
                description:
                  "Clients see improved efficiency within the first three months of usage.",
              },
            ].map((stat, index) => (
              <motion.div
                key={index}
                className="bg-gradient-to-br from-cocrew-purple/30 to-cocrew-dark/80 rounded-lg p-6 border border-black"
                variants={fadeInUp}
                whileHover={{ scale: 1.05 }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 bg-white/10 rounded flex items-center justify-center">
                    <span className="text-xl">{stat.icon}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-white">
                    {stat.number}
                  </h3>
                </div>
                <p className="text-gray-400 text-sm">{stat.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Values Section */}
      <motion.section
        className="py-20 md:py-32"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, amount: 0.1 }}
        variants={staggerContainer}
      >
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <motion.div variants={fadeInUp} className="mb-6">
              <Badge className="bg-cocrew-dark text-white border-cocrew-darkgray">
                Our Values
              </Badge>
            </motion.div>

            <motion.h2
              className="text-3xl md:text-5xl font-bold mb-6"
              variants={fadeInUp}
            >
              The Values Behind CoCrew
            </motion.h2>

            <motion.p
              className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto font-bold"
              variants={fadeInUp}
            >
              Our values shape everything we do at CoCrew. From reliability to
              transparency, we're committed to providing smart virtual support
              that empowers businesses and delivers real results.
            </motion.p>
          </div>

          {/* Values Grid */}
          <motion.div
            className="grid md:grid-cols-2 gap-6 relative"
            variants={staggerContainer}
          >
            {/* Background gradient */}
            <div className="absolute inset-0 bg-gradient-radial from-cocrew-purple/25 to-transparent rounded-3xl opacity-30 blur-3xl"></div>

            {[
              {
                icon: "💡",
                title: "Driving Innovation Forward",
                description:
                  "Transforming the way businesses scale through reliable virtual support.",
              },
              {
                icon: "🤝",
                title: "Committed to Integrity & Trust",
                description:
                  "Trust and transparency are at the core of everything we do for our clients.",
              },
              {
                icon: "🚀",
                title: "Empowering Business Growth",
                description:
                  "We help businesses scale faster by taking everyday tasks off their plate — saving time, reducing workload, and creating space for real growth.",
              },
              {
                icon: "👥",
                title: "Putting Customers First",
                description:
                  "Your success is our priority—we build solutions that truly make an impact.",
              },
            ].map((value, index) => (
              <motion.div
                key={index}
                className="bg-cocrew-dark/80 rounded-lg p-6 border border-black relative z-10"
                variants={fadeInUp}
                whileHover={{ scale: 1.02 }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 bg-white/10 rounded flex items-center justify-center">
                    <span className="text-xl">{value.icon}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-white">
                    {value.title}
                  </h3>
                </div>
                <p className="text-gray-400">{value.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* What Makes Us Stand Out */}
      <motion.section
        className="py-20 md:py-32"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, amount: 0.1 }}
        variants={staggerContainer}
      >
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <motion.div variants={fadeInUp} className="mb-6">
              <Badge className="bg-cocrew-dark text-white border-cocrew-darkgray">
                Why us
              </Badge>
            </motion.div>

            <motion.h2
              className="text-3xl md:text-5xl font-bold mb-6"
              variants={fadeInUp}
            >
              What makes us stand out in the industry
            </motion.h2>

            <motion.div
              className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto"
              variants={fadeInUp}
            >
              <span>Discover </span>
              <span className="font-bold">
                how our smart solutions, reliable support, and results-driven
                mindset make CoCrew the partner your business can count on.
              </span>
            </motion.div>
          </div>

          {/* Comparison Grid */}
          <motion.div
            className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto"
            variants={staggerContainer}
          >
            {/* Typical Virtual Assistants */}
            <motion.div
              className="bg-gradient-to-b from-cocrew-dark/40 to-transparent rounded-lg p-6 border border-gray-700"
              variants={fadeInUp}
            >
              <h3 className="text-xl font-semibold text-gray-300 mb-6">
                Typical Virtual Assistants
              </h3>
              <div className="space-y-4">
                {[
                  "One-size-fits-all service",
                  "Inconsistent quality & availability",
                  "Delayed responses, rigid hours",
                  "Miscommunication & unclear updates",
                  "Expensive or fixed-rate plans",
                  "Task-based, not growth-oriented",
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-red-500/20 flex items-center justify-center">
                      <span className="text-red-400 text-xs">✕</span>
                    </div>
                    <span className="text-gray-400">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* CoCrew */}
            <motion.div
              className="bg-gradient-to-b from-cocrew-purple/40 to-transparent rounded-lg p-6 border border-black"
              variants={fadeInUp}
            >
              <h3 className="text-xl font-semibold text-white mb-6">CoCrew</h3>
              <div className="space-y-4">
                {[
                  "Tailored to Your Business",
                  "Trained, Reliable Assistants",
                  "Fast and Flexible Support",
                  "Clear Communication Always",
                  "Affordable, Scalable Solutions",
                  "Results-Focused Approach",
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-green-500/20 flex items-center justify-center">
                      <span className="text-green-400 text-xs">✓</span>
                    </div>
                    <span className="text-white">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* Future of CoCrew */}
      <motion.section
        className="py-20 md:py-32"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, amount: 0.1 }}
        variants={staggerContainer}
      >
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <motion.div variants={fadeInUp} className="mb-6">
              <Badge className="bg-cocrew-dark text-white border-cocrew-darkgray">
                Our Future
              </Badge>
            </motion.div>

            <motion.h2
              className="text-3xl md:text-5xl font-bold mb-6"
              variants={fadeInUp}
            >
              The Future of CoCrew
            </motion.h2>

            <motion.p
              className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto font-bold"
              variants={fadeInUp}
            >
              We're just getting started — here's what's coming next.
            </motion.p>
          </div>

          {/* Future Features Accordion */}
          <motion.div className="max-w-3xl mx-auto" variants={fadeInUp}>
            <Accordion type="single" collapsible className="space-y-4">
              {[
                {
                  title: "AI-Powered Virtual Assistants",
                  content:
                    "Automating routine tasks with intelligent, conversational agents.",
                },
                {
                  title: "Smart Workflow Automation",
                  content:
                    "Streamlining business processes through intelligent automation systems.",
                },
                {
                  title: "Predictive Support Systems",
                  content:
                    "Anticipating client needs and proactively addressing potential issues.",
                },
                {
                  title: "Custom AI Solutions",
                  content:
                    "Tailored artificial intelligence solutions designed for specific business requirements.",
                },
                {
                  title: "24/7 Self-Service Agents",
                  content:
                    "Round-the-clock automated support systems for immediate customer assistance.",
                },
              ].map((feature, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="bg-white/5 rounded-lg border border-black px-6"
                >
                  <AccordionTrigger className="text-white font-medium hover:no-underline hover:text-cocrew-purple transition-colors">
                    {feature.title}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-400 pb-4">
                    {feature.content}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section
        className="py-20 px-4"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, amount: 0.3 }}
        variants={staggerContainer}
      >
        <div className="max-w-4xl mx-auto">
          <motion.div
            className="bg-gradient-to-r from-cocrew-purple/40 via-cocrew-dark/80 to-cocrew-purple/40 rounded-2xl p-12 text-center border border-black"
            variants={fadeInUp}
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Let CoCrew do the Work so you can Scale Faster
            </h2>
            <p className="text-lg md:text-xl text-gray-400 mb-8 font-bold">
              Book a Call Today and Simplify Your Operations
            </p>
            <Link to="/contact">
              <Button className="bg-cocrew-purple hover:bg-cocrew-purple/90 text-white px-8 py-3 text-lg">
                Book a free call
                <ArrowUpRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </motion.section>

      {/* Footer */}
      <footer className="bg-gradient-to-b from-cocrew-purple/30 to-transparent border-t border-cocrew-darkgray">
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

export default About;
