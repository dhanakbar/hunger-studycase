import React from 'react'
import Navbar from '../Navbar/Navbar'
import style from './layout.module.css'
function Layout({children}) {
  return (
    <div className={style.layout}>
      <Navbar/>
      <div>
        {children}
      </div>
    </div>
  )
}

export default Layout
