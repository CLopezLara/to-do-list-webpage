import { NavLink } from "react-router";
import "./Hero_image.css";
import { FaArrowRight } from "react-icons/fa";
function Hero_image() {
  return (
    <section className="hero-image-background">
      <section className="hero-image-container">
        <section className="hero-image-left-section">
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
        </section>
        <section className="hero-image-right-section">
          <section className="hero-image-right-background">
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
                <section className="list-option-left-section">
                  <h2 className="hero-image-list-option-title">
                    Revisar propuesta de proyecto
                  </h2>
                  <p className="hero-image-list-option-description">
                    Hoy, 2:00 PM
                  </p>
                </section>
                <p className="hero-image-list-option-priority high-priority">
                  Alta
                </p>
              </li>
              <li className="hero-image-list-option">
                <section className="list-option-left-section">
                  <h2 className="hero-image-list-option-title">
                    Reunion de equipo de trabajo
                  </h2>
                  <p className="hero-image-list-option-description">
                    Hoy, 10:00 AM
                  </p>
                </section>
                <p className="hero-image-list-option-priority medium-priority">
                  Media
                </p>
              </li>

              <li className="hero-image-list-option">
                <section className="list-option-left-section">
                  <h2 className="hero-image-list-option-title">
                    Actualizar documentacion
                  </h2>
                  <p className="hero-image-list-option-description">Mañana</p>
                </section>
                <p className="hero-image-list-option-priority low-priority">
                  Baja
                </p>
              </li>
            </ul>
          </section>
        </section>
      </section>
    </section>
  );
}

export default Hero_image;
