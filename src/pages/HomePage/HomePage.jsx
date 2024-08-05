import DocumentTitle from "../../components/DocumentTitle";
import css from "../HomePage/HomePage.module.css";

export default function HomePage() {
  return (
    <>
      <DocumentTitle>Home</DocumentTitle>
      <div className={css.container}>
        <h1 className={css.title}>Phonebook </h1>
        <p className={css.description}>
          Welcome to your Phonebook! Here you can effortlessly manage your
          contacts—add new ones, edit existing ones, and remove those you no
          longer need. Use the search feature to quickly find any contact by
          their phone number or name.
        </p>
      </div>
    </>
  );
}
