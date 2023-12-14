import Alert from "react-bootstrap/Alert";

function FormAlert({ error, exito }) {
  return (
    <>
      <Alert>{exito}</Alert>
      <Alert>{error}</Alert>
    </>
  );
}

export default FormAlert;
