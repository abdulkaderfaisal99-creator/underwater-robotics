import React from 'react';
import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Send, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import Footer from '../components/Footer';

const ContactUs = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    alert('Thank you for your message! We will get back to you soon.');
  };

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: 'Email',
      value: 'admin@teamblackpearl.com',
      link: 'mailto:admin@teamblackpearl.com',
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: 'Phone',
      value: '+8801732-046270',
      value2: '02 223363605',
      link: 'tel:+8801732-046270',
      link2: 'tel:02223363605',
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: 'Location',
      value: "Underwater Robotics Laboratory (URL) Department of Naval Architecture and Marine Engineering (NAME) Bangladesh University of Engineering and Technology (BUET) Dhaka 1000, Bangladesh",
      link: '#map',
    },
  ];

  const socialLinks = [
    { icon: <Facebook className="w-6 h-6" />, label: 'Facebook', url: 'https://www.facebook.com/profile.php?id=61572429644764' },
    { icon: <Linkedin className="w-6 h-6" />, label: 'LinkedIn', url: 'https://www.linkedin.com/company/112686058/admin/dashboard/' },
    // { icon: <Twitter className="w-6 h-6" />, label: 'Twitter', url: 'https://twitter.com' },
    { icon: <Instagram className="w-6 h-6" />, label: 'Instagram', url: 'https://www.instagram.com/teamblackpearl2026/' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-blue-50 to-blue-100 -mt-20">
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center justify-center overflow-hidden mb-0">
        <div className="absolute inset-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1423666639041-f56000c27a9a?w=1200"
            alt="Contact Us"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-blue-950/90 via-blue-800/85 to-blue-900/90" />
        </div>
        <div className="relative z-10 text-center px-4">
          <motion.h1
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl text-white mb-4 font-bold"
          >
            Get in <span className="text-yellow-300">Touch</span>
          </motion.h1>
          <motion.p
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-blue-200"
          >
            We'd love to hear from you
          </motion.p>
        </div>

        {/* Bottom Wave */}
        <div className="absolute bottom-[-1px] left-0 w-full overflow-hidden leading-[0]">
          <svg className="relative block w-full h-[60px] md:h-[80px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" fill="#ffffff"></path>
          </svg>
        </div>
      </section>

      <div className="py-20 bg-gradient-to-b from-white via-blue-50 to-blue-100">
        <div className="container mx-auto px-4">
          {/* Contact Info Cards */}
          <div className="grid md:grid-cols-3 gap-6 mb-16 max-w-5xl mx-auto">
            {contactInfo.map((info, index) => (
              <motion.a
                key={index}
                href={info.link}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-white p-6 rounded-xl border-2 border-blue-200 hover:border-red-500 shadow-xl text-center group cursor-pointer transition-all"
              >
                <div className="text-red-500 mb-3 flex justify-center group-hover:scale-110 transition-transform">
                  {info.icon}
                </div>
                <h3 className="text-gray-900 text-lg mb-2 font-bold">{info.title}</h3>
                <p className="text-gray-600">
  <a href={info.link} className="hover:text-red-500 transition-colors block text-center">
    {info.value}
  </a>
  {info.value2 && (
    <a href={info.link2} className="hover:text-red-500 transition-colors block text-center">
      {info.value2}
    </a>
  )}
</p>
              </motion.a>
            ))}
          </div>

          {/* Main Content Grid */}
          <div className="grid lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-2xl border-2 border-blue-200 shadow-2xl"
            >
              <h2 className="text-3xl text-gray-900 mb-6 font-bold">Send us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-gray-700 mb-2 font-medium">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    className="w-full bg-blue-50 text-gray-900 px-4 py-3 rounded-lg border-2 border-blue-200 focus:border-red-500 focus:outline-none transition-colors"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-gray-700 mb-2 font-medium">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    className="w-full bg-blue-50 text-gray-900 px-4 py-3 rounded-lg border-2 border-blue-200 focus:border-red-500 focus:outline-none transition-colors"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-gray-700 mb-2 font-medium">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    required
                    className="w-full bg-blue-50 text-gray-900 px-4 py-3 rounded-lg border-2 border-blue-200 focus:border-red-500 focus:outline-none transition-colors"
                    placeholder="How can we help?"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-gray-700 mb-2 font-medium">
                    Message
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={6}
                    className="w-full bg-blue-50 text-gray-900 px-4 py-3 rounded-lg border-2 border-blue-200 focus:border-red-500 focus:outline-none transition-colors resize-none"
                    placeholder="Tell us more about your inquiry..."
                  />
                </div>

                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-lg shadow-lg hover:shadow-red-500/50 transition-all duration-300 flex items-center justify-center gap-2 font-semibold"
                >
                  <Send className="w-5 h-5" />
                  Send Message
                </motion.button>
              </form>
            </motion.div>

            {/* Map & Social Media */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              {/* Embedded Map */}
              <div
                id="map"
                className="bg-white rounded-2xl border-2 border-blue-200 shadow-2xl overflow-hidden h-[400px]"
              >
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3652.093347890446!2d90.38873831543396!3d23.726245094656956!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8bda6d05859%3A0x1a77b32c42c5c67e!2sMechanical%20Engineering%20Building%2C%20BUET!5e0!3m2!1sen!2sbd!4v1234567890123!5m2!1sen!2sbd"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="BUET Mechanical Building Location"
                />
              </div>

              {/* Social Media */}
              <div className="bg-white p-8 rounded-2xl border-2 border-blue-200 shadow-2xl">
                <h3 className="text-2xl text-gray-900 mb-6 font-bold">Follow Us</h3>
                <div className="grid grid-cols-4 gap-4 ">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1, y: -5 }}
                      whileTap={{ scale: 0.95 }}
                      className="bg-blue-100 hover:bg-red-600 p-4 rounded-xl flex items-center justify-center transition-colors shadow-lg group"
                      title={social.label}
                    >
                      <div className="text-blue-600 group-hover:text-white transition-colors">{social.icon}</div>
                    </motion.a>
                  ))}
                </div>
                <p className="text-gray-600 mt-6 text-center">
                  Stay updated with our latest projects and achievements
                </p>
              </div>

              {/* Contact hours */}
              {/* <div className="bg-white p-8 rounded-2xl border-2 border-blue-200 shadow-2xl">
                <h3 className="text-2xl text-gray-900 mb-4 font-bold">Office Hours</h3>
                <div className="space-y-3 text-gray-700">
                  <div className="flex justify-between">
                    <span>Monday - Friday</span>
                    <span className="text-red-600 font-semibold">9:00 AM - 5:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday</span>
                    <span className="text-red-600 font-semibold">10:00 AM - 2:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday</span>
                    <span className="text-red-600 font-semibold">Closed</span>
                  </div>
                </div>
              </div> */}
            </motion.div>
          </div>

          {/* FAQ Section */}
          
        </div>
      </div>
      <Footer marqueeBackground="bg-gradient-to-b from-blue-100 to-blue-50" />
    </div>
  );
};

export default ContactUs;