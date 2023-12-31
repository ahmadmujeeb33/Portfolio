import './header.css';
import { Link } from "react-router-dom"



export const Header = () =>{
  return (
    <header className = 'navbar-items'>
        <Link to ="/portfolio/about" className="items">About</Link>
        <Link to ="/portfolio/projects" className="items">Projects</Link>
        <Link to ="/portfolio/experiance" className="items">Experiance</Link>
    </header>
  )
}