import { experience } from '../../portfolio'
import './Experience.css'

const Experience = () => {
  if (!experience.length) return null

  return (
    <section className='section experience' id='experience'>
      <h2 className='section__title'>Experience</h2>
      <div className='experience__grid'>
        {experience.map((exp, index) => (
          <div key={index} className='experience__item'>
            <h3 className='experience__company'>{exp.company}</h3>
            <p className='experience__role'>{exp.role}</p>
            <p className='experience__date'>{exp.date}</p>
            <p className='experience__description'>{exp.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Experience
