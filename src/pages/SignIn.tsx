/*Sign In Page*/
import { MouseEvent, useState } from 'react';
import { useMutation } from '@tanstack/react-query';
import { GlowingHeader } from '@/components/Headers.tsx'
import { Footer, ExtraFooter } from '@/components/Footer.tsx'
import { Form } from '@/components/Form.tsx'
import './LoginPage.tsx';
import { MainBody } from '@/components/MainBody.tsx'
import { LoadingModal } from '@/components/LoadingModal.tsx'

type SignInUser = {
  username: string
  userpassword: string
  useremail: string
}

type SignInResponse = {
  access_token: string
}

const signInUser = async (
  credentials: SignInUser
): Promise<SignInResponse> => {

  const controller = new AbortController();

  const timeout = setTimeout(() => {
    controller.abort();
  }, 15000)

  try {
    const response = await fetch(
      'http://localhost:8000/api/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username: credentials.username,
          useremail: credentials.useremail,
          userpassword: credentials.userpassword,
        }),
        signal: controller.signal,
      }
    );

    const data = await response.json();
    console.log('FULL ERROR:', JSON.stringify(data, null, 2));

    if (!response.ok) {
      throw new Error(data.detail || 'Sign In failed')
    };

    return data

  } catch (error) {
    if (
      error instanceof Error &&
      error.name == 'AbortError'
    ){
      throw new Error('Request timed out. Please try again')
    };
    throw error

  } finally {
    clearTimeout(timeout)
  }
};

const SignIn = () => {

  // user's sign in info
  const [username, setUsername] = useState<string>('');
  const [userpassword, setUserPassword] = useState<string>('');
  const [useremail, setUserEmail] = useState<string>('');

  // loading modal's state
  const [modalOpen, setModalOpen] = useState(false);

  const [modalStatus, setModalStatus] = useState<'loading'|'success'|'error'>('loading')

  const [modalMessage, setModalMessage] = useState('');

  const mutation = useMutation({
    mutationFn: signInUser,

    onSuccess: (data) => {
      localStorage.setItem('token', data.access_token);

      // display modal success
      setModalStatus('success');
      setModalMessage('Signin sucessful');

      console.log('Signin successful');
    },

    onError: (error) => {
      // display error message
      setModalStatus('error')
      setModalMessage(error.message || 'Sign in failed! Try again.')

      console.log('Signin failed');
    }
  });

  const handleLogin = (event: MouseEvent) => {
    event.preventDefault();

    if (mutation.isPending){
      return;
    }

    setModalOpen(true);
    setModalStatus('loading');
    setModalMessage('Verifying your credentials');

    mutation.mutate({
      username,
      useremail,
      userpassword,
    });
  };

  const handleLoginName = (event: React.ChangeEvent<HTMLInputElement>) => {
    /*mutation.mutate({ username });*/
    setUsername(event.target.value);
  };

  const handleLoginEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
    /*mutation.mutate({ username });*/
    setUserEmail(event.target.value);
  };

  const handleLoginPassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    /*mutation.mutate({ username });*/
    setUserPassword(event.target.value);
  };

  const handleCloseModal = () => {
    setModalOpen(false)
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

      {/*Loading Modal*/}
      <LoadingModal
        isOpen={modalOpen}
        status={modalStatus}
        message={modalMessage}
        onClose={handleCloseModal}
      />
    </>
  )
};

export default SignIn
