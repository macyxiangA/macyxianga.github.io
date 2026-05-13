import { additionalExperience, experience } from '../data/content'

function Experience({ lang, content }) {
  return (
    <section className="section" id="experience" aria-labelledby="experience-title">
      <h2 id="experience-title">{content.primaryExperience}</h2>
      <div className="timeline">
        {experience.map((item) => (
          <article className="timeline-item" key={`${item.role}-${item.organization}`}>
            <div className="timeline-date">{item.period}</div>
            <div className="timeline-main">
              <h3>{item.role}</h3>
              <p className="organization">{item.organization}</p>
              <p>{item.summary[lang]}</p>
              <p className="tech-line">{item.tags.join(' · ')}</p>
            </div>
          </article>
        ))}
      </div>

      <section className="additional-experience" aria-labelledby="additional-title">
        <h2 id="additional-title">{content.additionalExperience}</h2>
        <div className="additional-list">
          {additionalExperience.map((item) => (
            <article className="additional-item" key={`${item.role}-${item.organization}`}>
              <div>
                <h3>{item.role}</h3>
                <p className="organization">{item.organization}</p>
              </div>
              <p className="timeline-date">{item.period}</p>
              <p>{item.summary[lang]}</p>
            </article>
          ))}
        </div>
      </section>
    </section>
  )
}

export default Experience
