import Card from '../../../components/Card/Card'

import { aboutParagraphs } from '../../../data/mock'

import styles from './About.module.css'

function About() {
  return (
    <div className={styles.about_container}>
      <div className={styles.about}>
        <h1>Sobre</h1>
        <p>Resumo</p>
      </div>

      <div className={styles.text}>
        {aboutParagraphs.map((paragraph, index) => (
          <p key={index} style={{ animationDelay: paragraph.animationDelay }}>
            {paragraph.text}
          </p>
        ))}
      </div>

      <div className={styles.experience}>
        <h1 className={styles.experience_title}>Experiência</h1>
        <p className={styles.experience_description}>
          Iniciei minha carreira profissional como estagiário na Globo, atuando
          como desenvolvedor front-end no Globoplay, plataforma de streaming.
          Pude contribuir com a construção e aprimoramento da aplicação para
          Smart TVs, lidando com uma grande e diversificada base de
          dispositivos. Foi muito enriquecedor atuar em uma aplicação tão
          robusta que impacta milhões de brasileiros diariamente.
        </p>

        <Card />
      </div>
    </div>
  )
}

export default About
