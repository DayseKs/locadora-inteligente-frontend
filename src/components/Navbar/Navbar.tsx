import { Link } from 'react-router-dom'
import './Navbar.css'

function Navbar() {
  return (
    <header className="navbar">

      <Link to="/" className="logo">
        <span className="logo-icon">
          L
        </span>

        <span>
          LOCADORA<span className="logo-blue">.</span>
        </span>
      </Link>

      <nav className="nav-links">

        <a href="/">
          Início
        </a>

        <a href="#cars-section">
          Carros
        </a>

        <Link to="/login">
          Reservas
        </Link>

        <a href="#footer">
          Sobre nós
        </a>

      </nav>

      <Link to="/login" className="nav-button">
        Entrar
      </Link>

    </header>
  )
}

export default Navbar