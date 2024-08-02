import { Formik, Form, Field, ErrorMessage } from "formik";
import { useDispatch } from "react-redux";
import * as Yup from "yup";
import { addContact } from "../../redux/contactsOps";
import formModule from "./ContactForm.module.css";

const validationSchema = Yup.object().shape({
  name: Yup.string()
    .required("Required")
    .min(3, "Too Short!")
    .max(50, "Too Long!"),
  number: Yup.string()
    .required("Required")
    .min(3, "Too short")
    .max(50, "Too long"),
});

const ContactForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    dispatch(addContact(values));
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={{ name: "", number: "" }}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      <Form>
        <div className={formModule.bigContainerForm}>
          <div className={formModule.containerForm}>
            <label>Name</label>
            <Field name="name" type="text" />
            <ErrorMessage
              name="name"
              component="span"
              className={formModule.spanError}
            />
          </div>
          <div className={formModule.containerForm}>
            <label>Number</label>
            <Field name="number" type="text" />
            <ErrorMessage
              name="number"
              component="span"
              className={formModule.spanError}
            />
          </div>
          <button type="submit" className={formModule.buttonAdd}>
            Add contact
          </button>
        </div>
      </Form>
    </Formik>
  );
};

export default ContactForm;
