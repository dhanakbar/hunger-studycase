import React from 'react'
import style from './Navbar.module.css'
import Link from 'next/link'

function Navbar() {
    return (
        <div className={style.navbar}>
            <div className="logo">
                Ini Logo
            </div>
            <ul className={style.nav_menu}>
                <li className={style.nav_link}><Link href="#">About</Link></li>
                <li className={style.nav_link}><Link href="#">Product</Link></li>
                <li className={style.nav_link}><Link href="#">Gallery</Link></li>
            </ul>
        </div>
    )
}

export default Navbar
