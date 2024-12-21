'use client';
import Head from 'next/head';
import { useState } from 'react';
import Hero from '@/components/hero';
import { BenefitsSection } from '@/components/benefits';

export default function Home() {
  const [cond, setCond] = useState(1);
  return (
    <>
      <Head>
        <title>hehehe</title>
        <meta name="keywords" content="keyword1, keyword2, keyword3" />
      </Head>
      <div className="flex flex-1 flex-col items-center justify-center p-4 space-y-12">
        <Hero />
        <BenefitsSection />
        <div></div>
      </div>
    </>
  );
}
