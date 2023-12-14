import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Registro from "./components/Registro";
import { useState } from "react";

function App() {
  const [error, setError] = useState("Completa todos los campos")
  const [exito, setExito] = useState("Formulario enviado")
  return (
    <>
      <Registro error={error} exito={exito} setError={setError} setExito={setExito}></Registro>
    </>

  );
}
export default App;
