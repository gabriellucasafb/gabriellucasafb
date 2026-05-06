import type { Metadata } from "next"
import { Dosis } from "next/font/google"
import { meta } from "@/data/content"
import "./globals.css"

const dosis = Dosis({
  subsets: ["latin"],
  weight: "variable",
  variable: "--font-sans",
  display: "swap",
})

export const metadata: Metadata = {
  title: meta.seo.title,
  description: meta.seo.description,
  metadataBase: new URL(meta.seo.url),
  icons: {
    icon: [{ url: "/img/x-dark.svg", type: "image/svg+xml" }],
  },
  openGraph: {
    title: meta.seo.title,
    description: meta.seo.description,
    url: meta.seo.url,
    type: "website",
    images: [{ url: meta.seo.ogImage, width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: meta.seo.title,
    description: meta.seo.description,
    images: [meta.seo.ogImage],
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" className={dosis.variable}>
      <body className="font-sans">{children}</body>
    </html>
  )
}
