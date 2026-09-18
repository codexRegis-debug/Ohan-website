/**/
import { useState } from 'react';

const useFormInput = (initialValue: string) => {
  const [value, setValue] = useState<string>(initialValue)

  const handleLogin = (event) => {
    setValue(event.target.value)
  }

  const inputProps = {
    value: value,
    onChange: handleLogin
  }

  return inputProps
}

export default useFormInput
