import Link from 'next/link';
import { useEffect, useState } from 'react';
import style from './Navbar.module.css';
import { useSession, signIn, signOut } from 'next-auth/react';

function Navbar() {
    const { data: session } = useSession();

    const [isMenuShown, setIsMenuShown] = useState(false);
    const navLinks = [
        {
            page : "Home",
            route : "/"
        },
        {
            page : "About Us",
            route : "/about"
        },
        {
            page : "Galery",
            route : "/galery"
        },
        {
            page : "Favorites",
            route : "/favorites"
        },
    ];

    useEffect(()=>{
        setIsMenuShown(false)
    },[])

    return (
        <div className={style.navbar}>
            <div className={style.logo}>
                <Link href='/'>Hunger</Link>
            </div>
            <svg onClick={()=>setIsMenuShown(!isMenuShown)} className={style.hamburger_menu} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
            <ul className={`${style.nav_menu} ${isMenuShown&&style.nav_menu_active}`}>
                {
                    navLinks.map(navLink => {
                        return <li key={navLink.page} className={style.nav_link}><Link href={navLink.route}>{navLink.page}</Link></li>
                    })
                }
                {
                    !session && <li onClick={() => signIn()} className={style.nav_link}><Link href="">Sign In</Link></li>
                }
                {
                    session && <li onClick={() => signOut()} className={style.nav_link}><Link href="">Sign Out</Link></li>
                }
            </ul>
        </div>
    )
}

export default Navbar
