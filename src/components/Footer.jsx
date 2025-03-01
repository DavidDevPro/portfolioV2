import dataIcons from "../data/footerIcons.json";
import { Config } from "../config";
import FooterIcons from "./FooterIcons";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { TfiEmail } from "react-icons/tfi";
import { Link } from "react-router-dom";

const Footer = () => {
  const anneeActuelle = new Date().getFullYear();
  const anneeDebut = 2023;
  let copyrightText = `© ${anneeDebut}`;

  if (anneeActuelle > anneeDebut) {
    copyrightText += ` - ${anneeActuelle}`;
  }
  copyrightText += ` David Changea | Tous Droits résérvés | Version : ${Config.version} | `;
  const icons = {
    FaTwitter: FaTwitter,
    FaLinkedinIn: FaLinkedinIn,
    FaFacebookF: FaFacebookF,
    FaGithub: FaGithub,
    TfiEmail: TfiEmail,
  };
  return (
    <footer>
      <div className="footer">
        <div className="footer_content">
          <div className="footer_content_copyright">
            <p>
              {copyrightText}
              <Link to="/mentions-legales" className="mentions_link">
                Mentions légales
              </Link>
            </p>
          </div>
          <div className="footer_content_boxIcon">
            {dataIcons.map((data, index) => {
              const Icon = icons[data.icon];
              return (
                <FooterIcons
                  key={`"data" + ${index}`}
                  url={data.href}
                  label={data["aria-label"]}
                >
                  <Icon size={20} />
                </FooterIcons>
              );
            })}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
