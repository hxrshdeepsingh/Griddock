'use client';
import Head from 'next/head';
import Hero from '@/components/hero';
import { BenefitsSection } from '@/components/benefits';

export default function Home() {
  return (
    <>
      <Head>
        <title>hehehe</title>
        <meta name='keywords' content='keyword1, keyword2, keyword3' />
      </Head>
      <div className='flex flex-1 flex-col items-center justify-center p-4 space-y-12'>
        <Hero />
        <BenefitsSection />
        <div></div>
      </div>
    </>
  );
}
