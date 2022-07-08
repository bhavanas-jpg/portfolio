import React, {useState} from 'react';
import './portfolio.css';
import IMG1 from '../../assets/project1.jpg';
import IMG2 from '../../assets/project2.jpg';
import IMG3 from '../../assets/project3.jpg';
import IMG4 from '../../assets/project4.jpg';
import IMG5 from '../../assets/project5.jpg';



const data = [
  {
    id: 1,
    image: IMG3,
    title: 'Fraser Property',
    github: '',
    demo: 'https://www.frasersproperty.com/'
  },
  {
    id: 2,
    image: IMG2,
    title: 'Johnson Matthey',
    github: '',
    demo: 'https://matthey.com/products-and-markets/pgms-and-circularity/pgm-management'
  },
  {
    id: 3,
    image: IMG4,
    title: 'LinkedIn Clone',
    github: 'https://github.com/bhavanas-jpg/LinkedIn_clone/tree/master/linkedin',
    demo: 'https://linkedin-clone-c2e52.web.app'
  },
  {
    id: 4,
    image: IMG5,
    title: 'Estore',
    github: 'https://github.com/bhavanas-jpg/Estore-react-app',
    demo: 'https://estore-react-app.netlify.app/'
  }
  
]

const Portfolio = () => {

  const[githubState, setGithubState]=useState('');

  return (
    <section id="projects">
       <h5>My Recent Work</h5>
       <h2>Projects</h2>

    <div className="container portfolio__container">
    {
      data.map(({id, image, title, github, demo}) =>{
          if(!githubState){
            setGithubState(github)
          }

        return(
          <article key={id}className="portfolio__item">
          <div className="portfolio__item-image">
           <img src={image} alt={title} className="portfolio__image"/>
          </div>
          <h3>{title}</h3>
          <div className="portfolio__item-cta">
            {
             github ?
               ( <a href={github} className="btn" target="_blank">Github</a>)
               : null
              }
          <a href={demo}  className="btn btn-primary" target="_blank">Live Demo</a>
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