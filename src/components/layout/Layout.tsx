import React, { FC } from 'react'
import Footer from './Footer'
import Header from './Header'

interface LayoutProps {
  children: React.ReactNode
}

const Layout: FC<LayoutProps> = ({children}) => {
  return (
    <>
      <Header />
      <main className="pt-28 min-h-3/4">
        {children}
      </main>
      <Footer />
    </>
  )
}

export default Layout