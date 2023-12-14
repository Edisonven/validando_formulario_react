import Button from "react-bootstrap/Button";
import { useState } from "react";
import Alert from "react-bootstrap/Alert";

const Formulario = ({ setError, setExito }) => {
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [password_1, setPasswrod_1] = useState("");
  const [password_2, setPassword_2] = useState("");
  const validEmail = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
  const [errores, setErrores] = useState(false);

  const validarFormulario = (submit) => {
    submit.preventDefault();
    if (password_1 !== password_2) {
      return setErrores("Las contraseñas no son iguales");
    } else if (!validEmail.test(email) && email.length > 0) {
      return setErrores("Formato de correo no válido");
    } else if (password_1.length > 1 && password_1.length < 10) {
      return setErrores("La contraseña debe tener mínimo 10 caracteres");
    }

    setErrores("");

    if (
      nombre.length > 0 &&
      email.length > 0 &&
      password_1.length > 0 &&
      password_2.length > 0
    ) {
      setExito("¡Te has registrado con éxito!");
      setError("");
    } else {
      setError("¡Completa todos los campos!");
      setExito("");
    }
  };

  return (
    <form className="form__container" onSubmit={(e) => validarFormulario(e)}>
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
          type="text"
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
      {errores ? (
        <Alert className="alert alert__contraseña" variant="danger">
          {errores}
        </Alert>
      ) : null}
    </form>
  );
};

export default Formulario;
