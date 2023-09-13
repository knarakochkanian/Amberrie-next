import React, { useState } from 'react';
import Image from "next/image";
import styles from './blurInputEffect.module.scss'

export default function BlurInputEffect()  {
    const [isBlur, setIsBlur] = useState(false);

    const handleInputFocus = () => {
        setIsBlur(true);
    };

    const handleInputBlur = () => {
        setIsBlur(false);
    };

    return (
        <div className={styles.container}>
            <div className={styles.inputWrapper__header}>
                <Image src="header/search.svg" alt="search" width={22} height={36} style={{padding: '0 15px'}}/>
                <input
                    type="text"
                    onFocus={handleInputFocus}
                    onBlur={handleInputBlur}
                    placeholder={isBlur ? "Что накручиваем?" : ''}
                    className={styles.input}
                />
                <button className={styles.inputButton}>Найти</button>
            </div>

            {/*<div className={`container ${isBlur ? 'blur' : ''}`}>Содержимое страницы</div>*/}
        </div>
    );
};
