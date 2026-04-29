'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState, useRef } from 'react'
import { useInView } from 'framer-motion'

interface Service {
  id: string
  icon: string
  title: string
  description: string
  gradient: string
}

const services: Service[] = [
  {
    id: 'garden',
    icon: '🌿',
    title: 'Open Garden Venue',
    description: 'The signature feature of Ram Janki Palace — a lush, beautifully maintained open garden that serves as the perfect setting for weddings, receptions, mehendi functions, and cultural nights under the open sky. Surrounded by vibrant greenery and enhanced with floral décor and royal lighting, it creates a magical atmosphere for every grand celebration.',
    gradient: 'from-green-500 to-emerald-600'
  },
  {
    id: 'decoration',
    icon: '🌸',
    title: 'Decoration & Theme Setup',
    description: 'From traditional mandaps that exude timeless charm to modern floral backdrops that radiate contemporary elegance, our professional décor team transforms every corner of the venue into a visual masterpiece. With exquisite stage lighting, thoughtfully designed thematic entrances, and gracefully arranged seating, we create an ambiance that reflects your unique love story and celebrates your dream wedding in the most enchanting way.',
    gradient: 'from-pink-500 to-rose-600'
  },
  {
    id: 'catering',
    icon: '🍽️',
    title: 'Catering Services',
    description: 'Treat your guests to delicious food that everyone will love. Our catering team prepares a variety of vegetarian and non-vegetarian dishes with authentic Indian flavors. From traditional favorites to modern specialties, every dish is carefully made to make your wedding feast tasty, beautiful, and memorable.',
    gradient: 'from-orange-500 to-red-600'
  },
  {
    id: 'entertainment',
    icon: '🎵',
    title: 'Entertainment & Music',
    description: 'Elevate your celebration with unforgettable entertainment tailored to your special day. Enjoy live singers, professional anchors, and dynamic DJs who set the perfect mood throughout the event. We also specialize in spectacular theme-based bride and groom entries, designed to captivate your guests and create magical, lasting memories. Every performance is thoughtfully curated to ensure a joyous and vibrant celebration from start to finish.',
    gradient: 'from-purple-500 to-indigo-600'
  },
  {
    id: 'parking',
    icon: '🚗',
    title: 'Parking & Facilities',
    description: 'Our venue offers a spacious and well-organized parking area with attendants to help your guests park safely. Combined with bright lighting and friendly support staff, we make sure every guest has a smooth and hassle-free experience from arrival to departure.',
    gradient: 'from-blue-500 to-cyan-600'
  },
  {
    id: 'security',
    icon: '🛡️',
    title: 'Security & Safety',
    description: 'Your safety is our priority. Trained security staff are present throughout the event to ensure a safe and comfortable experience for you and your guests. With careful monitoring and quick support, you can enjoy your celebration without any worries.',
    gradient: 'from-gray-600 to-gray-800'
  },
]

export default function ServicesSection() {
  const [selectedService, setSelectedService] = useState<Service | null>(null)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <section
      id="services"
      ref={ref}
      className="py-20 bg-gradient-to-br from-maroon-50 to-cream-100 dark:from-gray-800 dark:to-gray-900 relative overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-floral opacity-5" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-maroon-800 dark:text-maroon-400 mb-6">
            Our Services
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-gold-500 to-maroon-500 mx-auto mb-6" />
          <p className="text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
            Click on any service to explore the details
          </p>
        </motion.div>

        {/* Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              className={`relative cursor-pointer group`}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -10 }}
              onClick={() => setSelectedService(service)}
            >
              <div className={`bg-gradient-to-br ${service.gradient} p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 h-full flex flex-col items-center justify-center text-center min-h-[250px]`}>
                <motion.div
                  className="text-6xl mb-4"
                  whileHover={{ scale: 1.2, rotate: 10 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  {service.icon}
                </motion.div>
                <h3 className="font-heading text-2xl md:text-3xl font-bold text-white mb-3">
                  {service.title}
                </h3>
                <motion.div
                  className="mt-auto"
                  whileHover={{ x: 5 }}
                >
                  <span className="text-white text-lg flex items-center gap-2">
                    Learn More
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedService && (
          <motion.div
            className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedService(null)}
          >
            <motion.div
              className="bg-white dark:bg-gray-800 rounded-3xl shadow-2xl max-w-2xl w-full max-h-[80vh] overflow-y-auto"
              initial={{ scale: 0.8, y: 50 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.8, y: 50 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className={`bg-gradient-to-r ${selectedService.gradient} p-8 rounded-t-3xl relative`}>
                <button
                  onClick={() => setSelectedService(null)}
                  className="absolute top-4 right-4 text-white hover:bg-white/20 rounded-full p-2 transition-colors"
                >
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
                <div className="text-6xl mb-4">{selectedService.icon}</div>
                <h3 className="font-heading text-3xl md:text-4xl font-bold text-white">
                  {selectedService.title}
                </h3>
              </div>

              {/* Modal Body */}
              <div className="p-8">
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                  {selectedService.description}
                </p>
              </div>

              {/* Modal Footer */}
              <div className="p-8 pt-0 flex gap-4">
                <motion.a
                  href="tel:8210120133"
                  className="flex-1 px-6 py-3 bg-gold-500 hover:bg-gold-600 text-white font-semibold rounded-full text-center transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Call Now
                </motion.a>
                <motion.a
                  href="https://wa.me/918210120133"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 px-6 py-3 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-full text-center transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  WhatsApp
                </motion.a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
