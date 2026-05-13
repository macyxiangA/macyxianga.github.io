import { skills } from '../data/content'

function Skills({ title }) {
  return (
    <section className="section" id="skills" aria-labelledby="skills-title">
      <h2 id="skills-title">{title}</h2>
      <div className="skills-list">
        {skills.map((group) => (
          <div className="skill-row" key={group.group}>
            <h3>{group.group}</h3>
            <p>{group.items.join(' · ')}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Skills
