import { getServerSession } from 'next-auth/next';
import { authOptions } from '../lib/auth'; // Import your NextAuth configuration

export default async function Page() {
  const session = await getServerSession(authOptions);

  return (
    <main>
      <h1>Welcome to the Booking App</h1>
      {/* Render your content based on the session here */}
      {session ? (
        <p>Welcome, {session.user.name}</p>
      ) : (
        <p>Please sign in</p>
      )}
    </main>
  );
}
