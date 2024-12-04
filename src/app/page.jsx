'use client'

import { Github } from 'lucide-react'
import UploadCard from "@/app/parts/uploadCard"
import CanvasCard from "@/app/parts/canvasCard";
import { useState } from 'react';
import Image from 'next/image';

export default function Home() {
  const [activeComponent, setActiveComponent] = useState('upload');

  const toggleComponent = () => {
    setActiveComponent((prev) => (prev === 'upload' ? 'another' : 'upload'));
  };
  return (
    <>
      <div className="flex min-h-screen flex-col bg-[#121313] text-gray-100">
        <header className="bg-[#0a0a0a] sticky top-0 z-10">
          <div className="container mx-auto flex items-center justify-start gap-2 p-4">
            <Image src="/logo.png" alt="Logo" width={40} height={40} />
            <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-green-400">Griddock</span>
          </div>
        </header>
        <main className="flex flex-1 flex-col items-center justify-center p-4 space-y-12">
          <div className="text-center max-w-2xl">
            <h1 className="text-primary text-4xl sm:text-5xl lg:text-7xl">
              <span className="block text-gray-100">Build in a weekend</span>
              <span className="text-brand block">Scale to millions</span>
            </h1>
            <p className="pt-2 text-gray-100 my-3 sm:mt-5 lg:mb-0 sm:text-base lg:text-lg">
              Supabase is an open source Firebase alternative. Start your project with
              a Postgres database, Authentication, instant APIs, Edge Functions,
              Realtime subscriptions, Storage, and Vector embeddings.
            </p>
          </div>

          {activeComponent === 'upload' ? <UploadCard /> : <CanvasCard />}

        </main>
        <footer className="bg-[#0a0a0a] mt-12">
          <div className="container mx-auto py-6 px-4 text-center">
            <p className="text-gray-500">&copy; 2023 StarUpload. All rights reserved.</p>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-flex items-center text-gray-500 hover:text-primary"
            >
              <Github className="mr-2 h-4 w-4" />
              View on GitHub
            </a>
          </div>
        </footer>
      </div>
    </>
  );
}
