import { Link } from 'react-router-dom';
import '../styles/footer.css'

export const Footer = () => {
  return (
    <footer className="footer">
      <p>&copy; 2025 <strong>Cufy</strong> . Todos los derechos reservados.</p>
      <Link to="/terminosCondiciones">
        <p className="tyc">Terminos y condiciones</p>
      </Link>
      <div className="footer-links">

      </div>
    </footer>
  );
};
