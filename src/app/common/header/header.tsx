'use client'
import React from "react";
import Link from "next/link";
import styles from './header.module.scss'
import Image from "next/image";
import BlurInputEffect from "./blurInputEffect";

interface Logo {
    id: number;
    src: string;
    alt: string;
    className?: string;
}

const logoArr: Logo[] = [
    {
        id: 1,
        src: '/header/vk.svg',
        alt: 'vk'
    },
    {
        id: 2,
        src: '/header/insta.svg',
        alt: 'insta'
    },
    {
        id: 3,
        src: '/header/youtube.svg',
        alt: 'youtube'
    },
    {
        id: 4,
        src: '/header/telega.svg',
        alt: 'telegram'
    },
    {
        id: 5,
        src: '/header/logo1.svg',
        alt: 'logo1'
    },
    {
        id: 6,
        src: '/header/tiktok.svg',
        alt: 'tiktok'
    },
    {
        id: 7,
        src: '/header/love.svg',
        alt: 'love'
    },
    {
        id: 8,
        src: '/header/odno.svg',
        alt: 'odnoklassiki'
    },

];

const NavItem = ({ href, text }: { href: string; text: string }) => (
    <li>
        <Link href={href}>{text}</Link>
    </li>
);

const LogoButton = ({ logo }: { logo: Logo; className?: string }) => (
    <button>
        <Image src={logo.src} alt={logo.alt} width={28} height={28} />
    </button>
);

export default function Header() {
    return (
        <header>
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
                                    <LogoButton  logo={logo} className={styles.logoContainerButton}/>
                                    </li>
                                ))}
                        </ul>
                        <BlurInputEffect />
                        <div className={styles.avatarContainer}>
                            <Image src="/header/bell.svg" alt='logo' width={29} height={44} />
                            <Image src="/header/basket.svg" alt='logo' width={38} height={44} />
                            <Image src="/header/ava.svg" alt='logo' width={29} height={44} />
                        </div>
                    </div>
                </nav>
            </div>
        </header>
    );
}
