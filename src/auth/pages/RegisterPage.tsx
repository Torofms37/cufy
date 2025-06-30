import '../../styles/registerpage.css'
import Cafe from '../../assets/bringcafe.png'

export const RegisterPage = () => {
  return (
    <div className="register-page">

      <h2>Crea una cuenta gratis</h2>

      <div className="fields-form">
        <h3>Llena los campos</h3>

        <form>
          <div className="field">
            <label htmlFor="name">Nombre</label>
            <input type="text" id="name" name="name" required />
          </div>
          <div className="field">
            <label htmlFor="email">Correo electrónico</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div className="field">
            <label htmlFor="password">Contraseña</label>
            <input type="password" id="password" name="password" required />
          </div>
          <div className="field">
            <label htmlFor="confirm-password">Confirmar contraseña</label>
            <input type="password" id="confirm-password" name="confirm-password" required />
          </div>
          <div className="field">
            <label htmlFor="terms">
              <input type="checkbox" id="terms" name="terms" required />
              Acepto los términos y condiciones
            </label>
            <button className="btn-submit">Registrarse</button>
            <img className='img-cafe' src={Cafe} alt="bring cafe" />
          </div>
        </form>

      </div>

            <div className="ya-login">
        <h3>¿Ya tienes cuenta?</h3>
        <button className="btn-submit">Inicia sesión</button>
      </div>
    </div>
  )
}
