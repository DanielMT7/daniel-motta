import Card from '../../../components/Card/Card'
import styles from './About.module.css'

function About() {
  return (
    <div className={styles.about_container}>
      <div className={styles.about}>
        <h1>Sobre</h1>
        <p>Resumo</p>
      </div>

      <div className={styles.text}>
        <p style={{ animationDelay: '2s' }}>
          "A coisa mais importante é tentar inspirar as pessoas para que elas
          possam ser ótimas em tudo o que quiserem fazer" - Kobe Bryant.
        </p>

        <p style={{ animationDelay: '2.7s' }}>
          Além de ser um entusiasta da tecnologia, sou movido por paixões que
          vão além dos códigos e dos algoritmos. Desde as quadras de basquete
          até as horas dedicadas a explorar as últimas tendências do streetwear
          e dos sneakers, minha jornada é marcada pela busca incessante por
          experiências autênticas e inspiradoras.
        </p>

        <p style={{ animationDelay: '3.4s' }}>
          Minha determinação e ambição são os motores que impulsionam meu
          caminho. Encaro cada desafio como uma oportunidade de crescimento e
          aprendizado, e vejo na disciplina um aliado fundamental para
          transformar sonhos em realidade. Acredito que a perseverança é a chave
          para alcançar objetivos audaciosos e construir um legado duradouro.
        </p>

        <p style={{ animationDelay: '4.1s' }}>
          Hoje, como principais ferramentas de desenvolvimento, JavaScript e
          React ocupam lugar de destaque. Estou sempre em busca de aprimorar
          minhas habilidades e explorar novas tecnologias que possam melhorar o
          meu conhecimento técnico a novos patamares de excelência.
        </p>

        <p style={{ animationDelay: '4.8s' }}>
          Estou aberto a novas oportunidades como desenvolvedor front-end e
          ansioso para colaborar com profissionais e empresas que compartilham
          minha paixão pelo desenvolvimento web. Vamos unir forças para criar
          experiências digitais memoráveis e inspiradoras! Não hesite em entrar
          em contato comigo para explorarmos possíveis parcerias e projetos
          emocionantes.
        </p>
      </div>

      <div className={styles.experience}>
        <h1 className={styles.experience_title}>Experiência</h1>
        <p className={styles.experience_description}>
          Iniciei minha carreira profissional como estagiário na Globo, atuando
          como desenvolvedor front-end no Globoplay voltado para as Smart TVs,
          lidando com uma quantidade grande e diversificada de dispositivos, foi
          um desafio estimulante e enriquecedor que contribuiu com meu
          conhecimento ao lidar com uma aplicação tão robusta que impacta
          milhões de brasileiros diariamente.
        </p>

        <Card />
      </div>
    </div>
  )
}

export default About
