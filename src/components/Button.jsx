import PropTypes from "prop-types";

const Button = ({ className, text, type, icon, animationKey }) => {
  return (
    <button className={className} type={type}>
      {icon && (
        <img
          src={icon}
          alt=""
          className="button-icon"
          style={{ animationDelay: `${animationKey}s` }} // Décalage unique
        />
      )}
      {text}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  icon: PropTypes.string, // Ajout d'une icône optionnelle
  animationKey: PropTypes.number, // Clé pour le décalage d'animation
};

export default Button;
