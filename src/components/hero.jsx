import UploadCard from './uploadCard';

export default function Hero() {
  return (
    <div className=''>
      <main className='container mx-auto px-4 md:px-6 py-12 md:py-24 flex flex-col items-center text-center'>
        <h1 className='text-4xl sm:text-5xl md:text-6xl font-extrabold text-gray-900 mb-4 leading-tight'>
          🔥Create{' '}
          <span className='text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-purple-600'>
            Beautiful
          </span>{' '}
          Grids
        </h1>
        <p className='text-lg sm:text-xl md:text-2xl text-gray-600 mb-8 max-w-2xl'>
          Overlay gridlines on your images to simplify sketching outlines with precision and ease.
        </p>
        <div className='mt-12 relative w-full flex justify-center max-w-4xl'>
          <UploadCard />
        </div>
      </main>
    </div>
  );
}
