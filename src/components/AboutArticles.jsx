import PropTypes from "prop-types";

const AboutArticles = ({ text }) => {
  return (
    <>
      <p>{text}</p>
    </>
  );
};

AboutArticles.propTypes = {
  text: PropTypes.string.isRequired,
};
export default AboutArticles;
