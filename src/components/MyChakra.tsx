/**/
import { chakra, Box, Text } from '@chakra-ui/react'
import { ArrowRight, XCircle } from 'lucide-react'
import { MouseEvent } from 'react'

export const MyChakra = ({
  children,
  onClick
} : {
  children: string,
  onClick: (e: MouseEvent<HTMLDivElement>) => void
}) => {
  return (
    <div
      onClick={ onClick }
      style={{
        display: 'flex',
        alignItems: 'center',
        width: '100%',
      }}
    >
      <chakra.button
        fontWeight="600"
        fontFamily="italic"
        fontSize="2xl"
        bg="indigo"
        color="white"
        py="2"
        px="5"
        rounded="md"
        _hover={{ color: "blue.200" }}
        style={{ cursor: 'pointer', }}
      >
        { children }
        <ArrowRight
          size={20}
        >
        </ArrowRight>
      </chakra.button>
    </div>
  )
}

export const TextField = ({ children } : { children: string }) => {
  return (
    <div style={{ alignItems: 'center', textAlign: "center", margin: "20px" }}>
      <Box
        flex="-2"
        w="28rem"
        bg="gray.900"
        py="9"
        px="5"
        rounded="xl"
        shadow="sm"
        p={{ base: "2", md: "4"}}
        maxW="container.lg"
      >
        <Text
          fontFamily="system-ui"
          fontSize="xl"
          fontWeight="400"
        >
          { children }
        </Text>
        <span>
          <XCircle
            size={25}
            color={'red'}
            style={{ marginTop: "-5%", marginRight: "2p" }}
          />
        </span>
      </Box>
    </div>
  )
}
