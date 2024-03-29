import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio5.jpg'
import IMG2 from '../../assets/portfolio1.jpg'
import IMG3 from '../../assets/portfolio2.jpg'
import IMG4 from '../../assets/portfolio3.jpg'
import IMG5 from '../../assets/portfolio4.jpg'

const data = [
  {
    id: 1,
    image: IMG1,
    title: 'Dashboard',
    github: 'https://github.com/Dibeisi/Admin-Dashboard',
    demo: 'https://dibeisi.github.io/Admin-Dashboard/'
  },
  {
    id: 2,
    image: IMG2,
    title: 'Converter °C to °F',
    github: 'https://github.com/Dibeisi/Converter',
    demo: 'https://s027q6.csb.app/'
  },
  {
    id: 3,
    image: IMG3,
    title: 'TodoList App',
    github: 'https://github.com/Dibeisi/ToDoList',
    demo: 'https://k4swk9.csb.app/'
  },
  {
    id: 4,
    image: IMG4,
    title: 'PasswordValidator',
    github: 'https://github.com/Dibeisi/PasswordValidator',
    demo: 'https://eo3tgp.csb.app/'
  },
  {
    id: 5,
    image: IMG5,
    title: 'WeatherApp',
    github: 'https://github.com/Dibeisi/WeatherApp',
    demo: 'https://udw2hn.csb.app/'
  }
]

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {
          data.map(({id, image, title, github, demo})=> {
            return (
              <article key={id} className='portfolio__item'>
              <div className="portfolio__item-image">
               <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="portfolio__item-cta">
               <a href={github} className='btn' target='_blank'>Github</a>
               <a href={demo} className='btn btn-primary' target='_blank'>Live Demo</a>
        </div>
        </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default Portfolio