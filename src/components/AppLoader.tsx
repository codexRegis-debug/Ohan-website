import { Box, Flex } from '@chakra-ui/react'
import { motion } from 'framer-motion'

const MotionBox = motion(Box)

export const AppLoader = () => {

  const gridOrder = [
    0, 1, 2, 3,
    7, 6, 5, 4,
    8, 9, 10, 11,
    15, 14, 13, 12,
  ]

  return (
    <>
      <Flex
        position='fixed'
        inset={0}
        zIndex={9999}
        bg='black'
        align='center'
        justify='center'
        flexDir='column'
        gap={8}
      >
        <Box
          display='grid'
          gridTemplateColumns='repeat(4, 1fr)'
          gap='12px'
          p='20px'
        >
          {Array.from({ length: 16 }).map((_, i) => {
            const waveIndex = gridOrder.indexOf(i)

            return (
              <MotionBox
                key={i}
                w={{ base: '14px', md: '18px' }}
                h={{ base: '14px', md: '18px' }}
                borderRadius='sm'
                bg='whiteAlpha.100'
                initial={{ opacity: 0.2, scale: 0.8 }}
                animate={{
                  opacity: [0.2, 1, 0.2],
                  scale: [0.8, 1.15, 0.8],
                  backgroundColor: [
                    'rgba(255, 255, 255, 0.1)',
                    'rgba(99, 102, 241, 1)',
                    'rgba(255, 255, 255, 0.1)',
                  ],
                  boxShadow: [
                    '0 0 0px rgba(99, 102, 241, 0)',
                    '0 0 0px rgba(99, 102, 241, 0.9), 0 0 40px rgba(99, 102, 241, 0.5)',
                    '0 0 0px rgba(99, 102, 241, 0)',
                  ],
                }}
                transition={{
                  duration: 1.6,
                  repeat: Infinity,
                  delay: waveIndex * 0.08,
                  ease: 'easeInOut',
                }}
              />
            )
          })}
        </Box>
        <MotionBox
          initial={{ opacity: 0 }}
          animate={{ opacity: [0.3, 1, 0.3] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          color='whiteAlpha.600'
          fontSize='xs'
          letterSpacing='widest'
          textTransform='uppercase'
        >
          Loading
        </MotionBox>
      </Flex>
    </>
  )
}
