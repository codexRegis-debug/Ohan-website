/* Payment Callback */
import { useState, useEffect } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { Box, Spinner, Text, VStack, Heading, Button } from '@chakra-ui/react';
import { toaster } from '@/components/ui/toaster.tsx';

const PaymentCallback = () => {
  const [params] = useSearchParams()
  const reference = params.get('refernce')
  const navigate = useNavigate()
  const [status, setStatus] = useState<'verifying' | 'success' | 'failed'>('verifying')

  useEffect(() => {
    if (!reference) {
      setStatus('failed')
      return;
    }
    const token = localStorage.getItem('token')
    let tries = 0
    const poll = async () => {
      tries++
      const res = await fetch(`/api/payment/${reference}`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      const data = await res.json()
      if (data.status === 'success') {
        setStatus('success')
        toaster.create({ title: 'Payment successful!', status: 'success' })
        setTimeout(() => {
          navigate('/chat'),
          1500
        })
        return;
      }
      if (tries > 30) {
        setStatus('failed')
        return;
      }
      setTimeout(poll, 2000)
    }
    poll()
  }, [reference]);

  return (
    <>
      <Box
        minH='100vh'
        display='flex'
        alignItems='center'
        justifyContent='center'
      >
        <VStack spacing={4}>
          {status === "verifying" && (
            <>
              <Spinner size='xl' color='green.500'/>
              <Heading size='md'>Verifying payment...</Heading>
              <Text color='gray.500'>Do not close this page. Reference: {reference}</Text>
            </>
          )}
          {status === "success" && (
            <>
              <Heading size='md'>Payment confirmed!</Heading>
              <Text color='gray.500'>Redirecting you to chat...</Text>
            </>
          )}
          {status === "verifying" && (
            <>
              <Heading size='md'>Failed to confirm payment</Heading>
              <Text color='gray.500'>If you were debited, it will appear shortly.</Text>
              <Button onclick={() => {navigate('/chat')}}> Back to chat</Button>
            </>
          )}
        </VStack>
      </Box>
    </>
  )
}

export default PaymentCallback
