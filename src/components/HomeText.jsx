import { Link } from "react-router-dom";
import Button from "./Button";

const HomeText = () => {
  return (
    <div className="home_text">
      <h2>Bonjour,</h2>
      <div className="home_text_name">
        <h3>Je suis </h3>
        <h4>David</h4>
      </div>
      <h5>Développeur Front-End</h5>
      <div className="homeButton">
        <Link to="/contact">
          <Button
            className="button"
            type="submit"
            icon="/images/enveloppe.png"
            text="Contactez-moi"
            animationKey={0}
          />
        </Link>
        <a
          href="https://davidwebprojects.fr/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button
            className="button buttonWebsite"
            type="button"
            text="David Web Projects"
            icon="/images/logo-landing.png"
            animationKey={1.5}
          />
        </a>
      </div>
    </div>
  );
};

export default HomeText;
