import "./globals.css";
import { Inter } from "next/font/google";
import Nav from "@/components/Navigation";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  icons: {
    icon: "./favicon.png",
  },
  title: "Gameical",
  description: "Games to enjoy",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Nav />
        <main className="flex min-h-screen flex-col items-center justify-between p-10 bg-[#0a020e]">
          {children}
        </main>
      </body>
    </html>
  );
}
