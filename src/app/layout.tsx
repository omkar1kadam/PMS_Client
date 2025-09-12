import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/themeProvider";

const inter = Inter({ subsets: ["latin"] })

//export const metadata = {
 // title: "Project Management System",
 // description: "Project Management System",
//}

interface RootLayoutProps {
    children: React.ReactNode;
  }
  export default function RootLayout({ children }: RootLayoutProps) {
    return (
      <html lang="en" className="light">
        <body className={`${inter.className} bg-white text-black`}>
        <ThemeProvider>
          {children}
        </ThemeProvider>
          </body>
      </html>
    )
  }