import React, { FC } from 'react'
// import Footer from './Footer'
import Header from './Header'

interface LayoutProps {
  children: React.ReactNode
}

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <div className="h-full wrap overflow-hidden">
      <Header />
      <div className="h-full overflow-auto bg-aid-purple">
        <main className="pt-18 md:pt-22 px-4 md:px-8">{children}</main>
        {/* <Footer /> */}
      </div>
    </div>
  )
}

export default Layout
