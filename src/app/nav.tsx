'use client';

import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-blue-900/60 backdrop-blur-md text-white shadow-md border-b border-white/10">
      <div className="container mx-auto px-4">
        <ul className="flex justify-center space-x-10 py-5 text-lg font-medium">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/profile">Profiles</Link>
          </li>
          <li>
            <Link href="/projects">Projects</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
