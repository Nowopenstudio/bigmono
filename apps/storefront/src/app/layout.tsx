import { getBaseURL } from "@lib/util/env"
import { Metadata } from "next"
import type { ReactNode } from "react"
import "styles/globals.css"

export const metadata: Metadata = {
  metadataBase: new URL(getBaseURL()),
}

export default function RootLayout(props: { children: ReactNode }) {
  return (
    <html lang="en" data-mode="light">
       <head><link rel="stylesheet" href="https://use.typekit.net/wsl0tjc.css"/>
       </head>
      <body>
        <main className="relative">{props.children}</main>
      </body>
    </html>
  )
}
