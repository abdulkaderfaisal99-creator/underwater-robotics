import React from "react";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Plus,
  Minus,
} from "lucide-react";
import { Link } from "react-router";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import Footer from "../components/Footer";

// Import ferry and submarine images
import wfsa2026Image from "../../assets/39946ede35e7b955699dae5799d3d3abbbd3c45c.png";
import wfsa2024Image from "../../assets/0dd8deea2f997a5c48f97399b449faf30811743d.png";
import wfsa2025Image from "../../assets/a70417a88161a521e909ebf3e10e2adb0ddd01f6.png";
import robosub2026Image from "../../assets/aae2be78f445061d9e19a68055e1d61738c56aa0.png";

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [expandedCard, setExpandedCard] = useState<number | null>(null);
  const [expandedValue, setExpandedValue] = useState<number | null>(null);
  const [typedText, setTypedText] = useState("");
  const [textIndex, setTextIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const textArray = [
    "World Champions in WFSA Surface Vessel Design",
    "From Surface Vessel Excellence to Underwater Robotics Innovation",
    "Embarking on Our First Journey at RoboSub 2026",
  ];

  const currentFullText = textArray[textIndex];

  // Typing animation effect
  useEffect(() => {
    if (!currentFullText) return; // Safety check

    const typingSpeed = isDeleting ? 30 : 50;
    const pauseTime = isDeleting ? 500 : 2000;

    if (!isDeleting && typedText === currentFullText) {
      const timeout = setTimeout(() => setIsDeleting(true), pauseTime);
      return () => clearTimeout(timeout);
    } else if (isDeleting && typedText === "") {
      setIsDeleting(false);
      setTextIndex((prev) => (prev + 1) % textArray.length);
    } else {
      const timeout = setTimeout(() => {
        setTypedText(
          isDeleting
            ? currentFullText.slice(0, typedText.length - 1)
            : currentFullText.slice(0, typedText.length + 1),
        );
      }, typingSpeed);
      return () => clearTimeout(timeout);
    }
  }, [typedText, isDeleting, currentFullText, textIndex, textArray.length]);

  const carouselImages = [
    {
      url: wfsa2026Image,
      title: "WFSA 2026",
      caption: "World Ferry Safety Association 2026",
      description:
        "Experience our groundbreaking debut at the World Ferry Safety Association 2026. This historic competition marked our first international appearance, where we showcased innovative ferry design concepts and maritime engineering solutions. Witness the beginning of our journey in sustainable marine transportation and the foundation that shaped our team's future endeavors.",
      link: "/wfsa-2026",
    },
    {
      url: wfsa2024Image,
      title: "WFSA 2024",
      caption: "World Ferry Safety Association 2024",
      description:
        "Building on our success, WFSA 2024 saw our team deliver enhanced ferry designs with improved efficiency and sustainability features. We integrated advanced materials, optimized hydrodynamics, and smart navigation systems to create vessels ready for tomorrow's maritime challenges. Discover how we elevated our design philosophy and engineering prowess.",
      link: "/wfsa-2024",
    },
    {
      url: wfsa2025Image,
      title: "WFSA 2025",
      caption: "World Ferry Safety Association 2025",
      description:
        "Step into the future with our WFSA 2025 innovations. This year represents the culmination of years of research and development in eco-friendly maritime solutions. Our revolutionary ferry designs incorporate renewable energy systems, autonomous operation capabilities, and cutting-edge safety features. Explore how we're shaping the future of sustainable ocean transportation.",
      link: "/wfsa-2025",
    },
    {
      url: robosub2026Image,
      title: "RoboSub 2026",
      caption: "Next Generation Underwater Robotics",
      description:
        "Dive into our most ambitious project yet - the RoboSub 2026 autonomous underwater vehicle. Featuring cutting-edge computer vision, advanced sensor fusion, and intelligent navigation systems, our latest submarine represents the pinnacle of student engineering excellence. Join us as we compete on the global stage with revolutionary technology designed to push the boundaries of underwater exploration.",
      link: "/robosub-2026",
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
    }, 10000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + carouselImages.length) % carouselImages.length,
    );
  };

  const touchStartX = useRef<number>(0);
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };
  const handleTouchEnd = (e: React.TouchEvent) => {
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 50) {
      if (diff > 0) nextSlide();
      else prevSlide();
    }
  };

  return (
    <div className="relative -mt-40">
      {/* Hero Section with Video Background */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden mt-[80px]">
        {/* YouTube Video Background */}
        <div className="absolute inset-0 z-0 ">
          {/* Gradient overlays for white/gray/red mix */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/40 via-gray-200/30 to-red-500/30 z-10" />
          <div className="absolute inset-0 bg-gradient-to-t from-white/50 via-transparent to-gray-100/20 z-10" />

          {/* YouTube Video Embed */}
          <iframe
            className="absolute top-1/2 left-1/2 w-[100vw] h-[56.25vw] min-h-[100vh] min-w-[177.77vh] -translate-x-1/2 -translate-y-1/2 pointer-events-none"
            src="https://www.youtube.com/embed/Lw0MAfOyMsE?autoplay=1&mute=1&loop=1&playlist=Lw0MAfOyMsE&controls=0&showinfo=0&rel=0&modestbranding=1&playsinline=1"
            title="Background Video"
            frameBorder="0"
            allow="autoplay; encrypted-media"
            allowFullScreen
          />

          {/* Animated particles overlay */}
          <div className="absolute inset-0 z-10 opacity-40">
            <div
              className="absolute w-3 h-3 bg-red-500 rounded-full animate-pulse"
              style={{ top: "20%", left: "10%", animationDelay: "0s" }}
            />
            <div
              className="absolute w-2 h-2 bg-blue-500 rounded-full animate-pulse"
              style={{ top: "50%", left: "80%", animationDelay: "1s" }}
            />
            <div
              className="absolute w-3 h-3 bg-white rounded-full animate-pulse"
              style={{ top: "70%", left: "30%", animationDelay: "2s" }}
            />
            <div
              className="absolute w-2 h-2 bg-red-400 rounded-full animate-pulse"
              style={{ top: "30%", left: "70%", animationDelay: "1.5s" }}
            />
            <div
              className="absolute w-3 h-3 bg-blue-400 rounded-full animate-pulse"
              style={{ top: "80%", left: "60%", animationDelay: "0.5s" }}
            />
          </div>
        </div>

        {/* Black Transparent Overlay - positioned before content */}
        <div className="absolute inset-0 bg-black/40 z-15" />

        {/* Hero Content */}
        <div className="relative z-20 w-full h-full flex items-center">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mt-auto pt-48">
              <motion.h1
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8 }}
                className="text-3xl md:text-5xl lg:text-6xl mb-2 text-gray-900 font-bold"
                style={{ fontFamily: "'Sequel Sans', sans-serif" }}
              >
                <span className="text-[#BD0C0D] text-glow-red"></span>
              </motion.h1>

              {/* Typing Effect */}
              <motion.div
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="mb-3 min-h-[60px] flex items-center"
              >
                <p
                  className="text-gray-800 font-semibold bg-white px-4 py-2 rounded-lg inline-block text-[15px]"
                  style={{ fontFamily: "'Archivo Black', sans-serif" }}
                >
                  {typedText}
                  <span className="inline-block w-1 h-5 bg-[#BD0C0D] ml-1 animate-pulse" />
                </p>
              </motion.div>

              {/* About Team Text */}
              <motion.p
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="mb-6 leading-relaxed max-w-md font-bold p-4 rounded-lg text-[#ffffff] text-[14px]"
                style={{ fontFamily: "'Secular One', sans-serif" }}
              >
                We are Team Black Pearl from Bangladesh University of
                Engineering and Technology (BUET), Competing in International
                Underwater Robotics and Surface Vessel Challenges — Driving
                Innovation Above and Beneath the Surface.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9, duration: 0.8 }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <Link to="/robosub-2026" className="block w-2/5">
                  <motion.div
                    whileHover={{
                      scale: 1.05,
                      boxShadow: "0 0 30px rgba(189, 12, 13, 0.8)",
                    }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-gradient-to-r from-[#BD0C0D] to-red-700 text-white px-8 py-3 rounded-full text-lg font-semibold shadow-lg text-center transition-all duration-300"
                    style={{ fontFamily: "'Sequel Sans', sans-serif" }}
                  >
                    Explore
                  </motion.div>
                </Link>
              </motion.div>
            </div>
          </div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              delay: 1,
              duration: 1,
              repeat: Infinity,
              repeatType: "reverse",
            }}
            className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <ChevronDown className="w-8 h-8 text-[#BD0C0D]" />
            </motion.div>
          </motion.div>
        </div>

        {/* Bottom Wave */}
        <div className="absolute bottom-[-1px] left-0 w-full overflow-hidden leading-[0] z-30">
          <svg
            className="relative block w-full h-[60px] md:h-[80px]"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
              fill="#f9fafb"
            ></path>
          </svg>
        </div>
      </section>

      {/* Our Goals and Contributions Section */}
      <section className="relative py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl text-gray-900 mb-6 font-bold">
              Our <span className="text-red-500">Missions</span> & Inspiration
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto mb-12">
            {/* Original Goal */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-gradient-to-br from-white to-gray-50 p-8 rounded-2xl border border-red-500/30 shadow-2xl"
            >
              <div className="flex items-center mb-6">
                <div className="bg-red-600 p-4 rounded-full mr-4">
                  <svg
                    className="w-8 h-8 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                </div>
                <h3 className="text-3xl text-gray-900 font-bold">
                  Our Missions Ahead
                </h3>
              </div>
              <p className="text-gray-700 text-lg leading-relaxed mb-4">
                 Team Black Pearl was formed with a bold vision — to represent
                Bangladesh University of Engineering and Technology on the
                global stage of underwater robotics through RoboSub 2026. Our
                mission is to design and develop a highly capable Autonomous
                Underwater Vehicle (AUV) that reflects innovation, precision
                engineering, and teamwork. In addition, we aim to showcase the
                talent and innovation of our students through participation in
                the International Student Design Competition for Safe and
                Affordable Ferries, where we contribute engineering solutions
                focused on safer, more efficient, and accessible water
                transportation. Beyond competition, we aim to build a
                sustainable robotics culture at BUET by creating opportunities
                for students to gain hands-on experience in marine robotics,
                artificial intelligence, embedded systems, and mechanical
                design. Through this journey, we strive to contribute to
                technological advancement in Bangladesh while pushing the
                boundaries of underwater autonomy.
              </p>
            </motion.div>

            {/* Our Contributions */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-gradient-to-br from-white to-gray-50 p-8 rounded-2xl border border-red-500/30 shadow-2xl"
            >
              <div className="flex items-center mb-6">
                <div className="bg-red-600 p-4 rounded-full mr-4">
                  <svg
                    className="w-8 h-8 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                    />
                  </svg>
                </div>
                <h3 className="text-3xl text-gray-900 font-bold">
                  Our Inspirations
                </h3>
              </div>
              <ul className="space-y-3">
                <li>
                  <p className="text-gray-700 text-lg leading-relaxed">
                    Team Black Pearl is inspired by a legacy of proven
                    engineering excellence. Our journey toward RoboSub 2026
                    builds upon a proud achievement — becoming World Champion at
                    the WFSA International Ferry Design Competition, where our
                    team designed a safe, efficient, and innovative ferry system
                    recognized on a global stage.
                  </p>
                </li>
                <li></li>
                <li>
                  <p className="text-gray-700 text-lg leading-relaxed">
                    As students of the Naval Architecture and Marine Engineering
                    Department at BUET, we bring a strong foundation in
                    hydrodynamics, stability, structural analysis, propulsion,
                    and marine systems design. Our transition into underwater
                    robotics is not a departure from our expertise — it is a
                    natural progression.
                  </p>
                </li>
                <li>
                  <p className="text-gray-700 text-lg leading-relaxed">
                    RoboSub 2026 represents the next step in our engineering
                    evolution. We are channeling our background in surface
                    vessel design into the development of a reliable,
                    intelligent, and well-integrated Autonomous Underwater
                    Vehicle. With the lessons of past excellence guiding us, we
                    are committed to innovation, precision, and continuous
                    improvement.
                  </p>
                </li>
                <li>
                  <p className="text-gray-700 text-lg leading-relaxed">
                    Our inspiration comes from what we have achieved — and our
                    motivation comes from how much further we can grow.
                  </p>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>

        {/* Bottom Wave */}
        <div className="absolute bottom-[-1px] left-0 w-full overflow-hidden leading-[0]">
          <svg
            className="relative block w-full h-[60px] md:h-[80px]"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
              fill="#ffffff"
            ></path>
          </svg>
        </div>
      </section>

      {/* Image Carousel Section */}
      <section
        className="relative h-screen overflow-hidden"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        {/* Full Background Image Slider */}
        <div className="absolute inset-0">
          {carouselImages.map((image, index) => (
            <motion.div
              key={index}
              initial={false}
              animate={{
                opacity: currentSlide === index ? 1 : 0,
                scale: currentSlide === index ? 1 : 1.1,
              }}
              transition={{ duration: 0.7 }}
              className="absolute inset-0"
            >
              <ImageWithFallback
                src={image.url}
                alt={image.caption}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/60 md:bg-gradient-to-r md:from-black/95 md:via-black/60 md:to-transparent" />
            </motion.div>
          ))}
        </div>

        {/* Content on Right Side */}
        <div className="relative z-10 h-full flex items-center">
          <div className="container mx-auto px-4">
            <div className="max-w-7xl mx-auto flex justify-center md:justify-end">
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="max-w-lg rounded-3xl p-6 md:p-8 shadow-2xl"
              >
                <motion.h3
                  key={`title-${currentSlide}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="text-xl md:text-2xl text-red-500 mb-2 font-bold"
                >
                  {carouselImages[currentSlide].title}
                </motion.h3>
                <motion.h2
                  key={`caption-${currentSlide}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="text-2xl md:text-3xl text-white mb-4 font-bold"
                >
                  {carouselImages[currentSlide].caption}
                </motion.h2>

                {/* Learn More Button */}
                <motion.a
                  key={`button-${currentSlide}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 }}
                  href={carouselImages[currentSlide].link}
                  whileHover={{
                    scale: 1.05,
                    boxShadow: "0 0 30px rgba(239, 68, 68, 0.8)",
                  }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-block bg-gradient-to-r from-red-600 to-red-700 text-white px-6 py-3 rounded-full text-base font-semibold shadow-lg transition-all duration-300 mb-6"
                >
                  Dive-in
                </motion.a>

                {/* Dots Indicator */}
                <div className="flex space-x-3">
                  {carouselImages.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentSlide(index)}
                      className={`h-3 rounded-full transition-all duration-300 ${
                        currentSlide === index
                          ? "bg-red-500 w-12"
                          : "bg-white/50 w-3"
                      }`}
                    />
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="hidden md:block absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-20 bg-white/90 hover:bg-red-600 text-gray-800 hover:text-white p-3 md:p-4 rounded-full transition-all duration-300 shadow-lg"
        >
          <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
        </button>
        <button
          onClick={nextSlide}
          className="hidden md:block absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-20 bg-white/90 hover:bg-red-600 text-gray-800 hover:text-white p-3 md:p-4 rounded-full transition-all duration-300 shadow-lg"
        >
          <ChevronRight className="w-5 h-5 md:w-6 md:h-6" />
        </button>
      </section>

      {/* What We Do Section */}
      <section className="relative py-20 bg-gradient-to-b from-blue-50 to-blue-100">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl text-gray-900 mb-4 font-bold">
              What We <span className="text-[#BD0C0D]">Do</span>
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto px-4">
            {[
              {
                title: "Autonomous Navigation",
                shortDesc:
                  "Advanced navigation algorithms using sensor fusion, SLAM, and machine learning.",
                fullDesc:
                  "The autonomous navigation system enables the underwater vehicle to move and perform tasks without human intervention. The navigation framework is developed using ROS (Robot Operating System) for communication, sensor integration, and control of the vehicle. The system processes data from onboard sensors to estimate the vehicle’s position, orientation, and motion in the underwater environment. Simulation and testing are conducted using Gazebo, allowing the team to evaluate navigation algorithms in a virtual underwater environment before real-world deployment. This approach helps improve reliability, accuracy, and mission performance of the autonomous underwater vehicle.",
                icon: "🧭",
                image:
                  "https://images.unsplash.com/photo-1738102483979-9dcf82b877f2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1bmRlcndhdGVyJTIwc3VibWFyaW5lJTIwbmF2aWdhdGlvbiUyMHNvbmFyfGVufDF8fHx8MTc3MjQ3MTk1NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
              },
              {
                title: "3d Model Design",
                shortDesc:
                  "Sophisticated image processing and object detection using deep learning.",
                fullDesc:
                  "3D modeling and structural visualization are carried out to represent the detailed design of the vessels. RhinoCeros is used for the interior layout and spatial arrangement of the ferry, ensuring efficient use of space and functional passenger areas. The main components of the underwater robot (AUV) are designed and assembled using SolidWorks to ensure precise mechanical integration. These models help in visualizing structural configuration, component placement, and maintenance accessibility. Accurate modeling also assists in manufacturing planning and design validation.",
                icon: "👁️",
                image:
                  "https://images.unsplash.com/photo-1742971500442-8fb8610dfbf5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHwzZCUyMG1vZGVsJTIwZGVzaWduJTIwZW5naW5lZXJpbmd8ZW58MXx8fHwxNzcyNDcxOTU1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
              },
              {
                title: "Control Engineering",
                shortDesc:
                  "Robust hardware and software integration for underwater operation.",
                fullDesc:
                  "Image processing is used to enable the underwater robot to detect and recognize objects during missions. The vision system captures underwater images and processes them using YOLOv11, a deep learning–based object detection algorithm. The model is trained and tested using datasets prepared and managed through Kaggle, which helps improve detection accuracy. Integration with ROS allows the vision system to communicate with other modules of the robot in real time. This system enables the AUV to identify mission targets and respond autonomously based on visual information.",
                icon: "⚙️",
                image:
                  "https://images.unsplash.com/photo-1631882456892-54a30e92fe4f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb250cm9sJTIwZW5naW5lZXJpbmclMjByb2JvdGljc3xlbnwxfHx8fDE3NzI0NzE5NTV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
              },
              {
                title: "Safe Ferry Design",
                shortDesc:
                  "Annual participation in RoboSub and international competitions.",
                fullDesc:
                  "Passenger safety is a primary focus of the ferry design. Key safety aspects such as stability, hydrostatics, maneuvering, damage stability, and seakeeping are carefully analyzed to ensure safe operation under various conditions. Additional safety features for fire protection, emergency evacuation, and passenger protection are incorporated into the design. Evacuation procedures and passenger flow are evaluated through simulation to ensure effective emergency response. The design follows IMO and SOLAS regulations to maintain international safety standards. Tools such as AutoCAD and Maxsurf(Stability, Hydrostatics, Maneuvering, Damage Stability, Seakeeping) are used for analysis, while aesthetic considerations are also maintained.",
                icon: "🏆",
                image:
                  "https://images.unsplash.com/photo-1629448992927-a6d1f5c47857?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmZXJyeSUyMGJvYXQlMjBkZXNpZ24lMjBvY2VhbnxlbnwxfHx8fDE3NzI0NzE5NTZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
              },
              {
                title: "Optimum Ferry Design",
                shortDesc:
                  "Cutting-edge research in underwater robotics and autonomous systems.",
                fullDesc:
                  "The ferry is designed using the ship design spiral approach, allowing iterative improvement of design parameters. Key vessel particulars are optimized based on resistance, power requirements, and overall cost efficiency. Hydrodynamic performance is analyzed to minimize energy consumption while maintaining required operational speed. Special attention is given to the selection and optimization of the propulsion system for efficient performance. The overall goal is to achieve a balanced design that ensures safety, efficiency, and economic feasibility.",
                icon: "🔬",
                image:
                  "https://images.unsplash.com/photo-1737019331149-3ebae76b8d58?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvcHRpbWl6ZWQlMjBmZXJyeSUyMHZlc3NlbCUyMG1vZGVybnxlbnwxfHx8fDE3NzI0NzE5NTZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
              },
              {
                title: "Image Processing",
                shortDesc:
                  "Hands-on learning opportunities for engineering students.",
                fullDesc:
                  " The control system of the underwater vehicle is developed using a nonlinear PID control technique to ensure stable and accurate motion in underwater environments. The controller continuously regulates thruster inputs to maintain desired depth, orientation, and position during operation. To support development and testing, simulation and visualization tools are extensively used. ROS (Robot Operating System) provides the main framework for communication and control integration. The vehicle behavior is tested in Gazebo and UUV Simulator, while RViz is used for real-time visualization of sensor data and vehicle motion. Programming and development are carried out using Visual Studio Code (VS Code).",
                icon: "🎓",
                image:
                  "https://images.unsplash.com/photo-1752080193173-25f318f9cafb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbWFnZSUyMHByb2Nlc3NpbmclMjBjb21wdXRlciUyMHZpc2lvbnxlbnwxfHx8fDE3NzI0NzE5NTZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative"
              >
                <motion.div
                  whileHover={{ scale: 1.02, y: -5 }}
                  onClick={() =>
                    setExpandedCard(expandedCard === index ? null : index)
                  }
                  className="bg-white rounded-xl shadow-xl border-2 border-gray-200 hover:border-[#BD0C0D] transition-all duration-300 cursor-pointer h-full overflow-hidden"
                >
                  {/* Image Section */}
                  <div className="relative h-48 overflow-hidden">
                    <ImageWithFallback
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-blue-950/60 to-transparent" />

                    {/* Icon in Blue Box */}
                    <div className="absolute top-4 left-4 bg-blue-600 p-4 rounded-lg shadow-xl">
                      <div className="text-3xl">{item.icon}</div>
                    </div>
                  </div>

                  {/* Content Section */}
                  <div className="p-6 md:p-8">
                    <div className="flex items-start justify-between mb-4">
                      <h3 className="text-xl md:text-2xl text-gray-900 font-bold flex-1">
                        {item.title}
                      </h3>
                      <motion.div
                        animate={{ rotate: expandedCard === index ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                        className="ml-2"
                      >
                        {expandedCard === index ? (
                          <Minus className="w-5 h-5 md:w-6 md:h-6 text-[#BD0C0D]" />
                        ) : (
                          <Plus className="w-5 h-5 md:w-6 md:h-6 text-[#BD0C0D]" />
                        )}
                      </motion.div>
                    </div>
                    <p className="text-gray-700 leading-relaxed text-sm md:text-base">
                      {expandedCard === index ? item.fullDesc : item.shortDesc}
                    </p>
                    <AnimatePresence>
                      {expandedCard === index && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3 }}
                          className="mt-4 pt-4 border-t border-gray-300"
                        >
                          <p className="text-xs md:text-sm text-gray-500 italic">
                            Click to collapse
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
