import styles from './page.module.scss'
import Image from "next/image";
import React from "react";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.homeWrapper}>
        <div className={styles.homeWrapperTitle}>
          Накрутка и продвижение
          в социальных сетях
        </div>
        <div className={styles.homeDescription}>
          СММ накрутка подписчиков, лайков, просмотров
          по приятной цене. В продвижении задействуется
          реалистичная аудитория. Здесь качество, гарантия
          и безопасность на всех этапах!
        </div>
      </div>
      <Image src="/home/peoples.svg" alt="people" width={672} height={463}/>
    </main>
  )
}
