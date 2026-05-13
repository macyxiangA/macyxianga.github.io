import { projects } from '../data/content'

function Projects({ lang, title }) {
  return (
    <section className="section" id="projects" aria-labelledby="projects-title">
      <h2 id="projects-title">{title}</h2>
      <div className="project-list">
        {projects.map((project) => (
          <article className="project-row" key={project.title}>
            <div className="project-icon" aria-hidden="true">
              {project.icon}
            </div>
            <div className="project-body">
              <p className="category">{project.category}</p>
              <h3>{project.title}</h3>
              <p>{project.description[lang]}</p>
              <ul>
                {project.highlights[lang].map((highlight) => (
                  <li key={highlight}>{highlight}</li>
                ))}
              </ul>
              <p className="tech-line">{project.tech.join(' · ')}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Projects
