import Link from 'next/link';
import { Instagram, Github } from 'lucide-react';

export default function header() {
  return (
    <header className='p-4 md:p-6 sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 dark:border-border'>
      <nav className='container mx-auto flex items-center justify-between'>
        <Link href='/' className='text-2xl font-bold text-indigo-600 hover:text-indigo-700 transition-colors'>
          🔥Griddock
        </Link>
        <ul className='flex space-x-8'>
          <li>
            <Link
              href='https://www.instagram.com/hxrshdeepsingh/'
              className='text-gray-600 hover:text-indigo-600 transition-colors'
              target='_blank'
            >
              <Instagram strokeWidth={3} />
            </Link>
          </li>
          <li>
            <Link
              href='https://github.com/hxrshdeepsingh'
              className='text-gray-600 hover:text-indigo-600 transition-colors'
              target='_blank'
            >
              <Github strokeWidth={3} />
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
