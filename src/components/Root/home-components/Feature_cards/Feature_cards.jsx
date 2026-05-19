import Card from "./Card/Card";
import "./Feature_cards.css";
import { FaRegCalendarAlt } from "react-icons/fa";
import { BsPersonWorkspace } from "react-icons/bs";
import { CiBellOn } from "react-icons/ci";
import { GoGraph } from "react-icons/go";
import { PiLightningLight } from "react-icons/pi";
import { IoShieldOutline } from "react-icons/io5";
function Feature_cards() {
  return (
    <section className="feature-cards-section">
      <section className="feature-header">
        <h1 className="feature-title">
          Todo lo que necesitas para mantenerte organizado
        </h1>
        <p className="feature-description">
          Poderosas herramientas diseñadas para ayudarte a manejar tareas,
          colaborar con equipos y aumentar la productividad.
        </p>
      </section>
      <section className="feature-cards-container">
        <Card
          title="Calendario inteligente"
          icon={<FaRegCalendarAlt />}
          description="Visualiza tus tareas y fechas limite con un calendario integrado.
              Nunca pierdas una fecha importante de nuevo."
          iconColor="icon-blue"
        />
        <Card
          title="Colaboracion en equipo"
          icon={<BsPersonWorkspace />}
          description="Crea grupos, asigna tareas, y trabaja en equipo sin problemas. Perfecto para equipos de cualquier tamaño."
          iconColor="icon-purple"
        />
        <Card
          title="Recordatorios"
          icon={<CiBellOn />}
          description="Se notificado sobre las fechas limite proximas y sobre tareas importantes. "
          iconColor="icon-orange"
        />
        <Card
          title="Seguimiento de progreso"
          icon={<GoGraph />}
          description="Monitorea tu productividad con analiticas. Observa cuanto has conseguido."
          iconColor="icon-green"
        />
        <Card
          title="Acciones rapidas"
          icon={<PiLightningLight />}
          description="Añade tareas, crea grupos y maneja tu dia con nuestros atajos y comandos."
          iconColor="icon-yellow"
        />
        <Card
          title="Seguridad y privacidad"
          icon={<IoShieldOutline />}
          description="Tus datos estan protegidos con nosotros. Nos tomamos tu privacidad seriamente y nunca compartiremos tu informacion."
          iconColor="icon-red"
        />
      </section>
    </section>
  );
}

export default Feature_cards;
