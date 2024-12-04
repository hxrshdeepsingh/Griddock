import { Github } from 'lucide-react'

export default function footer() {
    return (
        <footer className="bg-[#0a0a0a]">
            <div className="container mx-auto py-6 px-4 text-center">
                <p className="text-gray-500">&copy; 2023 StarUpload. All rights reserved.</p>
                <a
                    href="https://github.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-2 inline-flex items-center text-gray-500 hover:text-primary"
                >
                    <Github className="mr-2 h-4 w-4" />
                    View on GitHub
                </a>
            </div>
        </footer>
    )
}