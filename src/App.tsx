import "./index.css";
import { Navbar } from "./ui/Navbar";

function App() {
  return (
    <div>
      <Navbar />
      <div className="first-container">
        <div className="container-home">
          <i className="iconoir-home"></i>
          <h1>Café para todos</h1>
          <h3>Un café según el gusto de la persona</h3>
          <button>MÁS INFORMACIÓN</button>
        </div>
      </div>
    </div>
  );
}

export default App;
