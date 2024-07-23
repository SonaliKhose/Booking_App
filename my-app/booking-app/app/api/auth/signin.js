import { signIn } from 'next-auth/react';
import Link from 'next/link';

const SignIn = () => {
  return (
    <div style={styles.container}>
      <h1>Sign In</h1>
      <button onClick={() => signIn('google')} style={styles.button}>
        Sign in with Google
      </button>
      <button onClick={() => signIn('facebook')} style={styles.button}>
        Sign in with Facebook
      </button>
      <button onClick={() => signIn('linkedin')} style={styles.button}>
        Sign in with LinkedIn
      </button>
      <Link href="/signup">Don't have an account? Sign Up</Link>
    </div>
  );
};

const styles = {
  container: {
    padding: '2rem',
    textAlign: 'center',
  },
  button: {
    display: 'block',
    margin: '1rem auto',
    padding: '0.5rem 1rem',
    backgroundColor: '#0070f3',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
};

export default SignIn;
