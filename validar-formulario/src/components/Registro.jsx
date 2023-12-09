import Formulario from "./Formulario";
import SocialButtons from "./SocialButton";
const Registro = () => {
  return (
    <>
      <h1>Crea una cuenta</h1>
      <SocialButtons icons="./src/assets/facebook.svg" link="#" />
      <SocialButtons icons="./src/assets/linkedin.svg" link="#" />
      <SocialButtons icons="./src/assets/github.svg" link="#" />
      <p>O usa tu email para registrarte</p>
      <Formulario></Formulario>
    </>
  );
};

export default Registro;
