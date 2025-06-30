import { Footer } from "../ui/Footer";
import { Icons } from "../ui/Icons";
import { Navbar } from "../ui/Navbar";
import "../styles/index.css";

function LandingPage() {
return (
    <div>
      <Navbar />

      <section className="first-container">
        <div className="container-home">
          <i className="iconoir-home icon-a"></i>
          <h1>Café para todos</h1>
          <h3>Un café según el gusto de la persona</h3>
          <button>MÁS INFORMACIÓN</button>
        </div>
        <Icons />
      </section>

      <section className="second-container">
        <h1>Café para todos</h1>
        <div className="container-second">
          <div className="container-second-right">
            <p className="text-second">
              <strong>Café</strong> de cualquier marca para <strong>empresas</strong>, <strong>gobierno</strong> y <strong>eventos</strong> en
              México. <strong>Calidad, sabor</strong> y <strong>entrega eficiente</strong> para cada reunión y
              jornada laboral.
            </p>
            <span>¡El café perfecto, cuando y donde lo necesites!</span>Add commentMore actions
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
export default LandingPage;
