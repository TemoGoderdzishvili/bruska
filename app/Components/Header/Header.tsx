'use client'
import styles from "./Header.module.css"
import Link from "next/link"
import Image from "next/image"
import logo from "/logo.png"
import { useState } from "react"

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false)

    return (
        <div className={styles.mainContainer}>
            <div className={styles.subDiv}>
                <div className={styles.logoDiv}>
                    <img src="/logo.png" alt="" className={styles.logo} />
                </div>

                {/* BURGER MENU */}

                <div className={`${styles.burger} ${menuOpen ? styles.open : ''}`} onClick={() => setMenuOpen(!menuOpen)}>
                    <div className={styles.bar}></div>
                    <div className={styles.bar}></div>
                    <div className={styles.bar}></div>
                </div>

                <div className={`${styles.navMenu} ${menuOpen ? styles.open : ''}`}>
                    <li className={styles.navItem}><Link href={'/'} onClick={() => setMenuOpen(false)}>COOKIES</Link></li>
                    <li className={styles.navItem}><Link href={'/'} onClick={() => setMenuOpen(false)}>LOCATION</Link></li>
                    <li className={styles.navItem}>
                        <div className={styles.orderNow} onClick={() => setMenuOpen(false)}>
                            <Link href={'/'}><button>ORDER NOW</button></Link>
                        </div>
                    </li>
                </div>
            </div>
        </div>
    )
}

export default Header