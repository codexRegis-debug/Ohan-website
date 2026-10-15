/**/
import {
  Dialog,
  Spinner,
  Text,
  VStack,
  Box,
  Portal,
  Icon,
} from '@chakra-ui/react'
import { motion, AnimatePresence } from 'framer-motion';
import { Check, X } from 'lucide-react'

const MotionBox = motion(Box)

type Status = 'loading' | 'success' | 'error'

interface Props {
  isOpen: boolean
  status: Status
  message?: string
  onClose: () => void
}

export const LoadingModal = ({isOpen, status,  message, onClose}: Props) => {

  const getConfig = () => {
    switch (status) {
      case 'success':
        return { bg: 'green.500', title: 'Success!', defaultMsg: 'Login successful' }
      case 'error':
        return { bg: 'red.500',  title: 'Failed!', defaultMsg: 'Something went wrong somewhere' }
      default:
        return { bg: 'blue.500',  title: 'Please wait...', defaultMsg: 'Processing' }
    }
  }

  const config = getConfig()
  const displayMsg = message || config.defaultMsg

  return (
    <>
      <Dialog.Root
        open={isOpen}
        placement="center"
        closeOnInteractOutside={false}
        closeOnEscape={status != 'loading'}
      >
        <Portal>
          <Dialog.Backdrop bg="blackAlpha.600" backdropFilter="blur(6px)"/>
          <Dialog.Positioner>
            <Dialog.Content bg="transparent" boxShadow="none" border="none" p={4}>
              <Dialog.Body p={0} display="flex" justifyContent="center">
                <MotionBox
                  initial={{ scale: 0.85, opacity: 0, y: 20 }}
                  animate={{ scale: 1, opacity: 1, y: 0 }}
                  bg="white"
                  _dark={{ bg: "gray.800" }}
                  p={8}
                  borderRadius="2xl"
                  boxShadow="2xl"
                  minW="280px"
                  textAlign="center"
                >
                  <VStack gap={5}>
                    <Box w='20' h='20' display='flex' justifyContent='center' alignItems='center'>
                      <AnimatePresence mode='wait'>
                        {config.defaultMsg === 'Processing' && (
                          <MotionBox
                            key='spinner'
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1, rotate: 360 }}
                            exit={{ opacity: 0, scale: 0.5 }}
                            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                          >
                            <Spinner size="xl" color="blue.500" borderWidth="4px"/>
                          </MotionBox>
                        )}
                        {config.defaultMsg === 'Login successful' && (
                          <MotionBox
                            key='success'
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            exit={{ opacity: 0, scale: 0.5 }}
                            bg='green.500'
                            w='14'
                            h='14'
                            borderRadius='full'
                            display='flex'
                            alignItems='center'
                            justifyContent='center'
                          >
                            <Icon as={Check} color='white' boxSize={8}/>
                          </MotionBox>
                        )}
                        {config.defaultMsg === 'Something went wrong somewhere' && (
                          <MotionBox
                            key='success'
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            exit={{ opacity: 0, scale: 0.5 }}
                            bg='red.500'
                            w='14'
                            h='14'
                            borderRadius='full'
                            display='flex'
                            alignItems='center'
                            justifyContent='center'
                          >
                            <Icon as={X} color='white' boxSize={8}/>
                          </MotionBox>
                        )}
                      </AnimatePresence>
                    </Box>
                    <VStack gap={1}>
                      <Text fontWeight="semibold" fontSize="md">{config.title}</Text>
                      <Text fontSize="sm" color="gray.500">{displayMsg}</Text>
                      {/**
                      *  <motion.div
                      *  animate={{ opacity: [0.5, 1, 0.5] }}
                      *  transition={{ duration: 1.5, repeat: Infinity }}
                      * >
                      *  <Text fontSize="sm" color="gray.500">This might take a few seconds</Text>
                      * </motion.div>
                      **/}
                    </VStack>
                    {status !== 'loading' && (
                      <Box
                        as='button'
                        onClick={onClose}
                        bg={config.bg}
                        color='white'
                        px={6}
                        py={2}
                        borderRadius='full'
                        fontWeight='semibold'
                      >
                        {status === 'success' ? 'Continue' : 'Try Again'}
                      </Box>
                    )}
                  </VStack>
                </MotionBox>
              </Dialog.Body>
            </Dialog.Content>
          </Dialog.Positioner>
        </Portal>
      </Dialog.Root>
    </>
  )
}
