import type { Metadata } from "next";
import { Space_Mono, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/web/navbar";
import { ThemeProvider } from "@/components/ui/theme-provider";

const spaceMono = Space_Mono({
  variable: "--font-space-mono",
  subsets: ["latin"],
  weight: ["400", "700"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "PixClean - Free AI Background Remover | Remove Image Backgrounds Instantly",
  description: "PixClean uses advanced AI to remove backgrounds from images instantly and effortlessly. Perfect for e-commerce, social media, and professional graphics. No technical skills needed—upload, remove, and download in seconds.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${spaceMono.variable} ${spaceGrotesk.variable} antialiased`}
        suppressHydrationWarning={true}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
           <Navbar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
