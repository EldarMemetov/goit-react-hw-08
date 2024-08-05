import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import DocumentTitle from "../../components/DocumentTitle";
import ContactList from "../../components/ContactList/ContactList";
import ContactForm from "../../components/ContactForm/ContactForm";
import { fetchAll } from "../../redux/contacts/operations";
import { selectLoading } from "../../redux/contacts/selectors";
import css from "../ContactsPage/ContactsPage.module.css";
import { PropagateLoader } from "react-spinners";

export default function ContactsPage() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectLoading);

  useEffect(() => {
    dispatch(fetchAll());
  }, [dispatch]);

  return (
    <>
      <DocumentTitle>Your Contacts</DocumentTitle>
      <section className={css.container}>
        <h1 className={css.title}>Manage Your Contacts</h1>
        <ContactForm />
        {isLoading ? (
          <div className={css.loader}>
            <PropagateLoader color="#4a90e2" size={30} speedMultiplier={1.5} />
          </div>
        ) : (
          <ContactList />
        )}
      </section>
    </>
  );
}
