/**/
import { Box } from '@chakra-ui/react'
import { ReactNode } from 'react'

export const MainBody = ({ children } : { children: ReactNode }) => {
  return (
    <Box
      w="100%"
      h="100%"
      bg="black.400"
    >
      { children }
    </Box>
  )
}
