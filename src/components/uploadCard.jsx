import { Input } from '@/components/ui/input'
import { useRouter } from 'next/navigation'
import useStore from '@/lib/store'

export default function UploadCard() {
  const router = useRouter()
  const { IMAGE_NAME, IMAGE_URL, setVal } = useStore()

  function handleImageUpload(e) {
    const file = e.target.files[0]
    if (file) {
      const url = URL.createObjectURL(file)
      setVal('IMAGE_URL', url)
      setVal('IMAGE_NAME', encodeURIComponent(file.name))

      router.push(`/playground`)
    }
  }

  return (
    <>
      <Input type='file' onChange={handleImageUpload} />
    </>
  )
}
