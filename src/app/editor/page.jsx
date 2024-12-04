'use client'
import { useEffect, useRef, useState, Suspense } from "react";
import { useSearchParams } from 'next/navigation'

function EditorContent() {
  const canvasRef = useRef(null);
  const [imageLoaded, setImageLoaded] = useState(false);
  const [error, setError] = useState(null);
  const searchParams = useSearchParams()

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const imageUrl = searchParams.get('url');

    if (imageUrl) {
      const img = new Image();
      img.src = imageUrl;

      img.onload = () => {
        const canvasWidth = canvas.width;
        const canvasHeight = canvas.height;
        const imgWidth = img.width;
        const imgHeight = img.height;

        // Calculate the scaling factor to fit the image within the canvas dimensions
        const scale = Math.min(canvasWidth / imgWidth, canvasHeight / imgHeight);
        
        // Calculate the new image width and height
        const scaledWidth = imgWidth * scale;
        const scaledHeight = imgHeight * scale;

        // Center the image on the canvas
        const x = (canvasWidth - scaledWidth) / 2;
        const y = (canvasHeight - scaledHeight) / 2;

        // Clear the canvas and draw the image
        ctx.clearRect(0, 0, canvasWidth, canvasHeight);
        ctx.drawImage(img, x, y, scaledWidth, scaledHeight);

        setImageLoaded(true);
      };

      img.onerror = () => {
        setError("Failed to load image");
      };

      return () => {
        setImageLoaded(false);
        setError(null);
      };
    } else {
      setError("No image URL provided");
    }
  }, [searchParams]);

  return (
    <div className="flex flex-1 flex-col items-center justify-center p-4 space-y-12">
      <div>
        {error && <p className="text-red-500">{error}</p>}
        {!imageLoaded && !error && <p>Loading image...</p>}
        <canvas ref={canvasRef} width={500} height={500} />
      </div>
    </div>
  );
}

export default function Editor() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <EditorContent />
    </Suspense>
  );
}
