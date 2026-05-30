import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { FileText, Download, Calendar, User, Award, ExternalLink, Search } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import Footer from '../components/Footer';
import { useState } from 'react';

const Papers = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedYear, setSelectedYear] = useState('All');

  const papers = [

    {
      year: '2026',
      title: 'Robosub 2026 Technical Documents',
      authors: 'Team Black Pearl',
      conference: 'RoboSub 2026 International Competition',
      abstract: 'Team Black Pearl develops an underwater autonomous vehicle named “Dubojan” for Robosub 2026. The focus of our team is to develop a new lightweight AUV with the ability to perform all the tasks and also leave some room for future modification also. The work is divided into four sub teams: Mechanical and Design Team, Electronics Team, Software Team, Media and Outreach Team. Our focus is to gather experience and to do as many tasks as possible.',
      pdfUrl: 'https://drive.google.com/file/d/1NwOsID6VA1giFZwqop6BM5QIDm1zQESr/view?usp=drive_link',
      //downloads: 342,
      category: 'Underwater Robotics Competition',
    },
    {
      year: '2026',
      title: 'WFSA 2026 poster - Technical Poster',
      authors: 'Team Black Pearl',
      conference: 'WFSA 2026 - Worldwide Ferry Safety Association',
      abstract: 'The Niger Drift is a modern CNG-powered ferry that provides a practical and eco-friendly transportation solution along the Niger River. Designed to operate on the Lokoja–Onitsha route, the vessel carries 200 passengers along with their personal belongings and market cargo, directly supporting local economies and strengthening community connectivity. In response to rising fuel prices following the removal of fuel subsidies in 2023 and in line with Nigeria’s Presidential Initiative on Compressed Natural Gas (CNG), the ferry adopts CNG propulsion as a cleaner and more cost-effective alternative to conventional diesel engines. An additional battery system provides emergency power for critical onboard components when required. To further enhance operational sustainability, the vessel is equipped with auxiliary energy sources, including solar panels and a hydrokinetic turbine. Designed for shallow-water operation under strict draft limitations, the hull form and overall layout are optimized to ensure safety, affordability, and stability, making the Niger Drift a sustainable and innovative solution for inland waterway transportation in Nigeria.',
      pdfUrl: 'https://drive.google.com/file/d/1ukn8SdtAdqSsJpvDEKC89e1XbscyTndu/view?usp=drive_link',
      //downloads: 428,
      category: 'Ferry Design Competition',
    },
    {
      year: '2025',
      title: 'WFSA 2025 poster',
      authors: 'Team Black Pearl',
      conference: 'WFSA 2025 - Worldwide Ferry Safety Association',
      abstract: 'Naija Spirit is an electric ferry designed to enhance transportation on the Lagos inland waterway, a vital route for connecting communities, supporting daily commutes, and promoting economic growth. Leveraging Lagos’s abundant solar energy potential while addressing challenges such as limited power supply, the vessel incorporates energy-efficient systems to ensure reliable operation. Its primary propulsion system is battery-powered, while a hydrogen fuel cell serves as an emergency propulsion source. To further improve sustainability, Naija Spirit is equipped with auxiliary power systems, including perovskite solar cells, a hydrokinetic turbine, and a power regeneration system integrated into the propeller. Designed for shallow-water operations, the ferry is optimized for stability while meeting key constraints such as water depth and bridge clearance. Operating between Ikorodu and CMS, it facilitates seamless multimodal transportation and accommodates up to 200 passengers. Through a comprehensive design spiral process, Naija Spirit achieves an optimal balance of safety, affordability, and aesthetics, providing a sustainable and innovative solution for urban waterway transportation in Lagos.',
      pdfUrl: 'https://drive.google.com/file/d/1vJYpOXiThHav_f1Y_2cciaG5DntnWC6C/view?usp=drive_link',
      //downloads: 98,
      category: 'Ferry Design Competition',
    },
    {
      year: '2024',
      title: 'WFSA 2024 poster - Technical Poster',
      authors: 'Team Black Pearl',
      conference: 'WFSA 2024 - Worldwide Ferry Safety Association',
      abstract: 'Black Pearl, an electric powered Ro-Pax ferry, is designed to operate in Nigeria on the Niger river starting its origin at Onitsha with two other stoppages at Ndoni and Idah. This ferry is designed to carry 200 passengers and 20 (four-wheeled) vehicles',
      pdfUrl: 'https://drive.google.com/file/d/1MRw9XPJsqI6Iv0jSjODnP4DS5q4WQvq8/view?usp=sharing',
      //downloads: 156,
      category: 'Ferry Design COmpetition',
    },
    {
      year: '2023',
      title: 'WFSA 2023 poster - Technical Poster',
      authors: 'Team Black Pearl',
      conference: 'WFSA 2023 - Worldwide Ferry Safety Association',
      abstract: 'Green Falcon Express, an electric powered 100 passenger express ferry, is designed to operate in Manila, Philippines on the Pasig River between Guadalupe and Lawton.',
      pdfUrl: 'https://drive.google.com/file/d/1N3PqQgNCw0UQTPUfDf_1K7qd4p0z4rfJ/view?usp=drive_link',
      //downloads: 189,
      category: 'Ferry Design Competition',
    },
    
  ];

  const years = ['All', ...Array.from(new Set(papers.map(p => p.year))).sort().reverse()];
  const categories = ['All', ...Array.from(new Set(papers.map(p => p.category))).sort()];

  const filteredPapers = papers.filter(paper => {
    const matchesSearch = 
      paper.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      paper.authors.toLowerCase().includes(searchQuery.toLowerCase()) ||
      paper.abstract.toLowerCase().includes(searchQuery.toLowerCase()) ||
      paper.category.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesYear = selectedYear === 'All' || paper.year === selectedYear;
    
    return matchesSearch && matchesYear;
  });

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-blue-100 -mt-20">
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center justify-center bg-[#1C398E]">
        <div className="relative px-4 text-center">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <FileText className="w-16 h-16 md:w-20 md:h-20 text-white mx-auto mb-6" />
            <h1 className="text-4xl md:text-6xl text-white mb-4 font-bold">
              Technical <span className="text-yellow-300">Documents</span>
            </h1>
            <p className="text-lg md:text-xl text-blue-100 max-w-3xl mx-auto">
              Explore our published research and technical documentation from international competitions and academic conferences
            </p>
          </motion.div>
        </div>

        {/* Bottom Wave */}
        <div className="absolute bottom-[-1px] left-0 w-full overflow-hidden leading-[0]">
          <svg className="relative block w-full h-[60px] md:h-[80px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" fill="#f9fafb"></path>
          </svg>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-8 bg-gray-50 sticky top-20 z-40 border-b border-gray-200">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-4 max-w-5xl mx-auto">
            {/* Search Bar */}
            <div className="flex-1 relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search papers by title, authors, category..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 border-2 border-gray-300 rounded-lg focus:border-[#BD0C0D] focus:outline-none transition-colors text-gray-900"
              />
            </div>

            {/* Year Filter */}
            <select
              value={selectedYear}
              onChange={(e) => setSelectedYear(e.target.value)}
              className="px-6 py-3 border-2 border-gray-300 rounded-lg focus:border-[#BD0C0D] focus:outline-none transition-colors text-gray-900 bg-white cursor-pointer"
            >
              {years.map(year => (
                <option key={year} value={year}>{year}</option>
              ))}
            </select>
          </div>

          {/* Results Count */}
          <div className="text-center mt-4 text-gray-600">
            Showing {filteredPapers.length} of {papers.length} papers
          </div>
        </div>
      </section>

      {/* Papers Grid */}
      <section className="py-12 md:py-20 bg-gradient-to-b from-blue-50 to-blue-100">
        <div className="container mx-auto px-4">
          <AnimatePresence mode="wait">
            {filteredPapers.length === 0 ? (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="text-center py-20"
              >
                <FileText className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                <h3 className="text-2xl text-gray-600 mb-2">No papers found</h3>
                <p className="text-gray-500">Try adjusting your search criteria</p>
              </motion.div>
            ) : (
              <div className="grid gap-6 md:gap-8 max-w-6xl mx-auto">
                {filteredPapers.map((paper, index) => (
                  <PaperCard key={index} paper={paper} index={index} />
                ))}
              </div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* Statistics Section */}
      

      {/* Google Drive Documents Section */}
      

      <Footer />
    </div>
  );
};

