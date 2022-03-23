import React, { FC } from 'react'
import Footer from './Footer'
import Header from './Header'

interface LayoutProps {
  children: React.ReactNode
}

const Layout: FC<LayoutProps> = ({children}) => {
  return (
    <div className="wrap">
      <Header />
      <div className="min-h-screen flex flex-col">
        <main className="pt-18 md:pt-22 px-4 md:px-8">
          {children}
        </main>
        <Footer />
      </div>
    </div>
  )
}

export default Layout