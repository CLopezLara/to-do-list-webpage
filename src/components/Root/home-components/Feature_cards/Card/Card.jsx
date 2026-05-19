import "./Card.css";
function Card({ title, icon, description, iconColor }) {
  return (
    <section className="card-container">
      <span className={`card-icon ${iconColor}`}>{icon}</span>
      <h3 className="card-title">{title}</h3>
      <p className="card-description">{description}</p>
    </section>
  );
}

export default Card;
