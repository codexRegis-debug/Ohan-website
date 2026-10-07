/* Login Page */
import { MouseEvent, useState } from 'react';
import { useMutation } from '@tanstack/react-query';
import { GlowingHeader, Header } from '@/components/Headers.tsx';
import { Input } from '@/components/Input.tsx'
import { Footer, ExtraFooter } from '@/components/Footer.tsx'
import { MyChakra } from '@/components/MyChakra.tsx'
import { MainBody } from '@/components/MainBody.tsx'

type LoginOrSignIn = {
  userName?: string
  userEmail: string
  userPassword: string
}

const enum LoginUser  {
  Name = '' ,
  Email = '',
  Password = '',
}

const loginUsers = async (credentials: LoginOrSignIn) => {
  const formLoginData = {
    'userEmail': credentials.userEmail,
    'userPassword': credentials.userPassword,
  }

  const responseData = await fetch('http://localhost:8000/api/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ formLoginData })
  })

  const errorData = await responseData.json();
  console.log('FULL ERROR', JSON.stringify(errorData, null, 2));

  if (!responseData.ok) {
    throw new Error('Login failed')
  }

  const errorLoginData = responseData.json()
  console.log('FULL ERROR', JSON.stringify(errorLoginData, null, 2))

  return responseData.json()
}

const LoginPage = () => {
  const [userEmail, setUserEmail] = useState<string>(LoginUser.Email)
  const [userPassword, setUserPassword] = useState<string>(LoginUser.Password)

  const mutation = useMutation({
    mutationFn: loginUsers,
    onSuccess: (data) => {
      localStorage.setItem('token', data.access_token)
      console.log('Login successful')
    },
  })

  const handleLogin = (e: MouseEvent) => {
    e.preventDefault()
    mutation.mutate({ userEmail, userPassword })

    setUserEmail(e.target.value)
    setUserPassword(e.target.value)
  }

  const handleLoginEmail = (e: MouseEvent) => {
    e.preventDefault()

    setUserEmail(e.target.value);
  }

  const handleLoginPassword = (e: MouseEvent) => {
    e.preventDefault()

    setUserPassword(e.target.value);
  };

  return (
    <>
      <MainBody>
        <GlowingHeader
          headerOne='$100M'
          headerThree=' Paid to members'
          headerOneAgain=' 150K '
          headerThreeAgain=' Active members '
        />
        <br/>
        <Header
          children={'Welcome Back!'}
        />
        <Input
          name={'Email Address '}
          value={ userEmail }
          onChange={ handleLoginEmail }
        />
        <Input
          name={'Password '}
          value={ userPassword }
          onChange={ handleLoginPassword }
        />
        <br/>
        <MyChakra
          children='Login '
          onClick={ handleLogin }
        />
        <br/>
        <br/>
        <Footer
          span="Don't have an account yet?"
          link='/sign-in'
          linkText='Sign In here'
        />
        <br/>
        <ExtraFooter/>
        <br/>
        <br/>

      </MainBody>
    </>
  )
}

export default LoginPage
