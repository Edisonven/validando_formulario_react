import Formulario from "./Formulario";
import SocialButtons from "./SocialButton";
const Registro = () => {
  return (
    <div className="container">
      <h1 className="form__title">Crea una cuenta</h1>
      <div className="icons__container">
        <SocialButtons icons="./src/assets/facebook.svg" link="#" />
        <SocialButtons icons="./src/assets/linkedin.svg" link="#" />
        <SocialButtons icons="./src/assets/github.svg" link="#" />
      </div>
      <p className="form__parrafo">O usa tu email para registrarte</p>
      <Formulario></Formulario>
    </div>
  );
};

export default Registro;
