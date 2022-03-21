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
      <main className="pt-24 min-h-3/4">
        {children}
      </main>
      <Footer />
    </div>
  )
}

export default Layout