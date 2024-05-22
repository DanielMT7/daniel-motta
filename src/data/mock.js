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
      'A ideia é oferecer ao público uma plataforma onde possam descobrir as roupas e acessórios usados por artistas e influenciadores, além de indicar onde adquirir esses itens. Quantas vezes nos identificamos com o estilo de alguém, mas não sabemos onde encontrar aquela peça específica? Este projeto visa justamente preencher essa lacuna, proporcionando inspiração não apenas em termos de moda, mas também de identidade.'
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
      'Consiste em uma aplicação web para resolução de um desafio front-end. Tem como objetivo resolver uma necessidade específica do setor musical: consumir e exibir dados de faixas musicais utilizando o código ISRC (International Standard Recording Code).'
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
      'O objetivo é a criação de um software fullstack como um desafio para aprimorar habilidades de desenvolvimento web. A aplicação consiste em duas telas principais: uma tela para exibição de uma tabela de produtos e outra para cadastro de novos produtos. O foco principal é a construção de uma API REST com operações CRUD completas.'
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
    text: 'Sou um entusiasta da tecnologia, apaixonado por inovação e desafios. Como desenvolvedor front-end, domino as tecnologias JavaScript e React, e busco me tornar um desenvolvedor fullstack, por isso sigo estudando e me atualizando para impulsionar meu crescimento.',
    animationDelay: '1.6s'
  },
  {
    text: 'Além dos códigos e algoritmos, o universo do basquete, streetwear e sneakers também são minhas paixões. Sempre estou por dentro dos campeonatos e tendências. Outro hobbie meu é a música, especialmente o rap, que é a trilha sonora dos meus dias.',
    animationDelay: '2.2s'
  },
  {
    text: 'Minha jornada é marcada pela busca incessante por experiências autênticas e inspiradoras. Acredito que a perseverança, consistência e disciplina são as chaves para alcançar objetivos audaciosos e construir um legado duradouro.',
    animationDelay: '2.8s'
  }
]
