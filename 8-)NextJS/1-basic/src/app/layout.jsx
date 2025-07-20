import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: { template: "%s | Amazon", default: "Amazon" },
  description: "Amazon Clone",
  keywords: ["amazon", "clone", "alışveriş", "elektronik", "teknoloji"],
  author: "Kemal",
  robots: "index, follow",
  openGraph: {
    title: "Amazon",
    description: "Amazon Clone",
    url: "https://amazon.com",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col min-h-screen`}
      >
        <header className="py-5 px-10 border-b text-center">
          <h1 className="font-boltext-centerd">Header</h1>
        </header>

        <main className="flex-1">{children}</main>

        <footer className="py-5 px-10 border-t text-center">
          <h1 className="font-bold">Footer</h1>
        </footer>
      </body>
    </html>
  );
}
