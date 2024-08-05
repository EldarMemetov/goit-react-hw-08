import { useSelector } from "react-redux";
import Contact from "../Contact/Contact";
import styles from "../ContactList/ContactList.module.css";
import { selectFilteredContacts } from "../../redux/contacts/selectors";

export default function ContactList() {
  const filteredContacts = useSelector(selectFilteredContacts);

  return (
    <div>
      <ul className={styles.contactList}>
        {filteredContacts.map((contact) => (
          <li className={styles.contactItem} key={contact.id}>
            <Contact data={contact} />
          </li>
        ))}
      </ul>
    </div>
  );
}
