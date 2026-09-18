import type { Metadata } from "next"
import { Inter, JetBrains_Mono } from "next/font/google"
import { Nav } from "components/Nav"
import "styles/tailwind.css"

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" })
const jetbrains = JetBrains_Mono({ subsets: ["latin"], variable: "--font-jetbrains", display: "swap" })

export const metadata: Metadata = {
  title: "Maddie Topaz | Software Engineer",
  description: "Full-stack engineer with a platform mindset and a DevOps heart.",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" data-theme="ops" className={`${inter.variable} ${jetbrains.variable}`}>
      <body className="bg-base-100 text-base-content">
        <Nav />
        {children}
      </body>
    </html>
  )
}
