// Whats on the Star - Assets
import wotsHome from '../assets/Wots/home.png'
import wotsHomeMobile from '../assets/Wots/homeMobile.png'
import wotsClothe from '../assets/Wots/clothe.png'
import wotsClotheMobile from '../assets/Wots/clotheMobile.png'

// OneRPM Challenge - Assets
import oneRpm from '../assets/oneRPM/oneRpm.png'
import oneRpmMobile from '../assets/oneRPM/oneRpmMobile.png'

// Full Stack Challenge - Assets
import homeFS from '../assets/FSChallenge/homeFS.png'
import homeFSMobile from '../assets/FSChallenge/homeFSMobile.png'
import formFS from '../assets/FSChallenge/form.png'
import formFSMobile from '../assets/FSChallenge/formMobile.png'

export const unfinishedProjects = [
  // Whats on the Star - Object
  {
    title: "What's on The Star",
    linkGit: 'https://github.com/DanielMT7/wots-clone',
    images: [wotsHome, wotsClothe, wotsHomeMobile, wotsClotheMobile],
    onlyMobileImages: [wotsHomeMobile, wotsClotheMobile],
    tags: ['ReactJS', 'JavaScript', 'HTML', 'CSS'],
    metadata: {
      about1:
        'Features: feed de outfits, lista de favoritos, seção de busca, carrossel de artista/roupas, página de artista, simulação de login e páginas individuais de produtos ',
      about2:
        'Todos os componentes são responsivos para todos os tipos de telas.',
      about3:
        'As informações estão todas mockadas na aplicação, a lista de favoritos utiliza o localStorage para salvar os Cards com o outfit. '
    },
    description:
      'O objetivo principal é oferecer ao público uma plataforma onde possam descobrir as roupas e acessórios usados por artistas e influenciadores, além de indicar onde adquirir esses itens. Quantas vezes nos identificamos com o estilo de alguém, mas não sabemos onde encontrar aquela peça específica? Este projeto visa justamente preencher essa lacuna, proporcionando inspiração não apenas em termos de moda, mas também de identidade.'
  }
]

export const finishedProjects = [
  // OneRPM Challenge - Object
  {
    title: 'OneRPM Challenge ',
    linkGit: 'https://github.com/DanielMT7/onerpm-frontend-challenge',
    images: [oneRpm, oneRpmMobile],
    onlyMobileImages: [oneRpmMobile],
    tags: ['ReactJS', 'JavaScript', 'HTML', 'CSS'],
    metadata: {
      about1:
        'Features: Lista de músicas disponíveis, informações adicionais, player.',
      about2:
        'Todo o layout é responsivo e conta com fluxo e tratamentos de erro. As lógicas dos componentes foram separadas em custom hooks.',
      about3:
        'O projeto utiliza a integração com a API do Spotify para consumir os dados.'
    },
    description:
      'Esse projeto consiste em desenvolver uma aplicação web para resolução de um desafio front-end para um vaga de desenvolvedor de software. Tem como objetivo resolver uma necessidade específica do setor musical: consumir e exibir dados de faixas musicais utilizando o código ISRC (International Standard Recording Code).'
  },
  // Full Stack Challenge - Object
  {
    title: 'Full Stack Challenge',
    linkGit: 'https://github.com/DanielMT7/Fullstack-Challenge',
    images: [homeFS, formFS, homeFSMobile, formFSMobile],
    onlyMobileImages: [homeFSMobile, formFSMobile],
    tags: [
      'ReactJS',
      'JavaScript',
      'HTML',
      'CSS',
      'Node.js',
      'Express',
      'MongoDB',
      'API REST'
    ],
    metadata: {
      about1: 'Features: Tabela de produtos, cadastro de produtos',
      about2:
        'Ao clicar em alterar, o usuário é redirecionado para mesma página de criação no modo de alteração, onde os dados já estão previamente preenchidos nos campos do form para facilitar caso o usuário precise mudar poucas informações.',
      about3:
        'O projeto utiliza a integração com a API construída por mim para consumir os dados. Utilizei o Axios para realizar as requisições HTTP'
    },
    description:
      'O projeto tem como objetivo a criação de um software fullstack como um desafio para aprimorar habilidades de desenvolvimento web. A aplicação consiste em duas telas principais: uma tela para exibição de uma tabela de produtos e outra para cadastro de novos produtos. O foco principal é a construção de uma API REST com operações CRUD completas.'
  }
]

// Home skills

export const skills = [
  {
    category: 'Programação',
    details: 'JavaScript, TypeScript, Node.js, Python, C, C++',
    animationDelay: '4s'
  },
  {
    category: 'FrontEnd',
    details: 'React, HTML5, CSS3, Bootstrap',
    animationDelay: '4.6s'
  },
  {
    category: 'BackEnd',
    details: 'REST API, Express, PostgreSQL, MongoDB',
    animationDelay: '5.2s'
  },
  {
    category: 'Línguas',
    details: 'Português Brasileiro, Inglês',
    animationDelay: '5.8s'
  }
]

// About paragrahps

export const aboutParagraphs = [
  {
    text: '"A coisa mais importante é tentar inspirar as pessoas para que elas possam ser ótimas em tudo o que quiserem fazer" - Kobe Bryant.',
    animationDelay: '1s'
  },
  {
    text: 'Além de ser um entusiasta da tecnologia, sou movido por paixões que vão além dos códigos e dos algoritmos. Desde as quadras de basquete até as horas dedicadas a explorar as últimas tendências do streetwear e dos sneakers, minha jornada é marcada pela busca incessante por experiências autênticas e inspiradoras. Outra grande paixão minha é a música, especialmente o rap, que é a trilha sonora dos meus dias.',
    animationDelay: '1.6s'
  },
  {
    text: 'Minha determinação e ambição são os motores que impulsionam meu caminho. Encaro cada desafio como uma oportunidade de crescimento e aprendizado, e vejo na disciplina um aliado fundamental para transformar sonhos em realidade. Acredito que a perseverança é a chave para alcançar objetivos audaciosos e construir um legado duradouro.',
    animationDelay: '2.2s'
  },
  {
    text: 'Como principais ferramentas de desenvolvimento, JavaScript e React ocupam lugar de destaque, mas estou sempre em busca de aprimorar minhas habilidades e explorar novas tecnologias que possam melhorar o meu conhecimento técnico e hoje uma das minhas metas principais é se tornar um desenvolvedor fullstack',
    animationDelay: '2.8s'
  }
]
