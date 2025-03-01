import { useEffect, useState } from "react";
import data from "../data/textContact.json";

const ContactText = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [transition, setTransition] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setTransition(false);
      setTimeout(() => {
        setCurrentIndex((lastIndex) => (lastIndex === 0 ? 1 : 0));
        setTransition(true);
      }, 500); // Attendre la fin de la transition avant de changer l'index
    }, 40000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={`contact_text ${transition ? "fade-in" : "fade-out"}`}>
      <h1>{data[currentIndex].title}</h1>
      <p className="text_top">{data[currentIndex].textTop}</p>
      <p className="text_bottom">{data[currentIndex].textBottom}</p>
      <p className="text_question">{data[currentIndex].questionText}</p>
      <p className="text_answer">{data[currentIndex].answerText}</p>
    </div>
  );
};

export default ContactText;
