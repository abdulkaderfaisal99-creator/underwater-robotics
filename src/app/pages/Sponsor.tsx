import React from "react";
import { motion } from "motion/react";
import { Heart, Handshake, Mail, Users, Camera } from "lucide-react";
import Footer from "../components/Footer";
import buet90Logo from "../../assets/eb4b029465de9a4da815c7e7f801868bd8b5d9ef.png";
import albumImg1 from "../../assets/4e2900d28fd2aad54a10ae7ebc3c636b1541933a.png";
import albumImg2 from "../../assets/07d5f73c72932623edaf345f0e55006d9b2e66ee.png";
import albumImg3 from "../../assets/058ce268c11cfd4bcc6cf8235d3d9a95a43f3e03.png";

const Sponsor = () => {
  return (
    <div className="min-h-screen -mt-20">
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center justify-center overflow-hidden mb-0 bg-[#1C398E]">
        <div className="relative z-20 text-center px-4">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="inline-block mb-6"
          >
            <Heart className="w-20 h-20 md:w-24 md:h-24 text-yellow-300 mx-auto" />
          </motion.div>
          <motion.h1
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-7xl text-white mb-4 font-bold"
          >
            Support <span className="text-yellow-300">Us</span>
          </motion.h1>
          <motion.p
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto"
          >
            Help us push the boundaries of underwater robotics
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

      {/* Support Us Section */}
      <section className="py-20 bg-gradient-to-b from-blue-50 to-blue-100">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-white rounded-2xl shadow-2xl p-8 md:p-12 border-t-4 border-red-600"
            >
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-6">
                We believe that innovation is driven by passionate people and
                bold ideas. Developing advanced autonomous underwater vehicles
                requires significant resources, and the cost of research,
                fabrication, electronics, and testing continues to grow.
              </p>
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-6">
                As the underwater robotics team of BUET,{" "}
                <strong className="text-blue-950">Team Black Pearl</strong> is
                dedicated to pushing the boundaries of marine technology and
                representing Bangladesh in international competitions. Your
                support, no matter how small, can make a meaningful impact on
                our journey.
              </p>
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-8">
                If you would like to support us through equipment, technical
                collaboration, testing facilities, or financial sponsorship,
                please feel free to reach out to us at{" "}
                <a
                  href="mailto:blackpearl.auv@buet.ac.bd"
                  className="text-red-600 font-semibold hover:text-red-700 underline transition-colors"
                >
                  blackpearl.auv@buet.ac.bd
                </a>
              </p>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-6 border-t border-gray-200"
              >
                <motion.a
                  href="mailto:blackpearl.auv@buet.ac.bd"
                  whileHover={{
                    scale: 1.05,
                    boxShadow: "0 10px 30px rgba(220, 38, 38, 0.3)",
                  }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center gap-3 bg-gradient-to-r from-red-600 to-red-700 text-white px-8 py-4 rounded-full shadow-xl font-semibold text-lg"
                >
                  <Mail className="w-6 h-6" />
                  <span>Get in Touch</span>
                </motion.a>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="inline-flex items-center gap-3 bg-blue-50 text-blue-900 px-8 py-4 rounded-full border-2 border-blue-900 font-semibold text-lg"
                >
                  <Handshake className="w-6 h-6" />
                  <span>Partner with Us</span>
                </motion.div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Donate & Sponsorship Section */}
      <section className="h-[30vh] bg-white">
        <div className="container mx-auto px-4 h-full">
          <div className="grid md:grid-cols-2 gap-8 h-full">
            {/* Donate Us */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center justify-center"
            >
              <div className="flex flex-col items-center justify-center text-center">
                <h3 className="text-2xl md:text-3xl font-bold text-blue-950 mb-3">
                  Donate Us
                </h3>
                <p className="text-gray-700 mb-4 max-w-xs">
                  Support our mission with your generous contribution
                </p>
                <motion.a
                  href="mailto:blackpearl.auv@buet.ac.bd?subject=Donation Inquiry"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-red-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-red-700 transition-colors"
                >
                  Click Here
                </motion.a>
              </div>
            </motion.div>

            {/* Sponsorship Package */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center justify-center"
            >
              <div className="flex flex-col items-center justify-center text-center">
                <h3 className="text-2xl md:text-3xl font-bold text-blue-950 mb-3">
                  Sponsorship Package
                </h3>
                <p className="text-gray-700 mb-4 max-w-xs">
                  Explore partnership opportunities with our team
                </p>
                <motion.a
                  href="https://drive.google.com/file/d/1BHZoawm_2qkBTjhW-lzTYXoAfLOMa5jv/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                >
                  Click Here
                </motion.a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 2026 Sponsors Section */}
      <section className="py-20 bg-gradient-to-b from-blue-50 to-blue-100">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl mb-6 text-blue-950">
              2026 <span className="text-red-600">Sponsors</span>
            </h2>
            <p className="text-lg md:text-xl text-blue-800 max-w-3xl mx-auto">
              We are proud to partner with leading organizations that support
              innovation and excellence in underwater robotics.
            </p>
          </motion.div>

          {/* Sponsor logos or content can be added here */}
        </div>
      </section>
      {/* BUET Alumni Association Section */}
      <section className="py-20 bg-gradient-to-b from-blue-50 to-blue-100">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-6xl mx-auto"
          >
            <div className="grid md:grid-cols-2 gap-12 items-center">
              {/* Left Side - Logo */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="flex justify-center"
              >
                <img
                  src={buet90Logo}
                  alt="BUET Batch 90 Logo"
                  className="w-full max-w-md h-auto"
                />
              </motion.div>

              {/* Right Side - Text Content */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="text-center md:text-left"
              >
                <h2 className="text-4xl md:text-5xl mb-6 text-blue-950">
                  Special Thanks to{" "}
                  <span className="text-red-600">BUET 90 Batch</span>
                </h2>
                <p className="text-lg md:text-xl text-blue-800 leading-relaxed mb-8">
                  We are incredibly grateful to the{" "}
                  <strong>BUET Alumni Association</strong> for their unwavering
                  support and guidance throughout our journey. Their
                  contributions have been instrumental in helping us acquire
                  essential equipment, participate in international
                  competitions, and develop innovative underwater robotics
                  solutions. The Alumni Association's commitment to fostering
                  the next generation of engineers has made a profound impact on
                  our team's success and growth.
                </p>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="inline-flex items-center gap-3 bg-red-600 text-white px-8 py-4 rounded-full shadow-xl"
                >
                  <Users className="w-6 h-6" />
                  <span className="text-lg font-semibold">
                    Proud Alumni Partners
                  </span>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Album Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="inline-block mb-6"
            ></motion.div>
            <h2 className="text-4xl md:text-5xl mb-6 text-blue-950">
              Relation with our <span className="text-red-600">Sponsors</span>
            </h2>
          </motion.div>

          {/* Collage Grid Layout */}
          <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4">
            {/* Large Image 1 - Takes 2 columns and 2 rows on desktop */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              whileHover={{ scale: 1.02 }}
              className="col-span-2 row-span-2 relative overflow-hidden rounded-2xl shadow-2xl group cursor-pointer"
            >
              <img
                src={albumImg1}
                alt="Team Black Pearl with Sponsors - Group Photo"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-950/80 via-blue-950/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <p className="text-white font-semibold text-lg">
                  Team & Sponsors Gathering
                </p>
              </div>
            </motion.div>

            {/* Small Image 2 - Takes 2 columns and 1 row */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              whileHover={{ scale: 1.02 }}
              className="col-span-2 relative overflow-hidden rounded-2xl shadow-2xl group cursor-pointer"
            >
              <img
                src={albumImg2}
                alt="Technical Demonstration to Sponsors"
                className="w-full h-64 md:h-80 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-950/80 via-blue-950/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <p className="text-white font-semibold text-lg">
                  Technical Demonstration
                </p>
              </div>
            </motion.div>

            {/* Small Image 3 - Takes 2 columns and 1 row */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              whileHover={{ scale: 1.02 }}
              className="col-span-2 relative overflow-hidden rounded-2xl shadow-2xl group cursor-pointer"
            >
              <img
                src={albumImg3}
                alt="Sponsorship Check Presentation Ceremony"
                className="w-full h-64 md:h-80 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-950/80 via-blue-950/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <p className="text-white font-semibold text-lg">
                  Sponsorship Ceremony
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Sponsor;
