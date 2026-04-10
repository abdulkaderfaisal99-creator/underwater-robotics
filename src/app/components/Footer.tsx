import React from "react";

import { motion } from "motion/react";
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Youtube,
  Mail,
  Phone,
  MapPin,
  Github,
} from "lucide-react";
import { Link } from "react-router";
import teamLogo from "../../assets/0092f9a3cc22f68758f203bd228f5aa5978b617f.png";
import ShipMarquee from "./ShipMarquee";

const Footer = ({ marqueeBackground }: { marqueeBackground?: string } = {}) => {
  return (
    <>
      {/* Ship Marquee - Zero gap with footer */}
      <ShipMarquee backgroundColor={marqueeBackground} />

      {/* Footer - starts immediately after marquee */}
      <footer className="bg-gray-900 text-white relative overflow-hidden">
        <div className="container mx-auto px-4 pt-20 pb-8">
          <div className="flex flex-col md:flex-row gap-12 mb-8">
            {/* Team Black Pearl Section - Centered */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex flex-col items-center text-center w-full"
            >
              <div className="max-w-md mx-auto">
                <h4 className="text-3xl font-bold mb-6 text-[#BD0C0D]">
                  Follow Us
                </h4>
                <div className="flex items-center justify-center space-x-3 mb-4">
                  <div className="h-12 bg-white rounded-lg flex items-center justify-center shadow-lg overflow-hidden px-2 py-1">
                    <img
                      src={teamLogo}
                      alt="Team Black Pearl Logo"
                      className="h-full w-auto object-contain"
                    />
                  </div>
                  <h3 className="text-2xl font-bold">Team Black Pearl</h3>
                </div>
                <p className="text-gray-400 mb-6 leading-relaxed">
                  Pioneering underwater robotics research and innovation at
                  Bangladesh University of Engineering and Technology. Building
                  autonomous underwater vehicles for international competitions
                  and real-world applications.
                </p>
                <div className="flex justify-center space-x-4">
                  <motion.a
                    href="https://www.facebook.com/profile.php?id=61572429644764"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{
                      scale: 1.3,
                      rotate: [0, -10, 10, -10, 0],
                      boxShadow: "0 0 20px rgba(59, 130, 246, 0.6)",
                    }}
                    transition={{ duration: 0.5 }}
                    className="text-gray-400 hover:text-blue-500 transition-colors bg-gray-800 p-3 rounded-full hover:bg-blue-500/20"
                  >
                    <Facebook className="w-8 h-8" />
                  </motion.a>
                  {/* <motion.a
                    href="https://twitter.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{
                      scale: 1.3,
                      rotate: [0, -10, 10, -10, 0],
                      boxShadow: "0 0 20px rgba(96, 165, 250, 0.6)",
                    }}
                    transition={{ duration: 0.5 }}
                    className="text-gray-400 hover:text-blue-400 transition-colors bg-gray-800 p-3 rounded-full hover:bg-blue-400/20"
                  >
                    <Twitter className="w-8 h-8" />
                  </motion.a> */}
                  <motion.a
                    href="https://www.instagram.com/teamblackpearl2026/"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{
                      scale: 1.3,
                      rotate: [0, -10, 10, -10, 0],
                      boxShadow: "0 0 20px rgba(236, 72, 153, 0.6)",
                    }}
                    transition={{ duration: 0.5 }}
                    className="text-gray-400 hover:text-pink-500 transition-colors bg-gray-800 p-3 rounded-full hover:bg-pink-500/20"
                  >
                    <Instagram className="w-8 h-8" />
                  </motion.a>
                  <motion.a
                    href="https://www.linkedin.com/company/112686058/admin/dashboard/"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{
                      scale: 1.3,
                      rotate: [0, -10, 10, -10, 0],
                      boxShadow: "0 0 20px rgba(37, 99, 235, 0.6)",
                    }}
                    transition={{ duration: 0.5 }}
                    className="text-gray-400 hover:text-blue-600 transition-colors bg-gray-800 p-3 rounded-full hover:bg-blue-600/20"
                  >
                    <Linkedin className="w-8 h-8" />
                  </motion.a>
                  <motion.a
                    href="https://www.youtube.com/@TeamBlackPearl-u5b"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{
                      scale: 1.3,
                      rotate: [0, -10, 10, -10, 0],
                      boxShadow: "0 0 20px rgba(239, 68, 68, 0.6)",
                    }}
                    transition={{ duration: 0.5 }}
                    className="text-gray-400 hover:text-red-500 transition-colors bg-gray-800 p-3 rounded-full hover:bg-red-500/20"
                  >
                    <Youtube className="w-8 h-8" />
                  </motion.a>
                  {/* <motion.a
                    href="https://github.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{
                      scale: 1.3,
                      rotate: [0, -10, 10, -10, 0],
                      boxShadow: "0 0 20px rgba(255, 255, 255, 0.6)",
                    }}
                    transition={{ duration: 0.5 }}
                    className="text-gray-400 hover:text-white transition-colors bg-gray-800 p-3 rounded-full hover:bg-white/20"
                  >
                    <Github className="w-8 h-8" />
                  </motion.a> */}
                </div>
              </div>
            </motion.div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-gray-800 pt-6 mt-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <p className="text-gray-400 text-sm text-center md:text-left">
                © {new Date().getFullYear()} Team Black Pearl. All rights
                reserved.
              </p>
              <div className="flex space-x-6 text-sm">
                <a
                  href="#"
                  className="text-gray-400 hover:text-[#BD0C0D] transition-colors"
                >
                  Privacy Policy
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-[#BD0C0D] transition-colors"
                >
                  Terms of Service
                </a>
                <Link
                  to="/contact"
                  className="text-gray-400 hover:text-[#BD0C0D] transition-colors"
                >
                  Support
                </Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
