/* Login Page */
import { useState } from 'react';
import { useMutation } from '@tanstack/react-query';
import { GlowingHeader, Header } from '@/components/Headers.tsx';
import { Input } from '@/components/Input.tsx'
import { Footer, ExtraFooter } from '@/components/Footer.tsx'
import { MyChakra } from '@/components/MyChakra.tsx'
import { MainBody } from '@/components/MainBody.tsx'
import { LoadingModal } from '@/components/LoadingModal.tsx';

type LoginOrSignIn = {
  username?: string;
  useremail: string;
  userpassword: string;
};

type LoginResponse = {
  access_token: string;
};

const loginUsers = async (
  credentials: LoginOrSignIn
): Promise<LoginResponse> => {

  // Set timeout for the request
  const controller = new AbortController();

  const timeout = setTimeout(() => {
    controller.abort();
  }, 15000); // 15 seconds

  try {
    const response = await fetch(
      'http://localhost:8000/api/login',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          useremail: credentials.useremail,
          userpassword: credentials.userpassword,
        }),
        signal: controller.signal,
      }
    );

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || 'Invalid email or password');
    }

    return data;

  } catch (error) {

    if (error instanceof Error && error.name === 'AbortError') {
      throw new Error('Request timed out. Please try again.');
    }

    throw error;

  } finally {
    clearTimeout(timeout);
  }
};

const LoginPage = () => {

  const [useremail, setUserEmail] = useState('');
  const [userpassword, setUserPassword] = useState('');

  // Loading modal states
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [modalStatus, setModalStatus] = useState<
    'loading' | 'success' | 'error'
  >('loading');

  const [modalMessage, setModalMessage] = useState('');

  const mutation = useMutation({
    mutationFn: loginUsers,

    onSuccess: (data) => {

      // Save authentication token
      localStorage.setItem('token', data.access_token);

      // Display success modal
      setModalStatus('success');
      setModalMessage('Login successful! Welcome back.');

      console.log('Login successful');
    },

    onError: (error) => {
      
      // Display error modal
      setModalStatus('error');
      setModalMessage(error.message || 'Login failed. Please try again.');

      console.log('Login failed:', error.message);
    },
  });

  const handleLogin = (e: React.MouseEvent) => {
    e.preventDefault();

    if (mutation.isPending) return;

    // Show loading modal immediately
    setIsModalOpen(true);
    setModalStatus('loading');
    setModalMessage('Verifying your credentials...');

    // Start login request
    mutation.mutate({
      useremail,
      userpassword,
    });
  };

  const handleLoginEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserEmail(e.target.value);
  };

  const handleLoginPassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserPassword(e.target.value);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
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

        <br />

        <Header children={'Welcome Back!'} />

        <Input
          name={'Email Address'}
          value={useremail}
          onChange={handleLoginEmail}
        />

        <Input
          name={'Password'}
          value={userpassword}
          onChange={handleLoginPassword}
        />

        <br />

        <MyChakra
          children={mutation.isPending ? 'Logging in...' : 'Login'}
          onClick={handleLogin}
        />

        <br />
        <br />

        <Footer
          span="Don't have an account yet?"
          link='/sign-in'
          linkText='Sign In here'
        />

        <br />

        <ExtraFooter />

        <br />
        <br />

      </MainBody>

      {/* Loading Modal */}
      <LoadingModal
        isOpen={isModalOpen}
        status={modalStatus}
        message={modalMessage}
        onClose={handleCloseModal}
      />
    </>
  );
};

export default LoginPage;
