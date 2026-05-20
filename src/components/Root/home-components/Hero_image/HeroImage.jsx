import { NavLink } from "react-router";
import "./HeroImage.css";
import { FaArrowRight } from "react-icons/fa";
function HeroImage() {
  return (
    <section className="hero-image-background">
      <div className="hero-image-container">
        <div className="hero-image-left-section">
          <header className="hero-image-text">
            <h1 className="hero-image-title">
              Organiza Tu Vida,
              <span>Una Tarea a la Vez</span>
            </h1>
            <p className="hero-image-description">
              TodoList te ayuda a administrar tus tareas, colaborar con equipos,
              y a mantener tus tareas a tiempo. Simple, poderosa y diseñada para
              todos.
            </p>
          </header>
          <NavLink className="hero-image-button">
            Empezar ahora <FaArrowRight />
          </NavLink>
        </div>
        <div className="hero-image-right-section">
          <div className="hero-image-right-background">
            <p className="hero-image-floating-card">
              Usuarios activos
              <span className="hero-image-floating-card-value right-card">
                12K+
              </span>
            </p>
            <p className="hero-image-floating-card left-card">
              Tareas completadas
              <span className="hero-image-floating-card-value ">847</span>
            </p>
            <ul className="hero-image-list">
              <li className="hero-image-list-option">
                <div className="list-option-left-section">
                  <h3 className="hero-image-list-option-title">
                    Revisar propuesta de proyecto
                  </h3>
                  <p className="hero-image-list-option-description">
                    Hoy, 2:00 PM
                  </p>
                </div>
                <p className="hero-image-list-option-priority high-priority">
                  Alta
                </p>
              </li>
              <li className="hero-image-list-option">
                <div className="list-option-left-section">
                  <h3 className="hero-image-list-option-title">
                    Reunion de equipo de trabajo
                  </h3>
                  <p className="hero-image-list-option-description">
                    Hoy, 10:00 AM
                  </p>
                </div>
                <p className="hero-image-list-option-priority medium-priority">
                  Media
                </p>
              </li>

              <li className="hero-image-list-option">
                <div className="list-option-left-section">
                  <h3 className="hero-image-list-option-title">
                    Actualizar documentacion
                  </h3>
                  <p className="hero-image-list-option-description">Mañana</p>
                </div>
                <p className="hero-image-list-option-priority low-priority">
                  Baja
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroImage;
