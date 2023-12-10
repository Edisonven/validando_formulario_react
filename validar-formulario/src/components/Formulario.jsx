import Button from "react-bootstrap/Button";
import { useState } from "react";

const Formulario = () => {
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [password_1, setPasswrod_1] = useState("");
  const [password_2, setPassword_2] = useState("");
  return (
    <form className="form__container">
      <div className="form-group">
        <input
          onChange={(element) => setNombre(element.target.value)}
          value={nombre}
          type="text"
          name="nombre"
          className="form-control"
          placeholder="Nombre"
        />
        <input
          onChange={(element) => setEmail(element.target.value)}
          value={email}
          type="email"
          name="email"
          className="form-control"
          placeholder="email@ejemplo.cl"
        />
        <input
          onChange={(element) => setPasswrod_1(element.target.value)}
          value={password_1}
          type="password"
          name="password-1"
          className="form-control"
          placeholder="Contraseña"
        />
        <input
          onChange={(element) => setPassword_2(element.target.value)}
          value={password_2}
          type="password"
          name="password-2"
          className="form-control"
          placeholder="Confirmar contraseña"
        />
      </div>
      <Button type="submit" className="btn-1" variant="success">
        Registrarse
      </Button>
    </form>
  );
};

export default Formulario;
