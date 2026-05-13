import { profileLinks } from '../data/content'

function Hero({ content }) {
  const { hero, links } = content

  return (
    <section className="hero section" id="home" aria-labelledby="home-title">
      <div className="hero-text">
        <h1 id="home-title">{hero.name}</h1>
        <p className="headline">{hero.headline}</p>
        <p className="subtitle">{hero.subtitle}</p>
        <p className="intro">{hero.intro}</p>
        <p className="note">{hero.note}</p>
        <p className="interests">{hero.interests}</p>
        <div className="link-row" aria-label="Profile links">
          <a href={profileLinks.email}>{links.email}</a>
          <a href={profileLinks.github} target="_blank" rel="noreferrer">
            {links.github}
          </a>
          <a href={profileLinks.linkedin} target="_blank" rel="noreferrer">
            {links.linkedin}
          </a>
          <a href={profileLinks.resume}>{links.resume}</a>
        </div>
      </div>
      <img className="profile-photo" src="/macy-headshot.png" alt="Portrait of Yancheng Macy Xiang" />
    </section>
  )
}

export default Hero
