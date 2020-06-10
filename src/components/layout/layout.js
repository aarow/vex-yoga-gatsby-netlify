import React from "react"

import Header from "./Header"
import Footer from "./Footer"

const Layout = ({ children, location, title }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <header>
        <Header />
      </header>
      <main className="flex-grow">{children}</main>
      <footer>
        <Footer />
      </footer>
    </div>
  )
}

export default Layout
