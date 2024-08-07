import { FaGithub } from 'react-icons/fa'
import useScreenSize from '../../../hooks/useScreenSize'

import Carousel from '../../../components/Carousel/Carousel'

import { finishedProjects } from '../../../data/mock'

import styles from './Projects.module.css'

function Projects() {
  const isSmallScreen = useScreenSize(760)

  const Project = ({ data }) => {
    const {
      title,
      linkGit,
      images,
      onlyMobileImages,
      metadata,
      tags,
      description
    } = data

    const imagesBySize = isSmallScreen ? onlyMobileImages : images

    return (
      <div className={styles.project}>
        <div className={styles.project_name}>
          <a href={linkGit} target="_blank">
            <h2>
              <FaGithub size={20} /> {title}
            </h2>
          </a>

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
      </div>

      {finishedProjects.map((project, index) => {
        return <Project data={project} key={index} />
      })}
    </div>
  )
}

export default Projects
