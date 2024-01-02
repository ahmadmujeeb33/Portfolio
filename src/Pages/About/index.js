
import './about.css'
import {
    DiHtml5,
    DiCss3,
    DiJavascript1,
    DiNodejs,
    DiReact,
    DiMongodb,
    DiMysql,
    DiPython,
    DiGit,
    DiJava,
    DiGithubBadge
} from "react-icons/di";

import { MdOutlineMailOutline } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";
import { IoDocumentTextOutline } from 'react-icons/io5'
 
export const About = () => {
  const iconData = [
    { icon: DiReact },
    { icon: DiHtml5 },
    { icon: DiCss3 },
    { icon: DiJavascript1 },
    { icon: DiNodejs },
    { icon: DiMongodb },
    { icon: DiMysql },
    { icon: DiPython },
    { icon: DiGit },
    { icon: DiJava },
  ];

  const contactData = [
    {icon: DiGithubBadge, text: "ahmadmujeeb33", link: 'https://github.com/ahmadmujeeb33'},
    {icon: MdOutlineMailOutline, text: "ahmadmujeeb333@gmail.com", link: "mailto:ahmadmujeeb333@gmail.com"},
    {icon: FaLinkedin, text: "Ahmad Mujeeb", link: "https://www.linkedin.com/in/ahmad-mujeeb-200883153/"},
    {icon: IoDocumentTextOutline, text: "Resume", link: "https://drive.google.com/file/d/1vCh1XQWDFHt_6f9ePUiT0Cc0Qh8bqW3L/view"},
  ]

  return(
    <>
      <div className="page-container">
        <div className="about-container">
          <span>About Me</span>
          <p>My name is Ahmad Mujeeb and I'm currently a 4th year Computer Science student at Ontario Tech University. I have almost 2 years experiance working in industry using a variety of different tools and frameworks. My expertise are building and developing full stack applications using the latest technolegies.</p>
        </div>
        <div>
          <span>Technologies</span>
          <div style = {{display:"flex", "justifyContent": "center", "paddingTop": "30px"}}>
            <div className="icons-container">
              {iconData.map(({ name, icon: IconComponent }, index) => (
                <span key={index} style={{ color: "white", width:"150px" }}>
                  <IconComponent />
                </span>
              ))}
            </div>
          </div>
        </div>
        <div>
          <span>Contact</span>
            <div className = "contact-container">
              {
                contactData.map(({icon: IconComponent, text, link}, index) => (
                  <a href={link}  ><IconComponent  size={25} /> {text}</a>
                ))
              }        
            </div>
        </div>
      </div>
    </>
  )
}