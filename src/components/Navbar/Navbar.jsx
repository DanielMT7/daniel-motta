import { Link, useLocation } from 'react-router-dom'
import { useState, useEffect } from 'react'

import logo from '../../assets/Logos/svg/logo-no-background.svg'

import styles from './Navbar.module.css'

function Navbar() {
  const [activePage, setActivePage] = useState('')
  const location = useLocation()

  useEffect(() => {
    const path = location.pathname

    setActivePage(path)
  }, [location.pathname])

  return (
    <header className={styles.navbar_container}>
      <Link to="/">
        <img className={styles.logo} src={logo} alt="Daniel Logo" />
      </Link>
      <nav className={styles.nav_container}>
        <ul className={styles.nav_links}>
          <li className={activePage === '/about' ? styles.active : ''}>
            <Link to="/about">Sobre</Link>
          </li>
          <li className={activePage === '/projects' ? styles.active : ''}>
            <Link to="/projects">Projetos</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Navbar
