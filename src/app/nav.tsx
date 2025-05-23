'use client';

import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-blue-900/60 backdrop-blur-md shadow-md border-b border-white/10">
      <div className="container mx-auto px-4">
        <ul className="flex justify-center space-x-10 py-5 text-lg font-medium">
          <li>
            <Link href="/" className='text-white hover:text-blue-500 transition-colors duration-300'>Home</Link>
          </li>
          <li>
            <Link href="/about" className='text-white hover:text-blue-500 transition-colors duration-300'>About</Link>
          </li>
          <li>
            <Link href="/profile" className='text-white hover:text-blue-500 transition-colors duration-300'>Profiles</Link>
          </li>
          <li>
            <Link href="/projects" className='text-white hover:text-blue-500 transition-colors duration-300'>Projects</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
