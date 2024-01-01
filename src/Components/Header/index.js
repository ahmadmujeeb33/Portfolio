import './header.css';
import { Link } from "react-router-dom"



export const Header = () =>{
  return (
    <header className = 'navbar-items'>
      <Link to ="/about" className="items">About</Link>
      <Link to ="/projects" className="items">Projects</Link>
      <Link to ="/experience" className="items">Experience</Link>
    </header>
  )
}