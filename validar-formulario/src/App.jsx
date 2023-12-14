import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Registro from "./components/Registro";
import { useState } from "react";

function App() {
  const [error, setError] = useState("")
  const [exito, setExito] = useState("")
  return (
    <>
      <Registro error={error} exito={exito} setError={setError} setExito={setExito}></Registro>
    </>

  );
}
export default App;
