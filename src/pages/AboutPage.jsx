import HeadPages from "../components/HeadPages";
import dataInfos from "../data/personal.json";
import dataArticles from "../data/articles.json";
import AboutInfos from "../components/AboutInfos";
import AboutArticles from "../components/AboutArticles";
import { FaSass } from "react-icons/fa6";
import { FaReact } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { TbBrandNodejs } from "react-icons/tb";
import Button from "../components/Button";
import { LiaInfoSolid } from "react-icons/lia";

const AboutPage = () => {
  return (
    <main>
      <HeadPages headText="A propos de moi" icon={<LiaInfoSolid />} />
      <section className="main_about_section">
        <div className="about">
          <div className="about_text">
            <h3>Développeur Front-End</h3>
            <article>
              {dataArticles.map((article, index) => (
                <AboutArticles key={`article + ${index}`} text={article.text} />
              ))}
            </article>
            <div className="about_text_website">
              <p>Mon site Web</p>
              <img
                src="./images/arrow-right.png"
                alt="image de fléche droite"
              />
              <a
                href="https://davidwebprojects.fr/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  className={"button websiteButton"}
                  type={"button"}
                  icon={"/images/click.png"}
                  text={"David Web Projects"}
                />
              </a>
            </div>
          </div>

          <div className="about_infos">
            <h3>Informations personnelles</h3>
            <ul>
              {dataInfos.map((info, index) => (
                <AboutInfos
                  key={`info + ${index}`}
                  label={info.label}
                  value={info.value}
                />
              ))}
            </ul>
          </div>
        </div>

        <div className="about_wrapper">
          <div className="about_wrapper_content">
            <div>
              <FaSass />
            </div>
            <div>
              <FaReact />
            </div>
            <div>
              <FaGithub />
            </div>
            <div>
              <TbBrandNodejs />
            </div>
            <div>
              <IoLogoJavascript />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default AboutPage;
