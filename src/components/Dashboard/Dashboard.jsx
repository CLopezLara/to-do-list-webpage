import InfoCards from "./Dashboard Components/info Cards/InfoCards";
import "./Dashboard.css";
import { MdOutlineTaskAlt } from "react-icons/md";
import { FaArrowTrendUp } from "react-icons/fa6";
import { FaRegClock } from "react-icons/fa";
import { FaUserGroup } from "react-icons/fa6";
function Dashboard() {
  return (
    <section className="dashboard-container">
      <header className="dashboard-header">
        <h2 className="dashboard-title">Bienvenido de vuelta, John!</h2>
        <p className="dashboard-description">
          Tienes 12 tareas pendientes para esta semana
        </p>
      </header>
      <section className="info-cards-section ">
        <InfoCards
          title={"Tareas totales"}
          quantity={48}
          icon={<MdOutlineTaskAlt />}
          color="info-blue"
        />
        <InfoCards
          title={"Completadas hoy"}
          quantity={8}
          icon={<FaArrowTrendUp />}
          color="info-green"
        />
        <InfoCards
          title={"Atrasadas"}
          quantity={3}
          icon={<FaRegClock />}
          color="info-red"
        />
        <InfoCards
          title={"Grupos activos"}
          quantity={5}
          icon={<FaUserGroup />}
          color="info-purple"
        />
      </section>
      <section>
        <h2>Las tareas de hoy</h2>
      </section>
      <aside></aside>
    </section>
  );
}

export default Dashboard;
