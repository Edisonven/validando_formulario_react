const socialButtons = ({ icons, link }) => {
  return (
    <a href={link}>
      <img src={icons} alt="icono" />
    </a>
  );
};

export default socialButtons;
