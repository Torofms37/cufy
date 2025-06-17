import "./index.css";
import { Icons } from "./ui/Icons";
import { Navbar } from "./ui/Navbar";

function App() {
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
            <p>
              Café de cualquier marca para empresas, gobierno y eventos en
              México. Calidad, sabor y entrega eficiente para cada reunión y
              jornada laboral.
            </p>
            <span>¡El café perfecto, cuando y donde lo necesites!</span>
          </div>
        </div>
      </section>
    </div>
  );
}
export default App;
