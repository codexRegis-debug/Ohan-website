/**/
import { useState, useEffect } from 'react'

export default function useOnlineStatus() {
  const [isOnline, setisOnline] = useState(true)
  useEffect(() => {
    function handleOnline() {
      setisOnline(true)
    }
    function handleOffline() {
      setisOnline(false)
    }
    window.addEventListener('online', handleOnline)
    window.addEventListener('offline', handleOffline)
    return () => {
      window.removeEventListener('online', handleOnline)
      window.removeEventListener('offline', handleOffline)

    }
  }, [])
  return isOnline
}
