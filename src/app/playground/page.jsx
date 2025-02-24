'use client'
import useStore from '@/lib/store'
import { useRef, useEffect } from 'react'
import * as fabric from 'fabric'

export default function Page() {
  const { IMAGE_URL } = useStore()
  const canvasRef = useRef(null)
  const mainCanvas = useRef(null)
  const mainImage = new Image()

  useEffect(() => {
    const canvas = new fabric.Canvas(canvasRef.current)
    mainCanvas.current = canvas

    const img = new fabric.Image(mainImage, {
      width: 100,
      height: 100,
      scaleX: 1,
      scaleY: 1,
    })
    canvas.add(img)
    mainImage.src = IMAGE_URL

    return () => {
      canvas.dispose()
    }
  }, [])

  return (
    <>
      <canvas ref={canvasRef} width={500} height={500} id='canvas' />
    </>
  )
}
