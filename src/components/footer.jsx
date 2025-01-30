import { Github } from 'lucide-react';

export default function footer() {
  return (
    <footer className='bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 text-gray-600 shadow-xl'>
      <div className='container mx-auto py-6 px-4 text-center'>
        <p>&copy; 2024 Griddock. All rights reserved.</p>
        <a
          href='https://github.com/hxrshdeepsingh'
          target='_blank'
          rel='noopener noreferrer'
          className='mt-2 inline-flex items-center hover:text-primary'
        >
          <Github className='mr-2 h-4 w-4' />
          View on GitHub
        </a>
      </div>
    </footer>
  );
}
