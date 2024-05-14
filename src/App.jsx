import styles from './App.module.css'
import { Outlet } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'

function App() {
  return (
    <div className={styles.app_container}>
      <Navbar />
      <Outlet />
    </div>
  )
}

export default App
