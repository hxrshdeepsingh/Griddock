import { Card, CardContent } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Upload } from 'lucide-react'
import { useRouter } from 'next/navigation'

export default function UploadCard() {
  const router = useRouter()

  function handleImageUpload(event) {
    const file = event.target.files[0]
    if (file) {
      const imageUrl = URL.createObjectURL(file)
      router.push(`/editor?url=${encodeURIComponent(imageUrl)}&name=${encodeURIComponent(file.name)}`)
    }
  }

  return (
    <>
      <Input type='file' onChange={handleImageUpload} className='hidden' id='file-upload' />
      <Upload className='mx-auto h-14 w-14 text-primary mb-4' />
    </>
  )
}
