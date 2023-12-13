import Button from "react-bootstrap/Button";
import { useState } from "react";
import Alert from "react-bootstrap/Alert";

const Formulario = () => {
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [password_1, setPasswrod_1] = useState("");
  const [password_2, setPassword_2] = useState("");
  const [passwordError, setPasswordError] = useState(false);
  const [passwordMinLength, setPasswordMinLength] = useState(false);
  const [mailFormatError, setMailFormatError] = useState(false);
  const validEmail = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;

  const validarFormulario = (submit) => {
    submit.preventDefault();
    if (password_1 !== password_2) {
      setPasswordError(true);
      return;
    }
    setPasswordError(false);

    if (!validEmail.test(email) && email.length > 0) {
      setMailFormatError(true);
      return;
    }
    setMailFormatError(false);

    if (password_1.length > 1 && password_1.length < 10) {
      setPasswordMinLength(true);
      return;
    }
    setPasswordMinLength(false);
  };

  return (
    <form className="form__container" onSubmit={validarFormulario}>
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
      {passwordError ? (
        <Alert className="alert alert__contraseña" variant="danger">
          Las contraseñas no son iguales
        </Alert>
      ) : null}
      {mailFormatError ? (
        <Alert className="alert alert__mail" variant="danger">
          Formato de correo incorrecto
        </Alert>
      ) : null}
      {passwordMinLength ? (
        <Alert className="alert alert__mail" variant="danger">
          La contraseña debe tener mínimo 10 caractéres
        </Alert>
      ) : null}
    </form>
  );
};

export default Formulario;
