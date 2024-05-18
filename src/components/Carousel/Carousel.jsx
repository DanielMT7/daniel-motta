import React, { useState } from 'react'
import { FaChevronCircleLeft, FaChevronCircleRight } from 'react-icons/fa'

import styles from './Carousel.module.css'

function Carousel({ data }) {
  const [slide, setSlide] = useState(0)

  const nextSlide = () => {
    setSlide(slide === data.length - 1 ? 0 : slide + 1)
  }

  const prevSlide = () => {
    setSlide(slide === 0 ? data.length - 1 : slide - 1)
  }

  return (
    <div className={styles.carousel}>
      <FaChevronCircleLeft
        onClick={prevSlide}
        className={`${styles.arrow} ${styles.arrow_left}`}
      />

      {data.map((item, index) => {
        return (
          <img
            src={item}
            alt="Whats on The Star Image"
            key={index}
            className={
              slide === index
                ? styles.slide
                : `${styles.slide} ${styles.slide_hidden}`
            }
          />
        )
      })}

      <FaChevronCircleRight
        onClick={nextSlide}
        className={`${styles.arrow} ${styles.arrow_right}`}
      />

      <span className={styles.indicators}>
        {data.map((_, index) => {
          return (
            <button
              key={index}
              className={
                slide === index
                  ? styles.indicator
                  : `${styles.indicator} ${styles.indicator_inactive}`
              }
              onClick={() => setSlide(index)}
            ></button>
          )
        })}
      </span>
    </div>
  )
}

export default Carousel
