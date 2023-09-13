'use client'
import React, { useState } from "react";
import Link from "next/link";
import styles from './header.module.scss'
import Image from "next/image";
import BlurInputEffect from "./blurInputEffect";

interface Logo {
    id?: number;
    src: string;
    alt?: string;
    text: string;
    className?: string;
}

const logoArr: Logo[] = [
    {
        id: 1,
        src: '/header/vk.svg',
        alt: 'vk',
        text:'ВКонта',

    },
    {
        id: 2,
        src: '/header/insta.svg',
        alt: 'insta',
        text: "Instagr*"
    },
    {
        id: 3,
        src: '/header/youtube.svg',
        alt: 'youtube',
        text: "Youtube"
    },
    {
        id: 4,
        src: '/header/telega.svg',
        alt: 'telegram',
        text: "Telegra"
    },
    {
        id: 5,
        src: '/header/logo1.svg',
        alt: 'logo1',
        text: "Twitch"
    },
    {
        id: 6,
        src: '/header/tiktok.svg',
        alt: 'tiktok',
        text: "Tik-Tok"
    },
    {
        id: 7,
        src: '/header/love.svg',
        alt: 'love',
        text: "Likee"
    },
    {
        id: 8,
        src: '/header/odno.svg',
        alt: 'odnoklassiki',
        text: "Однокл"

    },

];

const NavItem = ({ href, text }: { href: string; text: string }) => (
    <li>
        <Link href={href}>{text}</Link>
    </li>
);

export default function Header() {
    const [isHoverNavbar, setIsHoverNavbar] = useState(false);

    const handleNavbarHover = () => {
        setIsHoverNavbar(true);
    };

    const handleNavbarLeave = () => {
        setIsHoverNavbar(false);
    };

    const LogoButton = ({ logo }: { logo: Logo; className?: string }) => (
        <button className={styles.logoContainerButton}>
            <Image src={logo.src} alt={`${logo.alt}`} width={28} height={28} />
            {isHoverNavbar && <div className={styles.logoContainerText}>{logo.text} </div>}
        </button>
    )

    return (
        <header onMouseEnter={handleNavbarHover} onMouseLeave={handleNavbarLeave}>
            <div>
                <nav>
                    <ul className={styles.navbar}>
                        <NavItem href="/stock" text="акции" />
                        <NavItem href="/price" text="цены" />
                        <NavItem href="/price" text="оплата" />
                        <NavItem href="/" text="статьи" />
                        <NavItem href="/" text="отзывы" />
                        <NavItem href="/contact" text="контакты" />
                    </ul>
                </nav>
                <nav className={styles.logoWrapper}>
                    <div className={styles.logoContainer}>
                        <Link href='/'>
                            <Image src="/header/logo.svg" alt='logo' width={123} height={44} />
                        </Link>
                        <ul>
                            {logoArr.map((logo) => (
                                <li key={logo.id}>
                                    <LogoButton  logo={logo}/>
                                </li>
                            ))}
                            <button className={styles.logoContainerButtonMore} style={{background: 'rgba(255, 255, 255, 0.30)'}}>
                                <Image src='/header/button.svg' alt="open" width={28} height={28} />
                                {isHoverNavbar && <div className={styles.logoContainerText} style={{left: "5px"}}>Ещё...</div>}
                            </button>
                        </ul>
                        <BlurInputEffect/>
                        <div className={styles.avatarContainer}>
                            <Image src="/header/bell.svg" alt='logo' width={29} height={44} />
                            <Image src="/header/basket.svg" alt='logo' width={38} height={44} />
                            <Image src="/header/ava.svg" alt='logo' width={29} height={44} style={{ fill: isHoverNavbar ? '#FF5C00' : 'initial' }}/>
                        </div>
                    </div>
                </nav>
            </div>
        </header>
    );
}
