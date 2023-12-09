import Formulario from "./Formulario";
import SocialButtons from "./SocialButton";
const Registro = () => {
  return (
    <>
      <h1>Crea una cuenta</h1>
      <SocialButtons icons="./src/assets/facebook.svg" />
      <SocialButtons icons="./src/assets/linkedin.svg" />
      <SocialButtons icons="./src/assets/github.svg" />
      <p>O usa tu email para registrarte</p>
      <Formulario></Formulario>
    </>
  );
};

export default Registro;
