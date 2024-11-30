import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Upload } from 'lucide-react'

export default function UploadCard() {
    return (
        <>
            <Card className="w-full max-w-md bg-[#161617] border-green-900 shadow-lg">
                <CardContent className="pt-6">
                    <div className="mb-6 text-center">
                        <h2 className="text-2xl font-bold text-primary">Upload Your File</h2>
                        <p className="text-gray-400 mt-2">Drag & drop or click to select</p>
                    </div>
                    <div className="space-y-6">
                        <div className="relative">
                            <Input type="file" className="hidden" id="file-upload" />
                            <label
                                htmlFor="file-upload"
                                className="flex cursor-pointer items-center justify-center rounded-lg border-2 border-dashed border-gray-700 p-8 hover:border-primary"
                            >
                                <div className="text-center">
                                    <Upload className="mx-auto h-12 w-12 text-gray-500 mb-4" />
                                    <span className="text-sm font-medium text-gray-300">
                                        Choose a file or drag it here
                                    </span>
                                </div>
                            </label>
                        </div>
                        <Button className="w-full bg-primary text-white hover:bg-primary-dark">
                            Launch to the Stars
                        </Button>
                    </div>
                </CardContent>
            </Card>
        </>
    )
}