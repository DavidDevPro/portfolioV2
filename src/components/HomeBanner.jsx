import PropTypes from "prop-types";

const HomeBanner = ({ imgSrc }) => {
  return (
    <img src={imgSrc} className="banner_img" alt="image de la page d'accueil" />
  );
};

HomeBanner.propTypes = {
  imgSrc: PropTypes.string.isRequired,
};

export default HomeBanner;
