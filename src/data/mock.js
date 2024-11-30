// Sneakers Complex
import snkHome from '../assets/SneakersComplex/home1.png'
import snkHomeMobile from '../assets/SneakersComplex/homeMobile.png'
import snkOffers from '../assets/SneakersComplex/offersPage.png'
import snkOffersMobile from '../assets/SneakersComplex/offersPageMobile.png'
import snkShoe from '../assets/SneakersComplex/shoePage.png'
import snkShoeMobile from '../assets/SneakersComplex/shoePageMobile1.png'
import snkShoppingCart from '../assets/SneakersComplex/shoppingCart.png'
import snkShoppingCartMobile from '../assets/SneakersComplex/cartMobile.png'

// Whats on the Star - Assets
import wotsHome from '../assets/Wots/home.png'
import wotsHomeMobile from '../assets/Wots/homeMobile.png'
import wotsClothe from '../assets/Wots/clothe.png'
import wotsClotheMobile from '../assets/Wots/clotheMobile.png'

// OneRPM Challenge - Assets
import oneRpm from '../assets/oneRPM/oneRpm.png'
import oneRpmMobile from '../assets/oneRPM/oneRpmMobile.png'

// Photo Gallery

import pgHome from '../assets/PhotoGallery/gallery.png'
import pgHomeMobile from '../assets/PhotoGallery/galleryMobile.png'

// Full Stack Challenge - Assets
import homeFS from '../assets/FSChallenge/homeFS.png'
import homeFSMobile from '../assets/FSChallenge/homeFSMobile.png'
import formFS from '../assets/FSChallenge/form.png'
import formFSMobile from '../assets/FSChallenge/formMobile.png'

export const unfinishedProjects = []

export const finishedProjects = [
  // Sneakers Complex
  {
    title: 'Sneakers Complex',
    linkGit: 'https://github.com/DanielMT7/sneakers-complex',
    images: [
      snkHome,
      snkOffers,
      snkShoe,
      snkShoppingCart,
      snkHomeMobile,
      snkOffersMobile,
      snkShoeMobile,
      snkShoppingCartMobile
    ],
    onlyMobileImages: [
      snkHomeMobile,
      snkOffersMobile,
      snkShoeMobile,
      snkShoppingCartMobile
    ],
    tags: ['ReactJS', 'TypeScript', 'Tailwind', 'json-server', 'useContext'],
    metadata: {
      about1:
        'O projeto contém produtos das principais marcas do mercado, tais como, Nike, Adidas, New Balance e Asics.',
      about2:
        'Design e responsividade desenvolvido com tailwind. O projeto utiliza json-server para armazenar os dados. Diversas funcionalidades incluídas, como, carrinho de compras, filtros e ordenação na busca, sneakers relacionados, dentre outras.',
      about3:
        'O carrinho utiliza o useContext para adicionar ou remover os sneakers e o LocalStorage persiste os dados.'
    },
    description:
      'Aplicação web para entusiastas e compradores de tênis. A plataforma oferece uma ampla variedade de tênis, desde marcas populares e conhecidas até edições limitadas exclusivas. O projeto tem como objetivo proporcionar uma experiência de compra fluida e envolvente, com uma interface de usuário intuitiva. Você pode acessar o github para saber todas as funcionalidades que o projeto oferece.'
  },
  // Photo Gallery
  {
    title: 'Photo Gallery',
    linkGit: 'https://github.com/DanielMT7/photo-gallery',
    images: [pgHome, pgHomeMobile],
    onlyMobileImages: [pgHomeMobile],
    tags: ['ReactJS', 'TypeScript', 'HTML', 'CSS', 'FireBase', 'uuid'],
    metadata: {
      about1:
        'Funcionalidades: Envio de Fotos: Permite que os usuários carreguem imagens para a galeria. Listagem de Fotos: Exibe uma lista de todas as fotos enviadas. Exclusão de Fotos: Permite que os usuários excluam fotos específicas da galeria.',
      about2:
        'Utiliza o Firebase: Plataforma de desenvolvimento de aplicativos da Google que no contexto desse projeto é utilizada para armazenar e gerenciar fotos.',
      about3:
        'Utiliza a lib uuid para gerar nomes únicos para imagens que são armazenadas.'
    },
    description:
      'Este é um projeto de galeria de fotos que permite aos usuários carregar imagens, visualizar uma lista de todas as fotos enviadas e deletar fotos. O aplicativo utiliza o Firebase da Google para centralizar e gerenciar as informações.'
  },
  // Whats on the Star - Object
  {
    title: "What's on The Star v1",
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
      'A ideia é oferecer ao público uma plataforma onde possam descobrir as roupas e acessórios usados por artistas e influenciadores, além de indicar onde adquirir esses itens. Quantas vezes nos identificamos com o estilo de alguém, mas não sabemos onde encontrar aquela peça específica? Este projeto visa justamente preencher essa lacuna, proporcionando inspiração não apenas em termos de moda, mas também de identidade. Pretendo criar uma segunda versão no futuro, em typescript, com teste unitários e um backend completo.'
  },
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
    details: 'JavaScript, TypeScript, Node.js, Python, C, C++, SQL',
    animationDelay: '4s'
  },
  {
    category: 'FrontEnd',
    details: 'React, HTML5, CSS3, Bootstrap, Tailwind',
    animationDelay: '4.6s'
  },
  {
    category: 'BackEnd',
    details: 'REST API, Express, PostgreSQL, MongoDB',
    animationDelay: '5.2s'
  },
  {
    category: 'Línguas',
    details: 'Português Brasileiro, Inglês (B2)',
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
