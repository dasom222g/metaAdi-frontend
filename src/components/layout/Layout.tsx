import React, { FC } from 'react'
import Footer from './Footer'
import Header from './Header'

interface LayoutProps {
  children: React.ReactNode
}

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <div className="wrap overflow-auto overflow-x-hidden">
      <Header />
      <div className="bg-aid-purple">
        <main className="pt-18 md:pt-22 pb-4 md:pb-6 px-4 md:px-8 min-h-screen">{children}</main>
        <Footer />
      </div>
    </div>
  )
}

export default Layout
