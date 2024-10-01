'use client'

import { motion, useAnimationControls } from 'framer-motion'
import Image from 'next/image'
import { useEffect } from 'react'

const languages = [
  { name: 'HTML5', logo: '/placeholder.svg?height=50&width=50' },
  { name: 'CSS', logo: '/placeholder.svg?height=50&width=50' },
  { name: 'JavaScript', logo: '/placeholder.svg?height=50&width=50' },
  { name: 'React', logo: '/placeholder.svg?height=50&width=50' },
  { name: 'Next.js', logo: '/placeholder.svg?height=50&width=50' },
  { name: 'Tailwind CSS', logo: '/placeholder.svg?height=50&width=50' },
  { name: 'Framer Motion', logo: '/placeholder.svg?height=50&width=50' },
  { name: 'PHP', logo: '/placeholder.svg?height=50&width=50' },
  { name: 'Java', logo: '/placeholder.svg?height=50&width=50' },
  { name: 'TypeScript', logo: '/placeholder.svg?height=50&width=50' },
]

export default function HeroWithLanguages() {
  const controls = useAnimationControls()

  useEffect(() => {
    controls.start({
      x: [0, -1920],
      transition: {
        x: {
          repeat: Infinity,
          repeatType: 'loop',
          duration: 30,
          ease: 'linear',
        },
      },
    })
  }, [controls])

  return (

      <div className="relative h-24 w-full overflow-hidden bg-gray-200">
        <motion.div
          className="absolute flex h-full items-center"
          animate={controls}
        >
          {[...languages, ...languages].map((lang, index) => (
            <div
              key={index}
              className="mx-8 flex flex-col items-center justify-center"
            >
              <Image
                src={lang.logo}
                alt={`${lang.name} logo`}
                width={50}
                height={50}
                className="h-12 w-12 object-contain"
              />
              <span className="mt-2 text-sm font-medium text-gray-600">
                {lang.name}
              </span>
            </div>
          ))}
        </motion.div>
      </div>

  )
}