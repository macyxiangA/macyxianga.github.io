import { profileLinks } from '../data/content'

function Contact({ content }) {
  return (
    <section className="section contact-section" id="resume" aria-labelledby="resume-title">
      <div>
        <h2 id="resume-title">{content.resumeTitle}</h2>
        <a className="resume-link" href={profileLinks.resume}>
          {content.resumeButton}
        </a>
      </div>
      <div id="contact" aria-labelledby="contact-title">
        <h2 id="contact-title">{content.contactTitle}</h2>
        <p>{content.contactText}</p>
        <div className="link-row">
          <a href={profileLinks.email}>{content.links.email}</a>
          <a href={profileLinks.github} target="_blank" rel="noreferrer">
            {content.links.github}
          </a>
          <a href={profileLinks.linkedin} target="_blank" rel="noreferrer">
            {content.links.linkedin}
          </a>
        </div>
      </div>
    </section>
  )
}

export default Contact
