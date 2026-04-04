import React from 'react';
import { motion } from "motion/react";
import { Award, Zap, Cpu, ExternalLink, Newspaper } from "lucide-react";
import { Link } from "react-router";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import Footer from "../components/Footer";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Import ferry and team images
import ferryHeroImage from "../../assets/4aac02c87cd2ccc1bd70a1d16fc4ab69594fd445.png";
import teamPhoto from "../../assets/2e8bf0365f5b8795bdfb0690ca50f8cc2ee28656.png";
import principleParticulars from "../../assets/70cb0c13c797412197d2c845d96e31abc216cc80.png";

const WFSA2024 = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-blue-100 -mt-20">
      {/* Ferry Hero Image Section */}
      <section className="relative h-screen overflow-hidden">
        {/* Static Hero Image */}
        <div className="absolute inset-0">
          <ImageWithFallback
            src={ferryHeroImage}
            alt="Black Pearl - WFSA 2024 Ferry Design"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-blue-950/80 via-blue-950/70 to-blue-900/90" />
        </div>

        {/* Content Overlay */}
        <div className="relative z-10 h-full flex items-center justify-center">
          <div className="text-center px-4 max-w-5xl">
            <motion.h1
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="text-5xl md:text-7xl text-white mb-6 font-bold"
            >
              WFSA <span className="text-red-500">2024</span>
            </motion.h1>
            <motion.p
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-2xl md:text-3xl text-blue-200 mb-4"
            >
              World Ferry Safety Association
            </motion.p>
            <motion.p
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl md:text-2xl text-white font-semibold"
            >
              Ferry Design Competition 2024
            </motion.p>
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
              fill="#f9fafb"
            ></path>
          </svg>
        </div>
      </section>

      {/* Project Overview */}
      <section className="py-20 bg-gradient-to-b from-blue-50 to-blue-100">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl text-gray-900 mb-6 text-center font-bold"
            >
              Competition <span className="text-red-500">Overview</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-gray-700 text-lg leading-relaxed text-center mb-8"
            >
              Team Black Pearl achieved Second Place with "Black Pearl," an
              electric-powered Ro-Pax ferry designed for the Niger River route
              from Onitsha to Ndoni and Idah in Nigeria. The ferry accommodates
              200 passengers and 20 vehicles and features an Aluminium-5086
              lightweight structure suitable for shallow-draft river operation
            </motion.p>
          </div>
        </div>

        {/* Bottom Wave */}
      </section>

      {/* Achievements Section */}
      <section className="py-20 bg-gradient-to-b from-blue-50 to-blue-100">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl text-center mb-12 text-gray-900 font-bold"
          >
            Design <span className="text-red-500">Features</span>
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* First Div - Image */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex items-center justify-center"
            >
              <ImageWithFallback
                src={principleParticulars}
                alt="Principle Particulars"
                className="w-full h-auto rounded-xl shadow-xl border-4 border-red-500/30"
              />
            </motion.div>

            {/* Second Div - Electric powered Ro Pax Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.15 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="bg-white p-8 rounded-xl border-4 border-red-500/30 shadow-xl flex items-center justify-center"
            >
              <div className="text-center">
                <Zap className="w-16 h-16 text-red-500 mx-auto mb-4" />
                <h3 className="text-3xl text-gray-900 font-bold leading-tight">
                  Electric Powered
                  <br />
                  Ro-Pax Ferry
                </h3>
              </div>
            </motion.div>

            {/* Third Div - Ferry Core Features */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-white p-8 rounded-xl border-4 border-red-500/30 shadow-xl"
            >
              <h3 className="text-2xl text-gray-900 font-bold mb-6 text-red-500">
                Ferry Core Features:
              </h3>
              <ul className="space-y-4 text-gray-700">
                <li className="flex items-start">
                  <span className="text-red-500 mr-3 text-2xl">•</span>
                  <span className="text-lg">Hydrokinetic turbine</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-3 text-2xl">•</span>
                  <span className="text-lg">Perovskite solar cells</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-3 text-2xl">•</span>
                  <span className="text-lg">
                    Naturally aided air circulation system
                  </span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Design Highlights */}
      <section className="py-20 bg-gradient-to-b from-blue-50 to-blue-100">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl text-center mb-12 text-gray-900 font-bold"
          >
            Outreach and <span className="text-red-500">Media Coverage</span>
          </motion.h2>

          <div className="max-w-6xl mx-auto">
            <Slider
              dots={true}
              infinite={true}
              speed={500}
              slidesToShow={3}
              slidesToScroll={1}
              autoplay={true}
              autoplaySpeed={4000}
              responsive={[
                {
                  breakpoint: 1024,
                  settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                  },
                },
                {
                  breakpoint: 640,
                  settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                  },
                },
              ]}
            >
              {[
                {
                  title: "Team Black Pearl Awarded by BIWTC",
                  source: "BUET NAME Department",
                  description:
                    "Team Black Pearl of BUET's NAME Department recognized by BIWTC for international ferry design triumph at WFSA 2024",
                  link: "https://name.buet.ac.bd/news/team-black-pearl-of-buets-name-department-awarded-by-biwtc-for-international-ferry-design-triumph",
                  image:
                    "https://images.unsplash.com/photo-1631798196223-3bf0dee57526?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1bml2ZXJzaXR5JTIwZW5naW5lZXJpbmclMjBhd2FyZCUyMGNlcmVtb255JTIwQmFuZ2xhZGVzaHxlbnwxfHx8fDE3NzQ1NDIzMjN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
                },
                {
                  title: "Team Black Pearl International Success",
                  source: "LinkedIn - Short Stories BD",
                  description:
                    "Department of Naval Architecture & Marine Engineering celebrates Team Black Pearl's achievement at WFSA 2024",
                  link: "https://www.linkedin.com/posts/shortstoriesbd_team-black-pearl-from-the-department-of-naval-activity-7436516216187523072-9Vav",
                  image:
                    "https://images.unsplash.com/photo-1762340274849-87b569b2f0c8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxMaW5rZWRJbiUyMHNvY2lhbCUyMG1lZGlhJTIwcHJvZmVzc2lvbmFsJTIwbmV0d29ya3xlbnwxfHx8fDE3NzQ1NDIzMjh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
                },
                {
                  title: "BUET Engineering Excellence",
                  source: "Engineering Achievement",
                  description:
                    "Bangladesh University of Engineering and Technology students excel in global ferry design competition",
                  link: "https://www.buet.ac.bd",
                  image:
                    "https://images.unsplash.com/photo-1726390415698-3c60d6b16c02?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxCVUVUJTIwdW5pdmVyc2l0eSUyMGJ1aWxkaW5nJTIwYXJjaGl0ZWN0dXJlJTIwQmFuZ2xhZGVzaHxlbnwxfHx8fDE3NzQ1NDIzMzB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
                },
                {
                  title: "Ferry Design Innovation Award",
                  source: "WFSA 2024 Competition",
                  description:
                    "Black Pearl electric-powered Ro-Pax ferry wins second place at World Ferry Safety Association competition",
                  link: "https://name.buet.ac.bd",
                  image:
                    "https://images.unsplash.com/photo-1667735980715-3e3101a3a8b8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmZXJyeSUyMGJvYXQlMjB0cmFuc3BvcnQlMjBhY2hpZXZlbWVudCUyMHRyb3BoeXxlbnwxfHx8fDE3NzQ1NDIzMjV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
                },
                {
                  title: "Student Engineering Team Success",
                  source: "Team Achievement",
                  description:
                    "BUET NAME Department students achieve international recognition for sustainable ferry design project",
                  link: "https://name.buet.ac.bd",
                  image:
                    "https://images.unsplash.com/photo-1646579886741-12b59840c63f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbmdpbmVlcmluZyUyMHN0dWRlbnRzJTIwdGVhbSUyMHByb2plY3QlMjBjZWxlYnJhdGlvbnxlbnwxfHx8fDE3NzQ1NDIzMzV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
                },
                {
                  title: "Bangladesh Media Coverage",
                  source: "National News",
                  description:
                    "Media outlets highlight Team Black Pearl's success representing Bangladesh in international competition",
                  link: "https://www.buet.ac.bd",
                  image:
                    "https://images.unsplash.com/photo-1771699435062-3072daa0418f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxCYW5nbGFkZXNoJTIwbmV3c3BhcGVyJTIwam91cm5hbGlzbSUyMG1lZGlhfGVufDF8fHx8MTc3NDU0MjMyMXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
                },
              ].map((article, index) => (
                <div key={index} className="px-2 md:px-4">
                  <motion.a
                    href={article.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: 1.05, y: -10 }}
                    className="block bg-white rounded-xl border-2 border-red-500/30 shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden h-96"
                  >
                    <div className="flex flex-col h-full">
                      {/* Image Section */}
                      <div className="h-36 md:h-48 overflow-hidden shrink-0">
                        <ImageWithFallback
                          src={article.image}
                          alt={article.title}
                          className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                        />
                      </div>

                      {/* Content Section */}
                      <div className="p-4 md:p-5 flex flex-col flex-grow overflow-hidden">
                        <div className="bg-red-600 text-white px-3 py-1.5 rounded-lg mb-3 text-xs font-semibold text-center shrink-0">
                          {article.source}
                        </div>
                        <h3 className="text-base md:text-lg text-gray-900 mb-2 font-bold leading-snug shrink-0 line-clamp-2">
                          {article.title}
                        </h3>
                        <p className="text-gray-600 text-xs md:text-sm leading-relaxed flex-grow overflow-hidden line-clamp-3">
                          {article.description}
                        </p>
                        <div className="mt-3 shrink-0">
                          <span className="text-red-600 font-semibold hover:underline text-sm">
                            Read More →
                          </span>
                        </div>
                      </div>
                    </div>
                  </motion.a>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </section>

      {/* Video Background Section - Innovation Excellence Award */}

      {/* Meet Our Team CTA Section */}
      <section className="py-20 bg-gradient-to-b from-blue-50 to-blue-100">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-6xl mx-auto text-center"
          >
            {/* Team Photo */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.5 }}
              whileHover={{ scale: 1.02 }}
              className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-red-500/30 mb-12"
            >
              <ImageWithFallback
                src={teamPhoto}
                alt="Team Black Pearl - WFSA 2024"
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-950/40 via-transparent to-transparent pointer-events-none" />
            </motion.div>

            {/* Meet Our Team Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
            >
              <Link to="/wfsa-2024-team">
                <motion.button
                  whileHover={{
                    scale: 1.05,
                    boxShadow: "0 0 30px rgba(239, 68, 68, 0.8)",
                  }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gradient-to-r from-red-600 to-red-700 text-white px-12 py-6 rounded-full text-xl font-semibold shadow-2xl transition-all duration-300"
                >
                  Meet Our Team
                </motion.button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default WFSA2024;
