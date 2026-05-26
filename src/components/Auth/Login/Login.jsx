import "./Login.css";
import logo from "../../../images/to-do-list-logo.png";
import { FcGoogle } from "react-icons/fc";
function Login() {
  return (
    <section className="login-container">
      <header className="login-header">
        <div>
          <img src={logo} className="login-logo" />
          <span className="login-brand">ToDoList</span>
        </div>
        <p className="login-description">
          Bienvenido de regreso! Por favor inicia sesión en tu cuenta.
        </p>
      </header>

      <form className="login-form">
        <h3 className="form-title">Iniciar Sesión</h3>
        <div>
          <label className="form-label" htmlFor="email">
            Correo electrónico
          </label>
          <input
            className="form-input"
            type="email"
            id="email"
            name="email"
            autoComplete="email"
            required
            placeholder="tu@ejemplo.com"
          ></input>
        </div>
        <div>
          {" "}
          <label className="form-label" htmlFor="password">
            Contraseña
          </label>
          <input
            className="form-input"
            type="password"
            id="password"
            name="password"
            required
          ></input>
        </div>

        <button className="form-button" type="submit">
          Iniciar sesión
        </button>
        <div class="form-divisor-line">
          <span class="divisor-label">O continua con</span>
        </div>
        <button className="google-login">
          <FcGoogle style={{ fontSize: "1.5rem" }} />
          Google
        </button>
      </form>
    </section>
  );
}

export default Login;
