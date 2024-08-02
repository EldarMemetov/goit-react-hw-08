import peopleContact from "./contact.module.css";
import { HiUser } from "react-icons/hi";
import { FaPhoneAlt } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactsOps";

const Contact = ({ name, number, id }) => {
  const dispatch = useDispatch();

  const handleDelete = () => dispatch(deleteContact(id));

  return (
    <li className={peopleContact.listInfo}>
      <p className={peopleContact.containerSvg}>
        <HiUser size={16} />
        {name}
      </p>
      <p className={peopleContact.containerSvg}>
        <FaPhoneAlt size={14} />
        {number}
      </p>
      <button onClick={handleDelete} className={peopleContact.buttonDelete}>
        Delete
      </button>
    </li>
  );
};

export default Contact;
