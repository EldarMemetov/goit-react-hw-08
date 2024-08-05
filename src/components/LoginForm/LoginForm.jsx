import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { logIn } from "../../redux/auth/operations";
import styles from "./LoginForm.module.css";

const validationSchema = Yup.object({
  email: Yup.string().email("Invalid email address").required("Required"),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("Required"),
});

export const LoginForm = () => {
  const dispatch = useDispatch();

  return (
    <Formik
      initialValues={{ email: "", password: "" }}
      validationSchema={validationSchema}
      onSubmit={(values, { resetForm }) => {
        dispatch(logIn(values));
        resetForm();
      }}
    >
      <Form className={styles.form} autoComplete="off">
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
          Log In
        </button>
      </Form>
    </Formik>
  );
};
