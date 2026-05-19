import { Outlet } from "react-router";
import "./App.css";
import Header from "./components/Header/Header.jsx";
import Footer from "./components/Footer/Footer.jsx";

function App() {
  return (
    <section className="app-container">
      <header className="app-header">
        <Header />
      </header>
      <main className="app-main-content">
        <Outlet />
      </main>
      <footer className="app-footer">
        <Footer />
      </footer>
    </section>
  );
}

export default App;
