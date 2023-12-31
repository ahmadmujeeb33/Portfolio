
import './experience.css';



export const Experience = () => {

    const allData = [
        {company: "Blackberry", postion: "Full-Stack Developer", durration: 'Sept 2023 - Dec 2023', technolagies: ['JavaScript, ', 'React, ', 'Node, ', 'MySQL, ', 'Sequelize']},
        {company: "TD", postion: "Quality Engineer", durration: 'May 2023 - Aug 2023', technolagies: ['Java, ', 'Selenium']},
        {company: "RBC", postion: "Full-Stack Developer", durration: 'May 2022 - Aug 2022', technolagies: ['Python, ', 'React, ', 'MySQL, ', 'Elastic, ', 'FastAPI']},
        {company: "Omers", postion: "Back-End Developer", durration: 'Jan 2022 - Apr 2022', technolagies: ['Java, ', 'Spring Boot']}
    ]
    return (
      <>
        <h1 style={{color: "white", textAlign: "center"}}>Work History</h1>
        <div class="timeline">
          {
            allData.map((data) => {
              return (
                <div className="timeline-item">
                  <div className="timeline-content">
                    <h3>{data.company}</h3>
                    <p>Position: {data.postion}</p>
                    <p>Duration: {data.durration}</p>
                    <div className="tech-container">
                      <span>Tools: </span>
                      {data.technolagies.map((tech) => {
                        return (
                        <span>{tech}</span>
                        )
                      })
                      }
                    </div>
                  </div>
                </div>
              )
            })
          } 
        </div>
      </>
    )
}