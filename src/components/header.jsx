import Image from 'next/image'

export default function header() {
    return (
        <header className="bg-[#0a0a0a] sticky top-0 z-10">
            <div className="container mx-auto flex items-center justify-start gap-2 p-4">
                <Image src="/logo.png" alt="Logo" width={40} height={40} />
                <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-green-400">Griddock</span>
            </div>
        </header>
    )
}