'use client'
import useStore from '@/lib/store';
import { useRef, useEffect } from 'react';
import { fabric } from "fabric";

export default function Page() {
  const { IMAGE_NAME, IMAGE_URL, ROWS, COLS, LINE_WIDTH, LINE_COLOR } = useStore();
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = new fabric.Canvas(canvasRef.current, {
      width: 800,
      height: 600,
      backgroundColor: '#f0f0f0',
    });

    const rect = new fabric.Rect({
      left: 100,
      top: 100,
      width: 200,
      height: 100,
      fill: 'red',
      angle: 45,
    });
    canvas.add(rect);

    return () => {
      canvas.dispose();
    };
  }, []);

  return (
    <>
      <h1>Data</h1>
      <h2>{IMAGE_URL}</h2>
      <h2>{IMAGE_NAME}</h2>
      <h2>{ROWS}</h2>
      <h2>{COLS}</h2>
      <h2>{LINE_WIDTH}</h2>
      <h2>{LINE_COLOR}</h2>

      <hr />

      <canvas ref={canvasRef} width={500} height={500} style={{ border: "1px solid black" }} />
    </>
  );
}
