import { Link } from "react-router-dom";
import ContactForm from "../components/ContactForm";
import ContactText from "../components/ContactText";
import HeadPages from "../components/HeadPages";
import { MdAlternateEmail } from "react-icons/md";
import { PiArrowFatLinesDownFill } from "react-icons/pi";
import ScrollTo from "../components/ScrollTo";

const ContactPage = () => {
  return (
    <main>
      <div className="main">
        <div className="contact_img">
          <HeadPages headText={"Contact"} icon={<MdAlternateEmail />} />
          <section className="contact_section">
            <ContactText />
          </section>
          <Link to={`/contact#move_text2`}>
            <div className="scroll_button">
              <PiArrowFatLinesDownFill className="scroll_button_icon" />
            </div>
          </Link>
          <ScrollTo />
          <section className="contact_section_form">
            <ContactForm />
            <div id="move_text2"></div>
          </section>
        </div>
      </div>
    </main>
  );
};

export default ContactPage;
