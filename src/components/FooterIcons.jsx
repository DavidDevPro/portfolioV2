import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const FooterIcons = ({ url, label, children }) => {
  return (
    <Link
      to={url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="footer_content_boxIcon_icon"
    >
      {children}
    </Link>
  );
};

FooterIcons.propTypes = {
  url: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default FooterIcons;
