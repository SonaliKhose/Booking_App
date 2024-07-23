"use client"; // Add this line to mark this file as a client component

import { SessionProvider } from 'next-auth/react';
import Navbar from './components/Navbar';
import './globals.css'; // Import your global styles here

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <SessionProvider>
          <Navbar />
          {children}
        </SessionProvider>
      </body>
    </html>
  );
}
