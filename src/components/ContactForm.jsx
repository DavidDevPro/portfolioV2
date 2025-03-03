import emailjs from "@emailjs/browser";
import Label from "./Label";
import Input from "./Input";
import Button from "./Button";
import { useState } from "react";
import { TbArrowBigRightLinesFilled } from "react-icons/tb";

const ContactForm = () => {
  const [confirmSend, setConfirmSend] = useState("");
  const [confirmSendType, setConfirmSendType] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);

    emailjs
      .send("service_tpqik75", "template_em79ouh", data, "KzwZVeKmyX_iMyiol")
      .then((response) => {
        console.log("SUCCESS!", response.status, response.text);
        setConfirmSend("Votre message a été envoyé avec succès.");
        setConfirmSendType("success");
        e.target.reset();
      })
      .catch((err) => {
        console.log("FAILED...", err);
        setConfirmSend("Échec de l'envoi de votre message. Veuillez réessayer");
        setConfirmSendType("error");
      });
  };

  return (
    <div className="contact_form">
      <form onSubmit={onSubmit}>
        <h2>Formulaire de contact</h2>

        <Label htmlFor={"subject"} className="labelform">
          <span className="contact_icon">
            <TbArrowBigRightLinesFilled />
          </span>
          Objet de la demande :
        </Label>
        <Input
          type="text"
          id="subject"
          name="subject"
          placeholder="Votre demande ..."
          required
        />

        <Label htmlFor={"from_name"} className="labelform">
          <span className="contact_icon">
            <TbArrowBigRightLinesFilled />
          </span>
          Votre Nom :
        </Label>
        <Input
          type="text"
          id="from_name"
          name="from_name"
          placeholder="Votre nom ..."
          required
        />

        <Label htmlFor={"email"} className="labelform">
          <span className="contact_icon">
            <TbArrowBigRightLinesFilled />
          </span>
          Votre Email :
        </Label>
        <Input
          type="email"
          id="email"
          name="email"
          placeholder="Votre email ..."
          required
        />

        <Label htmlFor={"message"} className="labelform">
          <span className="contact_icon">
            <TbArrowBigRightLinesFilled />
          </span>
          Votre Message :
        </Label>
        <textarea
          id="message"
          name="message"
          placeholder="Votre message ..."
          required
        />

        {confirmSend && (
          <p className={`confirmation_message ${confirmSendType}`}>
            {confirmSend}
            {setTimeout(() => {
              setConfirmSend("");
              setConfirmSendType("");
            }, 4000)}
          </p>
        )}

        <Button type="submit" className="button contactButton" text="Envoyer" />
      </form>
    </div>
  );
};

export default ContactForm;
