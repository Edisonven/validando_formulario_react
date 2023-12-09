const Formulario = () => {
    return (
      <>
        <h1>Crea una cuenta</h1>
        <span>O usa tu email para registrarte</span>
        <div className="form-group">
          <input
            type="text"
            name="nombre"
            className="form-control"
            placeholder="Nombre"
          />
          <input
            type="text"
            name="nombre"
            className="form-control"
            placeholder="email@ejemplo.cl"
          />
          <input
            type="text"
            name="nombre"
            className="form-control"
            placeholder="Contraseña"
          />
          <input
            type="text"
            name="nombre"
            className="form-control"
            placeholder="Confirmar contraseña"
          />
        </div>
      </>
    );
  };
  
  export default Formulario;
  