import React from 'react';
import { motion } from "motion/react";
import { Users, Award, Mail, Linkedin } from "lucide-react";
import { Link } from "react-router";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import Footer from "../components/Footer";

// Team member images
import abuRaselImage from "../../assets/edb076d15495cd58083ddf60d02315327d8071c5.png";
import jubairAwalImage from "../../assets/ba7a6825fa3fa0f855297c1eaeec5ca3f9617cbb.png";
import affifOmeoImage from "../../assets/08d5f245176ebb6094b85ec1502d460daacd444c.png";
import mahmudulShahedImage from "../../assets/2995f8845b82073e7bbbcac5d9e14a9f00cc20a4.png";
import abdulKaderImage from "../../assets/4c9bf72b01b54f55c3ca6f421c3c80cce92b3242.png";
import atiqurRahmanImage from "../../assets/73537251e3ab1a2739a16785ff890d42fa727f43.png";
import safayetShishirImage from "../../assets/fdf11604b6534a82987c060b355d8f81f76b6356.png";
import kawsarZidanImage from "../../assets/8bdd34f0ac64f15a25a85848b1ac26b945b98abe.png";
import teamHeroImage from "../../assets/fb175d9f4423ee7dca7eda6d4534e340113a400d.png";
import teamPhotoWithFlag from "../../assets/fff8a819f598251b9a912707ba9df8795776f52d.png";

