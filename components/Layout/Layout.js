import React from 'react'
import Navbar from '../Navbar/Navbar'
function Layout({children}) {
  return (
    <div>
      <Navbar/>
      <div>
        {children}
      </div>
    </div>
  )
}

export default Layout
