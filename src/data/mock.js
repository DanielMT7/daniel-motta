// Whats on the Star - Assets
import wotsHome from '../assets/Wots/home.png'
import wotsHomeMobile from '../assets/Wots/homeMobile.png'
import wotsClothe from '../assets/Wots/clothe.png'
import wotsClotheMobile from '../assets/Wots/clotheMobile.png'

// OneRPM Challenge - Assets
import oneRpm from '../assets/oneRPM/oneRpm.png'
import oneRpmMobile from '../assets/oneRPM/oneRpmMobile.png'

// Whats on the Star - Object
export const wotsInfo = {
  title: "What's on The Star",
  images: [wotsHomeMobile, wotsClotheMobile, wotsHome, wotsClothe],
  onlyMobileImages: [wotsHomeMobile, wotsClotheMobile],
  tags: ['ReactJS', 'JavaScript', 'HTML', 'CSS'],
  metadata: {
    about:
      'Features: feed de outfits, lista de favoritos, seção de busca, carrossel de artista/roupas, página de artista, simulação de login e páginas individuais de produtos ',
    more: 'Todos os componentes são responsivos para todos os tipos de telas.',
    info: 'As informações estão todas mockadas na aplicação, a lista de favoritos utiliza o localStorage para salvar os Cards com o outfit. '
  },
  description:
    'O objetivo principal é oferecer ao público uma plataforma onde possam descobrir as roupas e acessórios usados por artistas e influenciadores, além de indicar onde adquirir esses itens. Quantas vezes nos identificamos com o estilo de alguém, mas não sabemos onde encontrar aquela peça específica? Este projeto visa justamente preencher essa lacuna, proporcionando inspiração não apenas em termos de moda, mas também de identidade.'
}

// OneRPM Challenge - Object
export const oneRpmInfo = {
  title: 'OneRPM Challenge',
  images: [oneRpmMobile, oneRpm],
  onlyMobileImages: [oneRpmMobile],
  tags: ['ReactJS', 'JavaScript', 'HTML', 'CSS'],
  metadata: {
    about:
      'Features: Lista de músicas disponíveis, informações adicionais, player.',
    more: 'Todo o layout é responsivo e conta com fluxo e tratamentos de erro. As lógicas dos componentes foram separadas em custom hooks.',
    info: 'O projeto utiliza a integração com a API do Spotify para consumir os dados.'
  },
  description:
    'Esse projeto consiste em desenvolver uma aplicação web para resolução de um desafio front-end para um vaga de desenvolvedor de software. Tem como objetivo resolver uma necessidade específica do setor musical: consumir e exibir dados de faixas musicais utilizando o código ISRC (International Standard Recording Code).'
}
