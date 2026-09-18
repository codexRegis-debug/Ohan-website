/**/
import { useState } from 'react';
import { ArrowRight } from 'lucide-react'
import { NavLink } from 'react-router-dom';
import { useMutation } from '@tanstack/react-query';
import './SignIn.css';
import './LoginPage.tsx';

type SignInUser = {
  username: string
  userpassword: string
  useremail: string
}

const signInUser = async (credentials: SignInUser) => {
  const formData = new URLSearchParams();
  formData.append( 'username', credentials.username );
  formData.append( 'userpassword', credentials.userpassword );
  formData.append( 'useremail', credentials.useremail );

  const response = await fetch('http://localhost:8000/api/signup', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ formData }),
  });

  const errorData = await response.json();
  console.log('FULL ERROR', JSON.stringify(errorData, null, 2));

  if (!response.ok) {
    throw new Error('Sign In failed')
  };
  
  return response.json()

};

const SignIn = () => {
  const [username, setUsername] = useState<string>('');
  const [userpassword, setUserPassword] = useState<string>('');
  const [useremail, setUserEmail] = useState<string>('');

  const mutation = useMutation({
    mutationFn: signInUser,
    onSuccess: (data) => {
      localStorage.setItem('token', data.access_token);
      console.log('Signin successful');
    },
  });

  const handleLogin = (event) => {
    event.preventDefault();
    mutation.mutate({ username, useremail, userpassword });

    setUsername(event.target.value);
    setUserEmail(event.target.value);
    setUserPassword(event.target.value);

  }

  const handleLoginName = (event) => {
    event.preventDefault();
    /*mutation.mutate({ username });*/

    setUsername(event.target.value);
  };

  const handleLoginEmail = (event) => {
    event.preventDefault();
    /*mutation.mutate({ username });*/

    setUserEmail(event.target.value);
  };

  const handleLoginPassword = (event) => {
    event.preventDefault();
    /*mutation.mutate({ username });*/

    setUserPassword(event.target.value);
  };

  return (
    <>
      <div style={{ display: 'flex', alignItems: 'center', width: '100%'  }}>
        <div
          className='text'
          style={{
            backgroundColor: '#271B3D',
            marginTop: '0.7rem',
            width: '500px',
            height: '80px',
            borderRadius: '14px',
            padding: '0.5rem 1rem',
          }}
        >
          <div className='text-one'>
            <h1 style={{ color: 'white' }}> $100M </h1>
            <h3 style={{ color: 'grey' }}>Paid to members</h3>
          </div>
          <div className='text-two'>
            <h1 style={{ color: 'white' }}> 150K </h1>
            <h3 style={{ color: 'grey' }}>Active members</h3>
          </div>
        </div>
        {/* Comment */}
      </div>

      <div style={{ display: '', alignItems: 'center', width: '100%'  }}>
        <div style={{
          left: '30px',
          color: 'white',
          marginTop: '30px',
          marginLeft: '20px',
          fontSize: '40px',
          fontWeight: 'bold',
         }}
        >
          {'Join Today'}
          <h2 style={{ fontSize: '18px', color: 'grey' }}> Create your account and start earning</h2>
        </div>
      </div>

      <Form
        onSubmit={ handleLogin }
        onLogin={ handleLogin }
        name={ username }
        password={ userpassword }
        email={ useremail }
        onLoginName={ handleLoginName }
        onLoginEmail={ handleLoginEmail }
        onLoginPassword={ handleLoginPassword }
      />
      <br/>
      <br/>
      <SendToLoginPage/>
    </>
  )
};

export const Form = ({
  name,
  password,
  email,
  onSubmit,
  onLogin,
  onLoginName,
  onLoginEmail,
  onLoginPassword
}) => {

  return (
    <>
      <form onClick={ onSubmit }>
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

export const Input = ({ name, value, onChange }) => {
  return (
    <>
      <div style={{ marginTop: '40px', marginLeft: '30px', maxWidth: '300px', color: 'grey' }}>
        <br/>
        { name }
      </div>
      <div style={{ display: 'flex', alignItems: 'center', width: '100%'}}>
        <div
          style={
            {
              width: '80%',
              height: '70px',
              marginTop: '22px',
              borderRadius: '10px',
              display: 'flex',
              textAlign: 'left',
              flexGrow: '0',
            }
          }
        >
          <input
            style={{ padding: '20px 150px', borderRadius: '20px', border: 'none', backgroundColor: '#121212', textAlign: 'left', fontSize: '15px', fontWeight: 'bold', color: 'white' }}
            value={ value }
            onChange={ onChange }
          />
        </div>
        <br/>
        </div>
    </>
  )
}

export const Card = ({ text, onClick }) => {
  return (
    <div style={{ display: 'flex', alignItems: 'center', width: '100%'}}>
      <div
        onClick={ onClick }
        style={
          {
            width: '190px',
            fontSize: '10px',
            height: '70px',
            marginTop: '24px',
            borderRadius: '10px',
            left: '30',
            backgroundColor: 'indigo',
            marginLeft: '200px',
            flexGrow: '0',
            cursor: 'pointer',
            textAlign: 'center',
            color: 'white',
            fontWeight: 'bold',
          }
        }
      >
        <h1 style={{ marginTop: '18px', }}>
          { text }
        </h1>
        <span >
          <ArrowRight
            size={ 20 }
          />
        </span>
      </div>
      <br/>
    </div>
  )
}

const SendToLoginPage = () => {
  return (
    <>
      <div
        style= {{
          display: 'flex',
          alignItems: 'center',
          width: '100%'
        }}
      >
        <span style={{color: 'white'}}>
          Already have an account?
          {'  '}
          <span>
            <NavLink className="LoginLink" to="/log-in" style={{ color: 'indigo' }}>
              Login here
            </NavLink>
          </span>
        </span>
      </div>
    </>
  )
}

export default SignIn
