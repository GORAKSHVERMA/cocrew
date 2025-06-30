import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  motion,
  useScroll,
  useTransform,
  useInView,
  AnimatePresence,
} from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  ArrowUpRight,
  Star,
  Check,
  ChevronLeft,
  ChevronRight,
  Clock,
  Zap,
  Handshake,
  BarChart3,
  DollarSign,
  Globe,
} from "lucide-react";

// Animation variants
const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" },
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const scaleOnHover = {
  hover: { scale: 1.05, transition: { duration: 0.2 } },
  tap: { scale: 0.95 },
};

const slideInLeft = {
  initial: { opacity: 0, x: -60 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.6, ease: "easeOut" },
};

const slideInRight = {
  initial: { opacity: 0, x: 60 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.6, ease: "easeOut" },
};

// Typing effect component
const TypewriterText = ({
  text,
  delay = 0,
  speed = 80,
}: {
  text: string;
  delay?: number;
  speed?: number;
}) => {
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    if (currentIndex === 0 && delay > 0) {
      const initialDelay = setTimeout(() => {
        setCurrentIndex(1);
      }, delay);
      return () => clearTimeout(initialDelay);
    }

    if (currentIndex > 0 && currentIndex <= text.length) {
      const timer = setTimeout(() => {
        setDisplayText(text.slice(0, currentIndex));
        if (currentIndex === text.length) {
          setIsComplete(true);
        } else {
          setCurrentIndex((prev) => prev + 1);
        }
      }, speed);

      return () => clearTimeout(timer);
    }
  }, [currentIndex, text, delay, speed]);

  return (
    <span>
      {displayText}
      {!isComplete && <span className="animate-pulse ml-1">|</span>}
    </span>
  );
};

// Floating particles component
const FloatingParticles = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {Array.from({ length: 20 }, (_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-cocrew-purple/20 rounded-full"
          initial={{
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
          }}
          animate={{
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
          }}
          transition={{
            duration: Math.random() * 10 + 10,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "linear",
          }}
        />
      ))}
    </div>
  );
};

