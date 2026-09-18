/**/
import { useState, useEffect } from 'react';

const useFormInput = (value, setValue) => {
  const [value, setValue] = useState<string>('')
  useEffect(() => {
    const handleLogin = (event) => {
      event.preventDefault()

      setValue(event.target.value)
    }
  }, [])
}
