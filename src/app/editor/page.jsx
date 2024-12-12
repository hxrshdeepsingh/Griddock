'use client';
import { useEffect, useRef, useState, React } from 'react';
import { useSearchParams } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import operations from '@/lib/canvas';
import { useRouter } from 'next/navigation';
import { Suspense } from 'react';

function EditorContent() {
  const [rows, setRows] = useState(4);
  const [cols, setCols] = useState(4);
  const [line, setLine] = useState(4);
  const [color, setColor] = useState('#000');
  const router = useRouter();

  const [createRows, createCols] = operations;

  const params = useSearchParams();
  const url = params.get('url');

  const canvasRef = useRef(null);
  const drawRef = useRef(null);

  useEffect(() => {
    if (!url) {
      router.push('/');
      return;
    }

    const currentCanvas = canvasRef.current;
    const draw = currentCanvas.getContext('2d');
    const image = new Image();
    drawRef.current = draw;
    image.onload = () => {
      draw.drawImage(image, 0, 0, currentCanvas.width, currentCanvas.height);
    };
    image.src = url;
  }, []);

  function controls() {
    const draw = drawRef.current;
    const canvas = canvasRef.current;

    draw.clearRect(0, 0, canvas.width, canvas.height);

    if (url) {
      const image = new Image();
      image.onload = () => {
        draw.drawImage(image, 0, 0, canvas.width, canvas.height);

        createRows(canvas, draw, rows, color, line);
        createCols(canvas, draw, cols, color, line);
      };
      image.src = url;
    } else {
      createRows(canvas, draw, rows, color, line);
      createCols(canvas, draw, cols, color, line);
    }
  }

  function clear() {
    const draw = drawRef.current;
    const canvas = canvasRef.current;
    draw.clearRect(0, 0, canvas.width, canvas.height);
    const image = new Image();
    image.onload = () => {
      draw.drawImage(image, 0, 0, canvas.width, canvas.height);
    };
    image.src = url;
  }

  function save() {
    const canvas = canvasRef.current;
    const canvasImage = canvas.toDataURL('image/png');
    localStorage.setItem('savedCanvas', canvasImage);
    const link = document.createElement('a');
    link.href = canvasImage;
    link.download = 'griddock.png';
    link.click();
  }

  return (
    <div className="flex flex-1 flex-col items-center justify-center p-4 space-y-12">
      <div className="controls space-y-3">
        <canvas ref={canvasRef} width={500} height={500} />
        <Input
          type="number"
          placeholder="rows"
          value={rows}
          onChange={(e) => {
            setRows(Number(e.target.value));
          }}
        />
        <Input
          type="number"
          placeholder="cols"
          value={cols}
          onChange={(e) => {
            setCols(Number(e.target.value));
          }}
        />
        <Input
          type="number"
          placeholder="line"
          value={line}
          onChange={(e) => {
            setLine(Number(e.target.value));
          }}
        />
        <Input
          type="color"
          value={color}
          onChange={(e) => {
            setColor(e.target.value);
          }}
        />
        <Button
          onClick={() => {
            controls();
          }}
        >
          apply changes
        </Button>
        <Button
          onClick={() => {
            save();
          }}
        >
          save
        </Button>
      </div>
    </div>
  );
}

export default function Editor() {
  return (
    <Suspense fallback={<div>Loading editor...</div>}>
      <EditorContent />
    </Suspense>
  );
}
