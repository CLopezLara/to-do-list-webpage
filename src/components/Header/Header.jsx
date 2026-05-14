import "./Header.css"
import logo from "../../images/to-do-list-logo.png"
import { NavLink } from "react-router"
import { useState } from "react"
function Header() {
    const [menu , setMenu] = useState(false)
    const openMenu = () =>{
        setMenu((state) => !state);
    }
  return (
    <section className="header-container">
        <img className= "header-logo" src={logo} alt="to do list logo"/>
        <button className="hamburguer-button" onClick={openMenu}>{menu ? "X":"☰"}</button>
        <nav className={ `navbar-container ${menu ? "open" : ""}`}>
            <ul className= "navbar-list">
                <li className="navbar-option"><NavLink to="/" className="nav-link" onClick={openMenu}>Inicio</NavLink></li>
                <li className="navbar-option"><NavLink to="/tareas" className="nav-link" onClick={openMenu}>Tareas</NavLink></li>
                <li className="navbar-option"><NavLink to="/tablero" className="nav-link" onClick={openMenu}>Tablero</NavLink></li>
                <li className="navbar-option"><NavLink to="/login" className="nav-link" onClick={openMenu}>Iniciar sesión</NavLink></li>
            </ul>
        </nav>
    </section>
  )
}

export default Header