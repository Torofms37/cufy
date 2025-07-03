import "../../styles/loginpage.css";
import Cafe from '../../assets/bringcafe.png'
import { Logo } from "../../ui/Logo";
import { Terms } from "../../ui/components/terms";


export const LoginPage = () => {
  return (
    <div className="register-page">

    <Logo />

      <h2>Inicia sesión</h2>

      <div className="fields-form">
        <h3>Llena los campos</h3>

        <form className="form-fields">
          <div className="field">
            <label htmlFor="email">Correo electrónico</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div className="field">
            <label htmlFor="password">Contraseña</label>
            <input type="password" id="password" name="password" required />
          </div>
        </form>
        <button type="submit" className="btn-submit">
          Iniciar sesión
        </button>

        <img className="img-cafe" src={Cafe} alt="bring cafe" />
      </div>

      <div className="ya-login">
        <h3>¿Todavía no tienes cuenta?</h3>
        <button className="btn-submit">Registrate</button>
      </div>
      <Terms />
    </div>
  );
};
