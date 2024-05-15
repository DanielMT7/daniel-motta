import { FaGithub, FaLinkedin, FaFileAlt } from 'react-icons/fa'
import perfil from '../../../assets/me.jpeg'

import styles from './Home.module.css'

function Home() {
  return (
    <div className={styles.home_container}>
      <div className={styles.name_container}>
        <h1>Daniel Motta</h1>
        <p>“Faça do sucesso uma consequência do seu esforço.”</p>
      </div>

      <div className={styles.main_information}>
        <img
          className={styles.face_card}
          src={perfil}
          alt="Rosto de Daniel Motta"
        />
        <ul className={styles.nav_links}>
          <li>
            <a href="https://github.com/DanielMT7" target="_blank">
              <FaGithub size={20} /> Github
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/danielsmotta/" target="_blank">
              <FaLinkedin size={20} /> LinkedIn
            </a>
          </li>
          <li>
            <a href="" target="_blank">
              <FaFileAlt size={20} /> Currículo
            </a>
          </li>
        </ul>
      </div>

      <div className={styles.description}>
        <p>
          Olá, sou desenvolvedor frontend orientado por UX e design. Estudo
          Ciência da Computação, no CEFET/RJ, e tenho experiências com
          desenvolvimento web em diferentes aplicações. Meu principal objetivo é
          a construção de soluções inovadoras e práticas, com relevância e
          impacto na vida das pessoas. Sou entusiasta da tecnologia, apaixonado
          por desenvolvimento web e segurança da informação, e estou sempre
          estudando e em busca de aprimoramento profissional.
        </p>
      </div>

      <div className={styles.skills_container}>
        <h1>Habilidades</h1>

        <div className={styles.skill}>
          <h2>Programação</h2>
          <p>JavaScript, TypeScript, Node.js, Python, C, C++</p>
        </div>

        <div className={styles.skill} style={{ animationDelay: '5.7s' }}>
          <h2>FrontEnd</h2>
          <p>React, HTML5, CSS3, Bootstrap</p>
        </div>

        <div className={styles.skill} style={{ animationDelay: '6.4s' }}>
          <h2>BackEnd</h2>
          <p>REST API, Express, PostgreSQL, MongoDB</p>
        </div>

        <div className={styles.skill} style={{ animationDelay: '7.1s' }}>
          <h2>Línguas</h2>
          <p>Português Brasileiro, Inglês</p>
        </div>
      </div>
    </div>
  )
}

export default Home
