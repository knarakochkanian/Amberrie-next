import React from "react";
import Link from "next/link"
export default function Header()
{
    return(
        <React.Fragment>
            <nav>
                <ul>
                    <li><Link href='/stock'>акции</Link></li>
                    <li><Link href='/price'>цены </Link></li>
                    <li><Link href='/price'>оплата </Link></li>
                    <li><Link href='/'>статьи </Link></li>
                    <li><Link href='/'>статьи </Link></li>
                    <li><Link href='/contact'>контакты </Link></li>
                </ul>
            </nav>
        </React.Fragment>
    );
}