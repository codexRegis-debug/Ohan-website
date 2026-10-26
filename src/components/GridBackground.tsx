/**/
import { Box } from '@chakra-ui/react'
import { motion } from 'framer-motion'

const MotionBox = motion.create(Box)

export const GridBackground = () => {
  const gridOrder = [
    0, 1, 2, 3,
    7, 6, 5, 4,
    8, 9, 10, 11,
    15, 14, 13, 12,
  ]

  return (
    <>
      <Box
        position='fixed'
        inset={0}
        zIndex={0}
        bg='black'
        overflow='hidden'
        pointerEvents='none'
        opacity={0.98}
      >
        <Box
          position='absolute'
          inset={0}
          bg='radial-gradient(circle at center, transparent 20%, black 80%)'
          zIndex={1}
        />
        <Box
          position='absolute'
          top='50%'
          left='50%'
          transform='translate(-50%, -50%)'
          display='grid'
          gridTemplateColumns='repeat(4, 1fr)'
          gap='20px'
          opacity={0.9}
        >
          {Array.from({ length: 16 }).map((_, i) => {
            const waveIndex = gridOrder.indexOf(i)

            return (
              <MotionBox
                key={i}
                w='28px'
                h='28px'
                borderRadius='md'
                bg='witeAlpha.50'
                animate={{
                  opacity: [0.05, 0.25, 0.05],
                  scale: [0.9, 1.1, 0.9],
                  backgroundColor: [
                    'rgba(255, 255, 255, 0.04)',
                    'rgba(99, 102, 241, 0.35)',
                    'rgba(255, 255, 255, 0.04)',
                  ],
                  boxShadow: [
                    '0 0 0px rgba(99, 102, 241, 0)',
                    '0 0 40px rgba(99, 102, 241, 0.4)',
                    '0 0 0px rgba(99, 102, 241, 0)',
                  ]
                }}
                transition={{
                  duration:  2.5,
                  repeat: Infinity,
                  delay: waveIndex * 0.1,
                  ease: 'easeInOut',
                }}
              />
            )
          })}
        </Box>
      </Box>
    </>
  )
}
