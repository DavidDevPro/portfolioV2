import PropTypes from "prop-types";

const Input = ({ name, type, id, placeholder, required }) => {
  return (
    <input
      name={name}
      type={type}
      id={id}
      placeholder={placeholder}
      required={required}
    />
  );
};

Input.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  required: PropTypes.bool.isRequired,
  placeholder: PropTypes.string,
};
export default Input;
