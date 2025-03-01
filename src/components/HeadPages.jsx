import PropTypes from "prop-types";

const HeadPages = ({ headText, icon }) => {
  return (
    <div className="head_page">
      <h2>{headText}</h2>
      <span>{icon}</span>
    </div>
  );
};

HeadPages.propTypes = {
  headText: PropTypes.string.isRequired,
  icon: PropTypes.object.isRequired,
};
export default HeadPages;
