import React, { useState } from 'react'

import { FaChevronCircleLeft, FaChevronCircleRight } from 'react-icons/fa'

import styles from './Carousel.module.css'

function Carousel({ data, metadata }) {
  const [slide, setSlide] = useState(0)

  const nextSlide = () => {
    setSlide(slide === data.length - 1 ? 0 : slide + 1)
  }

  const prevSlide = () => {
    setSlide(slide === 0 ? data.length - 1 : slide - 1)
  }

  return (
    <div className={styles.carousel}>
      {data.length > 1 ? (
        <FaChevronCircleLeft
          onClick={prevSlide}
          className={`${styles.arrow} ${styles.arrow_left}`}
        />
      ) : null}

      {data.map((item, index) => {
        return (
          <div
            key={index}
            className={
              slide === index
                ? styles.slideWrapper
                : `${styles.slideWrapper} ${styles.slide_hidden}`
            }
          >
            <img src={item} alt="Carousel Image" className={styles.slide} />
            <div className={styles.metadata}>
              <p>{metadata.about1}</p>
              <p>{metadata.about2}</p>
              <p>{metadata.about3}</p>
            </div>
          </div>
        )
      })}

      {data.length > 1 ? (
        <FaChevronCircleRight
          onClick={nextSlide}
          className={`${styles.arrow} ${styles.arrow_right}`}
        />
      ) : null}

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
