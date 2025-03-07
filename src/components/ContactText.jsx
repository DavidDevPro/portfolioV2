import data from "../data/textContact.json";

const ContactText = () => {
  return (
    <div className="contact_text">
      <h1>{data.title}</h1>
      <p className="text_top">{data.textTop}</p>
      <p className="text_bottom">{data.textBottom}</p>
      <p className="text_question">{data.questionText}</p>
      <p className="text_answer">{data.answerText}</p>
    </div>
  );
};

export default ContactText;
