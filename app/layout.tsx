import "styles/tailwind.css"
import { ReactNode } from "react"
import Footer from "./footer"
import Nav from "./nav"

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Nav />
        <main className="flex flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
