/**/

import { Input } from './Input.tsx'
import { Card } from './Cards.tsx'
import { HTMLElementType, MouseEvent } from 'react'

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
  onLoginName: (event: HTMLElementType) => void,
  onLoginEmail: (event: HTMLElementType) => void,
  onLoginPassword: (event: HTMLElementType) => void,
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
        <Card
          text={ 'Continue' }
          onClick={ onLogin }
        />
      </form>
    </>
  )
}
