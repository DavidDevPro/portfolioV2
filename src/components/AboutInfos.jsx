import PropTypes from "prop-types";

const AboutInfos = ({ label, value }) => {
  return (
    <>
      <li>
        <span className="title">{label}</span>
        <span className="value">{value}</span>
      </li>
    </>
  );
};

AboutInfos.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
};

export default AboutInfos;
