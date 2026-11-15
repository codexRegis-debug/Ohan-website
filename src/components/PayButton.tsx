/* Payment Button */
import { useState } from 'react';
import { Button, } from '@chakra-ui/react';
import { toaster } from '@/components/ui/toaster.tsx'

const PayButton = ({ amount, label } : {amount: number, label: string}) => {
  const [loading, setLoading] = useState(false)
  const token = localStorage.getItem('token')

  const handlePay = async () => {
    setLoading(true)
    try {
      const response = await fetch('api/payments/initialize', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ amount, purpose: 'chat_premium' })
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.detail || 'Could not process payment')
      }
      /* Redirect to payment - user pays with any bank here */
      window.location.href = data.authorization_url
    } catch (event: any) {
      toaster.create({ title: 'Payment failed', description: event.message, /* status: 'error' */ })
      setLoading(false)
    }
  }

  return (
    <>
      <Button
        colorScheme='green'
        isLoading={loading}
        onClick={handlePay}
        w='full'
      >
        {label} - #{amount.toLocaleString()}
      </Button>
    </>
  )
}

export default PayButton
