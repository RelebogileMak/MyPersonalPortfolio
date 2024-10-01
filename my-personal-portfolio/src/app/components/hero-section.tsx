'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export default function HeroSection() {
  return (
    <div className="relative h-screen w-full overflow-hidden bg-gray-100 p-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="absolute left-8 top-8 text-orange-400"
      >
        <h2 className="text-2xl font-bold">RELEBOGILE</h2>
        <p className="mt-2 max-w-xs text-sm text-gray-600">
          WILLFRED MAKGATO
        </p>
      </motion.div>

 <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
      >
        <Image
          src="/placeholder.svg?height=400&width=300"
          alt="Arman Alkahf"
          width={300}
          height={400}
          className="rounded-lg object-cover shadow-lg"
        />
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
        className="absolute bottom-31 left-0 right-0 text-center text-5xl font-bold text-orange-400 sm:text-6xl md:text-7xl lg:text-8xl"
      >
        WELCOME TO
      </motion.h1>
      <motion.h1
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="absolute bottom-16 left-0 right-0 text-center text-5xl font-bold text-orange-400 sm:text-6xl md:text-7xl lg:text-8xl"
      >
        MY PORTFOLIO
      </motion.h1>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.7 }}
        className="absolute bottom-8 left-8"
      >
        <h3 className="text-xl font-semibold text-orange-400">
          FRONT-END 
          <br />
          DEVELOPER
        </h3>
      </motion.div>
    </div>
  )
}