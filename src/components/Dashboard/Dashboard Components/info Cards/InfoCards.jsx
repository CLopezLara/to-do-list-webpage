import "./InfoCards.css";
function InfoCards({ title, quantity, icon, color }) {
  return (
    <div className="info-card">
      <div className="info-card-left">
        <h4 className="info-card-title">{title}</h4>
        <span className="info-card-quantity">{quantity}</span>
      </div>
      <span className={`info-card-icon ${color}`}>{icon}</span>
    </div>
  );
}

export default InfoCards;
