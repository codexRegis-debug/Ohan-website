/**/
import { useState, MouseEvent } from 'react';

export const useFormInput = (initialValue: string) => {
  const [value, setValue] = useState<string>(initialValue)

  const handleLogin = (event: MouseEvent<HTMLDivElement>) => {
    setValue(event.target.value)
  }

  const inputProps = {
    value: value,
    onChange: handleLogin
  }

  return inputProps
}
