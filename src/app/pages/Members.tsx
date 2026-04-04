import React from 'react';
import { motion } from "motion/react";
import {
  Code,
  Wrench,
  Zap,
  Megaphone,
  GraduationCap,
  Linkedin,
  Github,
  Mail,
} from "lucide-react";
import Footer from "../components/Footer";

// Faculty member images
import sonarExpert from "../../assets/4193917e4e269e831297c077cb70568fcfa2e442.png";
import roboticsExpert from "../../assets/8dc30afa90a93ce099f137c93f3367932cba142e.png";

// Leadership images
import coordinator from "../../assets/3983d070a611f4e52c6e6adc35af9d3bbb06e7e3.png";
import mominulHimel from "../../assets/6765d84c0b99a09b396ae18b65fdae6620c7f2a1.png";

// Team member images
import fahadDipta from "../../assets/86f3e80a2928c12a50c2571724cfd555315a06bd.png";
import mdMohsin from "../../assets/6c505ca95bc247523ead6c20784f5294f020fe5b.png";
import unjumOmi from "../../assets/200787767e8cb69a8b91bf2edb67d125720d54fc.png";
import arghyaGhosh from "../../assets/bd6031090625002db0296568b4fe5dfe47ebb6f8.png";
import touhid from "../../assets/7cf4b9f4a0bde69a56dceef11606e0327743a329.png";
import sajidulHaque from "../../assets/d38f0f77b4c2c4d0f75f604a7036514ad1e93096.png";
import rubaidAhmed from "../../assets/b7ab919fbc621518c8d89dc6e82ca97fa7b74cee.png";
import sourovSarker from "../../assets/c06236fc25b239110e35413c814d00fa9538d433.png";
import meherabApi from "../../assets/a75309d61565916dd81f4e58df49e43b697615cf.png";
import ziaulKarim from "../../assets/11c1bff7d0076ed857395864e674bdd51c3b85ed.png";
import julietFlorina from "../../assets/02185034371dd2d84e42847d6afe28ec86ee6a77.png";
import tahsinReza from "../../assets/288cdbe3cf0e03119c22697bb8b3ea1a548dc461.png";
import kawsarZidan from "../../assets/f55b7b6933dc0f9c1e836e9bed2a5d419d0355c2.png";
import marufMajid from "../../assets/6b722d610c3e96d304483ed64073966ce58d24de.png";
import mirajMahin from "../../assets/fd5f467e8d1676d402e6633b38f1d8ee7a6be577.png";
import shozibRahman from "../../assets/b15641084368cfc773f7e43d289a1d9728d4a3b6.png";
import mesbahAhmed from "../../assets/f40a3c51856399902eba0bbb9a9489ec22d48e94.png";
import fahadDiptaNew from "../../assets/ae34e725f2729be7f7adf1cb47031b9aa24e27ad.png";
import shaIbnaMaruf from "../../assets/1c48a0316fad4ede6ecd2cf2dc960229698b9909.png";
import sianWahadat from "../../assets/e578f090028b8360346dbbae259a4b0b87c7e107.png";

