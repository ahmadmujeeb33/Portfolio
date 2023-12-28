import './projects.css';

import blog from '../../Images/Blog.png';
import github from '../../Images/github-circle.svg'


export const Projects = () => {

  const projects = [
    { title: 'Social Media Blog', 
      description: 'A social media applications that gives users the ability to create blog posts and share with their friends' ,
      link: 'https://github.com/ahmadmujeeb33/Blog',
      skills: ['React', 'MongoDB', 'GraphQL', 'Node', 'Mongoose'] },
    { title: 'Simmer Cookbook', 
      description: 'A cookbook application that gives users the ability to save their personal recepies and view from Third-Party Libraries' ,
      link: 'https://github.com/ahmadmujeeb33/Simmer_Cookbook',
      skills: ['Handlebars', 'Express', 'Node', 'Sequelize', 'MySQL']
    },
    { title: 'Multithreaded Connect 4', 
      description: 'Connect 4 game that utilizes sockets to host a server over a local network, enabling two players to play Connect 4.' ,
      link: 'https://github.com/ahmadmujeeb33/Multithreaded-Connect4',
      skills: ['Java', 'JavaFX']
    },
    { title: 'Chess', 
      description: 'A game where 2 players have the ability to play each other in a fun game of chess' ,
      link: 'https://github.com/ahmadmujeeb33/Chess',
      skills: ['JavaScript', 'HTML', 'CSS']
    },
    { title: 'Ecommerce Website', 
    description: 'A web application giving users the ability to buys and sell products ' ,
    link: 'https://github.com/ahmadmujeeb33/CSCI_3230U-Web_Dev_Group_Project',
    skills: ['Vue', 'Express', 'Firebase']
    },
    { title: 'Boomerang', 
    description: 'A mobile applications that giving users the ability to buys and sell products' ,
    link: 'https://github.com/ahmadmujeeb33/Boomerang',
    skills: ['Dart', 'Flutter']
    },
  ]


  return (
    <>
      <div className='projects-container'>
        <h1>My Projects</h1>
      </div >
      <div className = "oval-container">
        {projects.map((project) => {
          return (
            <>
              <div className="oval">
                <div className="oval-contents-grid"  key={project.title} >
                  <a href={project.link}>
                    <img src={github} height="75px" width="75px" />
                  </a>
                  <span style={{ color: "red" }}>{project.title}</span>
                  <span style={{ color: "white", width: '70%' }}>{project.description}</span>
                  <div className = "skills-container" >
                    {
                      project.skills.map((skill) => {
                        return (
                          <span>{skill}</span>
                        )
                      })
                    }
                   </div>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
}