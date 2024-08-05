import DocumentTitle from "../../components/DocumentTitle";
import { RegisterForm } from "../../components/RegisterForm/RegisterForm";
import css from "./RegisterPage.module.css";

export default function RegisterPage() {
  return (
    <div className={css.container}>
      <DocumentTitle>Registration</DocumentTitle>
      <h1 className={css.title}>Create a New Account</h1>
      <RegisterForm />
    </div>
  );
}
