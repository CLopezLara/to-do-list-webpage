import "./ProcessSection.css";
function ProcessSection() {
  return (
    <section className="process-section-container">
      <header className="process-header">
        <h2 className="process-title">Como funciona ToDoList</h2>
        <p className="process-description">Inicia con 3 simples pasos</p>
      </header>
      <div className="process-list-container">
        <ol className="process-list">
          <li className="process-list-option">
            <span className="process-number color-blue">1</span>
            <h3 className="process-card-title">Crea tu cuenta</h3>
            <p className="process-card-description">
              Registrate en nuestra pagina con tu correo.
            </p>
          </li>
          <li className="process-list-option">
            <span className="process-number color-purple">2</span>
            <h3 className="process-card-title">Añade tus tareas</h3>
            <p className="process-card-description">
              Empieza a añadir tareas, establecer fechas limite, y organizarlas
              con etiquetas y prioridades.
            </p>
          </li>
          <li className="process-list-option">
            <span className="process-number color-green">3</span>
            <h3 className="process-card-title">Cumple tus objetivos</h3>
            <p className="process-card-description">
              Mantente organizado, colabora con tu equipo, y completa tus metas
              eficientemente.
            </p>
          </li>
        </ol>
      </div>
    </section>
  );
}

export default ProcessSection;
