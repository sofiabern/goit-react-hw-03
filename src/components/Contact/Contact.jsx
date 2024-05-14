import { FaUser, FaPhone } from "react-icons/fa6";
import css from "./Contact.module.css";

function Contact({ contact, onDelete }) {
  return (
    <div className={css["contact-wrapper"]}>
      <div className={css["contact-info"]}>
          <p className={css["contact-text"]}>
            <FaUser className={css.icon} />
            {contact.name}
          </p>
          <p className={css["contact-text"]}>
            <FaPhone className={css.icon} />
            {contact.number}
          </p>
      </div>
      <button onClick={()=> onDelete(contact.id)}>Delete</button>
    </div>
  );
}

export default Contact;
