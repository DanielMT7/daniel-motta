import { Link } from 'react-router-dom'

import logo from '../../assets/Logos/svg/logo-no-background.svg'

import styles from './Navbar.module.css'

function Navbar() {
  return (
    <header className={styles.navbar_container}>
      <Link to="/">
        <img className={styles.logo} src={logo} alt="Daniel Logo" />
      </Link>
      <nav className={styles.nav_container}>
        <ul className={styles.nav_links}>
          <li>
            <Link to="/about">Sobre</Link>
          </li>
          <li>
            <Link to="/projects">Projetos</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Navbar
