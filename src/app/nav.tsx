// nav.tsx
'use client';

import Link from 'next/link';

const pages = [
  { name: 'Home', path: '/' },
  { name: 'Resume', path: '/resume' },
  { name: 'Projects', path: '/projects' },
  // Add more pages here
];

export default function Navbar() {
  return (
    <nav className="fixed w-full bg-white dark:bg-black shadow">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div>
            <ul className="flex space-x-6 text-gray-700 dark:text-gray-300">
              {pages.map((page) => (
                <li key={page.path}>
                  <Link href={page.path} className="hover:text-blue-500 transition-colors">
                    {page.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}