const WFSA2025Team = () => {
  const facultyAdvisor = {
    name: "Dr. Zobair Ibn Awal",
    role: "Faculty Advisor",
    department: "Department of Naval Architecture & Marine Engineering",
    image: jubairAwalImage,
    email: "mailto:jubair.awal@buet.ac.bd",
    linkedin: "https://linkedin.com/in/jubair-awal",
  };

  const teamMembers = [
    {
      name: "Abu Rasel",
      role: "Hull Design and 3D Design of the Vessel",
      department: "Naval Architecture & Marine Engineering",
      image: abuRaselImage,
      email: "mailto:abu.rasel@buet.ac.bd",
      linkedin: "https://linkedin.com/in/abu-rasel",
    },
    {
      name: "Affif Bin Habib Omeo",
      role: "FEM, CFD, Safety Analysis",
      department: "Naval Architecture & Marine Engineering",
      image: affifOmeoImage,
      email: "mailto:affif.omeo@buet.ac.bd",
      linkedin: "https://linkedin.com/in/affif-omeo",
    },
    {
      name: "Mahmudul Hasan Shahed",
      role: "Weight Analysis and Cost Analysis",
      department: "Naval Architecture & Marine Engineering",
      image: mahmudulShahedImage,
      email: "mailto:mahmudul.shahed@buet.ac.bd",
      linkedin: "https://linkedin.com/in/mahmudul-shahed",
    },
    {
      name: "Md Abdul Kader",
      role: "Stability Analysis, Power and Propulsion",
      department: "Naval Architecture & Marine Engineering",
      image: abdulKaderImage,
      email: "mailto:abdul.kader@buet.ac.bd",
      linkedin: "https://linkedin.com/in/abdul-kader",
    },
    {
      name: "Md Atiqur Rahman",
      role: "Hydrostatics, Stability Analysis, Power",
      department: "Naval Architecture & Marine Engineering",
      image: atiqurRahmanImage,
      email: "mailto:atiqur.rahman@buet.ac.bd",
      linkedin: "https://linkedin.com/in/atiqur-rahman",
    },
    {
      name: "Md Safayet Hossain Shishir",
      role: "Team Coordination, Scantling Calculation and Final Report",
      department: "Naval Architecture & Marine Engineering",
      image: safayetShishirImage,
      email: "mailto:safayet.shishir@buet.ac.bd",
      linkedin: "https://linkedin.com/in/safayet-shishir",
    },
    {
      name: "Md Kawsar Mahmud Zidan",
      role: "General Arrangement Drawing, Safety",
      department: "Naval Architecture & Marine Engineering",
      image: kawsarZidanImage,
      email: "mailto:kawsar.zidan@buet.ac.bd",
      linkedin: "https://linkedin.com/in/kawsar-zidan",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-blue-100 -mt-20">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <ImageWithFallback
            src={teamPhotoWithFlag}
            alt="WFSA 2025 Team - Team Black Pearl with Bangladesh Flag"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-blue-950/85 via-blue-950/75 to-blue-900/85" />
        </div>

        <div className="relative z-10 text-center px-4 max-w-4xl">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="mb-6"
          >
            <Award className="w-20 h-20 md:w-24 md:h-24 text-red-500 mx-auto" />
          </motion.div>

          <motion.h1
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl text-white mb-6 font-bold"
          >
            WFSA 2025 <span className="text-red-500">Team</span>
          </motion.h1>

          <motion.p
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-2xl md:text-3xl text-blue-200 mb-4"
          >
            Meet the brilliant minds behind our 1st place achievement
          </motion.p>

          <motion.p
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl text-white font-semibold"
          >
            Team Black Pearl - Bangladesh University of Engineering and
            Technology
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
              fill="#f9fafb"
            ></path>
          </svg>
        </div>
      </section>

      {/* Team Introduction */}
      <section className="py-16 bg-gray-50"></section>

      {/* Faculty Advisor Section */}
      <section className="py-12 bg-gradient-to-b from-gray-50 to-blue-50">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl text-gray-900 text-center mb-12 font-bold"
          >
            Faculty <span className="text-red-500">Advisor</span>
          </motion.h2>

          <div className="max-w-md mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="bg-white rounded-2xl shadow-xl overflow-hidden border-2 border-red-500/30"
            >
              {/* Advisor Photo */}
              <div className="relative h-80 bg-gradient-to-br from-blue-900 to-blue-700 overflow-hidden">
                <ImageWithFallback
                  src={facultyAdvisor.image}
                  alt={facultyAdvisor.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-950/80 via-transparent to-transparent" />
              </div>

              {/* Advisor Info */}
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {facultyAdvisor.name}
                </h3>
                <p className="text-red-600 font-semibold mb-2 text-lg">
                  {facultyAdvisor.role}
                </p>
                <p className="text-sm text-gray-600 mb-6">
                  {facultyAdvisor.department}
                </p>

                {/* Social Links */}
                <div className="flex gap-3 pt-4 border-t border-gray-200 justify-center">
                  <motion.a
                    href={facultyAdvisor.email}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-12 h-12 bg-red-600 text-white rounded-full flex items-center justify-center hover:bg-red-700 transition-colors"
                    aria-label="Email"
                  >
                    <Mail className="w-6 h-6" />
                  </motion.a>
                  <motion.a
                    href={facultyAdvisor.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="w-6 h-6" />
                  </motion.a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Team Members Grid */}
      <section className="py-20 bg-gradient-to-b from-blue-50 to-blue-100">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl text-gray-900 text-center mb-12 font-bold"
          >
            Team <span className="text-red-500">Members</span>
          </motion.h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="bg-white rounded-2xl shadow-xl overflow-hidden border border-red-500/20"
              >
                {/* Member Photo */}
                <div className="relative h-64 bg-gradient-to-br from-blue-900 to-blue-700 overflow-hidden">
                  <ImageWithFallback
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-950/80 via-transparent to-transparent" />
                </div>

                {/* Member Info */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {member.name}
                  </h3>
                  <p className="text-red-600 font-semibold mb-2">
                    {member.role}
                  </p>
                  <p className="text-sm text-gray-600 mb-4">
                    {member.department}
                  </p>

                  {/* Social Links */}
                  <div className="flex gap-3 pt-4 border-t border-gray-200">
                    <motion.a
                      href={member.email}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-10 h-10 bg-red-600 text-white rounded-full flex items-center justify-center hover:bg-red-700 transition-colors"
                      aria-label="Email"
                    >
                      <Mail className="w-5 h-5" />
                    </motion.a>
                    <motion.a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors"
                      aria-label="LinkedIn"
                    >
                      <Linkedin className="w-5 h-5" />
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Stats */}

      {/* Back to WFSA 2025 CTA */}
      <section className="py-16 bg-blue-50">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl md:text-3xl text-gray-900 mb-6 font-bold">
              Learn More About Our <span className="text-red-500">Project</span>
            </h3>
            <Link to="/wfsa-2025">
              <motion.button
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 0 30px rgba(239, 68, 68, 0.8)",
                }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-red-600 to-red-700 text-white px-10 py-4 rounded-full text-lg font-semibold shadow-lg transition-all duration-300"
              >
                Back to WFSA 2025 Project
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default WFSA2025Team;
