import { useState } from "react"
import styles from './Header.module.scss';


const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.header__content}>
        <div>
          <span className={styles.logo}>Trybe-Eats</span>
        </div>
        <div>
          <nav className={styles.nav}>
            <a className={styles.nav__items} href={"/"}>Home</a>
            <a className={styles.nav__items} href={"/"}>About</a>
            <a className={styles.nav__items} href={"/"}>Contact Us</a>
          </nav>
        </div>
        <div>
          <div className={styles.header__button__container}></div>
          <button className={styles.header__toggler}></button>
        </div>
      </div>


    </header>

  )
}

export default Header