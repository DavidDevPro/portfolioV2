import PropTypes from "prop-types";
import { TbArrowBigRightLinesFilled } from "react-icons/tb";
import Button from "../components/Button";

const ProjectSectionLinks = ({ links }) => {
  return (
    <div id="move_text" className="one_project_section_link">
      {links.map((link, index) => (
        <div key={`link ${index}`} className="one_project_section_link_button">
          <TbArrowBigRightLinesFilled className="project_icon" />
          <a href={link.url} target="_blank" rel="noopener noreferrer">
            <Button
              type={"submit"}
              className={"button_project"}
              text={link.text}
            />
          </a>
        </div>
      ))}
    </div>
  );
};

ProjectSectionLinks.propTypes = {
  links: PropTypes.arrayOf(
    PropTypes.shape({
      url: PropTypes.string,
      text: PropTypes.string,
    })
  ).isRequired,
};

export default ProjectSectionLinks;
