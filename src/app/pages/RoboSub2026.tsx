import React from 'react';
import { motion } from "motion/react";
import {
  Users,
  Award,
  Target,
  Wrench,
  Eye,
  GraduationCap,
  Linkedin,
  Github,
  Mail,
} from "lucide-react";
import { Link } from "react-router";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import Footer from "../components/Footer";

// Faculty member images
import sonarExpert from "../../assets/4193917e4e269e831297c077cb70568fcfa2e442.png";
import roboticsExpert from "../../assets/8dc30afa90a93ce099f137c93f3367932cba142e.png";
import coordinator from "../../assets/3983d070a611f4e52c6e6adc35af9d3bbb06e7e3.png";

// RoboSub 2026 logo
import robosubLogo from "../../assets/cb61073f0ec258356897d0b660b0390f30abdf64.png";

// RoboSub vessel design
import vesselDesign from "../../assets/aae2be78f445061d9e19a68055e1d61738c56aa0.png";

const RoboSub2026 = () => {
  return (
    <div className="min-h-screen -mt-20">
      {/* Hero Section with Solid Black Background */}
      <section className="relative h-[80vh] overflow-hidden bg-[#0e318f]">
        {/* RoboSub Logo and Text Overlay - Centered */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30 text-center w-full px-4">
          <motion.img
            src={robosubLogo}
            alt="RoboSub"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="h-32 md:h-48 lg:h-56 w-auto mx-auto mb-8"
          />

          {/* Transparent background with text */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="bg-black/40 backdrop-blur-md px-8 py-5 md:px-16 md:py-8 rounded-2xl border border-white/20 inline-block max-w-4xl"
          >
            <p className="text-white text-xl md:text-3xl lg:text-4xl font-semibold">
              <span className="text-red-400">Team Black Pearl</span> is
              participating in{" "}
              <span className="text-cyan-400">RoboSub 2026</span>
            </p>
          </motion.div>
        </div>

        {/* Bottom Wave */}
        <div className="absolute bottom-[-1px] left-0 w-full overflow-hidden leading-[0] z-40">
          <svg
            className="relative block w-full h-[60px] md:h-[80px]"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
              fill="#eff6ff"
            ></path>
          </svg>
        </div>
      </section>

      {/* Project Overview */}

      {/* Faculty Advisors Section */}

      {/* Team Members Section */}

      {/* Key Features */}

      {/* Video Section */}
      <section className="py-20 bg-gradient-to-b from-blue-50 to-blue-100 relative overflow-hidden">
        {/* Animated Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "radial-gradient(circle at 2px 2px, rgba(37, 99, 235, 0.15) 1px, transparent 0)",
              backgroundSize: "40px 40px",
            }}
          />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-7xl mx-auto">
            {/* Title */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-6xl font-bold text-blue-950 mb-4">
                Our <span className="text-cyan-600">RoboSub'2026</span> Vessel
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-red-500 mx-auto rounded-full" />
            </motion.div>

            {/* Vessel Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative max-w-5xl mx-auto"
            >
              {/* Glowing border effect */}
              <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500/30 via-blue-500/30 to-red-500/30 rounded-3xl blur-2xl" />

              {/* Image container */}
              <div className="relative bg-gradient-to-br from-blue-100/80 to-white/80 backdrop-blur-sm rounded-2xl p-8 border border-cyan-400/30 shadow-2xl">
                <img
                  src={vesselDesign}
                  alt="RoboSub 2026 Vessel Design"
                  className="w-full h-auto rounded-lg"
                />

                {/* Decorative corners */}
                <div className="absolute top-2 left-2 w-16 h-16 border-t-2 border-l-2 border-cyan-600 rounded-tl-lg" />
                <div className="absolute top-2 right-2 w-16 h-16 border-t-2 border-r-2 border-cyan-600 rounded-tr-lg" />
                <div className="absolute bottom-2 left-2 w-16 h-16 border-b-2 border-l-2 border-red-500 rounded-bl-lg" />
                <div className="absolute bottom-2 right-2 w-16 h-16 border-b-2 border-r-2 border-red-500 rounded-br-lg" />
              </div>
            </motion.div>

            {/* Description */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-12 max-w-4xl mx-auto text-center"
            >
              <p className="text-blue-900 text-lg md:text-xl leading-relaxed mb-6">
                Our cutting-edge autonomous underwater vehicle (AUV) represents
                the culmination of months of intensive design, engineering, and
                innovation. Featuring advanced sensor arrays, modular component
                integration, and state-of-the-art propulsion systems.
              </p>
              <p className="text-blue-800 text-base md:text-lg leading-relaxed">
                Built to compete at the highest level in the international
                RoboSub competition, this vessel embodies Team Black Pearl's
                commitment to excellence in marine robotics and autonomous
                systems.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="relative h-screen overflow-hidden">
        {/* YouTube Video Background */}
        <div className="absolute inset-0">
          <iframe
            className="absolute top-1/2 left-1/2 w-[300%] h-[300%] -translate-x-1/2 -translate-y-1/2 pointer-events-none"
            src="https://www.youtube.com/embed/ITj-qZL8_3k?autoplay=1&mute=1&loop=1&playlist=ITj-qZL8_3k&controls=0&showinfo=0&rel=0&modestbranding=1"
            title="RoboSub 2026 Team Video"
            allow="autoplay; encrypted-media"
            frameBorder="0"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-950/90 via-blue-950/60 to-transparent" />
        </div>

        {/* Content on Right Side */}
        <div className="relative z-10 h-full flex items-center">
          <div className="container mx-auto px-4">
            <div className="max-w-7xl mx-auto flex justify-end">
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="max-w-lg bg-gradient-to-br from-blue-900/20 to-blue-800/30 backdrop-blur-xl rounded-3xl p-6 md:p-8 border border-white/20 shadow-2xl"
              >
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className="text-3xl md:text-5xl text-white mb-4 font-bold"
                >
                  Our Journey to{" "}
                  <span className="text-red-500">Excellence</span>
                </motion.h2>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                  className="text-base md:text-lg text-blue-100 mb-4 leading-relaxed"
                >
                  Experience the dedication and innovation of BUET RoboSub team
                  as we prepare for the 2026 international competition. From
                  conceptual design to real-world testing, witness our
                  commitment to pushing the boundaries of autonomous underwater
                  robotics.
                </motion.p>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 }}
                  className="text-sm md:text-base text-blue-200 mb-6 leading-relaxed"
                >
                  This video showcases our team's hard work, technical
                  expertise, and passion for underwater robotics. Every
                  challenge we face brings us closer to our goal of competing at
                  the highest level in RoboSub 2026.
                </motion.p>

                <motion.a
                  href="https://www.youtube.com/watch?v=ITj-qZL8_3k"
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 }}
                  whileHover={{
                    scale: 1.05,
                    boxShadow: "0 0 30px rgba(220, 38, 38, 0.8)",
                  }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-500 text-white px-6 py-3 rounded-full font-semibold shadow-xl transition-all"
                >
                  <Eye className="w-4 h-4" />
                  Watch Full Video
                </motion.a>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Electrical Section */}
      <section className="py-20 bg-gradient-to-b from-blue-50 to-blue-100">
        <div className="container mx-auto px-4">
          {/* Section Heading */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-6xl text-blue-950 font-bold mb-4">
              Dubojan <span className="text-red-600">Features</span>
            </h2>
          </motion.div>

          <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
            {/* Text Left */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl md:text-5xl text-gray-900 mb-6 font-bold">
                <span className="text-red-600">Electrical</span> Subsystems
              </h2>
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                Our electrical team designs and implements cutting-edge power
                distribution systems, custom PCB designs, and advanced sensor
                integration. We develop robust circuits that can withstand the
                harsh underwater environment while maintaining optimal
                performance and energy efficiency.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                From battery management systems to motor controllers, our
                electrical infrastructure forms the backbone of RoboSub 2026. We
                utilize state-of-the-art components and innovative design
                approaches to ensure reliability and precision in every mission.
              </p>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-red-600 mr-2 text-xl">⚡</span>
                  <span>Custom PCB design with waterproof enclosures</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 mr-2 text-xl">⚡</span>
                  <span>Advanced power management and distribution</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 mr-2 text-xl">⚡</span>
                  <span>Multi-sensor integration and signal processing</span>
                </li>
              </ul>
            </motion.div>

            {/* Image Right */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-red-600/20">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1517420704952-d9f39e95b43e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVjdHJpY2FsJTIwY2lyY3VpdCUyMGJvYXJkJTIwcm9ib3RpY3N8ZW58MXx8fHwxNzcyMzM3NzI2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Electrical Systems"
                  className="w-full h-[400px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-950/40 to-transparent" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Software Section */}
      <section className="py-20 bg-gradient-to-b from-blue-100 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
            {/* Image Left */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative order-2 md:order-1"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-blue-600/20">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1625459201773-9b2386f53ca2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2Z0d2FyZSUyMGRldmVsb3BtZW50JTIwY29kZSUyMHByb2dyYW1taW5nfGVufDF8fHx8MTc3MjMzNzcyNnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Software Development"
                  className="w-full h-[400px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-950/40 to-transparent" />
              </div>
            </motion.div>

            {/* Text Right */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="order-1 md:order-2"
            >
              <h2 className="text-4xl md:text-5xl text-gray-900 mb-6 font-bold">
                <span className="text-blue-600">Software</span> Subsystem
              </h2>
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                Our software team develops intelligent autonomous systems using
                ROS2, computer vision, and advanced machine learning algorithms.
                We create sophisticated navigation systems, object detection
                pipelines, and real-time decision-making frameworks that enable
                RoboSub 2026 to operate independently in complex underwater
                environments.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                Leveraging Python, C++, and cutting-edge AI frameworks, we build
                modular, scalable software architectures that process sensor
                data, execute mission tasks, and adapt to dynamic challenges
                with precision and reliability.
              </p>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2 text-xl">💻</span>
                  <span>ROS2-based autonomous navigation and control</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2 text-xl">💻</span>
                  <span>Computer vision with YOLO and OpenCV</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2 text-xl">💻</span>
                  <span>Real-time sensor fusion and path planning</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Design Section */}
      <section className="py-20 bg-gradient-to-b from-blue-50 to-blue-100">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
            {/* Text Left */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl md:text-5xl text-gray-900 mb-6 font-bold">
                <span className="text-green-600">Mechanical </span>Subsystem
              </h2>
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                Our design team creates innovative mechanical solutions using
                advanced CAD software, computational fluid dynamics, and
                structural analysis. We optimize hull geometry for hydrodynamic
                efficiency, design robust mounting systems for electronics and
                sensors, and engineer modular components for easy maintenance
                and upgrades.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                From concept sketches to final manufacturing, we employ
                cutting-edge tools like SolidWorks, ANSYS, and 3D printing to
                bring RoboSub 2026 to life. Every component is meticulously
                designed to withstand underwater pressure while minimizing
                weight and drag.
              </p>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-green-600 mr-2 text-xl">🔧</span>
                  <span>Hydrodynamic hull optimization with CFD</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2 text-xl">🔧</span>
                  <span>Modular frame design for component integration</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2 text-xl">🔧</span>
                  <span>3D-printed parts and CNC machining</span>
                </li>
              </ul>
            </motion.div>

            {/* Image Right */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-green-600/20">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1769149068959-b11392164add?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbmdpbmVlcmluZyUyMENBRCUyMGRlc2lnbiUyMGJsdWVwcmludHxlbnwxfHx8fDE3NzIzMzc3MjZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Engineering Design"
                  className="w-full h-[400px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-950/40 to-transparent" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Meet Our Team Button Section */}
      <section className="py-20 bg-gradient-to-b from-blue-100 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl text-gray-900 mb-6 font-bold"
            >
              The People Behind{" "}
              <span className="text-red-600">RoboSub 2026</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-gray-700 text-lg mb-10 leading-relaxed"
            ></motion.p>
            <Link to="/members">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 0 40px rgba(220, 38, 38, 0.5)",
                }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-3 bg-gradient-to-r from-red-600 to-red-700 text-white px-10 py-5 rounded-full text-xl font-semibold shadow-2xl transition-all duration-300 cursor-pointer"
              >
                <Users className="w-6 h-6" />
                Our Team
              </motion.div>
            </Link>
          </div>
        </div>
      </section>

      {/* Project Overview */}

      {/* Faculty Advisors Section */}

      {/* Team Members Section */}

      {/* Key Features */}

      {/* Video Section */}

      {/* Electrical Section */}

      {/* Software Section */}

      {/* Design Section */}

      {/* Meet Our Team Button Section */}

      {/* Footer */}
      <Footer marqueeBackground="bg-gradient-to-b from-blue-100 to-blue-50" />
    </div>
  );
};

export default RoboSub2026;
