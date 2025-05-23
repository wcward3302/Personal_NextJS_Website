"use client";

import './globals.css';
import Navbar from './nav';
import { AnimatePresence, motion } from 'framer-motion';
import { usePathname } from 'next/navigation';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-sky-300 via-blue-900 via-80% to-gray-800 text-white">
        <header className="w-full">
          <Navbar />
        </header>
        <div className="flex-grow flex items-center justify-center w-full overflow-hidden">
          {children}
        </div>
      </body>
    </html>
  );
}
