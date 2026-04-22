import React from "react";
import { motion } from "motion/react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

import gallery1 from "../../assets/gallery.png"; 
import gallery2 from "../../assets/gallery-cameradetection.jpeg"; 

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const images = [
    {
      url: gallery1,
      alt: "Underwater rover",
    },
    {
      url: "https://lh3.googleusercontent.com/d/1KR3vcum6JnYt_SjHPzcqVTzuYy52xiAk",
      alt: "Engineering Workspace Laboratory",
    },
    {
      url: gallery2,
      alt: "Camera detection 2-Real time vision testing",
    },
    {
      url: "https://images.unsplash.com/photo-1553408226-42ecf81a214c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaXJjdWl0JTIwYm9hcmQlMjBlbGVjdHJvbmljc3xlbnwxfHx8fDE3NjkyNjQ1Njh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      alt: "Circuit Board Electronics",
    },
    {
      url: "https://images.unsplash.com/photo-1581092334651-ddf26d9a09d0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyb2JvdCUyMG1lY2hhbmljYWwlMjBlbmdpbmVlcmluZ3xlbnwxfHx8fDE3NjkyNjQ1Njh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      alt: "Robot Mechanical Engineering",
    },
    {
      url: "https://images.unsplash.com/photo-1739298061740-5ed03045b280?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWFtJTIwY29sbGFib3JhdGlvbiUyMHdvcmtzcGFjZXxlbnwxfHx8fDE3NjkxOTIzMzZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      alt: "Team Collaboration Workspace",
    },
    {
      url: "https://images.unsplash.com/photo-1623494351017-976290fd8496?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1bmRlcndhdGVyJTIwcGhvdG9ncmFwaHklMjBtYXJpbmV8ZW58MXx8fHwxNzY5MjY0NTY5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      alt: "Underwater Photography Marine",
    },
    {
      url: "https://images.unsplash.com/photo-1557324232-b8917d3c3dcb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21wdXRlciUyMHByb2dyYW1taW5nJTIwY29kZXxlbnwxfHx8fDE3NjkyMjkyODN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      alt: "Computer Programming Code",
    },
    {
      url: "https://images.unsplash.com/photo-1708454088918-9df52c542bc5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmZXJyeSUyMHNoaXAlMjBvY2VhbnxlbnwxfHx8fDE3NjkyNjQ1NzB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      alt: "Ferry Ship Ocean",
    },
    {
      url: "https://images.unsplash.com/photo-1760493828288-d2dbb70d18c9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWNobm9sb2d5JTIwaW5ub3ZhdGlvbiUyMGxhYnxlbnwxfHx8fDE3NjkxODA0NTZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      alt: "Technology Innovation Lab",
    },
    {
      url: "https://images.unsplash.com/photo-1613213322190-b9eb59313eec?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZWVwJTIwc2VhJTIwdW5kZXJ3YXRlcnxlbnwxfHx8fDE3NjkyNjQ1NzB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      alt: "Deep Sea Underwater",
    },
    {
      url: "https://images.unsplash.com/photo-1764769092438-0c4907e30e8c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYXJpdGltZSUyMGVuZ2luZWVyaW5nJTIwdmVzc2VsfGVufDF8fHx8MTc2OTI2NDU3MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      alt: "Maritime Engineering Vessel",
    },
    {
      url: "https://images.unsplash.com/photo-1767448068187-5be3cbc848c7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyb2JvdGljcyUyMGNvbXBvbmVudHMlMjBwYXJ0c3xlbnwxfHx8fDE3NjkyNjQ1NzF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      alt: "Robotics Components Parts",
    },
    {
      url: "https://images.unsplash.com/photo-1768796370407-6d36619e7d6d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHVkZW50cyUyMHRlYW0lMjBlbmdpbmVlcmluZ3xlbnwxfHx8fDE3NjkyNjQ1NzF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      alt: "Students Team Engineering",
    },
    {
      url: "https://images.unsplash.com/photo-1610112238174-ed5e721668d9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvY2VhbiUyMHdhdmVzJTIwYmx1ZSUyMHdhdGVyfGVufDF8fHx8MTc2OTE2NTUxN3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      alt: "Ocean Waves Blue Water",
    },
    {
      url: "https://images.unsplash.com/photo-1721244654346-9be0c0129e36?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzaGlwJTIwZGVzaWduJTIwYmx1ZXByaW50fGVufDF8fHx8MTc2OTI2NDU3Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      alt: "Ship Design Blueprint",
    },
    {
      url: "https://images.unsplash.com/photo-1759712659045-cc187c68f718?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1bmRlcndhdGVyJTIwdmVoaWNsZSUyMHN1Ym1hcmluZXxlbnwxfHx8fDE3NjkyNjQ1NzJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      alt: "Underwater Vehicle Submarine",
    },
    {
      url: "https://images.unsplash.com/photo-1763078163232-6e3eeae24dad?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYXJpbmUlMjB0ZWNobm9sb2d5JTIwZXF1aXBtZW50fGVufDF8fHx8MTc2OTI2NDU3M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      alt: "Marine Technology Equipment",
    },
    {
      url: "https://images.unsplash.com/photo-1762345127396-ac4a970436c3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21wZXRpdGlvbiUyMHRyb3BoeSUyMGF3YXJkfGVufDF8fHx8MTc2OTI2NDU3M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      alt: "Competition Trophy Award",
    },
  ];

  const openImage = (index: number) => {
    setSelectedImage(index);
    document.body.style.overflow = "hidden";
  };

  const closeImage = () => {
    setSelectedImage(null);
    document.body.style.overflow = "auto";
  };

  const nextImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % images.length);
    }
  };

  const prevImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage - 1 + images.length) % images.length);
    }
  };

  // Handle keyboard navigation
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowRight") nextImage();
    if (e.key === "ArrowLeft") prevImage();
    if (e.key === "Escape") closeImage();
  };

  return (
    <section className="py-20 bg-gradient-to-b from-blue-50 to-blue-100">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl text-center mb-4 text-gray-900 font-bold"
        >
          Our <span className="text-red-500">Gallery</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-center text-gray-700 mb-12 max-w-2xl mx-auto"
        >
          A collection of moments capturing our team's journey through
          engineering innovation, underwater exploration, and technical
          excellence in robotics and marine technology.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          {/* Zig-Zag (Brick) Grid Pattern */}
          <div className="max-w-7xl mx-auto">
            {/* Row 1 - 3 items */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-4">
              {images.slice(0, 3).map((image, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  whileHover={{ scale: 1.05, zIndex: 10 }}
                  className={`relative overflow-hidden rounded-lg shadow-lg group cursor-pointer ${
                    index === 2 ? "col-span-2 md:col-span-1" : ""
                  }`}
                  onClick={() => openImage(index)}
                  style={{ height: "280px" }}
                >
                  <img
                    src={image.url}
                    alt={image.alt}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-950/90 via-blue-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                    <p className="text-white p-4 text-sm">{image.alt}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Row 2 - 2 items (offset) */}
            <div className="grid grid-cols-2 gap-4 mb-4 md:px-32">
              {images.slice(3, 5).map((image, index) => (
                <motion.div
                  key={index + 3}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: (index + 3) * 0.05 }}
                  whileHover={{ scale: 1.05, zIndex: 10 }}
                  className="relative overflow-hidden rounded-lg shadow-lg group cursor-pointer"
                  onClick={() => openImage(index + 3)}
                  style={{ height: "280px" }}
                >
                  <ImageWithFallback
                    src={image.url}
                    alt={image.alt}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-950/90 via-blue-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                    <p className="text-white p-4 text-sm">{image.alt}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Row 3 - 3 items */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-4">
              {images.slice(5, 8).map((image, index) => (
                <motion.div
                  key={index + 5}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: (index + 5) * 0.05 }}
                  whileHover={{ scale: 1.05, zIndex: 10 }}
                  className={`relative overflow-hidden rounded-lg shadow-lg group cursor-pointer ${
                    index === 2 ? "col-span-2 md:col-span-1" : ""
                  }`}
                  onClick={() => openImage(index + 5)}
                  style={{ height: "280px" }}
                >
                  <ImageWithFallback
                    src={image.url}
                    alt={image.alt}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-950/90 via-blue-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                    <p className="text-white p-4 text-sm">{image.alt}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Row 4 - 2 items (offset) */}
            <div className="grid grid-cols-2 gap-4 mb-4 md:px-32">
              {images.slice(8, 10).map((image, index) => (
                <motion.div
                  key={index + 8}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: (index + 8) * 0.05 }}
                  whileHover={{ scale: 1.05, zIndex: 10 }}
                  className="relative overflow-hidden rounded-lg shadow-lg group cursor-pointer"
                  onClick={() => openImage(index + 8)}
                  style={{ height: "280px" }}
                >
                  <ImageWithFallback
                    src={image.url}
                    alt={image.alt}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-950/90 via-blue-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                    <p className="text-white p-4 text-sm">{image.alt}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Row 5 - 3 items */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-4">
              {images.slice(10, 13).map((image, index) => (
                <motion.div
                  key={index + 10}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: (index + 10) * 0.05 }}
                  whileHover={{ scale: 1.05, zIndex: 10 }}
                  className={`relative overflow-hidden rounded-lg shadow-lg group cursor-pointer ${
                    index === 2 ? "col-span-2 md:col-span-1" : ""
                  }`}
                  onClick={() => openImage(index + 10)}
                  style={{ height: "280px" }}
                >
                  <ImageWithFallback
                    src={image.url}
                    alt={image.alt}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-950/90 via-blue-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                    <p className="text-white p-4 text-sm">{image.alt}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Row 6 - 2 items (offset) */}
            <div className="grid grid-cols-2 gap-4 mb-4 md:px-32">
              {images.slice(13, 15).map((image, index) => (
                <motion.div
                  key={index + 13}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: (index + 13) * 0.05 }}
                  whileHover={{ scale: 1.05, zIndex: 10 }}
                  className="relative overflow-hidden rounded-lg shadow-lg group cursor-pointer"
                  onClick={() => openImage(index + 13)}
                  style={{ height: "280px" }}
                >
                  <ImageWithFallback
                    src={image.url}
                    alt={image.alt}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-950/90 via-blue-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                    <p className="text-white p-4 text-sm">{image.alt}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Row 7 - 4 items (remaining) */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {images.slice(15, 19).map((image, index) => (
                <motion.div
                  key={index + 15}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: (index + 15) * 0.05 }}
                  whileHover={{ scale: 1.05, zIndex: 10 }}
                  className="relative overflow-hidden rounded-lg shadow-lg group cursor-pointer"
                  onClick={() => openImage(index + 15)}
                  style={{ height: "280px" }}
                >
                  <ImageWithFallback
                    src={image.url}
                    alt={image.alt}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-950/90 via-blue-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                    <p className="text-white p-4 text-sm">{image.alt}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Lightbox Modal */}
        {selectedImage !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4"
            onClick={closeImage}
            onKeyDown={handleKeyDown}
            tabIndex={0}
          >
            {/* Close Button */}
            <button
              onClick={closeImage}
              className="absolute top-4 right-4 z-50 bg-red-600 hover:bg-red-700 text-white p-3 rounded-full transition-all duration-300 shadow-lg"
              aria-label="Close"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Previous Button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                prevImage();
              }}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-50 bg-blue-900/80 hover:bg-red-600 text-white p-3 rounded-full transition-all duration-300 shadow-lg"
              aria-label="Previous"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            {/* Next Button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                nextImage();
              }}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-50 bg-blue-900/80 hover:bg-red-600 text-white p-3 rounded-full transition-all duration-300 shadow-lg"
              aria-label="Next"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Image Container */}
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              className="relative max-w-7xl max-h-[90vh] w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <ImageWithFallback
                src={images[selectedImage].url}
                alt={images[selectedImage].alt}
                className="w-full h-full object-contain rounded-lg shadow-2xl"
              />

              {/* Image Caption */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent p-6 rounded-b-lg">
                <p className="text-white text-lg text-center">
                  {images[selectedImage].alt}
                </p>
                <p className="text-blue-300 text-sm text-center mt-2">
                  {selectedImage + 1} / {images.length}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Gallery;
