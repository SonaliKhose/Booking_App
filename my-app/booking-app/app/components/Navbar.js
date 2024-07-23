"use client"
import Link from 'next/link';
import { useSession, signIn, signOut } from 'next-auth/react';


const Navbar = () => {
  const { data: session } = useSession();

  return (
    <nav style={styles.navbar}>
      <div style={styles.logo}>
        <Link href="/">MyApp</Link>
      </div>
      <div style={styles.links}>
        {session ? (
          <>
            <span style={styles.user}>Welcome, {session.user.name}</span>
            <button onClick={() => signOut()} style={styles.button}>
              Sign Out
            </button>
          </>
        ) : (
          <>
            <button onClick={() => signIn()} style={styles.button}>
              Sign In
            </button>
            <Link href="/signup">
              <button style={styles.button}>Sign Up</button>
            </Link>
          </>
        )}
      </div>
    </nav>
  );
};

const styles = {
  navbar: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '1rem 2rem',
    backgroundColor: '#333',
    color: '#fff',
  },
  logo: {
    fontSize: '1.5rem',
    fontWeight: 'bold',
  },
  links: {
    display: 'flex',
    gap: '1rem',
  },
  button: {
    backgroundColor: '#555',
    color: '#fff',
    border: 'none',
    padding: '0.5rem 1rem',
    cursor: 'pointer',
    borderRadius: '5px',
  },
  user: {
    color: '#fff',
    marginRight: '1rem',
  },
};

export default Navbar;