const PaperCard = ({ paper, index }: { paper: any; index: number }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ y: -5 }}
      className="bg-gradient-to-br from-white to-gray-50 p-6 md:p-8 rounded-xl shadow-lg border-2 border-gray-200 hover:border-[#BD0C0D] transition-all duration-300"
    >
      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
        <div className="flex-1">
          <div className="flex flex-wrap items-center gap-3 mb-3">
            <span className="inline-flex items-center gap-2 px-3 py-1 bg-[#BD0C0D] text-white rounded-full text-sm font-semibold">
              <Calendar className="w-4 h-4" />
              {paper.year}
            </span>
            <span className="inline-flex items-center px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold">
              {paper.category}
            </span>
          </div>

          <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">{paper.title}</h3>
          
          <div className="flex items-center gap-2 text-gray-600 mb-2 text-sm md:text-base">
            <User className="w-4 h-4" />
            <span>{paper.authors}</span>
          </div>

          <p className="text-sm md:text-base text-gray-500 italic">{paper.conference}</p>
        </div>

        <div className="flex md:flex-col gap-2">
          <motion.a
            href={paper.pdfUrl}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-[#BD0C0D] text-white rounded-lg hover:bg-red-700 transition-colors font-semibold text-sm md:text-base whitespace-nowrap"
          >
            <Download className="w-4 h-4" />
            Download
          </motion.a>
          
          <motion.button
            onClick={() => setIsExpanded(!isExpanded)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-semibold text-sm md:text-base whitespace-nowrap"
          >
            <ExternalLink className="w-4 h-4" />
            {isExpanded ? 'Hide' : 'Details'}
          </motion.button>
        </div>
      </div>

      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="border-t-2 border-gray-200 pt-4 mt-4"
          >
            <h4 className="text-lg font-bold text-gray-900 mb-2">Abstract</h4>
            <p className="text-gray-700 leading-relaxed mb-4 text-sm md:text-base">{paper.abstract}</p>
            
            <div className="flex items-center gap-4 text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <Download className="w-4 h-4 text-[#BD0C0D]" />
                <span>{paper.downloads} downloads</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default Papers;