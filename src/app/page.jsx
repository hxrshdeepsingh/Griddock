'use client'

import UploadCard from "@/components/uploadCard"

export default function Home() {
  return (
    <>
      <div className="flex flex-1 flex-col items-center justify-center p-4 space-y-12">
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
        <UploadCard />
      </div>
    </>
  );
}
