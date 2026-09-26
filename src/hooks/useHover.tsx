/**/
import { useState } from 'react'

export const useHover = () => {
  const [isHovered, setIsHovered] = useState<boolean>(true)

  const handleHover = () => {

    setIsHovered(onmouseover ? !isHovered : false)
  }
  
  const newProps = {
    isHovered,
    handleHover,
  }

  return newProps
}
