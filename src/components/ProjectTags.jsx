import PropTypes from "prop-types";

const ProjectTags = ({ text }) => {
  return <p className="tag_item">{text}</p>;
};

ProjectTags.propTypes = {
  text: PropTypes.string.isRequired,
};
export default ProjectTags;
