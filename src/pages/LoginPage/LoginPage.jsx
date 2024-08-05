import DocumentTitle from "../../components/DocumentTitle";
import { LoginForm } from "../../components/LoginForm/LoginForm";
import css from "./LoginPage.module.css";

export default function LoginPage() {
  return (
    <div className={css.container}>
      <DocumentTitle>Login</DocumentTitle>
      <h1 className={css.title}>Login to Your Account</h1>
      <LoginForm />
    </div>
  );
}
