import Alert from "react-bootstrap/Alert";

function FormAlert({variant, error, exito}) {
  return (
    <>
      <Alert variant={variant}>{exito}{error}</Alert>
    </>
  );
}

export default FormAlert;
