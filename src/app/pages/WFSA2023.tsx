import React from 'react';
import { motion } from "motion/react";
import {
  Ship,
  Award,
  Users,
  Leaf,
  Cpu,
  ChevronLeft,
  ChevronRight,
  ExternalLink,
  Newspaper,
} from "lucide-react";
import { Link } from "react-router";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import Footer from "../components/Footer";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

// Import ferry image
import ferryImage from "../../assets/39946ede35e7b955699dae5799d3d3abbbd3c45c.png";
import teamPhoto from "../../assets/fb175d9f4423ee7dca7eda6d4534e340113a400d.png";
import principalParticularsImg from "../../assets/5b59b0cd2f43aa25b4d9b3c57e70eaa401869950.png";

const data = [
  {
    title: "Team Black Pearl Secures Third Place at WFSA 2026",
    source: "BUET Official Website",
    description:
      "BUET students excel in international ferry design competition with innovative CNG-powered solution for Niger River transport.",
    link: "https://www.buet.ac.bd",
    image:
      "https://images.unsplash.com/photo-1619425192533-4ae6ae039af4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbmdpbmVlcmluZyUyMHN0dWRlbnRzJTIwdGVhbSUyMHN1Y2Nlc3MlMjBjZWxlYnJhdGlvbnxlbnwxfHx8fDE3NzQ1NDcwNjN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
  {
    title: "BUET Team Shines in World Ferry Safety Competition",
    source: "The Daily Star",
    description:
      "Bangladeshi engineering students design sustainable passenger ferry for Niger River route with CNG-Electric hybrid system.",
    link: "https://www.thedailystar.net",
    image:
      "https://images.unsplash.com/photo-1771699435062-3072daa0418f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuZXdzcGFwZXIlMjBqb3VybmFsaXNtJTIwQmFuZ2xhZGVzaCUyMG1lZGlhfGVufDF8fHx8MTc3NDU0NzA2M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
  {
    title:
      "বুয়েটের শিক্ষার্থীদের ফেরি ডিজাইনে আন্তর্জাতিক স্বীকৃতি",
    source: "Prothom Alo",
    description:
      "টিম ব্ল্যাক পার্ল বিশ্ব ফেরি নিরাপত্তা প্রতিযোগিতায় তৃতীয় স্থান অর্জন করেছে সিএনজি চালিত যাত্রীবাহী ফেরির নকশার মাধ্যমে।",
    link: "https://www.prothomalo.com",
    image:
      "https://images.unsplash.com/photo-1632679090212-612ac1f4d76f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbnRlcm5hdGlvbmFsJTIwY29tcGV0aXRpb24lMjBhd2FyZCUyMHdpbm5pbmd8ZW58MXx8fHwxNzc0NTQ3MDY0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
  {
    title:
      "Celebrating Team Black Pearl's Achievement at WFSA 2026",
    source: "BUET Facebook Official",
    description:
      "Official announcement and congratulations from BUET administration for WFSA 2026 third place achievement with innovative ferry design.",
    link: "https://www.facebook.com/buet1912",
    image:
      "https://images.unsplash.com/photo-1571927098989-32b9f3c26181?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxCVUVUJTIwdW5pdmVyc2l0eSUyMGNhbXB1cyUyMGJ1aWxkaW5nfGVufDF8fHx8MTc3NDU0NzA2NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
  {
    title: "বুয়েট শিক্ষার্থীদের ফেরি ডিজাইনে বৈশ্বিক সাফল্য",
    source: "Bangladesh Pratidin",
    description:
      "নাইজার নদীর জন্য পরিবেশবান্ধব সিএনজি-ইলেকট্রিক হাইব্রিড চালিত যাত্রীবাহী ফেরির উদ্ভাবনী নকশা।",
    link: "https://www.bd-pratidin.com",
    image:
      "https://images.unsplash.com/photo-1582638810035-acbf125821bd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmZXJyeSUyMGJvYXQlMjBzdXN0YWluYWJsZSUyMHRyYW5zcG9ydCUyMGlubm92YXRpb258ZW58MXx8fHwxNzc0NTQ3MDY0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
  {
    title:
      "BUET Naval Architecture Students Win International Recognition",
    source: "bdnews24.com",
    description:
      "Team designs innovative hybrid ferry with enhanced safety features for African river transport, securing third place globally.",
    link: "https://www.bdnews24.com",
    image:
      "https://images.unsplash.com/photo-1619425192533-4ae6ae039af4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbmdpbmVlcmluZyUyMHN0dWRlbnRzJTIwdGVhbSUyMHN1Y2Nlc3MlMjBjZWxlYnJhdGlvbnxlbnwxfHx8fDE3NzQ1NDcwNjN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
]

const WFSA2023 = () => {

  const [emblaRef] = useEmblaCarousel(
    { loop: true, align: "start" },
    [Autoplay({ delay: 4000, stopOnInteraction: false })]
  );

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-blue-100 -mt-20">
      {/* Ferry Image Hero Section */}
      <section className="relative h-screen overflow-hidden">
        {/* Static Image */}
        <div className="absolute inset-0">
          <ImageWithFallback
            src={ferryImage}
            alt="WFSA 2026 Ferry Design"
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
              WFSA <span className="text-red-500">2026</span>
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
              Ferry Design Competition 2026
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
              Team Black Pearl secured Third Place with "Niger Drift," a
              CNG-powered ferry designed for the Lokoja–Onitsha route on the
              Niger River. The vessel carries 200 passengers along with personal
              and market cargo, supporting regional trade and connectivity.
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
            Design <span className="text-red-500">Feature</span>
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* First Div - Principal Particulars Image */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="bg-gradient-to-br from-white to-blue-50 p-6 rounded-xl border-2 border-blue-500 shadow-2xl flex items-center justify-center hover:shadow-blue-500/50 transition-all duration-300"
            >
              <img
                src={principalParticularsImg}
                alt="Principal Particulars"
                className="w-full h-auto object-contain rounded-lg"
              />
            </motion.div>

            {/* Second Div - Propulsion System */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="bg-gradient-to-br from-white to-red-50 p-8 rounded-xl border-2 border-red-500 shadow-2xl flex flex-col justify-center hover:shadow-red-500/50 transition-all duration-300"
            >
              <h3 className="text-2xl text-red-600 mb-4 font-bold flex items-center gap-2">
                <span className="text-3xl">⚡</span>
                Propulsion System
              </h3>
              <p className="text-gray-700 leading-relaxed font-medium">
                CNG-Electric hybrid powered Passenger Ferry
              </p>
            </motion.div>

            {/* Third Div - Core Features */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="bg-gradient-to-br from-white to-blue-50 p-8 rounded-xl border-2 border-blue-500 shadow-2xl flex flex-col justify-center hover:shadow-blue-500/50 transition-all duration-300"
            >
              <h3 className="text-2xl text-blue-600 mb-4 font-bold flex items-center gap-2">
                <span className="text-3xl">🔧</span>
                Core Features
              </h3>
              <ul className="text-gray-700 leading-relaxed space-y-3">
                <li className="flex items-start bg-white p-3 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                  <span className="text-red-500 mr-3 text-xl font-bold">•</span>
                  <span className="font-medium">CNG safety system</span>
                </li>
                <li className="flex items-start bg-white p-3 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                  <span className="text-red-500 mr-3 text-xl font-bold">•</span>
                  <span className="font-medium">
                    Improved Fuel efficiency and environment friendly design
                  </span>
                </li>
                <li className="flex items-start bg-white p-3 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                  <span className="text-red-500 mr-3 text-xl font-bold">•</span>
                  <span className="font-medium">BMS features</span>
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
            Outreach and Media <span className="text-red-500">Coverage</span>
          </motion.h2>

          <div className="overflow-hidden w-full" ref={emblaRef}>
  <div className="flex">
    {data.map((article, index) => (
      <div key={index} className="flex-none w-full sm:w-1/2 lg:w-1/3 px-2">
        <motion.a
          href={article.link}
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.1 }}
          whileHover={{ scale: 1.05, y: -10 }}
          style={{ display: "block" }}
          className="bg-white rounded-xl border-2 border-red-500/30 shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden h-96"
        >
          <div className="flex flex-col h-full">
            <div className="h-36 md:h-48 overflow-hidden shrink-0">
              <ImageWithFallback
                src={article.image}
                alt={article.title}
                className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
              />
            </div>
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
  </div>
</div>
        </div>
      </section>

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
                alt="Team Black Pearl - WFSA 2023"
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
              <Link to="/wfsa-2026-team">
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
    </div>
  );
};

export default WFSA2023;
