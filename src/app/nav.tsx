'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';


export default function Navbar() {
  return (
    <nav className="fixed w-full bg-white dark:bg-black shadow">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div>
            <ul className="flex space-x-6 text-gray-700 dark:text-gray-300">
              <li>
                <Link href="/" className="hover:text-blue-500 transition-colors">Home</Link>
              </li>
              <li>
                <Link href="/resume" className="hover:text-blue-500 transition-colors">Resume</Link>
              </li>
              <li>
                <Link href="/projects" className="hover:text-blue-500 transition-colors">Projects</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}
