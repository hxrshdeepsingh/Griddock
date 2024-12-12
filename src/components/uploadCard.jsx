import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Upload } from 'lucide-react';
import { useRouter } from 'next/navigation';

export default function UploadCard() {
  const router = useRouter();

  function handleImageUpload(event) {
    const file = event.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      router.push(
        `/editor?url=${encodeURIComponent(imageUrl)}&name=${encodeURIComponent(file.name)}`
      );
    }
  }

  return (
    <>
      <Card className="w-full rounded-3xl max-w-md shadow-xl bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <CardContent className="pt-6">
          <div className="mb-6 text-center">
            <h2 className="text-2xl font-bold text-primary">
              Upload Your image
            </h2>
            <p className="mt-2">Drag & drop or click to select</p>
          </div>
          <div className="space-y-6">
            <div className="relative">
              <Input
                type="file"
                onChange={handleImageUpload}
                className="hidden"
                id="file-upload"
              />
              <label
                htmlFor="file-upload"
                className="flex cursor-pointer items-center justify-center rounded-lg border-4 border-dashed border-primary p-12 hover:border-primary"
              >
                <div className="text-center">
                  <Upload className="mx-auto h-14 w-14 text-primary mb-4" />
                  <span className="text-sm font-medium">
                    Choose a file or drag it here
                  </span>
                </div>
              </label>
            </div>
          </div>
        </CardContent>
      </Card>
    </>
  );
}
