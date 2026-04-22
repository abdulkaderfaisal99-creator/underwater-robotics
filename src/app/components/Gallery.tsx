import React from "react";
import { motion } from "motion/react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

import gallery1 from "../../assets/gallery.png"; 
import gallery2 from "../../assets/gallery-cameradetection.jpeg"; 
import gallery3 from "../../assets/lasercuttingoperation.jpeg"; 
import gallery4 from "../../assets/Final assmebly.jpeg"; 

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
      alt: "Camera detection -Real time vision testing",
    },
    {
      url: gallery3,
      alt: "Laser cutting operation",
    },
    {
      url: gallery4,
      alt: "Final assmebly",
    },
    {
      url: gallery4,
      alt: "Final assmebly",
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
