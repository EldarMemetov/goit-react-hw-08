import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { register } from "../../redux/auth/operations";
import styles from "./RegisterForm.module.css";

const validationSchema = Yup.object({
  name: Yup.string().required("Required"),
  email: Yup.string().email("Invalid email address").required("Required"),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("Required"),
});

export const RegisterForm = () => {
  const dispatch = useDispatch();

  return (
    <Formik
      initialValues={{ name: "", email: "", password: "" }}
      validationSchema={validationSchema}
      onSubmit={(values, { resetForm }) => {
        dispatch(register(values))
          .then(() => {
            console.log("Registration success");
          })
          .catch((error) => {
            console.error("Registration error", error);
          });

        resetForm();
      }}
    >
      <Form className={styles.form} autoComplete="off">
        <div className={styles.fieldContainer}>
          <label className={styles.label} htmlFor="name">
            Username
          </label>
          <Field type="text" name="name" id="name" className={styles.input} />
          <ErrorMessage name="name" component="p" className={styles.error} />
        </div>
        <div className={styles.fieldContainer}>
          <label className={styles.label} htmlFor="email">
            Email
          </label>
          <Field
            type="email"
            name="email"
            id="email"
            className={styles.input}
          />
          <ErrorMessage name="email" component="p" className={styles.error} />
        </div>
        <div className={styles.fieldContainer}>
          <label className={styles.label} htmlFor="password">
            Password
          </label>
          <Field
            type="password"
            name="password"
            id="password"
            className={styles.input}
          />
          <ErrorMessage
            name="password"
            component="p"
            className={styles.error}
          />
        </div>
        <button type="submit" className={styles.button}>
          Register
        </button>
      </Form>
    </Formik>
  );
};
