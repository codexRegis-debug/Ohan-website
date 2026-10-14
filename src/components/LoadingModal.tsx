/**/
import {
  Dialog,
  Spinner,
  Text,
  VStack,
  Box,
  Portal,
} from '@chakra-ui/react'
import { motion } from 'framer-motion';

const MotionBox = motion(Box)

interface Props {
  isOpen: boolean
  message?: string
}

export const LoadingModal = ({isOpen, message = "Please wait..."}: Props) => {
  return (
    <>
      <Dialog.Root
        open={isOpen}
        placement="center"
        closeOnInteractOutside={false}
        closeOnEscape={false}
      >
        <Portal>
          
        </Portal>
      </Dialog.Root>
    </>
  )
}
