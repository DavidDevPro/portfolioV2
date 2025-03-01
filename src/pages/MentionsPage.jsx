import HeadPages from "../components/HeadPages";
import { IoDocumentTextOutline } from "react-icons/io5";
import mentions from "../data/mentions.json";

const MentionsPage = () => {
  return (
    <main>
      <HeadPages headText="Mentions légales" icon={<IoDocumentTextOutline />} />

      {mentions.map((item, index) => (
        <article key={`item ${index}`} className="mentions">
          <h3 className="mention__title">{item.title}</h3>
          <p className="mention__text">{item.text}</p>
        </article>
      ))}
    </main>
  );
};

export default MentionsPage;
