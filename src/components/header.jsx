import { useState } from "react"
import styles from './Header.module.scss';
import { AiOutlineCloseSquare } from "react-icons/ai";
import { BiMenuAltRight } from "react-icons/bi";


const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuToggler = () => setMenuOpen(p => !p)
  return (
    <header className={styles.header}>
      <div className={styles.header__content}>
        <div>
          <span className={styles.logo}>Trybe-Eats</span>
        </div>
        <div>
          <nav className={`${styles.nav} ${menuOpen ? styles[`nav--open`] : {}}`}>
            <a className={styles.nav__items} href={"/"}>Home</a>
            <a className={styles.nav__items} href={"/"}>About</a>
            <a className={styles.nav__items} href={"/"}>Contact Us</a>
            {/* <div className={styles.nav__button__container}>
              <Button/>
            </div> */}
          </nav>
        </div>
        <div>
          {/* <div className={styles.header__button__container}>
            <Button/>
          </div> */}
          <button className={styles.header__toggler} onClick={menuToggler}>
            {!menuOpen ? <BiMenuAltRight className="menu-button"/> : <AiOutlineCloseSquare/>}
          </button>
        </div>
      </div>


    </header>

  )
}

// const Button = () => {
//   return <button className={styles.button}>click me</button>
// }

export default Header