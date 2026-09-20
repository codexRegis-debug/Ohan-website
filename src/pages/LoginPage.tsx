/* Login Page */
import { GlowingHeader, Input, Card } from './SignIn.jsx';
import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import { useMutation } from '@tanstack/react-query';

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
  const formLoginData = new URLSearchParams()
  formLoginData.append( 'userEmail', credentials.userEmail )
  formLoginData.append('userPassword', credentials.userPassword )

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

  const handleLogin = (e) => {
    e.preventDefault()
    mutation.mutate({ userEmail, userPassword })

    setUserEmail(e.target.value)
    setUserPassword(e.target.value)
  }

  const handleLoginEmail = (e) => {
    setUserEmail(e.target.value);
  }

  const handleLoginPassword = (e) => {
    setUserPassword(e.target.value);
  };

  return (
    <>
      <GlowingHeader/>
      <br/>
      <Header/>
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
      <Card
        text={ 'Login ' }
        onClick={ handleLogin }
      />
      <br/>
      <br/>
      <Footer/>
    </>
  )
}

const Header = () => {
  return (
    <>
      <div style={{ display: 'flex', alignItems: 'center', width: '100%' }}>
        <div style={{ left: '30px', color: 'white', fontSize: '25px', marginLeft: '-35px' }}>
          <h1>Welcome Back!</h1>
        </div>
      </div>
    </>
  )
}

const Footer = () => {
  return (
    <>
      <div style={{ display: 'flex', alignItems: 'center', width: '100%' }}>
        <span style={{color: 'white'}}>
          Don't have an account yet?
          {'  '}
          <span>
            <NavLink className="SignInLink" to="/sign-in" style={{ cursor: 'pointer', color: 'indigo' }}>
              Sign In here
            </NavLink>
          </span>
        </span>
      </div>
    </>
  )
}

export default LoginPage
