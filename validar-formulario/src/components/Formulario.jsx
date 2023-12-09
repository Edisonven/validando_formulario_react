import Button from "react-bootstrap/Button";
const Formulario = () => {
  return (
    <form className="form__container">
      <div className="form-group">
        <input
          type="text"
          name="nombre"
          className="form-control"
          placeholder="Nombre"
        />
        <input
          type="email"
          name="email"
          className="form-control"
          placeholder="email@ejemplo.cl"
        />
        <input
          type="password"
          name="password-1"
          className="form-control"
          placeholder="Contraseña"
        />
        <input
          type="password"
          name="password-2"
          className="form-control"
          placeholder="Confirmar contraseña"
        />
      </div>
      <Button type="submit" className="btn-1" variant="success">Registrarse</Button>
    </form>
  );
};

export default Formulario;