const Members = () => {
  const facultyMembers = [
    {
      name: "Dr.Miad Al Mursaline",
      title: "Faculty Advisor",
      department: "Department of Naval Architecture & Marine Engineering",
      image: sonarExpert,
      email: "mailto:saifur@name.buet.ac.bd",
      specialization: "Underwater Acoustics & Signal Processing",
    },
    {
      name: "Dr.Zobair Ibn Awal",
      title: "Faculty Advisor ",
      department: "Department of Naval Architecture & Marine Engineering",
      image: roboticsExpert,
      email: "mailto:ashikur@eee.buet.ac.bd",
      specialization: "Autonomous Systems & Control Theory",
    },
  ];

  const softwareTeam = [
    {
      name: "MD Fahad Islam Dipta",
      role: "Team Lead",
      ugId: "2012046",
      image: fahadDiptaNew,
      linkedin: "https://linkedin.com/in/fahad-islam-dipta",
      github: "https://github.com/fahaddipta",
      email: "mailto:fahad.dipta@buet.ac.bd",
      isLead: true,
    },
    {
      name: "Mesbah Uddin Ahmed",
      role: "Co-Team Lead",
      ugId: "2012037",
      image: mesbahAhmed,
      linkedin: "https://linkedin.com/in/mesbah-uddin-ahmed",
      github: "https://github.com/mesbahahmed",
      email: "mailto:mesbah.ahmed@buet.ac.bd",
      isLead: true,
    },
    {
      name: "Rubaid Ahmed",
      role: "Control",
      ugId: "2212015",
      image: rubaidAhmed,
      linkedin: "https://linkedin.com/in/rubaid-ahmed",
      github: "https://github.com/rubaidahmed",
      email: "mailto:rubaid.ahmed@buet.ac.bd",
    },
    {
      name: "Maruf Ahmed Majid",
      role: "Control",
      ugId: "2212049",
      image: marufMajid,
      linkedin: "https://linkedin.com/in/maruf-ahmed-majid",
      github: "https://github.com/marufmajid",
      email: "mailto:maruf.majid@buet.ac.bd",
    },
    {
      name: "Sian Wahadat",
      role: "Perception",
      ugId: "2212013",
      image: sianWahadat,
      linkedin: "https://linkedin.com/in/sian-wahadat",
      github: "https://github.com/sianwahadat",
      email: "mailto:sian.wahadat@buet.ac.bd",
    },
    {
      name: "Md Mohsin",
      role: "Perception",
      ugId: "2112036",
      image: mdMohsin,
      linkedin: "https://linkedin.com/in/md-mohsin",
      github: "https://github.com/mdmohsin",
      email: "mailto:mohsin@buet.ac.bd",
    },
    {
      name: "Unjum Islam Omi",
      role: "Decision",
      ugId: "2112054",
      image: unjumOmi,
      linkedin: "https://linkedin.com/in/unjum-islam-omi",
      github: "https://github.com/unjumomi",
      email: "mailto:unjum.omi@buet.ac.bd",
    },
    {
      name: "Juliet Florina",
      role: "Decision",
      ugId: "2212012",
      image: julietFlorina,
      linkedin: "https://linkedin.com/in/juliet-florina",
      github: "https://github.com/julietflorina",
      email: "mailto:juliet.florina@buet.ac.bd",
    },
    {
      name: "Arghya Ghosh",
      role: "Decision",
      ugId: "2212045",
      image: arghyaGhosh,
      linkedin: "https://linkedin.com/in/arghya-ghosh",
      github: "https://github.com/arghyaghosh",
      email: "mailto:arghya.ghosh@buet.ac.bd",
    },
  ];

  const designTeam = [
    {
      name: "Md. Kawsar Mhamud Zidan",
      role: "Team Lead",
      ugId: "2012016",
      image: kawsarZidan,
      linkedin: "https://linkedin.com/in/kawsar-mahmud-zidan",
      github: "https://github.com/kawsarzidan",
      email: "mailto:kawsar.zidan@buet.ac.bd",
      isLead: true,
    },
    {
      name: "Sourov Sarker",
      role: "Design",
      ugId: "2012049",
      image: sourovSarker,
      linkedin: "https://linkedin.com/in/sourov-sarker",
      github: "https://github.com/sourovsarker",
      email: "mailto:sourov.sarker@buet.ac.bd",
    },
    {
      name: "Md. Ziaul Karim",
      role: "Design",
      ugId: "2112035",
      image: ziaulKarim,
      linkedin: "https://linkedin.com/in/ziaul-karim",
      github: "https://github.com/ziaulkarim",
      email: "mailto:ziaul.karim@buet.ac.bd",
    },
    {
      name: "Md. Meherab Hosen Api",
      role: "Design",
      ugId: "2212023",
      image: meherabApi,
      linkedin: "https://linkedin.com/in/meherab-hosen-api",
      github: "https://github.com/meherabapi",
      email: "mailto:meherab.api@buet.ac.bd",
    },
    {
      name: "SM Sajidul Haque",
      role: "Design",
      ugId: "2112007",
      image: sajidulHaque,
      linkedin: "https://linkedin.com/in/sajidul-haque",
      github: "https://github.com/sajidulhaque",
      email: "mailto:sajidul.haque@buet.ac.bd",
    },
  ];

  const electricalTeam = [
    {
      name: "Md. Shozib Rahman",
      role: "Team Lead",
      ugId: "2212019",
      image: shozibRahman,
      linkedin: "https://linkedin.com/in/shozib-rahman",
      github: "https://github.com/shozibrahman",
      email: "mailto:shozib.rahman@buet.ac.bd",
      isLead: true,
    },
    {
      name: "Md. Sha Ibna Maruf",
      role: "Electrical",
      ugId: "2212010",
      image: shaIbnaMaruf,
      linkedin: "https://linkedin.com/in/sha-ibna-maruf",
      github: "https://github.com/shaimaruf",
      email: "mailto:sha.maruf@buet.ac.bd",
    },
    {
      name: "Tahsin Reza",
      role: "Electrical",
      ugId: "2212008",
      image: tahsinReza,
      linkedin: "https://linkedin.com/in/tahsin-reza",
      github: "https://github.com/tahsinreza",
      email: "mailto:tahsin.reza@buet.ac.bd",
    },
  ];

  const mediaTeam = [
    {
      name: "Miraj Hossain Mahin",
      role: "Team Lead",
      ugId: "2212033",
      image: mirajMahin,
      linkedin: "https://linkedin.com/in/miraj-hossain-mahin",
      github: "https://github.com/mirajmahin",
      email: "mailto:miraj.mahin@buet.ac.bd",
      isLead: true,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-blue-100 -mt-20">
      {/* Hero Section */}
      <section className="relative h-[80vh] bg-gradient-to-b from-blue-950 to-blue-900 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1754297813553-43eb3a9f65a4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1bmRlcndhdGVyJTIwc3VibWFyaW5lJTIwcm9ib3RpY3MlMjBvY2VhbnxlbnwxfHx8fDE3NzIzNDAxNzV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Underwater Robotics Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-blue-950/90 via-blue-900/85 to-blue-950/90" />
        </div>

        <div className="container mx-auto px-4 relative z-10 h-full flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-5xl md:text-7xl text-white mb-6 font-bold">
              Our <span className="text-red-500">Team</span>
            </h1>
            <p className="text-xl md:text-2xl text-blue-200 leading-relaxed">
              Meet the passionate individuals driving innovation in underwater
              robotics at Bangladesh University of Engineering and Technology
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

      {/* Faculty Advisors Section */}
      <section className="py-20 bg-gradient-to-b from-blue-50 to-blue-100">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="flex items-center justify-center gap-3 mb-4">
              <GraduationCap className="w-12 h-12 text-red-600" />
              <h2 className="text-4xl md:text-5xl text-gray-900 font-bold">
                Faculty <span className="text-red-600">Advisors</span>
              </h2>
            </div>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {facultyMembers.map((faculty, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                whileHover={{
                  y: -10,
                  boxShadow: "0 20px 40px rgba(220, 38, 38, 0.3)",
                }}
                className="bg-white rounded-2xl overflow-hidden shadow-xl border-2 border-gray-200 hover:border-red-600 transition-all duration-300"
              >
                <div className="relative h-80 overflow-hidden bg-gradient-to-b from-blue-100 to-blue-50">
                  <img
                    src={faculty.image}
                    alt={faculty.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl text-gray-900 mb-2 font-bold">
                    {faculty.name}
                  </h3>
                  <p className="text-red-600 font-semibold mb-2">
                    {faculty.title}
                  </p>
                  <p className="text-gray-600 text-sm mb-3">
                    {faculty.department}
                  </p>
                  <div className="flex gap-3">
                    <motion.a
                      href={faculty.email}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="bg-red-600 hover:bg-red-700 text-white p-3 rounded-full transition-colors shadow-lg"
                    >
                      <Mail className="w-5 h-5" />
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Captain & Vice Captain Section */}
      <section className="py-20 bg-gradient-to-b from-blue-100 to-blue-50 relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-64 h-64 bg-red-600 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-600 rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl text-gray-900 font-bold mb-4">
              Team <span className="text-red-600">Leadership</span>
            </h2>
          </motion.div>

          {/* Side by Side Layout */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Team Captain */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="h-full"
            >
              <motion.div
                whileHover={{
                  y: -15,
                  boxShadow: "0 30px 60px rgba(220, 38, 38, 0.4)",
                }}
                className="bg-white rounded-3xl overflow-hidden shadow-2xl border-4 border-red-600 ring-8 ring-red-600/20 h-full flex flex-col"
              >
                <div className="relative h-72 overflow-hidden bg-gradient-to-b from-red-100 to-red-50 flex-shrink-0">
                  <img
                    src={coordinator}
                    alt="Md Abdul Kader"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-red-950/70 to-transparent" />
                  <div className="absolute top-4 right-4 bg-red-600 text-white px-5 py-2 rounded-full text-sm font-bold shadow-xl animate-pulse">
                    CAPTAIN
                  </div>
                </div>
                <div className="p-6 text-center flex-grow flex flex-col">
                  <h3 className="text-2xl md:text-3xl text-gray-900 mb-2 font-bold">
                    Md Abdul Kader
                  </h3>
                  <p className="text-red-600 font-semibold text-lg mb-2">
                    Team Captain
                  </p>
                  <p className="text-gray-600 text-sm mb-3">
                    Department of Naval Architecture & Marine Engineering
                  </p>

                  <div className="flex gap-4 justify-center">
                    <motion.a
                      href="mailto:kazi@me.buet.ac.bd"
                      whileHover={{ scale: 1.15 }}
                      whileTap={{ scale: 0.9 }}
                      className="bg-red-600 hover:bg-red-700 text-white p-3 rounded-full transition-colors shadow-lg"
                    >
                      <Mail className="w-5 h-5" />
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* Vice Captain */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="h-full"
            >
              <motion.div
                whileHover={{
                  y: -15,
                  boxShadow: "0 30px 60px rgba(37, 99, 235, 0.4)",
                }}
                className="bg-white rounded-3xl overflow-hidden shadow-2xl border-4 border-blue-600 ring-8 ring-blue-600/20 h-full flex flex-col"
              >
                <div className="relative h-72 overflow-hidden bg-gradient-to-b from-blue-100 to-blue-50 flex-shrink-0">
                  <img
                    src={touhid}
                    alt="Touhidul Islam"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-950/70 to-transparent" />
                  <div className="absolute top-4 right-4 bg-blue-600 text-white px-5 py-2 rounded-full text-sm font-bold shadow-xl animate-pulse">
                    VICE CAPTAIN
                  </div>
                </div>
                <div className="p-6 text-center flex-grow flex flex-col">
                  <h3 className="text-2xl md:text-3xl text-gray-900 mb-2 font-bold">
                    Touhidul Islam
                  </h3>
                  <p className="text-blue-600 font-semibold text-lg mb-2">
                    Vice Captain
                  </p>
                  <p className="text-gray-600 text-sm mb-3">
                    Department of Naval Architecture & Marine Engineering
                  </p>

                  <div className="flex gap-4 justify-center">
                    <motion.a
                      href="mailto:touhidul@name.buet.ac.bd"
                      whileHover={{ scale: 1.15 }}
                      whileTap={{ scale: 0.9 }}
                      className="bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full transition-colors shadow-lg"
                    >
                      <Mail className="w-5 h-5" />
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* Technical Supervisor */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="h-full"
            >
              <motion.div
                whileHover={{
                  y: -15,
                  boxShadow: "0 30px 60px rgba(16, 185, 129, 0.4)",
                }}
                className="bg-white rounded-3xl overflow-hidden shadow-2xl border-4 border-green-600 ring-8 ring-green-600/20 h-full flex flex-col"
              >
                <div className="relative h-72 overflow-hidden bg-gradient-to-b from-green-100 to-green-50 flex-shrink-0">
                  <img
                    src={mominulHimel}
                    alt="Mominul Islam Hhimel"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-green-950/70 to-transparent" />
                  <div className="absolute top-4 right-4 bg-green-600 text-white px-5 py-2 rounded-full text-sm font-bold shadow-xl animate-pulse">
                    SUPERVISOR
                  </div>
                </div>
                <div className="p-6 text-center flex-grow flex flex-col">
                  <h3 className="text-2xl md:text-3xl text-gray-900 mb-2 font-bold">
                    Mominul Islam Hhimel
                  </h3>
                  <p className="text-green-600 font-semibold text-lg mb-2">
                    Technical Supervisor
                  </p>

                  <div className="flex gap-4 justify-center">
                    <motion.a
                      href="mailto:mominul@name.buet.ac.bd"
                      whileHover={{ scale: 1.15 }}
                      whileTap={{ scale: 0.9 }}
                      className="bg-green-600 hover:bg-green-700 text-white p-3 rounded-full transition-colors shadow-lg"
                    >
                      <Mail className="w-5 h-5" />
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Team Members Section */}
      <section className="py-20 bg-gradient-to-b from-blue-100 to-blue-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl text-gray-900 font-bold mb-4">
              Team <span className="text-blue-600">Members</span>
            </h2>
          </motion.div>

          {/* Software Team */}
          <div className="mb-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center justify-center gap-3 mb-12"
            >
              <Code className="w-10 h-10 text-blue-600" />
              <h3 className="text-3xl md:text-4xl text-gray-900 font-bold">
                <span className="text-blue-600">Software</span> Team
              </h3>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
              {softwareTeam.map((member, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{
                    y: -10,
                    boxShadow: "0 20px 40px rgba(37, 99, 235, 0.4)",
                  }}
                  className={`bg-white rounded-2xl overflow-hidden shadow-xl border-3 transition-all duration-300 ${
                    member.isLead
                      ? "border-blue-600 ring-4 ring-blue-600/20"
                      : "border-gray-200 hover:border-blue-600"
                  }`}
                >
                  <div className="relative h-80 overflow-hidden bg-gradient-to-b from-blue-100 to-blue-50">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-blue-950/70 to-transparent" />
                    {member.isLead && (
                      <div className="absolute top-4 right-4 bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg">
                        LEAD
                      </div>
                    )}
                  </div>
                  <div className="p-6">
                    <h4 className="text-2xl text-gray-900 mb-2 font-bold">
                      {member.name}
                    </h4>
                    <p className="text-blue-600 font-semibold mb-1">
                      {member.role}
                    </p>
                    <p className="text-gray-600 text-sm mb-4">
                      UG ID: {member.ugId}
                    </p>
                    <div className="flex gap-3">
                      <motion.a
                        href={member.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.15 }}
                        whileTap={{ scale: 0.9 }}
                        className="bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full transition-colors shadow-md"
                      >
                        <Linkedin className="w-5 h-5" />
                      </motion.a>
                      <motion.a
                        href={member.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.15 }}
                        whileTap={{ scale: 0.9 }}
                        className="bg-gray-800 hover:bg-gray-900 text-white p-3 rounded-full transition-colors shadow-md"
                      >
                        <Github className="w-5 h-5" />
                      </motion.a>
                      <motion.a
                        href={member.email}
                        whileHover={{ scale: 1.15 }}
                        whileTap={{ scale: 0.9 }}
                        className="bg-red-600 hover:bg-red-700 text-white p-3 rounded-full transition-colors shadow-md"
                      >
                        <Mail className="w-5 h-5" />
                      </motion.a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Design/Mechanical Team */}
          <div className="mb-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center justify-center gap-3 mb-12"
            >
              <Wrench className="w-10 h-10 text-green-600" />
              <h3 className="text-3xl md:text-4xl text-gray-900 font-bold">
                <span className="text-green-600">Design/Mechanical</span> Team
              </h3>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
              {designTeam.map((member, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{
                    y: -10,
                    boxShadow: "0 20px 40px rgba(22, 163, 74, 0.4)",
                  }}
                  className={`bg-white rounded-2xl overflow-hidden shadow-xl border-3 transition-all duration-300 ${
                    member.isLead
                      ? "border-green-600 ring-4 ring-green-600/20"
                      : "border-gray-200 hover:border-green-600"
                  }`}
                >
                  <div className="relative h-80 overflow-hidden bg-gradient-to-b from-green-100 to-green-50">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-green-950/70 to-transparent" />
                    {member.isLead && (
                      <div className="absolute top-4 right-4 bg-green-600 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg">
                        LEAD
                      </div>
                    )}
                  </div>
                  <div className="p-6">
                    <h4 className="text-2xl text-gray-900 mb-2 font-bold">
                      {member.name}
                    </h4>
                    <p className="text-green-600 font-semibold mb-1">
                      {member.role}
                    </p>
                    <p className="text-gray-600 text-sm mb-4">
                      UG ID: {member.ugId}
                    </p>
                    <div className="flex gap-3">
                      <motion.a
                        href={member.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.15 }}
                        whileTap={{ scale: 0.9 }}
                        className="bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full transition-colors shadow-md"
                      >
                        <Linkedin className="w-5 h-5" />
                      </motion.a>
                      <motion.a
                        href={member.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.15 }}
                        whileTap={{ scale: 0.9 }}
                        className="bg-gray-800 hover:bg-gray-900 text-white p-3 rounded-full transition-colors shadow-md"
                      >
                        <Github className="w-5 h-5" />
                      </motion.a>
                      <motion.a
                        href={member.email}
                        whileHover={{ scale: 1.15 }}
                        whileTap={{ scale: 0.9 }}
                        className="bg-red-600 hover:bg-red-700 text-white p-3 rounded-full transition-colors shadow-md"
                      >
                        <Mail className="w-5 h-5" />
                      </motion.a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Electrical Team */}
          <div className="mb-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center justify-center gap-3 mb-12"
            >
              <Zap className="w-10 h-10 text-yellow-600" />
              <h3 className="text-3xl md:text-4xl text-gray-900 font-bold">
                <span className="text-yellow-600">Electrical</span> Team
              </h3>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
              {electricalTeam.map((member, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{
                    y: -10,
                    boxShadow: "0 20px 40px rgba(202, 138, 4, 0.4)",
                  }}
                  className={`bg-white rounded-2xl overflow-hidden shadow-xl border-3 transition-all duration-300 ${
                    member.isLead
                      ? "border-yellow-600 ring-4 ring-yellow-600/20"
                      : "border-gray-200 hover:border-yellow-600"
                  }`}
                >
                  <div className="relative h-80 overflow-hidden bg-gradient-to-b from-yellow-100 to-yellow-50">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-yellow-950/70 to-transparent" />
                    {member.isLead && (
                      <div className="absolute top-4 right-4 bg-yellow-600 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg">
                        LEAD
                      </div>
                    )}
                  </div>
                  <div className="p-6">
                    <h4 className="text-2xl text-gray-900 mb-2 font-bold">
                      {member.name}
                    </h4>
                    <p className="text-yellow-700 font-semibold mb-1">
                      {member.role}
                    </p>
                    <p className="text-gray-600 text-sm mb-4">
                      UG ID: {member.ugId}
                    </p>
                    <div className="flex gap-3">
                      <motion.a
                        href={member.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.15 }}
                        whileTap={{ scale: 0.9 }}
                        className="bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full transition-colors shadow-md"
                      >
                        <Linkedin className="w-5 h-5" />
                      </motion.a>
                      <motion.a
                        href={member.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.15 }}
                        whileTap={{ scale: 0.9 }}
                        className="bg-gray-800 hover:bg-gray-900 text-white p-3 rounded-full transition-colors shadow-md"
                      >
                        <Github className="w-5 h-5" />
                      </motion.a>
                      <motion.a
                        href={member.email}
                        whileHover={{ scale: 1.15 }}
                        whileTap={{ scale: 0.9 }}
                        className="bg-red-600 hover:bg-red-700 text-white p-3 rounded-full transition-colors shadow-md"
                      >
                        <Mail className="w-5 h-5" />
                      </motion.a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Media, Outreach & Sponsor Team */}
          <div className="mb-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center justify-center gap-3 mb-12"
            >
              <Megaphone className="w-10 h-10 text-purple-600" />
              <h3 className="text-3xl md:text-4xl text-gray-900 font-bold">
                <span className="text-purple-600">
                  Media, Outreach & Sponsor
                </span>{" "}
                Team
              </h3>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
              {mediaTeam.map((member, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{
                    y: -10,
                    boxShadow: "0 20px 40px rgba(147, 51, 234, 0.4)",
                  }}
                  className={`bg-white rounded-2xl overflow-hidden shadow-xl border-3 transition-all duration-300 ${
                    member.isLead
                      ? "border-purple-600 ring-4 ring-purple-600/20"
                      : "border-gray-200 hover:border-purple-600"
                  }`}
                >
                  <div className="relative h-80 overflow-hidden bg-gradient-to-b from-purple-100 to-purple-50">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-purple-950/70 to-transparent" />
                    {member.isLead && (
                      <div className="absolute top-4 right-4 bg-purple-600 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg">
                        LEAD
                      </div>
                    )}
                  </div>
                  <div className="p-6">
                    <h4 className="text-2xl text-gray-900 mb-2 font-bold">
                      {member.name}
                    </h4>
                    <p className="text-purple-600 font-semibold mb-1">
                      {member.role}
                    </p>
                    <p className="text-gray-600 text-sm mb-4">
                      UG ID: {member.ugId}
                    </p>
                    <div className="flex gap-3">
                      <motion.a
                        href={member.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.15 }}
                        whileTap={{ scale: 0.9 }}
                        className="bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full transition-colors shadow-md"
                      >
                        <Linkedin className="w-5 h-5" />
                      </motion.a>
                      <motion.a
                        href={member.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.15 }}
                        whileTap={{ scale: 0.9 }}
                        className="bg-gray-800 hover:bg-gray-900 text-white p-3 rounded-full transition-colors shadow-md"
                      >
                        <Github className="w-5 h-5" />
                      </motion.a>
                      <motion.a
                        href={member.email}
                        whileHover={{ scale: 1.15 }}
                        whileTap={{ scale: 0.9 }}
                        className="bg-red-600 hover:bg-red-700 text-white p-3 rounded-full transition-colors shadow-md"
                      >
                        <Mail className="w-5 h-5" />
                      </motion.a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer marqueeBackground="bg-gradient-to-b from-blue-100 to-blue-50" />
    </div>
  );
};

export default Members;
