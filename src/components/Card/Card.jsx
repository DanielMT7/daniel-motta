import { useState } from 'react'

import { FaAngleDown, FaAngleUp } from 'react-icons/fa'
import globo from '../../assets/Globo/globo.jpg'
import globo_video from '../../assets/Globo/globo.mp4'

import styles from './Card.module.css'

function Card() {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => {
    setIsOpen(prevState => !prevState)
  }

  const MoreInformation = () => {
    return (
      <div className={styles.more_info_container}>
        <div className={styles.more_info}>
          <video
            className={styles.video_container}
            src={globo_video}
            controls
          />
        </div>

        <div className={styles.assignments}>
          <h1>Atribuições</h1>
          <ul>
            <li>
              Desempenhei um papel abrangente na área de desenvolvimento voltada
              para o front‑end do Globoplay, contribuindo para o aprimoramento
              da experiência de milhões de usuários no aplicativo para SmartTV.
            </li>
            <li>
              Desenvolvi novas features no Frontend usando ReactJS, JavaScript e
              posteriormente uma framework própria da Globo voltada para
              SmartTV.
            </li>
            <li>
              Testei, revisei e abri solicitações de pull requests (PRs) no
              GitLab.
            </li>
            <li>
              Participei de reuniões estratégicas para estabelecer metas e
              superar desafios por meio da metodologia Agile.
            </li>
            <li>
              Colaborei com os times de Backend, DevOps, Produto, Marketing e
              entre outros, visando a melhoria do produto.
            </li>
          </ul>
        </div>
      </div>
    )
  }

  return (
    <div className={styles.card_container}>
      <div className={styles.card}>
        <img src={globo} alt="Ícone Globo" />

        <div className={styles.main_container}>
          <div className={styles.main_information}>
            <h1>Desenvolvedor FrontEnd</h1>
            <p>TV Globo - Globo Comunicação e Participações S/A</p>
          </div>

          <div className={styles.main_information}>
            <h1>Rio de Janeiro, Brasil</h1>
            <p>Dez. 2021 - Dez. 2023</p>
          </div>
        </div>
      </div>

      {isOpen ? <MoreInformation /> : null}

      <div className={styles.button_container}>
        <button className={styles.button_action} onClick={toggle}>
          {isOpen ? <FaAngleUp size={22} /> : <FaAngleDown size={22} />}
        </button>
      </div>
    </div>
  )
}

export default Card
