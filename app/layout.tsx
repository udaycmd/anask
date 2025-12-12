import { Metadata } from "next";
import { Funnel_Sans } from "next/font/google";
import "./globals.css";

const globalFont = Funnel_Sans({
    subsets: ["latin"],
    variable: "--funnel-sans",
});

export const metadata: Metadata = {
    title: "tello - Spaces for everyone",
    description: "A anonymous discussion platform for indian subcontinent",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className={`${globalFont.className} bg-main`}>
            <body>{children}</body>
        </html>
    );
}