const Index = () => {
  const { scrollYProgress } = useScroll();

  const services = [
    {
      title: "Calendar & Email Management",
      description:
        "We handle your inbox, schedule, and appointment coordination so you never miss a meeting or message.",
      image:
        "https://cdn.builder.io/o/assets%2F4ba335ef1fbf41e880b7029eb15064e0%2Ff11ecc35c7a144fca82385f93a25938b?alt=media&token=ab7c71f1-99c4-4804-9370-e42526378ea2&apiKey=4ba335ef1fbf41e880b7029eb15064e0",
      tags: ["Scheduling", "Many more"],
      featured: false,
    },
    {
      title: "Lead Generation & Data Entry",
      description:
        "We find potential leads, update your contact lists, and manage spreadsheets to support your growth strategy.",
      image:
        "https://cdn.builder.io/o/assets%2F4ba335ef1fbf41e880b7029eb15064e0%2Ff3487b285d3c44988fec4101b2681972?alt=media&token=25212fc9-70b4-46fe-a20a-70ca433ade21&apiKey=4ba335ef1fbf41e880b7029eb15064e0",
      tags: ["Summaries", "Leads", "Strategy", "Many more"],
      featured: true,
    },
    {
      title: "Internet Research",
      description:
        "Whether it's competitor insights or sourcing tools, we gather accurate data so you make informed decisions.",
      image:
        "https://cdn.builder.io/o/assets%2F4ba335ef1fbf41e880b7029eb15064e0%2F3981bc8ac2d744f5989dc79b0d5d3333?alt=media&token=8e401534-7b24-4a85-bfc8-a70a65fabc4e&apiKey=4ba335ef1fbf41e880b7029eb15064e0",
      tags: ["Leads", "Content", "Summaries", "Strategy"],
      featured: true,
    },
    {
      title: "CRM Management",
      description:
        "We organize and update your CRM — from data cleanup to entry — helping you nurture every contact effectively.",
      image:
        "https://cdn.builder.io/api/v1/file/assets%2F4ba335ef1fbf41e880b7029eb15064e0%2Fac8be4f5a275400992caadacab5e7a26",
      tags: ["Strategy", "Consulting", "Many more"],
      featured: false,
    },
    {
      title: "Social Media Scheduling",
      description:
        "We plan and schedule your social media posts so your brand stays active and engaging — even on busy days.",
      image:
        "https://cdn.builder.io/o/assets%2F4ba335ef1fbf41e880b7029eb15064e0%2F4414447c65354fd3a92a0251953ebd52?alt=media&token=83702aad-5ecf-4d36-948a-f5768eddb3e5&apiKey=4ba335ef1fbf41e880b7029eb15064e0",
      tags: ["Leads", "Content", "Social post", "Many more"],
      featured: true,
    },
    {
      title: "Travel Planning & Coordination",
      description:
        "From flights and hotels to itinerary planning, we manage your travel details so you can focus on the trip itself.",
      image:
        "https://cdn.builder.io/o/assets%2F4ba335ef1fbf41e880b7029eb15064e0%2Fe115bb42e8c34f6bb8d8b21e4692c870?alt=media&token=d2cd1052-c3af-4d21-beb0-368c8063e7bf&apiKey=4ba335ef1fbf41e880b7029eb15064e0",
      tags: ["Strategy", "Consulting", "Many more"],
      featured: false,
    },
    {
      title: "Custom Support Solutions",
      description:
        "Don't see exactly what you need? We adapt to your business goals and processes — offering personalized solutions that fit your way of working.",
      image:
        "https://cdn.builder.io/o/assets%2F4ba335ef1fbf41e880b7029eb15064e0%2F278ce30f7f5c40f0b80427b144ddd58a?alt=media&token=6bed96fe-0910-428a-a9ac-bc7b0e5918d0&apiKey=4ba335ef1fbf41e880b7029eb15064e0",
      tags: ["Strategy", "Many more"],
      featured: true,
    },
  ];

  const processSteps = [
    {
      step: "Step 1",
      title: "We begin by listening",
      description:
        "Our first step is to understand your business goals, pain points, and expectations through a brief but meaningful conversation.",
      image:
        "https://cdn.builder.io/o/assets%2F4ba335ef1fbf41e880b7029eb15064e0%2Fc221337b70c54376877e507969366724?alt=media&token=4efd875e-5b9c-41f5-b3bc-a5fcef02d2df&apiKey=4ba335ef1fbf41e880b7029eb15064e0",
    },
    {
      step: "Step 2",
      title: "We strategize with precision",
      description:
        "Our internal team reviews your requirements and brainstorms the most efficient and scalable support solutions tailored to your needs.",
      image:
        "https://cdn.builder.io/o/assets%2F4ba335ef1fbf41e880b7029eb15064e0%2F91ab08fe887e4df083a2b1bd95067e4f?alt=media&token=5069b443-4b1f-463a-b557-d6a5ba2b3ce5&apiKey=4ba335ef1fbf41e880b7029eb15064e0",
    },
    {
      step: "Step 3",
      title: "We share the game plan",
      description:
        "Once we've outlined a clear strategy, we walk you through our proposed approach — giving you clarity, timelines, and next steps.",
      image:
        "https://cdn.builder.io/o/assets%2F4ba335ef1fbf41e880b7029eb15064e0%2F1965c81fe75d49348b2c64d5d18e9028?alt=media&token=97801627-b228-44e8-af89-d55b0d6dce1a&apiKey=4ba335ef1fbf41e880b7029eb15064e0",
    },
    {
      step: "Step 4",
      title: "We get to work, together",
      description:
        "With your go-ahead, we become your extended team — delivering consistent, reliable, and high-quality support from day one.",
      image:
        "https://cdn.builder.io/api/v1/image/assets%2F4ba335ef1fbf41e880b7029eb15064e0%2F6504d9573b654bdd8c92027b172fd799",
    },
  ];

  const benefits = [
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Increased Productivity",
      description:
        "Free up your time by offloading repetitive tasks, so you can focus on what matters most ��� growing your business.",
    },
    {
      icon: <Handshake className="w-6 h-6" />,
      title: "Better Customer Experience",
      description:
        "Deliver faster, more reliable communication and support that leaves a lasting impression on your customers.",
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "24/7 Availability",
      description:
        "Stay active even when you're offline — with round-the-clock assistance that ensures you never miss a lead or message.",
    },
    {
      icon: <DollarSign className="w-6 h-6" />,
      title: "Cost Reduction",
      description:
        "Cut down on operational expenses by hiring skilled virtual talent at a fraction of the cost of in-house teams.",
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Data-Driven Insights",
      description:
        "Make smarter decisions with clean, organized data and reporting tailored to your business needs.",
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: "Scalability & Growth",
      description:
        "Easily expand your operations as your business grows — with flexible support that scales with you.",
    },
  ];

  const testimonials = [
    {
      rating: 5,
      text: "From managing clients to boosting our Instagram presence, CoCrew made running a boutique business feel effortless.",
      author: "Sartoria Fashion's",
      avatar:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/0f5a610d4779825c8893fb3fad84bcea65185938",
    },
    {
      rating: 5,
      text: "CoCrew helped us stay on top of international operations with seamless coordination and timely support — it's like having a full team at your fingertips.",
      author: "GALIVIO",
      avatar:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/5f17d56bcd412a385c17170f57131ceacc20c117",
    },
  ];

  const faqs = [
    {
      question: "What is a virtual assistant?",
      answer:
        "A virtual assistant is a remote professional who provides administrative, technical, or creative support to businesses and entrepreneurs from a location outside of your office.",
    },
    {
      question: "Why should I choose CoCrew over hiring in-house?",
      answer:
        "CoCrew offers cost-effective, flexible solutions without the overhead of full-time employees. You get access to skilled professionals, scalable hours, and 24/7 availability at a fraction of in-house costs.",
    },
    {
      question: "How do I know which services I need?",
      answer:
        "During our initial consultation, we'll assess your business needs and recommend the most suitable services. We can start with basic tasks and scale up as needed.",
    },
    {
      question: "Is my business too small for this?",
      answer:
        "Not at all! CoCrew works with businesses of all sizes, from solopreneurs to growing companies. We offer flexible solutions that can scale with your business.",
    },
    {
      question: "Can I request custom tasks outside of listed services?",
      answer:
        "Absolutely! We specialize in custom support solutions. If you have specific needs not listed in our services, we'll work with you to create a tailored solution.",
    },
  ];

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
            <Link to="/contact">
              <Button className="bg-cocrew-purple hover:bg-cocrew-purple/90 text-white relative overflow-hidden group px-6 py-3 max-sm:w-[132px]">
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
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        {/* Floating Particles */}
        <FloatingParticles />

        {/* Background Image with parallax */}
        <motion.div
          className="absolute inset-0 opacity-50"
          style={{
            y: useTransform(scrollYProgress, [0, 1], [0, -100]),
          }}
        >
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/72358ccefdc210ca4c11d2a39e146a3570a605f6"
            alt=""
            className="w-full h-full object-cover"
          />
        </motion.div>

        {/* Animated Void/Circle overlay */}
        <motion.div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-black rounded-full"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
        />

        {/* Animated SVG Background */}
        <motion.div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-60 blur-sm"
          initial={{ rotate: 0, scale: 0 }}
          animate={{ rotate: 360, scale: 1 }}
          transition={{ duration: 2, delay: 0.7, ease: "easeOut" }}
          whileHover={{ rotate: 365, scale: 1.05 }}
        >
          <motion.svg
            width="400"
            height="300"
            viewBox="0 0 401 301"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            animate={{ rotate: [0, 360] }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          >
            <path
              d="M297.528 50.2224C277.801 43.0766 256.398 41.9411 236.026 46.9594C215.654 51.9777 197.228 62.9244 183.077 78.4152C168.926 93.9059 159.687 113.245 156.527 133.987C153.367 154.728 156.429 175.941 165.325 194.943L185.653 185.426C178.639 170.444 176.225 153.72 178.717 137.367C181.208 121.014 188.493 105.767 199.649 93.5539C210.806 81.3409 225.333 72.7105 241.395 68.754C257.457 64.7974 274.331 65.6925 289.883 71.3259L297.528 50.2224Z"
              fill="#5B5B5B"
            />
            <path
              d="M217.818 79.2202C203.127 62.802 183.689 51.3651 162.202 46.4973C140.715 41.6295 118.246 43.5724 97.9135 52.0562C77.5812 60.54 60.3947 75.1438 48.7402 93.84C37.0856 112.536 31.5413 134.397 32.8769 156.388C34.2121 178.379 42.3611 199.408 56.1924 216.557C70.0233 233.705 88.8503 246.122 110.06 252.084C131.269 258.045 153.808 257.255 174.548 249.823C195.288 242.391 213.199 228.687 225.796 210.612L214.093 202.457C205.945 214.149 195.187 223.783 182.67 230.598C170.154 237.413 156.223 241.221 141.98 241.72C127.738 242.219 113.574 239.396 100.611 233.474C87.6485 227.553 76.2421 218.695 67.295 207.602C52.2578 188.965 45.097 165.19 47.3397 141.348C49.5823 117.506 61.0509 95.4838 79.2997 79.9774C97.5485 64.4711 121.133 56.7079 145.025 58.3433C168.916 59.9788 191.223 70.8835 207.188 88.7319L217.818 79.2202Z"
              fill="#D9D9D9"
            />
            <path
              d="M229.778 95.4619C222.092 82.624 211.777 71.5573 199.511 62.9885C187.245 54.4197 173.305 48.5428 158.606 45.7435C143.907 42.9443 128.783 43.2862 114.226 46.7467C99.6687 50.2072 86.0083 56.708 74.1417 65.8223C62.2752 74.9366 52.471 86.4581 45.373 99.6301C38.275 112.802 34.0438 127.327 32.9572 142.25C31.8706 157.173 33.9533 172.158 39.0685 186.219C44.1836 200.28 52.2155 213.1 62.6367 223.837C75.1612 236.743 90.7612 246.253 107.971 251.473C125.18 256.694 143.435 257.453 161.018 253.68C178.602 249.908 194.938 241.727 208.492 229.906C222.045 218.085 232.37 203.013 238.498 186.105L217.396 178.457C212.565 191.787 204.424 203.67 193.738 212.99C183.052 222.309 170.173 228.759 156.31 231.734C142.446 234.708 128.055 234.11 114.486 229.994C100.918 225.878 88.6188 218.38 78.7442 208.206C68.8695 198.03 61.7438 185.512 58.0365 171.826C54.3292 158.141 54.162 143.737 57.5508 129.969C60.9395 116.201 67.7729 103.521 77.4088 93.1196C87.0448 82.7182 99.1669 74.9373 112.636 70.508C130.67 64.5771 150.186 64.9582 167.975 71.5887C185.764 78.2193 200.768 90.7046 210.521 106.993L229.778 95.4619Z"
              fill="#D9D9D9"
            />
            <path
              d="M155.48 144.083C154.628 159.423 157.119 174.766 162.78 189.049C168.441 203.332 177.137 216.216 188.267 226.807C199.396 237.399 212.694 245.447 227.24 250.395C241.786 255.342 257.232 257.071 272.512 255.461C287.792 253.852 302.539 248.943 315.735 241.073C328.931 233.203 340.26 222.561 348.938 209.883C357.616 197.204 363.437 182.792 365.998 167.642C368.558 152.493 367.797 136.968 363.768 122.142L342.108 128.028C345.285 139.718 345.885 151.958 343.866 163.902C341.847 175.845 337.258 187.208 330.416 197.204C320.102 212.272 305.141 223.551 287.816 229.318C270.491 235.086 251.755 235.025 234.468 229.144C222.999 225.244 212.515 218.899 203.74 210.548C194.966 202.197 188.11 192.04 183.647 180.779C179.184 169.518 177.22 157.422 177.891 145.327L155.48 144.083Z"
              fill="#5B5B5B"
            />
          </motion.svg>
        </motion.div>

        <motion.div
          className="relative z-10 text-center max-w-4xl mx-auto px-4"
          initial="initial"
          animate="animate"
          variants={staggerContainer}
        >
          <motion.h1
            className="text-4xl md:text-7xl font-bold mb-4 leading-tight"
            variants={fadeInUp}
          >
            <TypewriterText text="We Handle the Work." delay={800} speed={60} />
            <br />
            <TypewriterText text="You Lead the Way" delay={2000} speed={60} />
          </motion.h1>
          <motion.p
            className="text-lg md:text-xl text-gray-400 mb-8 max-w-2xl mx-auto"
            variants={fadeInUp}
          >
            Cocrew is your virtual team — delivering digital support that scales
            with your business.
          </motion.p>
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            variants={fadeInUp}
          >
            <motion.div
              variants={scaleOnHover}
              whileHover="hover"
              whileTap="tap"
            >
              <Link to="/contact">
                <Button className="bg-cocrew-purple hover:bg-cocrew-purple/90 text-white px-6 py-3 relative overflow-hidden group">
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
            <motion.div
              variants={scaleOnHover}
              whileHover="hover"
              whileTap="tap"
            >
              <Button
                variant="outline"
                className="border-black text-black bg-white hover:bg-gray-100 px-6 py-3"
                style={{
                  borderWidth: "1px",
                  boxShadow: "1px 1px 3px 0px rgba(0, 0, 0, 1)",
                }}
              >
                View services
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>
      </section>

      {/* Logos Section with Slideshow */}
      <motion.section
        className="py-12 md:py-20 overflow-hidden"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, amount: 0.3 }}
        variants={staggerContainer}
      >
        <div className="max-w-6xl mx-auto px-4 text-center">
          <motion.p className="text-sm text-white mb-8" variants={fadeInUp}>
            business trust us
          </motion.p>
          <div className="relative">
            <div className="overflow-hidden">
              <motion.div
                className="flex items-center gap-8 md:gap-16"
                animate={{
                  x: [0, -100 * 8], // Move left by the width of all logos
                }}
                transition={{
                  duration: 20,
                  ease: "linear",
                  repeat: Infinity,
                }}
              >
                {/* First set of logos */}
                {Array.from({ length: 8 }, (_, i) => (
                  <motion.div
                    key={`first-${i}`}
                    className="flex items-center justify-center flex-shrink-0"
                    initial={{ opacity: 0, y: 30, scale: 0.8 }}
                    whileInView={{
                      opacity: 1,
                      y: 0,
                      scale: 1,
                      transition: { duration: 0.5, delay: (i % 4) * 0.1 },
                    }}
                    whileHover={{
                      scale: 1.1,
                      opacity: 1,
                      transition: { duration: 0.2 },
                    }}
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
                {/* Duplicate set for seamless loop */}
                {Array.from({ length: 8 }, (_, i) => (
                  <motion.div
                    key={`second-${i}`}
                    className="flex items-center justify-center flex-shrink-0"
                    whileHover={{
                      scale: 1.1,
                      opacity: 1,
                      transition: { duration: 0.2 },
                    }}
                    style={{ minWidth: "100px" }}
                  >
                    <img
                      src={
                        i % 4 === 0 || i % 4 === 2
                          ? "https://cdn.builder.io/api/v1/image/assets/TEMP/5386ad96554593f5751b1336cc2ceb4bc22559a1"
                          : "https://cdn.builder.io/api/v1/image/assets/TEMP/5aa3ccf83132ca4bc98a0b4ebafb4f082d3e962b"
                      }
                      alt={`Company logo ${i + 9}`}
                      className="h-12 md:h-16 w-auto transition-all duration-300"
                    />
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Services Section */}
      <motion.section
        className="py-20 md:py-32"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, amount: 0.1 }}
        variants={staggerContainer}
      >
        <div className="max-w-6xl mx-auto px-4">
          <motion.div className="text-center mb-16" variants={fadeInUp}>
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <Badge className="bg-cocrew-dark text-white border-cocrew-darkgray mb-6">
                Our Services
              </Badge>
            </motion.div>
            <motion.h2
              className="text-3xl md:text-5xl font-semibold mb-4"
              variants={fadeInUp}
            >
              Powering Your Growth, Virtually
            </motion.h2>
            <motion.p
              className="text-lg text-gray-400 max-w-2xl mx-auto"
              variants={fadeInUp}
            >
              From admin tasks to creative coordination — we handle the backend
              so you can focus on the big picture
            </motion.p>
          </motion.div>

          <div className="space-y-20">
            {services.map((service, index) => {
              const isReversed = index % 2 === 1;
              return (
                <motion.div
                  key={index}
                  className={`flex flex-col lg:flex-row items-center gap-12 ${isReversed ? "lg:flex-row-reverse" : ""}`}
                  initial="initial"
                  whileInView="animate"
                  viewport={{ once: true, amount: 0.3 }}
                  variants={staggerContainer}
                >
                  <motion.div
                    className="flex-1"
                    variants={isReversed ? slideInRight : slideInLeft}
                  >
                    <motion.div
                      whileHover={{
                        scale: 1.02,
                        rotateY: isReversed ? -5 : 5,
                        transition: { duration: 0.3 },
                      }}
                      style={{ transformStyle: "preserve-3d" }}
                    >
                      <Card className="bg-cocrew-dark border-cocrew-darkgray p-12 relative overflow-hidden group">
                        <motion.div
                          className="absolute inset-0 bg-gradient-to-br from-cocrew-purple/10 to-transparent opacity-0 group-hover:opacity-100"
                          transition={{ duration: 0.3 }}
                        />
                        <motion.img
                          src={service.image}
                          alt={service.title}
                          className="w-full h-auto max-w-xs mx-auto relative z-10"
                          whileHover={{ scale: 1.05 }}
                          transition={{ duration: 0.3 }}
                        />
                      </Card>
                    </motion.div>
                  </motion.div>
                  <motion.div
                    className="flex-1 space-y-6"
                    variants={isReversed ? slideInLeft : slideInRight}
                  >
                    <motion.h3
                      className={`text-2xl md:text-4xl ${service.featured ? "font-bold" : "font-medium"}`}
                      transition={{ duration: 0.8, delay: 0.2 }}
                    >
                      {service.title}
                    </motion.h3>
                    <motion.p
                      className="text-gray-400 text-lg leading-relaxed"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ duration: 0.6, delay: 0.3 }}
                    >
                      {service.description}
                    </motion.p>
                    <motion.div
                      className="flex flex-wrap gap-2"
                      variants={staggerContainer}
                    >
                      {service.tags.map((tag, tagIndex) => (
                        <motion.div
                          key={tagIndex}
                          variants={{
                            initial: { opacity: 0, scale: 0.8, y: 20 },
                            animate: {
                              opacity: 1,
                              scale: 1,
                              y: 0,
                              transition: { delay: tagIndex * 0.1 },
                            },
                          }}
                          whileHover={{ scale: 1.1, y: -2 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <Badge className="bg-cocrew-dark text-white border-cocrew-darkgray hover:border-cocrew-purple transition-colors cursor-pointer">
                            {tag}
                          </Badge>
                        </motion.div>
                      ))}
                    </motion.div>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </motion.section>

      {/* Process Section */}
      <section className="py-20 md:py-32">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="bg-cocrew-dark text-white border-cocrew-darkgray mb-6">
              Our Process
            </Badge>
            <h2 className="text-3xl md:text-5xl font-semibold mb-4">
              Our Simple, Smart,
              <br />
              and Scalable Process
            </h2>
            <p className="text-lg text-gray-400">
              Your success starts with our streamlined approach
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {processSteps.map((step, index) => (
              <Card
                key={index}
                className="bg-cocrew-dark border-cocrew-darkgray p-8"
              >
                <CardContent className="space-y-6">
                  <Badge className="bg-cocrew-dark text-white border-cocrew-darkgray text-xs">
                    {step.step}
                  </Badge>
                  <h3 className="text-xl font-medium text-white">
                    {step.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed">
                    {step.description}
                    {step.step === "Step 1" && (
                      <>
                        <br />
                        <br />
                      </>
                    )}
                  </p>
                  {step.image && (
                    <img
                      src={step.image}
                      alt={step.title}
                      className={`w-full object-contain ${step.step === "Step 4" ? "h-32" : "h-52"}`}
                    />
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="py-20 md:py-32">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="bg-cocrew-dark text-white border-cocrew-darkgray mb-6">
              Case Studies
            </Badge>
            <h2 className="text-3xl md:text-5xl font-semibold mb-4">
              See How Smart CoCrew
              <br />
              Transforms Businesses
            </h2>
            <p className="text-lg text-gray-400">
              See how CoCrew simplify operations, boosts and drives growth.
            </p>
          </div>

          <div className="relative">
            <Card className="bg-black border-cocrew-darkgray overflow-hidden">
              <CardContent className="flex flex-col lg:flex-row items-center gap-12 p-8 lg:p-12">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets%2F4ba335ef1fbf41e880b7029eb15064e0%2F14b6db82c0a5471196a0e6dddbeea9d0"
                  alt="Case study"
                  className="w-full lg:w-1/2 rounded-lg"
                />
                <div className="flex-1 space-y-6">
                  <h3 className="text-xl font-medium text-white">
                    "Streamlining boutique operations for digital growth"
                  </h3>
                  <p className="text-gray-400 leading-relaxed">
                    Sartoria Fashions faced operational overload — disorganized
                    client bookings, missed inquiries, and inconsistent social
                    media presence were holding the brand back from scaling its
                    boutique services online.
                  </p>
                  <div>
                    <p className="text-lg text-gray-400 mb-4">Impact :</p>
                    <div className="space-y-3">
                      {[
                        "40% Reduction in Unsold Stock",
                        "35% Faster Garment Turnaround",
                        "20% More Accurate Style Forecasting",
                        "25% Quicker Order Processing",
                      ].map((impact, index) => (
                        <div key={index} className="flex items-center gap-3">
                          <Check className="w-5 h-5 text-white" />
                          <span className="text-white">{impact}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-black border-cocrew-darkgray overflow-hidden">
              <CardContent className="flex flex-col lg:flex-row items-center gap-12 p-8 lg:p-12">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets%2F4ba335ef1fbf41e880b7029eb15064e0%2Fcecbcd9fa9df4789b049911912f5250c"
                  alt="Case study"
                  className="w-full lg:w-1/2 rounded-lg"
                />
                <div className="flex-1 space-y-6">
                  <h3 className="text-xl font-medium text-white">
                    "Simplifying import- export operations with smart virtual
                    support"
                  </h3>
                  <p className="text-gray-400 leading-relaxed">
                    Galivio, a small-scale import-export venture, faced
                    challenges managing international client communication,
                    shipment coordination, and document handling — all while
                    operating with limited manpower and time-sensitive
                    logistics.
                  </p>
                  <div>
                    <p className="text-lg text-gray-400 mb-4">Impact :</p>
                    <div className="space-y-3">
                      {[
                        "40% Reduction in Overstock & Waste",
                        "35% Increase in Production Speed",
                        "20% More Accurate Forecasting",
                        "25% Faster Order Fulfillment",
                      ].map((impact, index) => (
                        <div key={index} className="flex items-center gap-3">
                          <Check className="w-5 h-5 text-white" />
                          <span className="text-white">{impact}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <motion.section
        className="py-20 md:py-32"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, amount: 0.1 }}
        variants={staggerContainer}
      >
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="bg-cocrew-dark text-white border-cocrew-darkgray mb-6">
              Benefits
            </Badge>
            <h2 className="text-3xl md:text-5xl font-semibold mb-4">
              The Key Benefits of
              <br />
              Delegating with CoCrew
            </h2>
            <div className="text-lg text-gray-400 max-w-2xl mx-auto">
              <p>
                Discover how CoCrew enhances efficiency, reduces costs, and
                drives
              </p>
              <p>business growth with smarter, faster processes.</p>
            </div>
          </div>

          <motion.div
            className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto"
            variants={staggerContainer}
          >
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                className="bg-gradient-to-br from-cocrew-purple/30 to-cocrew-dark/80 rounded-lg p-6 border border-black"
                variants={fadeInUp}
                whileHover={{ scale: 1.05 }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 bg-white/10 rounded flex items-center justify-center">
                    <div className="text-white">{benefit.icon}</div>
                  </div>
                  <h3 className="text-xl font-semibold text-white">
                    {benefit.title}
                  </h3>
                </div>
                <p className="text-gray-400 text-sm">{benefit.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Pricing Section */}
      <motion.section
        className="py-20 md:py-32"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, amount: 0.1 }}
        variants={staggerContainer}
      >
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="bg-cocrew-dark text-white border-cocrew-darkgray mb-6">
              Pricing
            </Badge>
            <h2 className="text-3xl md:text-5xl font-semibold mb-4">
              Top-Tier Assistance Without the Hefty Cost
            </h2>
            <p className="text-lg text-gray-400">
              Pick a plan that aligns with your business goals and let CoCrew
              handle the rest.
            </p>
          </div>

          <motion.div
            className="flex justify-center max-w-4xl mx-auto"
            variants={staggerContainer}
          >
            <motion.div
              className="bg-gradient-to-br from-cocrew-purple/30 to-cocrew-dark/80 rounded-lg p-6 border border-black w-full max-w-[600px] h-auto min-h-[510px] flex flex-col"
              variants={fadeInUp}
              whileHover={{ scale: 1.05 }}
            >
              <div className="flex items-center gap-3 mb-4 w-full min-h-[110px]">
                <div className="w-8 h-8 bg-white/10 rounded flex items-center justify-center">
                  <span className="text-xl">💰</span>
                </div>
                <h3 className="text-xl font-semibold text-white flex-1">
                  Let's Discuss
                </h3>
                <Badge className="bg-cocrew-dark text-white border-cocrew-darkgray h-10 px-4 flex items-center justify-center">
                  Popular
                </Badge>
              </div>

              <h2 className="text-3xl font-semibold text-white mb-4">Custom</h2>

              <p className="text-gray-400 text-xl leading-5 mb-5 flex-grow">
                We understand every business is different. That's why we offer
                customized pricing based on the services you need, the number of
                hours, and the level of support required.
              </p>

              <Link to="/contact">
                <div className="bg-black rounded-full h-10 w-full max-w-[500px] mx-auto mb-5 px-2.5 py-0.5 border border-gray-900 flex items-center justify-center hover:bg-gray-900 cursor-pointer transition-colors">
                  <p className="text-white text-center">Schedule a call</p>
                </div>
              </Link>
              <div className="text-white">
                <h6 className="text-xl font-semibold">
                  1. Reduce Employee Costs
                </h6>
                <p className="text-xl font-semibold">2. Affordable Pricing</p>
                <p className="text-xl font-semibold">3. Boost Productivity</p>
                <p className="text-xl font-semibold">
                  4. Zero Training Required
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* Testimonials Section */}
      <motion.section
        className="py-20 md:py-32"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, amount: 0.1 }}
        variants={staggerContainer}
      >
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="bg-cocrew-dark text-white border-cocrew-darkgray mb-6">
              Testimonials
            </Badge>
            <h2 className="text-3xl md:text-5xl font-semibold mb-4">
              Why Businesses Love CoCrew
            </h2>
            <p className="text-lg text-gray-400">
              Real businesses, real results with CoCrew.
            </p>
          </div>

          <motion.div
            className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto"
            variants={staggerContainer}
          >
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                className="bg-gradient-to-br from-cocrew-purple/30 to-cocrew-dark/80 rounded-lg p-6 border border-black h-[199.6px] max-sm:h-[226px]"
                variants={fadeInUp}
                whileHover={{ scale: 1.05 }}
              >
                <div className="flex items-center gap-1 mb-4">
                  {Array.from({ length: testimonial.rating }, (_, i) => (
                    <Star key={i} className="w-3 h-3 fill-white text-white" />
                  ))}
                </div>
                <div className="flex items-center gap-3 mb-4 h-[66px]">
                  <div
                    className="w-8 h-8 bg-white/10 rounded flex items-center justify-center bg-cover bg-center bg-no-repeat"
                    style={{
                      backgroundImage: `url(${index === 0 ? "https://cdn.builder.io/api/v1/image/assets%2F4ba335ef1fbf41e880b7029eb15064e0%2F14b6db82c0a5471196a0e6dddbeea9d0" : "https://cdn.builder.io/api/v1/image/assets%2F4ba335ef1fbf41e880b7029eb15064e0%2Fcecbcd9fa9df4789b049911912f5250c"})`,
                    }}
                  />
                  <h3 className="text-xl font-semibold text-white">
                    {testimonial.author}
                  </h3>
                </div>
                <p className="text-gray-400 text-sm">"{testimonial.text}"</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* FAQs Section */}
      <section className="py-20 md:py-32">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="bg-cocrew-dark text-white border-cocrew-darkgray mb-6">
              FAQs
            </Badge>
            <h2 className="text-3xl md:text-5xl font-semibold mb-4">
              We've Got the Answers
              <br />
              You're Looking For
            </h2>
            <p className="text-lg text-gray-400">
              Quick answers to your questions.
            </p>
          </div>

          <div className="relative">
            {/* Background gradient */}
            <div className="absolute inset-0 opacity-30 blur-3xl pointer-events-none">
              <div className="w-full h-full bg-gradient-to-r from-cocrew-purple/50 to-transparent"></div>
            </div>

            <Accordion
              type="single"
              collapsible
              className="space-y-4 relative z-10"
            >
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="bg-white/5 border border-cocrew-darkgray rounded-lg px-6"
                >
                  <AccordionTrigger className="text-left text-white hover:no-underline">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-400">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

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
                  href="#services"
                  className="block text-gray-400 hover:text-white transition-colors"
                >
                  Services
                </a>
                <a
                  href="#process"
                  className="block text-gray-400 hover:text-white transition-colors"
                >
                  Process
                </a>
                <a
                  href="#case-studies"
                  className="block text-gray-400 hover:text-white transition-colors"
                >
                  Case studies
                </a>
                <a
                  href="#benefits"
                  className="block text-gray-400 hover:text-white transition-colors"
                >
                  Benefits
                </a>
                <a
                  href="#pricing"
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

export default Index;
