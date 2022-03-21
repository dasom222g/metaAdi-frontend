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
        <main className="pt-24 px-2 md:px-6">
          {children}
        </main>
        <Footer />
      </div>
    </div>
  )
}

export default Layout