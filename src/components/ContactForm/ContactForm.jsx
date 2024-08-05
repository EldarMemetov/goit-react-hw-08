import styles from "./ContactForm.module.css";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { addContacts } from "../../redux/contacts/operations";

export default function ContactForm() {
  const dispatch = useDispatch();

  const initialValues = {
    name: "",
    number: "",
  };

  const handleSubmit = (values, actions) => {
    dispatch(addContacts(values));
    actions.resetForm();
  };

  const validationSchema = Yup.object().shape({
    name: Yup.string()
      .min(3, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
    number: Yup.string()
      .matches(/^\d+$/, "Only digits are allowed")
      .min(6, "Must be at least 6 digits")
      .required("Required"),
  });

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={validationSchema}
    >
      <Form className={styles.form}>
        <div className={styles.fieldContainer}>
          <label className={styles.label} htmlFor="name">
            Name
          </label>
          <Field className={styles.input} type="text" name="name" id="name" />
          <ErrorMessage className={styles.error} name="name" component="p" />
        </div>

        <div className={styles.fieldContainer}>
          <label className={styles.label} htmlFor="number">
            Number
          </label>
          <Field
            className={styles.input}
            type="text"
            name="number"
            id="number"
          />
          <ErrorMessage className={styles.error} name="number" component="p" />
        </div>

        <button className={styles.submitButton} type="submit">
          Add Contact
        </button>
      </Form>
    </Formik>
  );
}
