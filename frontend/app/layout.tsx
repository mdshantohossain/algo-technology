import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Varela_Round } from "next/font/google"
import "./globals.css"
import Header from "@/layouts/header";
import Footer from "@/layouts/footer";
import { Analytics } from "@vercel/analytics/next"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })
const _varelaRound = Varela_Round({ weight: "400", subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Algo Technology",
  description: "This is our app description",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
          <link rel="icon" href="/icon.png" type="image/png" sizes="32x32" />
      </head>
      <body className={`font-sans antialiased`}>
      <Header />
      {children}
      <Footer />
      <Analytics />
      </body>
    </html>
  )
}
