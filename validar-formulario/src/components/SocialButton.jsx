const socialButtons = ({icono1,icono2,icono3}) => {
  return (
    <a>
      <button className="icon">{icono1}</button>
      <button className="icon">{icono2}</button>
      <button className="icon">{icono3}</button>
    </a>
  );
};

export default socialButtons;
