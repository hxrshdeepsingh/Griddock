'use client';

import UploadCard from '@/components/uploadCard';
import { BenefitsSection } from '@/components/benefits';
import Hero from '@/components/hero';

export default function Home() {
  return (
    <>
      <div className="flex flex-1 flex-col items-center justify-center p-4 space-y-12">
        <div>
          <Hero />
        </div>
        <div>
          <BenefitsSection />
        </div>
      </div>
    </>
  );
}
