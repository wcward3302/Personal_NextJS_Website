"use client";

import './globals.css';
import Navbar from './nav';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  return (
    <html lang="en">
      <body className="bg-background text-foreground min-h-screen flex flex-col items-center justify-center">
        <header className="w-full">
          <Navbar />
        </header>
        <main className="w-full max-w-4xl px-4 py-8 flex-1 flex items-center justify-center pt-28">
          {children}
        </main>
      </body>
    </html>
    
  );
}
