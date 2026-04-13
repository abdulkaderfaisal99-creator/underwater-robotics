import { motion } from "motion/react";
import { Award, Leaf, Cpu, ExternalLink, Newspaper } from "lucide-react";
import { Link } from "react-router";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import Footer from "../components/Footer";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

// Import ferry image
import ferryHeroImage from "../../assets/ef081b22dde9e51fd21dfc0737ff828e560a63ef.png";
import teamPhotoWithFlag from "../../assets/fff8a819f598251b9a912707ba9df8795776f52d.png";
import principalParticularsImg from "../../assets/9296956df89536fa5005ed0f2e5dd8fbf935a292.png";

const data = [
  {
    title:
      "BUET Students Win First Prize in International Ferry Design Competition",
    source: "BUET NAME Department",
    description:
      'Team Black Pearl from BUET\'s Naval Architecture & Marine Engineering Department wins first place at WFSA 2025 with innovative electric ferry design "Naija Spirit"',
    link: "https://name.buet.ac.bd/news/buet-students-win-first-prize-in-international-ferry-design-competition",
    image:
      "https://images.unsplash.com/photo-1757143137392-0b1e1a27a7de?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1bml2ZXJzaXR5JTIwYXdhcmQlMjBjZXJlbW9ueSUyMHN0dWRlbnRzJTIwdHJvcGh5JTIwY2VsZWJyYXRpb258ZW58MXx8fHwxNzc0NTQzNjgyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
  {
    title: "Team Black Pearl - The Champions",
    source: "Engineer's Diary BUET",
    description:
      "Team Black Pearl from BUET is proud to be crowned the champions at the World Ferry Safety Association (WFSA) 2025 Ferry Design Competition",
    link: "https://www.facebook.com/EngineersDiaryBUET/photos/team-black-pearl-the-champions-from-buet/1073199524823912/",
    image:
      "https://images.unsplash.com/photo-1768796370407-6d36619e7d6d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbmdpbmVlcmluZyUyMHRlYW0lMjBzdHVkZW50cyUyMHByb2plY3QlMjBzdWNjZXNzfGVufDF8fHx8MTc3NDU0MzY4NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
  {
    title: "Hydrogen-Powered Ferry Innovation",
    source: "WFSA 2025 Competition",
    description:
      'Team Black Pearl\'s "Naija Spirit" features cutting-edge hydrogen fuel cell technology for sustainable passenger transport in Lagos waterways',
    link: "https://name.buet.ac.bd/news/buet-students-win-first-prize-in-international-ferry-design-competition",
    image:
      "https://images.unsplash.com/photo-1765401813089-c8aa3c0280db?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVjdHJpYyUyMGZlcnJ5JTIwc3VzdGFpbmFibGUlMjB0cmFuc3BvcnQlMjBpbm5vdmF0aW9ufGVufDF8fHx8MTc3NDU0NTE0OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
  {
    title: "Ferry Design Excellence",
    source: "Engineering Achievement",
    description:
      "BUET team showcases world-class engineering skills with innovative ferry design featuring electric propulsion and hydrogen backup system",
    link: "https://name.buet.ac.bd",
    image:
      "https://images.unsplash.com/photo-1585884570069-d9249f14d31b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmZXJyeSUyMGJvYXQlMjBkZXNpZ24lMjBlbmdpbmVlcmluZyUyMG1vZGVsfGVufDF8fHx8MTc3NDU0MzY4M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
  {
    title: "Bangladesh Engineering Pride",
    source: "National Achievement",
    description:
      "Bangladesh media celebrates Team Black Pearl's international success, highlighting the country's engineering excellence on the global stage",
    link: "https://name.buet.ac.bd/news/buet-students-win-first-prize-in-international-ferry-design-competition",
    image:
      "https://images.unsplash.com/photo-1771699435062-3072daa0418f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxCYW5nbGFkZXNoJTIwbmV3c3BhcGVyJTIwam91cm5hbGlzbSUyMG1lZGlhfGVufDF8fHx8MTc3NDU0MjMyMXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
  {
    title: "Sustainable Maritime Innovation",
    source: "Green Technology",
    description:
      "Team Black Pearl's award-winning design demonstrates commitment to zero-emission maritime transport with hydrogen fuel cell integration",
    link: "https://name.buet.ac.bd",
    image:
      "https://images.unsplash.com/photo-1757143137392-0b1e1a27a7de?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1bml2ZXJzaXR5JTIwYXdhcmQlMjBjZXJlbW9ueSUyMHN0dWRlbnRzJTIwdHJvcGh5JTIwY2VsZWJyYXRpb258ZW58MXx8fHwxNzc0NTQzNjgyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
]

const WFSA2025 = () => {
  const [emblaRef] = useEmblaCarousel(
    { loop: true, align: "start" },
    [Autoplay({ delay: 4000, stopOnInteraction: false })]
  );

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-blue-100 -mt-20">
      {/* Ferry Hero Image Section */}
      <section className="relative h-screen overflow-hidden">
        {/* Static Hero Image */}
        <div className="absolute inset-0">
          <ImageWithFallback
            src={ferryHeroImage}
            alt="WFSA 2025 Ferry Design - Walia Spirit"
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
              WFSA <span className="text-red-500">2025</span>
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
              Ferry Design Competition 2025
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
              Team Black Pearl secured First Place by designing "Naija Spirit,"
              an electric ferry for the Lagos Inland Waterway in Lagos, Nigeria.
              The vessel is designed to carry 200 passengers between the Ikorodu
              terminal and CMS.
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
                Electric powered Passenger Ferry, with Hydrogen fuel cell as
                emergency power source.
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
                  <span className="font-medium">
                    Hydrogen fuel cell integration
                  </span>
                </li>
                <li className="flex items-start bg-white p-3 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                  <span className="text-red-500 mr-3 text-xl font-bold">•</span>
                  <span className="font-medium">
                    Directional sound beacon system
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

      {/* Media Outreach and Coverage */}
      <section className="py-20 bg-gradient-to-b from-blue-50 to-blue-100 overflow-hidden">
        <div className="w-full">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl text-center mb-12 text-gray-900 font-bold px-4"
          >
            Media Outreach and <span className="text-red-500">Coverage</span>
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

      {/* Team Photo with Bangladesh Flag Section */}
      <section className="py-20 bg-gradient-to-b from-blue-50 to-blue-100">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-6xl mx-auto"
          >
            {/* First Team Image - With Bangladesh Flag */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.5 }}
              whileHover={{ scale: 1.02 }}
              className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-red-500/30 mb-8"
            >
              <ImageWithFallback
                src={teamPhotoWithFlag}
                alt="Team Black Pearl representing Bangladesh at WFSA 2025"
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-950/60 via-transparent to-transparent pointer-events-none" />

              {/* Caption Overlay */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                className="absolute bottom-0 left-0 right-0 p-6 md:p-8 bg-gradient-to-t from-blue-950/90 to-transparent"
              >
                <p className="text-white text-lg md:text-xl text-center font-semibold">
                  Team Black Pearl - WFSA 2025 Competition
                </p>
                <p className="text-blue-200 text-center mt-2">
                  Bangladesh University of Engineering and Technology
                </p>
              </motion.div>
            </motion.div>

            {/* Pride Statement */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              className="mt-12 text-center"
            ></motion.div>

            {/* Meet Our Team Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8 }}
              className="mt-12 text-center"
            >
              <Link to="/wfsa-2025-team">
                <motion.button
                  whileHover={{
                    scale: 1.05,
                    boxShadow: "0 0 30px rgba(239, 68, 68, 0.8)",
                  }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gradient-to-r from-red-600 to-red-700 text-white px-10 py-5 rounded-full text-xl font-semibold shadow-lg transition-all duration-300"
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

export default WFSA2025;
