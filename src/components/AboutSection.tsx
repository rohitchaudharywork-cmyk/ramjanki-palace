'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const highlights = [
  { icon: '🌿', text: 'Expansive open garden' },
  { icon: '✨', text: 'Beautifully lit evening ambience with stage setup' },
  { icon: '🌸', text: 'Custom floral and theme-based decorations' },
  { icon: '🍽️', text: 'On-site catering and event support team' },
  { icon: '🚗', text: 'Ample parking space with attendants' },
  { icon: '⚡', text: 'Power backup and clean facilities' },
  { icon: '🗺️', text: 'Easy connectivity' },
]

export default function AboutSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  return (
    <section
      id="about"
      ref={ref}
      className="py-20 bg-cream-50 dark:bg-gray-900 relative overflow-hidden"
    >
      {/* Decorative Background */}
      <div className="absolute inset-0 bg-mandala opacity-5" />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center mb-16"
        >
          <motion.h2
            className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-maroon-800 dark:text-maroon-400 mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            About Ram Janki Palace
          </motion.h2>

          <motion.div
            className="w-24 h-1 bg-gradient-to-r from-gold-500 to-maroon-500 mx-auto mb-8"
            initial={{ width: 0 }}
            animate={isInView ? { width: 96 } : { width: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          />

          <motion.p
            className="text-lg md:text-xl text-gray-700 dark:text-gray-300 leading-relaxed mb-6"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Located in Muzaffarpur Darbhanga Road, Ram Janki Palace is one of the most elegant and spacious open-garden wedding venues in the region.
          </motion.p>

          <motion.p
            className="text-lg md:text-xl text-gray-700 dark:text-gray-300 leading-relaxed mb-6"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            The venue is celebrated for its royal outdoor ambience, lush green surroundings, and perfect setup for evening celebrations under the stars.
          </motion.p>

          <motion.p
            className="text-lg md:text-xl text-gray-700 dark:text-gray-300 leading-relaxed"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            It offers a picturesque environment for weddings, receptions, engagements, and festive events — combining Indian tradition with a touch of modern grandeur. Every celebration here feels warm, colorful, and unforgettable.
          </motion.p>
        </motion.div>

        {/* Venue Highlights */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          <h3 className="font-heading text-3xl md:text-4xl font-bold text-center text-maroon-800 dark:text-maroon-400 mb-12">
            Venue Highlights
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {highlights.map((highlight, index) => (
              <motion.div
                key={index}
                className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 border-2 border-gold-200 dark:border-gold-800"
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.5, delay: 1.4 + index * 0.1 }}
                whileHover={{ scale: 1.05, borderColor: '#eab308' }}
              >
                <div className="text-4xl mb-4">{highlight.icon}</div>
                <p className="text-gray-800 dark:text-gray-200 font-medium text-lg">
                  {highlight.text}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Decorative Elements */}
      <motion.div
        className="absolute top-20 right-10 w-40 h-40 bg-gold-400/10 rounded-full blur-3xl"
        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 4, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-20 left-10 w-60 h-60 bg-maroon-400/10 rounded-full blur-3xl"
        animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 5, repeat: Infinity, delay: 1 }}
      />
    </section>
  )
}
