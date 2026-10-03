/**/
import { Input } from './Input.tsx'
import { MouseEvent } from 'react'
import { MyChakra } from '@/components/MyChakra.tsx'

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
  onLoginName: (event: MouseEvent) => void,
  onLoginEmail: (event: MouseEvent) => void,
  onLoginPassword: (event: MouseEvent) => void,
}) => {

  return (
    <>
      <form >
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
      </form>
    </>
  )
}
