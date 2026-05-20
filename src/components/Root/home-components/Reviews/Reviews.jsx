import ReviewCard from "./ReviewCards/ReviewCard";
import "./Reviews.css";
function Reviews() {
  return (
    <section className="review-section">
      <header className="reviews-header">
        <h2 className="reviews-header-title">
          La confianza de miles de usuarios
        </h2>
        <p className="reviews-header-description">
          Unete a mas de 12,000 usuarios que organizan su vida con ToDoList
        </p>
      </header>
      <div className="reviews">
        <ReviewCard
          rate={5}
          reviewContent='" ToDoList a transformado completamente como manejo mis tareas del dia a
        dia. El calendario integrado es de lo mejor!"'
          initials="SM"
          reviewer="Sarah Mitchell"
          role="Gerente de producto"
        />
        <ReviewCard
          rate={4}
          reviewContent='" Finalmente, una aplicacion para tareas que realmente me ayuda a completar mis tareas. Los grupos hacen que trabajar en equipo sea muy facil."'
          initials="JC"
          reviewer="James Chen"
          role="Ingeniero de software"
        />
        <ReviewCard
          rate={5}
          reviewContent='" Simple y poderoso.ToDoList es exactamente lo que necesitaba para mantenerme organizada y productiva"'
          initials="EL"
          reviewer="Emily Lopez"
          role="Emprendedora"
        />
      </div>
    </section>
  );
}

export default Reviews;
