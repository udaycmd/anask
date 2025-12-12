import Image from "next/image";

export default function Home() {
    return (
        <div className="min-h-screen overflow-hidden">
            <main className="flex-col md:flex relative container mx-auto py-13 items-center justify-center">
                <Image
                    src="/tello.webp"
                    alt="logo"
                    width={320}
                    height={300}
                />
            </main>

            <footer className="font-medium border-t border-dashed text-black border-t-emerald-700 text-xs">
                <div className="container mx-auto px-4 py-4">
                    <div className="flex flex-col items-center gap-4 justify-center">
                        <div className="flex gap-2">
                            <a href="#">Terms</a>
                            <a href="#">Privacy</a>
                            <a href="#">Contact</a>
                        </div>
                        <p>&copy; 2025 Tello discussion hub.</p>
                    </div>
                </div>
            </footer>
        </div>
    );
}
