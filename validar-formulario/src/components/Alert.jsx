import Alert from "react-bootstrap/Alert";

function formAlert(error, éxito) {
  return (
    <>
      <Alert variant={variant}>{error}{éxito}</Alert>)
    </>
  );
}

export default formAlert;
