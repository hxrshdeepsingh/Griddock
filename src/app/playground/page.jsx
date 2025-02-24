'use client'
import useStore from '@/lib/store'
import { useRef, useEffect } from 'react'
import * as fabric from 'fabric'

export default function Page() {
  const { IMAGE_URL } = useStore()
  const canvasRef = useRef(null)
  const mainCanva = useRef(null)

  useEffect(() => {
    const canvas = new fabric.Canvas(canvasRef.current)
    mainCanva.current = canvas

    const mainImage = new Image()
    mainImage.src = IMAGE_URL

    mainImage.onload = () => {
      const img = new fabric.Image(mainImage, {
        width: 100,
        height: 100,
        scaleX: 1,
        scaleY: 1,
        left: canvas.getWidth() / 2,
        top: canvas.getHeight() / 2,
        originX: 'center',
        originY: 'center',
      })

      canvas.add(img)
      canvas.renderAll()
    }

    return () => {
      canvas.dispose()
    }
  }, [IMAGE_URL])

  return <canvas ref={canvasRef} width={500} height={500} id='canvas' />
}
