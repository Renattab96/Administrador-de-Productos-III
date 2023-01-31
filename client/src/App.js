import "./App.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Formulario from "./component/Formulario";
import Listaproducto from "./component/Listaproducto";
import Main from "./view/Main";
import ListaUnitaria from "./component/ListaUnitaria";
import Editar from "./component/Editar";
// import '../styles/Formulario.css';
// import Formulario from './component/Formulario'
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <header>
      <h2>Gestor de Producto</h2>
      <nav>
          <ul>
            <li> <Link to="/formulario">Formulario</Link></li>
            <li> <Link to="/lista">En Stock</Link></li>
          </ul>
        </nav>
      </header>

       
        <Routes>
          {/* <Route path="./main" element={<Main />} /> */}
          <Route path="/formulario/*" element={<Formulario />} />
          <Route path="/lista" element={<Listaproducto />} />
          <Route path="/listaunitaria/:id" element={<ListaUnitaria />} />
          <Route path="/editar/:id" element={<Editar/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
