/**/
import { Input } from './Input.tsx'
import { MouseEvent, ChangeEvent } from 'react'
import { MyChakra } from '@/components/MyChakra.tsx'
import { chakra } from '@chakra-ui/react'

export const Form = ({
  name,
  password,
  email,
  onLogin,
  onLoginName,
  onLoginEmail,
  onLoginPassword,
} : {
  name: string,
  password: string,
  email: string,
  onLogin: (event: MouseEvent) => void,
  onLoginName: (event: MouseEvent | ChangeEvent) => void,
  onLoginEmail: (event: MouseEvent | ChangeEvent) => void,
  onLoginPassword: (event: MouseEvent | ChangeEvent) => void,
}) => {

  return (
    <>
      <chakra.form >
        <Input
          name={'USERNAME'}
          value={ name }
          onChange={ onLoginName }
        />
        <Input
          name={'PASSWORD'}
          value={ password }
          onChange={ onLoginPassword }
        />
        <Input
          name={'EMAIL'}
          value={ email }
          onChange={ onLoginEmail }
        />
        <br/>
        <MyChakra
          children={ 'Continue' }
          onClick={ onLogin }
        />
      </chakra.form>
    </>
  )
}
