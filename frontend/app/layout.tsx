import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Varela_Round } from "next/font/google"
import "./globals.css"
import Header from "@/components/header";
import Footer from "@/components/footer";

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })
const _varelaRound = Varela_Round({ weight: "400", subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Algo Technology",
  description: "Created with v0",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased`}>
      <Header />
      {children}
      <Footer />
      </body>
    </html>
  )
}
