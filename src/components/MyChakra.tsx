/**/
import { chakra } from '@chakra-ui/react'
import { ArrowRight } from 'lucide-react'
import { MouseEvent } from 'react'

export const MyChakra = ({ children, onClick } : { children: string, onClick: (e: MouseEvent<HTMLDivElement>) => void  }) => {
  return (
    <body
      style={{
        display: 'flex',
        alignItems: 'center',
        width: '100%'
      }}
    >
      <chakra.button fontWeight="600" fontFamily="italic" fontSize="2xl" bg="indigo" color="white" py="2" px="5" rounded="md">
        { children }
        <ArrowRight
          size={20}
        >
        </ArrowRight>
      </chakra.button>
    </body>
  )
}

export const TextField = () => {
  return (
    <>

    </>
  )
}
