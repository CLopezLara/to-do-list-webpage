import { NavLink } from "react-router";
import "./CtaSection.css";

function CtaSection() {
  return (
    <section className="cta-section-container">
      <div className="cta-section">
        <header className="cta-section-header">
          <h2 className="cta-title">¿Listo para organizarte?</h2>
          <p className="cta-description">
            Unete a miles de usuarios que ya estan manejando sus tareas mas
            efectivamente con ToDoList.
          </p>
        </header>
        <NavLink className="cta-button">Inicia ahora</NavLink>
      </div>
    </section>
  );
}

export default CtaSection;
