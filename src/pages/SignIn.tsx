/**/
import { MouseEvent, useState } from 'react';
import { useMutation } from '@tanstack/react-query';
import { GlowingHeader } from '@/components/Headers.tsx'
import { Footer, ExtraFooter } from '@/components/Footer.tsx'
import { Form } from '@/components/Form.tsx'
import './LoginPage.tsx';
import { MainBody } from '@/components/MainBody.tsx'
import { LoadingModal } from '@/components/LoadingModal.tsx'
import { toaster } from '@/components/ui/toaster'

type SignInUser = {
  username: string
  userpassword: string
  useremail: string
}

const signInUser = async (credentials: SignInUser) => {
  const formData = {
    'username': credentials.username,
    'userpassword': credentials.userpassword,
    'useremail': credentials.useremail,
  }
  const [isLoading, setIsLoading] = useState<boolean>(false)

  const backendURL = 'https://'

  try {
    const response = await fetch('http://localhost:8000/api/signup' || backendURL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    const errorData = await response.json();
    console.log('FULL ERROR:', JSON.stringify(errorData, null, 2));

    toaster.create({ title: "Account created!", type: "success" })

    if (!response.ok) {
      throw new Error(errorData.detail || 'Sign In failed')
    };
    return response.json()
  } catch (err: any) {
    toaster.create({ title: "Error", description: err.message, type: "error" })
  } finally {
    setIsLoading(false)
  }
};

const SignIn = () => {
  const [username, setUsername] = useState<string>('');
  const [userpassword, setUserPassword] = useState<string>('');
  const [useremail, setUserEmail] = useState<string>('');

  const [isLoading, setIsLoading] = useState<boolean>(false)


  const mutation = useMutation({
    mutationFn: signInUser,
    onSuccess: (data) => {
      localStorage.setItem('token', data.access_token);
      console.log('Signin successful');
    },
  });

  const handleLogin = (event: MouseEvent) => {
    event.preventDefault();
    setIsLoading(true)
    mutation.mutate({ username, useremail, userpassword });

    setUsername(event.target.value);
    setUserEmail(event.target.value);
    setUserPassword(event.target.value);
  }

  const handleLoginName = (event: MouseEvent) => {
    /*mutation.mutate({ username });*/
    setUsername(event.target.value);
  };

  const handleLoginEmail = (event: MouseEvent) => {
    /*mutation.mutate({ username });*/
    setUserEmail(event.target.value);
  };

  const handleLoginPassword = (event: MouseEvent) => {
    /*mutation.mutate({ username });*/
    setUserPassword(event.target.value);
  };

  return (
    <>
      <MainBody>
        <LoadingModal isOpen={isLoading} message="Creating your account..."/>
        <GlowingHeader
          headerOne='$100M'
          headerThree=' Paid to members'
          headerOneAgain=' 150K '
          headerThreeAgain=' Active members '
        />
        <div style={{ alignItems: 'center', width: '100%'  }}>
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
        <Footer
          span='Already Have an Account?'
          link='/log-in'
          linkText='Login Here'
        />
        <br/>
        <br/>
        <ExtraFooter/>
        <br/>
      </MainBody>
    </>
  )
};

export default SignIn
