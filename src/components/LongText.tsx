/**/
import { Box, Flex, Heading, Text, VStack } from '@chakra-ui/react'

export const LongText = ({ children } : { children: string }) => {
  return (
    <Box
      w="100vw"
      bg="indigo"
      overflow="hidden"
    >
      <Text>
        {children}
      </Text>
    </Box>
  )
}
