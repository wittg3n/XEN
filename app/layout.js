import { Inter } from "next/font/google";
import "./globals.css";

import dynamic from "next/dynamic";


// Dynamic import for components that should be rendered client-side only
const Navbar = dynamic(() => import("@/components/Navbar"), { ssr: false });
const inter = Inter({ subsets: ["latin"] });
import Footer from "@/components/Footer";
export const metadata = {
  title: "XEN | The Ultimate Messaging",
  description: "Createed by me",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
          {children}
          <Footer />
      </body>
    </html>
  );
}
