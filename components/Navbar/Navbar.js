import React, { useEffect, useState } from 'react'
import style from './Navbar.module.css'

function Navbar() {
    const [isMenuShown, setIsMenuShown] = useState(false)

    useEffect(()=>{
        setIsMenuShown(false)
    },[])

    return (
        <div className={style.navbar}>
            <div className={style.logo}>
                Hunger
            </div>
            <svg onClick={()=>setIsMenuShown(!isMenuShown)} className={style.hamburger_menu} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
            <ul className={`${style.nav_menu} ${isMenuShown&&style.nav_menu_active}`}>
                <li className={style.nav_link}>Home</li>
                <li className={style.nav_link}>Favorite</li>
                <li className={style.nav_link}>About Us</li>
            </ul>
        </div>
    )
}

export default Navbar
