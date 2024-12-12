import Link from 'next/link';
import { Button } from './ui/button';
import { Menu } from 'lucide-react';

export default function header() {
  return (
    <header className="p-4 md:p-6 sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 dark:border-border">
      <nav className="container mx-auto flex items-center justify-between">
        <Link
          href="/"
          className="text-2xl font-bold text-indigo-600 hover:text-indigo-700 transition-colors"
        >
          Griddock
        </Link>
        <div className="md:hidden">
          <Button variant="ghost" size="icon">
            <Menu className="h-6 w-6" />
            <span className="sr-only">Open menu</span>
          </Button>
        </div>
        <ul className="hidden md:flex space-x-8">
          <li>
            <Link
              href="#"
              className="text-gray-600 hover:text-indigo-600 transition-colors"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="#"
              className="text-gray-600 hover:text-indigo-600 transition-colors"
            >
              Features
            </Link>
          </li>
          <li>
            <Link
              href="#"
              className="text-gray-600 hover:text-indigo-600 transition-colors"
            >
              Pricing
            </Link>
          </li>
          <li>
            <Link
              href="#"
              className="text-gray-600 hover:text-indigo-600 transition-colors"
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
