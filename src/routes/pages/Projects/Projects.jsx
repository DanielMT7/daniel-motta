import useScreenSize from '../../../hooks/useScreenSize'

import Carousel from '../../../components/Carousel/Carousel'

import { wotsInfo, oneRpmInfo } from '../../../data/mock'

import styles from './Projects.module.css'

function Projects() {
  const isSmallScreen = useScreenSize(760)

  const Project = ({ data }) => {
    const { title, images, onlyMobileImages, metadata, tags, description } =
      data

    const imagesBySize = isSmallScreen ? onlyMobileImages : images

    return (
      <div className={styles.project}>
        <div className={styles.project_name}>
          <h2>{title}</h2>
          <p>{description}</p>
        </div>

        <div className={styles.project_info}>
          <Carousel data={imagesBySize} metadata={metadata} />

          <div className={styles.tags}>
            {tags.map((tag, index) => {
              return <p key={index}>{tag}</p>
            })}
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className={styles.projects_container}>
      <div className={styles.projects_label}>
        <h1>Projetos</h1>
        <p>em desenvolvimento</p>
      </div>

      <Project data={wotsInfo} />

      <div className={styles.projects_label}>
        <h1>Projetos</h1>
        <p>completos</p>
      </div>

      <Project data={oneRpmInfo} />
    </div>
  )
}

export default Projects
