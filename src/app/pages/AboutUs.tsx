import React from "react";
import { motion } from "motion/react";
import { Users, Target, Award, Calendar } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import Footer from "../components/Footer";
import Gallery from "../components/Gallery";
import teamPhoto from "../../assets/4e2900d28fd2aad54a10ae7ebc3c636b1541933a.png";
import wfsa2024Image from "../../assets/eff451377b7f7d289ff70934cd7e97e5ade6807f.png";
import wfsa2025Image from "../../assets/6c633fc660dadec2ff14a15b07465f89d9217248.png";
import wfsa2026Image from "../../assets/21f2756d1a1801620ce417b4c8ea913032faa951.png";

const AboutUs = () => {
  const milestones = [
    {
      year: "2018",
      event: "Team Founded",
      description:
        "Established as a university robotics team with 12 founding members passionate about underwater exploration.",
    },
    {
      year: "2019",
      event: "First Competition",
      description:
        "Participated in our first RoboSub competition, gaining invaluable experience and placing 15th.",
    },
    {
      year: "2020",
      event: "Major Upgrade",
      description:
        "Complete system redesign with new sensors, computer vision, and control algorithms.",
    },
    {
      year: "2021",
      event: "Top 10 Finish",
      description:
        "Achieved 8th place at RoboSub International, marking a significant milestone for the team.",
    },
    {
      year: "2022",
      event: "Innovation Award",
      description:
        "Received the Innovation in Design award for our novel approach to acoustic localization.",
    },
    {
      year: "2023",
      event: "Top 5 Achievement",
      description:
        "Secured 4th place overall and won the Best Technical Paper award at the competition.",
    },
    {
      year: "2024",
      event: "Current Season",
      description:
        "Developing next-generation AUV with AI-powered navigation and advanced manipulation capabilities.",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-blue-100 -mt-20">
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center justify-center overflow-hidden mb-0">
        <div className="absolute inset-0">
          <img
            src={teamPhoto}
            alt="BUET RoboSub Team"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-blue-900" />
        </div>
        <div className="relative z-20 text-center px-4">
          <motion.h1
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl text-white mb-4 font-bold"
          >
            About <span className="text-yellow-300">Us</span>
          </motion.h1>
          <motion.p
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-blue-100"
          >
            Innovating the future of underwater robotics
          </motion.p>
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
              fill="#eff6ff"
            ></path>
          </svg>
        </div>
      </section>

      {/* Team Description Section */}
      <section className="py-20 bg-gradient-to-b from-white to-blue-100">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <div className="bg-white p-8 md:p-12 rounded-2xl shadow-2xl border-2 border-red-500/30">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-center"
              >
                <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                  Team Black Pearl from Bangladesh University of Engineering and
                  Technology (BUET) is a team mainly formed by students of the
                  Naval Architecture & Marine Engineering Department, working on
                  surface and underwater vehicles. With previous experience
                  competing on national and international stages, we are
                  passionate about demonstrating our excellence and innovation
                  in the maritime engineering sector.
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Our Journey Section */}
      <section className="py-20 bg-gradient-to-b from-blue-50 to-blue-100">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl text-center mb-16 text-gray-900 font-bold"
          >
            Our <span className="text-red-500">Journey</span>
          </motion.h2>

          {/* WEFSA 2023 - Text Left, Image Right */}
          <div className="mb-32">
            <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
              {/* Text Left */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h3 className="text-4xl md:text-5xl text-gray-900 mb-6 font-bold">
                  WFSA <span className="text-red-600">2024</span>
                </h3>
                <p className="text-gray-700 text-lg leading-relaxed mb-6">
                  In the 2023–2024 competition, Team Black Pearl achieved Second
                  Place with "Black Pearl," an electric-powered Ro-Pax ferry
                  designed for the Niger River route from Onitsha to Ndoni and
                  Idah in Nigeria. The ferry accommodates 200 passengers and 20
                  vehicles and features an Aluminium-5086 lightweight structure
                  suitable for shallow-draft river operation.
                </p>
                <p className="text-gray-700 text-lg leading-relaxed mb-6">
                  The design uses an azimuth propulsion system with a bow
                  thruster for enhanced maneuverability and integrates
                  perovskite solar cells and hydrokinetic turbines for energy
                  efficiency, along with a gyrostabilizer to improve passenger
                  comfort.
                </p>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <Award className="text-red-600 mr-3 mt-1 w-5 h-5 flex-shrink-0" />
                    <span>
                      <strong className="text-red-600">2nd Place</strong> -
                      Silver Medal
                    </span>
                  </li>
                  <li className="flex items-start">
                    <Target className="text-red-600 mr-3 mt-1 w-5 h-5 flex-shrink-0" />
                    <span>
                      <strong className="text-red-600">
                        Electric Ro-Pax Ferry
                      </strong>{" "}
                      - "Black Pearl"
                    </span>
                  </li>
                  <li className="flex items-start">
                    <Users className="text-red-600 mr-3 mt-1 w-5 h-5 flex-shrink-0" />
                    <span>200 passengers & 20 vehicles capacity</span>
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
                    src={wfsa2024Image}
                    alt="WEFSA 2023 Competition"
                    className="w-full h-[400px] object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-950/40 to-transparent" />
                </div>
              </motion.div>
            </div>
          </div>

          {/* WEFSA 2024 - Text Right, Image Left */}
          <div className="mb-32 bg-gradient-to-b from-blue-50 to-blue-100 -mx-4 px-4 py-20">
            <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
              {/* Image Left */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="relative order-2 md:order-1"
              >
                <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-red-600/20">
                  <ImageWithFallback
                    src={wfsa2025Image}
                    alt="WEFSA 2024 Competition"
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
                <h3 className="text-4xl md:text-5xl text-gray-900 mb-6 font-bold">
                  WFSA <span className="text-red-600">2025</span>
                </h3>
                <p className="text-gray-700 text-lg leading-relaxed mb-6">
                  In the 2024–2025 competition, Team Black Pearl secured First
                  Place by designing "Naija Spirit," an electric ferry for the
                  Lagos Inland Waterway in Lagos, Nigeria. The vessel is
                  designed to carry 200 passengers between the Ikorodu terminal
                  and CMS.
                </p>
                <p className="text-gray-700 text-lg leading-relaxed mb-6">
                  The propulsion system is primarily battery-powered, with a
                  hydrogen fuel cell for emergency propulsion. To improve
                  sustainability and energy efficiency, the design incorporates
                  perovskite solar cells, a hydrokinetic turbine, and a
                  propeller-based power regeneration system, creating a balanced
                  solution focused on safety, affordability, and sustainable
                  urban transport.
                </p>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <Award className="text-red-600 mr-3 mt-1 w-5 h-5 flex-shrink-0" />
                    <span>
                      <strong className="text-red-600">
                        1st Place Overall
                      </strong>{" "}
                      - WFSA World Champions 2025
                    </span>
                  </li>
                  <li className="flex items-start">
                    <Target className="text-red-600 mr-3 mt-1 w-5 h-5 flex-shrink-0" />
                    <span>
                      <strong className="text-red-600">Electric Ferry</strong> -
                      "Naija Spirit"
                    </span>
                  </li>
                  <li className="flex items-start">
                    <Users className="text-red-600 mr-3 mt-1 w-5 h-5 flex-shrink-0" />
                    <span>Hydrogen fuel cell & battery hybrid system</span>
                  </li>
                </ul>
              </motion.div>
            </div>
          </div>

          {/* WEFSA 2025 - Text Left, Image Right */}
          <div className="mb-0">
            <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
              {/* Text Left */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h3 className="text-4xl md:text-5xl text-gray-900 mb-6 font-bold">
                  WFSA <span className="text-red-600">2026</span>
                </h3>
                <p className="text-gray-700 text-lg leading-relaxed mb-6">
                  In the 2025–2026 competition, Team Black Pearl secured Third
                  Place with "Niger Drift," a CNG-powered ferry designed for the
                  Lokoja–Onitsha route on the Niger River. The vessel carries
                  200 passengers along with personal and market cargo,
                  supporting regional trade and connectivity.
                </p>
                <p className="text-gray-700 text-lg leading-relaxed mb-6">
                  The design adopts CNG propulsion as a cleaner and
                  cost-effective alternative to diesel, supplemented by an
                  emergency battery system, solar cells, and a hydrokinetic
                  turbine, while maintaining optimized hull design for safe
                  shallow-water operation.
                </p>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <Award className="text-red-600 mr-3 mt-1 w-5 h-5 flex-shrink-0" />
                    <span>
                      <strong className="text-red-600">3rd Place</strong> -
                      Bronze Medal
                    </span>
                  </li>
                  <li className="flex items-start">
                    <Target className="text-red-600 mr-3 mt-1 w-5 h-5 flex-shrink-0" />
                    <span>
                      <strong className="text-red-600">
                        CNG-Powered Ferry
                      </strong>{" "}
                      - "Niger Drift"
                    </span>
                  </li>
                  <li className="flex items-start">
                    <Users className="text-red-600 mr-3 mt-1 w-5 h-5 flex-shrink-0" />
                    <span>200 passengers & cargo capacity</span>
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
                    src={wfsa2026Image}
                    alt="WEFSA 2026 Competition"
                    className="w-full h-[400px] object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-950/40 to-transparent" />
                </div>
              </motion.div>
            </div>
          </div>

          {/* RoboSub 2026 - Text Right, Image Left */}
          <div className="mt-32 bg-gradient-to-b from-blue-50 to-blue-100 -mx-4 px-4 py-20">
            <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
              {/* Image Left */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="relative order-2 md:order-1"
              >
                <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-red-600/20">
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1754297813553-43eb3a9f65a4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1bmRlcndhdGVyJTIwcm9ib3RpY3MlMjBzdWJtYXJpbmUlMjBjb21wZXRpdGlvbnxlbnwxfHx8fDE3NzMyNTUwODh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                    alt="RoboSub 2026 Competition"
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
                <h3 className="text-4xl md:text-5xl text-gray-900 mb-6 font-bold">
                  RoboSub <span className="text-red-600">2026</span>
                </h3>
                <p className="text-gray-700 text-lg leading-relaxed mb-6">
                  Transitioning from surface vessel excellence to underwater
                  robotics innovation, Team Black Pearl is embarking on its most
                  ambitious journey yet - competing in RoboSub 2026. This
                  international autonomous underwater vehicle (AUV) competition
                  represents a new frontier for our team.
                </p>
                <p className="text-gray-700 text-lg leading-relaxed mb-6">
                  Our RoboSub 2026 project features cutting-edge computer vision
                  systems, advanced sensor fusion technology, and intelligent
                  navigation algorithms. We are developing an autonomous
                  submarine capable of completing complex underwater tasks
                  including object detection, path navigation, and precision
                  manipulation.
                </p>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <Target className="text-red-600 mr-3 mt-1 w-5 h-5 flex-shrink-0" />
                    <span>
                      <strong className="text-red-600">
                        First International AUV Competition
                      </strong>{" "}
                      for Team Black Pearl
                    </span>
                  </li>
                  <li className="flex items-start">
                    <Users className="text-red-600 mr-3 mt-1 w-5 h-5 flex-shrink-0" />
                    <span>Competing against top universities worldwide</span>
                  </li>
                  <li className="flex items-start">
                    <Award className="text-red-600 mr-3 mt-1 w-5 h-5 flex-shrink-0" />
                    <span>
                      <strong className="text-red-600">
                        Advanced AI & Computer Vision
                      </strong>{" "}
                      Systems
                    </span>
                  </li>
                </ul>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <Gallery />

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default AboutUs;
