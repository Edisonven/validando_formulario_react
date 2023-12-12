import Alert from "react-bootstrap/Alert";

function FormAlert({variant, error, éxito}) {
  return (
    <>
      <Alert variant={variant}>{éxito}{error}</Alert>
    </>
  );
}

export default FormAlert;
