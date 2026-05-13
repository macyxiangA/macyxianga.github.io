import { education } from '../data/content'

function About({ lang, content }) {
  return (
    <section className="section two-column" id="about" aria-labelledby="about-title">
      <div>
        <h2 id="about-title">{content.about.title}</h2>
        <div className="body-copy">
          {content.about.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </div>
      <aside className="education" aria-labelledby="education-title">
        <h2 id="education-title">{content.educationTitle}</h2>
        <div className="education-list">
          {education[lang].map((item) => (
            <article className="education-item" key={item.school}>
              <h3>{item.school}</h3>
              {item.details.map((detail) => (
                <p key={detail}>{detail}</p>
              ))}
            </article>
          ))}
        </div>
      </aside>
    </section>
  )
}

export default About
