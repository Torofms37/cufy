import { Link } from "react-router-dom";
import "../../styles/tyc.css";

export const Terms = () => {
  return (
    <div className="general-terms">
      Acceder a nuestros servicios es igual a aceptar los&nbsp; 
      <Link className="terms" to="/terms">Términos y condiciones</Link>&nbsp;de uso.
    </div>
  );
};
